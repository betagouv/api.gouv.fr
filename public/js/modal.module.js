/*! DSFR v1.0.0-rc1.0 | restricted use */

const namespace = 'dsfr';

const api = window[namespace] || { core: {} };
window[namespace] = api;

const MODAL_SELECTOR = api.core.ns.selector('modal');
const MODAL_CLASS = api.core.ns('modal');
const NO_SCROLL_CLASS = api.core.ns('no-scroll');
const SCROLL_SHADOW_CLASS = api.core.ns('scroll-shadow');
const MODAL_BODY_SELECTOR = api.core.ns.selector('modal__body');
const OFFSET_MOBILE = 32; // 32px => 8v => 2rem

const unordereds = [
  '[tabindex="0"]',
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false" i])',
  'details>summary:first-of-type',
  'details'
];

const UNORDEREDS = unordereds.join();

const ordereds = [
  '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
];

const ORDEREDS = ordereds.join();

const isFocusable = (element, container) => {
  if (window.getComputedStyle(element).visibility === 'hidden') return false;
  if (container === undefined) container = element;

  while (container.contains(element)) {
    if (window.getComputedStyle(element).display === 'none') return false;
    element = element.parentElement;
  }

  return true;
};

class FocusTrap {
  constructor (onTrap, onUntrap) {
    this.element = null;
    this.activeElement = null;
    this.onTrap = onTrap;
    this.onUntrap = onUntrap;
    this.waiting = this.wait.bind(this);
    this.handling = this.handle.bind(this);
    this.current = null;
  }

  get trapped () { return this.element !== null; }

  trap (element) {
    if (this.trapped) this.untrap();

    this.element = element;
    this.isTrapping = true;
    this.wait();

    if (this.onTrap) this.onTrap();
  }

  wait () {
    if (!isFocusable(this.element)) {
      api.core.engine.renderer.next(this.waiting);
      return;
    }

    this.trapping();
  }

  trapping () {
    if (!this.isTrapping) return;
    this.isTrapping = false;
    const focusables = this.focusables;
    if (focusables.length) focusables[0].focus();
    this.element.setAttribute('aria-modal', true);
    this.element.addEventListener('keydown', this.handling);

    this.stunneds = [];
    // this.stun(document.body);
  }

  stun (node) {
    for (const child of node.children) {
      if (child === this.element) continue;
      if (child.contains(this.element)) {
        this.stun(child);
        continue;
      }
      this.stunneds.push(new Stunned(child));
    }
  }

  handle (e) {
    if (e.keyCode !== 9) return;

    const focusables = this.focusables;
    if (focusables.length === 0) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    const index = focusables.indexOf(document.activeElement);

    if (e.shiftKey) {
      if (!this.element.contains(document.activeElement) || index < 1) {
        e.preventDefault();
        last.focus();
      } else if (document.activeElement.tabIndex > 0 || focusables[index - 1].tabIndex > 0) {
        e.preventDefault();
        focusables[index - 1].focus();
      }
    } else {
      if (!this.element.contains(document.activeElement) || index === focusables.length - 1 || index === -1) {
        e.preventDefault();
        first.focus();
      } else if (document.activeElement.tabIndex > 0) {
        e.preventDefault();
        focusables[index + 1].focus();
      }
    }
  }

  get focusables () {
    let unordereds = [...this.element.querySelectorAll(UNORDEREDS)];

    /**
     *  filtrage des radiobutttons de même name (la navigations d'un groupe de radio se fait à la flèche et non pas au tab
     **/
    const radios = [...document.documentElement.querySelectorAll('input[type="radio"]')];

    if (radios.length) {
      const groups = {};

      for (const radio of radios) {
        const name = radio.getAttribute('name');
        if (groups[name] === undefined) groups[name] = new RadioButtonGroup(name);
        groups[name].push(radio);
      }

      unordereds = unordereds.filter((unordered) => {
        if (unordered.tagName.toLowerCase() !== 'input' || unordered.getAttribute('type').toLowerCase() !== 'radio') return true;
        const name = unordered.getAttribute('name');
        return groups[name].keep(unordered);
      });
    }

    const ordereds = [...this.element.querySelectorAll(ORDEREDS)];

    ordereds.sort((a, b) => a.tabIndex - b.tabIndex);

    const noDuplicates = unordereds.filter((element) => ordereds.indexOf(element) === -1);
    const concateneds = ordereds.concat(noDuplicates);
    return concateneds.filter((element) => element.tabIndex !== '-1' && isFocusable(element, this.element));
  }

  untrap () {
    if (!this.trapped) return;
    this.isTrapping = false;

    this.element.removeAttribute('aria-modal');
    this.element.removeEventListener('keydown', this.handling);
    this.element = null;

    // for (const stunned of this.stunneds) stunned.unstun();
    // this.stunneds = [];

    if (this.onUntrap) this.onUntrap();
  }
}

class Stunned {
  constructor (element) {
    this.element = element;
    this.hidden = element.getAttribute('aria-hidden');
    this.inert = element.getAttribute('inert');

    this.element.setAttribute('aria-hidden', true);
    this.element.setAttribute('inert', '');
  }

  unstun () {
    if (this.hidden === null) this.element.removeAttribute('aria-hidden');
    else this.element.setAttribute('aria-hidden', this.hidden);

    if (this.inert === null) this.element.removeAttribute('inert');
    else this.element.setAttribute('inert', this.inert);
  }
}

class RadioButtonGroup {
  constructor (name) {
    this.name = name;
    this.buttons = [];
  }

  push (button) {
    this.buttons.push(button);
    if (button === document.activeElement || button.checked || this.selected === undefined) this.selected = button;
  }

  keep (button) {
    return this.selected === button;
  }
}

class ModalsGroup extends api.core.DisclosuresGroup {
  constructor () {
    super();
    this.trap = new FocusTrap();
  }

  apply (value, initial) {
    super.apply(value, initial);
    if (this.current === null) this.trap.untrap();
    else this.trap.trap(this.current.element);
  }
}

const group = new ModalsGroup();

class Modal extends api.core.Disclosure {
  constructor (element) {
    super(element);
    this.body = this.element.querySelector(MODAL_BODY_SELECTOR);
    this.scrollDistance = 0;
    this.scrolling = this.resize.bind(this, false);
    this.resizing = this.resize.bind(this, true);
    this.init();
    this.resize(true);
  }

  init () {
    this.element.addEventListener('click', this.click.bind(this));

    this.keyListener = new api.KeyListener(this.element);
    this.keyListener.down(api.KeyListener.ESCAPE, this.conceal.bind(this), true, true);

    if (this.body) {
      this.body.addEventListener('scroll', this.scrolling);
      window.addEventListener('resize', this.resizing);
      // window.addEventListener('orientationchange', this.resizing);
    }
  }

  click (e) {
    if (this.body && this.body !== e.target && !this.body.contains(e.target)) this.conceal();
  }

  gather () {
    group.add(this);
  }

  disclose (withhold) {
    if (!super.disclose(withhold)) return false;
    this.resize(true);
    this.handleScroll(false);
    return true;
  }

  conceal (withhold, preventFocus) {
    if (!super.conceal(withhold, preventFocus)) return false;
    this.handleScroll(true);
    return true;
  }

  /**
   * Fixe l'arrière plan quand la modal est ouverte
   */
  // TODO: créer une fonction de fix de scroll dans core (api.noScroll = true)
  handleScroll (isScrollable) {
    if (isScrollable) {
      api.core.removeClass(document.documentElement, NO_SCROLL_CLASS);
      document.body.style.top = '';
      window.scroll(0, this.scrollDistance);
    } else {
      if (!document.documentElement.classList.contains(NO_SCROLL_CLASS)) {
        this.scrollDistance = window.scrollY;
      }
      document.body.style.top = this.scrollDistance * -1 + 'px';
      api.core.addClass(document.documentElement, NO_SCROLL_CLASS);
    }
  }

  /**
   * Ajoute une ombre autour du footer lorsque l'on peut scroller dans la modale
   * corrige le 100vh, en mobile notamment, lorsque la barre navigateur est présente par exemple.
   */
  resize (isResizing, e) {
    if (!this.body) return;
    if (this.body.scrollHeight > this.body.clientHeight) {
      if (this.body.offsetHeight + this.body.scrollTop >= this.body.scrollHeight) {
        api.core.removeClass(this.body, SCROLL_SHADOW_CLASS);
      } else {
        api.core.addClass(this.body, SCROLL_SHADOW_CLASS);
      }
    } else {
      api.core.removeClass(this.body, SCROLL_SHADOW_CLASS);
    }

    if (isResizing) {
      this.body.style.maxHeight = (window.innerHeight - OFFSET_MOBILE) + 'px';

      // Une deuxième fois après positionnement des barres du navigateur (ios)
      // TODO: à tester si fonctionnel sans setTimeout
      api.core.engine.renderer.next(() => {
        this.body.style.maxHeight = (window.innerHeight - OFFSET_MOBILE) + 'px';
      });
    }
  }

  static get type () { return api.core.DISCLOSURE_TYPES.opened; }
  static get selector () { return MODAL_CLASS; }

  get GroupConstructor () { return ModalsGroup; }
}

api.Modal = Modal;
api.ModalsGroup = ModalsGroup;
api.FocusTrap = FocusTrap;

/**
 * initialise tout les éléments Modal dans la page
 */
const build = () => {
  Modal.build(document);
};

/* eslint-disable no-new */

new api.core.Initializer(MODAL_SELECTOR, [build]);
//# sourceMappingURL=modal.module.js.map

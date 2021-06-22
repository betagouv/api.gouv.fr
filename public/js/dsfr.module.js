/*! DSFR v1.0.0-rc1.0 | restricted use */

const prefix = 'fr';
const namespace = 'dsfr';

const api = window[namespace] || { core: {} };
window[namespace] = api;

const ns = (name) => `${prefix}-${name}`;

ns.selector = (name, notation) => {
  if (notation === undefined) notation = '.';
  return `${notation}${ns(name)}`;
};

ns.attr = (name, quoted, value) => `data-${ns(name)}`;

ns.attr.selector = (name, value) => {
  let result = ns.attr(name);
  if (value !== undefined) result += `="${value}"`;
  return `[${result}]`;
};

ns.event = (type) => `${namespace}.${type}`;

const modifiyClass = (element, className, remove) => {
  if (className.charAt(0) === '.') className = className.substr(1);
  const classNames = element.className.split(' ');
  const index = classNames.indexOf(className);
  if (remove === true) {
    if (index > -1) classNames.splice(index, 1);
  } else if (index === -1) classNames.push(className);
  element.className = classNames.join(' ');
};

const addClass = (element, className) => modifiyClass(element, className);

const removeClass = (element, className) => modifiyClass(element, className, true);

class Renderer {
  constructor () {
    this.closures = [];
    this.nexts = [];
    this.rendering = this.render.bind(this);
    this.render();
  }

  add (closure) {
    this.closures.push(closure);
    const remove = () => {
      const index = this.closures.indexOf(closure);
      if (index !== -1) this.closures.splice(index, 1);
    };
    return remove;
  }

  next (closure, frame) {
    frame = frame === undefined ? 0 : frame - 1;
    if (this.nexts[frame] === undefined) this.nexts[frame] = [];
    this.nexts[frame].push(closure);
  }

  render () {
    window.requestAnimationFrame(this.rendering);
    for (const closure of this.closures) closure.call();
    const nexts = this.nexts.shift();
    if (nexts) {
      for (const closure of nexts) closure.call();
    }
  }
}

// TODO: initializer et renderer en 1, avec muttation observer pour ajouter et retirer les instances des objets attendus en fonctions de selecteurs spécifiques
class Engine {
  constructor () {
    this.renderer = new Renderer();
    // this.instantier = new Instancier();
  }

  register (selector, factory) {

  }

  start () {
    // this.renderer.start();
  }

  stop () {
    // this.renderer.stop();
  }
}

const engine = new Engine();

class Initializer {
  constructor (selector, builders) {
    this.selector = selector;
    this.builders = builders;
    this.instances = [];

    if (document.readyState !== 'loading') window.requestAnimationFrame(this.start.bind(this));
    else document.addEventListener('DOMContentLoaded', this.start.bind(this));
  }

  start () {
    if (this.instances.length > 0) return;

    if (document.querySelectorAll(this.selector).length > 0) {
      for (let i = 0; i < this.builders.length; i++) {
        this.instances.push(this.builders[i]());
      }
    }
  }
}

const instances = { };
const elements = { };
let count = 0;

const getElementId = (element) => {
  for (const id in elements) if (elements[id] === element) return id;
  count++;
  const id = count;
  elements[id] = element;
  return id;
};

class Instance {
  constructor (element, isResizing, isRendering) {
    const id = getElementId(element);
    if (!instances[id]) instances[id] = [];
    instances[id].push(this);
    this.element = element;
    this.id = element.id;
    this._isRendering = false;
    this._isResizing = false;
    this.listeners = {};

    this.isResizing = isResizing;
    this.isRendering = isRendering;
  }

  dispatch (type, data) {
    const event = new CustomEvent(type, data);
    this.element.dispatchEvent(event);
  }

  listen (type, closure) {
    if (!this.listeners[type]) this.listeners[type] = [];
    if (this.listeners[type].indexOf(closure) > -1) return;
    this.listeners[type].push(closure);
    this.element.addEventListener(type, closure);
  }

  unlisten (type, closure) {
    if (!type) {
      for (const type in this.listeners) this.unlisten(type);
    } else if (!closure) {
      if (!this.listeners[type]) return;
      for (const closure of this.listeners[type]) this.element.removeEventListener(closure);
      this.listeners[type].length = 0;
    } else {
      if (!this.listeners[type]) return;
      const index = this.listeners[type].indexOf(closure);
      if (index > -1) this.listeners[type].splice(index, 1);
      this.element.removeEventListener(closure);
    }
  }

  get isRendering () { return this._isRendering; }

  set isRendering (value) {
    if (this._isRendering === value) return;
    this._isRendering = value;
    // TODO add & remove rendering
  }

  render () {}

  get isResizing () { return this._isResizing; }

  set isResizing (value) {
    if (this._isResizing === value) return;
    this._isResizing = value;
    // TODO add & remove resizing
  }

  resize () {}

  destroy () {}

  static getInstances (element, instanceClass) {
    const id = getElementId(element);
    if (!instances[id]) return null;
    else if (!instanceClass) return instances[id];
    else return instances[id].filter((instance) => instance instanceof instanceClass);
  }
}

const GROUP_ATTR = ns.attr('group');

const groups = [];

class DisclosuresGroup {
  constructor (id, element) {
    this.id = id;
    this.element = element;
    this.members = [];
    this._index = -1;
    this._current = null;
    groups.push(this);
  }

  static getGroupById (id) {
    for (const group of groups) if (group.constructor === this && group.id === id) return group;
    return new this(id);
  }

  static getGroupByElement (element) {
    for (const group of groups) if (group.element === element) return group;
    return new this(false, element);
  }

  static groupById (member, groupConstructor) {
    const id = member.element.getAttribute(GROUP_ATTR);
    if (id === null) return;

    const group = groupConstructor.getGroupById(id);
    group.add(member);
  }

  static groupByParent (member, GroupConstructor, groupSelector) {
    if (groupSelector === undefined) groupSelector = GroupConstructor.selector;
    if (groupSelector === '') return;
    let element = member.element.parentElement;

    while (element) {
      if (element.classList.contains(member.constructor.selector)) return;

      if (element.classList.contains(groupSelector)) {
        const group = GroupConstructor.getGroupByElement(element);
        group.add(member);
        return;
      }
      element = element.parentElement;
    }
  }

  static get selector () { return ''; }

  add (member) {
    if (this.members.indexOf(member) !== -1) return;
    this.members.push(member);
    member.setGroup(this);

    switch (true) {
      case this.current !== null:
      case !member.disclosed && !member.primal:
        member.disclosed = false;
        break;

      default:
        this._current = member;
        this._index = this.members.indexOf(member);
        member.disclosed = true;
    }
  }

  get length () { return this.members.length; }

  get index () { return this._index; }

  set index (value) {
    if (value < -1 || value >= this.length || this._index === value) return;
    if (this.current !== null) this.current.conceal(true, true);
    this._index = value;
    this._current = this._index > -1 ? this.members[this._index] : null;
    if (this.current !== null) this.current.disclose(true);
    this.apply();
  }

  get current () { return this._current; }

  set current (member) {
    this.index = this.members.indexOf(member);
  }

  get hasFocus () {
    if (this.current === undefined) return null;
    return this.current.hasFocus;
  }

  apply () {}
}

class DisclosureButton {
  constructor (element, disclosure) {
    this.element = element;
    this.disclosure = disclosure;
    this.hasAttribute = this.element.hasAttribute(this.disclosure.attributeName);
    this.element.addEventListener('click', this.click.bind(this));
    this.observer = new MutationObserver(this.mutate.bind(this));
    this.observe();
  }

  observe () {
    this.observer.observe(this.element, { attributes: true });
  }

  click (e) {
    this.disclosure.change(this.hasAttribute);
  }

  mutate (mutations) {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === this.disclosure.attributeName) this.disclosure.change(this.disclosed);
    });
  }

  apply (value) {
    if (!this.hasAttribute) return;
    if (this.observer) this.observer.disconnect();
    this.element.setAttribute(this.disclosure.attributeName, value);
    if (this.observer) this.observe();
  }

  get disclosed () {
    return this.element.getAttribute(this.disclosure.attributeName) === 'true';
  }

  get hasFocus () {
    return this.element === document.activeElement;
  }
}

const DISCLOSE_EVENT = ns.event('DISCLOSE');
const CONCEAL_EVENT = ns.event('CONCEAL');

const disclosures = [];

class Disclosure extends Instance {
  constructor (element) {
    super(element);
    this.buttons = [];
    this._selector = this.constructor.selector;
    this.modifier = this._selector + '--' + this.type.id;
    this.attributeName = this.type.ariaState ? 'aria-' + this.type.id : ns.attr(this.type.id);
    this.pristine = true;

    const buttons = document.querySelectorAll(this.type.ariaControls ? `[aria-controls="${this.id}"]` : ns.attr.selector('controls', this.id));

    if (buttons.length > 0) for (let i = 0; i < buttons.length; i++) this.addButton(buttons[i]);

    this.disclosed = this.primal === true;

    this.gather();
  }

  gather () {
    if (this.group) return;

    DisclosuresGroup.groupById(this, this.GroupConstructor);
    DisclosuresGroup.groupByParent(this, this.GroupConstructor);
  }

  static build (from) {
    const elements = Array.prototype.slice.call(from.querySelectorAll(`.${this.selector}`));

    for (const element of elements) disclosures.push(new this(element));
  }

  get type () { return this.constructor.type; }

  static get type () { return null; }

  static get selector () { return ''; }

  addButton (element) {
    const button = this.buttonFactory(element);
    if (button.hasAttribute) {
      if (this.primal === undefined) {
        this.primal = button.disclosed;
      } else button.apply(this.primal);
    }
    this.buttons.push(button);
  }

  get GroupConstructor () { return DisclosuresGroup; }

  buttonFactory (button) {
    return new DisclosureButton(button, this);
  }

  disclose (withhold) {
    if (this.disclosed) return false;
    this.pristine = false;
    this.disclosed = true;
    if (!withhold && this.group !== undefined) this.group.current = this;
    return true;
  }

  conceal (withhold, preventFocus) {
    if (!this.disclosed) return false;
    this.pristine = false;
    this.disclosed = false;
    if (!preventFocus) this.focus();
    if (!withhold && this.group !== undefined) this.group.current = null;
    for (const disclosure of disclosures) if (disclosure !== this && this.element.contains(disclosure.element)) disclosure.reset();
    return true;
  }

  get disclosed () {
    return this._disclosed;
  }

  set disclosed (value) {
    if (this._disclosed === value) return;
    this.dispatch(value ? DISCLOSE_EVENT : CONCEAL_EVENT, this.type);
    this._disclosed = value;
    if (value) addClass(this.element, this.modifier);
    else removeClass(this.element, this.modifier);
    for (let i = 0; i < this.buttons.length; i++) this.buttons[i].apply(value);
  }

  reset () {}

  change (hasAttribute) {
    if (!this.constructor.type.canConceal) this.disclose();
    else {
      switch (true) {
        case !hasAttribute:
        case this.disclosed:
          this.conceal();
          break;

        default:
          this.disclose();
      }
    }
  }

  setGroup (group) {
    this.group = group;
  }

  get buttonHasFocus () {
    if (this.buttons.some((button) => { return button.hasFocus; })) return true;
    return false;
  }

  get hasFocus () {
    if (this.element === document.activeElement) return true;
    if (this.element.querySelectorAll(':focus').length > 0) return true;
    return this.buttonHasFocus;
  }

  focus () {
    for (let i = 0; i < this.buttons.length; i++) {
      const button = this.buttons[i];
      if (button.hasAttribute) {
        button.element.focus();
        return;
      }
    }
  }
}

Disclosure.DISCLOSE_EVENT = DISCLOSE_EVENT;
Disclosure.CONCEAL_EVENT = CONCEAL_EVENT;

const DISCLOSURE_TYPES = {
  expand: {
    id: 'expanded',
    ariaState: true,
    ariaControls: true,
    canConceal: true
  },
  select: {
    id: 'selected',
    ariaState: true,
    ariaControls: true,
    canConceal: false
  },
  opened: {
    id: 'opened',
    ariaState: false,
    ariaControls: true,
    canConceal: true
  }
};

/**
 * Utilitaire de gestion des évenements clavier
 * Utiliser KeyListener.add() pour ajouter un event listener
 */
class KeyListener {
  constructor (element) {
    this.element = element;
    this.collections = {};
  }

  /**
   * key: la touche de clavier
   * closure: la function à appliquer
   * type: event type, optionnel, si c'est en down, up ou press
   * stopPropagation: Boolean, permet d'empêcher le comportement par default de l'evenement
   */
  _add (type, action) {
    if (this.collections[type] === undefined) this.collections[type] = new KeyActionCollection(type, this.element);
    this.collections[type].add(action);
  }

  down (key, closure, preventDefault, stopPropagation) {
    this._add('down', new KeyAction(key, closure, preventDefault, stopPropagation));
  }

  up (key, closure, preventDefault, stopPropagation) {
    this._add('up', new KeyAction(key, closure, preventDefault, stopPropagation));
  }

  dispose () {
    for (const collection of this.collections) collection.dispose();
    this.types = null;
  }
}

class KeyActionCollection {
  constructor (type, element) {
    this.type = type;
    this.element = element;
    this.actions = [];
    this.binding = this.handle.bind(this);
    this.element.addEventListener('key' + type, this.binding);
  }

  add (action) {
    this.actions.push(action);
  }

  handle (e) {
    for (const action of this.actions) action.handle(e);
  }

  dispose () {
    this.element.removeEventListener('key' + this.type, this.binding);
    this.actions = null;
  }
}

class KeyAction {
  constructor (key, closure, preventDefault, stopPropagation) {
    this.key = key;
    this.closure = closure;
    this.preventDefault = preventDefault === true;
    this.stopPropagation = stopPropagation === true;
  }

  handle (e) {
    if (e.keyCode === this.key) {
      this.closure(e);
      if (this.preventDefault) {
        e.preventDefault();
      }
      if (this.stopPropagation) {
        e.stopPropagation();
      }
    }
  }
}

KeyListener.TAB = 9;
KeyListener.ESCAPE = 27;
KeyListener.END = 35;
KeyListener.HOME = 36;
KeyListener.LEFT = 37;
KeyListener.UP = 38;
KeyListener.RIGHT = 39;
KeyListener.DOWN = 40;

const COLLAPSE_CLASS = ns('collapse');

const collapses = [];
const ascendants = {};

/**
 * Tab coorespond au panel d'un élement Tabs (tab panel)
 * Tab étend disclosure qui ajoute/enleve le modifier --selected,
 * et ajoute/eleve l'attribut hidden, sur le panel
 */
class Collapse extends Disclosure {
  constructor (element) {
    super(element);
    collapses.push(this);
    this.requesting = this.request.bind(this);
    element.addEventListener('transitionend', this.transitionend.bind(this));
    if (this.disclosed) this.unbound();
  }

  gatherByAscendants () {
    if (this.group) return;

    for (const ascendant in ascendants) {
      let element = this.element.parentElement;

      while (element) {
        if (element.classList.contains(ascendant)) {
          if (typeof ascendants[ascendant] === 'string') {
            DisclosuresGroup.groupByParent(this, DisclosuresGroup, ascendants[ascendant]);
          } else {
            DisclosuresGroup.groupByParent(this, ascendants[ascendant]);
          }
          return;
        }

        element = element.parentElement;
      }
    }
  }

  gather () {
    this.gatherByAscendants();
    super.gather();
  }

  static get type () { return DISCLOSURE_TYPES.expand; }
  static get selector () { return COLLAPSE_CLASS; }

  static register (ascendant, groupSelector) {
    ascendants[ascendant] = groupSelector;
    for (const collapse of collapses) collapse.gatherByAscendants();
  }

  transitionend (e) {
    if (!this.disclosed) this.element.style.maxHeight = '';
  }

  unbound () {
    this.element.style.maxHeight = 'none';
  }

  disclose (withhold) {
    if (this.disclosed) return;
    this.unbound();
    this.adjust();
    this.requested = () => { super.disclose(withhold); };
    window.requestAnimationFrame(this.requesting);
  }

  conceal (withhold, preventFocus) {
    if (!this.disclosed) return;
    this.adjust();
    this.requested = () => { super.conceal(withhold, preventFocus); };
    window.requestAnimationFrame(this.requesting);
  }

  request () {
    if (this.requested) this.requested();
    this.requested = null;
  }

  adjust () {
    this.element.style.setProperty('--collapser', 'none');
    const height = this.element.offsetHeight;
    this.element.style.setProperty('--collapse', -height + 'px');
    this.element.style.setProperty('--collapser', '');
  }

  reset () {
    if (!this.pristine) this.disclosed = false;
  }
}

class Equisized {
  constructor (selector, group) {
    this.selector = selector;
    this.group = group;
    this.elements = this.group.querySelectorAll(this.selector);
    this.maxWidth = 0;

    this.changing = this.change.bind(this);
    window.addEventListener('resize', this.changing);
    window.addEventListener('load', this.changing); // fix change before css load
    // this.change();
  }

  change () {
    this.reset();
    for (let i = 0; i < this.elements.length; i++) {
      const tmpWWidth = this._getWidth(this.elements[i]);
      if (tmpWWidth > this.maxWidth) {
        this.maxWidth = tmpWWidth;
      }
    }
    this.apply();
  }

  apply () {
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].style.width = this.maxWidth + 1 + 'px';
    }
  }

  reset () {
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].style.width = 'auto';
    }
    this.maxWidth = 0;
  }

  _getWidth (el) {
    let width = el.offsetWidth;
    const style = getComputedStyle(el);
    width += parseInt(style.marginLeft) + parseInt(style.marginRight);
    return width;
  }
}

api.core.ns = ns;
api.core.addClass = addClass;
api.core.removeClass = removeClass;
api.core.engine = engine;
api.core.Instance = Instance;
api.core.Initializer = Initializer;
api.core.Disclosure = Disclosure;
api.core.DisclosureButton = DisclosureButton;
api.core.DisclosuresGroup = DisclosuresGroup;
api.core.DISCLOSURE_TYPES = DISCLOSURE_TYPES;

api.KeyListener = KeyListener;
api.Collapse = Collapse;
api.Equisized = Equisized;

const build$8 = () => {
  Collapse.build(document);
};

/* eslint-disable no-new */

new Initializer(`.${COLLAPSE_CLASS}`, [build$8]);

const ACCORDIONS_GROUP = api.core.ns('accordions-group');
const ACCORDION_ASCENDANT = api.core.ns('accordion');

class AccordionsGroup extends api.core.DisclosuresGroup {
  static get selector () { return ACCORDIONS_GROUP; }
}

api.AccordionsGroup = AccordionsGroup;

api.Collapse.register(ACCORDION_ASCENDANT, AccordionsGroup);

const BREADCRUMB_COLLAPSE_SELECTOR = `${api.core.ns.selector('breadcrumb')} ${api.core.ns.selector('collapse')}`;

class Breadcrumb extends api.core.Instance {
  constructor (element) {
    super(element);
    this.collapse = api.core.Instance.getInstances(element, api.Collapse)[0];
    this.links = [...this.element.querySelectorAll('a[href]')];
    this.count = 0;
    if (this.links.length) {
      this.listen(api.core.Disclosure.DISCLOSE_EVENT, this.focus.bind(this));
      // TODO: refactor avec instance
      this.resizing = this.resize.bind(this);
      window.addEventListener('resize', this.resizing);
    }
  }

  focus () {
    this.links[0].focus();
    api.core.engine.renderer.next(() => { this.verify(); });
  }

  verify () {
    this.count++;
    if (this.count > 100) return;
    if (document.activeElement !== this.links[0]) this.focus();
  }

  resize () {
    if (window.matchMedia('(min-width: 48em)').matches) {
      if (this.collapse.buttons[0] === document.activeElement) this.links.focus();
    } else {
      if (this.links.indexOf(document.activeElement) > -1) this.collapse.focus();
    }
  }
}

const build$7 = () => {
  const breadcrumbs = [];
  const breadcrumbNodes = document.querySelectorAll(BREADCRUMB_COLLAPSE_SELECTOR);
  for (let i = 0; i < breadcrumbNodes.length; i++) breadcrumbs.push(new Breadcrumb(breadcrumbNodes[i]));
};

/* eslint-disable no-new */

new api.core.Initializer(BREADCRUMB_COLLAPSE_SELECTOR, [build$7]);

const BUTTON_SELECTOR = api.core.ns.selector('btn');
const BUTTONS_GROUP_SELECTOR = api.core.ns.selector('btns-group');
const EQUISIZED_BUTTONS_GROUP_SELECTOR = api.core.ns.selector('btns-group--equisized');

const build$6 = () => {
  const group = document.querySelectorAll(EQUISIZED_BUTTONS_GROUP_SELECTOR);
  const arrayEquisized = [];
  for (let i = 0; i < group.length; i++) {
    arrayEquisized.push(new api.Equisized(BUTTON_SELECTOR, group[i]));
  }
};

/* eslint-disable no-new */

new api.core.Initializer(BUTTONS_GROUP_SELECTOR, [build$6]);

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
const build$5 = () => {
  Modal.build(document);
};

/* eslint-disable no-new */

new api.core.Initializer(MODAL_SELECTOR, [build$5]);

const NAVIGATION_CLASS = api.core.ns('nav');
const NAVIGATION_LIST_CLASS = api.core.ns('nav__list');
const NAVIGATION_ITEM_CLASS = api.core.ns('nav__item');
const NAVIGATION_ITEM_RIGHT_CLASS = api.core.ns('nav__item--align-right');
const NAVIGATION_MENU_CLASS = api.core.ns('menu');

class Navigation extends api.core.DisclosuresGroup {
  constructor (id, element) {
    super(id, element);

    this.menus = [];

    this.navList = element.querySelector(`.${NAVIGATION_LIST_CLASS}`);

    document.addEventListener('focusout', this.focusOut.bind(this));
    window.addEventListener('resize', this.resize.bind(this));
    window.addEventListener('orientationchange', this.resize.bind(this));
    this.resize();
  }

  static get selector () { return NAVIGATION_CLASS; }

  add (member) {
    super.add(member);

    if (member.element.classList.contains(NAVIGATION_MENU_CLASS)) {
      this.menus.push(new NavigationMenu(member, this.navList.getBoundingClientRect().right));
    }
  }

  focusOut (e) {
    requestAnimationFrame(() => {
      if (this.current !== null && !this.current.hasFocus) this.index = -1;
    });
  }

  get index () { return super.index; }

  set index (value) {
    if (value === -1 && this.current !== null && this.current.hasFocus) this.current.focus();
    super.index = value;
  }

  resize () {
    const right = this.navList.getBoundingClientRect().right;

    for (const menu of this.menus) menu.place(right);
  }
}

class NavigationMenu {
  constructor (collapse, right) {
    this.initialize(collapse);
    this.place(right);
  }

  initialize (collapse) {
    this.element = collapse.element;

    for (const button of collapse.buttons) {
      if (!button.hasAttribute) continue;
      this.button = button.element;
      break;
    }

    let item = this.element.parentElement;
    while (item) {
      if (item.classList.contains(NAVIGATION_ITEM_CLASS)) {
        this.item = item;
        break;
      }
      item = item.parentElement;
    }
  }

  place (right) {
    const styles = getComputedStyle(this.element);
    const width = parseFloat(styles.width);
    const left = this.button.getBoundingClientRect().left;

    if (left + width > right) api.core.addClass(this.item, NAVIGATION_ITEM_RIGHT_CLASS);
    else api.core.removeClass(this.item, NAVIGATION_ITEM_RIGHT_CLASS);
  }
}

api.Navigation = Navigation;

api.Collapse.register(NAVIGATION_CLASS, Navigation);

const SCHEME_ATTR = api.core.ns.attr('theme');
const TRANSITION_ATTR = api.core.ns.attr('transition');

/**
 * TODO: implémenter la valeur system
 * window.matchMedia("(prefers-color-scheme: dark)").addListener(
 e => e.matches && activateDarkMode()) // listener
 );
 */

class Scheme {
  constructor () {
    this.init();
  }

  init () {
    this.root = document.documentElement;

    this.scheme = localStorage.getItem('scheme')
      ? localStorage.getItem('scheme')
      : null;

    if (this.scheme === null) {
      const scheme = this.root.getAttribute(SCHEME_ATTR);
      if (scheme === 'dark' || scheme === 'light') {
        this.scheme = scheme;
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.scheme = 'dark';
        localStorage.setItem('scheme', 'dark');
      } else this.scheme = 'light';
    }

    if (this.scheme === 'dark') {
      if (!this.root.hasAttribute(TRANSITION_ATTR)) {
        this.root.setAttribute(SCHEME_ATTR, 'dark');
      } else {
        this.root.removeAttribute(TRANSITION_ATTR);
        this.root.setAttribute(SCHEME_ATTR, 'dark');

        setTimeout(() => {
          this.root.setAttribute(TRANSITION_ATTR, '');
        }, 300);
      }
    } else this.root.setAttribute(SCHEME_ATTR, 'light');

    this.observer = new MutationObserver(this.mutate.bind(this));
    this.observer.observe(this.root, { attributes: true });
  }

  mutate (mutations) {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === SCHEME_ATTR) {
        const scheme = this.root.getAttribute(SCHEME_ATTR);
        if (scheme === 'dark') {
          localStorage.setItem('scheme', 'dark');
        } else if (scheme === 'light') {
          localStorage.setItem('scheme', 'light');
        }
      }
    });
  }
}

api.Scheme = Scheme;

const RADIOS_THEME_NAME = `input[name="${api.core.ns.selector('radios-theme', '')}"]`;
const SWITCH_THEME_ID = api.core.ns.selector('switch-theme', '#');
const THEME_ATTR = api.core.ns.attr('theme');

/* eslint-disable no-new */

const build$4 = () => {
  new Scheme();
};

class SwitchTheme {
  constructor () {
    this.attributeName = THEME_ATTR;
    this.theme = null;
    this.radios = document.querySelectorAll(RADIOS_THEME_NAME);

    for (var i = 0; i < this.radios.length; i++) {
      this.radios[i].addEventListener('change', this.change.bind(this));
    }

    this.observer = new MutationObserver(this.mutate.bind(this));
    this.observe();
    this.apply();
  }

  observe () {
    this.observer.observe(document.documentElement, { attributes: true });
  }

  mutate (mutations) {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === this.attributeName) {
        this.apply();
      }
    });
  }

  apply () {
    const theme = document.documentElement.getAttribute(this.attributeName);
    this.isApplying = true;
    for (var i = 0; i < this.radios.length; i++) {
      this.radios[i].checked = this.radios[i].value === theme;
    }
    this.isApplying = false;
  }

  change () {
    if (this.isApplying) return;
    if (this.observer) this.observer.disconnect();
    this.theme = document.querySelector(RADIOS_THEME_NAME + ':checked');
    if (this.theme) {
      document.documentElement.setAttribute(this.attributeName, this.theme.value);
    } else {
      document.documentElement.removeAttribute(this.attributeName);
    }
    if (this.observer) this.observe();
  }
}

/* eslint-disable no-new */

const build$3 = () => {
  new SwitchTheme();
};

/* eslint-disable no-new */

new api.core.Initializer(`:root[${SCHEME_ATTR}]`, [build$4]);
new api.core.Initializer(`${SWITCH_THEME_ID}`, [build$3]);

const SIDEMENU_CLASS = api.core.ns('sidemenu');
const SIDEMENU_LIST_CLASS = api.core.ns('sidemenu__list');

/* eslint-disable no-new */

api.Collapse.register(SIDEMENU_CLASS, SIDEMENU_LIST_CLASS);

const TABLE_SELECTOR = api.core.ns.selector('table');
// export const TABLE_CLASS = api.core.ns('table');
const TABLE_SCROLLING_SELECTOR = `${api.core.ns.selector('table')}:not(${api.core.ns.selector('table--no-scroll')})`;
const LEFT = 'left';
const RIGHT = 'right';
const SHADOW_CLASS = api.core.ns('table--shadow');
const SHADOW_LEFT_CLASS = api.core.ns('table--shadow-left');
const SHADOW_RIGHT_CLASS = api.core.ns('table--shadow-right');
const WRAPPER_CLASS = api.core.ns('table__wrapper');
const CAPTION_BOTTOM_CLASS = api.core.ns('table--caption-bottom');
const SCROLL_OFFSET = 1; // valeur en px du scroll avant laquelle le shadow s'active ou se desactive

class Table {
  constructor (table) {
    this.init(table);
  }

  init (table) {
    this.table = table;
    this.tableElem = this.table.querySelector('table');
    this.tableContent = this.tableElem.querySelector('tbody');
    this.isScrollable = this.tableContent.offsetWidth > this.tableElem.offsetWidth;
    this.caption = this.tableElem.querySelector('caption');
    this.captionHeight = 0;
    this.wrap();

    const scrolling = this.change.bind(this);
    this.tableElem.addEventListener('scroll', scrolling);
    this.change();
  }

  change () {
    const newScroll = this.tableContent.offsetWidth > this.tableElem.offsetWidth;
    let firstTimeScrollable = this.tableElem.offsetWidth > this.table.offsetWidth;
    if (newScroll || firstTimeScrollable) {
      this.scroll();
      this.handleCaption();
    } else {
      if (newScroll !== this.isScrollable) this.delete();
    }
    this.isScrollable = newScroll;
    firstTimeScrollable = false;
  }

  delete () {
    api.core.removeClass(this.table, SHADOW_RIGHT_CLASS);
    api.core.removeClass(this.table, SHADOW_LEFT_CLASS);
    api.core.removeClass(this.table, SHADOW_CLASS);
    if (this.caption) {
      this.tableElem.style.marginTop = '';
      this.caption.style.top = '';
      this.tableElem.style.marginBottom = '';
      this.caption.style.bottom = '';
    }
  }

  scroll () {
    api.core.addClass(this.table, SHADOW_CLASS);
    this.setShadowPosition();
  }

  /* ajoute un wrapper autour du tableau */
  wrap () {
    const wrapperHtml = document.createElement('div');
    wrapperHtml.className = WRAPPER_CLASS;
    this.table.insertBefore(wrapperHtml, this.tableElem);
    wrapperHtml.appendChild(this.tableElem);
    this.tableInnerWrapper = wrapperHtml;
  }

  /* affiche les blocs shadow en fonction de la position du scroll, en ajoutant la classe visible */
  setShadowPosition () {
    const tableScrollLeft = this.getScrollPosition(LEFT);
    const tableScrollRight = this.getScrollPosition(RIGHT);

    // on inverse en cas de lecture droite - gauche
    if (document.documentElement.getAttribute('dir') === 'rtl') {
      this.setShadowVisibility(RIGHT, tableScrollLeft);
      this.setShadowVisibility(LEFT, tableScrollRight);
    } else {
      this.setShadowVisibility(LEFT, tableScrollLeft);
      this.setShadowVisibility(RIGHT, tableScrollRight);
    }
  }

  /* Donne le nombre de pixels scrollés honrizontalement dans un element scrollable */
  getScrollPosition (side) {
    let inverter = 1;
    // on inverse en cas de lecture droite - gauche pour que la valeur de scroll soit toujours positive
    if (document.documentElement.getAttribute('dir') === 'rtl') {
      inverter = -1;
    }
    switch (side) {
      case LEFT:
        return this.tableElem.scrollLeft * inverter;
      case RIGHT:
        return this.tableContent.offsetWidth - this.tableElem.offsetWidth - this.tableElem.scrollLeft * inverter;
      default:
        return false;
    }
  }

  /* positionne la caption en top négatif et ajoute un margin-top au wrapper */
  handleCaption () {
    if (this.caption) {
      const style = getComputedStyle(this.caption);
      const newHeight = this.caption.offsetHeight + parseInt(style.marginTop) + parseInt(style.marginBottom);
      this.captionHeight = newHeight;
      if (this.table.classList.contains(CAPTION_BOTTOM_CLASS)) {
        this.tableElem.style.marginBottom = this.captionHeight + 'px';
        this.caption.style.bottom = -this.captionHeight + 'px';
      } else {
        this.tableElem.style.marginTop = this.captionHeight + 'px';
        this.caption.style.top = -this.captionHeight + 'px';
      }
    }
  }

  /* ajoute la classe fr-table--shadow-right ou fr-table--shadow-right sur fr-table
   en fonction d'une valeur de scroll et du sens (right, left) */
  setShadowVisibility (side, scrollPosition) {
    // si on a pas scroll, ou qu'on scroll jusqu'au bout
    if (scrollPosition <= SCROLL_OFFSET) {
      if (side === LEFT) api.core.removeClass(this.table, SHADOW_LEFT_CLASS);
      else if (side === RIGHT) api.core.removeClass(this.table, SHADOW_RIGHT_CLASS);
    } else {
      if (side === LEFT) api.core.addClass(this.table, SHADOW_LEFT_CLASS);
      else if (side === RIGHT) api.core.addClass(this.table, SHADOW_RIGHT_CLASS);
    }
  }
}

api.Table = Table;

const tables = [];

const change = () => {
  for (let i = 0; i < tables.length; i++) tables[i].change();
};

const build$2 = () => {
  const tableNodes = document.querySelectorAll(TABLE_SCROLLING_SELECTOR);
  for (let i = 0; i < tableNodes.length; i++) tables.push(new Table(tableNodes[i]));

  window.addEventListener('resize', change);
  window.addEventListener('orientationchange', change);
  change();
};

/* eslint-disable no-new */

new api.core.Initializer(TABLE_SELECTOR, [build$2]);

/**
  * TabButton correspond au bouton cliquable qui change le panel
  * TabButton étend de DisclosureButton qui ajoute/enelve l'attribut aria-selected,
  * Et change l'attributte tabindex a 0 si le boutton est actif (value=true), -1 s'il n'est pas actif (value=false)
 */
class TabButton extends api.core.DisclosureButton {
  apply (value) {
    super.apply(value);
    if (this.hasAttribute) {
      this.element.setAttribute('tabindex', value ? '0' : '-1');
    }
  }
}

const TABS_SELECTOR = api.core.ns.selector('tabs');
const TABS_CLASS = api.core.ns('tabs');
const TAB_CLASS = api.core.ns('tabs__tab');
const PANEL_CLASS = api.core.ns('tabs__panel');
const LIST_CLASS = api.core.ns('tabs__list');

/**
* TabGroup est la classe étendue de DiscosuresGroup
* Correspond à un objet Tabs avec plusieurs tab-button & Tab (panel)
*/
class TabsGroup extends api.core.DisclosuresGroup {
  constructor (id, element) {
    super(id, element);
    this.list = element.querySelector(`.${LIST_CLASS}`);

    element.addEventListener('transitionend', this.transitionend.bind(this));

    this.init();
    api.core.engine.renderer.add(this.render.bind(this));
  }

  static get selector () { return TABS_CLASS; }

  transitionend (e) {
    this.element.style.transition = 'none';
  }

  init () {
    this.keyListener = new api.KeyListener(this.element);
    this.keyListener.down(api.KeyListener.RIGHT, this.arrowRightPress.bind(this), true, true);
    this.keyListener.down(api.KeyListener.LEFT, this.arrowLeftPress.bind(this), true, true);
    this.keyListener.down(api.KeyListener.HOME, this.homePress.bind(this), true, true);
    this.keyListener.down(api.KeyListener.END, this.endPress.bind(this), true, true);
  }

  /**
   * Selectionne l'element suivant de la liste si on est sur un bouton
   * Si on est à la fin on retourne au début
   */
  arrowRightPress () {
    if (document.activeElement.classList.contains(TAB_CLASS)) {
      if (this.index < this.length - 1) {
        this.index++;
      } else {
        this.index = 0;
      }

      this.focus();
    }
  };

  /**
   * Selectionne l'element précédent de la liste si on est sur un bouton
   * Si on est au debut retourne a la fin
   */
  arrowLeftPress () {
    if (document.activeElement.classList.contains(TAB_CLASS)) {
      if (this.index > 0) {
        this.index--;
      } else {
        this.index = this.length - 1;
      }

      this.focus();
    }
  };

  /**
   * Selectionne le permier element de la liste si on est sur un bouton
   */
  homePress () {
    if (document.activeElement.classList.contains(TAB_CLASS)) {
      this.index = 0;
      this.focus();
    }
  };

  /**
   * Selectionne le dernier element de la liste si on est sur un bouton
   */
  endPress () {
    if (document.activeElement.classList.contains(TAB_CLASS)) {
      this.index = this.length - 1;
      this.focus();
    }
  };

  focus () {
    if (this.current) this.current.focus();
  }

  apply () {
    for (let i = 0; i < this._index; i++) this.members[i].translate(-1);
    this.current.element.style.transform = '';
    for (let i = this._index + 1; i < this.length; i++) this.members[i].translate(1);
    this.element.style.transition = '';
  }

  add (tab) {
    super.add(tab);
    if (this.length === 1 || tab.disclosed) this.current = tab;
    else {
      const index = this.members.indexOf(tab);
      if (this._index > -1 && this._index !== index) tab.translate(index < this._index ? -1 : 1, true);
    }
  }

  render () {
    if (this.current === null) return;
    const paneHeight = Math.round(this.current.element.offsetHeight);
    if (this.panelHeight === paneHeight) return;
    this.panelHeight = paneHeight;
    this.element.style.height = (this.panelHeight + this.list.offsetHeight) + 'px';
  }
}

/**
  * Tab coorespond au panel d'un élement Tabs (tab panel)
  * Tab étend disclosure qui ajoute/enleve le modifier --selected,
  * et ajoute/eleve l'attribut hidden, sur le panel
  */
class Tab extends api.core.Disclosure {
  static get type () { return api.core.DISCLOSURE_TYPES.select; }
  static get selector () { return PANEL_CLASS; }

  get GroupConstructor () { return TabsGroup; }

  buttonFactory (element) {
    return new TabButton(element, this);
  }

  translate (direction, initial) {
    if (initial) this.element.style.transition = 'none';
    this.element.style.transform = `translate(${direction * 100}%)`;
    if (initial) this.element.style.transition = '';
  }

  reset () {
    this.group.index = 0;
  }
}

api.Tab = Tab;
api.TabButton = TabButton;
api.TabsGroup = TabsGroup;

/**
* Initialise tout les éléments Tab dans la page
*/
const build$1 = () => {
  Tab.build(document);
};

/* eslint-disable no-new */

new api.core.Initializer(TABS_SELECTOR, [build$1]);

const HEADER_SELECTOR = api.core.ns.selector('header');
const HEADER_SEARCH_SELECTOR = api.core.ns.selector('header__search');
const HEADER_MENU_SELECTOR = api.core.ns.selector('header__menu');
const HEADER_TOOLS_LINKS_SELECTOR = api.core.ns.selector('header__tools-links');
const HEADER_MENU_LINKS_SELECTOR = api.core.ns.selector('header__menu-links');
const HEADER_LINKS_GROUP_SELECTOR = `${HEADER_TOOLS_LINKS_SELECTOR} ${api.core.ns.selector('links-group')}`;

class Header {
  constructor (header) {
    this.header = header || document.querySelector(HEADER_SELECTOR);
    this.modals = [];

    this.init();
  }

  getModal (selector) {
    const element = this.header.querySelector(selector);
    if (!element) return;
    const modals = api.core.Instance.getInstances(element, api.Modal);
    if (!modals || !modals.length) return;
    this.modals.push(modals[0]);
  }

  init () {
    this.getModal(HEADER_SEARCH_SELECTOR);
    this.getModal(HEADER_MENU_SELECTOR);

    this.linksGroup = this.header.querySelector(HEADER_LINKS_GROUP_SELECTOR);

    this.toolsLinks = this.header.querySelector(HEADER_TOOLS_LINKS_SELECTOR);
    this.menuLinks = this.header.querySelector(HEADER_MENU_LINKS_SELECTOR);

    this.changing = this.change.bind(this);

    window.addEventListener('resize', this.changing);
    this.change();
  }

  change () {
    this.isLarge = window.matchMedia('(min-width: 62em)').matches;

    if (this.isLarge) {
      for (let i = 0; i < this.modals.length; i++) {
        this.modals[i].conceal();
        this.modals[i].element.removeAttribute('role');
      }
    } else {
      for (let i = 0; i < this.modals.length; i++) {
        this.modals[i].element.setAttribute('role', 'dialog');
      }
    }

    if (this.linksGroup !== null) {
      if (this.isLarge) this.toolsLinks.appendChild(this.linksGroup);
      else this.menuLinks.appendChild(this.linksGroup);
    }
  }
}

api.Header = Header;

const build = () => {
  const elements = Array.prototype.slice.call(document.querySelectorAll(HEADER_SELECTOR));

  const headers = [];

  for (const element of elements) headers.push(new Header(element));
};

/* eslint-disable no-new */

new api.core.Initializer(HEADER_SELECTOR, [build]);
//# sourceMappingURL=dsfr.module.js.map

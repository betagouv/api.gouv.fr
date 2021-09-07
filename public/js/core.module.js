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

const build = () => {
  Collapse.build(document);
};

/* eslint-disable no-new */

new Initializer(`.${COLLAPSE_CLASS}`, [build]);
//# sourceMappingURL=core.module.js.map

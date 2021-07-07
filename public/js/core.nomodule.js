/*! DSFR v1.0.0-rc1.0 | restricted use */

(function () {
  'use strict';

  var prefix = 'fr';
  var namespace = 'dsfr';

  var api = window[namespace] || { core: {} };
  window[namespace] = api;

  var ns = function (name) { return (prefix + "-" + name); };

  ns.selector = function (name, notation) {
    if (notation === undefined) { notation = '.'; }
    return ("" + notation + (ns(name)));
  };

  ns.attr = function (name, quoted, value) { return ("data-" + (ns(name))); };

  ns.attr.selector = function (name, value) {
    var result = ns.attr(name);
    if (value !== undefined) { result += "=\"" + value + "\""; }
    return ("[" + result + "]");
  };

  ns.event = function (type) { return (namespace + "." + type); };

  var modifiyClass = function (element, className, remove) {
    if (className.charAt(0) === '.') { className = className.substr(1); }
    var classNames = element.className.split(' ');
    var index = classNames.indexOf(className);
    if (remove === true) {
      if (index > -1) { classNames.splice(index, 1); }
    } else if (index === -1) { classNames.push(className); }
    element.className = classNames.join(' ');
  };

  var addClass = function (element, className) { return modifiyClass(element, className); };

  var removeClass = function (element, className) { return modifiyClass(element, className, true); };

  var Renderer = function Renderer () {
    this.closures = [];
    this.nexts = [];
    this.rendering = this.render.bind(this);
    this.render();
  };

  Renderer.prototype.add = function add (closure) {
      var this$1 = this;

    this.closures.push(closure);
    var remove = function () {
      var index = this$1.closures.indexOf(closure);
      if (index !== -1) { this$1.closures.splice(index, 1); }
    };
    return remove;
  };

  Renderer.prototype.next = function next (closure, frame) {
    frame = frame === undefined ? 0 : frame - 1;
    if (this.nexts[frame] === undefined) { this.nexts[frame] = []; }
    this.nexts[frame].push(closure);
  };

  Renderer.prototype.render = function render () {
    window.requestAnimationFrame(this.rendering);
    for (var i = 0, list = this.closures; i < list.length; i += 1) {
        var closure = list[i];

        closure.call();
      }
    var nexts = this.nexts.shift();
    if (nexts) {
      for (var i$1 = 0, list$1 = nexts; i$1 < list$1.length; i$1 += 1) {
          var closure$1 = list$1[i$1];

          closure$1.call();
        }
    }
  };

  // TODO: initializer et renderer en 1, avec muttation observer pour ajouter et retirer les instances des objets attendus en fonctions de selecteurs spécifiques
  var Engine = function Engine () {
    this.renderer = new Renderer();
    // this.instantier = new Instancier();
  };

  Engine.prototype.register = function register (selector, factory) {

  };

  Engine.prototype.start = function start () {
    // this.renderer.start();
  };

  Engine.prototype.stop = function stop () {
    // this.renderer.stop();
  };

  var engine = new Engine();

  var Initializer = function Initializer (selector, builders) {
    this.selector = selector;
    this.builders = builders;
    this.instances = [];

    if (document.readyState !== 'loading') { window.requestAnimationFrame(this.start.bind(this)); }
    else { document.addEventListener('DOMContentLoaded', this.start.bind(this)); }
  };

  Initializer.prototype.start = function start () {
    if (this.instances.length > 0) { return; }

    if (document.querySelectorAll(this.selector).length > 0) {
      for (var i = 0; i < this.builders.length; i++) {
        this.instances.push(this.builders[i]());
      }
    }
  };

  var instances = { };
  var elements = { };
  var count = 0;

  var getElementId = function (element) {
    for (var id$1 in elements) { if (elements[id$1] === element) { return id$1; } }
    count++;
    var id = count;
    elements[id] = element;
    return id;
  };

  var Instance = function Instance (element, isResizing, isRendering) {
    var id = getElementId(element);
    if (!instances[id]) { instances[id] = []; }
    instances[id].push(this);
    this.element = element;
    this.id = element.id;
    this._isRendering = false;
    this._isResizing = false;
    this.listeners = {};

    this.isResizing = isResizing;
    this.isRendering = isRendering;
  };

  var prototypeAccessors$2 = { isRendering: { configurable: true },isResizing: { configurable: true } };

  Instance.prototype.dispatch = function dispatch (type, data) {
    var event = new CustomEvent(type, data);
    this.element.dispatchEvent(event);
  };

  Instance.prototype.listen = function listen (type, closure) {
    if (!this.listeners[type]) { this.listeners[type] = []; }
    if (this.listeners[type].indexOf(closure) > -1) { return; }
    this.listeners[type].push(closure);
    this.element.addEventListener(type, closure);
  };

  Instance.prototype.unlisten = function unlisten (type, closure) {
    if (!type) {
      for (var type$1 in this.listeners) { this.unlisten(type$1); }
    } else if (!closure) {
      if (!this.listeners[type]) { return; }
      for (var i = 0, list = this.listeners[type]; i < list.length; i += 1) {
          var closure$1 = list[i];

          this.element.removeEventListener(closure$1);
        }
      this.listeners[type].length = 0;
    } else {
      if (!this.listeners[type]) { return; }
      var index = this.listeners[type].indexOf(closure);
      if (index > -1) { this.listeners[type].splice(index, 1); }
      this.element.removeEventListener(closure);
    }
  };

  prototypeAccessors$2.isRendering.get = function () { return this._isRendering; };

  prototypeAccessors$2.isRendering.set = function (value) {
    if (this._isRendering === value) { return; }
    this._isRendering = value;
    // TODO add & remove rendering
  };

  Instance.prototype.render = function render () {};

  prototypeAccessors$2.isResizing.get = function () { return this._isResizing; };

  prototypeAccessors$2.isResizing.set = function (value) {
    if (this._isResizing === value) { return; }
    this._isResizing = value;
    // TODO add & remove resizing
  };

  Instance.prototype.resize = function resize () {};

  Instance.prototype.destroy = function destroy () {};

  Instance.getInstances = function getInstances (element, instanceClass) {
    var id = getElementId(element);
    if (!instances[id]) { return null; }
    else if (!instanceClass) { return instances[id]; }
    else { return instances[id].filter(function (instance) { return instance instanceof instanceClass; }); }
  };

  Object.defineProperties( Instance.prototype, prototypeAccessors$2 );

  var GROUP_ATTR = ns.attr('group');

  var groups = [];

  var DisclosuresGroup = function DisclosuresGroup (id, element) {
    this.id = id;
    this.element = element;
    this.members = [];
    this._index = -1;
    this._current = null;
    groups.push(this);
  };

  var prototypeAccessors$1 = { length: { configurable: true },index: { configurable: true },current: { configurable: true },hasFocus: { configurable: true } };
  var staticAccessors = { selector: { configurable: true } };

  DisclosuresGroup.getGroupById = function getGroupById (id) {
    for (var i = 0, list = groups; i < list.length; i += 1) {
        var group = list[i];

        if (group.constructor === this && group.id === id) { return group;
      } }
    return new this(id);
  };

  DisclosuresGroup.getGroupByElement = function getGroupByElement (element) {
    for (var i = 0, list = groups; i < list.length; i += 1) {
        var group = list[i];

        if (group.element === element) { return group;
      } }
    return new this(false, element);
  };

  DisclosuresGroup.groupById = function groupById (member, groupConstructor) {
    var id = member.element.getAttribute(GROUP_ATTR);
    if (id === null) { return; }

    var group = groupConstructor.getGroupById(id);
    group.add(member);
  };

  DisclosuresGroup.groupByParent = function groupByParent (member, GroupConstructor, groupSelector) {
    if (groupSelector === undefined) { groupSelector = GroupConstructor.selector; }
    if (groupSelector === '') { return; }
    var element = member.element.parentElement;

    while (element) {
      if (element.classList.contains(member.constructor.selector)) { return; }

      if (element.classList.contains(groupSelector)) {
        var group = GroupConstructor.getGroupByElement(element);
        group.add(member);
        return;
      }
      element = element.parentElement;
    }
  };

  staticAccessors.selector.get = function () { return ''; };

  DisclosuresGroup.prototype.add = function add (member) {
    if (this.members.indexOf(member) !== -1) { return; }
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
  };

  prototypeAccessors$1.length.get = function () { return this.members.length; };

  prototypeAccessors$1.index.get = function () { return this._index; };

  prototypeAccessors$1.index.set = function (value) {
    if (value < -1 || value >= this.length || this._index === value) { return; }
    if (this.current !== null) { this.current.conceal(true, true); }
    this._index = value;
    this._current = this._index > -1 ? this.members[this._index] : null;
    if (this.current !== null) { this.current.disclose(true); }
    this.apply();
  };

  prototypeAccessors$1.current.get = function () { return this._current; };

  prototypeAccessors$1.current.set = function (member) {
    this.index = this.members.indexOf(member);
  };

  prototypeAccessors$1.hasFocus.get = function () {
    if (this.current === undefined) { return null; }
    return this.current.hasFocus;
  };

  DisclosuresGroup.prototype.apply = function apply () {};

  Object.defineProperties( DisclosuresGroup.prototype, prototypeAccessors$1 );
  Object.defineProperties( DisclosuresGroup, staticAccessors );

  var DisclosureButton = function DisclosureButton (element, disclosure) {
    this.element = element;
    this.disclosure = disclosure;
    this.hasAttribute = this.element.hasAttribute(this.disclosure.attributeName);
    this.element.addEventListener('click', this.click.bind(this));
    this.observer = new MutationObserver(this.mutate.bind(this));
    this.observe();
  };

  var prototypeAccessors = { disclosed: { configurable: true },hasFocus: { configurable: true } };

  DisclosureButton.prototype.observe = function observe () {
    this.observer.observe(this.element, { attributes: true });
  };

  DisclosureButton.prototype.click = function click (e) {
    this.disclosure.change(this.hasAttribute);
  };

  DisclosureButton.prototype.mutate = function mutate (mutations) {
      var this$1 = this;

    mutations.forEach(function (mutation) {
      if (mutation.type === 'attributes' && mutation.attributeName === this$1.disclosure.attributeName) { this$1.disclosure.change(this$1.disclosed); }
    });
  };

  DisclosureButton.prototype.apply = function apply (value) {
    if (!this.hasAttribute) { return; }
    if (this.observer) { this.observer.disconnect(); }
    this.element.setAttribute(this.disclosure.attributeName, value);
    if (this.observer) { this.observe(); }
  };

  prototypeAccessors.disclosed.get = function () {
    return this.element.getAttribute(this.disclosure.attributeName) === 'true';
  };

  prototypeAccessors.hasFocus.get = function () {
    return this.element === document.activeElement;
  };

  Object.defineProperties( DisclosureButton.prototype, prototypeAccessors );

  var DISCLOSE_EVENT = ns.event('DISCLOSE');
  var CONCEAL_EVENT = ns.event('CONCEAL');

  var disclosures = [];

  var Disclosure = /*@__PURE__*/(function (Instance) {
    function Disclosure (element) {
      Instance.call(this, element);
      this.buttons = [];
      this._selector = this.constructor.selector;
      this.modifier = this._selector + '--' + this.type.id;
      this.attributeName = this.type.ariaState ? 'aria-' + this.type.id : ns.attr(this.type.id);
      this.pristine = true;

      var buttons = document.querySelectorAll(this.type.ariaControls ? ("[aria-controls=\"" + (this.id) + "\"]") : ns.attr.selector('controls', this.id));

      if (buttons.length > 0) { for (var i = 0; i < buttons.length; i++) { this.addButton(buttons[i]); } }

      this.disclosed = this.primal === true;

      this.gather();
    }

    if ( Instance ) Disclosure.__proto__ = Instance;
    Disclosure.prototype = Object.create( Instance && Instance.prototype );
    Disclosure.prototype.constructor = Disclosure;

    var prototypeAccessors = { type: { configurable: true },GroupConstructor: { configurable: true },disclosed: { configurable: true },buttonHasFocus: { configurable: true },hasFocus: { configurable: true } };
    var staticAccessors = { type: { configurable: true },selector: { configurable: true } };

    Disclosure.prototype.gather = function gather () {
      if (this.group) { return; }

      DisclosuresGroup.groupById(this, this.GroupConstructor);
      DisclosuresGroup.groupByParent(this, this.GroupConstructor);
    };

    Disclosure.build = function build (from) {
      var elements = Array.prototype.slice.call(from.querySelectorAll(("." + (this.selector))));

      for (var i = 0, list = elements; i < list.length; i += 1) {
        var element = list[i];

        disclosures.push(new this(element));
      }
    };

    prototypeAccessors.type.get = function () { return this.constructor.type; };

    staticAccessors.type.get = function () { return null; };

    staticAccessors.selector.get = function () { return ''; };

    Disclosure.prototype.addButton = function addButton (element) {
      var button = this.buttonFactory(element);
      if (button.hasAttribute) {
        if (this.primal === undefined) {
          this.primal = button.disclosed;
        } else { button.apply(this.primal); }
      }
      this.buttons.push(button);
    };

    prototypeAccessors.GroupConstructor.get = function () { return DisclosuresGroup; };

    Disclosure.prototype.buttonFactory = function buttonFactory (button) {
      return new DisclosureButton(button, this);
    };

    Disclosure.prototype.disclose = function disclose (withhold) {
      if (this.disclosed) { return false; }
      this.pristine = false;
      this.disclosed = true;
      if (!withhold && this.group !== undefined) { this.group.current = this; }
      return true;
    };

    Disclosure.prototype.conceal = function conceal (withhold, preventFocus) {
      if (!this.disclosed) { return false; }
      this.pristine = false;
      this.disclosed = false;
      if (!preventFocus) { this.focus(); }
      if (!withhold && this.group !== undefined) { this.group.current = null; }
      for (var i = 0, list = disclosures; i < list.length; i += 1) {
        var disclosure = list[i];

        if (disclosure !== this && this.element.contains(disclosure.element)) { disclosure.reset();
      } }
      return true;
    };

    prototypeAccessors.disclosed.get = function () {
      return this._disclosed;
    };

    prototypeAccessors.disclosed.set = function (value) {
      if (this._disclosed === value) { return; }
      this.dispatch(value ? DISCLOSE_EVENT : CONCEAL_EVENT, this.type);
      this._disclosed = value;
      if (value) { addClass(this.element, this.modifier); }
      else { removeClass(this.element, this.modifier); }
      for (var i = 0; i < this.buttons.length; i++) { this.buttons[i].apply(value); }
    };

    Disclosure.prototype.reset = function reset () {};

    Disclosure.prototype.change = function change (hasAttribute) {
      if (!this.constructor.type.canConceal) { this.disclose(); }
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
    };

    Disclosure.prototype.setGroup = function setGroup (group) {
      this.group = group;
    };

    prototypeAccessors.buttonHasFocus.get = function () {
      if (this.buttons.some(function (button) { return button.hasFocus; })) { return true; }
      return false;
    };

    prototypeAccessors.hasFocus.get = function () {
      if (this.element === document.activeElement) { return true; }
      if (this.element.querySelectorAll(':focus').length > 0) { return true; }
      return this.buttonHasFocus;
    };

    Disclosure.prototype.focus = function focus () {
      for (var i = 0; i < this.buttons.length; i++) {
        var button = this.buttons[i];
        if (button.hasAttribute) {
          button.element.focus();
          return;
        }
      }
    };

    Object.defineProperties( Disclosure.prototype, prototypeAccessors );
    Object.defineProperties( Disclosure, staticAccessors );

    return Disclosure;
  }(Instance));

  Disclosure.DISCLOSE_EVENT = DISCLOSE_EVENT;
  Disclosure.CONCEAL_EVENT = CONCEAL_EVENT;

  var DISCLOSURE_TYPES = {
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
  var KeyListener = function KeyListener (element) {
    this.element = element;
    this.collections = {};
  };

  /**
   * key: la touche de clavier
   * closure: la function à appliquer
   * type: event type, optionnel, si c'est en down, up ou press
   * stopPropagation: Boolean, permet d'empêcher le comportement par default de l'evenement
   */
  KeyListener.prototype._add = function _add (type, action) {
    if (this.collections[type] === undefined) { this.collections[type] = new KeyActionCollection(type, this.element); }
    this.collections[type].add(action);
  };

  KeyListener.prototype.down = function down (key, closure, preventDefault, stopPropagation) {
    this._add('down', new KeyAction(key, closure, preventDefault, stopPropagation));
  };

  KeyListener.prototype.up = function up (key, closure, preventDefault, stopPropagation) {
    this._add('up', new KeyAction(key, closure, preventDefault, stopPropagation));
  };

  KeyListener.prototype.dispose = function dispose () {
    for (var i = 0, list = this.collections; i < list.length; i += 1) {
        var collection = list[i];

        collection.dispose();
      }
    this.types = null;
  };

  var KeyActionCollection = function KeyActionCollection (type, element) {
    this.type = type;
    this.element = element;
    this.actions = [];
    this.binding = this.handle.bind(this);
    this.element.addEventListener('key' + type, this.binding);
  };

  KeyActionCollection.prototype.add = function add (action) {
    this.actions.push(action);
  };

  KeyActionCollection.prototype.handle = function handle (e) {
    for (var i = 0, list = this.actions; i < list.length; i += 1) {
        var action = list[i];

        action.handle(e);
      }
  };

  KeyActionCollection.prototype.dispose = function dispose () {
    this.element.removeEventListener('key' + this.type, this.binding);
    this.actions = null;
  };

  var KeyAction = function KeyAction (key, closure, preventDefault, stopPropagation) {
    this.key = key;
    this.closure = closure;
    this.preventDefault = preventDefault === true;
    this.stopPropagation = stopPropagation === true;
  };

  KeyAction.prototype.handle = function handle (e) {
    if (e.keyCode === this.key) {
      this.closure(e);
      if (this.preventDefault) {
        e.preventDefault();
      }
      if (this.stopPropagation) {
        e.stopPropagation();
      }
    }
  };

  KeyListener.TAB = 9;
  KeyListener.ESCAPE = 27;
  KeyListener.END = 35;
  KeyListener.HOME = 36;
  KeyListener.LEFT = 37;
  KeyListener.UP = 38;
  KeyListener.RIGHT = 39;
  KeyListener.DOWN = 40;

  var COLLAPSE_CLASS = ns('collapse');

  var collapses = [];
  var ascendants = {};

  /**
   * Tab coorespond au panel d'un élement Tabs (tab panel)
   * Tab étend disclosure qui ajoute/enleve le modifier --selected,
   * et ajoute/eleve l'attribut hidden, sur le panel
   */
  var Collapse = /*@__PURE__*/(function (Disclosure) {
    function Collapse (element) {
      Disclosure.call(this, element);
      collapses.push(this);
      this.requesting = this.request.bind(this);
      element.addEventListener('transitionend', this.transitionend.bind(this));
      if (this.disclosed) { this.unbound(); }
    }

    if ( Disclosure ) Collapse.__proto__ = Disclosure;
    Collapse.prototype = Object.create( Disclosure && Disclosure.prototype );
    Collapse.prototype.constructor = Collapse;

    var staticAccessors = { type: { configurable: true },selector: { configurable: true } };

    Collapse.prototype.gatherByAscendants = function gatherByAscendants () {
      if (this.group) { return; }

      for (var ascendant in ascendants) {
        var element = this.element.parentElement;

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
    };

    Collapse.prototype.gather = function gather () {
      this.gatherByAscendants();
      Disclosure.prototype.gather.call(this);
    };

    staticAccessors.type.get = function () { return DISCLOSURE_TYPES.expand; };
    staticAccessors.selector.get = function () { return COLLAPSE_CLASS; };

    Collapse.register = function register (ascendant, groupSelector) {
      ascendants[ascendant] = groupSelector;
      for (var i = 0, list = collapses; i < list.length; i += 1) {
        var collapse = list[i];

        collapse.gatherByAscendants();
      }
    };

    Collapse.prototype.transitionend = function transitionend (e) {
      if (!this.disclosed) { this.element.style.maxHeight = ''; }
    };

    Collapse.prototype.unbound = function unbound () {
      this.element.style.maxHeight = 'none';
    };

    Collapse.prototype.disclose = function disclose (withhold) {
      var this$1 = this;

      if (this.disclosed) { return; }
      this.unbound();
      this.adjust();
      this.requested = function () { Disclosure.prototype.disclose.call(this$1, withhold); };
      window.requestAnimationFrame(this.requesting);
    };

    Collapse.prototype.conceal = function conceal (withhold, preventFocus) {
      var this$1 = this;

      if (!this.disclosed) { return; }
      this.adjust();
      this.requested = function () { Disclosure.prototype.conceal.call(this$1, withhold, preventFocus); };
      window.requestAnimationFrame(this.requesting);
    };

    Collapse.prototype.request = function request () {
      if (this.requested) { this.requested(); }
      this.requested = null;
    };

    Collapse.prototype.adjust = function adjust () {
      this.element.style.setProperty('--collapser', 'none');
      var height = this.element.offsetHeight;
      this.element.style.setProperty('--collapse', -height + 'px');
      this.element.style.setProperty('--collapser', '');
    };

    Collapse.prototype.reset = function reset () {
      if (!this.pristine) { this.disclosed = false; }
    };

    Object.defineProperties( Collapse, staticAccessors );

    return Collapse;
  }(Disclosure));

  var Equisized = function Equisized (selector, group) {
    this.selector = selector;
    this.group = group;
    this.elements = this.group.querySelectorAll(this.selector);
    this.maxWidth = 0;

    this.changing = this.change.bind(this);
    window.addEventListener('resize', this.changing);
    window.addEventListener('load', this.changing); // fix change before css load
    // this.change();
  };

  Equisized.prototype.change = function change () {
    this.reset();
    for (var i = 0; i < this.elements.length; i++) {
      var tmpWWidth = this._getWidth(this.elements[i]);
      if (tmpWWidth > this.maxWidth) {
        this.maxWidth = tmpWWidth;
      }
    }
    this.apply();
  };

  Equisized.prototype.apply = function apply () {
    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].style.width = this.maxWidth + 1 + 'px';
    }
  };

  Equisized.prototype.reset = function reset () {
    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].style.width = 'auto';
    }
    this.maxWidth = 0;
  };

  Equisized.prototype._getWidth = function _getWidth (el) {
    var width = el.offsetWidth;
    var style = getComputedStyle(el);
    width += parseInt(style.marginLeft) + parseInt(style.marginRight);
    return width;
  };

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

  var build = function () {
    Collapse.build(document);
  };

  /* eslint-disable no-new */

  new Initializer(("." + COLLAPSE_CLASS), [build]);

}());
//# sourceMappingURL=core.nomodule.js.map

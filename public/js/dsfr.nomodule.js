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

  var prototypeAccessors$3 = { isRendering: { configurable: true },isResizing: { configurable: true } };

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

  prototypeAccessors$3.isRendering.get = function () { return this._isRendering; };

  prototypeAccessors$3.isRendering.set = function (value) {
    if (this._isRendering === value) { return; }
    this._isRendering = value;
    // TODO add & remove rendering
  };

  Instance.prototype.render = function render () {};

  prototypeAccessors$3.isResizing.get = function () { return this._isResizing; };

  prototypeAccessors$3.isResizing.set = function (value) {
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

  Object.defineProperties( Instance.prototype, prototypeAccessors$3 );

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

  var prototypeAccessors$2 = { length: { configurable: true },index: { configurable: true },current: { configurable: true },hasFocus: { configurable: true } };
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

  prototypeAccessors$2.length.get = function () { return this.members.length; };

  prototypeAccessors$2.index.get = function () { return this._index; };

  prototypeAccessors$2.index.set = function (value) {
    if (value < -1 || value >= this.length || this._index === value) { return; }
    if (this.current !== null) { this.current.conceal(true, true); }
    this._index = value;
    this._current = this._index > -1 ? this.members[this._index] : null;
    if (this.current !== null) { this.current.disclose(true); }
    this.apply();
  };

  prototypeAccessors$2.current.get = function () { return this._current; };

  prototypeAccessors$2.current.set = function (member) {
    this.index = this.members.indexOf(member);
  };

  prototypeAccessors$2.hasFocus.get = function () {
    if (this.current === undefined) { return null; }
    return this.current.hasFocus;
  };

  DisclosuresGroup.prototype.apply = function apply () {};

  Object.defineProperties( DisclosuresGroup.prototype, prototypeAccessors$2 );
  Object.defineProperties( DisclosuresGroup, staticAccessors );

  var DisclosureButton = function DisclosureButton (element, disclosure) {
    this.element = element;
    this.disclosure = disclosure;
    this.hasAttribute = this.element.hasAttribute(this.disclosure.attributeName);
    this.element.addEventListener('click', this.click.bind(this));
    this.observer = new MutationObserver(this.mutate.bind(this));
    this.observe();
  };

  var prototypeAccessors$1 = { disclosed: { configurable: true },hasFocus: { configurable: true } };

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

  prototypeAccessors$1.disclosed.get = function () {
    return this.element.getAttribute(this.disclosure.attributeName) === 'true';
  };

  prototypeAccessors$1.hasFocus.get = function () {
    return this.element === document.activeElement;
  };

  Object.defineProperties( DisclosureButton.prototype, prototypeAccessors$1 );

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

  var build$8 = function () {
    Collapse.build(document);
  };

  /* eslint-disable no-new */

  new Initializer(("." + COLLAPSE_CLASS), [build$8]);

  var ACCORDIONS_GROUP = api.core.ns('accordions-group');
  var ACCORDION_ASCENDANT = api.core.ns('accordion');

  var AccordionsGroup = /*@__PURE__*/(function (superclass) {
    function AccordionsGroup () {
      superclass.apply(this, arguments);
    }

    if ( superclass ) AccordionsGroup.__proto__ = superclass;
    AccordionsGroup.prototype = Object.create( superclass && superclass.prototype );
    AccordionsGroup.prototype.constructor = AccordionsGroup;

    var staticAccessors = { selector: { configurable: true } };

    staticAccessors.selector.get = function () { return ACCORDIONS_GROUP; };

    Object.defineProperties( AccordionsGroup, staticAccessors );

    return AccordionsGroup;
  }(api.core.DisclosuresGroup));

  api.AccordionsGroup = AccordionsGroup;

  api.Collapse.register(ACCORDION_ASCENDANT, AccordionsGroup);

  var BREADCRUMB_COLLAPSE_SELECTOR = (api.core.ns.selector('breadcrumb')) + " " + (api.core.ns.selector('collapse'));

  var Breadcrumb = /*@__PURE__*/(function (superclass) {
    function Breadcrumb (element) {
      superclass.call(this, element);
      this.collapse = api.core.Instance.getInstances(element, api.Collapse)[0];
      this.links = [].concat( this.element.querySelectorAll('a[href]') );
      this.count = 0;
      if (this.links.length) {
        this.listen(api.core.Disclosure.DISCLOSE_EVENT, this.focus.bind(this));
        // TODO: refactor avec instance
        this.resizing = this.resize.bind(this);
        window.addEventListener('resize', this.resizing);
      }
    }

    if ( superclass ) Breadcrumb.__proto__ = superclass;
    Breadcrumb.prototype = Object.create( superclass && superclass.prototype );
    Breadcrumb.prototype.constructor = Breadcrumb;

    Breadcrumb.prototype.focus = function focus () {
      var this$1 = this;

      this.links[0].focus();
      api.core.engine.renderer.next(function () { this$1.verify(); });
    };

    Breadcrumb.prototype.verify = function verify () {
      this.count++;
      if (this.count > 100) { return; }
      if (document.activeElement !== this.links[0]) { this.focus(); }
    };

    Breadcrumb.prototype.resize = function resize () {
      if (window.matchMedia('(min-width: 48em)').matches) {
        if (this.collapse.buttons[0] === document.activeElement) { this.links.focus(); }
      } else {
        if (this.links.indexOf(document.activeElement) > -1) { this.collapse.focus(); }
      }
    };

    return Breadcrumb;
  }(api.core.Instance));

  var build$7 = function () {
    var breadcrumbs = [];
    var breadcrumbNodes = document.querySelectorAll(BREADCRUMB_COLLAPSE_SELECTOR);
    for (var i = 0; i < breadcrumbNodes.length; i++) { breadcrumbs.push(new Breadcrumb(breadcrumbNodes[i])); }
  };

  /* eslint-disable no-new */

  new api.core.Initializer(BREADCRUMB_COLLAPSE_SELECTOR, [build$7]);

  var BUTTON_SELECTOR = api.core.ns.selector('btn');
  var BUTTONS_GROUP_SELECTOR = api.core.ns.selector('btns-group');
  var EQUISIZED_BUTTONS_GROUP_SELECTOR = api.core.ns.selector('btns-group--equisized');

  var build$6 = function () {
    var group = document.querySelectorAll(EQUISIZED_BUTTONS_GROUP_SELECTOR);
    var arrayEquisized = [];
    for (var i = 0; i < group.length; i++) {
      arrayEquisized.push(new api.Equisized(BUTTON_SELECTOR, group[i]));
    }
  };

  /* eslint-disable no-new */

  new api.core.Initializer(BUTTONS_GROUP_SELECTOR, [build$6]);

  var MODAL_SELECTOR = api.core.ns.selector('modal');
  var MODAL_CLASS = api.core.ns('modal');
  var NO_SCROLL_CLASS = api.core.ns('no-scroll');
  var SCROLL_SHADOW_CLASS = api.core.ns('scroll-shadow');
  var MODAL_BODY_SELECTOR = api.core.ns.selector('modal__body');
  var OFFSET_MOBILE = 32; // 32px => 8v => 2rem

  var unordereds = [
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

  var UNORDEREDS = unordereds.join();

  var ordereds = [
    '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
  ];

  var ORDEREDS = ordereds.join();

  var isFocusable = function (element, container) {
    if (window.getComputedStyle(element).visibility === 'hidden') { return false; }
    if (container === undefined) { container = element; }

    while (container.contains(element)) {
      if (window.getComputedStyle(element).display === 'none') { return false; }
      element = element.parentElement;
    }

    return true;
  };

  var FocusTrap = function FocusTrap (onTrap, onUntrap) {
    this.element = null;
    this.activeElement = null;
    this.onTrap = onTrap;
    this.onUntrap = onUntrap;
    this.waiting = this.wait.bind(this);
    this.handling = this.handle.bind(this);
    this.current = null;
  };

  var prototypeAccessors = { trapped: { configurable: true },focusables: { configurable: true } };

  prototypeAccessors.trapped.get = function () { return this.element !== null; };

  FocusTrap.prototype.trap = function trap (element) {
    if (this.trapped) { this.untrap(); }

    this.element = element;
    this.isTrapping = true;
    this.wait();

    if (this.onTrap) { this.onTrap(); }
  };

  FocusTrap.prototype.wait = function wait () {
    if (!isFocusable(this.element)) {
      api.core.engine.renderer.next(this.waiting);
      return;
    }

    this.trapping();
  };

  FocusTrap.prototype.trapping = function trapping () {
    if (!this.isTrapping) { return; }
    this.isTrapping = false;
    var focusables = this.focusables;
    if (focusables.length) { focusables[0].focus(); }
    this.element.setAttribute('aria-modal', true);
    this.element.addEventListener('keydown', this.handling);

    this.stunneds = [];
    // this.stun(document.body);
  };

  FocusTrap.prototype.stun = function stun (node) {
    for (var i = 0, list = node.children; i < list.length; i += 1) {
      var child = list[i];

        if (child === this.element) { continue; }
      if (child.contains(this.element)) {
        this.stun(child);
        continue;
      }
      this.stunneds.push(new Stunned(child));
    }
  };

  FocusTrap.prototype.handle = function handle (e) {
    if (e.keyCode !== 9) { return; }

    var focusables = this.focusables;
    if (focusables.length === 0) { return; }

    var first = focusables[0];
    var last = focusables[focusables.length - 1];

    var index = focusables.indexOf(document.activeElement);

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
  };

  prototypeAccessors.focusables.get = function () {
      var this$1 = this;

    var unordereds = [].concat( this.element.querySelectorAll(UNORDEREDS) );

    /**
     *filtrage des radiobutttons de même name (la navigations d'un groupe de radio se fait à la flèche et non pas au tab
     **/
    var radios = [].concat( document.documentElement.querySelectorAll('input[type="radio"]') );

    if (radios.length) {
      var groups = {};

      for (var i = 0, list = radios; i < list.length; i += 1) {
        var radio = list[i];

          var name = radio.getAttribute('name');
        if (groups[name] === undefined) { groups[name] = new RadioButtonGroup(name); }
        groups[name].push(radio);
      }

      unordereds = unordereds.filter(function (unordered) {
        if (unordered.tagName.toLowerCase() !== 'input' || unordered.getAttribute('type').toLowerCase() !== 'radio') { return true; }
        var name = unordered.getAttribute('name');
        return groups[name].keep(unordered);
      });
    }

    var ordereds = [].concat( this.element.querySelectorAll(ORDEREDS) );

    ordereds.sort(function (a, b) { return a.tabIndex - b.tabIndex; });

    var noDuplicates = unordereds.filter(function (element) { return ordereds.indexOf(element) === -1; });
    var concateneds = ordereds.concat(noDuplicates);
    return concateneds.filter(function (element) { return element.tabIndex !== '-1' && isFocusable(element, this$1.element); });
  };

  FocusTrap.prototype.untrap = function untrap () {
    if (!this.trapped) { return; }
    this.isTrapping = false;

    this.element.removeAttribute('aria-modal');
    this.element.removeEventListener('keydown', this.handling);
    this.element = null;

    // for (const stunned of this.stunneds) stunned.unstun();
    // this.stunneds = [];

    if (this.onUntrap) { this.onUntrap(); }
  };

  Object.defineProperties( FocusTrap.prototype, prototypeAccessors );

  var Stunned = function Stunned (element) {
    this.element = element;
    this.hidden = element.getAttribute('aria-hidden');
    this.inert = element.getAttribute('inert');

    this.element.setAttribute('aria-hidden', true);
    this.element.setAttribute('inert', '');
  };

  Stunned.prototype.unstun = function unstun () {
    if (this.hidden === null) { this.element.removeAttribute('aria-hidden'); }
    else { this.element.setAttribute('aria-hidden', this.hidden); }

    if (this.inert === null) { this.element.removeAttribute('inert'); }
    else { this.element.setAttribute('inert', this.inert); }
  };

  var RadioButtonGroup = function RadioButtonGroup (name) {
    this.name = name;
    this.buttons = [];
  };

  RadioButtonGroup.prototype.push = function push (button) {
    this.buttons.push(button);
    if (button === document.activeElement || button.checked || this.selected === undefined) { this.selected = button; }
  };

  RadioButtonGroup.prototype.keep = function keep (button) {
    return this.selected === button;
  };

  var ModalsGroup = /*@__PURE__*/(function (superclass) {
    function ModalsGroup () {
      superclass.call(this);
      this.trap = new FocusTrap();
    }

    if ( superclass ) ModalsGroup.__proto__ = superclass;
    ModalsGroup.prototype = Object.create( superclass && superclass.prototype );
    ModalsGroup.prototype.constructor = ModalsGroup;

    ModalsGroup.prototype.apply = function apply (value, initial) {
      superclass.prototype.apply.call(this, value, initial);
      if (this.current === null) { this.trap.untrap(); }
      else { this.trap.trap(this.current.element); }
    };

    return ModalsGroup;
  }(api.core.DisclosuresGroup));

  var group = new ModalsGroup();

  var Modal = /*@__PURE__*/(function (superclass) {
    function Modal (element) {
      superclass.call(this, element);
      this.body = this.element.querySelector(MODAL_BODY_SELECTOR);
      this.scrollDistance = 0;
      this.scrolling = this.resize.bind(this, false);
      this.resizing = this.resize.bind(this, true);
      this.init();
      this.resize(true);
    }

    if ( superclass ) Modal.__proto__ = superclass;
    Modal.prototype = Object.create( superclass && superclass.prototype );
    Modal.prototype.constructor = Modal;

    var prototypeAccessors = { GroupConstructor: { configurable: true } };
    var staticAccessors = { type: { configurable: true },selector: { configurable: true } };

    Modal.prototype.init = function init () {
      this.element.addEventListener('click', this.click.bind(this));

      this.keyListener = new api.KeyListener(this.element);
      this.keyListener.down(api.KeyListener.ESCAPE, this.conceal.bind(this), true, true);

      if (this.body) {
        this.body.addEventListener('scroll', this.scrolling);
        window.addEventListener('resize', this.resizing);
        // window.addEventListener('orientationchange', this.resizing);
      }
    };

    Modal.prototype.click = function click (e) {
      if (this.body && this.body !== e.target && !this.body.contains(e.target)) { this.conceal(); }
    };

    Modal.prototype.gather = function gather () {
      group.add(this);
    };

    Modal.prototype.disclose = function disclose (withhold) {
      if (!superclass.prototype.disclose.call(this, withhold)) { return false; }
      this.resize(true);
      this.handleScroll(false);
      return true;
    };

    Modal.prototype.conceal = function conceal (withhold, preventFocus) {
      if (!superclass.prototype.conceal.call(this, withhold, preventFocus)) { return false; }
      this.handleScroll(true);
      return true;
    };

    /**
     * Fixe l'arrière plan quand la modal est ouverte
     */
    // TODO: créer une fonction de fix de scroll dans core (api.noScroll = true)
    Modal.prototype.handleScroll = function handleScroll (isScrollable) {
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
    };

    /**
     * Ajoute une ombre autour du footer lorsque l'on peut scroller dans la modale
     * corrige le 100vh, en mobile notamment, lorsque la barre navigateur est présente par exemple.
     */
    Modal.prototype.resize = function resize (isResizing, e) {
      var this$1 = this;

      if (!this.body) { return; }
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
        api.core.engine.renderer.next(function () {
          this$1.body.style.maxHeight = (window.innerHeight - OFFSET_MOBILE) + 'px';
        });
      }
    };

    staticAccessors.type.get = function () { return api.core.DISCLOSURE_TYPES.opened; };
    staticAccessors.selector.get = function () { return MODAL_CLASS; };

    prototypeAccessors.GroupConstructor.get = function () { return ModalsGroup; };

    Object.defineProperties( Modal.prototype, prototypeAccessors );
    Object.defineProperties( Modal, staticAccessors );

    return Modal;
  }(api.core.Disclosure));

  api.Modal = Modal;
  api.ModalsGroup = ModalsGroup;
  api.FocusTrap = FocusTrap;

  /**
   * initialise tout les éléments Modal dans la page
   */
  var build$5 = function () {
    Modal.build(document);
  };

  /* eslint-disable no-new */

  new api.core.Initializer(MODAL_SELECTOR, [build$5]);

  var NAVIGATION_CLASS = api.core.ns('nav');
  var NAVIGATION_LIST_CLASS = api.core.ns('nav__list');
  var NAVIGATION_ITEM_CLASS = api.core.ns('nav__item');
  var NAVIGATION_ITEM_RIGHT_CLASS = api.core.ns('nav__item--align-right');
  var NAVIGATION_MENU_CLASS = api.core.ns('menu');

  var Navigation = /*@__PURE__*/(function (superclass) {
    function Navigation (id, element) {
      superclass.call(this, id, element);

      this.menus = [];

      this.navList = element.querySelector(("." + NAVIGATION_LIST_CLASS));

      document.addEventListener('focusout', this.focusOut.bind(this));
      window.addEventListener('resize', this.resize.bind(this));
      window.addEventListener('orientationchange', this.resize.bind(this));
      this.resize();
    }

    if ( superclass ) Navigation.__proto__ = superclass;
    Navigation.prototype = Object.create( superclass && superclass.prototype );
    Navigation.prototype.constructor = Navigation;

    var prototypeAccessors = { index: { configurable: true } };
    var staticAccessors = { selector: { configurable: true } };

    staticAccessors.selector.get = function () { return NAVIGATION_CLASS; };

    Navigation.prototype.add = function add (member) {
      superclass.prototype.add.call(this, member);

      if (member.element.classList.contains(NAVIGATION_MENU_CLASS)) {
        this.menus.push(new NavigationMenu(member, this.navList.getBoundingClientRect().right));
      }
    };

    Navigation.prototype.focusOut = function focusOut (e) {
      var this$1 = this;

      requestAnimationFrame(function () {
        if (this$1.current !== null && !this$1.current.hasFocus) { this$1.index = -1; }
      });
    };

    prototypeAccessors.index.get = function () { return superclass.prototype.index; };

    prototypeAccessors.index.set = function (value) {
      if (value === -1 && this.current !== null && this.current.hasFocus) { this.current.focus(); }
      superclass.prototype.index = value;
    };

    Navigation.prototype.resize = function resize () {
      var right = this.navList.getBoundingClientRect().right;

      for (var i = 0, list = this.menus; i < list.length; i += 1) {
        var menu = list[i];

        menu.place(right);
      }
    };

    Object.defineProperties( Navigation.prototype, prototypeAccessors );
    Object.defineProperties( Navigation, staticAccessors );

    return Navigation;
  }(api.core.DisclosuresGroup));

  var NavigationMenu = function NavigationMenu (collapse, right) {
    this.initialize(collapse);
    this.place(right);
  };

  NavigationMenu.prototype.initialize = function initialize (collapse) {
    this.element = collapse.element;

    for (var i = 0, list = collapse.buttons; i < list.length; i += 1) {
      var button = list[i];

        if (!button.hasAttribute) { continue; }
      this.button = button.element;
      break;
    }

    var item = this.element.parentElement;
    while (item) {
      if (item.classList.contains(NAVIGATION_ITEM_CLASS)) {
        this.item = item;
        break;
      }
      item = item.parentElement;
    }
  };

  NavigationMenu.prototype.place = function place (right) {
    var styles = getComputedStyle(this.element);
    var width = parseFloat(styles.width);
    var left = this.button.getBoundingClientRect().left;

    if (left + width > right) { api.core.addClass(this.item, NAVIGATION_ITEM_RIGHT_CLASS); }
    else { api.core.removeClass(this.item, NAVIGATION_ITEM_RIGHT_CLASS); }
  };

  api.Navigation = Navigation;

  api.Collapse.register(NAVIGATION_CLASS, Navigation);

  var SCHEME_ATTR = api.core.ns.attr('theme');
  var TRANSITION_ATTR = api.core.ns.attr('transition');

  /**
   * TODO: implémenter la valeur system
   * window.matchMedia("(prefers-color-scheme: dark)").addListener(
   e => e.matches && activateDarkMode()) // listener
   );
   */

  var Scheme = function Scheme () {
    this.init();
  };

  Scheme.prototype.init = function init () {
      var this$1 = this;

    this.root = document.documentElement;

    this.scheme = localStorage.getItem('scheme')
      ? localStorage.getItem('scheme')
      : null;

    if (this.scheme === null) {
      var scheme = this.root.getAttribute(SCHEME_ATTR);
      if (scheme === 'dark' || scheme === 'light') {
        this.scheme = scheme;
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.scheme = 'dark';
        localStorage.setItem('scheme', 'dark');
      } else { this.scheme = 'light'; }
    }

    if (this.scheme === 'dark') {
      if (!this.root.hasAttribute(TRANSITION_ATTR)) {
        this.root.setAttribute(SCHEME_ATTR, 'dark');
      } else {
        this.root.removeAttribute(TRANSITION_ATTR);
        this.root.setAttribute(SCHEME_ATTR, 'dark');

        setTimeout(function () {
          this$1.root.setAttribute(TRANSITION_ATTR, '');
        }, 300);
      }
    } else { this.root.setAttribute(SCHEME_ATTR, 'light'); }

    this.observer = new MutationObserver(this.mutate.bind(this));
    this.observer.observe(this.root, { attributes: true });
  };

  Scheme.prototype.mutate = function mutate (mutations) {
      var this$1 = this;

    mutations.forEach(function (mutation) {
      if (mutation.type === 'attributes' && mutation.attributeName === SCHEME_ATTR) {
        var scheme = this$1.root.getAttribute(SCHEME_ATTR);
        if (scheme === 'dark') {
          localStorage.setItem('scheme', 'dark');
        } else if (scheme === 'light') {
          localStorage.setItem('scheme', 'light');
        }
      }
    });
  };

  api.Scheme = Scheme;

  var RADIOS_THEME_NAME = "input[name=\"" + (api.core.ns.selector('radios-theme', '')) + "\"]";
  var SWITCH_THEME_ID = api.core.ns.selector('switch-theme', '#');
  var THEME_ATTR = api.core.ns.attr('theme');

  /* eslint-disable no-new */

  var build$4 = function () {
    new Scheme();
  };

  var SwitchTheme = function SwitchTheme () {
    this.attributeName = THEME_ATTR;
    this.theme = null;
    this.radios = document.querySelectorAll(RADIOS_THEME_NAME);

    for (var i = 0; i < this.radios.length; i++) {
      this.radios[i].addEventListener('change', this.change.bind(this));
    }

    this.observer = new MutationObserver(this.mutate.bind(this));
    this.observe();
    this.apply();
  };

  SwitchTheme.prototype.observe = function observe () {
    this.observer.observe(document.documentElement, { attributes: true });
  };

  SwitchTheme.prototype.mutate = function mutate (mutations) {
      var this$1 = this;

    mutations.forEach(function (mutation) {
      if (mutation.type === 'attributes' && mutation.attributeName === this$1.attributeName) {
        this$1.apply();
      }
    });
  };

  SwitchTheme.prototype.apply = function apply () {
    var theme = document.documentElement.getAttribute(this.attributeName);
    this.isApplying = true;
    for (var i = 0; i < this.radios.length; i++) {
      this.radios[i].checked = this.radios[i].value === theme;
    }
    this.isApplying = false;
  };

  SwitchTheme.prototype.change = function change () {
    if (this.isApplying) { return; }
    if (this.observer) { this.observer.disconnect(); }
    this.theme = document.querySelector(RADIOS_THEME_NAME + ':checked');
    if (this.theme) {
      document.documentElement.setAttribute(this.attributeName, this.theme.value);
    } else {
      document.documentElement.removeAttribute(this.attributeName);
    }
    if (this.observer) { this.observe(); }
  };

  /* eslint-disable no-new */

  var build$3 = function () {
    new SwitchTheme();
  };

  /* eslint-disable no-new */

  new api.core.Initializer((":root[" + SCHEME_ATTR + "]"), [build$4]);
  new api.core.Initializer(("" + SWITCH_THEME_ID), [build$3]);

  var SIDEMENU_CLASS = api.core.ns('sidemenu');
  var SIDEMENU_LIST_CLASS = api.core.ns('sidemenu__list');

  /* eslint-disable no-new */

  api.Collapse.register(SIDEMENU_CLASS, SIDEMENU_LIST_CLASS);

  var TABLE_SELECTOR = api.core.ns.selector('table');
  // export const TABLE_CLASS = api.core.ns('table');
  var TABLE_SCROLLING_SELECTOR = (api.core.ns.selector('table')) + ":not(" + (api.core.ns.selector('table--no-scroll')) + ")";
  var LEFT = 'left';
  var RIGHT = 'right';
  var SHADOW_CLASS = api.core.ns('table--shadow');
  var SHADOW_LEFT_CLASS = api.core.ns('table--shadow-left');
  var SHADOW_RIGHT_CLASS = api.core.ns('table--shadow-right');
  var WRAPPER_CLASS = api.core.ns('table__wrapper');
  var CAPTION_BOTTOM_CLASS = api.core.ns('table--caption-bottom');
  var SCROLL_OFFSET = 1; // valeur en px du scroll avant laquelle le shadow s'active ou se desactive

  var Table = function Table (table) {
    this.init(table);
  };

  Table.prototype.init = function init (table) {
    this.table = table;
    this.tableElem = this.table.querySelector('table');
    this.tableContent = this.tableElem.querySelector('tbody');
    this.isScrollable = this.tableContent.offsetWidth > this.tableElem.offsetWidth;
    this.caption = this.tableElem.querySelector('caption');
    this.captionHeight = 0;
    this.wrap();

    var scrolling = this.change.bind(this);
    this.tableElem.addEventListener('scroll', scrolling);
    this.change();
  };

  Table.prototype.change = function change () {
    var newScroll = this.tableContent.offsetWidth > this.tableElem.offsetWidth;
    var firstTimeScrollable = this.tableElem.offsetWidth > this.table.offsetWidth;
    if (newScroll || firstTimeScrollable) {
      this.scroll();
      this.handleCaption();
    } else {
      if (newScroll !== this.isScrollable) { this.delete(); }
    }
    this.isScrollable = newScroll;
    firstTimeScrollable = false;
  };

  Table.prototype.delete = function delete$1 () {
    api.core.removeClass(this.table, SHADOW_RIGHT_CLASS);
    api.core.removeClass(this.table, SHADOW_LEFT_CLASS);
    api.core.removeClass(this.table, SHADOW_CLASS);
    if (this.caption) {
      this.tableElem.style.marginTop = '';
      this.caption.style.top = '';
      this.tableElem.style.marginBottom = '';
      this.caption.style.bottom = '';
    }
  };

  Table.prototype.scroll = function scroll () {
    api.core.addClass(this.table, SHADOW_CLASS);
    this.setShadowPosition();
  };

  /* ajoute un wrapper autour du tableau */
  Table.prototype.wrap = function wrap () {
    var wrapperHtml = document.createElement('div');
    wrapperHtml.className = WRAPPER_CLASS;
    this.table.insertBefore(wrapperHtml, this.tableElem);
    wrapperHtml.appendChild(this.tableElem);
    this.tableInnerWrapper = wrapperHtml;
  };

  /* affiche les blocs shadow en fonction de la position du scroll, en ajoutant la classe visible */
  Table.prototype.setShadowPosition = function setShadowPosition () {
    var tableScrollLeft = this.getScrollPosition(LEFT);
    var tableScrollRight = this.getScrollPosition(RIGHT);

    // on inverse en cas de lecture droite - gauche
    if (document.documentElement.getAttribute('dir') === 'rtl') {
      this.setShadowVisibility(RIGHT, tableScrollLeft);
      this.setShadowVisibility(LEFT, tableScrollRight);
    } else {
      this.setShadowVisibility(LEFT, tableScrollLeft);
      this.setShadowVisibility(RIGHT, tableScrollRight);
    }
  };

  /* Donne le nombre de pixels scrollés honrizontalement dans un element scrollable */
  Table.prototype.getScrollPosition = function getScrollPosition (side) {
    var inverter = 1;
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
  };

  /* positionne la caption en top négatif et ajoute un margin-top au wrapper */
  Table.prototype.handleCaption = function handleCaption () {
    if (this.caption) {
      var style = getComputedStyle(this.caption);
      var newHeight = this.caption.offsetHeight + parseInt(style.marginTop) + parseInt(style.marginBottom);
      this.captionHeight = newHeight;
      if (this.table.classList.contains(CAPTION_BOTTOM_CLASS)) {
        this.tableElem.style.marginBottom = this.captionHeight + 'px';
        this.caption.style.bottom = -this.captionHeight + 'px';
      } else {
        this.tableElem.style.marginTop = this.captionHeight + 'px';
        this.caption.style.top = -this.captionHeight + 'px';
      }
    }
  };

  /* ajoute la classe fr-table--shadow-right ou fr-table--shadow-right sur fr-table
   en fonction d'une valeur de scroll et du sens (right, left) */
  Table.prototype.setShadowVisibility = function setShadowVisibility (side, scrollPosition) {
    // si on a pas scroll, ou qu'on scroll jusqu'au bout
    if (scrollPosition <= SCROLL_OFFSET) {
      if (side === LEFT) { api.core.removeClass(this.table, SHADOW_LEFT_CLASS); }
      else if (side === RIGHT) { api.core.removeClass(this.table, SHADOW_RIGHT_CLASS); }
    } else {
      if (side === LEFT) { api.core.addClass(this.table, SHADOW_LEFT_CLASS); }
      else if (side === RIGHT) { api.core.addClass(this.table, SHADOW_RIGHT_CLASS); }
    }
  };

  api.Table = Table;

  var tables = [];

  var change = function () {
    for (var i = 0; i < tables.length; i++) { tables[i].change(); }
  };

  var build$2 = function () {
    var tableNodes = document.querySelectorAll(TABLE_SCROLLING_SELECTOR);
    for (var i = 0; i < tableNodes.length; i++) { tables.push(new Table(tableNodes[i])); }

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
  var TabButton = /*@__PURE__*/(function (superclass) {
    function TabButton () {
      superclass.apply(this, arguments);
    }

    if ( superclass ) TabButton.__proto__ = superclass;
    TabButton.prototype = Object.create( superclass && superclass.prototype );
    TabButton.prototype.constructor = TabButton;

    TabButton.prototype.apply = function apply (value) {
      superclass.prototype.apply.call(this, value);
      if (this.hasAttribute) {
        this.element.setAttribute('tabindex', value ? '0' : '-1');
      }
    };

    return TabButton;
  }(api.core.DisclosureButton));

  var TABS_SELECTOR = api.core.ns.selector('tabs');
  var TABS_CLASS = api.core.ns('tabs');
  var TAB_CLASS = api.core.ns('tabs__tab');
  var PANEL_CLASS = api.core.ns('tabs__panel');
  var LIST_CLASS = api.core.ns('tabs__list');

  /**
  * TabGroup est la classe étendue de DiscosuresGroup
  * Correspond à un objet Tabs avec plusieurs tab-button & Tab (panel)
  */
  var TabsGroup = /*@__PURE__*/(function (superclass) {
    function TabsGroup (id, element) {
      superclass.call(this, id, element);
      this.list = element.querySelector(("." + LIST_CLASS));

      element.addEventListener('transitionend', this.transitionend.bind(this));

      this.init();
      api.core.engine.renderer.add(this.render.bind(this));
    }

    if ( superclass ) TabsGroup.__proto__ = superclass;
    TabsGroup.prototype = Object.create( superclass && superclass.prototype );
    TabsGroup.prototype.constructor = TabsGroup;

    var staticAccessors = { selector: { configurable: true } };

    staticAccessors.selector.get = function () { return TABS_CLASS; };

    TabsGroup.prototype.transitionend = function transitionend (e) {
      this.element.style.transition = 'none';
    };

    TabsGroup.prototype.init = function init () {
      this.keyListener = new api.KeyListener(this.element);
      this.keyListener.down(api.KeyListener.RIGHT, this.arrowRightPress.bind(this), true, true);
      this.keyListener.down(api.KeyListener.LEFT, this.arrowLeftPress.bind(this), true, true);
      this.keyListener.down(api.KeyListener.HOME, this.homePress.bind(this), true, true);
      this.keyListener.down(api.KeyListener.END, this.endPress.bind(this), true, true);
    };

    /**
     * Selectionne l'element suivant de la liste si on est sur un bouton
     * Si on est à la fin on retourne au début
     */
    TabsGroup.prototype.arrowRightPress = function arrowRightPress () {
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
    TabsGroup.prototype.arrowLeftPress = function arrowLeftPress () {
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
    TabsGroup.prototype.homePress = function homePress () {
      if (document.activeElement.classList.contains(TAB_CLASS)) {
        this.index = 0;
        this.focus();
      }
    };
    /**
     * Selectionne le dernier element de la liste si on est sur un bouton
     */
    TabsGroup.prototype.endPress = function endPress () {
      if (document.activeElement.classList.contains(TAB_CLASS)) {
        this.index = this.length - 1;
        this.focus();
      }
    };
    TabsGroup.prototype.focus = function focus () {
      if (this.current) { this.current.focus(); }
    };

    TabsGroup.prototype.apply = function apply () {
      for (var i = 0; i < this._index; i++) { this.members[i].translate(-1); }
      this.current.element.style.transform = '';
      for (var i$1 = this._index + 1; i$1 < this.length; i$1++) { this.members[i$1].translate(1); }
      this.element.style.transition = '';
    };

    TabsGroup.prototype.add = function add (tab) {
      superclass.prototype.add.call(this, tab);
      if (this.length === 1 || tab.disclosed) { this.current = tab; }
      else {
        var index = this.members.indexOf(tab);
        if (this._index > -1 && this._index !== index) { tab.translate(index < this._index ? -1 : 1, true); }
      }
    };

    TabsGroup.prototype.render = function render () {
      if (this.current === null) { return; }
      var paneHeight = Math.round(this.current.element.offsetHeight);
      if (this.panelHeight === paneHeight) { return; }
      this.panelHeight = paneHeight;
      this.element.style.height = (this.panelHeight + this.list.offsetHeight) + 'px';
    };

    Object.defineProperties( TabsGroup, staticAccessors );

    return TabsGroup;
  }(api.core.DisclosuresGroup));

  /**
    * Tab coorespond au panel d'un élement Tabs (tab panel)
    * Tab étend disclosure qui ajoute/enleve le modifier --selected,
    * et ajoute/eleve l'attribut hidden, sur le panel
    */
  var Tab = /*@__PURE__*/(function (superclass) {
    function Tab () {
      superclass.apply(this, arguments);
    }

    if ( superclass ) Tab.__proto__ = superclass;
    Tab.prototype = Object.create( superclass && superclass.prototype );
    Tab.prototype.constructor = Tab;

    var prototypeAccessors = { GroupConstructor: { configurable: true } };
    var staticAccessors = { type: { configurable: true },selector: { configurable: true } };

    staticAccessors.type.get = function () { return api.core.DISCLOSURE_TYPES.select; };
    staticAccessors.selector.get = function () { return PANEL_CLASS; };

    prototypeAccessors.GroupConstructor.get = function () { return TabsGroup; };

    Tab.prototype.buttonFactory = function buttonFactory (element) {
      return new TabButton(element, this);
    };

    Tab.prototype.translate = function translate (direction, initial) {
      if (initial) { this.element.style.transition = 'none'; }
      this.element.style.transform = "translate(" + (direction * 100) + "%)";
      if (initial) { this.element.style.transition = ''; }
    };

    Tab.prototype.reset = function reset () {
      this.group.index = 0;
    };

    Object.defineProperties( Tab.prototype, prototypeAccessors );
    Object.defineProperties( Tab, staticAccessors );

    return Tab;
  }(api.core.Disclosure));

  api.Tab = Tab;
  api.TabButton = TabButton;
  api.TabsGroup = TabsGroup;

  /**
  * Initialise tout les éléments Tab dans la page
  */
  var build$1 = function () {
    Tab.build(document);
  };

  /* eslint-disable no-new */

  new api.core.Initializer(TABS_SELECTOR, [build$1]);

  var HEADER_SELECTOR = api.core.ns.selector('header');
  var HEADER_SEARCH_SELECTOR = api.core.ns.selector('header__search');
  var HEADER_MENU_SELECTOR = api.core.ns.selector('header__menu');
  var HEADER_TOOLS_LINKS_SELECTOR = api.core.ns.selector('header__tools-links');
  var HEADER_MENU_LINKS_SELECTOR = api.core.ns.selector('header__menu-links');
  var HEADER_LINKS_GROUP_SELECTOR = HEADER_TOOLS_LINKS_SELECTOR + " " + (api.core.ns.selector('links-group'));

  var Header = function Header (header) {
    this.header = header || document.querySelector(HEADER_SELECTOR);
    this.modals = [];

    this.init();
  };

  Header.prototype.getModal = function getModal (selector) {
    var element = this.header.querySelector(selector);
    if (!element) { return; }
    var modals = api.core.Instance.getInstances(element, api.Modal);
    if (!modals || !modals.length) { return; }
    this.modals.push(modals[0]);
  };

  Header.prototype.init = function init () {
    this.getModal(HEADER_SEARCH_SELECTOR);
    this.getModal(HEADER_MENU_SELECTOR);

    this.linksGroup = this.header.querySelector(HEADER_LINKS_GROUP_SELECTOR);

    this.toolsLinks = this.header.querySelector(HEADER_TOOLS_LINKS_SELECTOR);
    this.menuLinks = this.header.querySelector(HEADER_MENU_LINKS_SELECTOR);

    this.changing = this.change.bind(this);

    window.addEventListener('resize', this.changing);
    this.change();
  };

  Header.prototype.change = function change () {
    this.isLarge = window.matchMedia('(min-width: 62em)').matches;

    if (this.isLarge) {
      for (var i = 0; i < this.modals.length; i++) {
        this.modals[i].conceal();
        this.modals[i].element.removeAttribute('role');
      }
    } else {
      for (var i$1 = 0; i$1 < this.modals.length; i$1++) {
        this.modals[i$1].element.setAttribute('role', 'dialog');
      }
    }

    if (this.linksGroup !== null) {
      if (this.isLarge) { this.toolsLinks.appendChild(this.linksGroup); }
      else { this.menuLinks.appendChild(this.linksGroup); }
    }
  };

  api.Header = Header;

  var build = function () {
    var elements = Array.prototype.slice.call(document.querySelectorAll(HEADER_SELECTOR));

    var headers = [];

    for (var i = 0, list = elements; i < list.length; i += 1) {
      var element = list[i];

      headers.push(new Header(element));
    }
  };

  /* eslint-disable no-new */

  new api.core.Initializer(HEADER_SELECTOR, [build]);

}());
//# sourceMappingURL=dsfr.nomodule.js.map

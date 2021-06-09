/*! DSFR v1.0.0-rc1.0 | restricted use */

(function () {
  'use strict';

  var namespace = 'dsfr';

  var api = window[namespace] || { core: {} };
  window[namespace] = api;

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

}());
//# sourceMappingURL=navigation.nomodule.js.map

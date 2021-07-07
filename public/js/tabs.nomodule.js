/*! DSFR v1.0.0-rc1.0 | restricted use */

(function () {
  'use strict';

  var namespace = 'dsfr';

  var api = window[namespace] || { core: {} };
  window[namespace] = api;

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
  var build = function () {
    Tab.build(document);
  };

  /* eslint-disable no-new */

  new api.core.Initializer(TABS_SELECTOR, [build]);

}());
//# sourceMappingURL=tabs.nomodule.js.map

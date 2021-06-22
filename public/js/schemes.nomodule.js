/*! DSFR v1.0.0-rc1.0 | restricted use */

(function () {
  'use strict';

  var namespace = 'dsfr';

  var api = window[namespace] || { core: {} };
  window[namespace] = api;

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

  var build$1 = function () {
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

  var build = function () {
    new SwitchTheme();
  };

  /* eslint-disable no-new */

  new api.core.Initializer((":root[" + SCHEME_ATTR + "]"), [build$1]);
  new api.core.Initializer(("" + SWITCH_THEME_ID), [build]);

}());
//# sourceMappingURL=schemes.nomodule.js.map

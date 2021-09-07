/*! DSFR v1.0.0-rc1.0 | restricted use */

const namespace = 'dsfr';

const api = window[namespace] || { core: {} };
window[namespace] = api;

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

const build$1 = () => {
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

const build = () => {
  new SwitchTheme();
};

/* eslint-disable no-new */

new api.core.Initializer(`:root[${SCHEME_ATTR}]`, [build$1]);
new api.core.Initializer(`${SWITCH_THEME_ID}`, [build]);
//# sourceMappingURL=schemes.module.js.map

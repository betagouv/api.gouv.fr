/*! DSFR v1.0.0-rc1.0 | restricted use */

const namespace = 'dsfr';

const api = window[namespace] || { core: {} };
window[namespace] = api;

const BUTTON_SELECTOR = api.core.ns.selector('btn');
const BUTTONS_GROUP_SELECTOR = api.core.ns.selector('btns-group');
const EQUISIZED_BUTTONS_GROUP_SELECTOR = api.core.ns.selector('btns-group--equisized');

const build = () => {
  const group = document.querySelectorAll(EQUISIZED_BUTTONS_GROUP_SELECTOR);
  const arrayEquisized = [];
  for (let i = 0; i < group.length; i++) {
    arrayEquisized.push(new api.Equisized(BUTTON_SELECTOR, group[i]));
  }
};

/* eslint-disable no-new */

new api.core.Initializer(BUTTONS_GROUP_SELECTOR, [build]);
//# sourceMappingURL=buttons.module.js.map

/*! DSFR v1.0.0-rc1.0 | restricted use */

const namespace = 'dsfr';

const api = window[namespace] || { core: {} };
window[namespace] = api;

const SIDEMENU_CLASS = api.core.ns('sidemenu');
const SIDEMENU_LIST_CLASS = api.core.ns('sidemenu__list');

/* eslint-disable no-new */

api.Collapse.register(SIDEMENU_CLASS, SIDEMENU_LIST_CLASS);
//# sourceMappingURL=sidemenu.module.js.map

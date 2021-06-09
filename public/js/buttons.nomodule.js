/*! DSFR v1.0.0-rc1.0 | restricted use */

(function () {
  'use strict';

  var namespace = 'dsfr';

  var api = window[namespace] || { core: {} };
  window[namespace] = api;

  var BUTTON_SELECTOR = api.core.ns.selector('btn');
  var BUTTONS_GROUP_SELECTOR = api.core.ns.selector('btns-group');
  var EQUISIZED_BUTTONS_GROUP_SELECTOR = api.core.ns.selector('btns-group--equisized');

  var build = function () {
    var group = document.querySelectorAll(EQUISIZED_BUTTONS_GROUP_SELECTOR);
    var arrayEquisized = [];
    for (var i = 0; i < group.length; i++) {
      arrayEquisized.push(new api.Equisized(BUTTON_SELECTOR, group[i]));
    }
  };

  /* eslint-disable no-new */

  new api.core.Initializer(BUTTONS_GROUP_SELECTOR, [build]);

}());
//# sourceMappingURL=buttons.nomodule.js.map

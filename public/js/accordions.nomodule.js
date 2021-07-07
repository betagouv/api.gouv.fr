/*! DSFR v1.0.0-rc1.0 | restricted use */

(function () {
  'use strict';

  var namespace = 'dsfr';

  var api = window[namespace] || { core: {} };
  window[namespace] = api;

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

}());
//# sourceMappingURL=accordions.nomodule.js.map

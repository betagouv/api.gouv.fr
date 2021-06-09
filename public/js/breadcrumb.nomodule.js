/*! DSFR v1.0.0-rc1.0 | restricted use */

(function () {
  'use strict';

  var namespace = 'dsfr';

  var api = window[namespace] || { core: {} };
  window[namespace] = api;

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

  var build = function () {
    var breadcrumbs = [];
    var breadcrumbNodes = document.querySelectorAll(BREADCRUMB_COLLAPSE_SELECTOR);
    for (var i = 0; i < breadcrumbNodes.length; i++) { breadcrumbs.push(new Breadcrumb(breadcrumbNodes[i])); }
  };

  /* eslint-disable no-new */

  new api.core.Initializer(BREADCRUMB_COLLAPSE_SELECTOR, [build]);

}());
//# sourceMappingURL=breadcrumb.nomodule.js.map

/*! DSFR v1.0.0-rc1.0 | restricted use */

const namespace = 'dsfr';

const api = window[namespace] || { core: {} };
window[namespace] = api;

const BREADCRUMB_COLLAPSE_SELECTOR = `${api.core.ns.selector('breadcrumb')} ${api.core.ns.selector('collapse')}`;

class Breadcrumb extends api.core.Instance {
  constructor (element) {
    super(element);
    this.collapse = api.core.Instance.getInstances(element, api.Collapse)[0];
    this.links = [...this.element.querySelectorAll('a[href]')];
    this.count = 0;
    if (this.links.length) {
      this.listen(api.core.Disclosure.DISCLOSE_EVENT, this.focus.bind(this));
      // TODO: refactor avec instance
      this.resizing = this.resize.bind(this);
      window.addEventListener('resize', this.resizing);
    }
  }

  focus () {
    this.links[0].focus();
    api.core.engine.renderer.next(() => { this.verify(); });
  }

  verify () {
    this.count++;
    if (this.count > 100) return;
    if (document.activeElement !== this.links[0]) this.focus();
  }

  resize () {
    if (window.matchMedia('(min-width: 48em)').matches) {
      if (this.collapse.buttons[0] === document.activeElement) this.links.focus();
    } else {
      if (this.links.indexOf(document.activeElement) > -1) this.collapse.focus();
    }
  }
}

const build = () => {
  const breadcrumbs = [];
  const breadcrumbNodes = document.querySelectorAll(BREADCRUMB_COLLAPSE_SELECTOR);
  for (let i = 0; i < breadcrumbNodes.length; i++) breadcrumbs.push(new Breadcrumb(breadcrumbNodes[i]));
};

/* eslint-disable no-new */

new api.core.Initializer(BREADCRUMB_COLLAPSE_SELECTOR, [build]);
//# sourceMappingURL=breadcrumb.module.js.map

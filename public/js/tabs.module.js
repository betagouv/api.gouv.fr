/*! DSFR v1.0.0-rc1.0 | restricted use */

const namespace = 'dsfr';

const api = window[namespace] || { core: {} };
window[namespace] = api;

/**
  * TabButton correspond au bouton cliquable qui change le panel
  * TabButton étend de DisclosureButton qui ajoute/enelve l'attribut aria-selected,
  * Et change l'attributte tabindex a 0 si le boutton est actif (value=true), -1 s'il n'est pas actif (value=false)
 */
class TabButton extends api.core.DisclosureButton {
  apply (value) {
    super.apply(value);
    if (this.hasAttribute) {
      this.element.setAttribute('tabindex', value ? '0' : '-1');
    }
  }
}

const TABS_SELECTOR = api.core.ns.selector('tabs');
const TABS_CLASS = api.core.ns('tabs');
const TAB_CLASS = api.core.ns('tabs__tab');
const PANEL_CLASS = api.core.ns('tabs__panel');
const LIST_CLASS = api.core.ns('tabs__list');

/**
* TabGroup est la classe étendue de DiscosuresGroup
* Correspond à un objet Tabs avec plusieurs tab-button & Tab (panel)
*/
class TabsGroup extends api.core.DisclosuresGroup {
  constructor (id, element) {
    super(id, element);
    this.list = element.querySelector(`.${LIST_CLASS}`);

    element.addEventListener('transitionend', this.transitionend.bind(this));

    this.init();
    api.core.engine.renderer.add(this.render.bind(this));
  }

  static get selector () { return TABS_CLASS; }

  transitionend (e) {
    this.element.style.transition = 'none';
  }

  init () {
    this.keyListener = new api.KeyListener(this.element);
    this.keyListener.down(api.KeyListener.RIGHT, this.arrowRightPress.bind(this), true, true);
    this.keyListener.down(api.KeyListener.LEFT, this.arrowLeftPress.bind(this), true, true);
    this.keyListener.down(api.KeyListener.HOME, this.homePress.bind(this), true, true);
    this.keyListener.down(api.KeyListener.END, this.endPress.bind(this), true, true);
  }

  /**
   * Selectionne l'element suivant de la liste si on est sur un bouton
   * Si on est à la fin on retourne au début
   */
  arrowRightPress () {
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
  arrowLeftPress () {
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
  homePress () {
    if (document.activeElement.classList.contains(TAB_CLASS)) {
      this.index = 0;
      this.focus();
    }
  };

  /**
   * Selectionne le dernier element de la liste si on est sur un bouton
   */
  endPress () {
    if (document.activeElement.classList.contains(TAB_CLASS)) {
      this.index = this.length - 1;
      this.focus();
    }
  };

  focus () {
    if (this.current) this.current.focus();
  }

  apply () {
    for (let i = 0; i < this._index; i++) this.members[i].translate(-1);
    this.current.element.style.transform = '';
    for (let i = this._index + 1; i < this.length; i++) this.members[i].translate(1);
    this.element.style.transition = '';
  }

  add (tab) {
    super.add(tab);
    if (this.length === 1 || tab.disclosed) this.current = tab;
    else {
      const index = this.members.indexOf(tab);
      if (this._index > -1 && this._index !== index) tab.translate(index < this._index ? -1 : 1, true);
    }
  }

  render () {
    if (this.current === null) return;
    const paneHeight = Math.round(this.current.element.offsetHeight);
    if (this.panelHeight === paneHeight) return;
    this.panelHeight = paneHeight;
    this.element.style.height = (this.panelHeight + this.list.offsetHeight) + 'px';
  }
}

/**
  * Tab coorespond au panel d'un élement Tabs (tab panel)
  * Tab étend disclosure qui ajoute/enleve le modifier --selected,
  * et ajoute/eleve l'attribut hidden, sur le panel
  */
class Tab extends api.core.Disclosure {
  static get type () { return api.core.DISCLOSURE_TYPES.select; }
  static get selector () { return PANEL_CLASS; }

  get GroupConstructor () { return TabsGroup; }

  buttonFactory (element) {
    return new TabButton(element, this);
  }

  translate (direction, initial) {
    if (initial) this.element.style.transition = 'none';
    this.element.style.transform = `translate(${direction * 100}%)`;
    if (initial) this.element.style.transition = '';
  }

  reset () {
    this.group.index = 0;
  }
}

api.Tab = Tab;
api.TabButton = TabButton;
api.TabsGroup = TabsGroup;

/**
* Initialise tout les éléments Tab dans la page
*/
const build = () => {
  Tab.build(document);
};

/* eslint-disable no-new */

new api.core.Initializer(TABS_SELECTOR, [build]);
//# sourceMappingURL=tabs.module.js.map

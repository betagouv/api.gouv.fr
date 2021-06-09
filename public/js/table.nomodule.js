/*! DSFR v1.0.0-rc1.0 | restricted use */

(function () {
  'use strict';

  var namespace = 'dsfr';

  var api = window[namespace] || { core: {} };
  window[namespace] = api;

  var TABLE_SELECTOR = api.core.ns.selector('table');
  // export const TABLE_CLASS = api.core.ns('table');
  var TABLE_SCROLLING_SELECTOR = (api.core.ns.selector('table')) + ":not(" + (api.core.ns.selector('table--no-scroll')) + ")";
  var LEFT = 'left';
  var RIGHT = 'right';
  var SHADOW_CLASS = api.core.ns('table--shadow');
  var SHADOW_LEFT_CLASS = api.core.ns('table--shadow-left');
  var SHADOW_RIGHT_CLASS = api.core.ns('table--shadow-right');
  var WRAPPER_CLASS = api.core.ns('table__wrapper');
  var CAPTION_BOTTOM_CLASS = api.core.ns('table--caption-bottom');
  var SCROLL_OFFSET = 1; // valeur en px du scroll avant laquelle le shadow s'active ou se desactive

  var Table = function Table (table) {
    this.init(table);
  };

  Table.prototype.init = function init (table) {
    this.table = table;
    this.tableElem = this.table.querySelector('table');
    this.tableContent = this.tableElem.querySelector('tbody');
    this.isScrollable = this.tableContent.offsetWidth > this.tableElem.offsetWidth;
    this.caption = this.tableElem.querySelector('caption');
    this.captionHeight = 0;
    this.wrap();

    var scrolling = this.change.bind(this);
    this.tableElem.addEventListener('scroll', scrolling);
    this.change();
  };

  Table.prototype.change = function change () {
    var newScroll = this.tableContent.offsetWidth > this.tableElem.offsetWidth;
    var firstTimeScrollable = this.tableElem.offsetWidth > this.table.offsetWidth;
    if (newScroll || firstTimeScrollable) {
      this.scroll();
      this.handleCaption();
    } else {
      if (newScroll !== this.isScrollable) { this.delete(); }
    }
    this.isScrollable = newScroll;
    firstTimeScrollable = false;
  };

  Table.prototype.delete = function delete$1 () {
    api.core.removeClass(this.table, SHADOW_RIGHT_CLASS);
    api.core.removeClass(this.table, SHADOW_LEFT_CLASS);
    api.core.removeClass(this.table, SHADOW_CLASS);
    if (this.caption) {
      this.tableElem.style.marginTop = '';
      this.caption.style.top = '';
      this.tableElem.style.marginBottom = '';
      this.caption.style.bottom = '';
    }
  };

  Table.prototype.scroll = function scroll () {
    api.core.addClass(this.table, SHADOW_CLASS);
    this.setShadowPosition();
  };

  /* ajoute un wrapper autour du tableau */
  Table.prototype.wrap = function wrap () {
    var wrapperHtml = document.createElement('div');
    wrapperHtml.className = WRAPPER_CLASS;
    this.table.insertBefore(wrapperHtml, this.tableElem);
    wrapperHtml.appendChild(this.tableElem);
    this.tableInnerWrapper = wrapperHtml;
  };

  /* affiche les blocs shadow en fonction de la position du scroll, en ajoutant la classe visible */
  Table.prototype.setShadowPosition = function setShadowPosition () {
    var tableScrollLeft = this.getScrollPosition(LEFT);
    var tableScrollRight = this.getScrollPosition(RIGHT);

    // on inverse en cas de lecture droite - gauche
    if (document.documentElement.getAttribute('dir') === 'rtl') {
      this.setShadowVisibility(RIGHT, tableScrollLeft);
      this.setShadowVisibility(LEFT, tableScrollRight);
    } else {
      this.setShadowVisibility(LEFT, tableScrollLeft);
      this.setShadowVisibility(RIGHT, tableScrollRight);
    }
  };

  /* Donne le nombre de pixels scrollés honrizontalement dans un element scrollable */
  Table.prototype.getScrollPosition = function getScrollPosition (side) {
    var inverter = 1;
    // on inverse en cas de lecture droite - gauche pour que la valeur de scroll soit toujours positive
    if (document.documentElement.getAttribute('dir') === 'rtl') {
      inverter = -1;
    }
    switch (side) {
      case LEFT:
        return this.tableElem.scrollLeft * inverter;
      case RIGHT:
        return this.tableContent.offsetWidth - this.tableElem.offsetWidth - this.tableElem.scrollLeft * inverter;
      default:
        return false;
    }
  };

  /* positionne la caption en top négatif et ajoute un margin-top au wrapper */
  Table.prototype.handleCaption = function handleCaption () {
    if (this.caption) {
      var style = getComputedStyle(this.caption);
      var newHeight = this.caption.offsetHeight + parseInt(style.marginTop) + parseInt(style.marginBottom);
      this.captionHeight = newHeight;
      if (this.table.classList.contains(CAPTION_BOTTOM_CLASS)) {
        this.tableElem.style.marginBottom = this.captionHeight + 'px';
        this.caption.style.bottom = -this.captionHeight + 'px';
      } else {
        this.tableElem.style.marginTop = this.captionHeight + 'px';
        this.caption.style.top = -this.captionHeight + 'px';
      }
    }
  };

  /* ajoute la classe fr-table--shadow-right ou fr-table--shadow-right sur fr-table
   en fonction d'une valeur de scroll et du sens (right, left) */
  Table.prototype.setShadowVisibility = function setShadowVisibility (side, scrollPosition) {
    // si on a pas scroll, ou qu'on scroll jusqu'au bout
    if (scrollPosition <= SCROLL_OFFSET) {
      if (side === LEFT) { api.core.removeClass(this.table, SHADOW_LEFT_CLASS); }
      else if (side === RIGHT) { api.core.removeClass(this.table, SHADOW_RIGHT_CLASS); }
    } else {
      if (side === LEFT) { api.core.addClass(this.table, SHADOW_LEFT_CLASS); }
      else if (side === RIGHT) { api.core.addClass(this.table, SHADOW_RIGHT_CLASS); }
    }
  };

  api.Table = Table;

  var tables = [];

  var change = function () {
    for (var i = 0; i < tables.length; i++) { tables[i].change(); }
  };

  var build = function () {
    var tableNodes = document.querySelectorAll(TABLE_SCROLLING_SELECTOR);
    for (var i = 0; i < tableNodes.length; i++) { tables.push(new Table(tableNodes[i])); }

    window.addEventListener('resize', change);
    window.addEventListener('orientationchange', change);
    change();
  };

  /* eslint-disable no-new */

  new api.core.Initializer(TABLE_SELECTOR, [build]);

}());
//# sourceMappingURL=table.nomodule.js.map

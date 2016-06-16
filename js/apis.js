---
layout: null
# JS for apis
---

var categories = {% include categories.json %};
var search = instantsearch({
  appId: 'MOAD3NGUET',
  apiKey: '253f1cf2d19fbf72080b70c3a5fcd18f',
  indexName: 'api_gouv',
  searchParameters: {
    facets: ['type', 'layout'],
    facetsRefinements: {
      type: ['document'],
      layout: ['api']
    }
  },
  urlSync: {
    trackedParameters: ['query','attribute:categories']
  }
});
function getTemplate(templateName) {
  return document.querySelector('#' + templateName + '-template').innerHTML;
}

var widgets = [
  instantsearch.widgets.searchBox({
    container: '#search-input',
    placeholder: 'Rechercher une API'
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    hitsPerPage: 10,
    cssClasses: {
      root: 'ui two stackable cards',
      item: 'ui card'
    },
    templates: {
      allItems: getTemplate('hits'),
      empty: getTemplate('no-results')
    },
    transformData: {
      allItems: function replaceIdWithName(result) {
        result.hits = result.hits.map(function(hit) {
          hit.category = categories[hit.category]
          return hit;
        })
        return result;
      }
    }
  }),
  instantsearch.widgets.stats({
    container: '#stats'
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
    cssClasses: {
      root: "ui pagination menu",
      item: "item",
      active: "active",
      disabled: "disabled"
    }
  }),
  instantsearch.widgets.refinementList({
    container: '#category',
    attributeName: 'categories',
    limit: 10,
    operator: 'or',
    templates: {
      header: getHeader('Catégories'),
      item: getTemplate('checkbox')
    },
    transformData: {
      item: function replaceIdWithName(item) {
        item.name = categories[item.name].name
        return item;
      }
    }
  }),
  instantsearch.widgets.refinementList({
    container: '#contract',
    attributeName: 'contract',
    limit: 10,
    operator: 'or',
    templates: {
      header: getHeader('Contrat'),
      item: getTemplate('checkbox')
    }
  }),
  instantsearch.widgets.refinementList({
    container: '#clients',
    attributeName: 'clients',
    limit: 10,
    operator: 'or',
    templates: {
      header: getHeader('Clients'),
      item: getTemplate('checkbox')
    }
  }),
  instantsearch.widgets.refinementList({
    container: '#owner',
    attributeName: 'owner',
    limit: 10,
    operator: 'or',
    templates: {
      header: getHeader('Porteur'),
      item: getTemplate('checkbox')
    }
  }),
  instantsearch.widgets.refinementList({
    container: '#partners',
    attributeName: 'partners',
    limit: 10,
    operator: 'or',
    templates: {
      header: getHeader('Partenaire'),
      item: getTemplate('checkbox')
    }
  }),
];

function getHeader(title) {
  return '<h4 class="header">' + title + '</h4>';
}
widgets.forEach(search.addWidget, search);

search.start();

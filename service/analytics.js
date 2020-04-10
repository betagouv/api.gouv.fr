const logDemanderApi = () => {
  if (typeof window !== 'undefined' && window._paq) {
    window._paq.push([
      'trackEvent',
      'CTA',
      'Demander une API',
      `page : ${window.location.href.pathname}`,
    ]);
  }
};

const logDemanderAcces = () => {
  if (typeof window !== 'undefined' && window._paq) {
    window._paq.push([
      'trackEvent',
      'CTA',
      'Demander Acces',
      `page : ${window.location.href.pathname}`,
    ]);
  }
};

export { logDemanderApi, logDemanderAcces };

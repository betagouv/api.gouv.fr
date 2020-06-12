const logCTA = ctaLabel => {
  if (typeof window !== 'undefined' && window._paq) {
    window._paq.push([
      'trackEvent',
      'CTA',
      ctaLabel,
      `page : ${window.location.pathname}`,
    ]);
  }
};

const logDemanderAcces = () => {
  if (typeof window !== 'undefined' && window._paq) {
    window._paq.push([
      'trackEvent',
      'CTA',
      'Demander Acces',
      `page : ${window.location.pathname}`,
    ]);
  }
};

const logLPCTA = ctaLabel => {
  if (typeof window !== 'undefined' && window._paq) {
    window._paq.push([
      'trackEvent',
      'LP',
      ctaLabel,
      `page : ${window.location.pathname}`,
    ]);
  }
};

const logParcoursClient = (step, value = '*') => {
  if (typeof window !== 'undefined' && window._paq) {
    window._paq.push([
      'trackEvent',
      'Parcours client',
      step,
      `valeur : ${value}`,
    ]);
  }
};

export { logCTA, logDemanderAcces, logLPCTA, logParcoursClient };

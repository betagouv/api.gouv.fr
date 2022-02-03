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

const logParcoursDemandeAcces = (step, api = '*', value = '*') => {
  if (typeof window !== 'undefined' && window._paq) {
    window._paq.push([
      'trackEvent',
      `Parcours API - ${api}`,
      step,
      `valeur : ${value}`,
    ]);
  }
};

const logFeedback = answer => {
  if (typeof window !== 'undefined' && window._paq) {
    window._paq.push([
      'trackEvent',
      'Feedback : page utile ?',
      answer,
      `page : ${window.location.pathname}`,
    ]);
  }
};

const logFeedbackDetails = answer => {
  if (typeof window !== 'undefined' && window._paq) {
    window._paq.push([
      'trackEvent',
      'Feedback : page utile ? - details',
      answer,
      `page : ${window.location.pathname}`,
    ]);
  }
};

export {
  logCTA,
  logDemanderAcces,
  logLPCTA,
  logParcoursClient,
  logParcoursDemandeAcces,
  logFeedback,
  logFeedbackDetails,
};

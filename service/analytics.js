const logDemanderApi = () => {
  if (typeof window !== 'undefined' && window._paq) {
    window._paq.push([
      'trackEvent',
      'CTA',
      'Demander une API',
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

if (typeof window !== 'undefined' && window.Piwik) {
  //@ts-ignore
  const tracker = window.Piwik.getTracker(
    `${process.env.PIWIK_URL}/piwik.php`,
    process.env.PIWIK_SITE_ID
  );

  if (tracker) {
    tracker.trackPageView();
  }
}

const logLPCTA1 = () => {
  if (typeof window !== 'undefined' && window._paq) {
    window._paq.push([
      'trackEvent',
      'LP',
      'Bouton_top',
      `page : ${window.location.pathname}`,
    ]);
  }
};

const logLPCTA2 = () => {
  if (typeof window !== 'undefined' && window._paq) {
    window._paq.push([
      'trackEvent',
      'LP',
      'Bouton_middle',
      `page : ${window.location.pathname}`,
    ]);
  }
};

const logLPContact = () => {
  if (typeof window !== 'undefined' && window._paq) {
    window._paq.push([
      'trackEvent',
      'LP',
      'Bouton_contact',
      `page : ${window.location.pathname}`,
    ]);
  }
};

export { logDemanderApi, logDemanderAcces, logLPContact, logLPCTA1, logLPCTA2 };

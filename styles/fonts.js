import React from 'react';

export default () => (
  <style jsx global>{`
    @font-face {
      font-family: Evolventa;
      font-weight: normal;
      font-style: normal;
      font-display: swap;
      src: local('Evolventa'), local('Evolventa-Regular'),
        url('/fonts/Evolventa/Evolventa-Regular.woff') format('woff');
    }

    @font-face {
      font-family: Evolventa;
      font-weight: normal;
      font-style: italic;
      font-display: swap;
      src: local('Evolventa Oblique'), local('Evolventa-Oblique'),
        url('/fonts/Evolventa/Evolventa-Oblique.woff') format('woff');
    }

    @font-face {
      font-family: Evolventa;
      font-weight: bold;
      font-style: normal;
      font-display: swap;
      src: local('Evolventa Bold'), local('Evolventa-Bold'),
        url('/fonts/Evolventa/Evolventa-Bold.woff') format('woff');
    }

    @font-face {
      font-family: Evolventa;
      font-weight: bold;
      font-style: italic;
      font-display: swap;
      src: local('Evolventa Bold Oblique'), local('Evolventa-BoldOblique'),
        url('/fonts/Evolventa/Evolventa-BoldOblique.woff') format('woff');
    }
  `}</style>
);

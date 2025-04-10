import React from 'react';

export const AlertFusion: React.FC<{}> = () => (
  <>
    <div className="fr-notice fr-notice--info">
      <div className="fr-container">
        <div className="fr-notice__body">
          <p>
            <span className="fr-notice__title">⚠️ Les fiches d'API ont été déplacées sur data.gouv.fr</span><br />
            <span className="fr-notice__desc">Pour découvrir les nouvelles API et obtenir les informations les plus à jour, rendez-vous sur </span>
            <a target="_blank" rel="noopener external" title="Page API du catalogue data.gouv.fr - nouvelle fenêtre" href="https://www.data.gouv.fr/dataservices" className="fr-notice__link">data.gouv.fr/dataservices</a>.
          </p>
          </div>
        </div>
      </div>

    <style jsx>{`
      /* ¯¯¯¯¯¯¯¯¯ *\
          ALERT MIGRATION
        \* ˍˍˍˍˍˍˍˍˍ */
        .fr-notice {
          position: relative;

          --title-spacing: 0;
          --text-spacing: 0;
          padding-top: 1rem;
          padding-bottom: 1rem;
          background-color: var(--background-contrast-grey);
          color: var(--text-title-grey);
        }

        .fr-notice__body {
          position: relative;

        }

        .fr-notice__body::before {
          --icon-size: 1.5rem;
          flex: 0 0 auto;
          display: inline-block;
          vertical-align: calc((0.75em - var(--icon-size)) * 0.5);
          background-color: currentColor;
          width: var(--icon-size);
          height: var(--icon-size);
          -webkit-mask-size: 100% 100%;
          mask-size: 100% 100%;
          position: absolute;
          left: 0;
        }

        .fr-notice__title {
          position: relative;
          font-size: 1rem;
          line-height: 1.5rem;
          font-weight: 700;
        }

        .fr-notice--info .fr-notice__body::before {
          -webkit-mask-image: url("icons/system/fr--info-fill.svg");
          mask-image: url("icons/system/fr--info-fill.svg");
          content: "";
        }

        .fr-notice--info {
          background-color: var(--background-contrast-info);

          --hover: var(--background-contrast-info-hover);
          --active: var(--background-contrast-info-active);
          color: var(--text-default-info);
        }

        /**
        * reset des marges dans le bandeau
        */
        .fr-notice__title,
        .fr-notice p {
          margin: 0;
        }

        .fr-notice--info .fr-notice__body::before {
          background-image: url("icons/system/fr--info-fill.svg");
          width: 1.5rem;
          height: 1.5rem;
          color: transparent;
        }

        .fr-notice .fr-btn--close::before,
        .fr-notice .fr-btn--close::after {
          background-color: transparent;
          background-size: 100%;
          background-repeat: no-repeat;
          background-image: url("icons/system/close-line.svg");
          width: 1rem;
          height: 1rem;
        }

        .fr-notice {
          background-color: #eee;
          color: #161616;
        }

        .fr-notice--info {
          background-color: #FFE9E6;
          color: #B34000;
        }

        .fr-notice__link {
          font-weight: 700;
        }
    `}</style>
  </>
);

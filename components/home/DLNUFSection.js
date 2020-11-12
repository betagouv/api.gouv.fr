import React from 'react';

const DLNUFSection = () => (
  <section id="use-cases" className="content-container">
    <br />
    <h2 className="layout-center">Les APIs et le Dites-le-nous-une-fois</h2>
    <div className="use-case">
      <div className="content-wrapper">
        <div>
          Le principe du <b>Dites-le-nous une fois (DLNUF)</b>, consiste à
          éviter aux citoyens de fournir, lors de leurs démarches en ligne, des
          informations ou pièces justificatives{' '}
          <b>déjà détenues par d’autres administrations</b>, en s’appuyant sur
          le partage automatique de données.
          <br />
          <br />
          Les APIs <b>jouent un rôle essentiel</b> pour permettre ces échanges
          de données.
        </div>
        <a href="https://www.numerique.gouv.fr/services/guichet-dites-le-nous-une-fois/">
          ⇢ En savoir plus
        </a>
      </div>
      <div className="img-wrapper">
        <iframe
          title="Vidéo Dites le nous une fois"
          frameborder="0"
          width="640"
          height="360"
          src="https://www.dailymotion.com/embed/video/x7x5gkj"
          allowfullscreen
          allow="autoplay; fullscreen"
        ></iframe>
      </div>
    </div>
  </section>
);

export default DLNUFSection;

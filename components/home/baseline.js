import React from 'react';

import { TypingCarousel, ButtonLink } from '../../uiComponents';
import MagnifyingGlass from '../../uiComponents/icon/magnifyingGlass';

const Baseline = () => (
  <section
    id="homepage-mission-statement"
    className="fr-container layout-center"
  >
    <h1>
      <TypingCarousel
        txtBefore="Vous êtes"
        sentences={[
          ' une collectivité ?',
          ' un ministère ?',
          ' une entreprise ?',
        ]}
      />
    </h1>
    <h2>
      Accédez aux données de toutes les administrations, pour construire des
      services innovants.
    </h2>
    <ButtonLink href="/rechercher-api" size="large">
      <span className="layout-center">
        <MagnifyingGlass color="#fff" />
        &nbsp; Rechercher une API
      </span>
    </ButtonLink>
  </section>
);

export default Baseline;

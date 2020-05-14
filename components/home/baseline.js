import React from 'react';

import { TypingCarousel, ButtonLink } from '../../uiComponents';

const Baseline = () => (
  <section
    id="homepage-mission-statement"
    className="content-container layout-center"
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
    <ButtonLink href="/parcours-client?from=home" large>
      Trouver une API !
    </ButtonLink>
  </section>
);

export default Baseline;

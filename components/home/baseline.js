import React from 'react';

import { TypingCarroussel } from '../../uiComponents';

import './baselineStyles.scss';

const Baseline = () => (
  <section id="mission-statement">
    <h1>
      <TypingCarroussel
        txtBefore="Vous êtes"
        sentences={[' une collectivité ?', ' un ministère ?', ' un éditeur ?']}
      />
    </h1>
    <h2>
      Accédez aux données de toutes les administrations, pour construire des
      services innovants.
    </h2>
  </section>
);

export default Baseline;

import React from 'react';

import Page from '../layouts/page';
import { HEADER_PAGE } from '../components/header';

const About = () => (
  <Page headerKey={HEADER_PAGE.HOME}>
    <div className="ui text container">
      <div>
        <h2>Mentions légales</h2>
        <div>
          <h3>Éditeur</h3>
          <p>
            Incubateur des services numériques, Direction interministérielle du
            numérique (DINUM), Services du Premier ministre.
          </p>

          <h3>Directeur de la publication</h3>
          <p>Le Directeur interministériel du numérique (DINUM).</p>

          <h3>Prestataire d'hébergement</h3>
          <p>
            <b>OVH</b> RCS Roubaix – Tourcoing 424 761 419 00045
            <br /> Code APE 6202A
            <br /> N° TVA : FR 22 424 761 419
            <br /> Siège social : 2 rue Kellermann - 59100 Roubaix - France
          </p>
        </div>
      </div>
    </div>
  </Page>
);

export default About;

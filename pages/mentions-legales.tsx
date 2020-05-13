import React from 'react';

import Page from '../layouts/page';

const About: React.FC = () => (
  <Page usePreFooter={false} title="Mentions légales">
    <div className="text-wrapper text-style">
      <h1 className="layout-center">Mentions légales</h1>
      <div>
        <h2>Éditeur</h2>
        <p>
          Incubateur des services numériques, Direction interministérielle du
          numérique (DINUM), Services du Premier ministre.
        </p>

        <h2>Directeur de la publication</h2>
        <p>Le Directeur interministériel du numérique (DINUM).</p>

        <h2>Prestataire d'hébergement</h2>
        <p>
          <ul>
            <li>
              <b>OVH</b> RCS Roubaix – Tourcoing 424 761 419 00045 Code APE
              6202A
            </li>
            <li>N° TVA : FR 22 424 761 419</li>
            <li>Siège social : 2 rue Kellermann - 59100 Roubaix - France</li>
          </ul>
        </p>
      </div>
    </div>
  </Page>
);

export default About;

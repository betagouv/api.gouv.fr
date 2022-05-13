import React from 'react';

import Page from '../layouts/page';

const A11y: React.FC = () => (
  <Page usePreFooter={false} title="Déclaration d’accessibilité">
    <div className="text-wrapper text-style">
      <h1 className="layout-center">Déclaration d’accessibilité</h1>
      <div>
        <p>Établie le 13 mai 2022.</p>
        <p>
          La Direction Interministérielle du Numérique (DINUM) s’engage à rendre
          son service accessible, conformément à l’article 47 de la loi n°
          2005-102 du 11 février 2005.
        </p>
        <p>
          À cette fin, nous mettons en œuvre la stratégie et les actions
          suivantes :{' '}
          <a href="https://www.numerique.gouv.fr/uploads/DINUM_SchemaPluriannuel_2020.pdf">
            schéma pluriannuel
          </a>
          .
        </p>
        <p>
          Cette déclaration d’accessibilité s’applique à{' '}
          <a href="https://api.gouv.fr">api.gouv.fr</a>.
        </p>
        <h2>État de conformité</h2>
        <p>
          api.gouv.fr est non conforme avec le RGAA. Le site n’a encore pas été
          audité.
        </p>
        <h2>Amélioration et contact</h2>
        <p>
          Si vous n’arrivez pas à accéder à un contenu ou à un service, vous
          pouvez contacter le responsable de api.gouv.fr pour être orienté vers
          une alternative accessible ou obtenir le contenu sous une autre forme.
        </p>
        <ul>
          <li>
            E-mail :{' '}
            <a href="mailto:support@api.gouv.fr">support@api.gouv.fr</a>
          </li>
          <li>
            <a href="https://api.gouv.fr/parcours-client">
              Formulaire de contact
            </a>
          </li>
          <li>Adresse : DINUM, Ségur, Paris</li>
          <li>Twitter : @apigouv</li>
        </ul>
        <h2>Voie de recours</h2>
        <p>
          Cette procédure est à utiliser dans le cas suivant : vous avez signalé
          au responsable du site internet un défaut d’accessibilité qui vous
          empêche d’accéder à un contenu ou à un des services du portail et vous
          n’avez pas obtenu de réponse satisfaisante.
        </p>
        Vous pouvez :
        <ul>
          <li>Écrire un message au Défenseur des droits</li>
          <li>
            Contacter le délégué du Défenseur des droits dans votre région
          </li>
          <li>
            Envoyer un courrier par la poste (gratuit, ne pas mettre de timbre)
            : Défenseur des droits Libre réponse 71120 75342 Paris CEDEX 07
          </li>
        </ul>
      </div>
    </div>
  </Page>
);

export default A11y;

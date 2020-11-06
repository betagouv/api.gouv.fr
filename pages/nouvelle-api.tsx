import React from 'react';

import Page from '../layouts/page';
import { ButtonLink, ExternalLink } from '../uiComponents';
import Emoji from '../uiComponents/emoji';

const NewAPI: React.FC = () => (
  <Page usePreFooter={false} title="Référencer une nouvelle API">
    <div className="text-wrapper text-style">
      <h1 className="layout-center">Proposer une nouvelle API</h1>
      <p className="layout-center">
        Vous êtes un ministère, une agence publique, une collectivité ?
        Complétez ce formulaire pour référencer une nouvelle API dans le
        catalogue api.gouv.fr
      </p>
      <div>
        <h2>A lire avant de commencer</h2>
        <p>
          Ce formulaire{' '}
          <b>ne crée pas automatiquement une fiche API dans le catalogue</b>. Il
          vous sert à prendre contact avec{' '}
          <ExternalLink href="/equipe">notre équipe</ExternalLink> et de à nous
          transmettre tous les éléments nécessaires pour créer une fiche API.
        </p>
        <p>
          Pour référencer son API sur api.gouv, il faut préalablement avoir
          développé et documentée l'API <Emoji emoji="🙂" label="sourire" />
          Ensuite il faut se mettre à la place du futur lecteur. Sur la fiche
          API, le lecteur doit pouvoir trouver les informations suivantes :
        </p>
        <ul>
          <li>Qui propose cette API ? </li>
          <li>Qui à le droit de la consommer ?</li>
          <li>A quoi sert-elle ?</li>
          <li>
            Comment s'en sert-on ? (paramètre en entrée, limitations d'appels,
            plage horaire, ... )
          </li>
        </ul>
      </div>
      <div>
        <h2>Demande de référencement</h2>
        <p>
          <b>Aucune information n'est obligatoire</b>. Si vous ne savez pas
          comment répondre, laissez le champ vide et soumettez votre demande.
        </p>
        <form>
          <h3>Informations générales</h3>
          <p>
            Décrivez dans un court texte : qu'est ce que cette API, à quoi elle
            sert ? (
            <ExternalLink href="/les-api/api-particulier#description">
              voir un exemple
            </ExternalLink>
            )
          </p>
          <label htmlFor="test">
            Description fonctionnelle de l'API (moins de 2000 caractères)
          </label>
          <textarea
            id="test"
            placeholder="Description&#10;Lorem ipsum sic&#10;...&#10;A quoi sert l'API ?&#10;Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
          ></textarea>
          <p>
            Listez les données rendues disponibles par cette l'API (nom -
            description) (
            <ExternalLink href="/les-api/api-geo#donnees-disponibles">
              voir un exemple
            </ExternalLink>
            )
          </p>
          <label htmlFor="test">Données disponibles</label>
          <textarea
            id="test"
            placeholder="donnée 1 : définition&#10;donnée 2 : définition&#10;..."
          ></textarea>
          <label htmlFor="test">
            La liste des partenaires, de cette API (si applicable)
          </label>
          <input
            id="test"
            type="text"
            placeholder="Assurance Maladie, Agence BIO, Ville de Reims"
          ></input>
          <label htmlFor="test">Adresse mail de contact/de support</label>
          <input id="test" type="text" placeholder="contact@mon-api.fr"></input>

          <h3>Conditions d'accès</h3>
          <div className="layout-left">
            <input type="checkbox" id="scales" name="scales"></input>
            <label htmlFor="scales">
              cochez cette case si l'API est en open data
            </label>
          </div>
          <p />
          <label htmlFor="test">
            Lien vers une demande d'accès (si applicable)
          </label>
          <input id="test" type="text" placeholder="https://..."></input>
          <h3>Description technique</h3>
          <label htmlFor="test">Limitations d'usage</label>
          <input
            id="test"
            type="text"
            placeholder="10 appels / seconde / IP"
          ></input>
          <label htmlFor="test">Lien vers une interface de monitoring</label>
          <input
            id="test"
            type="text"
            placeholder="https://monitoring..."
          ></input>
          <label htmlFor="test">
            Lien vers une documentation au format{' '}
            <ExternalLink href="https://www.openapis.org/">
              open api
            </ExternalLink>
          </label>
          <input id="test" type="text" placeholder="https://..."></input>
          <label htmlFor="test">
            Lien vers une documentation externe (si applicable) (
            <ExternalLink href="https://www.emploi-store-dev.fr/portail-developpeur-cms/home/catalogue-des-api/documentation-des-api/api/api-la-bonne-boite-v1.html">
              exemple de documentation
            </ExternalLink>
            )
          </label>
          <input id="test" type="text" placeholder="https://..."></input>
          <p>
            Le bouton ci-dessous va générer un mail de prise de contact avec
            toutes les informations ci-dessus. Après cela nous reviendrons vers
            vous pour référencer votre API.
          </p>
          <div className="layout-center">
            <ButtonLink type="submit" size="large">
              Soumettre ma demande
            </ButtonLink>
          </div>
        </form>
      </div>
    </div>
  </Page>
);

export default NewAPI;

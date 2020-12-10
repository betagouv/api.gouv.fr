import React, { useState } from 'react';
import constants from '../constants';

import Page from '../layouts/page';
import { ButtonLink, ExternalLink, Toggle } from '../uiComponents';
import Emoji from '../uiComponents/emoji';

const NewAPI: React.FC<{}> = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [donnee, setDonnee] = useState('');
  const [partner, setPartner] = useState('');
  const [producer, setProducer] = useState('');
  const [isOpenData, setIsOpenData] = useState(false);
  const [mail, setMail] = useState('');
  const [requestAccessLink, setRequestAccessLink] = useState('');
  const [limits, setLimits] = useState('');
  const [monitoringLink, setMonitoringLink] = useState('');
  const [docLink, setDocLink] = useState('');
  const [externalDocLink, setExternalDocLink] = useState('');

  const submit = () => {
    const body = `
    Nous avons généré les données de la fiche en fonction des informations que vous avez renseigner.%0d%0a
    Merci de nous envoyer ce mail. Nous reprendrons contact au plus vite avec vous pour la mise en ligne.%0d%0a
    %0d%0a
    --- %0d%0a
    title: ${title}%0d%0a
    tagline: %0d%0a
    producer: ${producer}%0d%0a
    access_link: ${requestAccessLink}%0d%0a
    is_open: ${isOpenData ? '1' : '-1'}%0d%0a
    keywords: %0d%0a
    rate_limiting_resume: %0d%0a
    rate_limiting_description: ${limits}%0d%0a
    monitoring_link: ${monitoringLink}%0d%0a
    monitoring_description: %0d%0a
    contact_link: ${mail}%0d%0a
    doc_tech_link: ${docLink}%0d%0a
    doc_tech_external: ${externalDocLink}%0d%0a
    last_update: %0d%0a
    visits_2019: %0d%0a
    partner: ${partner}%0d%0a
    --- %0d%0a
    ${description}%0d%0a
    %0d%0a
    ${donnee}%0d%0a
    `;

    const url = `${constants.links.mailto.REQUEST_API}&body=${body}`;
    window.open(url, '_blank');
  };

  return (
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
            <b>ne crée pas automatiquement une fiche API dans le catalogue</b>.
            Il vous sert à prendre contact avec{' '}
            <ExternalLink href="/equipe">notre équipe</ExternalLink> et de à
            nous transmettre tous les éléments nécessaires pour créer une fiche
            API.
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
              Décrire simplement : qu'est ce que cette API, à quoi elle sert ? (
              <ExternalLink href="/les-api/api-particulier#description">
                voir un exemple
              </ExternalLink>
              )
            </p>
            <label htmlFor="test">Le nom / le titre de l'API</label>
            <input
              id="title"
              type="text"
              placeholder="ex: API Entreprise"
              onChange={e => setTitle(e.target.value)}
            ></input>
            <label htmlFor="test">
              Description fonctionnelle de l'API (moins de 2000 caractères)
            </label>
            <textarea
              id="description"
              onChange={e => setDescription(e.target.value)}
              placeholder="Description&#10;L’API entreprise permet aux administrations d'accèder aux données entreprises...&#10;...&#10;A quoi sert l'API ?&#10;L’API Entreprise permet le pré-remplissage de formulaire à destination des entreprises ou des associations..."
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
              id="donnees"
              onChange={e => setDonnee(e.target.value)}
              placeholder="donnée 1 : définition&#10;donnée 2 : définition&#10;..."
            ></textarea>
            <label htmlFor="test">
              La liste des partenaires de cette API (si applicable)
            </label>
            <input
              id="partner"
              onChange={e => setPartner(e.target.value)}
              type="text"
              placeholder="Assurance Maladie, Agence BIO, Ville de Reims"
            ></input>
            <label htmlFor="test">Adresse mail de contact/de support</label>
            <input
              id="mail"
              onChange={e => setMail(e.target.value)}
              type="text"
              placeholder="contact@mon-api.fr"
            ></input>

            <h3>Producteur</h3>
            <label htmlFor="test">
              Qui êtes-vous / Quelle est l’administration qui produit cette API
              ?
            </label>
            <input
              id="producer"
              onChange={e => setProducer(e.target.value)}
              type="text"
              placeholder="ex: La Direction Générale des Finances Publiques"
            ></input>
            <h3>Conditions d'accès</h3>
            <div className="layout-left">
              <Toggle
                id="open-data"
                label="Cochez cette case si l'API est en open data"
                onChange={setIsOpenData}
                isToggled={isOpenData}
              />
            </div>
            <p />
            <label htmlFor="test">
              Lien vers une demande d'accès (si applicable)
            </label>
            <input
              id="demande-link"
              onChange={e => setRequestAccessLink(e.target.value)}
              type="text"
              placeholder="https://..."
            ></input>
            <h3>Description technique</h3>
            <label htmlFor="test">Limitations d'usage</label>
            <input
              id="limits"
              onChange={e => setLimits(e.target.value)}
              type="text"
              placeholder="10 appels / seconde / IP"
            ></input>
            <label htmlFor="test">Lien vers une interface de monitoring</label>
            <input
              id="monitoring-link"
              onChange={e => setMonitoringLink(e.target.value)}
              type="text"
              placeholder="https://monitoring..."
            ></input>
            <label htmlFor="test">
              Lien vers une documentation au format{' '}
              <ExternalLink href="https://www.openapis.org/">
                open api
              </ExternalLink>
            </label>
            <input
              id="doc-link"
              onChange={e => setDocLink(e.target.value)}
              type="text"
              placeholder="https://..."
            ></input>
            <label htmlFor="test">
              Lien vers une documentation externe (si applicable) (
              <ExternalLink href="https://www.emploi-store-dev.fr/portail-developpeur-cms/home/catalogue-des-api/documentation-des-api/api/api-la-bonne-boite-v1.html">
                exemple de documentation
              </ExternalLink>
              )
            </label>
            <input
              id="demande-link-external"
              onChange={e => setExternalDocLink(e.target.value)}
              type="text"
              placeholder="https://..."
            ></input>
            <p>
              Le bouton ci-dessous va générer un mail de prise de contact avec
              toutes les informations ci-dessus. Après cela nous reviendrons
              vers vous pour référencer votre API.
            </p>
            <div className="layout-center">
              <ButtonLink type="submit" size="large" onClick={submit}>
                Soumettre ma demande
              </ButtonLink>
            </div>
          </form>
        </div>
      </div>
    </Page>
  );
};

export default NewAPI;

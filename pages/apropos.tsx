import React from 'react';

import Page from '../layouts/page';
import { HEADER_PAGE } from '../components';
import TeamHelpWidget from '../components/teamHelpWidget';
import constants from '../constants';
import Emoji from '../uiComponents/emoji';

const About: React.FC = () => (
  <Page
    headerKey={HEADER_PAGE.ABOUT}
    title="A propos"
    description="Qu’est ce qu’une API du service public ? Quelle est la mission de api.gouv.fr ? A qui s’adresse ce site ?"
    canonical={`https://api.gouv.fr/apropos`}
  >
    <div className="text-wrapper text-style">
      <h1 className="layout-center">api.gouv.fr, à quoi ça sert ?</h1>
      <p>
        Ce site référence les API du service public, mises à la disposition des
        collectivités, des ministères et des entreprises pour construire des
        services informatiques au service de tous.
      </p>
      <div>
        <h2>
          Mais qu’est-ce qu’une API ? <Emoji emoji="🧐" label="réfléchi" />
        </h2>
        <p>
          Lorsqu’une collectivité, un ministère ou une entreprise construit un
          site internet ou un logiciel qui utilise de la donnée publique, elle a
          besoin de passer par une API.
        </p>
        <p>
          Une API est un outil informatique qui permet à un site internet ou à
          un logiciel de communiquer avec un autre ordinateur et échanger de la
          donnée.
        </p>
        <p>
          Par exemple, quand les entreprises françaises font leur{' '}
          <a
            target="blank"
            rel="noopener noreferrer"
            href="http://www.dsn-info.fr/api-dsn.htm"
          >
            Déclaration Sociale Nominative
          </a>
          {', '}
          leur logiciel de paie communique directement les données de leurs
          employés à l’Etat grâce à... une API !
        </p>
        <p>
          Afin d’aider toutes les organisations qui veulent{' '}
          <b>construire un service informatique</b>, api.gouv.fr{' '}
          <a href="/rechercher-api">
            référence les API de toutes les administrations
          </a>{' '}
          qui rendent leurs données disponibles.
        </p>
      </div>
      <div>
        <a className="hidden-anchor" id="apis">
          This is a hidden anchor
        </a>
        <h2>
          Trouver la bonne API <Emoji emoji="🕵️" label="detective" />
        </h2>
        <p>
          {' '}
          Vous êtes en train de concevoir un service informatique ? Nous avons
          surement l’API qui vous correspond.
        </p>
        <p>
          Toutes nos API{' '}
          <a href="/rechercher-api"> sont visibles sur cette page</a>. Vous
          pouvez les filtrer par thématique, ou bien utiliser la recherche pour
          trouver l’API qui vous convient.
        </p>
      </div>
      <div>
        <a className="hidden-anchor" id="access">
          This is a hidden anchor
        </a>
        <h2>
          Accéder à la donnée <Emoji emoji="🔑" label="clé" />
        </h2>
        <p>
          Une grande partie des données publiques sont libres d’accès. C’est ce
          que l’on appelle{' '}
          <a
            target="blank"
            rel="noopener noreferrer"
            href="https://data.gouv.fr"
          >
            l’Open data.
          </a>{' '}
          Tout le monde peut y accéder.
        </p>
        <p>
          D’autres données, comme par exemple les données fiscales, sont
          sensibles et doivent être protégées.{' '}
          <b>Ces données ne sont pas accessibles à tous</b> et seules les
          organisations habilitées sont autorisées à y accéder.
        </p>
        <p>
          Ce site référence des API ouvertes et des API avec habilitation. Les
          fiches des API qui nécessitent une habilitation listent les critères
          d’éligibilité.
        </p>
        <p>
          Si vous respectez ces critères vous pouvez faire une demande d’habilitation.
        </p>
      </div>
      <div>
        <a className="hidden-anchor" id="service">
          This is a hidden anchor
        </a>
        <h2>
          Construire son service <Emoji emoji="🏗" label="construction" />
        </h2>
        <p>
          Une fois que vous avez déterminé de quelle API vous avez besoin et que
          vous avez obtenu l’accès, vous êtes prêt ! Vous pouvez commencer à
          construire votre service !
        </p>
        <p>
          De nombreux services ont été construit depuis la création du site,{' '}
          <a href="/services">jetez un oeil à nos belles histoires.</a>
        </p>
        <p>
          Si vous avez, vous aussi, une belle histoire à partager, n’hésitez pas
          à <a href={constants.links.ADD_API}>nous la faire parvenir.</a>
        </p>
        <TeamHelpWidget source="apropos" />
      </div>
    </div>
    <style jsx>{`
      .text-wrapper > div {
        position: relative;
      }
      a.hidden-anchor {
        display: block;
        position: absolute;
        top: -80px;
        visibility: hidden;
      }
    `}</style>
  </Page>
);

export default About;

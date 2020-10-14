import React from 'react';
import { NextPage } from 'next';

import Page from '../layouts/page';

const Privacy: NextPage = () => (
  <Page usePreFooter={false} title="Politique de confidentialité">
    <div id="privacy-page" className="text-wrapper text-style">
      <h1 className="layout-center">Politique de confidentialité</h1>
      <h2>Cookies déposés</h2>
      <p>
        Ce site dépose un petit fichier texte (un « cookie ») sur votre
        ordinateur lorsque vous le consultez. Cela nous permet de mesurer le
        nombre de visites et de comprendre quelles sont les pages les plus
        consultées.
      </p>
      <h2>
        Ce site n'affiche pas de bannière de consentement aux cookies, pourquoi
        ?
      </h2>
      <p>
        C'est vrai, vous n'avez pas eu à cliquer sur un bloc qui recouvre la
        moitié de la page pour dire que vous êtes d'accord avec le dépôt de
        cookies — même si vous ne savez pas ce que ça veut dire !<br />
        Rien d'exceptionnel, pas de passe-droit lié à un .gouv.fr. Nous
        respectons simplement la loi, qui dit que certains outils de suivi
        d'audience, correctement configurés pour respecter la vie privée, sont
        exemptés d'autorisation préalable. <br />
        Nous utilisons pour cela{' '}
        <a href="https://matomo.org/" rel="noopener noreferrer" target="_blank">
          Matomo
        </a>
        , un outil{' '}
        <a
          href="https://matomo.org/free-software/"
          rel="noopener noreferrer"
          target="_blank"
        >
          libre
        </a>
        , paramétré pour être en conformité avec la{' '}
        <a
          href="https://www.cnil.fr/fr/solutions-pour-les-cookies-de-mesure-daudience"
          rel="noopener noreferrer"
          target="_blank"
        >
          recommandation « Cookies »
        </a>{' '}
        de la{' '}
        <abbr title="Commission Nationale de l'Informatique et des Libertés">
          CNIL
        </abbr>
        . Cela signifie que votre adresse IP, par exemple, est anonymisée avant
        d'être enregistrée. Il est donc impossible d'associer vos visites sur ce
        site à votre personne.
      </p>
      <h2>Désinscription</h2>
      <p>
        À tout moment, vous pouvez refuser l’utilisation des cookies et
        désactiver le dépôt sur votre ordinateur en utilisant la fonction dédiée
        de votre navigateur (fonction disponible notamment sur Microsoft
        Internet Explorer 11, Google Chrome, Mozilla Firefox, Apple Safari et
        Opera).
      </p>
      <p>
        Pour l'outil Matomo, vous pouvez décider de ne jamais être suivi, y
        compris anonymement :
        <iframe
          className="matomo-optout"
          title="Optout cookie"
          src="https://stats.data.gouv.fr/index.php?module=CoreAdminHome&action=optOut&language=fr&backgroundColor=&fontColor=333&fontSize=16px&fontFamily=sans-serif&overflow=visible"
        ></iframe>
      </p>
      <h2>Je contribue à enrichir vos données, puis-je y accéder ?</h2>
      <p>
        Bien sûr ! Les statistiques d'usage de la majorité de nos produits, dont{' '}
        <a href="https://api.gouv.fr" rel="noopener noreferrer" target="_blank">
          api.gouv.fr
        </a>
        , sont disponibles en accès libre sur{' '}
        <a
          href="https://stats.data.gouv.fr"
          rel="noopener noreferrer"
          target="_blank"
        >
          stats.data.gouv.fr
        </a>
        .
      </p>
      <h2>Pour aller plus loin</h2>
      <p>
        Vous pouvez consulter les fiches proposées par la{' '}
        <abbr title="Commission Nationale de l'Informatique et des Libertés">
          CNIL
        </abbr>{' '}
        :
      </p>
      <ul>
        <li>
          <a
            href="https://www.cnil.fr/fr/cookies-traceurs-que-dit-la-loi"
            rel="noopener noreferrer"
            target="_blank"
          >
            Cookies et traceurs : que dit la loi ?
          </a>
        </li>
        <li>
          <a
            href="https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser"
            rel="noopener noreferrer"
            target="_blank"
          >
            Cookies : les outils pour les maîtriser
          </a>
        </li>
      </ul>
    </div>
    <style jsx>{`
      .matomo-optout {
        overflow: visible;
        border-width: 0;
        width: 100%;
      }
    `}</style>
  </Page>
);

export default Privacy;

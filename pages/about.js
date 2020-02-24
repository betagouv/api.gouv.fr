import Link from 'next/link';

import Page from '../layouts/page';
import { HEADER_PAGE } from '../components/header';

const About = () => (
  <Page headerKey={HEADER_PAGE.ABOUT}>
    <div className="ui text container">
      <h1>À propos</h1>

      <div>
        <h2>Qu'est ce qu'une API</h2>
        <p>
          « API » est un acronyme anglo-saxon signifiant{' '}
          <i>Application Programming Interface</i>. Une API est une interface,
          un contrat passé entre deux systèmes informatiques pour leur permettre
          de communiquer.
        </p>
        <p>
          Les API permettent de nombreux usages. Elles sont déjà utilisées
          largement. Par exemple, les entreprise françaises utilisent tous les
          mois celle de la{' '}
          <a href="http://www.dsn-info.fr/api-dsn.htm">
            Déclaration Sociale Nominative
          </a>{' '}
          . Les entreprises ne communiquent pas les données de leur employés
          manuellement à l'administration : leur logiciel de paie transmet
          directement ces données grâce à une API.
        </p>
      </div>

      <div className="ui info message">
        <h3>Métaphore</h3>

        <p>
          Une API est comparable à un serveur dans un restaurant. Le serveur
          permet à tout client (application logicielle) de commander ce qui est
          disponible en cuisine (base de données). Le serveur (API) va chercher
          la commande dans la cuisine (base de données) et la livre au client
          (application logicielle). Tant que le client reçoit son repas, elle
          n'a pas besoin de savoir ce qu'il se passe dans la cuisine. Cela
          signifie que les employés peuvent être remplacés ou de nouveaux
          peuvent être embauchés facilement.
        </p>

        <p>
          De la même façon, une application logicielle qui fait appel à une API
          n'a pas besoin de savoir si la base de données a été optimisée ou
          remplacée. Les API proposent à l'application logicielle et à la base
          de données une manière efficace de collaborer avec un minimum de
          perturbations provenant de modifications apportées à l'une ou l'autre.
        </p>
      </div>

      <h1>Les avantages des API</h1>

      <div>
        <h2>Pour le fournisseur</h2>
        <div className="ui info message">
          Également appelé <strong>producteur</strong> d'API, il est responsable
          de l'exposition de ses ressources. C'est l'acteur qui définit les
          conditions d'utilisation que devra respecter le consommateur. Dans
          api.gouv.fr, les fournisseurs sont tous issus de la sphère publique :
          l'État ou ses représentants, collectivités, autorités administratives…
        </div>
        <ul>
          <li>
            Augmenter la portée de ses services en permettant à d'autres
            administrations ou entreprises d'interagir avec eux.
          </li>
          <li>
            Créer des marchés en facilitant l'accès aux données
            gouvernementales.
          </li>
          <li>
            Innover à coût minime en permettant à des acteurs externes de créer
            des usages en exploitant des API ouvertes pour des besoins non
            imaginés au départ.
          </li>
          <li>
            Répondre à coût marginal aux exigences règlementaires de
            transparence et d'échange de données de plus en plus fortes (loi{' '}
            <abbr title="Droits des Citoyens dans leurs Relations avec les Administrations">
              DCRA
            </abbr>
            , Dites-le Nous Une Fois…).
          </li>
        </ul>
      </div>

      <div>
        <h2>Pour le consommateur</h2>
        <div className="ui info message">
          Acteur qui <strong>accède aux ressources</strong> du fournisseur. Il
          peut être issu de la sphère publique ou de la sphère privée, selon le
          choix du fournisseur. Celui-ci peut notamment demander le respect de
          conditions spécifiques, voire une autorisation préalable.
        </div>
        <ul>
          <li>
            Proposer des services plus complets à l'usager tout en diminuant la
            saisie d'information.
          </li>
          <li>Économiser en mutualisant des briques logicielles.</li>
        </ul>
      </div>

      <div>
        <h2>Public visé</h2>
        <p>
          api.gouv.fr s'adresse avant tout aux créateurs de services, les
          consommateurs d'API. Pour cela, nous facilitons la découverte, la
          compréhension et l'accès aux API et à leurs producteurs.
        </p>

        <p>
          Les fournisseurs, de leur côté, ont avec ce catalogue un moyen simple
          de faire connaître leurs API.
        </p>
      </div>

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

          <h3 id="nous-contacter">
            <Link href="/contact">
              <a>Nous contacter</a>
            </Link>
          </h3>
        </div>
      </div>
    </div>
  </Page>
);

export default About;

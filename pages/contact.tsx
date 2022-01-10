import React from 'react';

import Page from '../layouts/page';

const Contact: React.FC = () => (
  <Page
    title="Nous contacter"
    description="Comment entrer en contact avec la très motivée équipe d’api.gouv.fr"
  >
    <div className="text-wrapper text-style">
      <h1 className="layout-center">Contact</h1>

      <div>
        <h2>Obtenir des détails sur une API</h2>
        <p>
          Contactez directement le producteur de l’API en question. Vous
          trouverez un lien de contact sur la page la décrivant.
        </p>

        <p>
          api.gouv.fr se contente de référencer des API existantes. Nous ne
          pouvons donc pas vous renseigner sur une API spécifique.
        </p>
      </div>

      <div>
        <h2>Ajouter une API</h2>
        <p>
          La demande d’ajout au catalogue se fait de manière autonome{' '}
          <a href="https://github.com/betagouv/api.gouv.fr/blob/master/CONTRIBUTING.md">
            via GitHub
          </a>
          . Votre demande sera revue aussi vite que possible, et nous vous
          aiderons à l’améliorer le cas échéant.
        </p>

        <p>
          Une API peut être référencée si elle répond aux critères suivants.
        </p>

        <ul>
          <li>
            L’API doit être produite et exploitée par un organisme chargé de la
            gestion d’un service public administratif (par exemple :
            Administrations de l’État centralisées et décentralisées;
            Collectivités territoriales; Établissements publics à caractère
            administratif; Organismes{' '}
            <abbr title="Relevant du code de la sécurité sociale et du code rural ou mentionnés aux articles L. 223-16 et L.351-21 du code du travail">
              gérant
            </abbr>{' '}
            des régimes de protection sociale… ).
          </li>
          <li>
            L’API doit permettre l’amélioration ou la création de services
            rendus par d’autres organismes (publics ou privés) selon des règles
            claires, stables et communiquées à l’avance.
          </li>
          <li>
            L’API doit avoir une documentation technique claire accessible par
            internet.
          </li>
          <li>
            Si une demande doit être faite par les réutilisateurs pour y
            accéder, la procédure de demande doit également être accessible par
            internet.
          </li>
          <li>
            Il doit être possible de tester l’API sans intervention humaine.
            Cela peut être obtenu par le biais d’une instance publique, de la
            distribution de jetons test, ou encore d’un environnement « bac à
            sable » qui renvoie des données fausses mais à des formats
            identiques à celles obtenues après enrôlement.
          </li>
        </ul>
      </div>

      <div>
        <h2>Ajouter un service</h2>
        <p>
          La demande d’ajout au catalogue se fait de manière autonome{' '}
          <a href="https://github.com/betagouv/api.gouv.fr/blob/master/CONTRIBUTING.md">
            via GitHub
          </a>
          . Votre demande sera revue aussi vite que possible, et nous vous
          aiderons à l’améliorer le cas échéant.
        </p>
        <p>Un service peut être référencé s’il répond aux critères suivants.</p>
        <ul>
          <li>
            Le service doit dépendre pour une de ses fonctionnalités
            essentielles d’une ou plusieurs API référencées.
          </li>
          <li>Le service doit être accessible au grand public par internet.</li>
        </ul>
      </div>

      <div>
        <h2>Amélioration du site api.gouv.fr</h2>
        <p>
          Vous avez repéré un problème ou souhaitez proposer une amélioration du
          catalogue ?
        </p>

        <p>
          Vérifiez que cette amélioration ne soit pas{' '}
          <a href="https://github.com/betagouv/api.gouv.fr/issues">
            déjà prévue
          </a>{' '}
          et, si ce n’est pas le cas,{' '}
          <a href="https://github.com/betagouv/api.gouv.fr/issues/new">
            suggérez-la
          </a>{' '}
          sur GitHub.
        </p>
      </div>

      <div>
        <h2>Autres</h2>
        <p>
          Votre demande concerne l’une des api du catalogue, contactez
          directement le fournisseur en utilisant le mail de contact présent sur
          la page de description de l’api.
        </p>
        <p>
          Votre sujet concerne API.gouv.fr en général.{' '}
          <a href="/parcours-client?source=contact">
            Posez-nous votre question
          </a>
          .
        </p>
      </div>

      <div>
        <h2>FranceConnect et ANTS</h2>
        <p>
          Votre demande concerne l’utilisation de FranceConnect, écrivez au{' '}
          <a href="mailto:support.usagers@franceconnect.gouv.fr">
            support FranceConnect
          </a>{' '}
          .
        </p>
        <p>
          Votre demande concerne une demande d’immatriculation ou de carte
          grise,
          <a href="https://ants.gouv.fr/contactez-nous">contactez l’ANTS</a> .
        </p>
      </div>
    </div>
  </Page>
);

export default Contact;

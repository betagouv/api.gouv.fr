# api.gouv.fr

[![Build, lint & tests](https://github.com/betagouv/api.gouv.fr/actions/workflows/pre-merge.yml/badge.svg)](https://github.com/betagouv/api.gouv.fr/actions/workflows/pre-merge.yml)
[![Accessibilité](https://github.com/betagouv/api.gouv.fr/actions/workflows/check-accessibility.yml/badge.svg)](https://github.com/betagouv/api.gouv.fr/actions/workflows/check-accessibility.yml)
[![Liens morts](https://github.com/betagouv/api.gouv.fr/actions/workflows/check-broken-links.yml/badge.svg)](https://github.com/betagouv/api.gouv.fr/actions/workflows/check-broken-links.yml)

**api.gouv.fr** catalogue les API produites par les administrations centrales, les
collectivités territoriales, les établissements publics… Chaque API est
associée à une courte description fonctionnelle, une documentation technique,
les modalités d'accès, d'éventuelles ressources supplémentaires et surtout des
liens vers les services qui l'utilisent.

## Derniers déploiements

[![Deploy - Staging](https://github.com/betagouv/api.gouv.fr/actions/workflows/deploy-staging.yml/badge.svg)](https://github.com/betagouv/api.gouv.fr/actions/workflows/deploy-staging.yml)

[![Deploy - Production](https://github.com/betagouv/api.gouv.fr/actions/workflows/deploy-production.yml/badge.svg)](https://github.com/betagouv/api.gouv.fr/actions/workflows/deploy-production.yml)

## Public visé

api.gouv.fr s'adresse avant tout aux créateurs de services, les consommateurs
d'API. Pour cela, nous facilitons la découverte, la compréhension et l'accès
aux API et à leurs producteurs.

Les fournisseurs, de leur côté, ont avec ce catalogue un moyen simple de faire connaître leurs API.

## Fournisseur d'API ? Envie de référencer une nouvelle API ?

### 1- Contacter le service
Veuillez prendre attache avec l'équipe en complétant le formulaire suivant :
[👉 Ajoutez votre API](https://api.gouv.fr/nouvelle-api) !

### 2- Créer la page de son API ([exemple](https://api.gouv.fr/les-api/api-particulier))

Pour ajouter votre API ou commenter un fichier dans ce dépôt, vous devez au préalable avoir un [compte Github](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home).

#### Créer la page à partir des templates disponibles

1. Se rendre dans le dossier [_data/api](https://github.com/betagouv/api.gouv.fr/tree/master/_data/api).
2. Créer le fichier de votre API `api-nom-de-la-nouvelle-api.md`.
3. Utiliser les templates à disposition, commentés avec une explication pour chacun des champs. Les champs indispensables sont indiqués par l'icône épingle (📍) dans le commentaire.

- **Pour les API en open data**, appuyez-vous sur le template [`template.api-opendata.md.example`](https://github.com/betagouv/api.gouv.fr/tree/master/_data/api/template.api-opendata.md.example).

- **Pour les API avec accès restreint**, appuyez-vous sur le template [`template.api-fermees.md.example`](https://github.com/betagouv/api.gouv.fr/tree/master/_data/api/template.api-fermees.md.example).

Pour plus de facililité, copier/coller tout le contenu du template dans votre fichier. Dans le cas où vous n'avez pas toutes les informations permettant de compléter les champs, vous pouvez supprimer le champ ou le commenter en ajoutant un `#` en début de ligne.

#### Champ `producer`

Pour que votre fiche API fonctionne, il est impératif qu'elle soit rattachée au nom d'un fournisseur référencé dans le dossier `api_gouv/_data/producteurs`. [🔎 Ajouter un fournisseur de données](#3--créermodifier-sa-fiche-fournisseur-de-données)

#### Champ `doc_tech_link` ou comment référencer son swagger

Pour ajouter votre swagger dans [API.gouv](https://api.gouv.fr/documentation), il vous faut mettre le lien URL vers le fichier openAPI.

- Si vous avez une URL publique permettant d'accéder au fichier OpenAPI, c'est ce lien que vous devez indiquer.
- Si votre swagger n'est pas disponible par une URL publique, nous pouvons héberger votre swagger pour le rendre disponible. Veuillez [nous contacter](https://api.gouv.fr/parcours-client?source=contact).

Pour ajouter un lien vers la documentation technique, veuillez utiliser le champ `doc_tech_external:`.

#### `account_link:` et `datapass_link:`quelle différence ?

Votre API est en accès restreint ? Deux champs sont à disposition pour renvoyer les usagers vers la demande d'habilitation :  

- `account_link:` vous permet d'ajouter l'URL de votre page de connexion (si il s'agit d'une demande de création de compte) ou de votre procédure d'habilitation.
- `datapass_link:` permet d'ajouter le lien vers le formulaire d'habilitation DataPass, produit opéré par la DINUM et permettant l'instruction de demandes d'accès à des données.


#### Entonoir d'éligibilité avec `access_page:`

Si votre API est uniquement accessible à un type de public, le champ `access_page` vous permet de créer un composant entonnoir pour vérifier si l'usager est éligible. Vous pouvez voir un exemple de ce parcours [ici](https://api.gouv.fr/les-api/api-statut-demandeur-emploi/demande-acces). Ce parcours est accessible après avoir cliqué sur le bouton "Faire une demande d'habilitation" sur la page de l'API.

##### Forme standard du champ :

```
access_page:
  - who: # Chaque "who" crée un bouton de premier niveau. Limitez-en le nombre pour que l'usager s'y retrouve.
      - Un particulier ou une entreprise # Label du bouton
    is_eligible: -1 # -1 signifie que ce public n'est pas elligible, la mention "Désolé, vous n’êtes pas éligible 🚫" sera affichée quand l'usager clique sur le bouton.
    description: |
      Seules les administrations sont habilitées à utiliser l'API XX.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
    # Cette description vient compléter la mention indiquée par le champ is_eligible.
  - who:
      - Une collectivité ou une administration
    is_eligible: 1 # 1 signifie que ce public est éligible, la mention "Vous êtes éligible 👌" sera affichée quand l'usager clique sur le bouton.
    description: |
      Conformément aux dispositions XXXX, seul le public XXX est habilité à pouvoir utiliser cette API.
      Pour obtenir un agrément, vous devrez **justifier de XXXX**, et vous engager à XXXX.

      Vous aurez besoin des informations suivantes pour compléter votre demande d'habilitation : 
      - Info 1
      - Info 2
      - Document 1

      <Button href="https://datapass.api.gouv.fr/api">Remplir une demande</Button>
  - who:
      - Un éditeur de logiciel
    is_eligible: -1
    description: |
      Si vous êtes **éditeur de logiciels, c'est à votre collectivité ou administration de faire sa demande d'habilitation.**

      <Button href="/rechercher-api">Rechercher une autre API</Button>
```

##### Options du champ `description: |` :

Vous pouvez ajouter tout le contenu markdown que vous souhaitez dans le champ `description: |`. Biensûr, rester le plus concis possible est préférable pour que l'usager se repère. Voici quelques options que vous pouvez utiliser facilement : 

**Option 1 :**
Ajouter un bouton pour proposer de chercher une nouvelle API, en écrivant : `<Button href="/rechercher-api">Rechercher une autre API</Button>`

**Option 2 :**
Spécialement pour les API utilisant Datapass comme formulaire d'habilitation, vous pouvez utiliser le composant [`<NextSteps />`](https://github.com/betagouv/api.gouv.fr/tree/master/components/richReactMarkdown/index.tsx) pour ajouter un paragraphe décrivant la liste des documents et informations qui seront demandés.
Il vous suffit de l'ajouter sur une ligne seule à l'intérieur du champ `description: |`, un exemple est visible dans [la forme standard du composant ci-dessus](#forme-standard-du-champ).

<details>
    <summary>Que va ajouter ce composant ?</summary>
    Ajouter ce composant, revient à ajouter le code suivant : 
      ```
      <p>
            <b>Pour remplir votre demande, vous aurez besoin : </b>
          </p>
          <ul>
            <li>de votre numéro SIRET</li>
            <li>du cadre juridique</li>
            <li>{service_description}</li>
            <li>des coordonnées de l'équipe</li>
            <li>
              des coordonnées de votre délégué à la protection des données et
              responsable de traitement
              {is_editeur && <b> de l’entité pour laquelle vous opérez</b>}
            </li>
          </ul>
      ```
</details>

**Autres options :** Vous voulez aller plus loin ? Créer plus de niveaux d'information ? 
Les [API Particulier](https://api.gouv.fr/les-api/api-particulier) et [API Entreprise](https://api.gouv.fr/les-api/api-entreprise) sont un bon exemple dont vous pouvez vous inspirer.

Leur composant entonnoir, également configuré à la base dans le fichier principal, appelle d'autres composants disponibles dans le dossier [`api_gouv/components/questionTree`](https://github.com/betagouv/api.gouv.fr/tree/master/components/questionTree).


### 3- Créer/modifier sa fiche fournisseur de données

Si vous êtes un nouveau fournisseur de données, vous avez besoin de référencer votre organisation dans API.gouv :

- Créer la fiche fournisseur `fournisseur.md`, en l'ajoutant dans le dossier [`api_gouv/_data/producteurs`](https://github.com/betagouv/api.gouv.fr/tree/master/_data/producteurs)
- Dans ce fichier, copier/coller le template `template.fournisseur.md.example` ou ajouter au minimum : 
```
---
name: Nom complet du fournisseur
acronym: Nom court qui sera affiché en principal
type: Association | Entreprise privée 
logo: fichier.png
---
```
- Ajouter le logo au format .png dans le dossier `api_gouv/public/images/api-logo`. Nommer le logo sous le même nom qu'utilisé dans le fichier `fournisseur.md` au niveau du champ `logo:`.


## Comment ça marche ?

### Prérequis

[Node.js](https://nodejs.org/en/) >= 16

### Serveur de développement

tl;dr: `./bin/install.sh`

Cette application utilise [Next.js](https://github.com/zeit/next.js).

1. Installer les dépendances

```bash
npm i
```

2. Variables d’environnement

Afin de configurer le projet correctement, il est conseillé de créer un fichier `.env` avec les variables d’environnement nécessaires à l’application.

`.env` permet de persister les variables d’environnement de développement dans un fichier plutôt que de les définir dans le shell, mais les deux fonctionnent. Cela fonctionne avec [dotenv](https://github.com/motdotla/dotenv) et [next-runtime-dotenv](https://github.com/tusbar/next-runtime-dotenv).

Copier le fichier de configuration

```bash
cp .env.sample .env
```

3. Lancer le serveur de développement

```bash
./bin/local_dev.sh
```

Puis visitez http://localhost:3000/

Par défaut, il écoutera sur le port `3000`, pour changer, utiliser `npm run dev -p 4242`.

### Build de production

Cette application utilise [Next.js](https://github.com/zeit/next.js).

1. Installer les dépendances

```bash
npm i
```

2. Générer les bundles de production

```bash
npm run build
```

3. Lancer le serveur de production

```bash
PORT=3000 npm run start
```



### Tests

1. Linter

```bash
npm run lint
```

2. Tests unitaires

```bash
npm run test
```

3. Autres tests

```bash
// a11y
npm run check-accessibility

//404
npm run check-broken-links

// no link to datapass staging
npm run check-no-datapass-staging
```

### Miniatures

Avant chaque commit est lancé un script qui redimmensionne et compresse les images des pages de guides :

```bash
// a11y
npm run create-thumbnail
```

### Preview apps

Chaque pull request est déployé dans des [review app](https://devcenter.heroku.com/articles/github-integration-review-apps) sur [Heroku](https://dashboard.heroku.com/)

### Deploiement

Le déploiement se fait par [Github action](https://github.com/betagouv/api.gouv.fr/actions)

A chaque "merge" sur master :

- Laissez le déploiement se faire automatiquement sur [staging](https://staging.api.gouv.fr) via l'action [deploy-staging](https://github.com/betagouv/api.gouv.fr/actions/workflows/deploy-staging.yml)
- Vérifiez vos changements sur [staging](https://staging.api.gouv.fr)
- Lancez manuellement le déploiement sur [production](https://api.gouv.fr) : sur [deploy-production](https://github.com/betagouv/api.gouv.fr/actions/workflows/deploy-production.yml) et cliquez sur "Run workflow" -> "Run workflow"

NB: Si plusieurs déploiements sont déclenchés en même temps, seul le premier va jusqu'au bout. Les autres sont automatiquement interrompus.


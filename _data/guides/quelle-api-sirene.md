---
title: Quelle API Sirene utiliser ?
tagline: Comprenez les différentes manières d’interroger la base SIRENE des entreprises
tags: cas usage, api sirene,ETALAB, api entreprise, KBIS, INSEE, open data
image: code.jpg
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
api:
  - API Sirene
  - API Recherche d’entreprises
---

### Qu'est-ce que le répertoire Sirene ?

La base Sirene ou répertoire Sirene est tenue par l'INSEE (Institut National de la Statistique et des Études Économiques) et contient les informations des entreprises enregistrées en France, ainsi que toutes les associations disposant d’un code SIRET.

Elle totalise **28 millions d’établissements**, dont 11 millions sont des établissements en activité.

Elle contient, pour chacun de ces établissement :

| Donnée            | Description                                                                     |
| ----------------- | ------------------------------------------------------------------------------- |
| dénomination      | le nom de l'entreprise                                                          |
| SIREN             | le numero unique de l'entreprise                                                |
| SIRET             | le numero unique de l'établissement                                             |
| NAF               | le code NAF ou code APE, un code d'activité suivant la nomenclature de l'INSEE  |
| date              | la date de création et de clôture (si applicable)                               |
| siege social      | Est-ce que cet établissement est le siège social de l'entreprise                |
| forme juridique   | la forme juridique de l'établissement (SARL, SAS, entreprise individuelle etc.) |
| tranche effectifs | la fourchette des effectifs de l'établissement                                  |

**NB**: Une entreprise a forcément un établissement, son siège social, et peut ensuite posséder zéro ou plusieurs établissements secondaires.

**NB 2**: la liste des code NAF/code APE est [téléchargeable librement sur le site de l’INSEE](https://www.insee.fr/fr/information/2406147)

## Quelles sont les différentes manières d'interroger le répertoire Sirene ?

### Je cherche la donnée d'une entreprise en particulier

Le plus rapide est de chercher sur <External href="https://annuaire-entreprises.data.gouv.fr">l’Annuaire des Entreprises</External> ou sur votre moteur de recherche favori. Tapez dans la barre de recherche le nom de l'entreprise ou son siret si vous le connaissez, vous devriez trouver parmi les résultats les réponses à vos questions.

### Je cherche à télécharger toutes les données, sous forme brute

La base Sirene est publiée sur <External href='https://data.gouv.fr'>data.gouv.fr</External> le portail de la donnée ouverte. Vous pouvez librement la télécharger et l'utiliser pour faire des statistiques générales sur les entreprises françaises :

<Datagouv title="Accèder aux données de la base Sirene sur data.gouv" href="https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/" />

### Je cherche à obtenir les données à la demande, grâce à une API

Le moyen privilégié pour obtenir les données a la demande, ce sont les API. Au sein du service public, 2 API permettent d'interroger la base Sirene :

- l’[API Sirene de l’INSEE](/les-api/sirene_v3)
- l’[API Entreprise](/les-api/api-entreprise)

Il existe une troisième API qui utilise les données de la base sirene afin de proposer une recherche sur les entreprises françaises. C'est l’[API Recherche d’enterprises](/les-api/api-recherche-entreprises).

Attention, cette API ne permet pas d'accèder aux données complètes de la base Sirene, mais uniquement de rechercher une entreprise, par sa dénomination ou son adresse.

## Comment choisir quelle API utiliser ?

Avant tout, les API ont toujours la même source de données : la base Sirene produite et diffusée par l’INSEE.

Ensuite chaque API se différencie par ses limites d'utilisation et les traitements qu’elle applique pour enrichir, transformer et mettre en valeur les données.

### Première différence : les limitations d'usage et d'appel

| API            | API Sirene de l'INSEE                                                                                                         | API Entreprise                                                                   |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Limite d’usage | Nécessite un compte ([se créer un compte](https://api.insee.fr/catalogue/site/themes/wso2/subthemes/insee/pages/sign-up.jag)) | Sous habilitation ([voir les conditions](/les-api/api-entreprise/demande-acces)) |
| Limite d’appel | 30 appels par minute                                                                                                          | 2000 appels par 10 minutes                                                       |

### Deuxième différence : les données disponibles

Les trois API donnent accès aux informations concernant les entreprises et les établissements immatriculés à la base Sirene depuis sa création en 1973, y compris les unités fermées.

En revanche certaines données ne sont pas présentes dans toutes les API :

- les prédécesseurs et successeurs d'un établissement
- les entreprises non-diffusibles ([en savoir plus](https://www.insee.fr/fr/information/4127417))
- les entreprises enregistrées auprès de l'INSEE mais dont le Greffe a refusé l’immatriculation
- la géolocalisation d'une entreprise

Le tableau ci-dessous fait une synthèse de ces différence pour vous aider a choisir :

| API                                     | API Sirene de l'INSEE | API Entreprise |
| --------------------------------------- | --------------------- | -------------- |
| Etablissements diffusibles              | ✅ Oui                | ✅ Oui         |
| Etablissements non-diffusibles          | ✅ Oui                | ✅ Oui         |
| Refus d'immatriculation par le Greffe   | ✅ Oui                | ❌ Non         |
| Recherche des prédecesseurs/successeurs | ✅ Oui                | ❌ Non         |
| geolocalisation                         | ❌ Non                | ❌ Non         |
| recherche par dénomination              | ✅ Oui                | ❌ Non         |

### Troisième différence : l’éligibilité

Les trois API ne visent pas les mêmes publics. Pensez à vérifier votre éligibilité :

| API                                                               | API Sirene de l'INSEE | API Entreprise |
| ----------------------------------------------------------------- | --------------------- | -------------- |
| Particulier                                                       | ✅ Oui                | ❌ Non         |
| Entreprise ou association                                         | ✅ Oui                | ❌ Non         |
| Entreprise ou association chargée d’une mission de service public | ✅ Oui                | ✅ Oui         |
| Administration (collectivité, ministère)                          | ✅ Oui                | ✅ Oui         |

Vous avez fait votre choix ? Lancez-vous :

- l'[API Sirene de l'INSEE](/les-api/sirene_v3)
- l'[API Entreprise](/les-api/api-entreprise)

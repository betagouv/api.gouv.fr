---
title: Faciliter la tarification sociale et solidaire des transports
tagline: Vous êtes une collectivité, un opérateur ou un éditeur de logiciel ? Appliquez facilement un tarif de vos titres de transport adapté à la situation de vos usagers, en utilisant les données de l'API Particulier.
tags: cas usage, api particulier, transport
image: transport.jpg
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
api:
  - API Particulier
---

## Simplifier le traitement des dossiers grâce aux API

Chaque année, les collectivités et les autorités organisatrices de mobilités (AOM) mettent en œuvre des tarifications sociales et solidaires. Le calcul de ces tarifs prend en compte différentes informations sur l’usager telles que son niveau de ressource, son statut étudiant ou professionnel ou encore les différentes aides qu’ils perçoit.

Ces informations peuvent être obtenues par les collectivités et AOM grâce à l’usage des API. L’accès aux données certifiées par API accélère la dématérialisation totale de la démarche, facilite le traitement des dossiers et réduit le risque d’erreur et de fraudes aux déclarations.

## Les données disponibles

Afin de faciliter les traitement des dossiers, vous pouvez utiliser des données librement disponibles (open data) ainsi que des données couvertes par des secrets.

### Les données couvertes par un secret

Deux modalités d'appel existent, que le service en ligne utilise le dispositif FranceConnect [API dites franceConnectée](https://api.gouv.fr/guides/api-franceconnectees) ou non [API Particulier](https://api.gouv.fr/les-api/impot-particulier).

| Donnée                       | API Particulier         |API FranceConnect         |
| ---------------------------- | ----------------------- |------------------------- |
| Revenu fiscal                | ✅                      |✅                         |
| Quotient familial            | ✅                      | Fin 2022                  |
| Statut demandeur d'emploi    | ✅                      | Mars 2022                 |
| Indemnité demandeur d'emploi | Mars 2022               |En cours de test           |
| Statut CSS                   | Février 2022            |Février 2022               |
| Statut RSA                   | Mars    2022            |Mars 2022                  |
| Statut étudiant              | ✅                      | ✅                         |
| Statut étudiant boursier     | Janvier 2022            |Janvier 2022               |
| Statut élève scolarisé       | Mi-2022                 |Non prévu                  |
| Statut élève scolarisé       | Fin 2022                |Non prévu                  |

### Les données disponibles en libre accès

Les données disponibles en libre accès sont référencées sur [api.gouv.fr](http://api.gouv.fr/) et/ou sur [data.gouv.fr](http://data.gouv.fr/) :

- 🔍 [API : Etablissements scolaires](https://api.gouv.fr/les-api/api-annuaire-education)
- 📂 [Fichier : Etablissements scolaires](https://www.data.gouv.fr/fr/datasets/annuaire-de-leducation/)
- 📂 [Fichier : Etablissements de l'enseignement supérieur](https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-principaux-etablissements-enseignement-superieur/map/?disjunctive.type_d_etablissement&disjunctive.typologie_d_universites_et_assimiles&location=4,43.06889,0.74707&basemap=e69ab1)

### Ils utilisent les API pour simplifier le traitement des dossiers

- Syndicat mixte de l’aire grenobloise
- Région Nouvelle Aquitaine
- Syndicat des Mobilités Pays Basque

## Les critères d’accès aux données couvertes par un secret

**Vous devrez être habilité pour accéder aux données couvertes par un secret et justifier de votre droit d'en savoir** :

- L'article L114-8 du code des relations entre le public et l'administration fixe le cadre général des échanges de données au sein de l'administration ;
- Plusieurs autres sources peuvent être évoquées comme le code des transports qui donne compétence aux collectivités.

**Il est indispensable de fournir l'acte qui fixe les conditions tarifaires qui permettra d'apprécier finement le droit d'accès à chaque donnée.**

## Le processus d’accès aux données

### Pour les données des API dites "France connectées"

Vous devez formuler une demande par API.

👉 [Les API France connectées sont listées ici](https://api.gouv.fr/guides/api-franceconnectees)

### Pour les API non “FranceConnectées”

Vous devez formuler une demande unique pour accéder à l'ensemble des données de l'API particulier.

**⚠️ Cas particulier :** si vous n'avez besoin que des données fiscales, vous devez [faire une demande à la DGFIP](https://api.gouv.fr/les-api/impot-particulier).

<br/>
<Button href="https://datapass.api.gouv.fr/api-particulier">Demander un accès à l'API Particulier</Button>

Vous avez besoin de plus de données ? Demandez les avec le bouton 'Une question ?'

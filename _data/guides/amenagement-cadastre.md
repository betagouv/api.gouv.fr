---
title: Récupérer des données sur les parcelles et le cadastre
tagline: Quelles API utiliser pour obtenir des informations sur le cadastre ?
tags: cas usage, territoire, geo, risque, foncier, IGN
image: cadastre.png
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
api:
  - API données foncières
  - API Carto - module Cadastre
  - API Géorisques
  - API Camino
---

# Quelles API utiliser pour obtenir des données sur les parcelles et le cadastre ?

Les API (ou en anglais *Application programming interfaces*), permettent d’échanger des données entre deux outils ou deux bases de données, afin de construire de nouveaux service numériques.

Plusieurs dizaines d’API sont produites par les administrations françaises pour partager des données, qui sont mises à jour chaque jour, chaque mois ou chaque année.

À partir de ces données, les administrations, entreprises et associations ont la possibilité d’alimenter des outils (tels que des tableaux de bord ou des cartographies) pour piloter plus efficacement les politiques publiques (urbanisme, environnement, développement économique...).

[🔎 En savoir plus sur les API](https://api.gouv.fr/guides/api-definition)

## API Géorisques

L’API Géorisques permet d’afficher pour un territoire donné la liste des données et documents relatifs aux risques naturels et technologiques existants.
Elle est développée par le Bureau de Recherches Géologiques et Minières.

L’État met aussi à disposition [l’outil ERRIAL - Géorisques](https://errial.georisques.gouv.fr/), qui permet de remplir plus facilement l’état des risques existants à une adresse.

<Button href="https://api.gouv.fr/les-api/api-georisques">Accéder à l’API</Button>

## API Données foncières

Développée par le CEREMA, L’API Données foncières permet d’accéder aux principales données foncières, d’origine fiscale, enrichies par le Cerema et la Direction Générale de l’Aménagement, du Logement et de la Nature (DGALN).

- Voir la [liste des usages possibles des données foncières](https://datafoncier.cerema.fr/usages)
- Accéder aux [outils d’observation et d’analyse du foncier](https://datafoncier.cerema.fr/les-outils-dobservation-et-danalyse-du-foncier)

<Button href="https://api.gouv.fr/les-api/api-donnees-foncieres">Accéder à l’API</Button>

## API Carto - module Cadastre

L’API Carto - module cadastre (par l’IGN) permet d’obtenir les informations suivantes issues de la BD PARCELLAIRE :

- Obtenir les géométries pour une commune
- Obtenir les divisions parcellaires d’une commune
- Obtenir la géométrie d’une parcelle cadastrale
- Obtenir le centroïde d’une parcelle ou d’une commune (localisants)

<Button href="https://api.gouv.fr/les-api/api_carto_cadastre">Accéder à l’API</Button>

## API Camino

L’API Camino permet de connaitre le cadastre minier (la localisation, les substances minières, les titulaires et les administrations en charge pour chaque projet minier).
L’API distribue également le référentiel des substances de mines inscrites au code minier.

<Button href="https://api.gouv.fr/les-api/api-camino">Accéder à l’API</Button>

# Comment intégrer ces API dans vos outils ou sites internet ?

Les [API](/guides/api-definition) permettent d’accéder à des données et les intégrer dans des outils et sites internet.

Par exemple, pour afficher des informations cadastrales sur un site ou dans un logiciel métier, l’intégration d’une API permettra d’automatiser sa mise à jour.

### De manière générale, les API permettent :
- ⏱ de disposer des données les plus récentes (grâce à l’accès direct à une base de données de référence),
- 🤖 d’automatiser la mise à jour de données, sites web, tableaux de bord,
- ✅ d’utiliser une donnée certifiée à la source,
- 🔎 de filtrer ou afficher une seule information parmi un grand ensemble de données,
- 📂 de ne pas télécharger et stocker soi-même les fichiers et jeux de données.

### En pratique ?

1. Accédez à la documentation des API que vous souhaitez utiliser ;
2. Testez l’API avec différents paramètres d’appel (Volet de droite : **Tester l’API**) ;
3. Générez un jeton d’appel propre à votre usage ;
4. Intégrez l’URL de l’API dans votre système d’information, et paramétrez les appels possibles.

#### [En savoir plus sur les API](https://api.gouv.fr/guides/api-definition)

# Contribuez au partage d’API

#### Référencez vos API sur api.gouv.fr

Toute administration peut référencer ses API sur le catalogue api.gouv.fr.

Vous diffusez ou souhaitez diffuser une API ?

<Button href="https://api.gouv.fr/nouvelle-api">Référencer une nouvelle API</Button>

#### Vous ne trouvez pas l’API dont vous avez besoin ?

<Button href="/parcours-client?source=preFooter">Contactez-nous</Button>

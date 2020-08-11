---
title: API CartoBio - Territoires
tagline: Ouvrir les données des parcelles en agriculture biologique auprès des acteurs publics territoriaux.
owner: Agence BIO
category: public
is_open: false
access_link: /les-api/api_cartobio_territoires/demande-acces
access_description: |
  Cette API nécessite une habilitation :
access_page:
  - who:
      - Un particulier ou une entreprise
    is_eligible: -1
    description: |
      Seules les administrations et les organismes publics sont habilitées à utiliser l’API CartoBio Territoires.

      <Button href="/rechercher-api">Retourner à la page de recherche</Button>
  - who:
      - une administration
      - un organisme publique
    is_eligible: 1
    description: |
      Les structures publiques (EPCI, Agence de l’Eau, PNR, Agence Publique, …) qui souhaitent avoir accès aux données de l’API CartoBio pour des projets dans leur territoire (qualité de l’eau, alimentation, …) peuvent faire une demande.

      <NextSteps />
      <Button href="mailto:cartobio@beta.gouv.fr?subject=Demande%20d%E2%80%99acc%C3%A8s%20%C3%A0%20l%27API%20CartoBio">Remplir une demande</Button>
      # <Button href="https://signup.api.gouv.fr/api_cartobio_territoires">Remplir une demande</Button>
logo: AgenceBio.svg
external_site: https://cartobio.org/
keywords:
  - CartoBio
  - Agriculture
  - parcelles
  - Bio
  - Biologique
  - Agence Bio
  - Territoire
contact_link: cartobio@beta.gouv.fr
doc_tech_external: https://github.com/entrepreneur-interet-general/CartoBio-Presentation/blob/master/docs/api-territoires.md
partenaires:
  - Ministère de l’Agriculture et de l’Alimentation
  - Ministère de la Transition Écologique
  - Institut National de l’Origine et de la Qualité (INAO)
  - Organisme Français de la Biodiversité
  - Etalab
  - Beta.gouv
  - Les Organismes de Certification de l’Agriculture Biologique
themes:
  - Environnement
last_update: 27/07/2020
---

CartoBio vise à ouvrir progressivement les données des parcelles conduites en agriculture biologique en France, notamment auprès des acteurs publics territoriaux.

### A quoi sert l’API CartoBio - Teritoires ?

Elle permet aux Administrations **territoriales** et aux Organismes **Publiques** de récupérez les données des parcelles conduites en agriculture Biologique sur le territoire afin de :

- Avoir une meilleure connaissance de votre territoire
- Adapter les politiques publiques locales sur les sujets de **l’eau** et de **l’alimentation**
  - Qualité de l’eau
  - Cibler les zones où renforcer le développement de l’agriculture biologique
  - Connaître le potentiel d’alimentation bio et locale

### Données de l’API :

La récupération des parcelles bio et de leur assolement de l’année pour une zone géographique se fait par Code EPCI, code INSEE et/ou contour géographique en Shapefile ou GeoJSON.

Donnée accessible :

| Donnée                              | Description                     |
| ----------------------------------- | ------------------------------- |
| Contour géographique de la parcelle | Sous forme Shapefile ou GeoJson |
| Assolement de l’année               | Description des cultures        |
| Millésime de la donnée              | Année                           |

#### D'où vient la donnée ?

Les données exposées par l'API sont celles de la PAC 2017, 2018 et 2019 issue des RPG, complétées par les Organismes de Certification lors des contrôles terrain.

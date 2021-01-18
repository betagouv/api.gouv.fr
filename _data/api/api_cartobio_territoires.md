---
title: API CartoBio - Territoires
tagline: Un accès aux données des parcelles en agriculture biologique pour les acteurs publics territoriaux
producer: agence-bio
category: public
is_open: -1
datapass_link: https://datapass.api.gouv.fr/cartobio
access_page:
  - who:
      - un particulier
    is_eligible: 0
    description: |
      Nous communiquons les données géographiques sous condition de future installation en agriculture biologique (peu importe le label), ou parce que vous étudiez les données géographiques en lien avec le développement de l'agriculture biologique.

      <Button href="mailto:cartobio-donnees@beta.gouv.fr?subject=Demande%20de%20donn%C3%A9es%20pour%20mon%20territoire">Contactez-nous pour exposer votre projet</Button>
  - who:
      - une association
      - une coopérative
      - un·e apiculteur·ice
      - une entreprise
    is_eligible: 1
    description: |
      Les organisations qui œuvrent au développement de l'agriculture biologique et/ou de la biodiversité peuvent faire une demande de _données géographiques_.

      Si vous souhaitez uniquement connaitre la _répartition_ ou les _statistiques_ de l'agriculture bio dans votre commune/département/région, [l'Agence Bio publie des données annuellement](https://www.agencebio.org/vos-outils/les-chiffres-cles/).

      **Remarque** : Nous ne les distribuons pas les données pour de la prospection commerciale.

      <NextSteps />
      <Button href="https://datapass.api.gouv.fr/cartobio">Remplir une demande</Button>
  - who:
      - une administration
      - un organisme public
    is_eligible: 1
    description: |
      Les structures publiques (université, EPCI, Agence de l’Eau, PNR, Agence Publique, …) qui souhaitent avoir accès aux données de l’API CartoBio pour des projets dans leur territoire (qualité de l’eau, alimentation, …) peuvent faire une demande.

      <NextSteps />
      <Button href="https://datapass.api.gouv.fr/cartobio">Remplir une demande</Button>
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
#doc_tech_external: https://github.com/entrepreneur-interet-general/CartoBio-Presentation/blob/master/docs/api-territoires.md
doc_tech_link: https://cartobio.org/api/v1/documentation/json
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
  - Agriculture
last_update: 18/01/2021
rate_limiting_resume: illimité
content_intro: |
  CartoBio vise à ouvrir progressivement les données des parcelles conduites en agriculture biologique en France, notamment auprès des acteurs publics territoriaux.

  ### À quoi sert l’API CartoBio - Territoires ?

  Elle permet aux Administrations **territoriales**, aux Organismes **Publics**, et aux acteurs **privés** de récupérer les données des parcelles conduites en agriculture Biologique sur le territoire afin de :

  - Adapter les politiques publiques locales sur les sujets de **l’eau** et de **l’alimentation**
    - Qualité de l’eau
    - Cibler les zones où renforcer le développement de l’agriculture biologique
    - Connaître le potentiel d’alimentation bio et locale
  - Avoir une meilleure connaissance de votre territoire
---

### Données de l’API

La récupération des parcelles bio et de leur assolement de l’année pour une zone géographique se fait par Code EPCI, code INSEE et/ou contour géographique en Shapefile ou GeoJSON. Les informations sont anonymisées.

Voici les données accessibles :

| Donnée                              | Description                     |
| ----------------------------------- | ------------------------------- |
| Contour géographique de la parcelle | Sous forme Shapefile ou GeoJson |
| Assolement de l’année               | Description des cultures        |
| Millésime de la donnée              | Année                           |
| Superficie                          | En hectares, par parcelle       |

#### D'où vient la donnée ?

Les données exposées par l'API sont basées sur les données géographiques des instructions d'aides PAC 2017, 2018 et 2019 — c'est-à-dire du RPG de niveau IV. Ces données sont complétées par les Organismes de Certification lors des contrôles terrain. Ces données représentent environt 80 à 85% de la surface bio connue.

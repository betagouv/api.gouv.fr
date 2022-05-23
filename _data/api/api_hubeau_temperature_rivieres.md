---
title: Hub'Eau - Température des cours d'eau
tagline: Température en continu dans les cours d'eau
is_open: 1 # 1 means API is fully open
external_site: https://hubeau.eaufrance.fr/page/api-temperature-continu
partners:
  - eaufrance
  - ofb
  - brgm
producer: hub-eau
keywords:
  - Température
  - Capteur
  - Cours d'eau
  - Fleuve
  - Plan d'eau
  - Rivière
contact_link: newshubeau@brgm.fr
doc_tech_link: https://hubeau.eaufrance.fr/api/v1/temperature/api-docs
themes:
  - Environnement
visits_2019: 2868
last_update: 18/06/2018
content_intro: |
  [L'API "Température en continu"](https://hubeau.eaufrance.fr/page/api-temperature-continu) de Hub'Eau permet d'interroger les données de températures relevées par des capteurs automatiques posés dans les cours d'eau de France métropolitaine.
  Ces capteurs enregistrent la température à des fréquences variant de une à quelques heures.
---

### Description fonctionnelle de l'API Température en continu des cours d'eau

Deux opérations (endpoints) sont disponibles :

- **stations** : permet de rechercher les stations sur lesquelles sont mesurées les températures en continu dans les cours d'eau ;
- **chroniques** : permet de rechercher les chroniques de températures en continu dans les cours d'eau mesurées aux différentes stations.

Les données sont issues de la [base de données Naïades](http://www.naiades.eaufrance.fr/). Elles sont mises à jour trimestriellement.
Les données sont exposées sous la forme d'une API REST, les formats supportés sont : JSON, GeoJSON et CSV.

Dernières évolutions de l'API Température en continu des cours d'eau de Hub'Eau:

- 30/07/2018 : publication de la version 1
- 14/06/2018 : publication de la version bêta-1, correction bug chroniques.csv
- 31/05/2018 : mise à disposition de la version bêta

### Connaissez-vous Hub'Eau ?

#### Simplifier l'accès aux données sur l'eau

Service pérenne de la toile [Eau France](https://www.eaufrance.fr), [Hub'Eau](https://hubeau.eaufrance.fr/) met à disposition des API Rest favorisant l’accès aux données du [SIE](https://www.eaufrance.fr/donnees) dans des formats simples d’emploi et propices à la réutilisation (CSV, JSON, GeoJSON).
Fondé sur une infrastructure et des méthodes adaptées au traitement et au stockage de données massives, les API Hub'Eau garantissent les meilleures performances de disponibilité.
Hub’Eau est le résultat de la collaboration de l’AFB et du BRGM dans le cadre du pôle de recherche et d'innovation en interopérabilité des systèmes d'information distribués sur l'eau : [INSIDE](http://www.pole-inside.fr/fr).

Les autres API disponibles à ce jour dans Hub'Eau sont :

- [Etat piscicole](/les-api/api_hubeau_poissons) ;
- [Indicateurs Eau potable et Assainissement](/les-api/api_hubeau_indic_EP_Asst) ;
- [Piézométrie](/les-api/api_hubeau_piezometrie) ;
- [Qualité physico-chimique des cours d'eau](/les-api/api_hubeau_qualite_rivieres) ;
- [Qualité des nappes d'eau souterraine](/les-api/api_hubeau_qualite_nappes_eau_sout).

#### Un service en co-construction

Pour des API toujours plus en phase avec les besoins utilisateurs, Hub'Eau inaugure en 2018 une [politique de bêta testing](https://hubeau.eaufrance.fr/page/apis) en organisant une campagne de tests ouverte avant la mise la mise en production de chaque nouvelle API.
D'une durée de 30 à 45 jours, ces campagnes ont pour objectif de recueillir un maximum de retour d’expérience des utilisateurs sur les points forts et les points faibles des API en construction.
Pour être informé de la sortie des nouvelles API et les tester en avant-première, inscrivez-vous à la [newsletter](https://hubeau.eaufrance.fr/page/news-letter-hubeau) !

### Exemples de réutilisation

- [Soumettez le votre sur la page GitHub des utilisateurs de Hub'Eau](https://github.com/BRGM/hubeau)

### Glossaire

#### AFB

L'[OFB (Office Français de la Biodiversité)](https://ofb.gouv.fr/) a été créée le 1er janvier 2017. Elle regroupe l'Agence des aires marines protégées, l'Atelier technique des espaces naturels, l'Office national de l'eau et des milieux aquatiques et les Parcs nationaux de France. L'AFB , établissement public du ministère en charge de l'environnement, exerce des missions d’appui à la mise en œuvre des politiques publiques dans les domaines de la connaissance, la préservation, la gestion et la restauration de la biodiversité et des milieux terrestres, aquatiques et marins. Elle vient en appui aux acteurs publics mais travaille également en partenariat étroit avec les acteurs socio-économiques. Elle a aussi vocation à aller à la rencontre du public pour mobiliser les citoyens en faveur de la biodiversité. En matière d’espaces protégés, elle gère notamment les parcs naturels marins et le sanctuaire de mammifères marins Agoa aux Antilles. Elle est opératrice et animatrice de sites Natura 2000 en mer. Les parcs nationaux sont rattachés à l’Agence, des synergies fortes sont mises en place avec eux.

#### BRGM

Le [BRGM (Bureau de Recherches Géologiques et Minières)](http://www.brgm.fr/), service géologique national français, est l'établissement public de référence dans les applications des sciences de la Terre pour gérer les ressources et les risques du sol et du sous-sol. Le BRGM assure notamment la diffusion de données géologiques et environnementales via les technologies de l’information et de la communication, avec pour objectif la mise à disposition des pouvoirs publics, des acteurs économiques et du grand public d'informations géoréférencées pour appuyer leurs décisions. Parmi les domaines de compétence du BRGM figurent les infrastructures informatiques de diffusion, calcul, simulation-visualisation 3D et réalité virtuelle ainsi que l'interopérabilité.

#### Naïades

[Naïades](http://www.naiades.eaufrance.fr/) est l'interface nationale pour l'accès aux données des rivières et des lacs. Elle permet aux utilisateurs d'accéder aux données collectées par les agences de l'eau, les offices de l'eau et l'AFB sur les paramètres physiques, les concentrations de substances chimiques, les inventaires d'espèces et l'hydromorphologie en un point unique dans des formats standardisés.

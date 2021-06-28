---
title: Hub'Eau - Prélèvements en eau
tagline: Prélèvements en eau
is_open: 1 # 1 means API is fully open
external_site: https://hubeau.eaufrance.fr/page/api-prelevements-eau
partners:
  - eaufrance
  - ofb
  - brgm
producer: hub-eau
keywords:
  - Prélèvements en eau
  - Ressource en eau
  - BNPE
contact_link: newshubeau@brgm.fr
doc_tech_link: https://hubeau.eaufrance.fr/api/v1/prelevements/api-docs
themes:
  - Environnement
visits_2019: 55
last_update: 24/07/2019
---

### Description fonctionnelle de l'API Prélèvements en eau

[L'API Prélèvements en eau](https://hubeau.eaufrance.fr/page/api-prelevements-eau) fournit des informations sur les volumes annuels directement prélevés sur la ressource en eau, déclinés par localisation et catégorie d’usage de l’eau. Ces informations sont issues de la gestion des redevances par les agences et offices de l’eau.
Source des données : [Banque Nationale des Prélèvements quantitatifs en Eau (BNPE)](https://bnpe.eaufrance.fr/).  
  
Les données sont exposées sous la forme d'une API REST, les formats supportés sont : JSON, GeoJSON et CSV.  
  
Pour en savoir plus, consultez [le site de la BNPE](https://bnpe.eaufrance.fr/). Vous y trouverez notamment des [cartes de peuplement de la base de données par années](https://bnpe.eaufrance.fr/cartes-peuplement-base).  
  
Les différentes opérations possibles sont :

- **chroniques** : permet de récupérer les volumes annuels d'eau prélevés par ouvrages. ;
- **ouvrages** : permet de récupérer la description des ouvrages de prélèvement. Les données de volumes annuels prélevés sont rattachées aux ouvrages et non aux points de prélèvement.
- **points_prelevement** : permet de récupérer la description des points de prélèvement.

Dernières évolutions de l'API Prélèvements en eau de Hub'Eau:

- 16/06/2021 : mise en ligne de la v1
- 04/06/2019 : mise à disposition de la version beta publique

### Connaissez-vous Hub'Eau ?

#### Simplifier l'accès aux données sur l'eau

Service pérenne de la toile [Eau France](https://www.eaufrance.fr), [Hub'Eau](https://hubeau.eaufrance.fr/) met à disposition des API Rest favorisant l’accès aux données du [SIE](https://www.eaufrance.fr/donnees) dans des formats simples d’emploi et propices à la réutilisation (CSV, JSON, GeoJSON).
Fondé sur une infrastructure et des méthodes adaptées au traitement et au stockage de données massives, les API Hub'Eau garantissent les meilleures performances de disponibilité.
Hub’Eau est le résultat de la collaboration de l’OFB et du BRGM dans le cadre du pôle de recherche et d'innovation en interopérabilité des systèmes d'information distribués sur l'eau : [INSIDE](http://www.pole-inside.fr/fr).

Pour découvrir toutes les API disponibles dans Hub'Eau, visitez [la page Hub'Eau sur api.gouv](https://api.gouv.fr/producteurs/hub-eau) ou directement sur [le portail Hub'Eau](https://hubeau.eaufrance.fr/page/apis).  

#### Un service en co-construction

Pour des API toujours plus en phase avec les besoins utilisateurs, Hub'Eau a inauguré en 2018 une [politique de bêta testing](https://hubeau.eaufrance.fr/page/apis) en organisant une campagne de tests ouverte avant la mise la mise en production de chaque nouvelle API.
D'une durée de quelques mois, ces campagnes ont pour objectif de recueillir un maximum de retour d’expérience des utilisateurs sur les points forts et les points faibles des API en construction.
Pour être informé de la sortie des nouvelles API et les tester en avant-première, inscrivez-vous à la [newsletter](https://hubeau.eaufrance.fr/newsletter) !

### Exemples de réutilisation

- [Evolution annuelle des prélèvements sur le territoire du SAGE Yèvre-Auron](https://www.eptb-loire.fr/Cartographie/html/yevre-auron/index_prelevements.html), par [l'Etablissement Public Loire](https://www.eptb-loire.fr/).  
- [Soumettez le votre sur la page GitHub des utilisateurs de Hub'Eau](https://github.com/BRGM/hubeau)

### Glossaire

#### BNPE

La [banque nationale des prélèvements quantitatifs en eau (BNPE)](https://bnpe.eaufrance.fr/) est l’outil national dédié aux prélèvements sur la ressource en eau, pour la France métropolitaine et les départements d’outre-mer. Les informations portent sur les volumes annuels directement prélevés sur la ressource en eau et sont déclinées par localisation et catégorie d’usage de l’eau. Issues aujourd’hui de la gestion des redevances par les agences et offices de l’eau, elles sont appelées à être complétées à court terme par d’autres producteurs de données. Les données sont mises à jour une fois par an.

#### BRGM

Le [BRGM (Bureau de Recherches Géologiques et Minières)](http://www.brgm.fr/), service géologique national français, est l'établissement public de référence dans les applications des sciences de la Terre pour gérer les ressources et les risques du sol et du sous-sol. Le BRGM assure notamment la diffusion de données géologiques et environnementales via les technologies de l’information et de la communication, avec pour objectif la mise à disposition des pouvoirs publics, des acteurs économiques et du grand public d'informations géoréférencées pour appuyer leurs décisions. Parmi les domaines de compétence du BRGM figurent les infrastructures informatiques de diffusion, calcul, simulation-visualisation 3D et réalité virtuelle ainsi que l'interopérabilité.

#### OFB

L'[OFB (Office Français de la Biodiversité)](https://ofb.gouv.fr/) est un établissement public dédié à la sauvegarde de la biodiversité. Une de ses priorités est de répondre de manière urgente aux enjeux de préservation du vivant. Créé au 1er janvier 2020 par la loi n°2019-773 du 24 juillet 2019, l’Office français de la biodiversité regroupe les agents de l’Agence française pour la biodiversité (AFB) et de l’Office national de la chasse et de la faune sauvage (ONCFS). Unir ces deux établissements dans la lutte pour la protection de la nature, permet de rassembler des expertises, sur les milieux aquatiques, terrestres et marins et faire front commun contre les menaces qui pèsent sur la biodiversité en France. Regrouper ces deux entités, dont les agents sont implantés sur l’ensemble de l’hexagone et les Outre-mer, c’est aussi assurer un ancrage solide dans les territoires pour agir à l’échelle locale.

#### Ouvrage de prélèvement en eau

Un ouvrage de prélèvement en eau désigne un ensemble de dispositifs techniques de captage, de stockage et de canalisation d'eau, provenant d'une ressource et à destination d'un usage principal. L’ouvrage est connecté à une seule ressource en eau, par l'intermédiaire d'un ou plusieurs points de prélèvement géographiquement individualisés.

#### Point de prélèvement en eau

Un point de prélèvement d'eau matérialise un point de connexion physique entre la ressource en eau et un dispositif technique de captage d'eau se rapportant à l'ouvrage de prélèvement en question. Par définition, un point de prélèvement est donc rattaché à un seul et unique ouvrage de prélèvement.

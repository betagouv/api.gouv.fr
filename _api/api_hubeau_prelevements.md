---
title: Hub'Eau - Prélèvements en eau
tagline: Prélèvements en eau
contract: OUVERT
external_site: https://hubeau.eaufrance.fr/page/api-prelevements-eau
logo: 08-prelevements.png
clients:
  - particuliers
  - entreprises
  - bureaux d'études
  - collectivités
  - ministères
partners:
  - AFB
  - BRGM
  - BNPE
owner: AFB / BRGM
keywords:
  - Prélèvements en eau
  - Ressource en eau
  - BNPE
score:
  detail:
    access:
      is_open: true
    contact:
      link: newshubeau@brgm.fr
    doc_tech:
      link: https://hubeau.eaufrance.fr/api/v1/prelevements/api-docs
---

### Description fonctionnelle de l'API Prélèvements en eau

[L'API Prélèvements en eau](https://hubeau.eaufrance.fr/page/api-prelevements) fournit des informations sur les volumes annuels directement prélevés sur la ressource en eau, déclinés par localisation et catégorie d’usage de l’eau. Ces informations sont issues de la gestion des redevances par les agences et offices de l’eau. 
Source des données : [Banque Nationale des Prélèvements quantitatifs en Eau (BNPE)](https://bnpe.eaufrance.fr/).
Les données sont exposées sous la forme d'une API REST, les formats supportés sont : JSON, GeoJSON et CSV.
__L'API est actuellement en version beta.__ Les données et fonctionnalités de l'API peuvent évoluer à tout moment.
Une des limitations principales de cette version beta est l'absence de coordonnées géographiques (toutes les coordonnées sont fictives) : les fonctions de recherche géographique par bounding box ou rayon ne fonctionnent donc pas.
Pendant cette période de test, nous vous invitons à faire remonter toute demande de correction ou tout besoin non satisfait sur le [forum de contribution Github](https://github.com/BRGM/hubeau/issues).

Les différentes opérations possibles sont :

* __chroniques__ : permet de récupérer les volumes annuels d'eau prélevés par ouvrages. ; 
* __ouvrages__ : permet de récupérer la description des ouvrages de prélèvement. Les données de volumes annuels prélevés sont rattachées aux ouvrages et non aux points de prélèvement.
* __points_prelevement__ : permet de récupérer la description des points de prélèvement.

Dernières évolutions de l'API Prélèvements en eau de Hub'Eau:

* 04/06/2019 : mise à disposition de la version beta publique

### Connaissez-vous Hub'Eau ?

#### Simplifier l'accès aux données sur l'eau
Service pérenne de la toile [Eau France](https://www.eaufrance.fr), [Hub'Eau](https://hubeau.eaufrance.fr/) met à disposition des API Rest favorisant l’accès aux données du [SIE](https://www.eaufrance.fr/donnees) dans des formats simples d’emploi et propices à la réutilisation (CSV, JSON, GeoJSON).
Fondé sur une infrastructure et des méthodes adaptées au traitement et au stockage de données massives, les APIs Hub'Eau garantissent les meilleures performances de disponibilité.
Hub’Eau est le résultat de la collaboration de l’AFB et du BRGM dans le cadre du pôle de recherche et d'innovation en interopérabilité des systèmes d'information distribués sur l'eau : [INSIDE](http://www.pole-inside.fr/fr).  

Les autres API disponibles à ce jour dans Hub'Eau sont :

* [Etat piscicole](/api/api_hubeau_poissons.html) ;
* [Indicateurs Eau potable et Assainissement](/api/api_hubeau_indic_EP_Asst.html) ;
* [Piézométrie](/api/api_hubeau_piezometrie.html) ;
* [Qualité physico-chimique des cours d'eau](/api/api_hubeau_qualite_rivieres.html) ;
* [Qualité des nappes d'eau souterraine](/api/api_hubeau_qualite_nappes_eau_sout.html) ;
* [Température des cours d'eau](/api/api_hubeau_temperature_rivieres.html) ;
* [Hydrométrie](/api/api_hubeau_hydrometrie.html).

#### Un service en co-construction
Pour des APIs toujours plus en phase avec les besoins utilisateurs, Hub'Eau a inauguré en 2018 une [politique de bêta testing](https://hubeau.eaufrance.fr/page/apis-version-beta) en organisant une campagne de tests ouverte avant la mise la mise en production de chaque nouvelle API.
D'une durée de 30 à 45 jours, ces campagnes ont pour objectif de recueillir un maximum de retour d’expérience des utilisateurs sur les points forts et les points faibles des API en construction.
Pour être informé de la sortie des nouvelles API et les tester en avant-première, inscrivez-vous à la [newsletter](https://hubeau.eaufrance.fr/page/news-letter-hubeau) !


### Exemples de réutilisation

* [Soumettez le votre sur la page GitHub des utilisateurs de Hub'Eau](https://github.com/BRGM/hubeau)

### Glossaire

#### AFB
L'[AFB (Agence Française de la Biodiversité)](http://www.afbiodiversite.fr/) a été créée le 1er janvier 2017. Elle regroupe l'Agence des aires marines protégées, l'Atelier technique des espaces naturels, l'Office national de l'eau et des milieux aquatiques et les Parcs nationaux de France. L'AFB , établissement public du ministère en charge de l'environnement, exerce des missions d’appui à la mise en œuvre des politiques publiques dans les domaines de la connaissance, la préservation, la gestion et la restauration de la biodiversité et des milieux terrestres, aquatiques et marins. Elle vient en appui aux acteurs publics mais travaille également en partenariat étroit avec les acteurs socio-économiques. Elle a aussi vocation à aller à la rencontre du public pour mobiliser les citoyens en faveur de la biodiversité. En matière d’espaces protégés, elle gère notamment les parcs naturels marins et le sanctuaire de mammifères marins Agoa aux Antilles. Elle est opératrice et animatrice de sites Natura 2000 en mer. Les parcs nationaux sont rattachés à l’Agence, des synergies fortes sont mises en place avec eux.

#### BNPE
La [banque nationale des prélèvements quantitatifs en eau (BNPE)](https://bnpe.eaufrance.fr/) est l’outil national dédié aux prélèvements sur la ressource en eau, pour la France métropolitaine et les départements d’outre-mer. Les informations portent sur les volumes annuels directement prélevés sur la ressource en eau et sont déclinées par localisation et catégorie d’usage de l’eau. Issues aujourd’hui de la gestion des redevances par les agences et offices de l’eau, elles sont appelées à être complétées à court terme par d’autres producteurs de données. Les données sont mises à jour une fois par an.

#### BRGM
Le [BRGM (Bureau de Recherches Géologiques et Minières)](http://www.brgm.fr/), service géologique national français, est l'établissement public de référence dans les applications des sciences de la Terre pour gérer les ressources et les risques du sol et du sous-sol. Le BRGM assure notamment la diffusion de données géologiques et environnementales via les technologies de l’information et de la communication, avec pour objectif la mise à disposition des pouvoirs publics, des acteurs économiques et du grand public d'informations géoréférencées pour appuyer leurs décisions. Parmi les domaines de compétence du BRGM figurent les infrastructures informatiques de diffusion, calcul, simulation-visualisation 3D et réalité virtuelle ainsi que l'interopérabilité.

#### Ouvrage de prélèvement en eau
Un ouvrage de prélèvement en eau désigne un ensemble de dispositifs techniques de captage, de stockage et de canalisation d'eau, provenant d'une ressource et à destination d'un usage principal. L’ouvrage est connecté à une seule ressource en eau, par l'intermédiaire d'un ou plusieurs points de prélèvement géographiquement individualisés.

#### Point de prélèvement en eau
Un point de prélèvement d'eau matérialise un point de connexion physique entre la ressource en eau et un dispositif technique de captage d'eau se rapportant à l'ouvrage de prélèvement en question. Par définition, un point de prélèvement est donc rattaché à un seul et unique ouvrage de prélèvement.

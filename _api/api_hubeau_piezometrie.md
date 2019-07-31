---
title: Hub'Eau - Piézométrie
tagline: Piézométrie (niveau des nappes d'eau souterraine)
contract: OUVERT
external_site: https://hubeau.eaufrance.fr/page/documentation_piezometrie
logo: 03-piezo.png
clients:
  - particuliers
  - entreprises
  - bureaux d'études
  - collectivités
  - ministères
partners:
  - AFB
  - BRGM
  - ADES
owner: AFB / BRGM
keywords:
  - Piézométrie
  - Aquifère
  - Nappe
  - Niveau d'eau
  - Eau souterraine
  - Hydrogéologie
stat:
  lastXdays: 30
  url: https://hubeau.eaufrance.fr/sites/default/files/api/stats.json
  label: recherches effectuées
  path:
    - Piezo_last30DaysQueries
score:
  detail:
    access:
      is_open: true
    contact:
      link: newshubeau@brgm.fr
    doc_tech:
      link: https://hubeau.eaufrance.fr/api/v1/niveaux_nappes/api-docs
---

### Description fonctionnelle de l'API Piézométrie

[L'API Piézométrie](https://hubeau.eaufrance.fr/page/api-piezometrie) de Hub'Eau permet d'accéder aux données sur le niveau des nappes d'eau souterraines.
Ces données sont issues de la banque [ADES](http://www.ades.eaufrance.fr). Il s'agit des chroniques de hauteur d'eau dans les piézomètres.
Les données sont mises à jour au fil de l'eau dans ADES, et une fois par semaine (le lundi matin) dans Hub'Eau.
Les données sont exposées sous la forme d'une API REST, les formats supportés sont : JSON, GeoJSON et CSV.

Les différentes opérations possibles sont :

* __chroniques__ : permet de lister les niveaux des nappes d'eau (chroniques piézométriques) d'une station de mesure des eaux souterraines (piézomètre) ;
* __stations__ : permet de rechercher les stations de mesure des niveaux des nappes d'eau (stations piézométriques ou piézomètres).

Dernières évolutions de l'API Piézométrie de Hub'Eau:

* 22/05/2018 : v1.1.0 : limitation sur la profondeur d'accès aux résultats, ajout du header "link" pour le format CSV, correction code retour pour le format CSV qui gère maintenant les codes 200 et 206
* 29/11/2017 : mise à jour de la version de l'API, passage de v0 à v1, modification de l'URL de l'API : /v0/niveaux_aquiferes par /v1/niveaux_nappes
* 04/10/2017 : ajout du paramètre "sort" sur l'opération "chroniques", permet de changer l'ordre de tri (asc ou desc) sur la date de mesure piézométrique
* 04/05/2017 : mise à jour de l'adresse de l'API api.hubeau.fr vers [hubeau.eaufrance.fr/](https://hubeau.eaufrance.fr/)
* 24/11/2016 : ajout de l'attribut "timestamp_mesure" sur l'opération "chroniques"
* 21/09/2016 : ajout des libellés SANDRE à côté des codes SANDRE dans la réponse
* 08/08/2016 : ajout du paramètre fields, la valeur est une liste des champs souhaités dans la réponse, par exemple fields=code_station,localisation

### Connaissez-vous Hub'Eau ?

#### Simplifier l'accès aux données sur l'eau
Service pérenne de la toile [Eau France](https://www.eaufrance.fr), [Hub'Eau](https://hubeau.eaufrance.fr/) met à disposition des API Rest favorisant l’accès aux données du [SIE](https://www.eaufrance.fr/donnees) dans des formats simples d’emploi et propices à la réutilisation (CSV, JSON, GeoJSON).
Fondé sur une infrastructure et des méthodes adaptées au traitement et au stockage de données massives, les APIs Hub'Eau garantissent les meilleures performances de disponibilité.
Hub’Eau est le résultat de la collaboration de l’AFB et du BRGM dans le cadre du pôle de recherche et d'innovation en interopérabilité des systèmes d'information distribués sur l'eau : [INSIDE](http://www.pole-inside.fr/fr).  

Les autres API disponibles à ce jour dans Hub'Eau sont :

* [Etat piscicole](/api/api_hubeau_poissons.html) ;
* [Indicateurs Eau potable et Assainissement](/api/api_hubeau_indic_EP_Asst.html) ;
* [Qualité physico-chimique des cours d'eau](/api/api_hubeau_qualite_rivieres.html) ;
* [Qualité des nappes d'eau souterraine](/api/api_hubeau_qualite_nappes_eau_sout.html).

#### Un service en co-construction
Pour des APIs toujours plus en phase avec les besoins utilisateurs, Hub'Eau inaugure en 2018 une [politique de bêta testing](https://hubeau.eaufrance.fr/page/apis-version-beta) en organisant une campagne de tests ouverte avant la mise la mise en production de chaque nouvelle API.
D'une durée de 30 à 45 jours, ces campagnes ont pour objectif de recueillir un maximum de retour d’expérience des utilisateurs sur les points forts et les points faibles des API en construction.
Pour être informé de la sortie des nouvelles API et les tester en avant-première, inscrivez-vous à la [newsletter](https://hubeau.eaufrance.fr/page/news-letter-hubeau) !


### Exemples de réutilisation

* [Soumettez le votre sur la page GitHub des utilisateurs de Hub'Eau](https://github.com/BRGM/hubeau)

### Glossaire

#### ADES
[ADES](http://www.ades.eaufrance.fr) est la banque nationale d’Accès aux Données sur les Eaux Souterraines qui rassemble sur son site internet public des données quantitatives et qualitatives relatives aux eaux souterraines, dont les objectifs sont de constituer un outil de collecte et de conservation des données sur les eaux souterraines, d’être mobilisable par un large ensemble de partenaires, de permettre les traitements nécessaires à l’action de chacun des partenaires, d’être le guichet d’accès aux informations sur les eaux souterraines, d’avoir un suivi de l’état patrimonial des ressources pour répondre à la politique des eaux souterraines, et enfin d’adopter au niveau national un principe de transparence et d’accessibilité aux données sur les eaux souterraines.

#### AFB
L'[AFB (Agence Française de la Biodiversité)](http://www.afbiodiversite.fr/) a été créée le 1er janvier 2017. Elle regroupe l'Agence des aires marines protégées, l'Atelier technique des espaces naturels, l'Office national de l'eau et des milieux aquatiques et les Parcs nationaux de France. L'AFB , établissement public du ministère en charge de l'environnement, exerce des missions d’appui à la mise en œuvre des politiques publiques dans les domaines de la connaissance, la préservation, la gestion et la restauration de la biodiversité et des milieux terrestres, aquatiques et marins. Elle vient en appui aux acteurs publics mais travaille également en partenariat étroit avec les acteurs socio-économiques. Elle a aussi vocation à aller à la rencontre du public pour mobiliser les citoyens en faveur de la biodiversité. En matière d’espaces protégés, elle gère notamment les parcs naturels marins et le sanctuaire de mammifères marins Agoa aux Antilles. Elle est opératrice et animatrice de sites Natura 2000 en mer. Les parcs nationaux sont rattachés à l’Agence, des synergies fortes sont mises en place avec eux.

#### Aquifère
Un aquifère est une formation géologique ou une roche, suffisamment poreuse et/ou fissurée (pour stocker de grandes quantités d'eau) tout en étant suffisamment perméable pour que l'eau puisse y circuler librement. Pour se représenter un aquifère, il faut imaginer un vaste réservoir naturel de stockage d'eau souterraine.

#### BRGM
Le [BRGM (Bureau de Recherches Géologiques et Minières)](http://www.brgm.fr/), service géologique national français, est l'établissement public de référence dans les applications des sciences de la Terre pour gérer les ressources et les risques du sol et du sous-sol. Le BRGM assure notamment la diffusion de données géologiques et environnementales via les technologies de l’information et de la communication, avec pour objectif la mise à disposition des pouvoirs publics, des acteurs économiques et du grand public d'informations géoréférencées pour appuyer leurs décisions. Parmi les domaines de compétence du BRGM figurent les infrastructures informatiques de diffusion, calcul, simulation-visualisation 3D et réalité virtuelle ainsi que l'interopérabilité.

#### Eaux souterraines
Les eaux souterraines désignent toutes les eaux se trouvant sous la surface du sol en contact direct avec le sol ou le sous-sol et qui transitent plus ou moins rapidement dans les fissures et les pores du sol.

#### Nappe d'eau souterraine
Une nappe d'eau souterraine est une eau contenue dans les interstices ou les fissures d'une roche du sous-sol qu'on nomme aquifère.

#### Niveau piézométrique
Le niveau piézométrique caractérise la pression de la nappe en un point donné. Il est exprimé soit par rapport au sol en mètre, soit par rapport à l’altitude zéro du niveau de la mer en mètre NGF (Nivellement Général Français). Autrement dit, c'est le niveau libre de l'eau observé dans un piézomètre.

#### Piézomètre
Les piézomètres constituent les stations de mesure du niveau piézométrique (niveau d'eau dans la nappe). Un piézomètre est un forage non exploité qui permet la mesure du niveau de l'eau souterraine en un point donné de la nappe. Ce niveau qui varie avec l'exploitation renseigne sur la capacité de production de l'aquifère.

#### SANDRE
Le [SANDRE (Service d'Administration Nationale des Données et Référentiels sur l'Eau)](http://www.sandre.eaufrance.fr/) a pour mission d'établir et de mettre à disposition le référentiel des données sur l'eau du SIE (Système d'Information sur l'Eau). Ce référentiel, composé de spécifications techniques et de listes de codes libres d'utilisation, décrit les modalités d'échange des données sur l'eau à l'échelle de la France. D'un point de vue informatique, le Sandre garantit l'interopérabilité des systèmes d'information relatifs à l'eau.

---
title: Hub'Eau - Hydrométrie
tagline: Hydrométrie temps réel
contract: OUVERT
external_site: https://hubeau.eaufrance.fr/page/api-hydrometrie
logo: 07-hydrometrie.png
clients:
  - particuliers
  - entreprises
  - bureaux d'études
  - collectivités
  - ministères
partners:
  - SCHAPI
  - BRGM
owner: SCHAPI / BRGM
keywords:
  - Hydrométrie
  - Référentiel hydrométrique
  - Sites hydrométriques
  - Stations hydrométriques
  - Observations temps réel
  - Hauteur d'eau
  - Débit
  - Cours d'eau
  - Fleuve
  - Rivière
stat:
  lastXdays: 30
  url: https://hubeau.eaufrance.fr/sites/default/files/api/stats.json
  label: recherches effectuées
  path:
    - Hydro_last30DaysQueries
score:
  detail:
    access:
      is_open: true
    contact:
      link: newshubeau@brgm.fr
    doc_tech:
      link: https://hubeau.eaufrance.fr/api/v1/hydrometrie/api-docs
---

### Description fonctionnelle de l'API Hydrométrie

Les données publiques de [l'API "Hydrométrie"](https://hubeau.eaufrance.fr/page/api-hydrometrie) de Hub'Eau sont issues de la Plate-forme HYDRO Centrale (PHyC), opérée par le Service Central d’Hydrométéorologie et d’Appui à la Prévision des Inondations (SCHAPI).
Cette Plate-forme stocke les mesures quasi temps-réel provenant d’environ 3000 stations hydrométriques qui constituent le réseau de mesure français, opéré par les Directions Régionales de l’Environnement de l’Aménagement et du Logement (DREAL) ou autres producteurs (collectivités, etc.)
L'API permet d'interroger le __référentiel hydrométrique__ ainsi que les __observations en quasi temps réel__, mises à jour par leur producteur toutes les 5 à 60 minutes dans la plateforme source (PHyC du SCHAPI). Hub'Eau interroge la source des données toutes les 2 minutes et maintient une profondeur d'historique égale à 1 mois.  

Trois opérations (endpoints) sont disponibles :
* __sites__ : interroge les sites du référentiel hydrométrique ;
* __stations__ : interroge les stations du référentiel hydrométrique constituant les sites ;
* __obervations_tr__ : liste les observations dites "temps réel" portées par le référentiel (sites et stations hydrométriques), à savoir les séries de données de hauteur d'eau (H) et de débit (Q).

Les données sont exposées sous la forme d'une API REST, les formats supportés sont : JSON, GeoJSON, CSV et XML SANDRE.

Dernières évolutions de l'API Hydrométrie :
* 03/12/2018 : suppression de la version beta, passage en production de la v1
* 29/11/2018 : endpoints observations : ajout du paramètre timestep permettant la récupération de données à un pas de temps déterminé
* 12/11/2018 : endpoints xml : les valeurs du paramètre fields sont maintenant les noms des champs xml
* 25/10/2018 : endpoints observations_tr : changement de l'ordre de tri par défaut, le tri par défaut est maintenant date d'observation décroissante (desc) permettant d'obtenir d'abord les observations les plus récentes
* 08/10/2018 : endpoints observations_tr : correction bug curseur (paramètre cursor), le tri ne concerne maintenant plus que la date d'observation (date_obs), tri ascendant par défaut (les données les plus anciennes d'abord)
* 20/09/2018 : version bêta publique
* 10/07/2018 : prototype à des fins de tests internes au SCHAPI

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
* [Prélèvements en eau (beta)](/api/api_hubeau_prelevements.html).

#### Un service en co-construction
Pour des APIs toujours plus en phase avec les besoins utilisateurs, Hub'Eau inaugure en 2018 une [politique de bêta testing](https://hubeau.eaufrance.fr/page/apis-version-beta) en organisant une campagne de tests ouverte avant la mise la mise en production de chaque nouvelle API.
D'une durée de 30 à 45 jours, ces campagnes ont pour objectif de recueillir un maximum de retour d’expérience des utilisateurs sur les points forts et les points faibles des API en construction.
Pour être informé de la sortie des nouvelles API et les tester en avant-première, inscrivez-vous à la [newsletter](https://hubeau.eaufrance.fr/page/news-letter-hubeau) !
Faites-nous part de vos observations sur la [page de contribution GitHub](https://github.com/BRGM/hubeau/issues).

### Exemples de réutilisation

* [Soumettez le votre sur la page GitHub des utilisateurs de Hub'Eau](https://github.com/BRGM/hubeau)

### Glossaire

#### BRGM
Le [BRGM (Bureau de Recherches Géologiques et Minières)](http://www.brgm.fr/), service géologique national français, est l'établissement public de référence dans les applications des sciences de la Terre pour gérer les ressources et les risques du sol et du sous-sol. Le BRGM assure notamment la diffusion de données géologiques et environnementales via les technologies de l’information et de la communication, avec pour objectif la mise à disposition des pouvoirs publics, des acteurs économiques et du grand public d'informations géoréférencées pour appuyer leurs décisions. Parmi les domaines de compétence du BRGM figurent les infrastructures informatiques de diffusion, calcul, simulation-visualisation 3D et réalité virtuelle ainsi que l'interopérabilité.

#### grandeur hydrométrique
Type de donnée restituée par une station hydrométrique (hauteur d'eau, débit ou vitesse). Deux grandeurs hydrométriques sont disponibles via l'opération "observations_tr" de Hub'Eau : la hauteur d'eau et le débit.

#### référentiel hydrométrique
Le référentiel hydrométrique est constitué de sites, de stations et de capteurs.

#### SCHAPI
Basé sur la Météopole de Toulouse, le [SCHAPI (Service Central d'Hydrométéorologie et d'Appui à la Prévision des Inondations)](http://www.side.developpement-durable.gouv.fr/EXPLOITATION/DEFAULT/doc/IFD/I_IFD_REFDOC_0076356/SCHAPI-Service-Central-d-Hydrom%C3%A9t%C3%A9orologie-et-d-Appui-la-Pr%C3%A9vision-des-Inondations) produit et diffuse une information continue de vigilance sur les crues publiée sur le site [Vigicrues](http://www.vigicrues.gouv.fr). Il anime et pilote le réseau de la prévision des crues et de l’hydrométrie de l’État (Services de Prévision des Crues et Unités d’Hydrométrie rattachés aux services régionaux DREAL ou à la direction inter-régionale Sud-Est de Météo-France).

#### site hydrométrique
Un site hydrométrique est un tronçon de cours d'eau sur lequel les mesures de débit sont réputées homogènes et comparables entre elles. Un site peut posséder une ou plusieurs stations et il ne peut porter que des données de débit.

#### station hydrométrique
Un appareillage installé sur un site hydrométrique afin d'observer et de mesurer une grandeur spécifique lié à l'hydrologie (hauteur ou débit) constitue une station hydrométrique. Une station peut porter une hauteur et/ou un débit (directement mesurés ou calculés à partir d'une courbe de tarage). Chaque station possède un ou plusieurs capteurs (appareil mesurant une grandeur : hauteur ou débit).
Les méthodes de l'API hydrometrie de Hub'Eau permettent d'interroger les sites et les stations hydrométriques mais ne descendent pas au niveau des capteurs.

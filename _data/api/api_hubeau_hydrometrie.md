---
title: Hub'Eau - Hydrométrie
tagline: Hydrométrie temps réel
is_open: 1 # 1 means API is fully open
external_site: https://hubeau.eaufrance.fr/page/api-hydrometrie
partners:
  - eaufrance
  - ofb
  - schapi
  - brgm
producer: hub-eau
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
themes:
  - Environnement
stat:
  lastXdays: 30
  url: https://hubeau.eaufrance.fr/sites/default/files/api/stats.json
  label: recherches effectuées
  path:
    - Hydro_last30DaysQueries
contact_link: newshubeau@brgm.fr
doc_tech_link: https://hubeau.eaufrance.fr/api/v1/hydrometrie/api-docs
visits_2019: 801
last_update: 31/07/2019
content_intro: |
  Les données publiques de [l'API "Hydrométrie"](https://hubeau.eaufrance.fr/page/api-hydrometrie) de Hub'Eau sont issues de la Plate-forme HYDRO Centrale (PHyC), opérée par le Service Central d’Hydrométéorologie et d’Appui à la Prévision des Inondations (SCHAPI).
  
  Cette Plate-forme stocke les mesures quasi temps-réel provenant d’environ 3000 stations hydrométriques qui constituent le réseau de mesure français, opéré par les Directions Régionales de l’Environnement de l’Aménagement et du Logement (DREAL) ou autres producteurs (collectivités, etc.)
---

### Description fonctionnelle de l'API Hydrométrie

L'API permet d'interroger le **référentiel hydrométrique** ainsi que les **observations en quasi temps réel**, mises à jour par leur producteur toutes les 5 à 60 minutes dans la plateforme source (PHyC du SCHAPI). Hub'Eau interroge la source des données toutes les 2 minutes et maintient une profondeur d'historique égale à 1 mois **mais pour le moment, aucun traitement des données n'est appliqué au-delà des 24 dernières heures. Les données accessibles sont celles mesurées sur le terrain sans expertise et sans les améliorations apportées par les hydromètres.** Par exemple, un changement de courbe de tarage n'est actuellement pas pris en compte sur les données antérieures à ce changement. Une évolution est en préparation afin prendre en compte cette expertise au-delà des 24 dernières heures.

Les observations sont exprimées en **mm** pour les hauteurs d'eau et en **l/s** pour les débits.

Trois opérations (endpoints) sont disponibles :

- **sites** : interroge les sites du référentiel hydrométrique ;
- **stations** : interroge les stations du référentiel hydrométrique constituant les sites ;
- **obervations_tr** : liste les observations dites "temps réel" portées par le référentiel (sites et stations hydrométriques), à savoir les séries de données de hauteur d'eau (H) et de débit (Q).

Les données sont exposées sous la forme d'une API REST, les formats supportés sont : JSON, GeoJSON, CSV et XML SANDRE.

Dernières évolutions de l'API Hydrométrie :

- 05/03/2020 : passage sur serveur dédié pour tenir la charge (10 appels/s en moyenne)
- 03/01/2019 : v1.0.1 : correction [bug sur l'API observations](https://github.com/BRGM/hubeau/issues/15)
- 03/12/2018 : suppression de la version beta, passage en production de la v1
- 29/11/2018 : endpoints observations : ajout du paramètre timestep permettant la récupération de données à un pas de temps déterminé
- 12/11/2018 : endpoints xml : les valeurs du paramètre fields sont maintenant les noms des champs xml
- 25/10/2018 : endpoints observations_tr : changement de l'ordre de tri par défaut, le tri par défaut est maintenant date d'observation décroissante (desc) permettant d'obtenir d'abord les observations les plus récentes

### Connaissez-vous Hub'Eau ?

#### Simplifier l'accès aux données sur l'eau

Service pérenne de la toile [Eau France](https://www.eaufrance.fr), [Hub'Eau](https://hubeau.eaufrance.fr/) met à disposition des API Rest favorisant l’accès aux données du [SIE](https://www.eaufrance.fr/donnees) dans des formats simples d’emploi et propices à la réutilisation (CSV, JSON, GeoJSON).
Fondé sur une infrastructure et des méthodes adaptées au traitement et au stockage de données massives, les API Hub'Eau garantissent les meilleures performances de disponibilité (20 téra-octets de données fournies en 455 millions d'appels pour l'année 2020).
Hub’Eau est le résultat de la collaboration de l’OFB et du BRGM dans le cadre du pôle de recherche et d'innovation en interopérabilité des systèmes d'information distribués sur l'eau : [INSIDE](http://www.pole-inside.fr/fr).

Les autres API disponibles à ce jour dans Hub'Eau sont :

- [Etat piscicole](/les-api/api_hubeau_poissons) ;
- [Indicateurs Eau potable et Assainissement](/les-api/api_hubeau_indic_EP_Asst) ;
- [Piézométrie](/les-api/api_hubeau_piezometrie) ;
- [Qualité physico-chimique des cours d'eau](/les-api/api_hubeau_qualite_rivieres) ;
- [Qualité des nappes d'eau souterraine](/les-api/api_hubeau_qualite_nappes_eau_sout) ;
- [Température des cours d'eau](/les-api/api_hubeau_temperature_rivieres) ;
- [Prélèvements en eau (beta)](/les-api/api_hubeau_prelevements).

#### Un service en co-construction

Pour des API toujours plus en phase avec les besoins utilisateurs, Hub'Eau a inauguré en 2018 une [politique de bêta testing](https://hubeau.eaufrance.fr/page/apis) en organisant une campagne de tests ouverte avant la mise la mise en production de chaque nouvelle API.
D'une durée de 30 à 45 jours, ces campagnes ont pour objectif de recueillir un maximum de retour d’expérience des utilisateurs sur les points forts et les points faibles des API en construction.
Pour être informé de la sortie des nouvelles API et les tester en avant-première, inscrivez-vous à la [newsletter](https://hubeau.eaufrance.fr/page/news-letter-hubeau) !
Faites-nous part de vos observations sur la [page de contribution GitHub](https://github.com/BRGM/hubeau/issues).

### Exemples de réutilisation

- [Soumettez le votre sur la page GitHub des utilisateurs de Hub'Eau](https://github.com/BRGM/hubeau)

### Glossaire

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

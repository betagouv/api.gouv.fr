---
title: Hub'Eau - Piézométrie
tagline: Piézométrie (niveau des nappes d'eau souterraine)
is_open: 1 # 1 means API is fully open
external_site: https://hubeau.eaufrance.fr/page/api-piezometrie
partners:
  - eaufrance
  - ofb
  - brgm
producer: hub-eau
keywords:
  - Piézométrie
  - Aquifère
  - Nappe
  - Niveau d'eau
  - Eau souterraine
  - Hydrogéologie
  - Temps réel
themes:
  - Environnement
stat:
  lastXdays: 30
  url: https://hubeau.eaufrance.fr/sites/default/files/api/stats.json
  label: recherches effectuées
  path:
    - Piezo_last30DaysQueries
contact_link: newshubeau@brgm.fr
doc_tech_link: https://hubeau.eaufrance.fr/api/v1/niveaux_nappes/api-docs
visits_2019: 328
last_update: 10/03/2020
content_intro: |
  [L'API Piézométrie](https://hubeau.eaufrance.fr/page/api-piezometrie) de Hub'Eau permet d'accéder aux données sur le niveau des nappes d'eau souterraines. Ces données sont issues du portail [ADES](http://www.ades.eaufrance.fr). Elles portent sur les mesures de piézométrie (niveau d'eau dans les nappes d'eau souterraine), France entière, en provenance de tous les partenaires du système d'information sur l'eau.
---

### Description fonctionnelle de l'API Piézométrie

Les mises à jour de la banque ADES sont intégrées quotidiennement à l'API.

Testez le [démonstrateur de l'API Piézométrie](https://hubeau.eaufrance.fr/sites/default/files/api/demo/piezo/piezo.htm) et récupérez le [code Javascript](https://github.com/BRGM/hubeau/tree/master/demonstrateurs/piezo) qui l'a généré pour construire vous même vos applications basées sur Hub'Eau.

 Les données sont exposées sous la forme d'une API REST, les formats supportés sont : JSON, GeoJSON et CSV.

Les différentes opérations possibles sont :

- **stations** : permet de rechercher les stations de mesure des niveaux des nappes d'eau (stations piézométriques ou piézomètres).
- **chroniques** : permet d'accéder aux chroniques piézométriques (évolution dans le temps du niveau des nappes) par station de mesure ;
- **chroniques_tr** : permet d'accéder en temps quasi-réel aux données piézométriques brutes de fréquence horaire télé-transmises par environ 1700 piézomètres.

Dernières évolutions de l'API Piézométrie de Hub'Eau:
- 17/03/2020 : v1.4.0 L'opération chroniques est à son tour enrichie avec de nouvelles informations : continuité des mesures, producteur, nature des mesures et profondeur de l'eau par rapport au repère
- 14/02/2020 : v1.3.0 : l'opération stations s'enrichit avec des informations supplémentaires dont l'altitude, la profondeur d'investigation, le département, les masses d'eau captées, le nombre de mesures disponibles... et offre la possibilité de requêter sur de nouveaux paramètre dont la date d'activité et le nombre minimal de mesures disponibles
- 22/01/2020 : v1.2.0 : Mise à disposition de l'opération chroniques_tr permettant d'interroger en quasi-temps réel les piézomètres qui télé-transmettent leurs données

### Connaissez-vous Hub'Eau ?

#### Simplifier l'accès aux données sur l'eau

Service pérenne de la toile [Eau France](https://www.eaufrance.fr), [Hub'Eau](https://hubeau.eaufrance.fr/) met à disposition des API Rest favorisant l’accès aux données du [SIE](https://www.eaufrance.fr/donnees) dans des formats simples d’emploi et propices à la réutilisation (CSV, JSON, GeoJSON).
Fondé sur une infrastructure et des méthodes adaptées au traitement et au stockage de données massives, les API Hub'Eau garantissent les meilleures performances de disponibilité (9 téra-octets de données fournies en 76 millions d'appels pour le 2e semestre 2019).
Hub’Eau est le résultat de la collaboration de l’OFB et du BRGM dans le cadre du pôle de recherche et d'innovation en interopérabilité des systèmes d'information distribués sur l'eau : [INSIDE](http://www.pole-inside.fr/fr).

Pour découvrir toutes les API disponibles dans Hub'Eau, visitez [la page Hub'Eau sur api.gouv](https://api.gouv.fr/producteurs/hub-eau) ou directement [le portail Hub'Eau](https://hubeau.eaufrance.fr/page/apis).  

#### Un service en co-construction

Pour des API toujours plus en phase avec les besoins utilisateurs, Hub'Eau a inauguré en 2018 une [politique de bêta testing](https://hubeau.eaufrance.fr/page/apis) en organisant une campagne de tests ouverte avant la mise la mise en production de chaque nouvelle API.
D'une durée de quelques mois, ces campagnes ont pour objectif de recueillir un maximum de retour d’expérience des utilisateurs sur les points forts et les points faibles des API en construction. Les retours se font sur [le forum de contribution GitHub](http://github.com/BRGM/hubeau/issues).
Pour être informé de la sortie des nouvelles API et les tester en avant-première, inscrivez-vous à la [newsletter](https://hubeau.eaufrance.fr/newsletter) !

### Exemples de réutilisation

- [Visualiseur des données piézométriques Temps Réel](https://hubeau.eaufrance.fr/sites/default/files/api/demo/piezo_tr.htm)
- [Visualiseur des chroniques piézométriques historiques](https://hubeau.eaufrance.fr/sites/default/files/api/demo/piezo_chroniques.htm)
- [Evolution des niveaux des nappes d'eau souterraine](https://hubeau.eaufrance.fr/sites/default/files/api/demo/piezo/piezo.htm)
- [BioMétéo 24](https://biometeo.dordogne.fr/) Une « météo de la biodiversité » pour sensibiliser et accompagner le grand public vers une prise en compte de l’écologie au quotidien
- [Soumettez le votre sur la page GitHub des utilisateurs de Hub'Eau](https://github.com/BRGM/hubeau)

### Glossaire

#### ADES

[ADES](http://www.ades.eaufrance.fr) est la banque nationale d’Accès aux Données sur les Eaux Souterraines qui rassemble sur son site internet public des données quantitatives et qualitatives relatives aux eaux souterraines, dont les objectifs sont de constituer un outil de collecte et de conservation des données sur les eaux souterraines, d’être mobilisable par un large ensemble de partenaires, de permettre les traitements nécessaires à l’action de chacun des partenaires, d’être le guichet d’accès aux informations sur les eaux souterraines, d’avoir un suivi de l’état patrimonial des ressources pour répondre à la politique des eaux souterraines, et enfin d’adopter au niveau national un principe de transparence et d’accessibilité aux données sur les eaux souterraines.

#### Aquifère

Un aquifère est une formation géologique ou une roche, suffisamment poreuse et/ou fissurée (pour stocker de grandes quantités d'eau) tout en étant suffisamment perméable pour que l'eau puisse y circuler librement. Pour se représenter un aquifère, il faut imaginer un vaste réservoir naturel de stockage d'eau souterraine.

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

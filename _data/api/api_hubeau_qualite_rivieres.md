---
title: Hub'Eau - Qualité des cours d'eau
tagline: Qualité physico-chimique des cours d'eau
is_open: 1 # 1 means API is fully open
external_site: https://hubeau.eaufrance.fr/page/api-qualite-cours-deau
partners:
  - eaufrance
  - ofb
  - brgm
producer: hub-eau
keywords:
  - Qualité physico-chimique
  - Cours d'eau
  - Fleuve
  - Plan d'eau
  - Rivière
contact_link: newshubeau@brgm.fr
doc_tech_link: https://hubeau.eaufrance.fr/api/v2/qualite_rivieres/api-docs
themes:
  - Environnement
visits_2019: 509
last_update: 18/06/2018
content_intro: |
  [L'API Qualité des cours d'eau](http://hubeau.eaufrance.fr/page/api-qualite-cours-deau) de Hub'Eau permet d'accéder aux données sur la qualité physico-chimique des fleuves, rivières et plans d'eau.
---

### Description fonctionnelle de l'API Qualité des cours d'eau

Les données de l'API "Qualité des cours d'eau" sont issues de la base [Naïades](http://naiades.eaufrance.fr/). Disponibles sur la France entière (y compris les DROM), elles portent sur les résultats des mesures de la qualité physico-chimique des cours d’eau et des plans d’eau transmises par les Agences de l'Eau.  
Plus de 200 millions d'analyses réparties sur plus de 20 000 stations sont disponibles.

Une version 2 de l'API est désormais disponible. Cette nouvelle version ajoute de nombreuses informations dans les réponses des différents endpoints, ajoute également des paramètres requêtables (fraction, statut, qualification, réseau, masse d'eau, ...) et corrige des problèmes d'interrogation des conditions environnementales.
De plus, dans la version v2 de l'API, les données sont dorénavant synchronisées en continu avec la base Naïades.

La v1 de l'API reste disponible jusqu'au 31 décembre 2022, avec des données figées.

Les données sont exposées sous la forme d'une API REST, les formats supportés sont : JSON, GeoJSON et CSV.

Un ensemble de 4 méthodes permet de rechercher l'ensemble des informations liées à la qualité physico-chimiques des eaux superficielles continentales (cours d'eau et plans d'eau) :

- **station_pc** : permet de rechercher les stations (lieux de mesure) sur les cours d'eau ou plans d'eau où des prélèvements d'eau ont eu lieu en vue de faire des analyses de la qualité de l'eau ;
- **operation_pc** : permet de connaître les opérations de prélèvement ayant eu lieu sur les stations ;
- **condition_environnementale_pc** : permet de rechercher les conditions environnementales (température de l'air, présence de feuilles, mousses, irisations, etc) lors des opérations de prélèvements physico-chimiques ;
- **analyse_pc** : permet de rechercher les analyses physico-chimiques effectuées sur les échantillons confectionnés lors des opérations de prélèvement sur les différentes stations. Ces analyses concernent différents paramètres physico-chimiques comme la conductivité, les nitrates, les substances pesticides, les métaux lourds...

Dernières évolutions de l'API Qualité des cours d'eau de Hub'Eau:
 - 19/07/2022 : v2.0.0 - synchronisation continue des données avec la base Naiades, correction des problèmes d'interrogation des conditions environnementales, ajout de paramètres requêtables (fraction, statut, qualification, réseau, masse d'eau, ...), ajout de nombreuses informations supplémentaires dans les réponses des différents endpoints
- 22/05/2018 : v1.1.0 - ajout d'une limitation sur la profondeur d'accès aux résultats pour ne pas faire tomber le serveur, ajout du header "link" pour le format CSV, correction code retour pour le format CSV gérant les codes 200 et 206
- 26/02/2018 : passage à la v1 - changement de la structure de l'API avec mise à disposition des données sur la France entière (la v0 ne proposait que les bassins Adour-Garonne et Loire-Bretagne) et ajout d'informations comme les conditions environnementales des prélèvements

### Connaissez-vous Hub'Eau ?

#### Simplifier l'accès aux données sur l'eau

Service pérenne de la toile [Eau France](https://www.eaufrance.fr), [Hub'Eau](https://hubeau.eaufrance.fr/) met à disposition des API Rest favorisant l’accès aux données du [SIE](https://www.eaufrance.fr/donnees) dans des formats simples d’emploi et propices à la réutilisation (CSV, JSON, GeoJSON).
Fondé sur une infrastructure et des méthodes adaptées au traitement et au stockage de données massives, les API Hub'Eau garantissent les meilleures performances de disponibilité.
Hub’Eau est le résultat de la collaboration de l’AFB et du BRGM dans le cadre du pôle de recherche et d'innovation en interopérabilité des systèmes d'information distribués sur l'eau : [INSIDE](http://www.pole-inside.fr/fr).

Pour découvrir toutes les API disponibles dans Hub'Eau, visitez [la page Hub'Eau sur api.gouv](https://api.gouv.fr/producteurs/hub-eau) ou directement [le portail Hub'Eau](https://hubeau.eaufrance.fr/page/apis).  

#### Un service en co-construction

Pour des API toujours plus en phase avec les besoins utilisateurs, Hub'Eau a inauguré en 2018 une [politique de bêta testing](https://hubeau.eaufrance.fr/page/apis) en organisant une campagne de tests ouverte avant la mise la mise en production de chaque nouvelle API.
D'une durée de quelques mois, ces campagnes ont pour objectif de recueillir un maximum de retour d’expérience des utilisateurs sur les points forts et les points faibles des API en construction. Les retours se font sur [le forum de contribution GitHub](http://github.com/BRGM/hubeau/issues).
Pour être informé de la sortie des nouvelles API et les tester en avant-première, inscrivez-vous à la [newsletter](https://hubeau.eaufrance.fr/newsletter) !

### Exemples de réutilisation

- [Observatoire du bassin versant de la Sèvre Nantaise](https://www.sevre-nantaise.com/observatoire/qualite-eau-phosphore)
- [Géorivière, gérez et suivez vos cours d'eau](https://georiviere.fr/)
- [Les pesticides dans les cours d'eau des Pays de la Loire](https://ssm-ecologie.shinyapps.io/qualite-des-eaux/)
- [Les nitrates dans les cours d'eau et les nappes souterraines des Pays de la Loire](https://ssm-ecologie.shinyapps.io/nitrates_eau/)
- [Qualité des lacs et cours d'eau (visualiseur des APIs qualité physico-chimique des cours d'eau, hydrobiologie et température de Hub'Eau)](https://hubeau.eaufrance.fr/sites/default/files/api/demo/qualriv.htm)
- [Soumettez le votre sur la page GitHub des utilisateurs de Hub'Eau](https://github.com/BRGM/hubeau)

### Glossaire

#### Agence de l'Eau

Les Agences de l'Eau sont des établissements publics du ministère chargé du développement durable. Au nombre de six en France Métropolitaine, elles ont pour missions de contribuer à réduire les pollutions de toutes origines et à protéger les ressources en eau et les milieux aquatiques. Les agences de l’eau mettent en œuvre, dans les sept bassins hydrographiques métropolitains, les objectifs et les dispositions des schémas directeurs d’aménagement et de gestion des eaux (SDAGE, plans de gestion français de la directive cadre sur l’eau et leur déclinaison locale, les SAGE), en favorisant une gestion équilibrée et économe de la ressource en eau et des milieux aquatiques, l’alimentation en eau potable, la régulation des crues et le développement durable des activités économiques. Acteurs de la mise en œuvre de la politique publique de l’eau, organisée en France autour du principe de la gestion concertée par bassin versant, les agences de l’eau exercent leurs missions dans le cadre de programmes d’actions pluriannuels avec pour objectif final l’atteinte du bon état des eaux (selon la directive cadre sur l’eau d’octobre 2000).

#### BRGM

Le [BRGM (Bureau de Recherches Géologiques et Minières)](http://www.brgm.fr/), service géologique national français, est l'établissement public de référence dans les applications des sciences de la Terre pour gérer les ressources et les risques du sol et du sous-sol. Le BRGM assure notamment la diffusion de données géologiques et environnementales via les technologies de l’information et de la communication, avec pour objectif la mise à disposition des pouvoirs publics, des acteurs économiques et du grand public d'informations géoréférencées pour appuyer leurs décisions. Parmi les domaines de compétence du BRGM figurent les infrastructures informatiques de diffusion, calcul, simulation-visualisation 3D et réalité virtuelle ainsi que l'interopérabilité.

#### Naïades

[Naïades](http://www.naiades.eaufrance.fr/) est l'interface nationale pour l'accès aux données des rivières et des lacs. Elle permet aux utilisateurs d'accéder aux données collectées par les agences de l'eau, les offices de l'eau et l'OFB sur les paramètres physiques, les concentrations de substances chimiques, les inventaires d'espèces et l'hydromorphologie en un point unique dans des formats standardisés.

#### OFB

L'[OFB (Office Français de la Biodiversité)](https://ofb.gouv.fr/) est un établissement public dédié à la sauvegarde de la biodiversité. Une de ses priorités est de répondre de manière urgente aux enjeux de préservation du vivant. Créé au 1er janvier 2020 par la loi n°2019-773 du 24 juillet 2019, l’Office français de la biodiversité regroupe les agents de l’Agence française pour la biodiversité (AFB) et de l’Office national de la chasse et de la faune sauvage (ONCFS). Unir ces deux établissements dans la lutte pour la protection de la nature, permet de rassembler des expertises, sur les milieux aquatiques, terrestres et marins et faire front commun contre les menaces qui pèsent sur la biodiversité en France. Regrouper ces deux entités, dont les agents sont implantés sur l’ensemble de l’hexagone et les Outre-mer, c’est aussi assurer un ancrage solide dans les territoires pour agir à l’échelle locale.

#### SANDRE

Le [SANDRE (Service d'Administration Nationale des Données et Référentiels sur l'Eau)](http://www.sandre.eaufrance.fr/) a pour mission d'établir et de mettre à disposition le référentiel des données sur l'eau du SIE (Système d'Information sur l'Eau). Ce référentiel, composé de spécifications techniques et de listes de codes libres d'utilisation, décrit les modalités d'échange des données sur l'eau à l'échelle de la France. D'un point de vue informatique, le Sandre garantit l'interopérabilité des systèmes d'information relatifs à l'eau.

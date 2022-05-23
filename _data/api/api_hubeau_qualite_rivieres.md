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
doc_tech_link: https://hubeau.eaufrance.fr/api/v1/qualite_rivieres/api-docs
themes:
  - Environnement
visits_2019: 509
last_update: 18/06/2018
content_intro: |
  [L'API Qualité des cours d'eau](http://hubeau.eaufrance.fr/page/api-qualite-cours-deau) de Hub'Eau permet d'accéder aux données sur la qualité physico-chimique des fleuves, rivières et plans d'eau.
---

### Description fonctionnelle de l'API Qualité des cours d'eau

Depuis la fin février 2018, l'ensemble des données sur la France entière (y compris les DROM) est disponible, en provenance de [Naïades](http://naiades.eaufrance.fr/).
Plus de 175 millions d'analyses réparties sur 20 000 stations sont disponibles.
Les données sont exposées sous la forme d'une API REST, les formats supportés sont : JSON, GeoJSON et CSV.

Un ensemble de 4 méthodes permet de rechercher l'ensemble des informations liées à la qualité physico-chimiques des eaux superficielles continentales (cours d'eau et plans d'eau) :

- **station_pc** : permet de rechercher les stations (lieux de mesure) sur les cours d'eau ou plans d'eau où des prélèvements d'eau ont eu lieu en vue de faire des analyses de la qualité de l'eau ;
- **operation_pc** : permet de connaître les opérations de prélèvement ayant eu lieu sur les stations ;
- **condition_environnementale_pc** : permet de rechercher les conditions environnementales (température de l'air, présence de feuilles, mousses, irisations, etc) lors des opérations de prélèvements physico-chimiques ;
- **analyse_pc** : permet de rechercher les analyses physico-chimiques effectuées sur les échantillons confectionnés lors des opérations de prélèvement sur les différentes stations. Ces analyses concernent différents paramètres physico-chimiques comme la conductivité, les nitrates, les substances pesticides, les métaux lourds...

Les données sont issues de la [base de données Naïades](http://www.naiades.eaufrance.fr/). Elles sont synchronisées avec la base Naïades après de gros épisodes d'alimentation. Entre deux étapes d'alimentation, des écarts sont donc possibles entre Naïades et l’API Hub'Eau. Au cours de l'année 2021, il est prévu la mise en place d'un mécanisme de synchronisation continue des données, ce qui supprimera tout écart entre les données Naïades et Hub'Eau.

Dernières évolutions de l'API Qualité des cours d'eau de Hub'Eau:

- 08/01/2019 : fermeture de l'API en v0
- 22/05/2018 : v1.1.0 - ajout d'une limitation sur la profondeur d'accès aux résultats pour ne pas faire tomber le serveur, ajout du header "link" pour le format CSV, correction code retour pour le format CSV gérant les codes 200 et 206
- 26/02/2018 : passage à la v1 - changement de la structure de l'API avec mise à disposition des données sur la France entière (la v0 ne proposait que les bassins Adour-Garonne et Loire-Bretagne) et ajout d'informations comme les conditions environnementales des prélèvements
- 29/11/2017 : ajout de l'attribut api_version (string) dans la réponse : version de l'API
- 04/05/2017 : mise à jour de l'adresse de l'API api.hubeau.fr vers [hubeau.eaufrance.fr/](http://hubeau.eaufrance.fr/)
- 25/10/2016 : ajout des données qualité des rivières de l'agence de l'eau Loire Bretagne
- 21/09/2016 : ajout des libellés SANDRE à côté des codes SANDRE dans la réponse
- 08/08/2016 : ajout du paramètre fields, la valeur est une liste des champs souhaités dans la réponse, par exemple fields=code_station,localisation

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
- [Qualité des nappes d'eau souterraine](/les-api/api_hubeau_qualite_nappes_eau_sout) ;
- [Température des cours d'eau](/les-api/api_hubeau_temperature_rivieres) ;
- [Prélèvements en eau](/les-api/api_hubeau_prelevements) ;  
- [Hydrométrie](/les-api/api_hubeau_hydrometrie).  

#### Un service en co-construction

Pour des API toujours plus en phase avec les besoins utilisateurs, Hub'Eau a inauguré en 2018 une [politique de bêta testing](https://hubeau.eaufrance.fr/page/apis) en organisant une campagne de tests ouverte avant la mise la mise en production de chaque nouvelle API.
D'une durée de quelques mois, ces campagnes ont pour objectif de recueillir un maximum de retour d’expérience des utilisateurs sur les points forts et les points faibles des API en construction.
Pour être informé de la sortie des nouvelles API et les tester en avant-première, inscrivez-vous à la [newsletter](https://hubeau.eaufrance.fr/page/news-letter-hubeau) !

### Exemples de réutilisation

- [Soumettez le votre sur la page GitHub des utilisateurs de Hub'Eau](https://github.com/BRGM/hubeau)

### Glossaire

#### Agence de l'Eau

Les Agences de l'Eau sont des établissements publics du ministère chargé du développement durable. Au nombre de six en France Métropolitaine, elles ont pour missions de contribuer à réduire les pollutions de toutes origines et à protéger les ressources en eau et les milieux aquatiques. Les agences de l’eau mettent en œuvre, dans les sept bassins hydrographiques métropolitains, les objectifs et les dispositions des schémas directeurs d’aménagement et de gestion des eaux (SDAGE, plans de gestion français de la directive cadre sur l’eau et leur déclinaison locale, les SAGE), en favorisant une gestion équilibrée et économe de la ressource en eau et des milieux aquatiques, l’alimentation en eau potable, la régulation des crues et le développement durable des activités économiques. Acteurs de la mise en œuvre de la politique publique de l’eau, organisée en France autour du principe de la gestion concertée par bassin versant, les agences de l’eau exercent leurs missions dans le cadre de programmes d’actions pluriannuels avec pour objectif final l’atteinte du bon état des eaux (selon la directive cadre sur l’eau d’octobre 2000).

#### BRGM

Le [BRGM (Bureau de Recherches Géologiques et Minières)](http://www.brgm.fr/), service géologique national français, est l'établissement public de référence dans les applications des sciences de la Terre pour gérer les ressources et les risques du sol et du sous-sol. Le BRGM assure notamment la diffusion de données géologiques et environnementales via les technologies de l’information et de la communication, avec pour objectif la mise à disposition des pouvoirs publics, des acteurs économiques et du grand public d'informations géoréférencées pour appuyer leurs décisions. Parmi les domaines de compétence du BRGM figurent les infrastructures informatiques de diffusion, calcul, simulation-visualisation 3D et réalité virtuelle ainsi que l'interopérabilité.

#### Naïades

[Naïades](http://www.naiades.eaufrance.fr/) est l'interface nationale pour l'accès aux données des rivières et des lacs. Elle permet aux utilisateurs d'accéder aux données collectées par les agences de l'eau, les offices de l'eau et l'AFB sur les paramètres physiques, les concentrations de substances chimiques, les inventaires d'espèces et l'hydromorphologie en un point unique dans des formats standardisés.

#### OFB

L'[OFB (Office Français de la Biodiversité)](https://ofb.gouv.fr/) est un établissement public dédié à la sauvegarde de la biodiversité. Une de ses priorités est de répondre de manière urgente aux enjeux de préservation du vivant. Créé au 1er janvier 2020 par la loi n°2019-773 du 24 juillet 2019, l’Office français de la biodiversité regroupe les agents de l’Agence française pour la biodiversité (AFB) et de l’Office national de la chasse et de la faune sauvage (ONCFS). Unir ces deux établissements dans la lutte pour la protection de la nature, permet de rassembler des expertises, sur les milieux aquatiques, terrestres et marins et faire front commun contre les menaces qui pèsent sur la biodiversité en France. Regrouper ces deux entités, dont les agents sont implantés sur l’ensemble de l’hexagone et les Outre-mer, c’est aussi assurer un ancrage solide dans les territoires pour agir à l’échelle locale.

#### SANDRE

Le [SANDRE (Service d'Administration Nationale des Données et Référentiels sur l'Eau)](http://www.sandre.eaufrance.fr/) a pour mission d'établir et de mettre à disposition le référentiel des données sur l'eau du SIE (Système d'Information sur l'Eau). Ce référentiel, composé de spécifications techniques et de listes de codes libres d'utilisation, décrit les modalités d'échange des données sur l'eau à l'échelle de la France. D'un point de vue informatique, le Sandre garantit l'interopérabilité des systèmes d'information relatifs à l'eau.

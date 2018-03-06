---
title: Hub'Eau - Qualité des cours d'eau
tagline: Qualité physico-chimique des cours d'eau
contract: OUVERT
openapi_definition: https://hubeau.eaufrance.fr/api/v1/qualite_rivieres/api-docs
doc_tech: http://hubeau.eaufrance.fr/page/documentation_chimie_riviere
logo: 04-qualite_rivieres.png
contact: t.vilmus@brgm.fr
clients:
  - particuliers
  - entreprises
  - bureaux d'études
  - collectivités
  - ministères
partners:
  - BRGM
owner: AFB
keywords:
  - Qualité physico-chimique
  - Cours d'eau
  - Fleuve
  - Plan d'eau
  - Rivière
---

### Description fonctionnelle de l'API Qualité des cours d'eau

[L'API Chimie des cours d'eau](http://hubeau.eaufrance.fr/page/api-qualite-cours-deau) de Hub'Eau permet d'accéder aux données sur la qualité physico-chimique des fleuves, rivières et plans d'eau. 
Depuis la fin février 2018, l'ensemble des données sur la France entière (y compris les DROM) est disponible, en provenance de [Naïades](http://naiades.eaufrance.fr/).
Plus de 125 millions d'analyses réparties sur 18 000 stations sont disponibles. 
Les données sont exposées sous la forme d'une API REST, les formats supportés sont : JSON, GeoJSON et CSV.

Un ensemble de 4 API permet de rechercher l'ensemble des informations liées à la qualité physico-chimiques des eaux superficielles continentales (cours d'eau et plans d'eau) :

* station_pc : permet de rechercher les stations (lieux de mesure) sur les cours d'eau ou plans d'eau où des prélèvements d'eau ont eu lieu en vue de faire des analyses de la qualité de l'eau ;
* operation_pc : permet de connaître les opérations de prélèvement ayant eu lieu sur les stations ;
* condition_environnementale_pc : permet de rechercher les conditions environnementales (température de l'air, présence de feuilles, mousses, irisations, etc) lors des opérations de prélèvements physico-chimiques ;
* analyse_pc : permet de rechercher les analyses physico-chimiques effectuées sur les échantillons confectionnés lors des opérations de prélèvement sur les différentes stations. Ces analyses concernent différents paramètres physico-chimiques comme la conductivité, les nitrates, les substances pesticides, les métaux lourds...

Dernières évolutions de l'API Qualité des cours d'eau de Hub'Eau:

* 26/02/2018 : passage à la v1 : changement de la structure de l'API avec mise à disposition des données sur la France entière (la v0 ne proposait que les bassins Adour-Garonne et Loire-Bretagne) et ajout d'informations comme les conditions environnementales des prélèvements
* 29/11/2017 : ajout de l'attribut api_version (string) dans la réponse : version de l'API
* 04/05/2017 : mise à jour de l'adresse de l'API api.hubeau.fr vers [hubeau.eaufrance.fr/](http://hubeau.eaufrance.fr/)
* 25/10/2016 : ajout des données qualité des rivières de l'agence de l'eau Loire Bretagne
* 21/09/2016 : ajout des libellés SANDRE à côté des codes SANDRE dans la réponse
* 08/08/2016 : ajout du paramètre fields, la valeur est une liste des champs souhaités dans la réponse, par exemple fields=code_station,localisation

### Connaissez-vous Hub'Eau ?

[Hub’Eau](http://hubeau.eaufrance.fr) c’est la plateforme qu’il vous faut pour manipuler facilement les données ouvertes disponibles sur l’eau.
Hub’Eau est la solution pour accéder aux  données sur l’eau sans être confronté aux problèmes d’hétérogénéité, de sources multiples, …. 
Hub’Eau offre plusieurs interfaces (API) facilitant la réutilisation de données grâce au potentiel de jeux de données immédiatement intelligibles et exploitables.
Hub’Eau c’est un service pérenne de la toile Eau France. 
Osez l’expérience Hub’Eau : proposez-nous de nouveaux terrains de jeux, et mettons en commun notre intelligence pour créer la valeur de demain.
Hub’Eau c’est le résultat de la collaboration de l’AFB et du BRGM dans le cadre du pôle de recherche et d'innovation en interopérabilité des systèmes d'information distribués sur l'eau : [INSIDE](http://www.pole-inside.fr/fr).  

Les autres API disponibles à ce jour dans Hub'Eau sont :

* [Etat piscicole](/api/api_hubeau_poissons.html) ;
* [Indicateurs Eau potable et Assainissement](/api/api_hubeau_indic_EP_Asst.html) ;
* [Piézométrie](/api/api_hubeau_piezometrie.html) ;
* [Qualité des nappes d'eau souterraine](/api/api_hubeau_qualite_nappes_eau_sout.html).


### Exemples de réutilisation

* [Soumettez le votre sur la page des réutilisateurs](http://hubeau.eaufrance.fr/page/proposez-exemples-dusage)

### Glossaire

#### AFB
L'[AFB (Agence Française de la Biodiversité)](http://www.afbiodiversite.fr/) a pris le relais du CSP (Conseil Supérieur de la Pêche) puis de l'ONEMA (Office National de l'Eau et des Milieux Aquatiques) pour (entres autres) l'acquisition et la diffusion de données piscicoles. Les missions de l'AFB vont bien au-delà de cet aspect : plus généralement, l'AFB, établissement public du ministère de la Transition écologie et solidaire, exerce des missions d’appui à la mise en oeuvre des politiques publiques dans les domaines de la connaissance, la préservation, la gestion et la restauration de la biodiversité des milieux terrestres, aquatiques et marins. Elle vient en appui aux acteurs publics mais travaille également en partenariat étroit avec les acteurs socio-économiques. Elle a aussi vocation à aller à la rencontre du public pour mobiliser les citoyens en faveur de la biodiversité.

#### Agence de l'Eau
Les Agences de l'Eau sont des établissements publics du ministère chargé du développement durable. Au nombre de six en France Métropolitaine, elles ont pour missions de contribuer à réduire les pollutions de toutes origines et à protéger les ressources en eau et les milieux aquatiques. Les agences de l’eau mettent en œuvre, dans les sept bassins hydrographiques métropolitains, les objectifs et les dispositions des schémas directeurs d’aménagement et de gestion des eaux (SDAGE, plans de gestion français de la directive cadre sur l’eau et leur déclinaison locale, les SAGE), en favorisant une gestion équilibrée et économe de la ressource en eau et des milieux aquatiques, l’alimentation en eau potable, la régulation des crues et le développement durable des activités économiques. Acteurs de la mise en œuvre de la politique publique de l’eau, organisée en France autour du principe de la gestion concertée par bassin versant, les agences de l’eau exercent leurs missions dans le cadre de programmes d’actions pluriannuels avec pour objectif final l’atteinte du bon état des eaux (selon la directive cadre sur l’eau d’octobre 2000).

#### BRGM
Le [BRGM (Bureau de Recherches Géologiques et Minières)](http://www.brgm.fr/), service géologique national français, est l'établissement public de référence dans les applications des sciences de la Terre pour gérer les ressources et les risques du sol et du sous-sol. Le BRGM assure notamment la diffusion de données géologiques et environnementales via les technologies de l’information et de la communication, avec pour objectif la mise à disposition des pouvoirs publics, des acteurs économiques et du grand public d'informations géoréférencées pour appuyer leurs décisions. Parmi les domaines de compétence du BRGM figurent les infrastructures informatiques de diffusion, calcul, simulation-visualisation 3D et réalité virtuelle ainsi que l'interopérabilité.

#### SANDRE
Le [SANDRE (Service d'Administration Nationale des Données et Référentiels sur l'Eau)](http://www.sandre.eaufrance.fr/) a pour mission d'établir et de mettre à disposition le référentiel des données sur l'eau du SIE (Système d'Information sur l'Eau). Ce référentiel, composé de spécifications techniques et de listes de codes libres d'utilisation, décrit les modalités d'échange des données sur l'eau à l'échelle de la France. D'un point de vue informatique, le Sandre garantit l'interopérabilité des systèmes d'information relatifs à l'eau.

---
title: Hub'Eau - Chimie des cours d'eau
tagline: Qualité physico-chimique des cours d'eau
contract: OUVERT
openapi_definition: https://hubeau.eaufrance.fr/api/v0/qualite_rivieres/api-docs
doc_tech: http://hubeau.eaufrance.fr/page/documentation_chimie_riviere
logo: logo_hubeau.png
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
  - Rivière
---

### Description fonctionnelle de l'API Chimie des cours d'eau

[L'API Chimie des cours d'eau](http://hubeau.eaufrance.fr/page/api-chimie-cours-deau) de Hub'Eau permet d'accéder aux données sur la qualité physico-chimique des fleuves et rivières. 
Ces données sont issues des banques de bassin des agences de l'eau Adour Garonne et Loire Bretagne. Pour la fin du premier trimestre 2018, l'ensemble des données des bassins sera disponible, en provenance de [Naïades](http://naiades.eaufrance.fr/).
Ces données ne sont pas mises à jour actuellement.
Les données sont exposées sous la forme d'une API REST, les formats supportés sont : JSON, GeoJSON et CSV.

Les différentes opérations possibles sont :

* lieux_mesure : permet de rechercher les lieux de mesure (stations) de la chimie des cours d'eau (eaux superficielles continentales). Pour le moment, les données disponibles sont les lieux de mesure de l'agence de l'eau Adour-Garonne (AEAG) et l'agence de l'eau Loire-Bretagne (AELB) ; 
* mesures : permet de rechercher les mesures des lieux de mesure des agences de l'eau Adour-Garonne et Loire-Bretagne. Les mesures concernent différents paramètres physico-chimiques comme la conductivité, les nitrates, les substances pesticides...

Dernières évolutions de l'API Chimie des cours d'eau de Hub'Eau:

* 04/05/2017 : mise à jour de l'adresse de l'API api.hubeau.fr vers [hubeau.eaufrance.fr/](http://hubeau.eaufrance.fr/)
* 25/10/2016 : ajout des données qualité des rivières de l'agence de l'eau Loire Bretagne
* 21/09/2016 : ajout des libellés SANDRE à côté des codes SANDRE dans la réponse
* 08/08/2016 : ajout du paramètre fields, la valeur est une liste des champs souhaités dans la réponse (fonctionnalité expérimentale), par exemple fields=code_station,localisation

Prochainement, l'ensemble des données des 6 Agences de l'Eau sera disponible, au lieu de 2 actuellement.

### Connaissez-vous Hub'Eau ?

[Hub’Eau](http://hubeau.eaufrance.fr) c’est la plateforme qu’il vous faut pour manipuler facilement les données ouvertes disponibles sur l’eau.
Hub’Eau est la solution pour accéder aux  données sur l’eau sans être confronté aux problèmes d’hétérogénéité, de sources multiples, …. 
Hub’Eau offre plusieurs interfaces (API) facilitant la réutilisation de données grâce au potentiel de jeux de données immédiatement intelligibles et exploitables.
Hub’Eau c’est un service pérenne de la toile Eau France. 
Osez l’expérience Hub’Eau : proposez-nous de nouveaux terrains de jeux, et mettons en commun notre intelligence pour créer la valeur de demain.
Hub’Eau c’est le résultat de la collaboration de l’AFB et du BRGM dans le cadre du pôle de recherche et d'innovation en interopérabilité des systèmes d'information distribués sur l'eau : [INSIDE](http://www.pole-inside.fr/fr).  

Les autres API disponibles à ce jour dans Hub'Eau sont :

* Etat piscicole ;
* Indicateurs Eau potable et Assainissement ;
* Piézométrie ;
* Qualité des nappes d'eau souterraine.


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

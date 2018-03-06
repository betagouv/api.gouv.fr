---
title: Hub'Eau - Etat piscicole des rivières
tagline: Données sur les poissons de rivières
contract: OUVERT
openapi_definition: https://hubeau.eaufrance.fr/api/v0/etat_piscicole/api-docs
doc_tech: http://hubeau.eaufrance.fr/page/documentation_poisson/
logo: 01-poisson.png
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
  - Poissons
  - Pêche électrique
  - Cours d'eau
  - Etat piscicole
---

### Description fonctionnelle de l'API Poissons

[L'API Etat Piscicole](http://hubeau.eaufrance.fr/page/api-poisson) de Hub'Eau ou __API Poissons__ permet de connaître les poissons décomptés par pêche électrique dans une rivière.
La source de données est : [Informations sur les Milieux Aquatiques pour la Gestion Environnementale (IMAGE)](http://www.image.eaufrance.fr/).
Il s'agit des données de taille des poissons pêchés au moyen de pêches électriques. Elles proviennent essentiellement de l'AFB (anciennement ONEMA, anciennement CSP).
Les données sont exposées sous la forme d'une API REST, les formats supportés sont : JSON, GeoJSON et CSV.

Les différentes opérations possibles sont :

* code_espece_poisson : obtenir les correspondances des codes des espèces de poissons entre le référentiel AFB (3 lettres) et le référentiel SANDRE (code numérique). Cette API permet également d'obtenir les noms commun et latin des espèces à partir des codes AFB ou SANDRE ; 
* lieux_peche : connaître les lieux où ont été effectuées des pêches électriques. A partir d'une ou plusieurs espèces de poissons, l'API fournit les stations et cours d'eau où ont été pêchés ces poissons. Il est possible de limiter la recherche en entrant un rectangle d'emprise géographique, un département, une commune, un sous-secteur hydrographique et une période d'opération ;
* poissons : connaître les poissons décomptés par pêche électrique dans une rivière. A partir cette fois des codes des différentes stations, on récupère d'abord des informations sur la station (localisation, cours d'eau) puis sur les différentes opérations de pêche électrique qui y ont eu lieu : date, espèces de poissons pêchées, effectifs de chaque espèce, classes de taille de chaque espèce. Il est possible de limiter la recherche à une période précise.

Dernières évolutions de l'API Etat piscicole de Hub'Eau:

* 04/05/2017 : mise à jour de l'adresse de l'API api.hubeau.fr vers [hubeau.eaufrance.fr/](http://hubeau.eaufrance.fr/)
* 21/09/2016 : ajout des libellés SANDRE à côté des codes SANDRE dans la réponse
* 08/08/2016 : ajout du paramètre fields, la valeur est une liste des champs souhaités dans la réponse, par exemple fields=code_station,localisation

Prochaines évolutions : accès à des données plus récentes et mise à disposition de nouveaux attributs (IPR, scores, méthodes et modes de prospection), prévu pour la fin de l'année 2018.

### Connaissez-vous Hub'Eau ?

[Hub’Eau](http://hubeau.eaufrance.fr) c’est la plateforme qu’il vous faut pour manipuler facilement les données ouvertes disponibles sur l’eau.
Hub’Eau est la solution pour accéder aux  données sur l’eau sans être confronté aux problèmes d’hétérogénéité, de sources multiples, …. 
Hub’Eau offre plusieurs interfaces (API) facilitant la réutilisation de données grâce au potentiel de jeux de données immédiatement intelligibles et exploitables.
Hub’Eau c’est un service pérenne de la toile Eau France. 
Osez l’expérience Hub’Eau : proposez-nous de nouveaux terrains de jeux, et mettons en commun notre intelligence pour créer la valeur de demain.
Hub’Eau c’est le résultat de la collaboration de l’AFB et du BRGM dans le cadre du pôle de recherche et d'innovation en interopérabilité des systèmes d'information distribués sur l'eau : [INSIDE](http://www.pole-inside.fr/fr).  

Les autres API disponibles à ce jour dans Hub'Eau sont :

* [Indicateurs Eau potable et Assainissement](/api/api_hubeau_indic_EP_Asst.html) ;
* [Piézométrie](/api/api_hubeau_piezometrie.html) ;
* [Qualité physico-chimique des cours d'eau](/api/api_hubeau_qualite_rivieres.html) ;
* [Qualité des nappes d'eau souterraine](/api/api_hubeau_qualite_nappes_eau_sout.html).


### Exemples de réutilisation

* [Cartographie de la présence des espèces de poissons](http://hubeau.eaufrance.fr/sites/default/files/api/demo/poissons.html)
* [Mortalité des saumons et des anguilles par les turbines hydroélectriques](https://public.tableau.com/views/Devalpomi/Devalpomi?:showVizHome=no), par l'association [Logrami - Loire Grands Migrateurs](http://www.logrami.fr/)
* [Présence du Silure en France](https://public.tableau.com/views/HubEau/PrsenceduSilure?%3AshowVizHome=no), par l'association [Logrami - Loire Grands Migrateurs](http://www.logrami.fr/)
* [Soumettez le votre sur la page des réutilisateurs](http://hubeau.eaufrance.fr/page/proposez-exemples-dusage)

### Glossaire

#### AFB
L'[AFB (Agence Française de la Biodiversité)](http://www.afbiodiversite.fr/) a pris le relais du CSP (Conseil Supérieur de la Pêche) puis de l'ONEMA (Office National de l'Eau et des Milieux Aquatiques) pour (entres autres) l'acquisition et la diffusion de données piscicoles. Les missions de l'AFB vont bien au-delà de cet aspect : plus généralement, l'AFB, établissement public du ministère de la Transition écologie et solidaire, exerce des missions d’appui à la mise en oeuvre des politiques publiques dans les domaines de la connaissance, la préservation, la gestion et la restauration de la biodiversité des milieux terrestres, aquatiques et marins. Elle vient en appui aux acteurs publics mais travaille également en partenariat étroit avec les acteurs socio-économiques. Elle a aussi vocation à aller à la rencontre du public pour mobiliser les citoyens en faveur de la biodiversité.

#### BRGM
Le [BRGM (Bureau de Recherches Géologiques et Minières)](http://www.brgm.fr/), service géologique national français, est l'établissement public de référence dans les applications des sciences de la Terre pour gérer les ressources et les risques du sol et du sous-sol. Le BRGM assure notamment la diffusion de données géologiques et environnementales via les technologies de l’information et de la communication, avec pour objectif la mise à disposition des pouvoirs publics, des acteurs économiques et du grand public d'informations géoréférencées pour appuyer leurs décisions. Parmi les domaines de compétence du BRGM figurent les infrastructures informatiques de diffusion, calcul, simulation-visualisation 3D et réalité virtuelle ainsi que l'interopérabilité.

#### Pêche électrique
Opération d'inventaire des organismes aquatiques (poissons en général mais aussi crustacés) au moyen d'un courant électrique. Les poissons sont attirés puis paralysés par le champ magnétique, ainsi ils remontent à la surface, sont capturés, identifiés, comptés, mesurés puis relachés dans leur milieu.

#### SANDRE
Le [SANDRE (Service d'Administration Nationale des Données et Référentiels sur l'Eau)](http://www.sandre.eaufrance.fr/) a pour mission d'établir et de mettre à disposition le référentiel des données sur l'eau du SIE (Système d'Information sur l'Eau). Ce référentiel, composé de spécifications techniques et de listes de codes libres d'utilisation, décrit les modalités d'échange des données sur l'eau à l'échelle de la France. D'un point de vue informatique, le Sandre garantit l'interopérabilité des systèmes d'information relatifs à l'eau.

#### Station
Lieu de pêche électrique. Les stations ont un code numérique à 8 chiffres, des coordonnées X, Y et sont rattachées à un cours d'eau. Les stations sont le lieu de pêches électriques à diverses périodes où on prélève les poissons pour déterminer les différentes espèces, les effectifs par espèce puis les classes de tailles par espèce. Les classes de taille ont en général une largeur de 10mm.

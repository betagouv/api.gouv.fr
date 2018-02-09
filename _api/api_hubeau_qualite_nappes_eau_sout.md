---
title: Hub'Eau - Qualité des nappes d'eau souterraine
tagline: Qualité physico-chimique des nappes d'eau souterraines
contract: OUVERT
openapi_definition: https://hubeau.eaufrance.fr/api/v1/qualite_nappes/api-docs
doc_tech: http://hubeau.eaufrance.fr/page/documentation-qualite-nappes-deau-souterraines
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
  - Nappe d'eau
  - Eau souterraine
  - Aquifère
  - Hydrogéologie
---

### Description fonctionnelle de l'API Qualité des nappes d'eau souterraine

[L'API Qualité des nappes d'eau souterraine](http://hubeau.eaufrance.fr/page/api-qualite-nappes-deau-souterraines) de Hub'Eau permet d'accéder aux données sur la qualité physico-chimique des nappes d'eau souterraines françaises. 
Ces données sont issues de la [banque nationale d'Accès aux Données sur les Eaux Souterraines ADES](http://ades.eaufrance.fr/).
Au 29 novembre 2017, les données concernent 67 millions d'analyses réparties sur 74000 points d'eau.
Les données sont exposées sous la forme d'une API REST, les formats supportés sont : JSON, GeoJSON et CSV.

Les différentes opérations possibles sont :

* stations : permet de rechercher les stations de mesure de la qualité des eaux souterraines (ou points d'eau : puits, forages et sources) ; 
* analyses : permet de récupérer les résultats des analyses, concernant différents paramètres physico-chimiques comme la conductivité, les nitrates, les substances pesticides, les métaux...

La recherche des analyses est possible via de nombeaux critères :
* code du point d'eau, 
* code ou nom de commune,
* département ou région,
* code ou nom de bassin ou de circonscription administrative de bassin,
* code ou nom d'aquifère (selon le référentiel BD LISA),
* code ou nom de masse d'eau,
* code ou nom de réseau de mesures,
* coordonnées géographiques,
* producteur des données,
* code du paramètre analysé (nitrates, pH, glyphosate, etc) ou du groupe de paramètres (pesticides, métaux, etc),
* code ou nom de la fraction analysée (eau brute, eau filtrée, etc),
* code remarque de l'analyse (domaine de validité, < seuil de détection, > seuil de saturation, traces, etc),
* code ou nom de la méthode d'analyse,
* code ou nom du statut de l'analyse (donnée brute, contrôlée ou interprétée),
* code ou nom de la qualification du résultat (correcte, incorrecte, incertaine),
* dates mini et maxi de prélèvement,
* valeurs mini et maxi du résultat de l'analyse.


Dernières évolutions de l'API Qualité des nappes d'eau souterraine:

* 29/11/2017 : mise à disposition de la v1

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
* [Qualité physico-chimique des cours d'eau](/api/api_hubeau_qualite_rivieres.html).


### Exemples de réutilisation

* [Qualité des nappes d'eau souterraine dans votre commune](http://www.nalguise.net/quales/quales.php)
* [Cartographie de la qualité des nappes d'eau souterraine en France](http://www.nalguise.net/quales/quales_carto.php)
* [Soumettez le votre sur la page des réutilisateurs](http://hubeau.eaufrance.fr/page/proposez-exemples-dusage)

### Glossaire

#### ADES
[ADES](http://www.ades.eaufrance.fr) est la banque nationale d’Accès aux Données sur les Eaux Souterraines qui rassemble sur son site internet public des données quantitatives et qualitatives relatives aux eaux souterraines, dont les objectifs sont de constituer un outil de collecte et de conservation des données sur les eaux souterraines, d’être mobilisable par un large ensemble de partenaires, de permettre les traitements nécessaires à l’action de chacun des partenaires, d’être le guichet d’accès aux informations sur les eaux souterraines, d’avoir un suivi de l’état patrimonial des ressources pour répondre à la politique des eaux souterraines, et enfin d’adopter au niveau national un principe de transparence et d’accessibilité aux données sur les eaux souterraines. 

#### AFB
L'[AFB (Agence Française de la Biodiversité)](http://www.afbiodiversite.fr/) a pris le relais du CSP (Conseil Supérieur de la Pêche) puis de l'ONEMA (Office National de l'Eau et des Milieux Aquatiques) pour (entres autres) l'acquisition et la diffusion de données piscicoles. Les missions de l'AFB vont bien au-delà de cet aspect : plus généralement, l'AFB, établissement public du ministère de la Transition écologie et solidaire, exerce des missions d’appui à la mise en oeuvre des politiques publiques dans les domaines de la connaissance, la préservation, la gestion et la restauration de la biodiversité des milieux terrestres, aquatiques et marins. Elle vient en appui aux acteurs publics mais travaille également en partenariat étroit avec les acteurs socio-économiques. Elle a aussi vocation à aller à la rencontre du public pour mobiliser les citoyens en faveur de la biodiversité.

#### Aquifère
Un aquifère est une formation géologique ou une roche, suffisamment poreuse et/ou fissurée (pour stocker de grandes quantités d'eau) tout en étant suffisamment perméable pour que l'eau puisse y circuler librement. Pour se représenter un aquifère, il faut imaginer un vaste réservoir naturel de stockage d'eau souterraine.

#### BRGM
Le [BRGM (Bureau de Recherches Géologiques et Minières)](http://www.brgm.fr/), service géologique national français, est l'établissement public de référence dans les applications des sciences de la Terre pour gérer les ressources et les risques du sol et du sous-sol. Le BRGM assure notamment la diffusion de données géologiques et environnementales via les technologies de l’information et de la communication, avec pour objectif la mise à disposition des pouvoirs publics, des acteurs économiques et du grand public d'informations géoréférencées pour appuyer leurs décisions. Parmi les domaines de compétence du BRGM figurent les infrastructures informatiques de diffusion, calcul, simulation-visualisation 3D et réalité virtuelle ainsi que l'interopérabilité.

#### Eaux souterraines
Les eaux souterraines désignent toutes les eaux se trouvant sous la surface du sol en contact direct avec le sol ou le sous-sol et qui transitent plus ou moins rapidement dans les fissures et les pores du sol. 

#### Nappe d'eau souterraine
Une nappe d'eau souterraine est une eau contenue dans les interstices ou les fissures d'une roche du sous-sol qu'on nomme aquifère.

#### SANDRE
Le [SANDRE (Service d'Administration Nationale des Données et Référentiels sur l'Eau)](http://www.sandre.eaufrance.fr/) a pour mission d'établir et de mettre à disposition le référentiel des données sur l'eau du SIE (Système d'Information sur l'Eau). Ce référentiel, composé de spécifications techniques et de listes de codes libres d'utilisation, décrit les modalités d'échange des données sur l'eau à l'échelle de la France. D'un point de vue informatique, le Sandre garantit l'interopérabilité des systèmes d'information relatifs à l'eau.

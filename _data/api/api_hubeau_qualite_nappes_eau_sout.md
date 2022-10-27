---
title: Hub'Eau - Qualité des nappes d'eau souterraine
tagline: Qualité physico-chimique des nappes d'eau souterraine
is_open: 1 # 1 means API is fully open
external_site: https://hubeau.eaufrance.fr/page/api-qualite-nappes
partners:
  - eaufrance
  - ofb
  - brgm
producer: hub-eau
keywords:
  - Qualité physico-chimique
  - Nappe d'eau
  - Eau souterraine
  - Aquifère
  - Hydrogéologie
contact_link: newshubeau@brgm.fr
doc_tech_link: https://hubeau.eaufrance.fr/api/v1/qualite_nappes/api-docs
themes:
  - Environnement
visits_2019: 381
last_update: 11/06/2018
content_intro: |
  [L'API Qualité des nappes d'eau souterraine](https://hubeau.eaufrance.fr/page/api-qualite-nappes) de Hub'Eau permet d'accéder aux données sur la qualité physico-chimique des nappes d'eau souterraines françaises.
---

### Description fonctionnelle de l'API Qualité des nappes d'eau souterraine

Ces données sont issues de la [banque nationale d'Accès aux Données sur les Eaux Souterraines ADES](http://ades.eaufrance.fr/). Elles concernent plus de 100 millions d'analyses.
Les données sont exposées sous la forme d'une API REST, les formats supportés sont : JSON, GeoJSON et CSV.

Les différentes opérations possibles sont :

- stations : permet de rechercher les stations de mesure de la qualité des eaux souterraines (ou points d'eau : puits, forages et sources) ;
- analyses : permet de récupérer les résultats des analyses, concernant différents paramètres physico-chimiques comme la conductivité, les nitrates, les substances pesticides, les métaux... La recherche des analyses est possible via de nombreux critères dont le point d'eau, la commune, l'aquifère, la masse d'eau, le réseau de mesures, le producteur des données...

Dernières évolutions de l'API Qualité des nappes d'eau souterraine:
- 05/02/2019 : v1.2.0 - branchement sur un nouvel entrepôt de données permettant 1) une mise à jour au fil de l'eau (au même rythme que dans la base ADES) ; 2) la correction du bug pouvant faire varier le nombre de résultats pour une même requête
- 22/05/2018 : v1.1.0 - ajout d'une limitation sur la profondeur d'accès aux résultats, ajout du header "link" pour le format CSV, correction du code retour pour le format CSV gérant le code 200 et 206  
- 22/01/2018 : v1.0.1 - correction de bugs  
- 29/11/2017 : mise à disposition de la v1

### Connaissez-vous Hub'Eau ?

#### Simplifier l'accès aux données sur l'eau

Service pérenne de la toile [Eau France](https://www.eaufrance.fr), [Hub'Eau](https://hubeau.eaufrance.fr/) met à disposition des API Rest favorisant l’accès aux données du [SIE](https://www.eaufrance.fr/donnees) dans des formats simples d’emploi et propices à la réutilisation (CSV, JSON, GeoJSON).
Fondé sur une infrastructure et des méthodes adaptées au traitement et au stockage de données massives, les API Hub'Eau garantissent les meilleures performances de disponibilité.
Hub’Eau est le résultat de la collaboration de l’OFB et du BRGM dans le cadre du pôle de recherche et d'innovation en interopérabilité des systèmes d'information distribués sur l'eau : [INSIDE](http://www.pole-inside.fr/fr).

Pour découvrir toutes les API disponibles dans Hub'Eau, visitez [la page Hub'Eau sur api.gouv](https://api.gouv.fr/producteurs/hub-eau) ou directement [le portail Hub'Eau](https://hubeau.eaufrance.fr/page/apis).  

#### Un service en co-construction

Pour des API toujours plus en phase avec les besoins utilisateurs, Hub'Eau a inauguré en 2018 une [politique de bêta testing](https://hubeau.eaufrance.fr/page/apis) en organisant une campagne de tests ouverte avant la mise la mise en production de chaque nouvelle API.
D'une durée de quelques mois, ces campagnes ont pour objectif de recueillir un maximum de retour d’expérience des utilisateurs sur les points forts et les points faibles des API en construction. Les retours se font sur [le forum de contribution GitHub](http://github.com/BRGM/hubeau/issues).
Pour être informé de la sortie des nouvelles API et les tester en avant-première, inscrivez-vous à la [newsletter](https://hubeau.eaufrance.fr/newsletter) !

### Exemples de réutilisation
- [Les nitrates dans les cours d'eau et les nappes souterraines des Pays de la Loire](https://ssm-ecologie.shinyapps.io/nitrates_eau/)
- [Visualiseur Hub'Eau de la qualité des nappes](https://hubeau.eaufrance.fr/sites/default/files/api/demo/qualnap.htm)
- [Soumettez le votre sur la page GitHub des utilisateurs de Hub'Eau](https://github.com/BRGM/hubeau)

### Glossaire

#### ADES

[ADES](http://www.ades.eaufrance.fr) est la banque nationale d’Accès aux Données sur les Eaux Souterraines qui rassemble sur son site internet public des données quantitatives et qualitatives relatives aux eaux souterraines, dont les objectifs sont de constituer un outil de collecte et de conservation des données sur les eaux souterraines, d’être mobilisable par un large ensemble de partenaires, de permettre les traitements nécessaires à l’action de chacun des partenaires, d’être le guichet d’accès aux informations sur les eaux souterraines, d’avoir un suivi de l’état patrimonial des ressources pour répondre à la politique des eaux souterraines, et enfin d’adopter au niveau national un principe de transparence et d’accessibilité aux données sur les eaux souterraines.

#### Aquifère

Un aquifère est une formation géologique ou une roche, suffisamment poreuse et/ou fissurée (pour stocker de grandes quantités d'eau) tout en étant suffisamment perméable pour que l'eau puisse y circuler librement. Pour se représenter un aquifère, il faut imaginer un vaste réservoir naturel de stockage d'eau souterraine.

#### BRGM

Le [BRGM (Bureau de Recherches Géologiques et Minières)](http://www.brgm.fr/), service géologique national français, est l'établissement public de référence dans les applications des sciences de la Terre pour gérer les ressources et les risques du sol et du sous-sol. Le BRGM assure notamment la diffusion de données géologiques et environnementales via les technologies de l’information et de la communication, avec pour objectif la mise à disposition des pouvoirs publics, des acteurs économiques et du grand public d'informations géoréférencées pour appuyer leurs décisions. Parmi les domaines de compétence du BRGM figurent les infrastructures informatiques de diffusion, calcul, simulation-visualisation 3D et réalité virtuelle ainsi que l'interopérabilité.

#### Eaux souterraines

Les eaux souterraines désignent toutes les eaux se trouvant sous la surface du sol en contact direct avec le sol ou le sous-sol et qui transitent plus ou moins rapidement dans les fissures et les pores du sol.

#### Nappe d'eau souterraine

Une nappe d'eau souterraine est une eau contenue dans les interstices ou les fissures d'une roche du sous-sol qu'on nomme aquifère.

#### OFB

L'[OFB (Office Français de la Biodiversité)](https://ofb.gouv.fr/) a été créée le 1er janvier 2017. Elle regroupe l'Agence des aires marines protégées, l'Atelier technique des espaces naturels, l'Office national de l'eau et des milieux aquatiques et les Parcs nationaux de France. L'AFB , établissement public du ministère en charge de l'environnement, exerce des missions d’appui à la mise en œuvre des politiques publiques dans les domaines de la connaissance, la préservation, la gestion et la restauration de la biodiversité et des milieux terrestres, aquatiques et marins. Elle vient en appui aux acteurs publics mais travaille également en partenariat étroit avec les acteurs socio-économiques. Elle a aussi vocation à aller à la rencontre du public pour mobiliser les citoyens en faveur de la biodiversité. En matière d’espaces protégés, elle gère notamment les parcs naturels marins et le sanctuaire de mammifères marins Agoa aux Antilles. Elle est opératrice et animatrice de sites Natura 2000 en mer. Les parcs nationaux sont rattachés à l’Agence, des synergies fortes sont mises en place avec eux.

#### SANDRE

Le [SANDRE (Service d'Administration Nationale des Données et Référentiels sur l'Eau)](http://www.sandre.eaufrance.fr/) a pour mission d'établir et de mettre à disposition le référentiel des données sur l'eau du SIE (Système d'Information sur l'Eau). Ce référentiel, composé de spécifications techniques et de listes de codes libres d'utilisation, décrit les modalités d'échange des données sur l'eau à l'échelle de la France. D'un point de vue informatique, le Sandre garantit l'interopérabilité des systèmes d'information relatifs à l'eau.

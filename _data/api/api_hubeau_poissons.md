---
title: Hub'Eau - Etat piscicole des rivières
tagline: Données sur les poissons de rivières
is_open: 1 # 1 means API is fully open
external_site: https://hubeau.eaufrance.fr/page/api-poisson/
partners:
  - eaufrance
  - ofb
  - brgm
producer: hub-eau
keywords:
  - Poissons
  - Pêche électrique
  - Cours d'eau
  - Etat piscicole
contact_link: newshubeau@brgm.fr
doc_tech_link: https://hubeau.eaufrance.fr/api/v1/etat_piscicole/api-docs
themes:
  - Environnement
visits_2019: 568
last_update: 12/06/2018
content_intro: |
  [L'API Etat Piscicole](https://hubeau.eaufrance.fr/page/api-poisson) de Hub'Eau ou **API Poisson** diffuse les données collectées lors d'opérations de pêches scientifiques à l'électricité (observations dans un premier temps, puis à terme stations de prélèvement, opérations, et indicateurs). Ces données couvrent la France hexagonale (Corse comprise) et plus de 50 ans de collecte.
  La source de données est la base ASPE opérée par l'OFB.
---

### Description fonctionnelle de l'API Poissons

L'API Poisson complète les données piscicoles diffusées par l'API Hydrobiologie des cours d'eau collectées sur des stations référencées par le Sandre, et consolidées à l'échelle du prélèvement élémentaire (source des données : base ASPE opérée par l'OFB).
Les données sont exposées sous la forme d'une API REST, les formats supportés sont : JSON, GeoJSON et CSV.

Les différentes opérations possibles sont :

- **observations** : Elle permet d'accéder aux données des observations piscicoles collectées sur des stations en cours d'eau référencées par le Sandre, et consolidées à l'échelle du prélèvement élémentaire ; 
- **indicateurs**, **operations** et **stations** seront disponibles fin 2022.

Dernières évolutions de l'API Etat piscicole de Hub'Eau:
- 16/06/2022 : v1.0.0, version branchée sur les données ASPE, mise à disposition de l'opération observations
- 03/01/2019 : v0.3.1 basée sur l'ancienne base IMAGE. Cette version, obsolète, reste disponible jusqu'au 31 décembre 2022. La documentation de cette ancienne version est accessible à [cette adresse](https://hubeau.eaufrance.fr/api/v0/etat_piscicole/api-docs).

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

- [Cartographie de la présence des espèces de poissons](https://hubeau.eaufrance.fr/sites/default/files/api/demo/poissons.html)
- [Mortalité des saumons et des anguilles par les turbines hydroélectriques](https://public.tableau.com/views/Devalpomi/Devalpomi?:showVizHome=no), par l'association [Logrami - Loire Grands Migrateurs](http://www.logrami.fr/)
- [Présence du Silure en France](https://public.tableau.com/views/HubEau/PrsenceduSilure?%3AshowVizHome=no), par l'association [Logrami - Loire Grands Migrateurs](http://www.logrami.fr/)
- [Soumettez le votre sur la page GitHub des utilisateurs de Hub'Eau](https://github.com/BRGM/hubeau)

### Glossaire

#### BRGM

Le [BRGM (Bureau de Recherches Géologiques et Minières)](http://www.brgm.fr/), service géologique national français, est l'établissement public de référence dans les applications des sciences de la Terre pour gérer les ressources et les risques du sol et du sous-sol. Le BRGM assure notamment la diffusion de données géologiques et environnementales via les technologies de l’information et de la communication, avec pour objectif la mise à disposition des pouvoirs publics, des acteurs économiques et du grand public d'informations géoréférencées pour appuyer leurs décisions. Parmi les domaines de compétence du BRGM figurent les infrastructures informatiques de diffusion, calcul, simulation-visualisation 3D et réalité virtuelle ainsi que l'interopérabilité.

#### OFB

L'[OFB (Office Français de la Biodiversité)](https://ofb.gouv.fr/) est un établissement public dédié à la sauvegarde de la biodiversité. Une de ses priorités est de répondre de manière urgente aux enjeux de préservation du vivant. Créé au 1er janvier 2020 par la loi n°2019-773 du 24 juillet 2019, l’Office français de la biodiversité regroupe les agents de l’Agence française pour la biodiversité (AFB) et de l’Office national de la chasse et de la faune sauvage (ONCFS). Unir ces deux établissements dans la lutte pour la protection de la nature, permet de rassembler des expertises, sur les milieux aquatiques, terrestres et marins et faire front commun contre les menaces qui pèsent sur la biodiversité en France. Regrouper ces deux entités, dont les agents sont implantés sur l’ensemble de l’hexagone et les Outre-mer, c’est aussi assurer un ancrage solide dans les territoires pour agir à l’échelle locale.

#### Pêche électrique

Opération d'inventaire des organismes aquatiques (poissons en général mais aussi crustacés) au moyen d'un courant électrique. Les poissons sont attirés puis paralysés par le champ magnétique, ainsi ils remontent à la surface, sont capturés, identifiés, comptés, mesurés puis relachés dans leur milieu.

#### SANDRE

Le [SANDRE (Service d'Administration Nationale des Données et Référentiels sur l'Eau)](http://www.sandre.eaufrance.fr/) a pour mission d'établir et de mettre à disposition le référentiel des données sur l'eau du SIE (Système d'Information sur l'Eau). Ce référentiel, composé de spécifications techniques et de listes de codes libres d'utilisation, décrit les modalités d'échange des données sur l'eau à l'échelle de la France. D'un point de vue informatique, le Sandre garantit l'interopérabilité des systèmes d'information relatifs à l'eau.

#### Station

Lieu de pêche électrique. Les stations ont un code numérique à 8 chiffres, des coordonnées X, Y et sont rattachées à un cours d'eau. Les stations sont le lieu de pêches électriques à diverses périodes où on prélève les poissons pour déterminer les différentes espèces, les effectifs par espèce puis les classes de tailles par espèce. Les classes de taille ont en général une largeur de 10mm.

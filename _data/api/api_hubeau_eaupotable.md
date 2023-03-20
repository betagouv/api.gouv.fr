---
title: Hub'Eau - Qualité de l'eau potable
tagline: Qualité de l'eau potable
is_open: 1 # 1 means API is fully open
external_site: https://hubeau.eaufrance.fr/page/api-qualite-eau-potable
partners:
  - eaufrance
  - ofb
  - brgm
  - Direction Générale de la Santé
producer: hub-eau
keywords:
  - Eau distribuée
  - Eau potable
  - Qualité de l'eau
contact_link: newshubeau@brgm.fr
doc_tech_link: https://hubeau.eaufrance.fr/api/v1/qualite_eau_potable/api-docs
themes:
  - Environnement
last_update: 16/11/2022
content_intro: |
  [L'API Qualité de l'eau potable](https://hubeau.eaufrance.fr/page/api-qualite-eau-potable) de Hub'Eau diffuse le jeu de données "DIS" (résultats du contrôle sanitaire de l'eau distribuée commune par commune) mis en ligne par le Ministère des Solidarités et de la Santé sur le portail data.gouv.fr
---

### Description fonctionnelle de l'API Qualité de l'eau potable

Cette API a pu voir le jour grâce à un travail collaboratif de plusieurs mois entre le BRGM, la Direction Générale de la Santé et l'OFB.

Les données diffusées comprennent :
- les prélèvements et résultats des analyses réalisées dans le cadre du contrôle sanitaire réglementaire sur les unités de distribution ou les installations directement en amont ;  
- les liens entre communes et unités de distribution.  

Ces données correspondent à une compilation des bulletins d’analyses diffusés en ligne, commune par commune, sur le [site internet du Ministère en charge de la santé](http://eaupotable.sante.gouv.fr/).

Leur fréquence de mise à jour est mensuelle.

Pour une API au plus près de vos besoins, expérimentez la version bêta et faites nous part de [vos commentaires](https://github.com/BRGM/hubeau/issues) !

Source des données : [Résultats du contrôle sanitaire de l'eau distribuée commune par commune](https://www.data.gouv.fr/fr/datasets/resultats-du-controle-sanitaire-de-leau-distribuee-commune-par-commune/).  
  
Les différentes opérations possibles sont :
- **communes_udi** : permet de faire le lien entre communes et unités de distribution (réseaux) ;  
- **resultats_dis** : permet de lister les prélèvements, résultats d'analyses et conclusions sanitaires issus du contrôle sanitaire de l'eau distribuée commune par commune. 

Dernières évolutions de l'API Qualité de l'eau potable de Hub'Eau:
- 16/11/2022 : passage de l'API en version 1
- 29/11/2021 : mise à disposition de la version beta publique  

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
- [Qualité de l'eau potable des 12 derniers mois sur Aix-Marseille-Provence](https://data.ampmetropole.fr/explore/dataset/ls-qualite-de-leau-potable-12-mois/table/)
- [Soumettez le votre sur la page GitHub des utilisateurs de Hub'Eau](https://github.com/BRGM/hubeau)

### Glossaire

#### BRGM

Le [BRGM (Bureau de Recherches Géologiques et Minières)](http://www.brgm.fr/), service géologique national français, est l'établissement public de référence dans les applications des sciences de la Terre pour gérer les ressources et les risques du sol et du sous-sol. Le BRGM assure notamment la diffusion de données géologiques et environnementales via les technologies de l’information et de la communication, avec pour objectif la mise à disposition des pouvoirs publics, des acteurs économiques et du grand public d'informations géoréférencées pour appuyer leurs décisions. Parmi les domaines de compétence du BRGM figurent les infrastructures informatiques de diffusion, calcul, simulation-visualisation 3D et réalité virtuelle ainsi que l'interopérabilité.

#### DGS

La [DGS (Direction Générale de la Santé)](https://solidarites-sante.gouv.fr/ministere/organisation/organisation-des-directions-et-services/article/organisation-de-la-direction-generale-de-la-sante-dgs) élabore la politique de prévention et de gestion des risques liés aux maladies infectieuses ou aux pratiques de soins et participe à sa mise en œuvre. Elle conduit la politique de prévention des risques liés aux milieux de vie et à l'alimentation et contribue à la gestion de ces risques.

#### OFB

L'[OFB (Office Français de la Biodiversité)](https://ofb.gouv.fr/) est un établissement public dédié à la sauvegarde de la biodiversité. Une de ses priorités est de répondre de manière urgente aux enjeux de préservation du vivant. Créé au 1er janvier 2020 par la loi n°2019-773 du 24 juillet 2019, l’Office français de la biodiversité regroupe les agents de l’Agence française pour la biodiversité (AFB) et de l’Office national de la chasse et de la faune sauvage (ONCFS). Unir ces deux établissements dans la lutte pour la protection de la nature, permet de rassembler des expertises, sur les milieux aquatiques, terrestres et marins et faire front commun contre les menaces qui pèsent sur la biodiversité en France. Regrouper ces deux entités, dont les agents sont implantés sur l’ensemble de l’hexagone et les Outre-mer, c’est aussi assurer un ancrage solide dans les territoires pour agir à l’échelle locale.

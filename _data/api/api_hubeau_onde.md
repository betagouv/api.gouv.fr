---
title: Hub'Eau - Ecoulement des cours d'eau
tagline: Ecoulement des cours d'eau
is_open: 1 # 1 means API is fully open
external_site: https://hubeau.eaufrance.fr/page/api-ecoulement
partners:
  - eaufrance
  - ofb
  - brgm
producer: hub-eau
keywords:
  - Ecoulement
  - Tête de bassin versant
  - Cours d'eau
  - Observations visuelles
contact_link: newshubeau@brgm.fr
doc_tech_link: https://hubeau.eaufrance.fr/api/v1/ecoulement/api-docs
themes:
  - Environnement
last_update: 23/05/2023
content_intro: |
  [L'API Ecoulement des cours d'eau](https://hubeau.eaufrance.fr/page/api-ecoulement) diffuse les données de l’observatoire national des étiages, [Onde](https://onde.eaufrance.fr/). Ces données résultent d'observations visuelles de l’écoulement des petits et moyens cours d’eau réalisées par les agents départementaux de l'Office français de la biodiversité (OFB) pendant la période estivale. Elles couvrent la France hexagonale (Corse comprise) et plus de 10 ans de collecte. 
---

### Description fonctionnelle de l'API Ecoulement des cours d'eau

De par la localisation des stations Onde en tête de bassin versant souvent peu instrumentées, cette API complète les données diffusées par l'API Hydrométrie collectées par le Schapi. La répartition des stations Onde (réseau de plus de 3200 stations) a été pensée pour être représentative du contexte hydrographique des petits et moyens cours d’eau de chaque département. Le mode de recueil des données Onde est exclusivement l’observation visuelle selon des modalités de perturbations d'écoulement des cours d’eau, aucune mesure n’est mise en œuvre sur le terrain.

L'API est passée en verison 1 le **mardi 23/05/2023** mais la version bêta reste disponible jusqu'au vendredi 26/05.  
**Veillez à prévoir la modification des URL de l'API**.
 
Les différentes opérations possibles sont :
- **stations** : permet de connaître les stations sur lesquelles sont réalisées les campagnes d'observation des écoulements ;  
- **campagnes** : permet de lister les campagnes d'observations ;  
- **observations** : permet de consulter les résultats des observations visuelles. 

Dernières évolutions de l'API Ecoulement des cours d'eau de Hub'Eau:
- 26/05/2023 : arrêt de la version bêta
- 23/05/2023 : mise à disposition de la version 1
- 29/06/2022 : mise à disposition de la version bêta  

### Connaissez-vous Hub'Eau ?

#### Simplifier l'accès aux données sur l'eau

Service pérenne de la toile [Eau France](https://www.eaufrance.fr), [Hub'Eau](https://hubeau.eaufrance.fr/) met à disposition des API Rest favorisant l’accès aux données du [SIE](https://www.eaufrance.fr/donnees) dans des formats simples d’emploi et propices à la réutilisation (CSV, JSON, GeoJSON).
Fondé sur une infrastructure et des méthodes adaptées au traitement et au stockage de données massives, les API Hub'Eau garantissent les meilleures performances de disponibilité.  
Hub’Eau est le résultat de la collaboration de l’OFB et du BRGM dans le cadre du pôle de recherche et d'innovation en interopérabilité des systèmes d'information distribués sur l'eau : [INSIDE](http://www.pole-inside.fr/fr).  

Pour découvrir toutes les API disponibles dans Hub'Eau, visitez [la page Hub'Eau sur api.gouv](https://api.gouv.fr/producteurs/hub-eau) ou directement sur [le portail Hub'Eau](https://hubeau.eaufrance.fr/page/apis).  

#### Un service en co-construction

Pour des API toujours plus en phase avec les besoins utilisateurs, Hub'Eau a inauguré en 2018 une [politique de bêta testing](https://hubeau.eaufrance.fr/page/apis) en organisant une campagne de tests ouverte avant la mise la mise en production de chaque nouvelle API.  
D'une durée de quelques mois, ces campagnes ont pour objectif de recueillir un maximum de retour d’expérience des utilisateurs sur les points forts et les points faibles des API en construction. Les retours se font sur [le forum de contribution GitHub](http://github.com/BRGM/hubeau/issues).  
Pour être informé de la sortie des nouvelles API et les tester en avant-première, inscrivez-vous à la [newsletter](https://hubeau.eaufrance.fr/newsletter) !

### Exemples de réutilisation

- [Soumettez le votre sur la page GitHub des utilisateurs de Hub'Eau](https://github.com/BRGM/hubeau)

### Glossaire

#### BRGM

Le [BRGM (Bureau de Recherches Géologiques et Minières)](http://www.brgm.fr/), service géologique national français, est l'établissement public de référence dans les applications des sciences de la Terre pour gérer les ressources et les risques du sol et du sous-sol. Le BRGM assure notamment la diffusion de données géologiques et environnementales via les technologies de l’information et de la communication, avec pour objectif la mise à disposition des pouvoirs publics, des acteurs économiques et du grand public d'informations géoréférencées pour appuyer leurs décisions. Parmi les domaines de compétence du BRGM figurent les infrastructures informatiques de diffusion, calcul, simulation-visualisation 3D et réalité virtuelle ainsi que l'interopérabilité.

#### OFB

L'[OFB (Office Français de la Biodiversité)](https://ofb.gouv.fr/) est un établissement public dédié à la sauvegarde de la biodiversité. Une de ses priorités est de répondre de manière urgente aux enjeux de préservation du vivant. Créé au 1er janvier 2020 par la loi n°2019-773 du 24 juillet 2019, l’Office français de la biodiversité regroupe les agents de l’Agence française pour la biodiversité (AFB) et de l’Office national de la chasse et de la faune sauvage (ONCFS). Unir ces deux établissements dans la lutte pour la protection de la nature, permet de rassembler des expertises, sur les milieux aquatiques, terrestres et marins et faire front commun contre les menaces qui pèsent sur la biodiversité en France. Regrouper ces deux entités, dont les agents sont implantés sur l’ensemble de l’hexagone et les Outre-mer, c’est aussi assurer un ancrage solide dans les territoires pour agir à l’échelle locale.

#### Onde

Le [site Onde](https://onde.eaufrance.fr/) présente les données de l’observatoire national des étiages. Ces données sont les observations visuelles réalisées par les agents départementaux de l'Office français de la biodiversité (OFB) pendant la période estivale sur l’écoulement des cours d’eau.

---
title: API France Chaleur Urbaine
tagline: L'API France Chaleur Urbaine permet de vérifier la proximité d'un bâtiment à un réseau de chaleur, et d'accéder aux données et tracés des réseaux de chaleur.
producer: mtes
contact_link: france-chaleur-urbaine@developpement-durable.gouv.fr
partners:
  - mtes
  - ademe
  - dinum
is_open: 1
doc_tech_link: https://france-chaleur-urbaine.beta.gouv.fr/openapi-schema.yaml
themes:
 - Energie
 - Environnement
 - Géographie
keywords:
  - chauffage urbain
  - réseaux de chaleur
  - réseaux de froid
  - périmètres de développement prioritaire
  - co2
  - bureaux d'étude
  - bailleurs sociaux
  - tertiaire
last_update: 19/03/2024
content_intro: |

---

### À quoi sert l'API France Chaleur Urbaine ?

France Chaleur Urbaine est un service du ministère de la transition écologique qui vise à faciliter et accélérer les raccordements aux réseaux de chaleur, un mode de chauffage écologique pour lequel le projet de Stratégie française pour l'énergie et le climat fixe des objectifs ambitieux à l'horizon 2030. France Chaleur Urbaine permet notamment à toute personne de vérifier si un réseau de chaleur passe près de son adresse (ou d'un ensemble d'adresses) et porte la cartographie nationale des réseaux de chaleur et de froid, qui recense les tracés et données des réseaux.

L'API mise à disposition par France Chaleur Urbaine permet de :
- vérifier si un réseau de chaleur passe à proximité d'un point géographique. L'API de la Base d'Adresses Nationale peut être utilisée en amont, pour convertir des adresses en points géographiques ;
<!-- - disposer des tracés, périmètres de développement prioritaire et données des réseaux de chaleur et de froid qui alimentent la carte en ligne. -->
- disposer des tracés et données des réseaux de chaleur et de froid qui alimentent la carte en ligne.

Elle peut être utile à différents types d'acteurs : bureaux d'études, bailleurs sociaux, gestionnaires de parcs tertiaires, ...

Un exemple d'utilisation : un bureau d'étude accompagne un client qui souhaite mettre en place une stratégie de décarbonation à l'échelle de son parc, constitué de plusieurs milliers de bâtiments. L'API France Chaleur Urbaine lui permet d'identifier très rapidement les bâtiments qui pourraient être raccordés à un réseau de chaleur, et de s'assurer que les réseaux les plus proches sont majoritairement alimentés par des énergies renouvelables, avec un faible contenu CO2.


## Principales données disponibles

- **tracés des réseaux** : les tracés sont récoltés par France Chaleur Urbaine auprès des collectivités et exploitants des réseaux. Les tracés des réseaux manquants sont ajoutés au fur et à mesure de leur réception. Pour ceux déjà disponibles, une actualisation annuelle est réalisée (a minima).
<!-- - **périmètres de développement prioritaire (PDP)** : les PDP sont récoltés par FCU auprès des collectivités. Il s'agit de zones où des obligations de raccordement s'appliquent pour certains bâtiments, dans le cadre du classement des réseaux. -->
- **taux ENR&R, contenu CO2**  : ces données sont issues de l'arrêté du 16 mars 2023, dit "arrêté DPE". Le contenu CO2 est fourni en émissions directes ainsi qu'en analyse du cycle de vie (ACV), incluant les émissions directes et indirectes.
- **gestionnaire** : l'identification du gestionnaire est issue de l'enquête annuelle des réseaux de chaleur et de froid réalisée par la FEDENE pour le compte du ministère de la transition écologique.

_Les données sont publiées à titre informatif : France Chaleur Urbaine ne garantit pas qu'elles soient exemptes de défauts, d’erreurs ou d’omissions._

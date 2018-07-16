---
title: API Particulier
tagline: Pour accélérer l’ouverture des données personnelles et leur réutilisation, automatisez vos demandes de pièces justificatives
access_link: https://signup.api.gouv.fr/api-particulier.html
domain: https://particulier.api.gouv.fr
contact: contact@particulier.api.gouv.fr
contract: OUVERT sous contrat
openapi_definition: https://particulier-sandbox.api.gouv.fr/api/swagger.yaml
stat:
  lastXdays: 30
  url: https://monitoring.particulier.api.gouv.fr/api/stats/count/particulier.api.gouv.fr?range[@timestamp][gte]=now-30d&match[status-code]=200
  label: Justificatifs papier évités
clients:
  - collectivités
  - ministères
partners:
  - DGFiP
  - CNAF
owner: Incubateur de services numériques (DINSIC)
keywords:
  - Impots
  - Quotient Familial
  - Revenu Fiscal de Référence
  - Adresse
---


## Ne plus demander de pièces justificatives inutiles

Limiter les demandes des pièces justificatives ou informations lorsqu’elles sont détenues par d’autres administrations ( CAF, DGFiP, Pôle Emploi…).

Limiter le risque de fraude documentaire en récupérant des informations certifiées à la source dans un point d'accès unique.


## Accéder aux données de façon sécurisée

L'accès aux données est réalisé au travers de protocoles de communications sécurisés et seuls les opérateurs agréés peuvent se connecter à l'API.

Pour obtenir un agrément, vous devez justifier d'une simplification pour les citoyens, et vous engager à n'accéder aux données personnelles qu'avec *l'accord explicite de l'usager*.


## Comprendre la différence avec FranceConnect

API Particulier et FranceConnect sont deux systèmes indépendants mais complémentaires.

|                | FranceConnect                                | API Particulier                                                           |
|----------------|----------------------------------------------|---------------------------------------------------------------------------|
| Nature         | Fournisseur d'Identité et tiers de confiance | Fournisseur de Données                                                       |
| Identification | Citoyen et Fournisseur de Service            | Fournisseur de Service                                                    |
| Type de donnée | liée à la personne                           | liée à la personne, liée au foyer familial, liée aux parents, aux enfants |


API Particulier et FranceConnect peuvent être utilisés seul ou conjointement.

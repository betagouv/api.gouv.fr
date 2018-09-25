---
title: API Particulier
tagline: Pour accélérer l’ouverture des données personnelles et leur réutilisation, automatisez vos demandes de pièces justificatives
access_link: https://signup.api.gouv.fr/api-particulier
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


## Vos démarches sans pièces justificatives

API Particulier simplifie les démarches des usagers en permettant l’échange d’information les concernant d’une administration à une autre.

Pour les administration, des informations certifiées à la source :
- Affranchissez vous des pièces justificatives
- Réduisez le nombre d’erreurs de saisies
- Écartez le risque de fraude documentaire

Pour l’usager, une démarche 100% dématérialisée :
1. Je me connecte sur le site de ma commune pour réaliser une démarche.
2. En lieu de justificatif de revenu, je saisis mon numéro fiscal et mon numéro d’avis d’imposition.
3. Ma commune récupère immédiatement mon revenu fiscal de référence et je n’ai plus rien à faire !

Plus d'information sur notre site dédié https://particulier.api.gouv.fr/

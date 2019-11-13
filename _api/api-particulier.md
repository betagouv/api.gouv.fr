---
title: API Particulier
tagline: Pour accélérer l’ouverture des données personnelles et leur réutilisation, automatisez vos demandes de pièces justificatives
external_site: https://particulier.api.gouv.fr
contract: OUVERT sous contrat
stat:
  lastXdays: 30
  url: https://monitoring.particulier.api.gouv.fr/api/stats/
  label: justificatifs papier évités
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
  - Justificatif de domicile
  - Signup
score:
  detail:
    access:
      link: https://signup.api.gouv.fr/api-particulier
      description: |
        <p>API Particulier est utilisable sans limitation d'usage par toute collectivité et ministère justifiant de la nécessité de recueillir une information personnelle pour une démarche administrative (justificatif de domicile, revenu fiscal de référence, etc).</p>

        <p>Les demandes d'accès pour API Particulier utilisent signup.api.gouv.fr, un outil mis à disposition pour toutes les API catalogués sur api.gouv.fr.</p>
    rate_limiting:
      description: |
        <p>L'API est disponible à hauteur de 20 appels par secondes et par jetons d'accès.</p>
    contact:
      link: contact@particulier.api.gouv.fr
    doc_tech:
      link: https://particulier.api.gouv.fr/documentation-open-api.yaml
    monitoring:
      link: https://status.particulier.api.gouv.fr
      description: |
        <p>La DINSIC s’engage à ce que le Service soit accessible à 95% et la DINSIC s’engage à améliorer progressivement ce rendement.</p>
---

## Vos démarches sans pièces justificatives

API Particulier simplifie les démarches des usagers en permettant l’échange d’informations les concernant d’une administration à une autre.

Pour les administrations, des informations certifiées à la source :

- Affranchissez-vous des pièces justificatives
- Réduisez le nombre d’erreurs de saisie
- Écartez le risque de fraude documentaire

Pour l’usager, une démarche 100% dématérialisée :

1. Je me connecte sur le site de ma commune pour réaliser une démarche.
2. En lieu de justificatif de revenu, je saisis mon numéro fiscal et mon numéro d’avis d’imposition.
3. Ma commune récupère immédiatement mon revenu fiscal de référence et je n’ai plus rien à faire !

### Informations issues de la DGFiP

- Déclarants du foyer fiscal - Le foyer fiscal se compose du contribuable lui-même, du conjoint ou partenaire de Pacs
- Adresse connue au 1er janvier de l’année d’imposition (exemple au 1er janvier 2018 pour les revenus de 2017)
- Nombre de parts
- Revenu fiscal de référence
- Nombre de personnes à charge
- Situation familiale
- Montant des impots
- Revenu net avant correction
- Revenu imposable
- Revenu brut global
- Date de mise en recouvrement de l’avis d’impôt
- Date d'établissement

NB: seules les données des deux dernières années sont disponibles. Par exemple en 2019, il n'est pas possible d'obtenir de données sur l'année 2017.

### Informations issues de la CAF

- Liste des allocataires
- Liste des enfants
- Adresse au format de la poste
- Valeur du quotient familial
- Année et mois du quotient familial

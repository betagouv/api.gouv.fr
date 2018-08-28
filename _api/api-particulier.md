---
title: API Particulier
tagline: Pour accélérer l’ouverture des données personnelles et leur réutilisation, automatisez vos demandes de pièces justificatives
domain: https://particulier.api.gouv.fr
contract: OUVERT sous contrat
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
  - Justificatif de domicile
description: |
  <p>API Particulier vous permet de <strong>limiter les demandes de pièces justificatives</strong> ou informations lorsqu’elles sont détenues par d’autres administrations et de <strong>limiter le risque de fraude documentaire</strong> en récupérant des informations certifiées à la source.</p>

  <p>En appelant notre API depuis votre téléservice ou depuis votre outil de gestion, vous remplacez un système complexe de gestion des documents par deux simples champs de saisie de secrets par vos usagers. Votre outil récupère ensuite nos données et permet d'afficher une réponse en temps réel à l'utilisateur.</p>

  <h3>Un exemple de cas d'usage: les bourses de collège</h3>

  <p>Pour simplifier les demandes de bourses de collèges, de lycée et d'enseignement supérieur, le Ministère de l'Éducation nationale à remplacé la récupération d'un avis d'imposition par les champs "Numéro fiscal" et "Référence d'avis" (deux informations secrètes présentes sur les avis d'imposition).</p>

  <p>Grâce à un appel à API particulier, le service reccueille ensuite le revenu fiscal de référence du foyer et peut instantanément notifier l'usager du montant de sa bourse. Le service est désormais tout à fait numérique. Le gain est également important pour l'intendant qui n'a plus à vérifier lui-même l'authenticité du document.</p>

  <h3>Informations issues de la DGFiP</h3>

  <ul>
    <li>Déclarants du foyer fiscal - Le foyer fiscal se compose du contribuable lui-même, du conjoint ou partenaire de Pacs</li>
    <li>Adresse connue au 1er janvier de l’année d’imposition (exemple au 1er janvier 2018 pour les revenus de 2017)</li>
    <li>Nombre de parts</li>
    <li>Revenu fiscal de référence</li>
    <li>Nombre de personnes à charge</li>
    <li>Situation familiale</li>
    <li>Montant des impots</li>
    <li>Revenu net avant correction</li>
    <li>Revenu imposable</li>
    <li>Revenu brut global</li>
    <li>Date de mise en recouvrement de l’avis d’impôt</li>
    <li>Date d'établissement</li>
  </ul>

  <h3>Informations issues de la CAF</h3>

  <ul>
    <li>Liste des allocataires</li>
    <li>Liste des enfants</li>
    <li>Adresse au format de la poste</li>
    <li>Valeur du quotient familial</li>
    <li>Année et mois du quotient familial</li>
  </ul>
score:
  total: 5
  detail:
    access:
      link: https://signup.api.gouv.fr/api-particulier
      description: |
        <p>API Particulier est utilisable sans limitation d'usage par toute collectivité et ministère justifiant de la nécessité de receuillir une information personnelle pour une démarche administrative (justificatif de domicile, revenu fiscal de référence, etc).</p>

        <p>Les demandes d'accès pour API Particulier utilisent signup.api.gouv.fr, un outil mis à disposition pour toutes les API catalogués sur api.gouv.fr.</p>
    rate_limiting:
      description: |
        <p>L'API est disponible à hauteur de 20 appels par secondes et par jetons d'accès.</p>
    contact:
      link: contact@particulier.api.gouv.fr
    openapi_definition:
      link: https://particulier-sandbox.api.gouv.fr/api/swagger.yaml
    monitoring:
      link: https://status.particulier.api.gouv.fr
      description: |
        <p>La DINSIC s’engage à ce que le Service soit accessible à 95% et la DINSIC s’engage à améliorer progressivement ce rendement.</p>
---

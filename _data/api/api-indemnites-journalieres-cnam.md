---
title: API Indemnités Journalières de la CNAM
tagline: Accédez au montant des indemnités journalières de l'Assurance Maladie payé à un assuré sur une période.
external_site: https://app.swaggerhub.com/apis/meeoen/apij/1.0-apim
is_open: -1 # -1 means API not open
is_france_connected: 2 # undefined | 1 | 2. 2 means can be used with FC, 2 means has to be used with FC
datapass_link: https://datapass.api.gouv.fr/api-indemnites-journalieres-cnam
access_page: 
  - who:
      - Une assurance
      - Un organisme de prévoyance santé
      - Un organisme complémentaire de santé
      - Une administration partenaire de France Connect
    is_eligible: 0
    description: |
      Cette API est accessible uniquement aux complémentaires santé et assurances partenaires de France Connect. 

      <NextSteps />
      <Button href="https://datapass.api.gouv.fr/api-indemnites-journalieres-cnam">Remplir une demande</Button>
  - who:
      - Autre
    is_eligible: -1
    description: |
      Seules les assurances et complémentaires santé qui sont partenaires de France Connect sont éligibles. 

      Cela étant dit, si vous avez un projet précis :
      <Button href="mailto:partenaires-api-ameli.cnam@assurance-maladie.fr">Contactez-nous pour exposer votre projet</Button>
partners:
  - CNAM
producer: cnam
keywords:
  - assurance maladie
  - arrêt de travail
  - travail
  - droits
  - indemnité
  - indemnisation
  - prévoyance
  - assurance
  - mutuelle
  - banque
  - maladie
  - itt
  - csg
  - crds
content_intro: |
  Cette API présente les montants d'indemnités journalières auxquels ont droit les assurés, grâce au régime général de l’Assurance Maladie.

  ### A quoi sert l’API de droits à l'Assurance Maladie&nbsp;?

  Elle permet de connaître pour un individu **identifié avec FranceConnect**&nbsp;:

  - la période indemnisée
  - le montant journalier de l'indemnité
  - le nombre de jours
  - les retenues CSG et CRDS

  L’utilisation de l’API est soumise à une **convention d’usage** avec la Caisse Nationale d’Assurance Maladie.
rate_limiting_resume: Incluses dans la convention
rate_limiting_description: |
  Les éventuelles limitations d’usage vis-à-vis d’un partenaire sont incluses dans la convention.
#monitoring_link: 
monitoring_description: |
  Une supervision du service en temps réel est disponible à cette adresse.
contact_link: partenaires-api-ameli.cnam@assurance-maladie.fr
doc_tech_link: https://api.swaggerhub.com/apis/meeoen/apij/1.0-apim
themes:
  - Particulier
visits_2019: 3000
#uptime: 
last_update: 17/06/2021
---

### Données

Les données présentes dans l’API, pour chaque individu d’une famille&nbsp;:

| Nom                  | Description                                                                                   |
| -------------------- | --------------------------------------------------------------------------------------------- |
| période              | la période indemnisée                                                                         |
| montant              | le montant journalier de l'indemnité                                                          |
| nombre de jours      | le nombre de jours indemnisés au total                                                        |
| CSG et CRDS          | le montant des retenues CSG et CRDS                                                           |

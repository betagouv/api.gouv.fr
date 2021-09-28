---
title: API Complémentaire Santé Solidaire
tagline: Vérifier si une personne bénéficie de la complémentaire santé solidaire
external_site: https://www.complementaire-sante-solidaire.gouv.fr/
is_open: -1 # -1 means API not open
#datapass_link: 
access_page: 
  - who:
      - Un particulier
    is_eligible: -1
    description: |
      Seules les administrations et les acteurs du secteur sanitaire et social sont habilités à utiliser l'API.

      <Button href="/rechercher-api">Ou vous pouvez rechercher une autre API</Button>
  - who:
      - Une entreprise
    is_eligible: 0
    description: |
      Les partenaires de FranceConnect relevant du secteur sanitaire et social peuvent utiliser l'API en faisant une demande d'accès.

      <NextSteps />
      <Button href="https://datapass.api.gouv.fr/api-complementaire-sante-solidaire">Remplir une demande</Button>
  - who:
      - Une collectivité ou une administration
    is_eligible: 1
    description: |
      Vous pouvez réaliser une demande d'accès à l'API.

      <NextSteps />
      <Button href="https://datapass.api.gouv.fr/api-complementaire-sante-solidaire">Remplir une demande</Button>
producer: mss
keywords:
  - Santé
  - Complementaire
  - Carte vitale
  - CMU
  - ACS
  - Sécurité sociale
  - Prestation
  - Honoraires
  - Assuré
  - Beneficiaire
themes:
  - Santé
  - Particulier
#uptime: 
contact_link: prosanteconnect.editeurs@esante.gouv.fr
doc_tech_external: https://integrateurs-cps.asipsante.fr/pages/prosanteconnect/documentation-fs
last_update: 22/03/2021
---

Description

### À quoi sert cette API ?

Texte

### Données disponibles dans l'API

| Type                       | Données                                                  |
| -------------------------- | -------------------------------------------------------- |
| Identifiant national       | RPPS (ou ADELI)                                          |
| Données sectorielles       | type d'activité (salarié ou libéral) et lieu d'activité. |

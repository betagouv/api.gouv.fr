---
title: API Particulier
tagline: Pour accélérer l’ouverture des données personnelles et leur réutilisation, automatisez vos demandes de pièces justificatives
external_site: https://particulier.api.gouv.fr
is_open: false
access_link: /les-api/api-particulier/demande-acces
access_description: |
  Cette API nécessite une habilitation :
access_page:
  - who:
      - Un particulier ou une entreprise
    is_eligible: -1
    description: |
      Seules les administrations sont habilitées à utiliser API Particulier.
    cta:
      label: Retourner à la page de recherche
      path: /rechercher-api
  - who:
      - Une collectivité ou une administration
    is_eligible: 1
    description: |
      Conformément aux dispositions de [l'article L114-8](https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000031366350&idArticle=LEGIARTI000031367412&dateTexte=&categorieLien=cid) du *code des relations entre le public et l'administration*, seules les administrations sont habilitées à échanger entre elles des informations ou données strictement nécessaires pour traiter une démarche.

      Pour obtenir un agrément, vous devez **justifier d'une simplification pour les citoyens**, et vous engager à n'accéder aux données personnelles qu'avec **l'accord explicite** de l'usager.

      ** Pour remplir votre demande, vous aurez besoin de : **
      - votre numéro SIRET
      - le cadre juridique, en l’occurence [L114-8](https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000031366350&idArticle=LEGIARTI000031367412&dateTexte=&categorieLien=cid)
      - la description du service justifiant une simplication pour les citoyens
      - les coordonnées de l'équipe
      - les coordonnées de votre délégué à la protection des données
    cta:
      label: Remplir une demande
      path: https://signup.api.gouv.fr/api-particulier
  - who:
      - Un éditeur de logiciel
    is_eligible: 0
    description: |
      Si vous êtes **éditeur de logiciels** et agissez pour le compte d'une administration ou d'une collectivité, vous pouvez remplir une demande d’accès à l’API Particulier vous-même pour l'entité que vous représentez, dans le cadre de [l'article L114-8](https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000031366350&idArticle=LEGIARTI000031367412&dateTexte=&categorieLien=cid) du *code des relations entre le public et l'administration*.

      Lors de votre demande vous devrez **justifier** dans quelle mesure l'entité pour laquelle vous opérez rentre dans ce cadre juridique.

      **Pour remplir votre demande, vous aurez besoin de :**
      - votre numéro SIRET
      - le cadre juridique, en l’occurence [L114-8](https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000031366350&idArticle=LEGIARTI000031367412&dateTexte=&categorieLien=cid)
      - la description du service justifiant une simplication pour les citoyens
      - les coordonnées de l'équipe
      - les coordonnées du délégué à la protection des données **de l'entité pour laquelle vous opérez**
    cta:
      label: Remplir une demande
      path: https://signup.api.gouv.fr/api-particulier
stat:
  lastXdays: 30
  url: https://monitoring.particulier.api.gouv.fr/api/stats/
  label: justificatifs papier évités
partners:
  - DGFiP
  - CNAF
owner: Direction interministérielle du numérique
owner_acronym: DINUM
keywords:
  - Impots
  - Quotient Familial
  - Revenu Fiscal de Référence
  - Adresse
  - Justificatif de domicile
  - Signup
rate_limiting_resume: 20 appels / seconde / jeton
rate_limiting_description: |
  <p>L'API est disponible à hauteur de 20 appels par secondes et par jetons d'accès.</p>
monitoring_link: https://status.particulier.api.gouv.fr
monitoring_description: |
  <p>La DINUM s’engage à ce que le Service soit accessible à 95% et la DINUM s’engage à améliorer progressivement ce rendement.</p>
contact_link: contact@particulier.api.gouv.fr
doc_tech_link: https://particulier.api.gouv.fr/documentation-open-api.yaml
themes:
  - Particulier
visits_2019: 8642
uptime: 99.992 # https://uptimerobot.com/dashboard#777746216 * https://uptimerobot.com/dashboard#778826562 / 2
last_update: 10/12/2019
---

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

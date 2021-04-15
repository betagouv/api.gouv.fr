---
title: API Particulier
tagline: Accédez aux données fiscales (DGFIP), familiales (CAF), au statut pôle-emploi et au statut étudiant des particuliers pour simplifier des démarches administratives
external_site: https://particulier.api.gouv.fr
is_open: -1 # -1 means API not open
datapass_link: https://datapass.api.gouv.fr/api-particulier
access_page:
  - who:
      - Un particulier ou une entreprise
    is_eligible: -1
    description: |
      Seules les administrations sont habilitées à utiliser API Particulier.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Une collectivité ou une administration
    is_eligible: 1
    description: |
      Conformément aux dispositions de <External href="https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000031366350&idArticle=LEGIARTI000031367412&dateTexte=&categorieLien=cid">l'article L114-8</External> du *code des relations entre le public et l'administration*, seules les administrations sont habilitées à échanger entre elles des informations ou données strictement nécessaires pour traiter une démarche.

      Pour obtenir un agrément, vous devez **justifier d'une simplification pour les citoyens**, et vous engager à
      n'accéder aux données personnelles qu'avec **l'accord explicite** de l'usager.

      <NextSteps />
      <Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande</Button>
  - who:
      - Un éditeur de logiciel
    is_eligible: 0
    description: |
      Si vous êtes **éditeur de logiciels** et agissez pour le compte d'une administration ou d'une collectivité, vous pouvez remplir une demande d’accès à l’API Particulier vous-même pour l'entité que vous représentez, dans le cadre de <External href="https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000031366350&idArticle=LEGIARTI000031367412&dateTexte=&categorieLien=cid">l'article L114-8</External> du *code des relations entre le public et l'administration*.

      Lors de votre demande vous devrez **justifier** dans quelle mesure l'entité pour laquelle vous opérez rentre dans ce cadre juridique.

      <NextSteps is_editeur />
      <Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande</Button>
stat:
  lastXdays: 30
  url: https://monitoring.particulier.api.gouv.fr/api/stats/
  label: justificatifs papier évités
partners:
  - DGFiP
  - CNAF
  - Pôle emploi
  - mesri
producer: dinum
keywords:
  - Impots
  - Quotient Familial
  - statut
  - étudiant
  - demandeur
  - emploi
  - ccas
  - Revenu Fiscal de Référence
  - Adresse
  - Justificatif de domicile
rate_limiting_resume: 20 appels / seconde / jeton
rate_limiting_description: |
  L'API est disponible à hauteur de 20 appels par secondes et par jetons d'accès.
monitoring_link: https://status.particulier.api.gouv.fr
monitoring_description: |
  La DINUM s’engage à ce que le Service soit accessible à 95% et la DINUM s’engage à améliorer progressivement ce rendement.
contact_link: contact@particulier.api.gouv.fr
doc_tech_link: https://particulier.api.gouv.fr/open-api.yml
themes:
  - Particulier
visits_2019: 8642
uptime: 99.992 # https://uptimerobot.com/dashboard#777746216 * https://uptimerobot.com/dashboard#778826562 / 2
last_update: 31/03/2021
content_intro: |
  API Particulier facilite l'accès des administrations aux données fiscales (DGFIP), familiales (CAF), au statut pôle-emploi et au statut étudiant d'un citoyen, pour simplifier les démarches administratives mises en oeuvre par les collectivités et les administrations.

  ### A quoi sert l’API Particulier ?

  Permet aux administrations d'accéder à des informations **certifiées à la source** et ainsi :

  - de s’affranchir des pièces justificatives lors des démarches en ligne
  - de réduire le nombre d’erreurs de saisie
  - d'écarter le risque de fraude documentaire

  Du point de vue de l’usager, une démarche qui utilise API Particulier s'apparente à ça :

  1. Je me connecte sur le site de ma commune pour réaliser une démarche.
  2. En lieu de justificatif de revenu, je saisis mon numéro fiscal et mon numéro d’avis d’imposition.
  3. Ma commune récupère immédiatement mon revenu fiscal de référence et je n’ai plus rien à faire !
---

### Données accessibles dans l'API

| Nom                       | Description                                                                            | Origine des données                                                               |
| ------------------------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| RFR                       | Le revenu fiscal de référence (RFR) de l'année en cours et le nombre de parts du foyer | DGFIP                                                                             |
| Avis d’imposition         | Montant d'impôt, revenu brut, net, imposable, date de recouvrement et d'établissement  | DGFIP                                                                             |
| Déclarants                | Les nom, prénoms, date de naissance des déclarants du foyer fiscal                     | DGFIP                                                                             |
| Adresse fiscale           | L'adresse fiscale structurée ainsi que les coordonnées GPS                             | DGFIP                                                                             |
| Quotient familial         | Le quotient familial (QF) du mois précédent pour la famille                            | CAF                                                                               |
| Composition familiale     | Liste des parents et des enfants de la famille (avec nom, prénoms, date de naissance)  | CAF                                                                               |
| Adresse                   | L'adresse structurée détenue par la CAF                                                | CAF                                                                               |
| Statut demandeur d'emploi | Si applicable, les informations de statut demandeur d‘emploi d‘un individu             | Pôle emploi                                                                       |
| Statut étudiant           | Si applicable, les informations de statut étudiant d‘un individu                       | Ministère de l'enseignement supérieur, de la recherche et de l'innovation (MESRI) |

Pour plus d’informations techniques sur la structuration des données, vous pouvez <External href='/documentation/api-particulier'>consulter la documentation technique</External>

### Précisions sur les données fiscales (DGFiP)

Seules les données des deux dernières années sont disponibles. Par exemple en 2019, il n'est pas possible d'obtenir de données sur l'année 2017.

Les déclarants du foyer fiscal sont la(le) contribuable elle(lui)-même et le(la) conjoint(e) ou partenaire de Pacs.

L’Adresse est celle connue au 1er janvier de l’année d’imposition (exemple au 1er janvier 2018 pour les revenus de 2017)

### Précisions sur les données Statut étudiant (MESRI)

Sont disponibles les données des étudiants inscrits dans un établisement sous tutelle du ministère de l'enseignement supérieur, et sur le champ des étudiants bacheliers en 2020 ou déjà inscrits dans l'enseignement supérieur en 2018-2019 ou 2019-2020.

La couverture des établissements du champ des étudiants sera progressivement complétée d'ici la rentrée 2022.

### Conditions générales d'utilisation

Les conditions générales d'utilisation sont disponibles à [cette adresse](http://api.gouv.fr/resources/CGU%20API%20Particulier.pdf).

---
title: API Entreprise
tagline: Simplifier les démarches des entreprises en récupérant pour elles leurs documents administratifs
external_site: https://entreprise.api.gouv.fr/
is_open: -1 # -1 means API not open
datapass_link: https://signup.api.gouv.fr/api-entreprise
access_page:
  - who:
      - Un particulier
    is_eligible: -1
    description: |
      Seules les administrations et certaines sociétés sont habilitées à utiliser API Entreprise.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Une collectivité ou une administration
    is_eligible: 1
    description: |
      Si vous êtes une collectivité ou une administration, vous pouvez remplir une demande d’accès à l’API Entreprise vous-même pour l'entité que vous représentez.

      Lors de votre demande vous devrez **renseigner le cadre juridique (un texte ou délibération/décision)** qui légitime l'entité pour laquelle vous opérez à recevoir ces données.

      <NextSteps />
      <Button href="https://signup.api.gouv.fr/api-entreprise">Remplir une demande</Button>
  - who:
      - Une entreprise
    is_eligible: 0
    description: |
      Seule les **sociétés chargées d’une mission de service public** sont éligibles.

      Lors de votre demande vous devrez **justifier** dans quelle mesure vous rentrez dans ce cadre juridique.

      <NextSteps />
      <Button href="https://signup.api.gouv.fr/api-entreprise">Remplir une demande</Button>
  - who:
      - Un éditeur de logiciel
    is_eligible: 0
    description: |
      Si vous êtes **éditeur de logiciels** et agissez pour le compte d'une administration ou d'une collectivité, vous pouvez remplir vous même une demande d'accès à l'API entreprise pour l'entité que vous représentez.

      Lors de votre demande vous devrez **renseigner le cadre juridique (un texte ou délibération/décision)** qui légitime  l'entité pour laquelle vous opérez à recevoir ces données.

      <NextSteps is_editeur />
      <Button href="https://signup.api.gouv.fr/api-entreprise">Remplir une demande</Button>
stat:
  lastXdays: 30
  url: https://dashboard.entreprise.api.gouv.fr/api/watchdoge/stats/last_30_days_usage
  label: informations non redemandées aux entreprises
partners:
  - DGFiP
  - ACOSS
  - CNETP
  - INSEE
  - INFOGREFFE
  - FNTP
  - MSA
  - OPQIBI
  - PRO BTP
  - QUALIBAT
  - Ministère intérieur
  - INPI
  - AGEFIPH
  - Banque de france
  - ADEME
owner: Direction interministérielle du numérique
owner_acronym: DINUM
keywords:
  - Établissement
  - Entreprise
  - Certification
rate_limiting_resume: 2000 appels / 10 minutes / IP
rate_limiting_description: |
  Actuellement, le nombre d’appels aux API Entreprise est limité à 2000 requêtes tranche de 10 minutes par IP. Au delà, l’adresse IP est bannie de nos serveurs, et ces derniers ne répondent alors simplement pas. Si vous pensez être dans cette situation, vous pouvez nous contacter à support@entreprise.api.gouv.fr.
monitoring_link: https://dashboard.entreprise.api.gouv.fr
contact_link: support@entreprise.api.gouv.fr
doc_tech_link: https://entreprise.api.gouv.fr/v2/open-api.yml
doc_tech_external: https://entreprise.api.gouv.fr/catalogue/
themes:
  - Entreprise
visits_2019: 12610
last_update: 14/09/2020
---

[L’API Entreprise](https://entreprise.api.gouv.fr/) est une plateforme d’échange opérée par la DINUM qui met à disposition des opérateurs publics et des administrations, des données et des documents administratifs de référence, relatifs aux entreprises et association, qui sont délivrés par les administrations et les organismes publics, à fin de simplifier les démarches administratives et la gestion des dossiers.

Composante de l’État plateforme, l’accès à l’API Entreprise est modérée et régulée par la DINUM, qui attribue à chaque client des autorisations de récupération d’informations selon la nature des démarches à traiter (Marchés publics, aides publiques,…)

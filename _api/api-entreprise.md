---
title: API Entreprise
tagline: Simplifier les démarches des entreprises en récupérant pour elles leurs documents administratifs
external_site: https://entreprise.api.gouv.fr/
is_open: false
access_link: /les-api/api-entreprise/demande-acces
access_description: |
  Cette API nécessite une habilitation :
access_page:
  - who:
      - Un particulier
    is_eligible: -1
    description: |
      Seules les administrations sont habilitées à utiliser API Particulier.

      <Button href="/rechercher-api">Retourner à la page de recherche</Button>
  - who:
      - Une collectivité ou une administration
    is_eligible: 1
    description: |
      Si vous êtesune collectivité ou une administration, vous pouvez remplir une demande d’accès à l’API Entreprise vous-même pour l'entité que vous représentez.

      Lors de votre demande vous devrez **renseigner un texte ou délibération/décision** qui légitime  l'entité pour laquelle vous opérez à recevoir ces données.

      <NextSteps />
      <Button href="https://signup.api.gouv.fr/api-entreprise">Remplir une demande</Button>
  - who:
      - Une entreprise
    is_eligible: 0
    is_editeur: true
    description: |
      Seule les **sociétés chargées d’une mission de service public** sont éligibles.

      Lors de votre demande vous devrez **justifier** dans quelle mesure vous rentrez dans ce cadre juridique.

      <NextSteps />
      <Button href="https://signup.api.gouv.fr/api-entreprise">Remplir une demande</Button>
  - who:
      - Un éditeur de logiciel
    is_eligible: 0
    is_editeur: true
    description: |
      Si vous êtes **éditeur de logiciels** et agissez pour le compte d'une administration ou d'une collectivité, vous pouvez remplir une demande d’accès à l’API Entreprise vous-même pour l'entité que vous représentez.

      Lors de votre demande vous devrez **renseigner un texte ou délibération/décision** qui légitime  l'entité pour laquelle vous opérez à recevoir ces données.

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
  - Signup
rate_limiting_resume: 2000 appels / 10 minutes / IP
rate_limiting_description: |
  <p>Actuellement, le nombre d’appels aux API Entreprise est limité à 2000 requêtes tranche de 10 minutes par IP. Au delà, l’adresse IP est bannie de nos serveurs, et ces derniers ne répondent alors simplement pas. Si vous pensez être dans cette situation, vous pouvez nous contacter à support@entreprise.api.gouv.fr.</p>
monitoring_link: https://dashboard.entreprise.api.gouv.fr
contact_link: support@entreprise.api.gouv.fr
doc_tech_external: https://doc.entreprise.api.gouv.fr
themes:
  - Entreprise
visits_2019: 12610
last_update: 10/12/2019
---

[L’API Entreprise](https://entreprise.api.gouv.fr/) est une plateforme d’échange opérée par la DINUM qui met à disposition des opérateurs publics et des administrations, des données et des documents administratifs de référence, relatifs aux entreprises et association, qui sont délivrés par les administrations et les organismes publics, à fin de simplifier les démarches administratives et la gestion des dossiers.

Composante de l’État plateforme, l’accès à l’API Entreprise est modérée et régulée par la DINUM, qui attribue à chaque client des autorisations de récupération d’informations selon la nature des démarches à traiter (Marchés publics, aides publiques,…)

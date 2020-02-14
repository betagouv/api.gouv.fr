---
title: API Entreprise
tagline: Simplifier les démarches des entreprises en récupérant pour elles leurs documents administratifs
external_site: https://entreprise.api.gouv.fr/
contract: OUVERT sous contrat
stat:
  lastXdays: 30
  url: https://dashboard.entreprise.api.gouv.fr/api/watchdoge/stats/last_30_days_usage
  label: informations non redemandées aux entreprises
clients:
  - Collectivités
  - Administrations
  - Ministères
  - Places de marchés
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
themes: 
  - Entreprise
score:
  detail:
    access:
      link: https://signup.entreprise.api.gouv.fr
    rate_limiting:
      resume: 2000 appels / 10 minutes / IP
      description: |
        <p>Actuellement, le nombre d’appels aux API Entreprise est limité à 2000 requêtes tranche de 10 minutes par IP. Au delà, l’adresse IP est bannie de nos serveurs, et ces derniers ne répondent alors simplement pas. Si vous pensez être dans cette situation, vous pouvez nous contacter à support@entreprise.api.gouv.fr.</p>
    contact:
      link: support@entreprise.api.gouv.fr
    doc_tech:
      external: https://doc.entreprise.api.gouv.fr
    monitoring:
      link: https://dashboard.entreprise.api.gouv.fr
visits_2019: 12610
last_update: 10/12/2019
---

[L’API Entreprise](https://entreprise.api.gouv.fr/) est une plateforme d’échange opérée par la DINUM qui met à disposition des opérateurs publics et des administrations, des données et des documents administratifs de référence, relatifs aux entreprises et association, qui sont délivrés par les administrations et les organismes publics, à fin de simplifier les démarches administratives et la gestion des dossiers.

Composante de l’État plateforme, l’accès à l’API Entreprise est modérée et régulée par la DINUM, qui attribue à chaque client des autorisations de récupération d’informations selon la nature des démarches à traiter (Marchés publics, aides publiques,…)

L'API Entreprise est accessible ici : [https://entreprise.api.gouv.fr/](https://entreprise.api.gouv.fr/)

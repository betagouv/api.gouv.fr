---
title: API Aides Territoires
tagline: Connaître toutes les aides publiques existantes pour une thématique selon le territoire
external_site: https://aides-territoires.beta.gouv.fr/
is_open: 1 # 1 means API is fully open
producer: mtes
partners: 
  - Ministère de la Cohésion des Territoires
keywords:
  - Energie
  - Environnement
  - Subvention
  - Aides
  - Dotation
  - Territoire
  - Collectivité
  - Locale
  - Communes
  - Région
  - Département
  - ANCT
  - Transition
#rate_limiting_resume: 
themes:
  - Administration & législation
contact_link: https://aides-territoires.beta.gouv.fr/contact/
doc_tech_link: https://aides-territoires.beta.gouv.fr/api/schema/?version=1.3
last_update: 07/09/2021
---

Aides Territoires est un moteur de recherche qui permet de retrouver près de 3000 dispositifs d'aides publiques existants en fonction du territoire. Ces aides proviennent de plus de 600 porteurs :

- collectivités territoriales,
- agences ou établissements publics,
- partenaires du secteur privé.

### À quoi sert l’API Aides Territoires ?

Cette API permet d'afficher les résultats de recherches d'aides, en fonction de leur thématique, de leur localisation, et d'un ensemble de sous thématiques.
La description des aides renvoie plusieurs informations : descriptif de l'aide, nature, critères d'éligibilité...

L'API est librement accessible, en revanche **elle ne permet pas de publier directement une aide**.

👉 Pour publier un dispositif d'aide, rendez-vous sur le [portail Aides Territoires](https://aides-territoires.beta.gouv.fr/comptes/inscription/?next=/aides/publications/)

### Quelles sont les données contenues dans l'API Aides Territoires ?

On retrouve - entre autres - pour chaque dispositif d'aide répertorié :

| Nom de la donnée      | Description                        |
| --------------------- | ---------------------------------- |
| Porteur               | Qui propose cette aide ?           |
| Description           | Description de l'aide existante    |
| Nature                | Par exemple : aide financière      |
| Zone géographique     | Zone couverte par le dispositif    |
| Critères d'éligibilité| Les conditions pour en bénéficier  |

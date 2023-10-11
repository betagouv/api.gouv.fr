---
title: API Aides Territoires
tagline: Faciliter la recherche d'aides des collectivités territoriales et de leurs partenaires locaux
external_site: https://aides-territoires.beta.gouv.fr/
is_open: 1 # 1 means API is fully open
producer: dgaln
partners: 
  - ANCT
  - France Mobilités
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

Elle permet en tant que réutilisateur de données de récupérer les aides et leurs critères disponibles sur Aides-territoires.

### Alimenter l'API ?

Pour garantir une information de qualité, Aides-territoires s’appuie sur les données référencées par les porteurs d’aides financières et d’ingénierie et les animateurs locaux via le [formulaire en ligne](https://aides-territoires.beta.gouv.fr/aides/publier/), après la création d'un compte porteur sur Aides-territoires. 

Si le porteur dispose déjà d’une base de données structurée et porte de nombreux dispositifs, Aides Territoires met en place un flux automatique. 
[Contacter l'équipe](mailto:aides-territoires@beta.gouv.fr) pour plus d'informations.

### Quelles sont les données contenues dans l'API Aides Territoires ?

On retrouve - entre autres - pour chaque dispositif d'aide répertorié :

| Nom de la donnée      | Description                        |
| --------------------- | ---------------------------------- |
| Porteur               | Qui propose cette aide ?           |
| Description           | Description de l'aide existante    |
| Nature                | Par exemple : aide financière      |
| Zone géographique     | Zone couverte par le dispositif    |
| Critères d'éligibilité| Les conditions pour en bénéficier  |
| Lien vers la démarche | Lien pour candidater à l'aide      |

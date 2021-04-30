---
title: API Professionnels BIO
tagline: Accéder à la liste des producteurs, transformateurs et commercants engagés en bio et notifiés auprès de l’Agence Bio
producer: agence-bio
category: public
is_open: 1
external_site: https://annuaire.agencebio.org/
keywords:
  - CartoBio
  - Agriculture
  - parcelles
  - Bio
  - Biologique
  - Agence Bio
  - Territoire
contact_link: dsi@agencebio.org
doc_tech_link: https://back.agencebio.org/api/gouv_api_swagger.json
partenaires:
  - Ministère de l’Agriculture et de l’Alimentation
  - Ministère de la Transition Écologique
  - Institut National de l’Origine et de la Qualité (INAO)
  - Organisme Français de la Biodiversité
  - Etalab
  - Beta.gouv
  - Les Organismes de Certification de l’Agriculture Biologique
themes:
  - Environnement
  - Agriculture
last_update: 21/09/2020
rate_limiting_resume: 50 appels / seconde / IP
content_intro: |
  Accéder à la liste des opérateurs économiques engagés en bio et notifiés auprès de l’Agence Bio avec les principales informations publiques qui leur sont rattachées (identification de l’établissement, activité, produits certifiés, lien vers le certificat bio)

  ### À quoi sert l’API Professionnels BIO ?

  L’API peut être utilisée de deux manières :

  - rechercher une liste d’opérateurs bio selon des critères géographique et d’activité,
  - rechercher un opérateur de manière unitaire en fonction de leur identifiant SIRET, n° BIO ou de leur raison sociale.
---

### Données de l’API

Chaque recherche retourne des informations détaillées sur les opérateurs : adresses, activités, produits certifiés, organisme certificateur, lien vers le certificat

Voici les données accessibles :

| Donnée                   | Description                                                                                                    |
| ------------------------ | -------------------------------------------------------------------------------------------------------------- |
| Numero bio               | Identifiant fonctionnel de l'opérateur BIO utilisé également dans d'autres outils de l'administration publique |
| Siret                    | SIRET renseigné par l'opérateur (14 caractères)                                                                |
| Informations générales   | dénomination, code NAF, gérant                                                                                 |
| Catégorie de l'opérateur | Vente directe, Grossiste, Grande et moyenne surfce, magasin spécialisé, Artisant/Commerçant, Restaurant        |
| Adresse(s)               | Liste des adresses de l'opérateur (minimum le siège social)                                                    |
| Production(s)            | Liste des productions certifiées bio de l'opérateur (plusieurs possibles)                                      |
| Activité(s)              | Liste des activités BIO de l'opérateur (plusieurs activités possibles)                                         |
| Certificat(s)            | Liste des informations relatives à la certification de l'opérateur                                             |
| Site                     | Site officiel de l'opérateur (hors réseaux sociaux)                                                            |

#### D'où vient la donnée ?

Ici il serait interessant de développer la collecte des informations par l'agence BIO, auprès des organismes certificateurs

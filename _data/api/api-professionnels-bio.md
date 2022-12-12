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
  - Annuaire
contact_link: dsi@agencebio.org
doc_tech_link: https://opendata.agencebio.org/api/gouv_api_swagger.json
#partners:
themes:
  - Environnement
  - Agriculture
  - Entreprise
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
| Catégorie de l'opérateur | Vente directe, Grossiste, Grande et moyenne surface, magasin spécialisé, Artisant/Commerçant, Restaurant        |
| Adresse(s)               | Liste des adresses de l'opérateur (minimum le siège social)                                                    |
| Production(s)            | Liste des productions certifiées bio de l'opérateur (plusieurs possibles). Un état apporte une information sur chaque production (**AB** : Production bio, **C1** : Production en 1ère année de conversion, **C2** : Production en 2ème année de conversion, **C3** : Production en 3ème année de conversion, **CS** : Animaux en conversion simultanée avec les terres agricoles, **CNS** : Animaux en conversion non simultanée avec les terres agricoles, **EAC** : En cours de contrôle)                                     |
| Activité(s)              | Liste des activités BIO de l'opérateur (plusieurs activités possibles)                                         |
| Certificat(s)            | Lien vers les certificats en ligne de l’opérateur                                                              |
| Site                     | Site officiel de l'opérateur et liens vers les pages des réseaux sociaux                                       |

#### D'où vient la donnée ?

Les données mises à disposition sont directement issues des organismes agréés pour la certification des opérateurs. Elles sont mises à jour lors des contrôles.

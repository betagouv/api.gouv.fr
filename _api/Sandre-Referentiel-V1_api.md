---
title: API Référentiel SANDRE Version 1  # nom commercial de l'API
tagline: L'API Sandre Référentiel version 1 donne accès à l'ensemble des jeux de données de référence diffusé par le Service d'Administration Nationale des Données et Référentiels sur l'Eau (SANDRE)  # une phrase maximum
owner: OIEau/AFB  # producteur de l'API
logo: logoSandre.png  # URL d'un logo de l'API
stat:
  url:  # adresse à laquelle un nombre d'appels à l'API est publié, en content-type application/json
  label:   # description d'un appel à l'API
  lastXdays:  # nombre de jours sur lequel les appels à l'API sont comptabilisés
clients:  # types d'entités habilitées à utiliser l'API
  - particuliers  # texte libre en minuscules
  - entreprises  # ajoutez ou supprimez des types d'entités
  - collectivités
  - ministères
partners:  # liste de co-producteurs de l'API
  - Producteurs du Système d'Information sur l'Eau (SIE)  # texte libre
keywords: # utilisé dans la recherche
  - Eau
  - Hydrométrie
  - Cours d'eau
  - Paramètre
  - Masse d'eau
  - Taxon
  - Appellation de taxons
 
score:
  detail:
    access:
      is_open: true
      link: # URL d'une page de demande d'accès si l'API est à accès restreint
    rate_limiting:
      description: 
    contact:
      link: sandre@sandre.eaufrance.fr #moyen de contact, soit un mail, soit un lien vers formulaire de contact
    doc_tech:
      link: # URL de la documentation au format OpenAPI <https://github.com/OAI/OpenAPI-Specification>
      external: https://api.sandre.eaufrance.fr/referentiels/v1/
    monitoring:
      link:  # URL d'une page qui affiche le statut
      description: |
        <p>L'OIEau s’engage à ce que ce service soit accessible à 95% et l'OIEau s’engage à améliorer progressivement ce rendement.</p>
---

## Description de l'API

L'API Référentiel version 1 donne accès librement à l'ensemble des jeux de données de référence diffusé par le Service d'Administration Nationale des Données et Référentiels sur l'Eau (SANDRE) selon la [nomenclature SANDRE n°373](http://id.eaufrance.fr/nsa/373).

La recherche peut être unitaire ou multicritères sur les données courantes et historisées.

Description
L'API référentiel permet d'accéder à tous les objets - sans leurs géométries - des référentiels diffusés par le SANDRE. Cette API est RESTful c'est-à-dire qu'elle respecte les préconisations de l'architecture REST.

Le point d'accès à cette API (endpoint) est : https://api.sandre.eaufrance.fr/referentiels/v1/

L'interface de cette API vous aide à construire et à exécuter votre requête sur ces référentiels. Ces interfaces sont inutiles si vous êtes capables de formuler votre requête selon les modèles expliqués dasn l'interface. Les URI d'appel de l'API sont toujours composées du endpoint suivi du nom ou code du référentiel à interroger. Les référentiels utilisables proviennent des mnémoniques de la [nomenclature SANDRE n°373](http://id.eaufrance.fr/nsa/373).

Par exemple, l'adresse https://api.sandre.eaufrance.fr/referentiels/v1/appeltaxon vous permet d'extraire toute ou partie du référentiel SANDRE des appellations de taxon.

Licences
Cette API n'a pas de restriction d'accès. Licence Ouverte est soumise à la licence « Licence Ouverte / Open Licence version 2.0 » conçue par Etalab, organisme chargé de coordonner l’action des services de l’État et de ses établissements publics pour faciliter la réutilisation la plus large possible de leurs informations publiques, via le portail interministériel data.gouv.fr



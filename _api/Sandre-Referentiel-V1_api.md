---
title: API Référentiel SANDRE Version 1 # nom commercial de l'API
tagline: L'API Sandre Référentiel version 1 donne accès à l'ensemble des jeux de données de référence diffusé par le Service d'Administration Nationale des Données et Référentiels sur l'Eau (SANDRE)  # une phrase maximum
owner: OIEau/AFB  # producteur de l'API
category:  # type de donnée exposée, voir api_category dans le fichier _config.yml
contract: OUVERT sous contrat  # peut être "OUVERT" ou "OUVERT sous contrat"
logo: logoSandre.png # URL d'un logo de l'API
doc_tech:  # URL de la documentation au format OpenAPI <https://github.com/OAI/OpenAPI-Specification>
contact:  sandre@sandre.eaufrance.fr #moyen de contact, soit un mail, soit un lien vers formulaire de contact
doc_tech: https://api.sandre.eaufrance.fr/referentiels/v1/ # URL de la documentation technique de l'API au format HTML
access_link:  # URL d'une page de demande d'accès si l'API est à accès restreint
stat:
  url:  # adresse à laquelle un nombre d'appels à l'API est publié, en content-type application/json
  label: # description d'un appel à l'API
  lastXdays:  # nombre de jours sur lequel les appels à l'API sont comptabilisés
clients:  # types d'entités habilitées à utiliser l'API
  - particuliers  # texte libre en minuscules
  - entreprises  # ajoutez ou supprimez des types d'entités
  - collectivités
  - ministères
partners:  # liste de co-producteurs de l'API
  - Producteurs du Système d'Information sur l'Eau (SIE) # texte libre
keywords: 
- eau
- référentiel 
- Tronçon hydrographique de vigilance crues
- Station hydrométrique de vigilance crues
- Cours d'eau
- Commune administrative
- Département administratif
- Fraction analysée
- Intervenant
- Masse d'eau
- Méthode
- Paramètre
- Plan d'eau
- Région hydrographique
- Région administrative
- Dispositifs de collecte (dont réseaux de mesure)
- Entités hydrogéologiques
- Secteur hydrographique
- Sous-secteur hydrographique
- Support
- Taxon
- Unité de référence
- Zone hydrographique
- Groupes de paramètres
- Dispositif de collecte
- Piézométrie
- Groupe de paramètres
- Nomenclature
- Appellation de taxons
- Groupe d'appellations de taxons
# utilisé dans la recherche
---
## Description de l'API

L'API Référentiel version 1 donne accès librement à l'ensemble des jeux de données de référence diffusé par le Service d'Administration Nationale des Données et Référentiels sur l'Eau (SANDRE) selon la nomenclature SANDRE n°373 http://id.eaufrance.fr/nsa/373.

La recherche peut être unitaire ou multicritères sur les données courantes et historisées.

Description
L'API référentiel permet d'accéder à tous les objets - sans leurs géométries - des référentiels diffusés par le SANDRE. Cette API est RESTful c'est-à-dire qu'elle respecte les préconisations de l'architecture REST.

Le point d'accès à cette API (endpoint) est : https://api.sandre.eaufrance.fr/referentiels/v1/

L'interface de cette API vous aide à construire et à exécuter votre requête sur ces référentiels. Ces interfaces sont inutiles si vous êtes capables de formuler votre requête selon les modèles expliqués dasn l'interface. Les URI d'appel de l'API sont toujours composées du endpoint suivi du nom ou code du référentiel à interroger. Les référentiels utilisables proviennent des mnémoniques de la nomenclature SANDRE n°373 http://id.eaufrance.fr/nsa/373.

Par exemple, l'adresse https://api.sandre.eaufrance.fr/referentiels/v1/appeltaxon vous permet d'extraire toute ou partie du référentiel SANDRE des appellations de taxon.

Licences
Cette API n'a pas de restriction d'accès. Licence Ouverte est soumise à la licence « Licence Ouverte / Open Licence version 2.0 » conçue par Etalab, organisme chargé de coordonner l’action des services de l’État et de ses établissements publics pour faciliter la réutilisation la plus large possible de leurs informations publiques, via le portail interministériel data.gouv.fr

---
title: API Look4 Géoportail
tagline: la recherche géographique multithématique du Géoportail - adresses, lieux, cadastre, points routiers, etc
is_open: 1 # -1 means API not open
category: Public
layout: api
producer: ign
doc_tech_external: https://ignf.github.io/look4/latest/jsdoc/
keywords:
  - cadastre
  - adresse
  - lieux-dits habités
  - lieux-dits inhabités
  - points routiers
contact_link: contact.geoservices@ign.fr
themes:
  - Géographie
visits_2019: 1266
last_update: 15/05/2018
---

### Recherche géographique multithématique - adresses, lieux, cadastre, points routiers etc

Look4 est une API de recherche proposée par l’IGN qui fournit une interface unique à l’utilisateur pour de multiples sources de données. Look4 sert les besoins du site Géoportail, mais est disponible pour tout site ou application.

Look4 permet, en un seul outil, de faire des recherches sur de nombreuses sources de données géolocalisées préconfigurées, telles que des adresses, des parcelles, des lieux-dits, des contenus du Géoportail, du Géocatalogue ou de data.gouv.fr, ainsi que des index spécialisés tels que les points de repère routiers.

Look4 propose donc une recherche multidimensionnelle via une interface unique et simplifiée.

Les sources de données proposées par Look4 sont de deux natures :

- des sources indexées directement par Look4 ;
- des web services de recherche tiers existants.

Ces sources s’enrichissent progressivement : il est possible de solliciter l’IGN (en écrivant à l’adresse contact.geoservices@ign.fr) pour en rajouter de nouvelles.

### Comment s’utilise Look4 ?

Look4 propose à l’utilisateur une API REST en JSON qui fournit des méthodes pour :

- connaître les données mises à disposition de l’utilisateur (API de découverte) ;
- effectuer des recherches dans les données selon les critères de l’utilisateur (API de recherche).

L’accès à Look4 se fait par les URL suivantes : `https://wxs.ign.fr/VOTRE_CLE_API/look4/user/discover` (API de découverte) et `https://wxs.ign.fr/VOTRE_CLE_API/look4/user/search` (API de recherche)

La documentation complète de l’API est disponible à la page : https://ignf.github.io/look4/latest/jsdoc

Look4 est disponible pour test sur la clé “beta” de l’IGN : `https://wxs.ign.fr/beta/look4/user/discover` et `https://wxs.ign.fr/beta/look4/user/search`. Une clé d’accès pérenne aux ressources de Look4 peut, comme pour l’accès à l’ensemble des ressources du Géoportail, être obtenue sur l’Espace professionnel (http://professionnels.ign.fr).

### Les conditions d'utilisation de Look4 et de ses ressources

L'utilisation de Look4 est gratuite pour l'Etat et ses EPA, les collectivités, les EPCI à fiscalité propre et les SDIS décision n°2018/241 de l'institut).
Pour les autres utilisateurs, et dans un contexte d'usage grand public, l'utilisation gratuite de Look4 est possible dans la limite de 2M transactions par an (10 000 pour un usage professionnel, une transaction équivalent à 32 appels à Look4.

Les ressources disponibles via Look4 ont différentes licences (IGN, opendata, etc).

### Les ressources disponibles via Look4

Les ressources publiées sont découvrables via http://wxs.ign.fr/look4/user/discover/). Elles comprennent :

- **locating** : un index regroupant les résultats du moteur de géocodage (adresses, lieux-dits habités, lieux-dits non habités) ET les points de repère routiers.
- **wwwLayers** : les couches du site Géoportail ;
- **geocatLayers** : des couches de visualisation issues de serveurs référencés par le Géocatalogue
- **content** : le contenu éditorial du site Géoportail
- **voies_nommees** : un index des rues de France par région, commune, département, utilisable par exemple dans des formulaires en ligne

### L’API de découverte

L'API de découverte de Look4 permet à l’utilisateur de faire une série d’opérations permettant de découvrir les contenus proposés. Il propose en particulier les possibilités suivantes :

- récupérer la liste des index existants : https://wxs.ign.fr/look4/user/discover/
- obtenir le détail d’un index : `http://wxs.ign.fr/look4/user/discover/<id>` (“id” étant l’identifiant d’un index)
  Exemple : https://wxs.ign.fr/look4/user/discover/voies_nommees retourne la description et les types de données de l’index :

- obtenir la description des types de données contenus dans un index : `http://wxs.ign.fr/look4/user/discover/<id>/type` (“id” étant l’identifiant d’un index)
  Exemple : https://wxs.ign.fr/look4/user/discover/voies_nommees/type
- obtenir le détail d’un type de données : `https://wxs.ign.fr/look4/user/discover/type/<id>` (“id” étant l’identifiant d’un type de données)
  Exemple : https://wxs.ign.fr/look4/user/discover/type/route

Pour toutes les requêtes possibles, voir https://ignf.github.io/look4/latest/jsdoc/#api-Decouverte

Important : la liste renvoie l’ensemble des index existants. Un index n’est effectivement interrogeable qu’une fois rajouté à sa propre clé d’accès via le site "espace professionnel".

NB : l’API de découverte de Look4 ne nécessite pas de clé d’accès.

### L’API de recherche

L'API de recherche de Look4 permet aux utilisateurs de lancer des recherches dans les différents index disponibles, avec plusieurs méthodes et options.

Lors d’une requête au service, l’utilisateur doit préciser les différents paramètres de sa recherche pour obtenir les réponses recherchées, tels que :

- Le ou les index à utiliser (indices). L’utilisateur précise le (ou les) index dans lesquels il veut effectuer la recherche.
- La méthode de recherche (method). Look4 propose 2 types de recherche :
- L’auto-complétion (prefix) : cette méthode propose des résultats à partir d’une recherche incomplète (par exemple au fur et à mesure de la saisie utilisateur dans un champ de recherche sur une page web). Dans le cas d’une recherche d’auto-complétion, le matching se fait sur le début des mots. Cette méthode n’accepte pas de faute de frappe ou d’orthographe ;
- la recherche standard ("fuzzy") : l’utilisateur saisit la totalité de sa recherche. Look4 cherche alors le ou les termes saisis indépendamment ou ensemble, avec une tolérance aux fautes d’orthographe.
- Le nombre de résultats (nb), optionnel, permet de préciser le nombre maximum de résultats retournés, avec un maximum de 200. En l’absence de ce paramètre, le nombre de résultats est de 20.

La liste complète des paramètres est accessible dans la documentation.

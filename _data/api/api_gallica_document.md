---
title: API Gallica Document
tagline: Accéder aux documents numériques de la Bibliothèque nationale de France
producer: bnf
category: public
is_open: 1
external_site: http://api.bnf.fr/api-document-de-gallica
keywords:
  - Bibliothèque
  - Gallica
  - Document
  - BNF
contact_link: gallica@bnf.fr
doc_tech_external: http://api.bnf.fr/api-document-de-gallica
themes:
  - Culture
last_update: 17/09/2020
---

L’API Document permet d'extraire de la bibliothèque numérique Gallica les informations nécessaires à l'exploitation des documents numériques de la Bibliothèque nationale de France (images, sons, vidéos, documents imprimés et manuscrits, cartes et plans, objets).

### A quoi sert-elle ?

L’API Document permet de récupérer un certain nombre d’informations (métadonnées descriptives) permettant d'exploiter une ressource numérique trouvée par le biais de :

- l'application web Gallica
- l'[API de recherche Gallica](/les-api/api_gallica_recherche)
- un moteur de recherche tiers

Cette API est utilisée par les systèmes d'information internes de la BnF mais aussi par des applications tierces (voir en particulier les exemples référencés sur <External href='http://api.bnf.fr'>api.bnf.fr</External> et <External href='http://gallicastudio.bnf.fr/'>Gallica Studio</External>).

Ces applications réutilisent les collections numérisées de la BnF pour des objectifs divers, relevant en particulier de la recherche documentaire ou iconographique, et dans des contextes variés (ludique, académique, professionnel).

### Données de l’API

L’accès aux ressources décrivant le document ou constitutive du document (image, texte, etc.) se fait par l’appel à différents services :

- récupération des informations bibliographiques d'un document
- récupération de la pagination et de la foliotation d'un document
- récupération de la table des matières
- récupération du texte océrisé
- récupération des annexes et fascicules parus pour un périodique
- récupération des occurrences de la recherche plein texte
- affichage d'imagettes précalculées

Le dénominateur commun d’utilisation de ces services est l'identifiant du document numérique. La BnF utilise le système d'identifiants pérennes ARK et ses identifiants débutent par la valeur `ark:/12148/`.

### Conditions d’utilisation

L’API est gérée par la Bibliothèque nationale de France. Son accès est ouvert sans restriction, sauf en cas d'usage abusif.

Les conditions de réutilisation des documents numériques de Gallica sont [décrites ici](https://gallica.bnf.fr/edit/conditions-dutilisation-des-contenus-de-gallica).

Les métadonnées descriptives des documents numériques de Gallica sont placées [sous la licence ouverte de l’Etat](https://www.bnf.fr/fr/conditions-de-reutilisations-des-donnees-de-la-bnf)

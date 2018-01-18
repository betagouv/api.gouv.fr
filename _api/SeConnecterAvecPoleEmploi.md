---
title: Se connecter avec Pôle emploi # nom commercial de l'API
tagline: Authentifier les demandeurs d'emplois  # une phrase maximum
owner: Pôle Emploi  # producteur de l'API
category: confidential  # type de donnée exposée, voir api_category dans le fichier _config.yml
contract: OUVERT sous contrat  # peut être "OUVERT" ou "OUVERT sous contrat"
contact:  support@emploi-store-dev.fr
doc_tech: https://www.emploi-store-dev.fr/portail-developpeur-cms/home/catalogue-des-api/documentation-des-api/api-pole-emploi-connect/api-peconnect-individu-v1.html # URL de la documentation technique de l'API au format HTML
access_link: https://www.emploi-store-dev.fr/portail-developpeur/detailapicatalogue/58d00957243a5f7809e17698  # URL d'une page de demande d'accès si l'API est à accès restreint
stat:
  url: https://www.emploi-store-dev.fr/portail-developpeur-cms/stats # adresse à laquelle un nombre d'appels à l'API est publié, en content-type application/json
  label: Appels  # description d'un appel à l'API
  lastXdays: 4549  # nombre de jours sur lequel les appels à l'API sont comptabilisés
clients:  # types d'entités habilitées à utiliser l'API
  - particuliers  # texte libre en minuscules
  - entreprises  # ajoutez ou supprimez des types d'entités
  - collectivités
  - ministères
keywords: # utilisé dans la recherche
  - Demandeurs d'emploi  # texte libre
  - Pôle emploi connect
---

## Description de l'API

Pôle emploi connect est le système de portabilité des données personnelles qui offre aux individus un partage sécurisé de leurs données vers des sites partenaires. Les partenaires qui souhaitent bénéficier de ce partage de données doivent formuler une demande d’accès pour chaque API (lot de données).

L’accès à l’API - Se connecter avec Pôle emploi - est un prérequis au partage de données et est conditionné par :

- L’envoi à l’adresse contact@emploi-store-dev.fr des éléments suivants (ou par voie postale ci dessous)
  - Le contrat de licence de l’API signé
  - Un justificatif permettant de vérifier l’identité (ex : copie pièce d’identité) du développeur qui réalise la demande d’accès
  - Un justificatif permettant de vérifier les liens entre le développeur et l'Entreprise propriétaire de l'application qui utilise l’API (ex : mandat)
- L’ajout de l’API à votre application en cliquant sur « continuer » sur [l'Emploi Store Développeur](https://www.emploi-store-dev.fr/portail-developpeur/detailapicatalogue/58d00957243a5f7809e17698)

Après étude de votre dossier, l’équipe Emploi Store Dev. vous confirmera par mail l’accès à l’API. De plus, vous pouvez consulter l’état de votre demande d’accès au niveau du tableau de bord de votre application.

Adresse postale de renvoi des éléments :

Direction Générale Pôle emploi

Direction Expérience Utilisateur et Digital (DEUD) – Pôle emploi connect

1, Avenue du Dr Gley

75020 PARIS

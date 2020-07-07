---
title: API Bouton FranceConnect
tagline: Le bouton FranceConnect est un dispositif qui garantit l’identité d’un usager en se reposant sur des comptes certifiés existants.
external_site: https://franceconnect.gouv.fr/partenaires
is_open: false
access_description: |
  Cette API nécessite une habilitation :
access_link: https://franceconnect.gouv.fr/partenaires
partners:
  - DGFiP
  - Ameli
  - La Poste
  - MobileConnect & Moi
  - MSA
owner: Direction interministérielle du numérique
owner_acronym: DINUM
keywords:
  - Authentification
  - Identification
  - SSO
  - Signup
themes:
  - Particulier
logo: logo-fc.jpg
contact_link: support.partenaires@franceconnect.gouv.fr
doc_tech_external: https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service
visits_2019: 120883
uptime: 99.893 # https://uptimerobot.com/dashboard.php#778110642
last_update: 10/12/2019
---

### Qu'est-ce que l’API Bouton FranceConnect ?

L‘API Bouton FranceConnect est un dispositif qui permet à des administrations, des collectivités ou des entreprises d’ajouter un bouton FranceConnect sur son service en ligne.

Grâce à ce bouton les internautes peuvent s'identifier par l'intermédiaire d'un compte existant (impots.gouv.fr, ameli.fr...).

Si vous êtes un particulier, vous pouvez [contacter l’équipe de FranceConnect.](mailto:support@franceconnect.gouv.fr)

### A quoi ca sert ?

- identifier les utilisateurs de votre service en ligne simplement et de façon sécurisée, sans création de compte supplémentaire, c'est-à-dire sans leur demander de gérer des identifiants dédies pour chaque service en ligne.
- accéder aux 6 informations nécessaires pour identifier une personne unique : l'identité pivot FranceConnect : le nom de naissance, les prénoms, le sexe, la date de naissance, le lieu de naissance (ville et pays).
- accéder à des informations supplémentaires, éventuellement détenues par les fournisseurs de l'identité pivot : l'adresse mail de la personne et son nom d'usage.

### En savoir plus :

Enfin, l'API Bouton FranceConnect vous permet de simplifier les démarches des usagers en permettant l’échange d’informations les concernant d’une administration à une autre, via d'autres API liées au dispositif FranceConnect.

Voici une liste non exhaustive des données disponibles :

- [API Impôt Particulier](/les-api/impot-particulier) (Revenu fiscal de référence et Adresse fiscale)
- [API Attestation de droits maladie](/les-api/api_ameli_droits_cnam)
- API SIV
- [API Résultats aux examens](/les-api/arpent-resultats-api)

---
title: API data·inclusion
tagline: Créer un référentiel commun de toutes les données de l’offre d’insertion des territoires afin de permettre à tous les services recensant et mettant en visibilité leur offre d’être interopérables et de mutualiser les efforts de recensement et de mise à jour.
is_open: 0 # 0 means API require an account
account_link: https://www.data.inclusion.beta.gouv.fr/api/conditions-generales-dutilisation-de-lapi
external_site: https://www.data.inclusion.beta.gouv.fr
partners:
  - gip-inclusion
  - pole-emploi
  - Les lieux de médiations numérique,
  - Collectivités territoriales
  - 1jeune1solution
producer: gip-inclusion
keywords:
  - Inclusion
  - Insertion
  - Siret
  - Sociale
  - Subvention
contact_link: data.inclusion@beta.gouv.fr
doc_tech_link: https://api.data.inclusion.beta.gouv.fr/api/v0/docs
#stat:
#  lastXdays: 29
#  url: https://status-api.abes.fr/
#monitoring_description: |
#monitoring_link: https://status-api.abes.fr/
#uptime: 99.96
#rate_limiting_resume: 1 appel / seconde / IP
#rate_limiting_description: |
#  L'API est disponible à hauteur de 1 appel par seconde et par adresse IP.
themes:
  - Administration
  - Emploi
#access_page:
#  - who:
#      - Déclarant direct
#    is_eligible: -1
#    description: |
#      Il ne vous est pas nécessaire de souscrire : vous avez déjà accès à l’API en utilisant vos identifiants Urssaf il vous suffit ainsi de [consulter la documentation pour utiliser l’API](https://www.dpae-edi.urssaf.fr/5492-API-DPAE-Guide-Implementation.pdf)
#  - who:
#      - Concentrateur
#    is_eligible: 0
#    description: |
#      Pour remplir votre demande, vous aurez uniquement besoin de créer un compte api.gouv.
#       <Button href="mailto:api-dpae@acoss.fr?subject=Demande d'accès à l'API DPAE&body=Indiquez ici votre nom, prénom et le nom de votre organisation.">Remplir une demande</Button>
#  - who:
#      - Un particulier
#      - Autres activités
#    is_eligible: -1
#    description: |
#      Vous n'êtes pas autorisé à accéder à ces données.
#
#      <Button href="/rechercher-api">Revenir à la recherche</Button>
#visits_2019: 500
last_update: 20/04/2023
---

L'API data·inclusion aggrège les données de l'insertion sociale et professionnelle.

### Sources de données

Les sources de données sont consultables sur [le site Web de data·inclusion](https://www.data.inclusion.beta.gouv.fr/le-projet-data-inclusion/ils-partagent-deja-leurs-donnees).

Les données collectées sont:

- historisées,
- géocodées,
- enrichies via les outils développés par data·inclusion:
  - l'outil de correspondance, qui permet de faire correspondre 2 jeux de données brutes,
  - l'outil de sirétisation, qui permet d'attribuer un siret aux structures, afin de croiser les bases de données
- alignées sur le schéma de données de data·inclusion
- publiées régulièrement en open data sur [data.gouv](https://www.data.gouv.fr/fr/datasets/6233723c2c1e4a54af2f6b2d), la plateforme de données publiques,
- consultables via une api.


---
title: API GRDF ADICT
tagline: Accédez aux données de consommation de gaz des clients de GRDF en tant que tiers
external_site: https://sites.grdf.fr/web/portail-api-grdf-adict
is_open: -1 # -1 means API not open
access_page:
  - who:
      - Un particulier
    is_eligible: -1
    description: |
      L'API s'adresse aux entreprises spécialisées et administrations ayant obtenu le consentement du titulaire.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Une entreprise dédiée à la maitrise d'énergie
      - Un bureau d'étude
      - Une administration
    is_eligible: 0
    description: |
      L'API est accessible aux entreprises et aux collectivités, vous devrez créer un compte pour accéder à l'API.
      L'accès au flux est conditionné par la signature d’un consentement du titulaire.

      <Button href="https://sites.grdf.fr/web/portail-api-grdf-adict/je-souhaite-souscrire-aux-services-grdf-adict">Demander un accès</Button>
producer: grdf
keywords:
  - énergie
  - gaz
  - consommation
  - suivi
  - chauffage
  - facture
  - tiers
  - climat
  - dpe
  - isolation
  - données
  - entreprises
  - diagnostic
  - études
  - transition énergétique
contact_link: https://sites.grdf.fr/web/portail-api-grdf-adict/support2
doc_tech_external: https://sites.grdf.fr/web/portail-api-grdf-adict/documentation-grdf-adict
themes:
  - Entreprise
  - Energie
  - Environnement
content_intro: |
  L'API GRDF ADICT s'adresse principalement aux entreprises fournissant
  des services de maîtrise de l'énergie (études de performances
  énergétiques, suivi de consommations multi-fluides...) et aux collectivités ou groupes privés désireux d'industrialiser
  leur suivi de consommation multi-sites.
visits_2019: 2500
last_update: 15/02/2023
stat:
  lastXdays: 29
  url: https://status-api.abes.fr/
monitoring_description: |
monitoring_link: https://status-api.abes.fr/
uptime: 100
rate_limiting_resume: 1 appel / seconde / IP
rate_limiting_description: |
  L'API est disponible à hauteur de 1 appel par seconde et par adresse IP.
---

### À quoi sert l'API GRDF ADICT ?

L'API GRDF ADICT permet d'accéder aux données de consommation de gaz de tous les clients de GRDF (particuliers, entreprises, collectivités territoriales...), sous réserve de leur consentement.

👉 Par exemple, une entreprise souhaite optimiser sa consommation de gaz et confie le suivi à un bureau d'études spécialisé. Elle donne son consentement au bureau d'études pour accéder aux données de consommation, qui sont fournies par l'API GRDF ADICT.

### Pourquoi s'interfacer avec l'API GRDF ADICT ?

En tant que tiers, intégrer l'API GRDF ADICT vous permettra :

☑️ De faire **gagner du temps** de gestion administrative à vos clients

☑️ D’être **conforme au RGPD**, grâce au consentement du client GRDF et à la sécurisation de l'accès aux données

☑️ D'accéder à **des données certifiées et à la source** quel que soit le fournisseur du client

### Données accessibles dans l'API

Les API GRDF ADICT donnent accès - sous réserve de consentement du Client - à des données de consommation de gaz à différents degrés de précision (consommations semestrielles, mensuelles, quotidiennes...), ainsi qu'aux données techniques du compteur et aux données contractuelles du Titulaire.

- Droits d'accès
- Données de consommation
- Données contractuelles
- Données techniques

### En savoir plus sur l'API GRDF ADICT

<iframe width="700" height="400" src="https://www.youtube.com/embed/0aI2pt0EPx4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
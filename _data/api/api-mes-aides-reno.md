---
title: API Mes Aides Reno
producer: dinum
tagline: Calculer les aides à la rénovation énergétique (MaPrimeRénov', aides locales, CEE, copropriété, etc.)
is_open: 1 # 1 means API is fully open
external_site: https://mesaidesreno.beta.gouv.fr/api-doc
partners:
 
keywords:
  - Ecologie
  - Renovation
  - Aides
  - Mes aides
  - Reno
  - Energie
  - Renov

rate_limiting_resume: 
rate_limiting_description: |
 
themes:
  - Ecologie
  - Energie

content_intro: |
  L'API Mes Aides Réno est une API basée sur https://publi.codes pour calculer à partir de la situation du citoyen (revenu, description du ménage, commune, projet de rénovation, etc) l'éligibilité et le montant des aides à la rénovation.

   Elle est documentée sur https://mesaidesreno.beta.gouv.fr/api-doc et https://mesaidesreno.beta.gouv.fr/documentation/aides.
  
  C'est une API conversationnelle, c'est à dire que si la situation d'entrée est incomplète, l'API renvoie les questions supplémentaires à poser à l'utilisateur.
  
  L'API s'adresse à tout acteur privé ou public qui souhaite intégrer dans sa plateforme le calcul des aides à la rénovation thermique.

  L'API est statique, sans mémoire pour les données saisies, et donc passe bien à l'échelle.
  
  L'API est un simple serveur express qui peut être déployé sur une plateforme SaaS chez vous en quelques clics, si des milliers d'appels sont prévus par jour, ou si besoin d'un contrôle sur les versions par exemple.

  Le bouton "Tester l'API" ne fonctionne pas car il n'y a pas de swagger pour cette API.

contact_link: mael.thomas@beta.gouv.fr
doc_tech_link: https://mesaidesreno.beta.gouv.fr/api/rules
doc_tech_external: https://mesaidesreno.beta.gouv.fr/api-doc
uptime: 
visits_2019: 1000
last_update: 29/02/2024
---

### Données disponibles

- MaPrimeRénov parcours accompagné : éligibilité, scénarios de rénovation, pourcentage d'aide, montant final
- MaPrimeRénov parcours par gestes : éligibilité, liste des gestes avec plafond et montants, calcul du total



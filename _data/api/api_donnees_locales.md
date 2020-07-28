---
title: API Diffusion Données Locales
tagline: Accéder aux données de l'Insee, localisées au niveau de la commune
owner: Institut national de la statistique et des études économiques
owner_acronym: Insee
logo: Logo_Insee.svg
is_open: false
access_description: |
  Cette API nécessite de se créer un compte pour pouvoir accéder aux données
access_link: https://api.insee.fr/catalogue/site/themes/wso2/subthemes/insee/pages/sign-up.jag
rate_limiting_resume: 30 appels / minute / IP
rate_limiting_description: |
  <p>L'API est disponible à hauteur de 30 appels par minute et par adresse IP.</p>
monitoring_description: |
  <p>L'Insee s'engage à une obligation de moyens pour maintenir la disponibilité du service 99,5 % du temps mensuel, apprécié au terme de chaque mois. </p>
keywords:
  - Insee
  - communes
  - données locales
  - statistiques
  - territoires
themes:
  - Géographie
contact_link: https://api.insee.fr/catalogue/site/themes/wso2/subthemes/insee/pages/help.jag#contact
doc_tech_link: https://api.insee.fr/catalogue/api-docs/carbon.super/DonneesLocales/V0.1?envName=null
---

L’API ‘Données locales’ permet d’accéder aux données localisées à la commune, diffusées sur insee.fr dans la rubrique 'chiffres détaillés' (ou ‘chiffres clés’ pour les populations légales), sous forme de cubes prédéfinis.

### Données

Les cubes prédéfinis sont ceux utilisés pour l’élaboration des tableaux et graphiques en ligne, correspondant aux sources suivantes :

| Nom de la donnée                                 |
| ------------------------------------------------ |
| recensement de la population                     |
| état civil                                       |
| répertoire des entreprises et des établissements |
| fichier localisé social et fiscal                |
| offre d’hébergement touristique                  |

Les statistiques sont disponibles pour tous les zonages géographiques allant de la commune à la France entière, c’est-à-dire pour les zonages administratifs (communes, arrondissements municipaux, arrondissements, intercommunalités/EPCI, départements, régions et France), ainsi que pour les zonages d’étude (zones d'emploi, aires urbaines, unités urbaines).

La recherche s’effectue à partir d’une source, d’un croisement de variables et d’un code géographique.

La consultation des résultats du recensement de la population (RP) étant destinée à un large public, la diffusion de certains tableaux est restreinte pour en garantir une interprétation de qualité. Ainsi la même finesse de croisement n’est pas disponible pour toutes les zones géographiques. Le détail des restrictions est précisé dans la documentation du recensement (cf. groupes de diffusion).
Exemple : certains tableaux ne sont élaborés que pour les zones géographiques de plus de 2000 habitants.

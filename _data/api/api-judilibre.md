---
title: API Judilibre
tagline: Publication des décisions rendues publiquement par la Cour de cassation, enrichies et pseudonymisées.
external_site: https://www.courdecassation.fr/recherche-judilibre
is_open: 0 # -1 means API not open
account_link: https://developer.aife.economie.gouv.fr/component/apiportal/registration
keywords:
  - Jurisprudence judiciaire
  - Décisions judiciaires
  - Cassation
  - Justice
rate_limiting_resume: quota / jeton
rate_limiting_description: |
  Les appels API sont limités par quotas par jetons d'accès.
contact_link: judilibre.courdecassation@justice.fr
doc_tech_link: https://raw.githubusercontent.com/Cour-de-cassation/judilibre-search/dev/public/JUDILIBRE-public.json 
themes:
  - Droit et Justice
producer: cour-de-cassation
partners:
    - ministere-justice
monitoring_link: https://uptime.judilibre.io
uptime: 99.90
last_update: 07/10/2021
---
L'API Judilibre assure la publication des décisions rendues publiquement par la Cour de cassation, enrichies et pseudonymisées. Elle est destinée à couvrir le périmètre des décisions de l'ordre judiciaire selon le calendrier établi par l’[arrêté du 28 avril 2021](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043426865).

L'API est mise à disposition via [le portail PISTE](https://developer.aife.economie.gouv.fr/) et accessible gratuitement après inscription, permet notamment de rechercher en plein texte ou suivant des critères spécifiques parmi l’ensemble de ces décisions.

Les données disponibles via l'API sont également celles de la version du site de la Cour de cassation (https://www.courdecassation.fr/recherche-judilibre).

### Conditions d'utilisation

L'utilisation de ces données est soumise :

- à la licence ouverte 2.0 ;
- aux [conditions générales d'utilisation de PISTE](https://developer.aife.economie.gouv.fr/images/com_apiportal/CGU/cgu_portal_FR.pdf) ;
- aux [conditions générales d'utilisation pour la réutilisation des données issues des décisions de justice de l'ordre judiciaire diffusées en opendata par la Cour de cassation](https://www.courdecassation.fr/conditions-generales-dutilisation-pour-la-reutilisation-des-donnees-issues-des-decisions-de-justice) ;
- à des quotas qui seront prochainement sur le portail PISTE.

### Données disponibles dans l'API Judilibre

L'API couvre le périmètre des décisions de l'ordre judiciaire, selon le calendrier suivant:
- 30 septembre 2021 - décisions rendues par la Cour de cassation
- 31 décembre 2024 - décisions rendues par les juridictions de premier degré en matière contraventionnelle et délictuelle
- 31 décembre 2025 - décisions rendues par les cours d'appel en matière contraventionnelle et délictuelle
- 31 décembre 2025 - des décisions rendues en matière criminelle

Les données publiées par l'API sont :

- le texte des décisions (pseudonymisé)
- les principales métadonnées associées à celles-ci (date, numéros de pourvoi, juridiction, chambre, formation, niveau de publication, solution, ECLI, ...)

Ainsi que des enrichissements :

- le titrage et les sommaires
- certains  travaux préparatoires (rapports et avis des avocats généraux)
- des renvois documentaires
- les moyens annexés des décisions de rejet non spécialement motivé
- des rapprochements de jurisprudence
- des références aux textes appliqués
- des références à la décision qui a fait l’objet du pourvoi devant la Cour de cassation ou encore, le cas échéant, la décision attaquée elle-même si cette décision a été rendue publiquement et a été pseudonymisée.

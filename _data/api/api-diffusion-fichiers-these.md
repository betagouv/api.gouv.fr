---
title: API Diffusion des Fichiers de Theses sur theses.fr
producer: abes
tagline: Diffusion des fichiers de thèses, en accès libre ou en accès restreint, sur theses.fr
is_open: 1 # 1 means API is fully open
external_site: https://theses.fr/

partners:
 
keywords:
  - Theses
  - Bibliographie
  - Données
  - Diffusion
  - Export
  - Enseignement
  - ABES

rate_limiting_resume: 
rate_limiting_description: |
 
themes:
  - Enseignement Supérieur
  - Bibliographie

content_intro:
  
  L’API gère la diffusion des fichiers de thèses, en accès libre ou en accès restreint, sur theses.fr.


 L'API s'adresse à toutes les personnes qui souhaitent récupérer les fichiers de thèses de doctorat, ou les modalités d’accès aux thèses de doctorat, pour les réutiliser au sein de leur propre système d'information, à des fins de recherche ou pour constituer une base de données, c'est à dire la DSI, data scientists, bibliothecaires, etc.


contact_link: thelec@abes.fr
doc_tech_link: https://theses.fr/api/v1/diffusion/openapi.yaml


uptime: 99.99
monitoring_link: https://status-api.abes.fr/
visits_2019: 1000
last_update: 08/04/2024
---

### Données disponibles

Pour les thèses diffusées en accès libre, l’API :
- envoie le fichier
- permet d’obtenir un lien d’accès direct au fichier de thèse ou à ses annexes

Pour les thèses diffusées en accès restreint, l’API :
- envoie le fichier, après authentification
- ou redirige vers l’intranet local de l’établissement qui détient le fichier

Pour l’ensemble des thèses, l’API gère les boutons d’accès qui s’affichent sur theses.fr.

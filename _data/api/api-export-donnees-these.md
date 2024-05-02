---
title: API Export des Données de theses.fr
producer: abes
tagline: Exportez les métadonnées descriptives ou la référence bibliographique d’une thèse, dans différents formats.
is_open: 1 # 1 means API is fully open
external_site: https://theses.fr/

partners:
 
keywords:
  - Theses
  - Bibliographie
  - Données
  - Export
  - Enseignement
  - ABES

rate_limiting_resume: 
rate_limiting_description: |
 
themes:
  - Enseignement Supérieur
  - Bibliographie

content_intro:
  
 L’API permet d’exporter les métadonnées descriptives d’une thèse soutenue ou d’une thèse en préparation aux formats XML ou RDF ainsi que la référence bibliographique d’une thèse soutenue ou d’une thèse en préparation aux formats RIS et BibTeX


 L'API s'adresse à toutes les personnes qui souhaitent récupérer les données relatives aux thèses de doctorat pour les réutiliser au sein de leur propre système d'information ou à des fins de recherche et de statistiques, par exemple les gestionnaires de métadonnées, enseignants-chercheurs, data scientist, bibliothécaires, etc.


contact_link: thelec@abes.fr
doc_tech_link: https://theses.fr/api/v1/export/openapi.yaml

uptime: 99.99
monitoring_link: https://status-api.abes.fr

visits_2019: 1000
last_update: 04/04/2024
---

### Données disponibles

Les métadonnées descriptives de la thèses (formats XML et RDF) comprennent :

-> Un bloc décrivant la notice :

- URL de la notice  
- Identifiants pérenne du créateur de la notice (l’Abes)  
- Date de création et de dernière mise à jour de la notice dans theses.fr (en UTC)

-> Un bloc décrivant :  
- La thèse : titre, année de soutenance ou d’inscription en doctorat, type de document, langue, résumés, mots-clés, classification Dewey, URL d’accès au texte intégral  
- Les personnes liées à la thèse ; auteur (nom, prénom et identifiant), directeur de thèse (nom, prénom et identifiant), membres du jury  
- Les structures liées à la thèse : établissement de soutenance (nom et identifiant), école doctorale (nom et identifiant), partenaires de recherche (nom et identifiant)

Les références bibliographiques (formats RIS et BibTeX) comprennent :  
- Le titre  
- L’auteur  
- Le directeur de thèse  
- La date de soutenance  
- Le type de document  
- L’URL pérenne de la page theses.fr et l’URL pérenne de diffusion du fichier de thèse  
- La description matérielle du document  
- Le Numéro National de Thèse  
- La note de thèse (type de diplôme, établissement de soutenance, discipline, année de soutenance).

---
title: API Interroger les Données de theses.fr
producer: abes
tagline: Lancez une recherche dans les données de theses.fr décrivant les thèses et les personnes liées aux thèses.
is_open: 1 # 1 means API is fully open
external_site: https://theses.fr/

partners:
 
keywords:
  - Theses
  - Bibliographie
  - Données
  - Interroger
  - Export
  - Enseignement
  - ABES

rate_limiting_resume: 100 000
rate_limiting_description: Le nombre de thèses remontées est limité à 100 000
 
themes:
  - Enseignement Supérieur
  - Bibliographie

content_intro:
  
 L’API permet de lancer une recherche dans les données de theses.fr décrivant les thèses et les personnes liées aux thèses. Les données sont récupérables au format JSON.


 L'API s'adresse à toutes les personnes qui souhaitent interroger le site theses.fr, récupérer les données relatives aux thèses de doctorat sur un périmètre donné pour les réutiliser au sein de leur propre système d'information, à des fins de recherche et de statistiques, pour constituer une base de données ou faire de la veille, c'est à dire les gestionnaires de métadonnées, enseignants-chercheurs, data scientist, bibliothécaires, etc.



contact_link: thelec@abes.fr
doc_tech_link: https://theses.fr/api/v1/recherche/openapi.yaml
doc_tech_external: https://documentation.abes.fr/aidetheses/thesesfr/index.html#PrincipeAPI


uptime: 99.99
monitoring_link: https://status-api.abes.fr/
visits_2019: 1000
last_update: 08/04/2024
---

### Données disponibles

L’API permet de récupérer les données relatives :
- au statut des thèses : soutenues, en préparation, accessibles en ligne
- à la description des thèses : titre, mots-clés libres, mots-clés contrôlés (libellés et identifiants), résumés, discipline, langue, Numéro National de Thèse ou identifiant de thèse en préparation, date de soutenance ou date de première inscription en doctorat
aux personnes liées aux thèses : auteur / autrice (nom, prénom et identifiant), directeur / directrice (nom, prénom et identifiant), président / présidente du jury (nom, prénom et identifiant), rapporteurs / rapporteuses (nom, prénom et identifiant), membres du jury (nom, prénom et identifiant)
- aux structures liées aux thèses : établissement de soutenance (libellé et identifiant), établissement de cotutelle (libellé et identifiant), école doctorale (libellé et identifiant), partenaire de recherche (libellé et identifiant)

Détail des champs interrogeables :
- status:(*) = toutes les thèses
- status:(soutenue) = uniquement les thèses soutenues
- accessible:oui = les thèses accessibles en ligne
- status:(enCours) = uniquement les thèses en cours
- datePremiereInscriptionDoctorat:([AAAA-MM-JJ TO AAAA-MM-JJ]) : date de première inscription en doctorat, début et fin sous la forme AAAA-MM-JJ
- dateSoutenance:([AAAA-MM-JJ TO AAAA-MM-JJ]) : date de soutenance, début et fin sous la forme AAAA-MM-JJ
- titrePrincipal:(XXX) : titre principal de la thèse
- sujetsLibelle:(XXX) : mots-clés libres par libellé
- sujetsRameauLibelle:(XXX) : mots-clés contrôlés par libellé
- sujetsRameauPpn:(XXX) : mots-clés contrôlés par identifiant
- resumes.\*:(XXX) : résumés. Il est possible de spécifier la langue des résumés dans lesquels la recherche doit être effectuée, sous la forme resumes.XX:() où XX correspond au code ISO 639-1 de la langue concernée.
- discipline:(XXX) : discipline
- auteursNP:(XXX) : nom et/ou prénom de l’auteur(s)
- auteursPpn:(XXX) : identifiant de l’auteur(s)
- directeursNP:(XXX) : nom et/ou prénom du/des directeur(s)
- directeursPpn:(XXX) : identifiant du/des directeur(s)
- presidentJuryNP:(XXX) : nom et/ou prénom du président du jury
- presidentJuryPpn:(XXX) : identifiant du président du jury
- rapporteursNP:(XXX) : nom et/ou prénom du/des rapporteur(s)
- rapporteursPpn:(XXX) : identifiant du/des rapporteur(s)
- membresJuryNP:(XXX) : nom et/ou prénom du/des examinateurs
- membresJuryPpn:(XXX) : identifiant du/des examinateurs
- etabSoutenanceN:(XXX) : nom de l’établissement de soutenance
- etabSoutenancePpn:(XXX) : identifiant de l’établissement de soutenance par identifiant
- etabsCotutelleN:(XXX) : nom de l’établissement de cotutelle
- etabsCotutellePpn:(XXX) : : identifiant de l’établissement de cotutelle
- ecolesDoctoralesN:(XXX) : nom de l’école(s) doctorale(s)
- ecolesDoctoralesPpn:(XXX) : : identifiant de la ou les école(s) doctorale(s)
- partenairesRechercheN:(XXX) : nom du ou des partenaire(s) de recherche
- partenairesRecherchePpn:(XXX) : : identifiant du/des partenaire(s) de recherche
- nnt:(XXXXXXXXXXXX) : numéro national de la thèse, sur 12 caractères
- numSujet:(sXXXXX) : identifiant du projet de thèse dans la base de données STEP, avec le préfixe s
- numSujetSansS:(XXXXX) : identifiant du projet de thèse dans la base de données STEP, sans le préfixe s
- codeEtab:(XXXX) : code court de l’établissement, sur 4 caractères. Voir la liste des codes courts : https://documentation.abes.fr/sudoc/regles/CodesUnivEtab.htm
- oaiSetNames:(XXXXXXXX) : domaine thématique de la thèse, correspondant à l’une des valeurs de la liste : https://theses.fr/schemas/tef/recommandation/tef_oai_setSpec.html
- langues:(XX) : langue de la thèse, sur deux caractères composant le code ISO 639-1 de la langue sélectionnée.

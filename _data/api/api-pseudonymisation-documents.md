---
title: API Pseudonymisation de documents (démo)
tagline: Pseudonymisez des documents et des données contenant des personnes ou des entités nomées
external_site: https://www.etalab.gouv.fr/datasciences-et-intelligence-artificielle/
is_open: 1
producer: dinum
keywords:
  - Anonymisation
  - Anonyme
  - Pseudo
  - CNIL
  - RGPD
  - Données personnelles
  - Documments
  - Administratif
  - Traitement
  - NLP
  - Natural Language Processing
contact_link: lab-ia@data.gouv.fr
doc_tech_external: https://github.com/etalab-ia/pseudo_api
themes:
  - Droit et Justice
  - Administration & législation
content_intro: |
  L'API Pseudonymisation permet de remplacer des entités ou des personnes (dans des documents ou des jeux de données) par des pseudonymes.
visits_2019: 2000
last_update: 25/03/2022
---

### À quoi sert l'API Pseudonymisation de documents ?

 Pour se conformer aux exigences en matière de protection des données personnelles, certains documents et jeux de données nécessitent une anonymisation ou une pseudonymisation.
 Le principe consiste à remplacer des entités nommées par des pseudonymes aléatoires.

 Concrètement, l'API utilise un modèle de reconaissance d'entités nommées (Named Entity Recognition model), pour trouver et remplacer :

- prénoms
- noms
- adresses

⚠️ Cette API a été développée pour un projet précis : la pseudonymisation des décisions de justice, pour la Cour de cassation et le Conseil d'Etat.
**Des développements supplémentaires sont à prévoir pour entrainer le modèle et utiliser l'API.**

### Documentation

Pour accéder à la documentation de l'API (développée pour les décisions de justice), [c'est ici](https://github.com/etalab-ia/pseudo_api)

Pour en savoir plus sur la pseudonymmisation de documents, [consultez le guide complet d'Etalab](https://guides.etalab.gouv.fr/pseudonymisation/)

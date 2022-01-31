---
title: API Statut Etudiant Boursier
tagline: Vérifiez si un étudiant est boursier
datapass_link: https://datapass.api.gouv.fr/api-etudiant-boursier-fc
access_page:
  - who:
      - Un particulier
      - Un étudiant
    is_eligible: -1
    description: |
      Vous ne pouvez pas accèder a ces informations.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Une administration
    is_eligible: 1
    description: |
      <NextSteps />
      <QuestionTree tree='france-connected-api' question='statutEtudiantBoursier' />
  - who:
      - Une entreprise
    is_eligible: 0
    description: |
      Vous pouvez faire une demande uniquement si votre structure est partenaire de France Connect
      
      👉 [En savoir plus](https://franceconnect.gouv.fr/partenaires)

      <NextSteps />
      <Button href="https://datapass.api.gouv.fr/api-statut-etudiant-boursier-fc">Remplir une demande</Button>
is_open: -1
is_france_connected: 1
producer: mesri
partners: 
- Les Crous
keywords:
  - etudiant
  - enseignement
  - inscription
  - université
  - admission
  - etablissement
  - boursier
  - crous
  - cnous
  - bourse
  - formation
themes:
  - Particulier
  - Education
contact_link: contact@api.gouv.fr
doc_tech_link: https://api-pp.nuonet.fr/statut-boursier/doc/get.json
visits_2019: 4000
last_update: 31/01/2022
---

Cette API permet de vérifier si un **individu identifié avec FranceConnect** est un étudiant boursier et le cas échéant de connaitre l'échelon de sa bourse.

### À quoi sert l’API Statut Etudiant Boursier ?

Cette API permet, aux administrations, dans le cadre des démarches en ligne qu'elles mettent en oeuvre de vérifier le statut boursiers des étudiants.

Les administration accèdent à des informations certifiées à la source et peuvent ainsi :

- s’affranchir de demander le téléchargement des pièces justificatives,
- automatiser le processus de traitement des demandes et de supprimer le contrôle en back-office,
- écarter le risque de fraude documentaire.

Pour les administrations qui souhaitent aussi donner accès à leurs démarches  sans FranceConnect, les mêmes données sont disponibles dans l'API particulier

Il existe aussi une API permettant de connaitre le statut des étudiants et le cas échéant leur(s) établissement(s).

### Données

L'API retourne selon le cas :

| Donnée                             | Description                                                        | Exemple                   |
| ---------------------------------- | ------------------------------------------------------------------ |---------------------------|
| Identité                           | Etat civil de l'étudiant                                           | Nom, prénom, naissance    |
| Statut Boursier                    | Indique si l'étudiant est boursier                                 | 1                         |
| Echelon boursier                   | Echelon de bourse si boursier                                      | Echelon 2                 |
| Dates                              | Dates de notification et d'effet                                   | 2021-12-20T13:18:52.048Z  |

---
title: API Statut Etudiant - écriture
tagline: Alimentez l'API Statut Etudiant en tant qu'établissement de l'enseignement supérieur.
access_page:
  - who:
      - Un particulier
      - Une entreprise
    is_eligible: -1
    description: |
      Vous ne pouvez pas accéder a ces informations.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Une administration qui souhaite simplifier une démarche pour les étudiants
    is_eligible: -1
    description: |
      ⚠️ Cette API est réservée aux établissements de l'enseignement supérieur. 
      
      👉 **L'API dont vous avez besoin pour simplifier les démarches des étudiants est [l'API Statut Etudiant](https://api.gouv.fr/les-api/api-statut-etudiant).**

      <QuestionTree tree='france-connected-api' question='statutEtudiant' />
  - who:
      - Un établissement de l'enseignement supérieur
      - Un lycée
    is_eligible: 1
    description: |
      
      <Button href="https://statutetudiant.esr.gouv.fr/pages/etablissement">Remplir une demande</Button>
is_open: -1
producer: mesri
partners:
- renater
keywords:
  - université
  - école
  - education
  - statut
  - etablissement
  - recherche
  - ecriture
  - mesri
  - INE
  - inscription
  - formation
  - bts
  - renater
themes:
  - Particulier
  - Education
contact_link: support-statutetudiant@renater.fr
doc_tech_link: /swaggers/StatutEtudiant-POST-inscription-v4-complet.json
visits_2019: 4000
last_update: 25/01/2022
---

L'API statut étudiant – écriture permet aux établissement d’enseignement supérieur d’enregistrer les étudiants qu’ils ont inscrits dans le référentiel commun mis en place par RENATER pour le compte du MESRI.

⚠️ Pour accéder à l'API Statut Etudiant en lecture (dans le but de vérifier le statut étudiant),
➤ [**c'est ici**](https://api.gouv.fr/les-api/api-statut-etudiant).

### À quoi sert l'API Statut Etudiant - écriture ?

L'API Statut Etudiant - écriture permet aux établissements de l'enseignement supérieur de mettre à jour le statut d'un étudiant.

Ces données sont par la suite exposées dans l’API statut étudiant afin qu’ils n’aient plus à fournir une preuve de leur statut d'étudiant (photocopie de la carte d'étudiant ou un certificat de scolarité) dans les services en ligne.

Seuls les étudiants dont les établissements transmettent leurs données pourront bénéficier de cette simplification.

### Quelles sont les données nécessaires ?

| Donnée                                                  | Description                                                              |
| ------------------------------------------------------- | ------------------------------------------------------------------------ |
| ine                                                     | Identifiant National étudiant                                            |
| dateNaissance                                       | Date de naissance de l'étudiant                                          |
| codeCommne                                            | Code postal de la commune de l'établissement                             |
| regime                                                  | Formation initiale / formation continue / formation initiale hors apprentissage / reprise d'études non financée sans convention / contrat d'apprentissage / formation continue hors contrat professionnel / contrat de professionnalisation                                  |
| statut                                                  | Exemple : admis                                                          |
| dateDebutInscription                                           | Date de début de l’inscription. Exemple : 2021-09-01                     |
| dateFinInscription                                             | Date de fin de l’inscription. Exemple : 2022-08-31                       
| uai                                                  | Identifiant de l'établissement                                                          |
| cursus                                           | L = Licence, M = Master, D = Doctorat (Par défaut : non renseigné)                      |
| diplome                                             | Code diplôme SISE ou code MEFSTAT11 (pour lycées)                      
| niveauDiplome                                                  | Niveau d'année dans le diplôme                                                          |

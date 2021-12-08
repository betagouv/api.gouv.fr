---
title: API Statut Etudiant - ecriture
tagline: Alimentez l'API Statut Etudiant en tant qu'établissement de l'enseignement supérieur.
access_page:
  - who:
      - Un particulier
      - Une entreprise
    is_eligible: -1
    description: |
      Vous ne pouvez pas accèder a ces informations.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Un établissement de l'enseignement supérieur
      - Un lycée
    is_eligible: 1
    description: |
      
      <Button href="https://statutetudiant.esr.gouv.fr/pages/etablissement">Remplir une demande</Button>
is_open: -1
producer: mesri
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
themes:
  - Particulier
  - Education
contact_link: support-statutetudiant@renater.fr
doc_tech_link: /swaggers/api-statut-etudiant-ecriture.json
visits_2019: 4000
last_update: 08/12/2021
---

L'API « statut étudiant – écriture » permet aux établissement d’enseignement supérieur, publics ou privés, d’enregistrer les étudiants qu’ils ont inscrits dans le référentiel commun mis en place par RENATER pour le compte du MESRI.

⚠️ Pour accéder à l'API Statut Etudiant en lecture (dans le but de vérifier le statut étudiant),
➤ [**c'est ici**](https://api.gouv.fr/les-api/api-particulier).

### À quoi sert l'API Statut Etudiant - écriture ?

Ces données sont par la suite exposées dans l’API statut étudiant afin qu’ils n’aient plus à fournir une preuve de leur statut d'étudiant (photocopie de la carte d'étudiant ou un certificat de scolarité) dans les services en ligne.

Seuls les étudiants dont les établissements transmettent leurs données pourront bénéficier de cette simplification.

### Quelles sont les données nécessaires ?

| Donnée                                                  | Description                                                              |
| ------------------------------------------------------- | ------------------------------------------------------------------------ |
| INE                                                     | Identifiant National étudiant                                            |
| Date de naissance                                       | Date de naissance de l'étudiant                                          |
| Code commune                                            | Code postal de la commune de l'établissement                             |
| Régime                                                  | Formation initiale / formation continue                                  |
| Statut                                                  | Exemple : admis                                                          |

---
title: API Statut étudiant boursier
tagline: Vérifiez si un individu identifié avec FranceConnect est un étudiant boursier
datapass_link: https://datapass.api.gouv.fr/api-statut-etudiant-boursier
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
      Vous pouvez accéder à l’API uniquement si vous êtes [partenaire de France Connect](https://franceconnect.gouv.fr/partenaires), et pour un cas d’usage autorisé par la loi. Vous devrez fournir le cadre juridique qui vous autorise à utiliser ces données.

      <NextSteps />
      <Button href="https://datapass.api.gouv.fr/api-statut-etudiant-boursier">Remplir une demande</Button>
is_open: -1
is_france_connected: 1
producer: cnous
partners:
  - mesri
keywords:
  - etudiant
  - bourse
  - echelon
  - grant
  - cnous
  - crous
  - identifiant
  - national
  - enseignement
  - inscription
  - université
  - etablissement
  - INE
  - formation
themes:
  - Particulier
  - Education
contact_link: api-boursier@cnous.fr
doc_tech_link: https://particulier.api.gouv.fr/api/open-api.yml
visits_2019: 4000
last_update: 08/02/2022
---

Cette API permet de vérifier si individu **identifié avec FranceConnect** est un étudiant boursier et le cas échéant de connaitre l'échelon de sa bourse

### À quoi sert l’API Statut étudiant boursier ?

Cette API permet, aux administrations, dans le cadre des démarches en ligne qu'elles mettent en oeuvre de vérifier le statut boursiers des étudiants.

Les administrations accèdent à des informations certifiées à la source et peuvent ainsi :

- s’affranchir de demander le téléchargement des pièces justificatives,
- automatiser le processus de traitement des demandes et de supprimer le contrôle en back-office,
- d'écarter le risque de fraude documentaire.

**Il existe aussi l'[API statut étudiant](https://api.gouv.fr/les-api/api-statut-etudiant)**, qui permet de connaitre le statut des étudiants et le cas échéant leur(s) établissement(s)

**Pour les administrations qui souhaitent aussi donner accès à leurs démarches sans FranceConnect, les mêmes données sont disponibles dans [l'API particulier](https://api.gouv.fr/les-api/api-particulier)**.

### Quels étudiants peut-on retrouver grâce à cette API ?

L’API délivre les données des étudiants :

- **Boursiers d’État** sur critères sociaux (gérés par les Crous) ;
- **Boursiers sur critères sociaux des filières sanitaires et sociales des régions.**

<details>
   <summary>Liste des régions dont les données sont disponibles dans l'API</summary>

⚠️ La liste des boursiers gérés par les régions, disponible dans cette API, sera mise à jour dès mise à disposition des informations.
L’API à ce jour, couvre uniquement le périmètre des boursiers sur critères sociaux à l’exception des boursiers Campus France et des autres bourses.

#### Régions disponibles

- Normandie

</details>

### Données

L'API retourne selon le cas :

| Donnée                                 | Description                                                                           |
| -------------------------------------- | ------------------------------------------------------------------------------------- |
| Statut boursier                        | Indique si l'étudiant est boursier                                                    |
| Echelon de la bourse                   | Echelon de la bourse de 0bis à 8                                                      |
| email                                  | Adresse mail                                                                          |
| Période de versement / Date de rentrée | Date de début de rentrée scolaire ou universitaire et durée de versement de la bourse |
| Statut de la bourse                    | Statut définitif ou provisoire (conditionnel)                                         |
| Ville d'étude                          | Libellé de la ville d'étude                                                           |

### Scopes à transmettre à FranceConnect

Afin d'accéder aux informations détenues dans l'API Statut Étudiant Boursiers il faut renseigner à FranceConnect les scopes que vous avez choisi.

Voici la liste des scopes :

- Statut étudiant boursier: `cnous_statut_boursier`
- Echelon de la bourse: `cnous_echelon_bourse`
- Email : `cnous_email`
- Période de versement : `cnous_periode_versement`
- Statut définitif de la bourse : `cnous_statut_bourse`
- Ville d'étude et établissement : `cnous_ville_etudes`

---
title: API Statut Etudiant
tagline: Vérifiez si une personne est inscrite dans un établissement de l'enseignement supérieur
datapass_link: https://datapass.api.gouv.fr/api-statut-etudiant
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
      <QuestionTree tree='france-connected-api' question='statutEtudiant' />
  - who:
      - Une entreprise
    is_eligible: 0
    description: |
      Vous pouvez accéder à l’API uniquement si vous êtes [partenaire de France Connect](https://franceconnect.gouv.fr/partenaires), et pour un cas d’usage autorisé par la loi. Vous devrez fournir le cadre juridique qui vous autorise à utiliser ces données.

      <NextSteps />
      <Button href="https://datapass.api.gouv.fr/api-statut-etudiant">Remplir une demande</Button>
is_open: -1
is_france_connected: 1
producer: mesri
partners: 
  - renater
keywords:
  - etudiant
  - identifiant
  - national
  - enseignement
  - inscription
  - université
  - admission
  - etablissement
  - INE
  - formation
themes:
  - Particulier
  - Education
contact_link: statutetudiant@enseignementsup.gouv.fr
doc_tech_link: https://particulier.api.gouv.fr/api/france-connect/open-api.yml
visits_2019: 4000
last_update: 10/01/2022
---

Cette API permet de vérifier si un individu identifié avec FranceConnect dispose du statut d'étudiant du fait de son inscription dans un établissement d'enseignement supérieur.

### À quoi sert l’API Statut Etudiant ?

Cette API permet, aux administrations, dans le cadre des démarches en ligne qu'elles mettent en œuvre de vérifier le statut d'étudiant.

Elle permet aux administrations d'accéder à des informations certifiées à la source et ainsi :

- s’affranchir de demander le téléchargement des pièces justificatives,
- automatiser le processus de traitement des demandes et de supprimer le contrôle en back-office,
- d'écarter le risque de fraude documentaire.

**Pour les administrations qui souhaitent aussi donner accès à leurs démarches sans FranceConnect, les mêmes données sont disponibles dans [l'API particulier](https://api.gouv.fr/les-api/api-particulier)**.

Il existe aussi une API permettant de connaitre le statut boursier des étudiants et le cas échéant leur échelon.

### Périmètre

Cette api délivre les données des étudiants inscrits dans les établissements sous tutelle du ministère de l'enseignement supérieur.

La couverture des établissements du champ des étudiants sera progressivement complétée.

🔎 Consulter le [nombre d'étudiants identifiés dans l'API](https://statutetudiant.esr.gouv.fr)

Si vous êtes un établissement, sous tutelle ou non du ministère de l'enseignement supérieur, et que vous souhaitez inscrire vos étudiants dans le référentiel, consultez cette page : <https://statutetudiant.esr.gouv.fr>.

### Données

L'API retourne selon le cas :

| Donnée                             | Description                                                                   |
| ---------------------------------- | ----------------------------------------------------------------------------- |
| INE                                | Identifiant National de l'étudiant                                            |
| Inscriptions en formation continue | Permet d’interroger les données des étudiants en formation continue. Données : date de début, de fin d'inscription, et code COG de la commune du lieu d'étude    |
| Inscriptions en formation initiale | Permet d’interroger les données des étudiants en formation initiale. Données : dates de début, fin d'inscription et code COG de la commune du lieu d'étude     |
| Admissions                         | Limite la recherche aux seuls étudiants admis (non-inscrits)                  |
| Etablissement                      | Le ou les établissements (nom et  identifiant - UAI)                         |

### Modalités d'utilisation des scopes

Vous aurez à sélectionner des scopes de données dans votre demande. Voici leur fonctionnement :

Deux scopes sont utilisés comme "masque de données". Ces données ne seront donc pas retournées si le scope n'a pas été sélectionné.

- "Etablissements" : renvoie le ou les établissements et code COG du lieu d'étude
- "INE (Identifiant National Etudiant)"

Trois scopes ont été réalisés pour ne travailler que sur une population restreinte

- "Admission" : si ce scope est sélectionné la recherche de l'étudiant s'effectuera sur la population restreinte aux seuls admis (inscription non-définitive).
- "Inscriptions en formation initiale"
- "Inscription en formation continue"

Cas d'usage principal :
Si je souhaite m'assurer que les utilisateurs d'un téléservice sont bien des étudiants de mon département, je coche :

- "établissements",
- "Inscriptions en formation initiale",
- "Inscription en formation continue".

Si je souhaitais offrir un service d'assistance personnalisé pour les étudiants seulement admis, il me faudrait utiliser le scope admission.

---
title: API INES
tagline: L’API INES (Identifiant National dans l'Enseignement Supérieur) permet la vérification et l’immatriculation des étudiants dans l’enseignement supérieur.
producer: mesri
contact_link: projet.ines@enseignementsup.gouv.fr
is_open: -1

access_page:
  - who:
      - Un particulier
    is_eligible: -1
    description: |
      L’API s’adresse à tous les établissements proposant une formation dans l’enseignement supérieur et aux systèmes d’information dans l'enseignement supérieur, comme les plateformes de candidature aux établissements d’enseignement supérieur ou le CNOUS.
      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Une entreprise
    is_eligible: 0
    description: |
      Si vous êtes une entreprise dans l'enseignement supérieur, vous êtes alors peut-être éligible.
      Contactez le projet INES à l'adresse : projet.ines@enseignementsup.gouv.fr

      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Etablissement ou système d'information dans l'enseignement supérieur
    is_eligible: 1
    description: |
      Une authentification (identifiants d’accès directement fourni par le MESR aux établissements) est nécessaire.
      Contactez le projet INES à cette adresse si besoin : projet.ines@enseignementsup.gouv.fr
      <Button href="https://ines.enseignementsup-recherche.gouv.fr">Se connecter</Button>

themes:
 - Education
 - Enseignement
 - Immatriculation
keywords:
  - Education
  - Enseignement
  - Immatriculation
  - Verification
  - INES
  - Identifiant
last_update: 25/06/2024
doc_tech_external: https://ines.enseignementsup-recherche.gouv.fr
content_intro: |

---

### À quoi sert l'API INES ?

L’API INES (Identifiant National dans l'Enseignement Supérieur) permet la vérification et l’immatriculation des étudiants dans l’enseignement supérieur.
La vérification s’effectue à partir des données d’état civil de l’étudiant et permet de récupérer son identifiant national étudiant unique s’il est déjà immatriculé.
L’immatriculation permet d’obtenir un identifiant national unique pour l’étudiant, qui lui sera associé durant tout son parcours d’étudiant.

INES permet une immatriculation unique de tout étudiant:
- dans l’ensemble des établissements, indépendamment de ses mobilités
- dans tous les autres systèmes d’information sur les étudiants
L'identifiant national de l’étudiant est une donnée pivot pour mettre en relation l’ensemble des SI les concernant, qu’ils émanent des établissements, du Ministère de l'Enseignement Supérieur et de la Recherche et des administrations publics (StatutEtudiant, remontées SISE), ou des opérateurs (PARCOURSUP, CNOUS…).


## Principales données disponibles

L’API s’adresse à tous les établissements proposant une formation dans l’enseignement supérieur et aux systèmes d’information dans l'enseignement supérieur, comme les plateformes de candidature aux établissements d’enseignement supérieur ou le CNOUS.

L’obtention d’un identifiant national étudiant (INE) d’INES se fait à partir des données d’état civil de l’étudiant.

Une authentification (identifiants d’accès directement fourni par le MESR aux établissements) est nécessaire. Sinon, il n’y a pas de restriction particulière quant à l’utilisation de cette API.

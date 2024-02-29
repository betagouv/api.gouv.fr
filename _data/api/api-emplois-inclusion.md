---
title: API Les emplois de l'inclusion
tagline: Faciliter la mise en relation des personnes les plus éloignées de l'emploi avec les employeurs solidaires (SIAE, GEIQ, EA et EATT) et les accompagnants (orienteurs et prescripteurs habilités).
is_open: 0 # 0 means API require an account
account_link: https://emplois.inclusion.beta.gouv.fr/api/v1/redoc/
external_site: https://emplois.inclusion.beta.gouv.fr
producer: gip-inclusion
keywords:
  - Insertion
  - social
  - Inclusion
  - Subvention
  - Aides
  - Entreprise
  - Handicap
  - ETTI
  - EITI
  - GEIQ
  - EATT
  - ESAT
  - Inclusive
#rate_limiting_resume: 
themes:
  - Entreprise
  - Emploi
contact_link: api@inclusion.beta.gouv.fr
doc_tech_link: https://emplois.inclusion.beta.gouv.fr/api/v1/redoc/
last_update: 22/02/2024
---

## Description

L'API Les emplois de l'inclusion offre aux utilisateurs un outil mutualisé pour simplifier les procédures, fluidifier les parcours d'insertion entre professionnels et renforcer la qualité de l'accompagnement des personnes.

### À quoi sert l'API Les emplois de l'inclusion ?


L'API permet de visualiser :

🔎 Liste des candidats par structure

Retourne la liste de tous les demandeurs d'emploi liés à une candidature pour la structure en cours.
Les candidats sont triés par date de création dans la base des emplois de l'inclusion, du plus récent au plus ancien.

🔎 Liste des embauches réalisées en GEIQ

Retourne la liste complète des embauches réalisées en GEIQ connues des Emplois de l'inclusion. Ces embauches représentent des candidatures acceptées.
Elles ne seront plus listées par l'API une fois le contrat terminé.

🔎 Fiches salarié

Retourne la liste des fiches salarié saisies par les SIAE :
- pour toutes les embauches / candidatures des SIAE liées au token d'identification
- classées par date de création (plus récent au plus ancien)


Il est également possible d'obtenir le détail d'une fiche salarié par son identifiant (dans les mêmes conditions d'autorisation que pour la liste complète).

🔎 Liste des SIAE

Renvoie une liste de SIAE à proximité d’une ville (déterminée par son code INSEE) et dans un rayon de recherche en kilomètres autour du centre de cette ville.
Les coordonnées des centres-villes sont issus de [geo.api.gouv.fr](https://geo.api.gouv.fr/).
Chaque SIAE est accompagnée d’un certain nombre de métadonnées :

```
SIRET
Type
Raison Sociale
Enseigne
Site web
Description de la SIAE
Blocage de toutes les candidatures OUI/NON
Adresse de la SIAE
Complément d’adresse
Code Postal
Ville
Département
```

Chaque SIAE peut proposer 0, 1 ou plusieurs postes. Pour chaque poste renvoyé, les métadonnées fournies sont :

```
Appellation ROME
Date de création
Date de modification
Recrutement ouvert OUI/NON
Description du poste
```

👉 [Tester le service](https://emplois.inclusion.beta.gouv.fr)

### Périmètre

#### Insertion par l'activité économique (IAE)

➡️  Entreprises d'insertion (EI),<br>
➡️  Associations intermédiaires (AI),<br>
➡️  Ateliers de chantier d'insertion (ACI),<br>
➡️  Entreprises de travail temporaire d'insertion (ETTI),<br>
➡️  Entreprises d'insertion par le travail indépendant (EITI),<br>
➡️  Groupements d'employeurs pour l'insertion et la qualification (GEIQ)<br>

#### Handicap :

➡️  Entreprises adaptées (EA),<br>
➡️  Entreprises adaptées de travail temporaire (EATT),<br>
➡️  Etablissements et services d'aides par le travail (ESAT)<br>

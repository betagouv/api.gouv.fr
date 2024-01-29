---
title: API Marché de l'inclusion
tagline: Retrouvez facilement les informations sur les structures de l'inclusion
is_open: 0 # 0 means API require an account
account_link: https://lemarche.inclusion.beta.gouv.fr/api/
external_site: https://lemarche.inclusion.beta.gouv.fr/
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
contact_link: lemarche.api@inclusion.beta.gouv.fr
doc_tech_link: https://lemarche.inclusion.beta.gouv.fr/api/schema/
last_update: 29/01/2024
---

Le marché de l'inclusion est un moteur de recherche qui permet de retrouver facilement l'ensemble des structures de l'inclusion.

### À quoi sert l’API Structures de l'inclusion ?

L'API référence toutes les entreprises sociales inclusives.

**Insertion par l'activité économique :**

- Entreprises d'insertion (EI),
- Associations intermédiaires (AI),
- Ateliers de chantier d'insertion (ACI),
- Entreprises de travail temporaire d'insertion (ETTI),
- Entreprises d'insertion par le travail indépendant (EITI),
- Groupements d'employeurs pour l'insertion et la qualification (GEIQ)

**Handicap :**

- Entreprises adaptées (EA),
- Entreprises adaptées de travail temporaire (EATT),
- Etablissements et services d'aides par le travail (ESAT)

### Quelles sont les données contenues dans l'API Structures de l'inclusion ?

On retrouve - entre autres - pour chaque structure :

| Nom de la donnée      | Description                        |
| --------------------- | ---------------------------------- |
| name                  | Raison sociale                     |
| brand                 | Nom commercial                     |
| kind                  | Type de structure                  |
| siret                 | Numéro de siret de la structure    |
| address               | Localisation de la structure       |
| offers                | Offres proposées par la structure  |
| sectors               | Secteurs d'activité                |
| networks              | Liens avec les différents réseaux  |
| labels                | Labels de la structure             |
| updated_at            | Date de dernière mise à jour       |

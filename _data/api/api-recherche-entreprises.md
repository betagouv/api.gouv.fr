---
title: API Recherche d’entreprises
tagline: Rechercher une entreprise française, par sa dénomination, ou son adresse
producer: dinum
is_open: 1 # 0 means API require an account
partners:
  - dinum
  - insee
  - inpi
keywords:
  - Entreprise
  - Etablissements
  - Sirene
  - entreprise.data
themes:
  - Entreprise
rate_limiting_resume: 7 appels / seconde
rate_limiting_description: |
  Actuellement, le nombre d’appels à l’API est limité à 7 appels par seconde
uptime: 100
monitoring_link: https://stats.uptimerobot.com/kXzwzfk7BE
monitoring_description: |
  Une supervision du service en temps réel est disponible à cette adresse.
contact_link: recherche-entreprises@api.gouv.fr
doc_tech_link: https://recherche-entreprises.api.gouv.fr/docs/swagger.json
doc_tech_external: https://recherche-entreprises.api.gouv.fr/docs/
datagouv_uuid:
  - 5b7ffc618b4c4169d30727e0
  - 5c34c4d1634f4173183a64f1
  - 62bd63b70ff1edf452b83a6b
  - 5fc9b4729dbf684fecb13bae
visits_2019: 10000
last_update: 23/05/2022
content_intro: |
  L’API Recherche d’entreprises permet à tout le monde de rechercher et de trouver une entreprise française.

  ### A quoi sert l’API Recherche d’entreprises ?

  L'API permet de rechercher une entreprise de deux manières :

  - Recherche textuelle (dénomination, adresse, dirigeants et élus)
  - Recherche géographique
---

### Données accessibles dans l'API

L’API étant totalement ouverte d'accès, elle comporte des limitations. Ainsi ne sont pas accessibles dans l'API :

- les prédécesseurs et successeurs d'un établissement
- les entreprises non-diffusibles
- les entreprises qui se sont vues refuser leurs immatriculation au RCS

**Attention,** cette API ne permet pas d'accèder aux données complètes de la base Sirene, mais uniquement de rechercher une entreprise, par sa dénomination ou son adresse. Pour savoir comment obtenir les données complètes, consultez [notre fiche explicative.](/guides/quelle-api-sirene)

L'API permet de rechercher une entreprise et retourne pour chaque résultat :

| Donnée       | Description                                                                    |
| ------------ | ------------------------------------------------------------------------------ |
| dénomination | le nom de l'entreprise                                                         |
| SIREN        | le numero unique de l'entreprise                                               |
| SIRET        | le numero unique de l'établissement                                            |
| NAF          | le code NAF ou code APE, un code d'activité suivant la nomenclature de l'INSEE |

### Filtres et utilisation avancée

| Filtre                    | Description                                |
| ------------------------- | ------------------------------------------ |
| NAF                       | filtrer les entreprises par code NAF       |
| Code postal               | filtrer les entreprises par un code postal |
| Effectif salarié                       | filtrer par tranche effectif salarié        |
| Entreprises individuelles | uniquement les entreprises individuelles   |

Pour en savoir plus sur les filtres avancés, consultez la [documentation.](/documentation/api-recherche-entreprises)


## Infolettre

Pour vous abonner à l'infolettre pour être informé des mises à jour de la part de l’équipe :

<Button href="https://2f62ff46.sibforms.com/serve/MUIFAO95z3V-BJo1feDe7qoHnkmSCfysBZZFjIFSjvvnqZ1C8aAGCT1-vESBVRjnjM8fKD_Mt7Q0ENMgGon61yySA7u3dn8MS3rdd5Ax_aQ7ORuB5tglGXJ00VEnG5Tp5ggraqa5x6oPoyaleNDDkDmijlzwmSxWRs5zfSubvr3dGQMlxymwf2uU4xY1N51BjN5F5vvNMDu-s9IT">Abonnez-vous à l'infolettre</Button>


## Politique de confidentialité

Consulter [la politique de confidentialité](https://annuaire-entreprises.data.gouv.fr/vie-privee).




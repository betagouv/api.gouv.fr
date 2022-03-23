---
title: API Sirene données ouvertes
tagline: Accéder librement aux informations des entreprises et des établissements de la base Sirene
producer: dinum
is_open: 1 # 0 means API require an account
partners:
  - beta.gouv.fr
  - DINUM
  - INSEE
  - Etalab
keywords:
  - Entreprise
  - Etablissements
  - Sirene
themes:
  - Entreprise
rate_limiting_resume: 7 appels / seconde
rate_limiting_description: |
  Actuellement, le nombre d’appels à l’API est limité à 7 appels par seconde
uptime: 100
monitoring_link: https://status.entreprise.data.gouv.fr/
monitoring_description: |
  Une supervision du service en temps réel est disponible à cette adresse.
contact_link: entreprise@data.gouv.fr
doc_tech_external: https://entreprise.data.gouv.fr/api_doc/sirene
datagouv_uuid:
  - 5b7ffc618b4c4169d30727e0
visits_2019: 10000
last_update: 11/10/2020
content_intro: |
  L’API Sirene données ouvertes permet à tout le monde d'accéder aux données de la base Sirene de l'INSEE, sans aucune limite d'accès.

  La base Sirene ou répertoire Sirene est tenue par l'INSEE (Institut National de la Statistique et des Études Économiques) et contient les informations des entreprises enregistrées en France, ainsi que toutes les associations disposant d’un code SIRET.

  ### A quoi sert l’API Sirene données ouvertes ?

  L'API s'utilise principalement de deux manières :

  - Récupérer les informations d’une entreprise
  - Faire de l'auto remplissage de formulaire (par exemple, auto remplissage de SIRET)
  - Créer un moteur de recherche des entreprises
---

### Données accessibles dans l'API

**Attention,** l’API étant totalement ouverte d'accès, elle comporte des limitations. Ainsi ne sont pas accessibles dans l'API :

- les prédécesseurs et successeurs d'un établissement
- les entreprises non-diffusibles ([en savoir plus](https://www.insee.fr/fr/information/4127417))
- les entreprises qui se sont vues refuser leurs immatriculation au RCS

Pour savoir comment obtenir ces données, consultez [notre fiche explicative.](/guides/quelle-api-sirene)

Pour les établissements et entreprises accessibles, l'API permet d'obtenir :

| Donnée            | Description                                                                     |
| ----------------- | ------------------------------------------------------------------------------- |
| dénomination      | le nom de l'entreprise                                                          |
| SIREN             | le numero unique de l'entreprise                                                |
| SIRET             | le numero unique de l'établissement                                             |
| NAF               | le code NAF ou code APE, un code d'activité suivant la nomenclature de l'INSEE  |
| date              | la date de création et de clôture (si applicable)                               |
| siege social      | Est-ce que cet établissement est le siège social de l'entreprise                |
| forme juridique   | la forme juridique de l'établissement (SARL, SAS, entreprise individuelle etc.) |
| tranche effectifs | la fourchette des effectifs de l'établissement                                  |

---
title: API Impacts environnementaux - AGRIBALYSE®
tagline: Interrogez base de données des indicateurs d'impacts environnementaux des produits agricoles et alimentaires produits et/ou consommés en France
external_site: https://data.ademe.fr/datasets/agribalyse-synthese
is_open: 1 # 1 means API is fully open
producer: ademe
keywords:
  - region
  - departements
  - agribalyse
  - ADEME
  - produit
  - agricole
  - alimentaire
  - agriculture
rate_limiting_resume: 10 appels / seconde / IP
themes:
  - Environnement
contact_link: https://www.ademe.fr/content/contacter
doc_tech_link: https://koumoul.com/s/data-fair/api/v1/datasets/agribalyse-synthese/api-docs.json
doc_tech_external: https://data.ademe.fr/datasets/agribalyse-synthese
datagouv_uuid:
  - 5f71f6b9f23df7fcd508af57
last_update: 27/07/2020
---

L'API Impacts environnementaux permet d'interroger la base AGRIBALYSE® qui référence les indicateurs d'impacts environnementaux des produits agricoles produits en France et des produits alimentaires consommés en France.

### A quoi sert cette API ?

Elle permet de connaitre, pour chaque aliment/produit :

- impact carbone
- impact couche d'ozone
- impact sur la qualité de l'eau
- coût energétique
- impact sur l'eutrophisation de l'eau et des terres
- impact sur l'acidification terrestre des eaux douces
- utilisation du sol
- utilisation de mineraux

### Données disponibles dans l'API

| Nom de la donnée       | Description                                                                                                                                          |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nom                    | nom de l'aliment / du produit                                                                                                                        |
| Type d'aliment         | description de l'aliment (fruit, viande etc.)                                                                                                        |
| Emballage              | materiau de l'emballage                                                                                                                              |
| Impact Environnemental | impact carbone, impact couche d'ozone, impact sur la qualité de l'eau, impact sur les mineraux, coût energétique, eutrophisation, utilisation du sol |
| Transport aérien       | Est ce que le produit est transporté par avion                                                                                                       |

### En savoir plus sur les données

Ces données ont vocation à contribuer à la transition environnementale des systèmes agricoles et alimentaires. Elles sont fondées sur la méthode de l’Analyse du Cycle de Vie (ACV), qui fournit des indicateurs d’impacts environnementaux des produits, incluant toutes les étapes (du champ à l’assiette) et les différents enjeux (climat, eau, air, sol…). Elles sont construites à partir d'un certains nombres d'hypothèses et selon un cadre méthodologique précis.

Ces données scientifiques nécessitent d'être adaptées en fonction de leur contexte et des utilisateurs. Il est nécessaire de prendre connaissance du ["Guide d'utilisateur"](https://ecolab.gitbook.io/documentation-agribalyse/conditions-dusage-des-donnees) pour éviter les contre-sens ou des usages inadaptés.

Plus largement une large [documentation](https://ecolab.gitbook.io/documentation-agribalyse/) est disponible et garantie la transparence des travaux. Ces travaux innovants sont évolutifs et des améliorations et mises à jour auront lieu les prochaines années. Toutes les informations et contacts : [www.agribalyse.fr](https://www.agribalyse.fr)

### Aller plus loin et télécharger les données brutes

Deux autres jeux de données liés sont disponibles :

| Nom de la donnée                  | Lien                                                                                  |
| --------------------------------- | ------------------------------------------------------------------------------------- |
| Détails par étape du cycle de vie | [voir le jeu de données](https://data.ademe.fr/datasets/agribalyse-detail-etape)      |
| Détails par ingrédient            | [voir le jeu de données](https://data.ademe.fr/datasets/agribalyse-detail-ingredient) |

### À propos de l'Open Data a l’ADEME

Cette API est en Open Data. Elle permet de consulter des données ouvertes, <External href="https://www.etalab.gouv.fr/licence-ouverte-open-licence">sous licence Etalab</External>.

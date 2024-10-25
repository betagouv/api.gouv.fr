---
title: API BDM
tagline: Accéder aux indices et séries chronologiques de l’Insee
producer: insee
is_open: 0 # 0 means API require an account
account_link: https://api.insee.fr/catalogue/site/themes/wso2/subthemes/insee/pages/sign-up.jag
rate_limiting_resume: 30 appels / minute / IP
rate_limiting_description: |
  L'API est disponible à hauteur de 30 appels par minute et par adresse IP.
monitoring_description: |
  L'Insee s'engage à une obligation de moyens pour maintenir la disponibilité du service 99,5 % du temps mensuel, apprécié au terme de chaque mois.
keywords:
  - Insee
  - communes
  - indice
  - séries chronologiques
  - statistiques
  - économie
  - indicateurs
themes:
  - Administration & législation
contact_link: https://api.insee.fr/catalogue/site/themes/wso2/subthemes/insee/pages/help.jag#contact
doc_tech_link: https://api.insee.fr/catalogue/api-docs/carbon.super/BDM/V1?envName=Production%20and%20Sandbox
useSwaggerProxy: true
doc_tech_external: https://api.insee.fr/catalogue/site/themes/wso2/subthemes/insee/pages/item-info.jag?name=BDM&version=V1&provider=insee
datagouv_uuid:
  - 53699185a3a729239d203ca3
  - 53699f97a3a729239d206178
  - 53699132a3a729239d203bcd
  - 53699dc9a3a729239d205d08
last_update: 01/05/2020
---

L’API ‘BDM’ permet d’accéder aux indicateurs diffusés sur insee.fr dans la rubrique “indices et séries chronologiques”. Les données sont identiques à celles présentées sur le site web de l’Insee.

### Données

Les données sont réparties dans une centaine de regroupements thématiques, souvent définis à partir de la source permettant de les calculer. On y retrouve entre autres :

| Nom de la donnée                                        | Description                                                              |
| ------------------------------------------------------- | ------------------------------------------------------------------------ |
| Revenus – Pouvoir d'achat – Consommation                | indice des prix à la consommation                                        |
| Économie – Conjoncture – Comptes nationaux              | indicateurs permettant le diagnostic conjoncturel de l’économie français |
| comptes nationaux annuels                               |                                                                          |
| indicateurs liés aux objectifs de développement durable | indicateurs liés aux objectifs de développement durable                  |

### En savoir plus

La liste complète de ces regroupements est accessible sur le <External href="https://www.insee.fr/fr/statistiques/3530678">site web de l’Insee</External>, directement par cette API (`GET /dataflow`) ou <External href="https://api.insee.fr/catalogue/site/themes/wso2/subthemes/insee/pages/item-info.jag?name=BDM&version=V1&provider=insee#!/Regroupements_thematiques/get_data_dataflow">sur la documentation détaillée de l’API</External>.

La recherche de valeurs s’effectue de deux manières, soit directement à l’aide de l’identifiant propre à la série (idBank), soit au sein d’un regroupement, que l’on peut récupérer globalement ou partiellement.

#### Accès simplifié aux données par idbank

Il est possible de récupérer rapidement les valeurs et les caractéristiques de 1 à 400 séries identifiées par leur idbank. Dans ce cas l'utilisateur devra au préalable avoir repéré sur le site les identifiants des séries qui l'intéressent.

#### Accès aux données par regroupements thématiques

Cette fonctionnalité permet de récupérer les données d'un ensemble de séries ayant les mêmes caractéristiques. La requête est de la forme :

`/data/dataflow/clé?paramètres`

où [dataflow] est l'identifiant du regroupement interrogé.Pour des raisons de performance, une limite de volume est fixée à 5000 séries.

Lorsque cette limite est atteinte, le webservice propose un découpage permettant de récupérer l’ensemble des séries en plusieurs requêtes.La partie [clé] permet d'indiquer pour chaque dimension (séparées par des ".") les modalités retenues (séparées par des "+").

Pour aller plus loin, consultez la documentation sur le <External href="https://api.insee.fr/catalogue/site/themes/wso2/subthemes/insee/pages/item-info.jag?name=BDM&version=V1&provider=insee#!/Regroupements_thematiques/get_data_dataflow">site de l’Insee</External>.

---
title: API Sirene
tagline: Accéder aux informations concernant les entreprises et les établissements immatriculés au répertoire interadministratif Sirene de l'Insee
external_site: https://api.insee.fr
producer: insee
is_open: 0 # 0 means API require an account
account_link: https://api.insee.fr/catalogue/site/themes/wso2/subthemes/insee/pages/sign-up.jag
keywords:
  - Entreprise
  - Etablissements
  - Sirene
themes:
  - Entreprise
rate_limiting_resume: 30 appels / minute
rate_limiting_description: |
  L'usage d'API Sirene est soumis à une limite de 30 interrogations par minute. L'Insee se réserve le droit de changer cette limite en cas de nécessité.
contact_link: https://api.insee.fr/catalogue/site/themes/wso2/subthemes/insee/pages/help.jag#contact
doc_tech_link: https://api.insee.fr/catalogue/api-docs/carbon.super/Sirene/V3?envName=Production%20and%20Sandbox
useSwaggerProxy: true
doc_tech_external: https://api.insee.fr/catalogue/site/themes/wso2/subthemes/insee/pages/item-info.jag?name=Sirene&version=V3&provider=insee
datagouv_uuid:
  - 5b7ffc618b4c4169d30727e0
visits_2019: 3785
last_update: 22/08/2019
content_intro: |
  API Sirene donne accès aux informations concernant les entreprises et les établissements immatriculés au répertoire interadministratif Sirene depuis sa création en 1973, y compris les unités fermées.
---

### Données accessibles dans l'API

L'API Sirene permet d'accéder simplement aux données de multiples administrations.

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

### A propos des fonctionnalités de recherche de l’API

La recherche peut être unitaire, multicritère, phonétique et porter sur les données courantes et historisées.

Les services actuellement disponibles interrogent les unités légales (Siren), les établissements (Siret) et les liens de succession entre établissements. À venir : données pluriannuelles.

### Licences

La réutilisation des jeux de données mis à votre disposition à partir de la base Sirene est soumise à la licence [« Licence Ouverte / Open Licence version 2.0 »](https://www.etalab.gouv.fr/licence-ouverte-open-licence) conçue par Etalab, organisme chargé de coordonner l’action des services de l’État et de ses établissements publics pour faciliter la réutilisation la plus large possible de leurs informations publiques, via le portail interministériel [data.gouv.fr](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/)

La base Sirene contenant des données à caractère personnel, l’Insee attire votre attention sur les obligations légales qui en découlent :

Le traitement de ces données relève des obligations de déclaration de la Loi 78-17 du 6 janvier 1978 modifiée, dite Loi Informatique et Libertés : [Loi 78-17](http://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000886460)
Selon votre usage du jeu de données, il est de votre responsabilité de tenir compte du statut de diffusion le plus récent de chaque personne physique.
En effet, selon l’[Article A123-96 du code de commerce](http://www.legifrance.gouv.fr/affichCodeArticle.do;jsessionid=C505A51DBC1A4EB1FFF3764C69ACDB1C.tpdjo11v_1?idArticle=LEGIARTI000020165030&cidTexte=LEGITEXT000005634379&dateTexte=20100702) :

"Toute personne physique peut demander soit directement lors de ses formalités de création ou de modification, soit par lettre adressée au directeur général de l’Institut national de la statistique et des études économiques, que les informations du répertoire la concernant ne puissent être utilisées par des tiers autres que les organismes habilités au titre de l’[article R. 123-224](https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000005634379&idArticle=LEGIARTI000006258837&dateTexte=&categorieLien=cid) ou les administrations, à des fins de prospection, notamment commerciale."

### Droit de rectification des données du répertoire Sirene

[L'article A123-90 du code de commerce](https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000020165042&cidTexte=LEGITEXT000005634379&dateTexte=20151223) indique que "Le droit d'accès prévu par l'article 39 de la loi du 6 janvier 1978 s'exerce auprès du directeur régional de l'Institut national de la statistique et des études économiques."

### Homologation RGS (Référentiel général de sécurité)

Le directeur général de l’Insee, après avoir recueilli l’avis des membres de la commission d’homologation de sécurité, atteste que le système "API Sirene" est protégé, conformément aux objectifs fixés par le maître d’ouvrage, pour répondre, de manière proportionnée, aux besoins de protection du système et des informations, face aux risques identifiés.

Paris le 24 Juin 2019

Pour le directeur général de l’Insee

Par délégation

Le secrétaire général de l’Insee

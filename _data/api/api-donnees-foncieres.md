---
title: API données foncières
tagline: Accéder aux bases de données foncières
is_open: -1 # 1 means API is fully open
access_page: 
  - who:
      - Un particulier
    is_eligible: -1
    description: |
      Vous ne pouvez pas accéder aux données restreintes (sur les propriétaires et les locaux).
      
      En revanche vous pouvez utiliser : 

      - ✅ L'[API en accès libre](/documentation/api-donnees-foncieres)
      - ✅ Les [cartographies du CEREMA](https://dataviz.cerema.fr/dynmark/)

      <Button href="https://dataviz.cerema.fr/dynmark/">Accéder aux cartographies</Button>
  - who:
      - Une entreprise
      - Une administration
    is_eligible: 0
    description: |
        **...si votre structure est :**

        - Un service de l'État,
        - Un établissement public de l'État,
        - Une collectivité territoriale,
        - Une agence d'urbanisme,
        - Un EPF, SAFER, ADIL, OLAP, SCoT,
        - Un organisme de recherche,
        - Une infrastructure de données géographiques,
        - Une autre structure déjà bénéficiaire des données MAJIC.

        <Button href="https://consultdf.cerema.fr/consultdf/">Faire une demande</Button>
  - who:
      - Une structure déjà bénéficiaire des fichiers MAJIC
    is_eligible: 1
    description: |
        <Button href="https://consultdf.cerema.fr/consultdf/">Faire une demande</Button>
external_site: https://datafoncier.cerema.fr/
producer: cerema
partners: 
  - dgaln
keywords:
  - DVF
  - Foncier
  - Cadastre
  - Mutation
  - Propriété
  - DV3F
  - MAJIC
  - Prix
  - Immobilier
  - Statistiques
  - Marché
  - Vente
  - Communes
  - Géographique
  - Territoire
  - DGALN
themes:
  - Géographie
  - Particulier
content_intro: |
  L'API Données foncières permet d'accéder aux données foncières (restreintes) et aux données ouvertes sur les transactions immobilières (DVF) et indicateurs par territoires. 

  🧪 *L'API est actuellement en version beta, le niveau de service sera progressivement amélioré au cours de l'année 2023.*

contact_link: datafoncier@cerema.fr 
doc_tech_link: https://apidf-preprod.cerema.fr/schema/
visits_2019: 3000
last_update: 21/02/2023
---

## À quoi sert l'API données foncières ?

L'API données foncières permet d'accéder aux caractéristiques sur les locaux et les parcelles, dont les prix des ventes immobilières.

### Statistiques sur les transactions immobilières

Une partie des données est librement accessible : [voir la cartographie des demandes de valeurs foncières](https://app.dvf.etalab.gouv.fr/).
Dans ce cas, l'API peut être utilisée pour alimenter des tableaux de bord sur les **prix de l'immobilier**, de réaliser des **statistiques selon les territoires et les types de biens**.

### Usages réservés aux collectivités territoriales

D'autres données sont réservées à l'usage exclusif de l'administration, car elles contiennent des données personnelles (informations sur les propriétaires et leurs locaux, données fiscales, etc...). Ces données peuvent par exemple servir [aux études locales sur la vacance des logements.](https://datafoncier.cerema.fr/usages)

## Quelles sont les données accessibles dans l'API données foncières ?

### 🔐 DV3F - accès restreint

<details> 
    <summary>Présentation</summary>
DV3F est un modèle qui enrichit la donnée source DVF avec les variables des Fichiers fonciers pour une caractérisation plus fine des biens : informations sur les acheteurs et les vendeurs ainsi que sur la contextualisation des transactions (constructions ou démolition de locaux suite à la vente, aménagement de parcelles, stabilité, etc...).
</details>

<br>

<details> 
    <summary>Détail des données</summary>
    <p>
    **DV3F - Géomutations : ** Retourne, en GeoJSON, les mutations pour la commune ou l'emprise rectangulaire demandée
    <p>
    **DV3F - Mutations :** Retourne les mutations issues de DV3F pour la commune ou l'emprise rectangulaire demandée
    <p>
    **DVF - IdMutations :** Retourne la mutation issue de DV3F pour l'identifiant de mutation demandé
</details>

<br>

<details> 
    <summary>Modalités d'accès</summary>
    <p>
    Ces données sont en accès restreint, réservées à un usage dans le cadre d'une mission de service public.
    <p>
    **Les bénéficiaires des données foncières sont parmi les structures suivantes :**

    - Services de l'État,
    - Établissements publics de l'État,
    - Collectivités territoriales,
    - Agences d'urbanisme,
    - EPF, SAFER, ADIL, OLAP, SCoT,
    - Organismes de recherche,
    - Infrastructures de données géographiques,
    - Autres structures bénéficiaires de MAJIC.

<Button href="/les-api/api-donnees-foncieres/demande-acces">Demander un accès</Button>

</details>

### 🔓 DVF+ - accès libre

<details> 
    <summary>Présentation</summary>
    <p>
"DVF+ open-data" permet d'accéder librement à la donnée [Demandes de valeurs foncières](https://www.data.gouv.fr/fr/datasets/demandes-de-valeurs-foncieres/), sous la forme d'une base de données géolocalisée aisément exploitable pour l'observation des marchés fonciers et immobiliers.
<p>
Ce modèle, développé pour faciliter les analyses, fournit notamment une table des mutations dans laquelle chaque ligne correspond aux informations et à la localisation d'une transaction.
<p>
La géolocalisation s'appuie sur les différents millésimes du Plan cadastral informatisé également disponibles en open-data sur data.gouv.fr.
</details>

<br>

<details> 
    <summary>Détail des données</summary>
    <p>
    **DV3F - Géomutations : ** Retourne, en GeoJSON, les mutations pour la commune ou l'emprise rectangulaire demandée
    <p>
    **DV3F - Mutations :** Retourne les mutations pour la commune ou l'emprise rectangulaire demandée
    <p>
    **DVF - IdMutations :** Retourne la mutation pour l'identifiant de mutation demandé
</details>

<br>

<details> 
    <summary>Modalités d'accès</summary>
    <p>
    Ces données sont en accès libre
    <p>
    <Button href="/documentation/api-donnees-foncieres">Accéder à l'API</Button>
</details>

### 🔐 Fichiers fonciers (accès restreint)

<details> 
    <summary>Présentation</summary>
    <p>
Il s'agit des données "MAJIC" enrichies.
<p>
Les Fichiers fonciers décrivent de manière détaillée le foncier, les locaux ainsi que les différents droits de propriété qui leur sont liés. Ils sont aujourd’hui devenus essentiels dans de nombreux domaines tels que l’occupation du sol, l’aménagement, le logement, le risque et l’énergie.
</details>

<br>

<details> 
    <summary>Détail des données</summary>
    <p>
    - locaux
    - parcelles
    - propriétaires
    - tableau unifié parcellaire
</details>

<br>

<details> 
    <summary>Modalités d'accès</summary>
    <p>
    Ces données sont en accès restreint, réservées à un usage dans le cadre d'une mission de service public.
    <p>
    **Les bénéficiaires des données foncières sont parmi les structures suivantes :**

    - Services de l'État,
    - Établissements publics de l'État,
    - Collectivités territoriales,
    - Agences d'urbanisme,
    - EPF, SAFER, ADIL, OLAP, SCoT,
    - Organismes de recherche,
    - Infrastructures de données géographiques,
    - Autres structures bénéficiaires de MAJIC.

<Button href="/les-api/api-donnees-foncieres/demande-acces">Demander un accès</Button>

</details>

### 🔓 Indicateurs (open data)

<details> 
    <summary>Présentation</summary>
    <p>
La base de données DV3F facilite l'observation des marchés et permet de produire des indicateurs de prix et de volumes de transactions à différentes échelles géographiques afin d'apprécier et d'étudier les marchés fonciers et immobiliers d'un territoire.
<p>
[Accéder aux cartographies et aux indicateurs](https://cartagene.cerema.fr/portal/apps/instant/portfolio/index.html?appid=670464db4dff42279b10de3c0bea0d2e)
</details>

<br>

<details> 
    <summary>Détail des données</summary>
    <p>
    - Indicateurs de consommation d'espace par commune et par département
    <p>
    - Indicateurs annuels DV3F par commune, département, région et EPCI
</details>

<br>

<details> 
    <summary>Modalités d'accès</summary>
    <p>
    Ces données sont en accès libre
    <p>
    <Button href="/documentation/api-donnees-foncieres">Accéder à l'API</Button>
</details>

## En savoir plus

### Usages des données

- Voir la [liste des usages possibles des données foncières](https://datafoncier.cerema.fr/usages)
- Accéder aux [outils d'observation et d'analyse du foncier](https://datafoncier.cerema.fr/les-outils-dobservation-et-danalyse-du-foncier)

### Documentation

- [Mieux comprendre les données du CEREMA](https://datafoncier.cerema.fr/donnees)
- [Dictionnaire des fichiers fonciers](http://doc-datafoncier.cerema.fr/ff/doc_fftp/)

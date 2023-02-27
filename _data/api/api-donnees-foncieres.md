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
      - Une structure bénéficiaire des données foncières
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
  L'API Données foncières permet d'accéder aux principales données foncières, d’origine fiscale, enrichies par le Cerema et la Direction Générale de l’Aménagement, du Logement et de la Nature (DGALN).

  🧪 *L'API est actuellement en version beta, le niveau de service sera progressivement amélioré au cours de l'année 2023.*

contact_link: datafoncier@cerema.fr 
doc_tech_link: https://apidf-preprod.cerema.fr/schema/
visits_2019: 3000
last_update: 21/02/2023
---

## À quoi sert l'API données foncières ?

Les **flux ouverts** de cette API permettent d’accéder aux **transactions foncières et immobilières** issues de DVF et à des différents indicateurs de territoires relatifs au **prix de l’immobilier** ou la **consommation d’espace NAF** depuis 2010. 

Les **flux restreints**, pour les bénéficiaires publics, permettent d’accéder aux **informations détaillées sur les parcelles, unités foncières, locaux et propriétaires** issus de l’information cadastrale (Fichiers fonciers) ainsi qu’aux **données enrichies de prix du foncier et de l’immobilier** (DV3F).

### Des données d’observation pour les territoires

Une partie des données est librement accessible. Dans ce cas, l'API peut être utilisée pour alimenter des cartes et tableaux de bord sur les **prix de l'immobilier**, la consommation d’espace, de réaliser des statistiques selon différentes échelles de territoire. Exemple : https://dataviz.cerema.fr/dynmark/

### Des usages destinés aux acteurs publics de l’aménagement

Les données réservées à la sphère publique (Etat, collectivités territoriales, etc.) contiennent des données personnelles sur les propriétaires, leur foncier et leurs locaux. 

Elles constituent un socle d’informations très riche, adapté aux missions des acteurs de l’aménagement dans la définition, la conduite et l’évaluation de leurs politiques publiques : mesure de l’étalement urbain, lutte contre la vacance des logements, identification des friches, rénovation énergétique, identification des enjeux en zone à risques, observatoires fonciers, etc.

## Quelles sont les données accessibles dans l'API données foncières ?

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
    - parcelle (en geojson et json)
    - tableau unifié parcellaire (en geojson et json)
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
    **DVF+ - Géomutations : ** Retourne, en GeoJSON, les mutations pour la commune ou l'emprise rectangulaire demandée
    <p>
    **DVF+ - Mutations :** Retourne les mutations pour la commune ou l'emprise rectangulaire demandée
    <p>
    **DVF+ - IdMutations :** Retourne la mutation pour l'identifiant de mutation demandé
</details>

<br>

<details> 
    <summary>Modalités d'accès</summary>
    <p>
    Ces données sont en accès libre
    <p>
    <Button href="/documentation/api-donnees-foncieres">Accéder à l'API</Button>
</details>

### 🔓 Indicateurs de territoire (avvès ouvert)

<details> 
    <summary>Présentation</summary>
    <p>
Les indicateurs agrégés proposés correspondent aux [données de consommation d’espace](https://artificialisation.developpement-durable.gouv.fr/) issus des Fichiers fonciers et [les indicateurs de prix de l’immobiliers](https://cartagene.cerema.fr/portal/apps/instant/portfolio/index.html?appid=670464db4dff42279b10de3c0bea0d2e) issus de DV3F.
<p>
Ces données sont disponibles sur différentes périmètres administratifs et pour différentes périodes à partir de 2010.
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
- Notebook Python pour [tester différentes utilisations des données](https://nbviewer.org/gist/aherman59/fc52ff258a91063d3d3d89c61fa5ad35)

### Documentation

- [Mieux comprendre les données du CEREMA](https://datafoncier.cerema.fr/donnees)
- [Dictionnaire des bases de données foncières](http://doc-datafoncier.cerema.fr/)
 


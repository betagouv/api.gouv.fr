---
title: API Indicateur de Fréquences de Traitements phytopharmaceutiques
tagline: "Faciliter et fiabiliser votre calcul de l'Indicateur de Fréquence de Traitements (IFT) : anonyme & gratuit !"
producer: maa
category: public
is_open: 1 # 1 means API is fully open
external_site: https://alim.agriculture.gouv.fr/ift/espace-partenaire
keywords:
  - IFT
  - Indicateur de Fréquences de Traitements
  - Phytopharmaceutiques
  - Phytosanitaire
  - Phyto
  - Pesticides
  - Ecophyto
  - Transition agro-écologique
  - MAEC
  - Ferme Dephy
contact_link: calculette-ift.dgpaat@agriculture.gouv.fr
doc_tech_link: https://alim.agriculture.gouv.fr/ift-api/v2/api-docs?group=ift
datagouv_uuid:
  - 56373ad988ee38438a531576
themes:
  - Environnement
visits_2019: 324
last_update: 03/05/2018
---

### Description de l'API

#### Pourquoi ?

L'Indicateur de Fréquence de Traitements phytopharmaceutiques (IFT) est un indicateur de suivi de la réduction des produits phytopharmaceutiques (pesticides) à l’échelle de l’exploitation agricole ou d’un groupe d’exploitations.

Si votre application propose une fonction de calcul de l'IFT ? Ou l'édition de bilans d'IFT ? Inutile de dupliquer nos référentiels ou de développer un service de calcul, cette API est faite pour vous !

Elle vous permet de :

- consommer l'ensemble des données de référence à la base du calcul de l'IFT : campagnes culturales, produits, cibles, doses de références,...
- calculer des IFT au niveau des traitements phytopharmaceutiques
- certifier des IFT soumis aux contrôles des agents de l'ASP

Pour plus d'information sur l'IFT, vous pouvez consulter le site institutionnel du ministère à l'adresse : [http://agriculture.gouv.fr/indicateur-de-frequence-de-traitements-phytosanitaires-ift](http://agriculture.gouv.fr/indicateur-de-frequence-de-traitements-phytosanitaires-ift)

#### Aller à l'essentiel...

Dans la majorité des cas, les API vous permettent de requêter et de paginer les résultats sur les données de références :

- Lister les cultures commençant par "ci" :

```sh
    curl -X GET --header 'Accept: application/json' 'https://alim.agriculture.gouv.fr/ift-api/api/cultures?filtre=ci'
```

- Calculer un IFT non certifié : Campagne culturale 2017, Traitement d'herbicide, Citronnier, Produit ACOMAC pour 6 L/HA

```sh
    curl -X GET --header 'Accept: application/json' 'https://alim.agriculture.gouv.fr/ift-api/api/ift/traitement?campagneIdMetier=2017&numeroAmmIdMetier=2090125&cultureIdMetier=1055&typeTraitementIdMetier=T21&dose=6'
```

- Calculer un IFT certifié car soumis à un contrôle : Campagne culturale 2017, Traitement d'herbicide, Citronnier, Produit ACOMAC pour 6 L/HA

```sh
    curl -X GET --header 'Accept: application/json' 'https://alim.agriculture.gouv.fr/ift-api/api/ift/traitement/certifie?campagneIdMetier=2017&numeroAmmIdMetier=2090125&cultureIdMetier=1055&typeTraitementIdMetier=T21&dose=6'
```

#### Se lancer !

Le ministère en charge de l’agriculture met à votre disposition un environnement de pré-production pour tester vos développements. Il est accessible à l’adresse : [https://alim-pprd.agriculture.gouv.fr/ift-api/swagger-ui.html](https://alim-pprd.agriculture.gouv.fr/ift-api/swagger-ui.html)

- Entrez dans la matrice :

```sh
    curl -X GET --header 'Accept: application/json' 'https://alim-pprd.agriculture.gouv.fr/ift-api/api/hello'
```

- En cas de problèmes de sécurité, n'oubliez pas d'installer le certificat de l'API dans votre key store ;)

- Codes sources et codes exemples sont disponibles sur GitHub : [https://github.com/MINAGRI-INITIAL](https://github.com/MINAGRI-INITIAL)

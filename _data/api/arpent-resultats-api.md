---
title: API Résultats aux examens
tagline: Accéder aux calendriers de délibération et aux résultats des examens de l'enseignement agricole.
producer: maa
category: public
is_open: 1 # 1 means API is fully open
keywords:
  - Résultats aux examens
  - Résultats
  - Examen
  - Enseignement agricole
  - ExamAgri
  - Etudiant
  - Candidat
  - Bac
  - BEP
  - CAP
  - BTS
  - Arpent
  - Diplôme
contact_link: arpent-resultat.sg@agriculture.gouv.fr
doc_tech_link: https://teleservices-ea.agriculture.gouv.fr/arpent-resultats-api/v2/api-docs?group=arpent-resultats
themes:
  - Education
visits_2019: 2050
last_update: 27/07/2017
---

Les journaux publient chaque année les résultats aux examens de leur région.

Dans le respect des données personnelles des candidats, ARPENT(résultats) vous propose d'accéder aux données de l'enseignement agricole :

- Calendriers de délibération pour identifier le nombre de candidats potentiellement admis afin de calculer la taille de l'encart sur le journal papier
- Résultats aux examens des candidats reçus ou admis au rattrapage

Au delà des résultats, vous trouverez l'ensemble des référentiels de l'enseignement agricole nécessaires à la lisibilité de ces données : nom de l'établissement, nom du diplôme, ...

### Loi CNIL

L'API Résultats aux examens exposant des **données à caractère personnel**, le ministère en charge de l'agriculture attire votre attention sur les **obligations légales** qui en découlent. Le traitement de ces données relève des obligations de déclaration de la Loi 78-17 du 6 janvier 1978 modifiée, dîte Loi CNIL : [https://www.cnil.fr/fr/loi-78-17-du-6-janvier-1978-modifiee](https://www.cnil.fr/fr/loi-78-17-du-6-janvier-1978-modifiee)

### Aller à l'essentiel...

Nous avons choisi d'exposer toutes les ressources utilisées par le service [ARPENT(résultats)](https://teleservices-ea.agriculture.gouv.fr/arpent-resultats/). La [documentation technique](https://teleservices-ea.agriculture.gouv.fr/arpent-resultats-api/swagger-ui.html#/) peut donc paraître assez riche.
_A noter : certaines ressources relevent d'une authentification renforcée. Les modalités d'accès seront fournies ultérieurement._

Pour aller à l'essentiel, voici celles qui exposent le plus simplement les calendriers et résultats aux examens :

- Calendriers de délibération :

```sh
Curl -X GET --header 'Accept: application/json' 'https://ensagri.agriculture.gouv.fr/arpent-resultats-api/api/arpent-resultats/resultats-grand-public/calendriers?departement=30'
```

```Json
{
    "filiere": "Baccalauréat Professionnel",
    "option": "Aménagement paysager",
    "departement": "30",
    "nbCandidats": 52,
    "dateDelib": "2017-07-07"
  }
```

- Résultats d'un département :

```sh
curl -X GET --header 'Accept: application/json' 'https://ensagri.agriculture.gouv.fr/arpent-resultats-api/api/arpent-resultats/resultats-grand-public/resultats?departement=30'
```

```Json
 {
    "filiere": "Baccalauréat Professionnel",
    "option": "Conduite et gestion de l'exploitation agricole",
    "specialite": "Spécialité : Vigne, vin et magie",
    "departement": "30",
    "nom": "GRANGER",
    "prenoms": "Hermione Célia Julie Laure",
    "resultat": "Admission"
 }
```

### Se lancer !

Le ministère en charge de l'agriculture met à votre disposition un environnement de pré-production pour tester vos développements.
Il est accessible à l'adresse : [https://ensagri-pprd.agriculture.gouv.fr/arpent-resultats-api/swagger-ui.html](https://ensagri-pprd.agriculture.gouv.fr/arpent-resultats-api/swagger-ui.html)

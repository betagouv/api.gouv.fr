---
title: API Résultats aux examens
tagline: Accéder aux calendriers de délibération et aux résultats des examens de l'enseignement agricole.
doc_tech: https://ensagri.agriculture.gouv.fr/arpent-resultats-api/swagger-ui.html
owner: Ministère de l'agriculture et de l'alimentation
category: public
contract: OUVERT
logo: maa.png
openapi_definition: https://ensagri.agriculture.gouv.fr/arpent-resultats-api/v2/api-docs?group=arpent-resultats
contact: arpent-resultat.sg@agriculture.gouv.fr
clients:
  - particuliers
  - entreprises
  - presse
  - collectivités
  - ministères
keywords:
  - Résultats aux examens
  - Résultats
  - Examens
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
---

### Pourquoi ?

Les organes de presses publient chaque année les résultats aux examens de leur région.

Dans le respect des données personnelles des candidats, ARPENT(résultats) vous propose d'accéder aux informations de l'enseignement agricole : 
- Calendriers de délibération pour identifier le nombre de candidats potentiellement admis afin de calculer la taille de l'encart sur le journal papier
- Résultats aux examens des candidats reçus ou admis au rattrapage

Au delà des résultats, vous trouverez l'ensemble des référentiels de l'enseignement agricole nécessaires à la lisibilité de ces données : nom de l'établissement, nom du diplôme, ...

### Loi CNIL

L'API Résultats aux examens exposant des données à caractère personnel, le ministère en charge de l'agriculture attire votre attention sur les obligations légales qui en découlent. Le traitement de ces données relève des obligations de déclaration de la Loi 78-17 du 6 janvier 1978 modifiée, dîte Loi CNIL : [https://www.cnil.fr/fr/loi-78-17-du-6-janvier-1978-modifiee](https://www.cnil.fr/fr/loi-78-17-du-6-janvier-1978-modifiee)

### Aller à l'essentiel... 

Nous avons choisi d'exposer toutes les ressources utilisées par le service : [https://ensagri.agriculture.gouv.fr/arpent-resultats/](https://ensagri.agriculture.gouv.fr/arpent-resultats/)

Voici les ressources principales qui exposent les résultats des candidats de l'enseignement agricole : 
- Calendriers de délibération et nombre de candidats potentiels : 

```sh 
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "ina": "string",
  "numGestion": "string"
}' 'https://ensagri.agriculture.gouv.fr/arpent-resultats-api/api/arpent-resultats/audit-notes/credentials'
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
### Besoin d'un exemple ?

N'hésitez pas à consulter le code source d'ARPENT(résultats) qui implémente cette API : [https://github.com/AGRILAB/arpent-resultats](https://github.com/AGRILAB/arpent-resultats)



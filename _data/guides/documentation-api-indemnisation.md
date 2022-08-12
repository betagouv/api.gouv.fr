---
title: Documentation de l'API Indemnisation Pôle emploi
noindex: false # this page will appear on Google
publish: false # this page will appear on /guides page
---

## Caractéristiques

| Caractéristique                  | description         |
| -------------------------------- | ------------------- |
| Mode d'accès                     | restreint           |
| Fréquence de mise à jour         | temps réel          |
| Cinématique OAuth                | Authorization grant |
| Scopes nécessaires               | api_fc-liste-paiementsv1  |

## Liste des paiements

Ce service permet de récupérer la liste des paiements d'un demandeur d'emploi connecté (jeton France Connect) pour la période d’inscription en cours.

### Description de la requête

#### Point d'accès

```
GET https://api.emploi-store.fr/partenaire/fc-liste-paiements/v1/
```

### Données retourrnées

| Code              | Cardinalité | Format  | Description                                                                                                         |   |
|-------------------|-------------|---------|---------------------------------------------------------------------------------------------------------------------|---|
| statutInscription | 1           | Booléen | Individu inscrit Oui / Non                                                                                          |   |
| listePaiement     |             |         | Liste des paiement reçus depuis la dernière inscription, avec, pour chaque paiement                                 |   |
| date_paiement     | 0,1         | Date    | Date de paiement                                                                                                    |   |
| montant_paiement  | 0,1         | Integer | Montant paiement : montant des allocations, aides et autres paiement, moins le prélèvement à la source (impôts)     |   |
| allocations       | 0,1         | Integer | Montant correspondant au paiements d’allocations (ARE, ASP, AER, ASS, RFPE, AFD, RFF, AAP …)                        |   |
| aides             | 0,1         | Integer | Montant correspondant au paiements d’aide (Aide à la reprise et à la création d’entreprise, Aide à la mobilité, ..) |   |
| autres_paiements  | 0,1         | Integer | Montant correspondant à d’autres paiements (Prime de Noel, Acompte, Avance, reversement)     

### Exemple de retour

```
HTTP 200 OK
Content-Type: application/json;charset=UTF-8
Cache-Control: no-store
Pragma: no-cache

{

    "statutInscription": true,

    "listePaiement": [

        {

            "date_paiement": "2021-05-03T04:00:00+02:00",

            "montant_paiement": 1096.78,

            "allocations": 1111.35,

            "aides": 0.0,

            "autres_paiements": 0.0

        }

        {

            "date_paiement": "2021-04-03T04:00:00+02:00",

            "montant_paiement": 1096.78,

            "allocations": 1111.35,

            "aides": 0.0,

            "autres_paiements": 0.0

        }

../..

        ]

}
```

### Cas d'erreurs possibles

[**Consultez la documentation sur le portail de Pôle emploi**](https://pole-emploi.io/data/documentation/erreurs)
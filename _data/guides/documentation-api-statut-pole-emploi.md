---
title: Documentation de l'API Statut demandeur d'emploi
noindex: false # this page will appear on Google
publish: false # this page will appear on /guides page
---

## Caractéristiques

| Caractéristique                  | description         |
| -------------------------------- | ------------------- |
| Mode d'accès                     | restreint           |
| Fréquence de mise à jour         | temps réel          |
| Cinématique OAuth                | Authorization grant |
| Scopes nécessaires               | api_fc-statutaugmentev1  |

## Recherche situation individu

L’API “Statut Augmenté” permet d’effectuer une recherche d’individu afin de connaître sa situation actuelle au regard de France Travail.

### Description de la requête

#### Point d'accès

```
GET https://api.emploi-store.fr/partenaire/fc-statutaugmente/v1/statut

```

### Exemple d'appel

```
GET https://api.emploi-store.fr/partenaire/fc-statutaugmente/v1/statut
Authorization: Bearer [Access token]

```

### Données retourrnées

| Code                        | Cardinalité | Format | Description                                |
|-----------------------------|-------------|--------|--------------------------------------------|
| etatCivil                   | 1           | objet  | Objet regroupant les données d'état civil  |
| civilite                    | 1           | string | Civilité                                   |
| nom                         | 1           | string | Nom de naissance                           |
| nomUsage                    | 1           | string | Nom d'usage                                |
| prenom                      | 1           | string | Prénom                                     |
| sexe                        | 1           | string | Sexe                                       |
| dateNaissance               | 1           | date   | Date de naissance                          |
| codeCertificationCNAV       | 1           | string | Code de certification CNAV                 |
| modalitesContact            | 0,1         | objet  | Objet regroupant les modalités de contact  |
| telephone                   | 0,1         | string | Numéro de téléphone 1                      |
| telephone2                  | 0,1         | string | Numéro de téléphone 2                      |
| email                       | 0,1         | string | Adresse e-mail                             |
| codeValiditeEmail           | 0,1         | string | Code de validité de l'adresse e-mail       |
| adresse                     | 1           | objet  | Objet regroupant les données d'adresse     |
| ligneNom                    | 1           | string | Ligne Nom                                  |
| ligneComplementDestinataire | 0,1         | string | Ligne Complément Destinataire              |
| ligneComplementAdresse      | 0,1         | string | Ligne Complément Adresse                   |
| ligneVoie                   | 0,1         | string | Ligne Voie                                 |
| ligneComplementDistribution | 0,1         | string | Ligne Complément Distribution              |
| codePostal                  | 1           | string | Code Postal                                |
| localite                    | 1           | string | Libellé localité                           |
| inseecommune                | 1           | string | Code INSEE Commune                         |
| situationInscription        | 1           | objet  | Objet regroupant les données d'inscription |
| dateInscription             | 1           | date   | Date d'inscription                         |
| dateCessationInscription    | 1           | date   | Date de cessation d'inscription            |
| categorieInscription        | 1           | string | Code de catégorie d'inscription            |
| libellecategorieInscription | 1           | string | Libellé de la catégorie d'inscription      |

### Exemple de retour

```
{

   "etatCivil": {

     "civilite": "string",

     "nom": "string",

     "nomUsage": "string",

     "prenom": "string",

     "sexe": "string",

     "dateNaissance": "2022-03-04T07:50:43.505Z",

     "codeCertificationCNAV": "string"

   },

   "modalitesContact": {

     "telephone": "string",

     "telephone2": "string",

     "email": "string",

     "codeValiditeEmail": "string"

   },

   "adresse": {

     "ligneNom": "string",

     "ligneComplementDestinataire": "string",

     "ligneComplementAdresse": "string",

     "ligneVoie": "string",

     "ligneComplementDistribution": "string",

     "codePostal": "string",

     "localite": "string",

     "inseecommune": "string"

   },

   "situationInscription": {

     "dateInscription": "2022-03-04T07:50:43.505Z",

     "dateCessationInscription": "2022-03-04T07:50:43.505Z",

     "categorieInscription": "string",

     "libellecategorieInscription": "string"

   }

 }
```

### Cas d'erreurs possibles

[**Consultez la documentation sur le portail de France Travail**](https://francetravail.io/data/documentation/erreurs)

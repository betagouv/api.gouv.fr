---
title: API Historique d'un véhicule (HistoVec)
tagline: Permettre aux vendeurs et loueurs de véhicules de partager l'historique d'un véhicule.
external_site: https://histovec.interieur.gouv.fr/histovec/
is_open: 1  
producer: ministere-interieur
keywords:
  - Vehicule
  - Immatriculation
  - Historique
  - Controle technique
  - Reparation
  - Vente
  - Voiture
  - Histovec
  - Achat
  - CIV
  - Titulaire
themes:
  - Particulier
  - Entreprise
contact_link: contact-api-histovec@interieur.gouv.fr
doc_tech_link: /swaggers/api-historique-vehicule.json
last_update: 27/09/2021
---
L'API Histovec, permet de partager l'historique d'un véhicule, à la demande de son propriétaire. Elle s'adresse à plusieurs types d'utilisateurs :

- les plateformes de mise en relation entre vendeurs et acheteurs de véhicules d'occasion,
- les plateformes de location de véhicules entre particuliers,
- les constructeurs et concessionnaires automobiles.

### À quoi sert cette API ?

L'API peut être interrogée de deux façons différentes :

- La première, par **les acteurs non titulaires du certificat d'immatriculation du véhicule (CIV)**, comme les plateformes de vente ou de location. Dans ce cas, c'est le titulaire du CIV qui devra obtenir un code ID directement sur le [portail HistoVec](https://histovec.interieur.gouv.fr/histovec/), à partir des informations dont il dispose. Ce code ID devra être renseigné par le titulaire (sur la plateforme) pour pouvoir apperler l'API et ainsi partager l'historique du véhicule, par exemple sur une annonce de vente ou de location.
- La deuxième, par **les acteurs titulaires du CIV** (comme les constructeurs ou les concessionnaires). Dans ce cas, cet acteur peut appeler l'API à partir des données suivantes : état civil, SIREN, immatriculation, numéro de formule...

### Données disponibles dans l'API Histovec

Pour les deux méthodes d'appel, l'API renvoie entre autres :

| Type de données                    | Exemple                                                            |
| ---------------------------------- | ------------------------------------------------------------------ |
| Véhicule                           | Marque, modèle, numéro d'identification, émissions de CO2...       |
| Titulaire et titre                 | Identité du titulaire, code postal, date d'immatriculation         |
| Situation                          | Gages, suspension, état de la carte grise, oppositions...          |
| Historique des opérations          | Changement de titulaire, réparation controlée, rapport d'expert    |

Un exemple de rapport est disponible sur le [portail HistoVec](https://histovec.interieur.gouv.fr/histovec/)
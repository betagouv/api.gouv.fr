---
title: API contrôle CVEC (contribution de vie étudiante)
tagline: Vérifiez si un étudiant s'est  acquitté de la contribution de vie étudiante
is_open: 1
producer: cnous
keywords:
  - etudiant
  - cvec
  - contribution
  - attestation
  - cnous
  - crous
  - numéro
  - paiement
  - inscription
  - université
  - etablissement
  - INE
  - formation
themes:
  - Particulier
  - Education
contact_link: api-boursier@cnous.fr
doc_tech_link: /swaggers/api-cvec.json
visits_2019: 3000
last_update: 15/04/2022
---

**L’API de contrôle de la CVEC est une API ouverte permettant de vérifier l’acquittement de la cotisation de vie étudiante et de campus (CVEC).**

Chaque étudiant en formation initiale dans un établissement supérieur doit obligatoirement obtenir, préalablement à son inscription, son attestation d’acquittement de la contribution de vie étudiante et de campus (CVEC), par paiement ou exonération.

### À quoi sert l’API contrôle CVEC ?

L’API permet de vérifier la validité d’une attestation de CVEC pour l’année universitaire de la campagne en cours.

👉 **Grâce à l'API, il n'est plus nécessaire de demander et de vérifier l'attestation CVEC**

Elle est mise à disposition de l’ensemble des établissements de l'enseignement supérieur afin de vérifier lors de l’inscription de chaque étudiant en formation initiale la validité et l’authenticité de l’attestation.

### Données

| Champ          | Description                                                                            |
| -------------- | -------------------------------------------------------------------------------------- |
| Nom          | Nom de naissance de l’étudiant                                                           |
| Nom usage    | Nom d’usage de l’étudiant                                                                |
| Prénom       | Prénom de l’étudiant                                                                     |
| Sexe | F ou M                                                                                           |
| date de naissance | Date de naissance de l’étudiant                                                     |
| INE | N° INE de l’étudiant                                                                              |
| crous |Nom du Crous de rattachement                                                                     |
| etat : code et libellé | Définit le statut de validité ou non de l’attestation                          |
| exoneration : active et motif | Définit s’il y a lieu l’exonération appliquée à l’attestation           |

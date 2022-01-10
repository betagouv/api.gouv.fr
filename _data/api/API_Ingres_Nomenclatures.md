---
title: API Ingres - Nomenclatures
tagline: Récupérez l'ensemble des référentiels utilisés par les Systèmes d'Information des Ressources Humaines de la Fonction Publique d'Etat
datapass_link: https://datapass.api.gouv.fr/api-ingres
access_page: 
  - who:
      - Un particulier
      - Une entreprise
    is_eligible: -1
    description: |
      L'API est réservée aux administrations.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Une application RH
      - Une institution
      - Une collectivité
      - Un ministère
    is_eligible: 0
    description: |
      Le CISIRH met à disposition cette API exploitable et accessible uniquement via le Réseau Interministériel de l'Etat (RIE).

      Son utilisation par une application tierce ne saurait engager la responsabilité du CISIRH, par exemple, en termes de disponibilité.

      <NextSteps />
      <Button href="https://datapass.api.gouv.fr/api-ingres">Remplir une demande</Button>
extrenal_site: https://pissarho.cisirh.rie.gouv.fr/actualites/ingres/deploiement-de-deux-api-sur-lapplication-ingres
is_open: -1
producer: cisirh
keywords:
  - resssources humaines
  - RH
  - SIRH
  - referentiel
  - grade
  - emploi 
  - agents
  - applications
  - institutions
  - collectivités
  - ministères
themes:
  - Administration
contact_link: api.cisirh@finances.gouv.fr
doc_tech_link: /swaggers/api-ingres-nomenclatures-V2.json
visits_2019: 3000
last_update: 23/11/2021
---

L’API Nomenclature permet d’accéder à toutes les nomenclatures noyau gérées dans l’application Ingres du CISIRH, soit plus de 350 nomenclatures accessibles.

## Contenu accessible via cette API

L'ensemble des référentiels gérés dans l'application Ingres du Cisirh est accessible via cette API.
Ces référentiels couvrent les domaines fonctionnels suivants:

### Référentiels de classification centraux (RCC)

#### Nomenclatures RCC

- Catégories
- Corps
- Grade
- Emplois fonctionnels
- Groupe dans un emploi fonctionnel
- Grilles
- Echelons
- Indices
- Spécialités
- ...

##### Nomenclatures militaires

- Grades militaires
- Hiérarchie
- Appellations
- ...

#### Nomenclatures du noyau RH FPE

- Ministères et institutions de la république
- Modalités de service
- Positions
- Pays
- Régions
- Départements
- ...

#### Nomenclatures Fichier GEST

- Annexes 14/15
- Codes BJ
- Codes taux
- PABA22
- ...

#### Nomenclatures FIP

- Code administration
- Code affectation
- ...

#### Nomenclatures externes

- ADAGE
- Code NNE
- Hexaposte
- Tabank/SEPA
- Programmes/Ministères
- Centre de coût
- Centre de profit
- Centre financier
- ...

La liste exhaustive est trop longue pour être listée ici, vous pouvez y accéder via cet appel à l'API:
https://api.piste.gouv.fr/cisirh/ingres-nomenclatures/v2

### Conditions Générales d'Utilisation

Le CISIRH met à disposition cette API exploitable accessible uniquement par les ministères ou institutions ayant accès au Réseau Interministériel de l'Etat (RIE).
Son utilisation par une application tierce ne saurait engager la responsabilité du CISIRH, par exemple, en termes de disponibilité.

### Nouveautés de la version 2.0

L’ensemble des attributs gérés dans l'application Ingres est désormais restitué pour chacune des nomenclatures.

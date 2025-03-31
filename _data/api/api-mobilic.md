---
title: API Mobilic
tagline: Simplifier et améliorer le suivi du temps de travail dans le transport routier
external_site: https://mobilic.beta.gouv.fr
is_open: -1 # -1 means API not open
access_page:
  - who:
      - Un particulier
    is_eligible: -1
    description: |
      L'API s'adresse aux opérateurs des transports.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Un éditeur de logiciel des secteurs du transport léger et du déménagement
    is_eligible: 1
    description: |
      L’API est accessible aux éditeurs. Prenez contact avec l’équipe en écrivant à interfacage@mobilic.beta.gouv.fr

      <Button href="https://developers.mobilic.beta.gouv.fr/">Consulter la documentation</Button>
  - who:
      - Une entreprise
    is_eligible: 0
    description: |
      Certaines entreprises peuvent utiliser l'API :

      - les éditeurs de solutions du secteur des transports
      - les entreprises de livraison et de transports routiers

      <Button href="https://developers.mobilic.beta.gouv.fr/">Consulter la documentation API</Button>
partners:
  - DINUM
producer: mtes
keywords:
  - Routier
  - Travail
  - Temps
  - Suivi
  - Dématérialisation
  - livret individuel de contrôle
  - LIC
  - utilitaires
  - Livraison
  - RSE
  - Trajet
  - Chauffeur
  - Taxi
  - Mobilité
  - Editeur
  - Tracking
  - Contrôle
  - Livreur
contact_link: mobilic@beta.gouv.fr
doc_tech_external: https://developers.mobilic.beta.gouv.fr/guides/effectuer-une-requete-a-lapi
themes:
  - Entreprise
  - Transport
  - Droit et Justice
content_intro: |
  Mobilic est la plateforme gouvernementale qui permet de simplifier le suivi du temps de travail dans le transport routier léger et le déménagement afin de lutter contre le travail illégal.

  Elle vise à remplacer le livret individuel de contrôle, en permettant de centraliser les enregistrements du temps de travail des conducteurs de véhicules utilitaires légers de moins de 3,5 tonnes, et des autres personnels roulants non conducteurs.
visits_2019: 2500
last_update: 07/07/2022
---

### À quoi sert l'API Mobilic ?

L'API Mobilic permet aux applications métier de transmettre et de lire simplement les données relatives au temps de travail.

📲 Les travailleurs mobiles saisissent leur temps de travail sur l’application web Mobilic

🖥 Les gestionnaires d'entreprises consultent et valident les données saisies

### Pourquoi s'interfacer avec l'API Mobilic ?

En tant qu’éditeur de logiciels de gestion dédiés au transport léger ou du déménagement, intégrer l'API Mobilic vous permettra : 

☑️ De faire **gagner du temps** de gestion administrative à vos clients

☑️ D’être **conforme à la réglementation** en cas de contrôle s’il s’agit d’un logiciel de suivi du temps de travail

☑️ D'intégrer un outil qui sera **utilisé par l’ensemble des entreprises soumises au LIC**

### Données accessibles dans l'API

Parmi les principales données, ont peut citer :

| Ensemble de données        | Description                                                                                                                                    |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Activités                  | Identité du travailleur mobile qui effectue l'activité, horodatage de début et de fin, nature (déplacement, travail en dehors du véhicule)     |
| Missions                   | Permet de regrouper des activités d'un même travailleur ou de travailleurs différents                                                          |

### En savoir plus

Pour obtenir plus d'informations sur l'API Mobilic, [consultez la documentation complète](https://developers.mobilic.beta.gouv.fr/)

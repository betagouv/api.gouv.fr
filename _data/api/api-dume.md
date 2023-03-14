---
title: API Document unique de marché européen (Dume)
tagline: Envoyer facilement vos factures électroniques à une entité publique française
external_site: http://www.chorus-pro.gouv.fr/
is_open: -1 # -1 means API not open
access_page:
  - who:
      - Un éditeur
      - Une entreprise
    is_eligible: 0
    description: |
      L'API s’adresse à l’ensemble des fournisseurs de l'Etat, tant privés que publics, afin de leur permettre de transmettre de façon efficace et automatique leurs factures à destination de la sphère publique.

      <Button href="https://developer.aife.economie.gouv.fr/">Faire une demande d'habilitation</Button>
  - who:
      - Une collectivité
      - Un établissement public
      - Un Ministère
    is_eligible: 1
    description: |
      L'API s’adresse aux entités du **secteur public** : l’Etat, les établissements publics nationaux (EPN), les collectivités territoriales et les établissements publics locaux (EPL).
      <Button href="https://developer.aife.economie.gouv.fr/">Faire une demande d'habilitation</Button>
  - who:
      - Un particulier
    is_eligible: -1
    description: |
      Chorus Pro s’adresse aux des acteurs de la commande publique : émetteurs et récepteurs de facture.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
producer: aife
keywords:
  - Factures
  - Dématérialisation
  - Comptabilité
  - E-Certis
  - achat
  - acheteur
  - commande publique
  - entreprise
themes:
  - Administration & législation
  - Entreprise
contact_link: https://developer.aife.economie.gouv.fr/support/#/
doc_tech_external: https://developer.aife.economie.gouv.fr/index.php?option=com_apiportal&view=apitester&usage=api&apitab=tests&apiName=DUME+Acheteurs&apiId=a3040f00-f8b2-4180-8075-f1fcad896ca6&managerId=2&type=rest&apiVersion=1.0.0&Itemid=265&swaggerVersion=2.0&lang=fr
visits_2019: 2000
last_update: 14/03/2023
---
Le Document unique de marché européen (DUME ou ESPD en anglais) est un formulaire, qui est utilisé dans les procédures de passation des marchés publics.

Il est à la fois utilisé par les acheteurs publics (pouvoirs adjudicateurs ou entités adjudicatrices) et les opérateurs économiques de l'Union Européenne.

## Qu’est-ce que service DUME ?

La Direction des affaires juridiques des ministères économiques et financiers a confié à [l’Agence pour l’Informatique financière de l’Etat (AIFE)](https://aife.economie.gouv.fr/) la mise en œuvre d’un service permettant aux acheteurs et aux opérateurs économiques de pouvoir concevoir et réutiliser un DUME.

Il a pour objectif :

- de **simplifier les procédures** et réduire les charges administratives en facilitant la création et la complétion des formulaires ;
- d'offrir à tous les acheteurs **une solution mutualisée** et néanmoins modulable à travers l’implémentation de services exposés (API) ;
- de proposer un **service accessible** même aux entités ne disposant pas d’un système d’information dédié, à travers la mise à disposition d’un utilitaire en ligne ;
- de permettre et **accélérer la transformation numérique de la commande publique** en facilitant la dématérialisation de la procédure de passation des marchés publics.

## À quoi sert l'API DUME ?

Les API du Service Dume permettent aux éditeurs d'intégrer toutes les fonctionnalités du Service DUME aux profils d'acheteurs qu'ils administrent.

Les fonctionnalités proposées permettent aux acheteurs et opérateurs économiques de réaliser toutes les étapes de saisie, complétion et consultation des DUME. Chaque fonctionnalité est portée par une opération relevant d'une des API suivantes :

- API DUME A (pour les DUME Acheteurs)
- API DUME OE (pour les DUME Opérateurs Economiques)
- API Métadonnées (pour intervenir uniquement sur les métadonnées d'un DUME)
- API Données (pour récupérer des données issues de sources tierces comme API Entreprises)
- API Référentiel (pour interroger les référentiels du service DUME)
- API E-Certis (pour récupérer la transcription française de la réglementation européenne)
- API Attestations (pour récupérer les attestations via API Entreprises)

### En savoir plus

- Retrouvez ici les [informations sur le service DUME](https://www.economie.gouv.fr/daj/dume-espd)
- Et ici la [documentation technique](https://developer.aife.economie.gouv.fr/api-catalog-sandbox) des API liées au service DUME

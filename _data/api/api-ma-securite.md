---
title: API Ma Sécurité
tagline: Publier des informations et actualités sur l'application Ma Sécurité
producer: anfsi
partners:
  - minint 
category: public
is_open: -1
access_page:
  - who:
      - Un particulier
      - Une entreprise
    is_eligible: -1
    description: |
      Vous ne pouvez pas accéder à ces informations.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Une administration
    is_eligible: 1
    description: |
      L’API est accessible gratuitement en accès restreint. Une signature de convention avec la gendarmerie nationale constitue un préalable à la génération de la clé d’API. L’intention est de permettre aux partenaires de la gendarmerie nationale de diffuser facilement les informations susceptibles d’intéresser leur client.

      
      <Button href="mailto:masecuritelappli@gendarmerie.interieur.gouv.fr">Demander un accès à l'API</Button>
external_site: https://www.interieur.gouv.fr/
keywords:
  - Conseil
  - Brigade
  - Gendarmerie
  - Actualités
  - préfecture
  - commissariat
  - notification
  - police
  - urgences
contact_link: masecuritelappli@gendarmerie.interieur.gouv.fr
doc_tech_external: https://masecurite-api.interieur.gouv.fr/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config
themes:
  - Sécurité
last_update: 18/10/2022
visits_2019: 1000
---
L’API Ma Securite a été développée pour l’application smartphone éponyme. Elle permet a chaque gendarme d’informer la population de tout événement opérationnel basé notamment sur la prévention de la délinquance.

## A quoi sert l'API Ma Sécurité ?

Intégrer l'API MaSecurite, c’est pouvoir informer vos utilisateurs de l’actualité portant sur :

#### Pour l'échelon National :

- Securite Routière
- Aide aux victimes
- Numérique
- Entreprises et commerces
- Famille
- Jeunesse
- Vie pratique
- Recrutement

#### Pour l'échelon local :

- L'actualité opérationnelle de chaque brigade de gendarmerie 

#### Événementiel :

- Actualité temporaire liée aux grands événements sportifs ou culturels (ex : Tour de France)

## Données disponibles

Chaque actualité contient :

- Titre
- Message
- Date de création
- Thématique
- Localité
- URL (optionnel)
- Image (optionnel)

## Technique

L’API renvoie un résultat paginé au format JSON. Elle est protégée par une clé d’API qui sera générée pour chaque client, sur requête et validation. 

## Modalités d’accès

L’API est accessible gratuitement en accès restreint. Une signature de convention avec la gendarmerie nationale constitue un préalable à la génération de la clé d’API. L’intention est de permettre aux partenaires de la gendarmerie nationale de diffuser facilement les informations susceptibles d’intéresser leur client.

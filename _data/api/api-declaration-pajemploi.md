---
title: API Tierce Déclaration Pajemploi
tagline: Connectez-vous directement à l’Urssaf pour accéder aux services de Pajemploi pour le compte d’un particulier employeur en tant que tiers-déclarant
external_site: https://open.urssaf.fr/explore/?sort=modified
producer: urssaf
is_open: -1 # 1 means API is fully open
access_page:
  - who:
      - Un editeur d’application mobile
      - Un editeur de services web
    is_eligible: 0
    description: |
      Si vous êtes éditeur appli mobile / éditeur de service web et agissez ou comptez agir pour le compte de vos clients en qualité de tiers déclarant, vous pouvez remplir une demande d’habilitation à l’API vous-même pour l'entité que vous représentez, au sens des articles L.133-11, <External href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037877089">R133-43 et R133-44</External> du Code de Sécurité sociale.

      Pour remplir votre demande, vous aurez besoin de :

      - Créer un compte sur le portail Urssaf
      - Un document d'identification
      - Attestation fiscale
      - Attestation sociale

      <Button href="https://portailapi.urssaf.fr/fr/component/apiportal/registration">Remplir une demande</Button>
  - who:
      - Un editeur de logiciel de paie
      - Autres activités
    is_eligible: -1
    description: |
      Vous n'êtes pas autorisé à accéder à ces données.

      <Button href="/rechercher-api">Revenir à la recherche</Button>
contact_link: contact.tiercedeclaration@urssaf.fr
doc_tech_link: /swaggers/api-pajemploi.json
doc_tech_external: https://portailapi.urssaf.fr/fr/
keywords:
  - Urssaf
  - Acoss
  - Particulier
  - Employeur
  - CESU
  - tiers
  - déclarant
themes:
  - Entreprise
last_update: 16/10/2020
---

L’API Tierce Déclaration Pajemploi facilite l’accès aux éditeurs de logiciels, aux plateformes collaboratives et de services en ligne, aux données et aux démarches relatives à Pajemploi pour le compte d’un particulier employeur en qualité de tiers-déclarant.

<img src="/images/divers/api-pajemploi.svg" alt="API Pajemploi" style="max-width:300px" />

### A quoi sert l’API Tierce Déclaration Pajemploi ?

L'API Tierce Déclaration Pajemploi permet, pour le compte d'un particulier employeur et en qualité de tiers-déclarant, d'obtenir les montants des cotisations et des contributions sociales pour une activité relevant de Pajemploi, de déclarer le salaire versé à un·e assistant·e maternel·le agré·e ou une garde d’enfants à domicile auprès des organismes de recouvrement concernés et de procéder à la retenue à la source prévue à l'article 204A du code général des impôts

Du point de vue de l'usager, l'API Tierce Déclaration Pajemploi permet au tiers déclarant de :

- Notifier l’Urssaf d’une autorisation de déclaration d’un particulier employeur en son nom (mandat)
- Déclarer une activité auprès de Pajemploi pour le compte d’un particulier employeur

### Fonctionnalités disponibles

Liste des fonctionnalités à titre d’exemple (liste non exhaustive) :

| Donnée      | Lien vers le jeu de données                                                                                                                     |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Employeurs  | Vérifier l’état de l’inscription d’un particulier employeur auprès de Pajemploi.                                                                |
| Salariés    | Vérifier l’état de l’inscription d’un salarié particulier auprès de Pajemploi                                                                   |
| Estimer     | Simuler le montant de cotisations sociales pour une activité Pajemploi.                                                                         |
| Predeclarer | Pré-déclarer une activité Pajemploi pour le compte d’un particulier employeur.                                                                  |
| Declarer    | Déclarer une activité Pajemploi pour le compte d’un particulier employeur.                                                                      |
| Associer    | Associer un salarié à un particulier employeur. Si le salarié n’existe pas, ce dernier est alors créé.                                          |
| Mandats     | Notifier l'Urssaf de l'enregistrement ou l’annulation d'un mandat de tierce déclaration obtenu par la plateforme pour un particulier employeur. |

### En savoir plus

<!--
#### Qu'est ce qu'un particulier employeur ?

Un particulier employeur est une personne physique qui emploie un ou plusieurs salariés à son domicile privé, ou à proximité de celui-ci, afin de satisfaire des besoins relevant de sa vie personnelle. -->

#### A propos de l’API Tierce Déclaration Pajemploi

L’API Tierce Déclaration Pajemploi est une API REST gratuite avec un accès restreint qui utilise la cinématique d’authentification Oauth2 Client Credentials.

Pour accéder à cette API gratuite, il faut en faire la demande [via le formulaire de demande de souscription](https://portailapi.urssaf.fr/fr/component/apiportal/registration) ou [via email](mailto:contact.tiercedeclaration@urssaf.fr) et signer la licence d’utilisation.

Une fois le dossier validé, un accès API bac à sable puis un accès API production sont fournis.

En ayant recours à cette API, le Cocontractant est considéré comme tiers-déclarant au sens des articles L.133-11, R133-43 et R133-44 du Code de Sécurité sociale, et a obtenu mandat de la part des utilisateurs pour ce faire.

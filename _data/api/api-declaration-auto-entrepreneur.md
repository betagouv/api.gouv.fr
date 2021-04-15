---
title: API Tierce Déclaration auto-entrepreneur
tagline: Connectez-vous directement à l’Urssaf pour déclarer les chiffres d’affaires pour le compte d’un auto-entrepreneur en tant que tiers-déclarant
external_site: https://open.urssaf.fr/explore/?sort=modified
producer: urssaf
is_open: -1 # 1 means API is fully open
access_page:
  - who:
      - Un editeur d’application mobile
      - Un editeur de services web
    is_eligible: 0
    description: |
      Si vous êtes éditeur appli mobile / éditeur de service web et agissez ou comptez agir pour le compte de vos clients en qualité de tiers déclarant, vous pouvez remplir une demande d’accès à l’API vous-même pour l'entité que vous représentez, au sens des articles L.133-11, <External href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037877089">R133-43 et R133-44</External> du Code de Sécurité sociale.

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
doc_tech_link: /api/v1/proxy/https%3A%2F%2Fportailapi.urssaf.fr%2Findex.php%3Foption%3Dcom_apiportal%26view%3Ddefinition%26managerId%3D1%26menuId%3D181%26format%3Draw%26stateReturn%3DL2ZyLz9JdGVtaWQ9MTgxJmFwaUlkPWNiNTUwNDk4LWMyOGItNGJiMS05MGUwLTliYjlkMjdlMTI0NCZhcGlOYW1lPUFQSSUyMFRpZXJjZSUyMERlY2xhcmF0aW9uJTIwYXV0by1lbnRyZXByZW5ldXImYXBpVmVyc2lvbj0xLjIuMCZhcGl0YWI9dGVzdHMmbWFuYWdlcklkPTEmbWVudUlkPTE4MSZvcHRpb249Y29tX2FwaXBvcnRhbCZyZW5kZXJUb29sPTImdHlwZT1yZXN0JnVzYWdlPWFwaSZ2aWV3PWFwaXRlc3Rlcg%3D%3D%26path%3D%252Fdiscovery%252Fswagger%252Fapi%252Fid%252Fcb550498-c28b-4bb1-90e0-9bb9d27e1244%253FswaggerVersion%253D2.0%2526filename%253DAPI%252520Tierce%252520Declaration%252520auto-entrepreneur.json%2526extensions%253Dfalse
doc_tech_external: https://portailapi.urssaf.fr/fr/?option=com_apiportal&view=apitester&usage=api&apiName=API%20Tierce%20Declaration%20auto-entrepreneur&sn=API%20Tierce%20Declaration%20auto-entrepreneur&Itemid=181&apitab=tests&tab=&apiId=cb550498-c28b-4bb1-90e0-9bb9d27e1244&menuId=181&apiVersion=1.2.0&managerId=1&renderTool=2&type=rest
keywords:
  - Urssaf
  - Acoss
  - Auto
  - entreprise
  - tiers
  - déclarant
themes:
  - Entreprise
last_update: 16/10/2020
---

L’API Tierce Déclaration auto-entrepreneur facilite l’accès aux éditeurs de logiciels, aux plateformes collaboratives et de services en ligne, aux données et aux démarches relatives à l’Urssaf pour le compte d’un auto-entrepreneur en qualité de tiers-déclarant.

<img src="/images/divers/api-auto-entrepreneur.svg" alt="API Auto Entrepreneur" style="max-width:300px" />

### A quoi sert l’API Tierce Déclaration auto-entrepreneur ?

L’API Tierce Déclaration auto-entrepreneur permet, pour le compte d'un auto-entrepreneur, d’accéder aux services de déclaration, d’obtention des montants des cotisations et contributions sociales des organismes de recouvrement concernés et d’ordonner le paiement desdites cotisations et contributions.

L’API Tierce Déclaration auto-entrepreneur permet en outre la consultation, l’ajout et la suppression de mandats Sepa avec l’Urssaf.

Du point de vue de l'usager, l'API permet au tiers déclarant de :

- Notifier l’Urssaf d’une autorisation de déclaration d’un auto-entrepreneur en son nom (mandat)
- Déclencher les démarches de déclarations et de paiements auprès de l’Urssaf, directement depuis son site Internet ou l’application mobile

### Fonctionnalités disponibles

Liste des fonctionnalités à titre d’exemple (liste non exhaustive) :

| Donnée       | Lien vers le jeu de données                                                                                                                                                                          |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Comptes      | Déterminer si un compte auto-entrepreneur est éligible à la tierce déclaration ainsi que connaître sa périodicité déclarative.                                                                       |
| Mandats      | Notifier l'Urssaf de l'enregistrement ou de l’annulation d'un mandat de tierce déclaration obtenu par la plateforme pour cet individu.                                                               |
| Estimer      | Effectuer une estimation des cotisations sociales dues à l'Urssaf pour un auto-entrepreneur en fonction de chiffres d’affaires passés en paramètre.                                                  |
| Declarer     | Effectuer la déclaration de chiffres d’affaires pour le compte de l’auto-entrepreneur identifié par son NIR ou son SIRET, avec en retour les montants des cotisations sociales dues pour la période. |
| Payer        | Initialiser un télépaiement SEPA pour l'Urssaf sur l'IBAN référencé en paramètre.                                                                                                                    |
| SEPA Mandats | Lister les mandats SEPA connus et enregistrer ou révoquer un mandat SEPA pour un auto-entrepreneur.                                                                                                  |

### En savoir plus

<!--
#### Qu'est ce qu'un tiers déclarant ?

Un tiers déclarant est une personne physique ou morale qui assure, à titre professionnel, les déclarations sociales pour le compte de plusieurs entreprises clientes (cabinets d'expertise comptable, …). -->

#### A propos de l’API Tierce Déclaration auto-entrepreneur

L’API Tierce Déclaration auto-entrepreneur est une API REST gratuite avec un accès restreint qui utilise la cinématique d’authentification Oauth2 Client Credentials.

Pour accéder à cette API gratuite, il faut en faire la demande [via le formulaire de demande de souscription](https://portailapi.urssaf.fr/fr/component/apiportal/registration) ou [via email](mailto:contact.tiercedeclaration@urssaf.fr) et signer la licence d’utilisation.

Une fois le dossier validé, un accès API bac à sable puis un accès API production sont fournis.

En ayant recours à cette API, le Cocontractant est considéré comme tiers-déclarant au sens des articles L.133-11, R133-43 et R133-44 du Code de Sécurité sociale, et a obtenu mandat de la part des utilisateurs pour ce faire.

---
title: API Tierce Déclaration Cesu
tagline: Connectez-vous directement à l’Urssaf pour accéder aux services du Cesu pour le compte d’un particulier employeur en tant que tiers-déclarant
external_site: https://open.urssaf.fr/explore/?sort=modified
producer: acoss
is_open: -1 # 1 means API is fully open
access_page:
  - who:
      - Un particulier
      - Une collectivité
      - Une administration
      - Une entreprise
    is_eligible: 0
    description: |
      Pour accéder à cette API gratuite, vous devez vous <External href="https://portailapi.urssaf.fr/connexion">créer un compte</External> puis en faire la demande via le formulaire de demande de souscription et signer la licence d’utilisation.

      <Button href="https://portailapi.urssaf.fr/fr/component/apiportal/registration">Se créer un compte sur le portail Urssaf et remplir une demande</Button>
contact_link: contact.tiercedeclaration@urssaf.fr
doc_tech_link: /api/v1/proxy/https%3A%2F%2Fportailapi.urssaf.fr%2Findex.php%3Foption%3Dcom_apiportal%26view%3Ddefinition%26managerId%3D1%26menuId%3D181%26format%3Draw%26stateReturn%3DL2ZyLz9JdGVtaWQ9MTgxJmFwaUlkPTA1Zjk1MjFmLTI1YWMtNGU0OC04ZjkzLTQ0N2E2NmJmNGFhMCZhcGlOYW1lPUFQSSUyMFRpZXJjZSUyMERlY2xhcmF0aW9uJTIwQ0VTVSZhcGlWZXJzaW9uPTEuMC4wJmFwaXRhYj10ZXN0cyZtYW5hZ2VySWQ9MSZtZW51SWQ9MTgxJm9wdGlvbj1jb21fYXBpcG9ydGFsJnJlbmRlclRvb2w9MiZ0eXBlPXJlc3QmdXNhZ2U9YXBpJnZpZXc9YXBpdGVzdGVy%26path%3D%252Fdiscovery%252Fswagger%252Fapi%252Fid%252F05f9521f-25ac-4e48-8f93-447a66bf4aa0%253FswaggerVersion%253D2.0%2526filename%253DAPI%252520Tierce%252520Declaration%252520CESU.json%2526extensions%253Dfalse
doc_tech_external: https://portailapi.urssaf.fr/fr/?option=com_apiportal&view=apitester&usage=api&a%20piName=API%20Tierce%20Declaration%20CESU&sn=API%20Tierce%20Declaration%%2020CESU&Itemid=181&apitab=tests&tab=&apiId=05f9521f-25ac-4e48-8f93-447a66bf4aa0&menuId=181&apiVersion=1.0.0&managerId=1&renderTool=2&type=rest
keywords:
  - Urssaf
  - Particulier
  - Employeur
  - CESU
  - tiers
  - déclarant
themes:
  - Entreprise
last_update: 16/10/2020
---

L’API Tierce Déclaration Cesu facilite l’accès aux éditeurs de logiciels, aux plateformes collaboratives et de services en ligne, aux données et aux démarches relatives au Cesu pour le compte d’un particulier employeur en qualité de tiers-déclarant.


### A quoi sert l’API Tierce Déclaration Cesu ?

L'API Tierce Déclaration Cesu permet, pour le compte d'un particulier employeur et en qualité de tiers-déclarant, d'accéder aux services d'inscription à l'offre simplifiée Cesu, d'obtenir les montants des cotisations et des contributions sociales pour une activité relevant du Cesu, de déclarer le salaire versé à un salarié par le particulier employeur auprès des organismes de recouvrement concernés et de procéder à la retenue à la source prévue à l'article 204A du code général des impôts.

Du point de vue de l'usager, l'API Tierce Déclaration Cesu permet au tiers déclarant de :

- Notifier l’Urssaf d’une autorisation de déclaration d’un particulier employeur en son nom (mandat)
- Déclarer une activité auprès du Cesu pour le compte d’un particulier employeur Liste des fonctionnalités à titre d’exemple (liste non exhaustive) :

### Fonctionnalités disponibles

Liste des fonctionnalités à titre d’exemple (liste non exhaustive) :

| Donnée     | Lien vers le jeu de données                                                                                                                  |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Employeurs | Inscrire un particulier au dispositif Cesu en tant qu’employeur ou de vérifier l’état de l’inscription d’un particulier employeur.           |
| Salariés   | Vérifier si un particulier existe en tant que salarié auprès du Cesu.                                                                        |
| Mandats    | Notifier l'Urssaf de l'enregistrement ou l’annulation d'un mandat de tiers déclarant obtenu par la plateforme pour un particulier employeur. |
| Estimer    | Simuler le montant de cotisations sociales pour une activité Cesu.                                                                           |
| Declarer   | Déclarer une activité auprès du Cesu pour le compte d’un particulier employeur.                                                              |

### En savoir plus

#### Qu'est ce qu'un particulier employeur ?

Un particulier employeur est une personne physique qui emploie un ou plusieurs salariés à son domicile privé, ou à proximité de celui-ci, afin de satisfaire des besoins relevant de sa vie personnelle.

#### A propos de l’API Tierce Déclaration Cesu

L’API Tierce Déclaration Cesu est une API REST gratuite avec un accès restreint qui utilise la cinématique d’authentification Oauth2 Client Credentials.

Pour accéder à cette API gratuite, il faut en faire la demande [via le formulaire de demande de souscription](https://portailapi.urssaf.fr/fr/component/apiportal/registration) ou [via email](mailto:contact.tiercedeclaration@urssaf.fr) et signer la licence d’utilisation.

Une fois le dossier validé, un accès API bac à sable puis un accès API production sont fournis.

En ayant recours à cette API, le Cocontractant est considéré comme tiers-déclarant au sens des articles L.133-11, R133-43 et R133-44 du Code de Sécurité sociale, et a obtenu mandat de la part des utilisateurs pour ce faire.

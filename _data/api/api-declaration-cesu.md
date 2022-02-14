---
title: API Tierce Déclaration Cesu
tagline: Connectez-vous directement à l’Urssaf pour accéder aux services du Cesu pour le compte d’un particulier employeur en tant que tiers-déclarant
external_site: https://open.urssaf.fr/explore/?sort=modified
producer: urssaf
is_open: -1 # 1 means API is fully open
datapass_link: https://datapass.api.gouv.fr/api-declaration-cesu
access_page:
  - who:
      - Un editeur d’application mobile
      - Un editeur de services web
    is_eligible: 0
    description: |
      Si vous êtes éditeur appli mobile / éditeur de service web et agissez ou comptez agir pour le compte de vos clients en qualité de tiers déclarant, vous pouvez remplir une demande d’accès à l’API vous-même pour l'entité que vous représentez, au sens des articles L.133-11, <External href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037877089">R133-43 et R133-44</External> du Code de Sécurité sociale.

      Pour remplir votre demande, vous aurez uniquement besoin de :

      - Créer un compte api.gouv pour accéder au formulaire DataPass ;
      - Attestation fiscale.

      <Button href="https://datapass.api.gouv.fr/api-declaration-cesu">Remplir une demande</Button>
  - who:
      - Un mandataire de service à la personne
    is_eligible: 0
    description: |
      Pour remplir votre demande, vous aurez uniquement besoin de :

       - Créer un compte api.gouv pour accéder au formulaire DataPass ;
       - Attestation fiscale.
       <Button href="https://datapass.api.gouv.fr/api-declaration-cesu">Remplir une demande</Button>
  - who:
      - Un editeur de logiciel de paie
      - Autres activités
    is_eligible: -1
    description: |
      Vous n'êtes pas autorisé à accéder à ces données.

      <Button href="/rechercher-api">Revenir à la recherche</Button>
contact_link: habilitation-api@urssaf.fr
doc_tech_link: https://portailapi.urssaf.fr/index.php?option=com_apiportal&view=definition&managerId=1&menuId=181&format=raw&stateReturn=L2ZyLz9JdGVtaWQ9MTgxJmFwaUlkPTA1Zjk1MjFmLTI1YWMtNGU0OC04ZjkzLTQ0N2E2NmJmNGFhMCZhcGlOYW1lPUFQSSUyMFRpZXJjZSUyMERlY2xhcmF0aW9uJTIwQ0VTVSZhcGlWZXJzaW9uPTEuMC4wJmFwaXRhYj10ZXN0cyZtYW5hZ2VySWQ9MSZtZW51SWQ9MTgxJm9wdGlvbj1jb21fYXBpcG9ydGFsJnJlbmRlclRvb2w9MiZ0eXBlPXJlc3QmdXNhZ2U9YXBpJnZpZXc9YXBpdGVzdGVy&path=%2Fdiscovery%2Fswagger%2Fapi%2Fid%2F05f9521f-25ac-4e48-8f93-447a66bf4aa0%3FswaggerVersion%3D2.0%26filename%3DAPI%2520Tierce%2520Declaration%2520CESU.json%26extensions%3Dfalse
useSwaggerProxy: true
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

L’API Tierce Déclaration Cesu facilite l’accès aux éditeurs de logiciels, aux plateformes collaboratives et de services en ligne, aux mandataires de service à la personne aux données et aux démarches relatives à l’Urssaf service Cesu pour le compte d’un particulier employeur en qualité de tiers-déclarant.

### A quoi sert l’API Tierce Déclaration Cesu ?

Pour le compte d'un **particulier employeur** et en qualité de tiers-déclarant, l'API Tierce Déclaration Cesu permet :

- d'accéder au service d'inscription à l’Urssaf service Cesu,
- d’activer le service Cesu+ pour un particulier employeur et son salarié, d’activer le service d'avance immédiate de crédit d'impôt pour le particulier employeur,
- d'obtenir les montants des cotisations et des contributions sociales pour une activité relevant du Cesu,
- de déclarer le salaire versé à un salarié par le particulier employeur auprès des organismes de recouvrement concernés,
- de procéder à la retenue à la source prévue à l'article 204A du code général des impôts.

Dans le cas où le service Cesu+ est activé pour **un couple particulier employeur/salarié**, l'API Tierce Déclaration Cesu permet aussi de réaliser des déclarations Cesu+ et de procéder au versement du salaire déclaré au salarié. Si le service d'avance immédiate de crédit d'impôt est activé et uniquement pour les déclarations Cesu+, cette avance immédiate est déduite du montant à régler par le particulier employeur.

Du point de vue de l'usager, l'API Tierce Déclaration Cesu permet au tiers déclarant de :

- Notifier l’Urssaf d’une autorisation de déclaration d’un particulier employeur en son nom (mandat)
- Notifier l’Urssaf d’une autorisation d’activation du service Cesu+ de la part du particulier employeur et de son salarié
- Déclarer une activité auprès du Cesu pour le compte d’un particulier employeur avec la possibilité d'indiquer les éléments constitutifs de la déclaration (acompte, nature d'activité)

### Fonctionnalités disponibles

Liste des fonctionnalités à titre d’exemple (liste non exhaustive) :

| Donnée     | Lien vers le jeu de données                                                                                                                                                                                                                                                                           |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Employeurs | Inscrire un particulier à l’Urssaf service Cesu en tant qu’employeur, activer le service Cesu+ pour le particulier employeur et son salarié, activer le service d’avance immédiate de crédit d’impôt pour le particulier employeur ou de vérifier l’état de l’inscription d’un particulier employeur. |
| Salariés   | Vérifier si un particulier existe en tant que salarié auprès du Cesu.                                                                                                                                                                                                                                 |
| Mandats    | Notifier l'Urssaf de l'enregistrement ou l’annulation d'un mandat de tierce déclaration obtenu par la plateforme pour un particulier employeur.                                                                                                                                                       |
| Estimer    | Simuler le montant de cotisations sociales pour une activité Cesu.                                                                                                                                                                                                                                    |
| Declarer   | Déclarer une activité auprès du Cesu pour le compte d’un particulier employeur.                                                                                                                                                                                                                       |

### En savoir plus

L’API Tierce Déclaration Cesu est une API REST gratuite avec un accès restreint qui utilise la cinématique d’authentification Oauth2 Client Credentials.
Pour accéder à cette API gratuite, il faut en faire la demande via le formulaire de demande de souscription [lien à changer vers le Datapass] et respecter les conditions d’habilitation.

Une fois le dossier validé, un accès API bac à sable puis un accès API production sont fournis sous conditions.

En ayant recours à cette API, le Cocontractant est considéré comme tiers-déclarant au sens des articles L.133-11, R133-43 et R133-44 du Code de Sécurité sociale, et a obtenu mandat de la part des utilisateurs pour ce faire.

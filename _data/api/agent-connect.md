---
title: AgentConnect
tagline: Identifier les agent des administration centrales sur votre site internet et accéder à certaines données d'identité certifiées
external_site: https://franceconnect.gouv.fr/partenaires
is_open: -1 # -1 means API not open
datapass_link: https://franceconnect.gouv.fr/partenaires
access_page:
  - who:
      - Un particulier
    is_eligible: -1
    description: |
      Seules les administrations et les entreprises sont habilitées à utiliser l'API FranceConnect ou intégrer le bouton FranceConnect.

      Si vous cherchez à contacter l'équipe FranceConnect, vous pouvez écrire à [support@franceconnect.gouv.fr](mailto:support@franceconnect.gouv.fr)

      <Button href="/rechercher-api">Ou vous pouvez rechercher une autre API</Button>
  - who:
      - Une entreprise
    is_eligible: 0
    description: |
      Si vous avez vérifié [votre éligibilité](https://franceconnect.gouv.fr/partenaires), vous pouvez demander à [intégrer le bouton FranceConnect](https://datapass.api.gouv.fr/franceconnect).

      <NextSteps />
      <Button href="https://franceconnect.gouv.fr/partenaires">Vérifier mon éligibilité et remplir une demande</Button>
  - who:
      - Une collectivité ou une administration
    is_eligible: 1
    description: |
      Si vous souhaitez intégrer le bouton FranceConnect, [faites votre demande d’accès](https://datapass.api.gouv.fr/franceconnect).

      <NextSteps />
      <Button href="https://franceconnect.gouv.fr/partenaires">Remplir une demande</Button>
partners:
producer: dinum
keywords:
  - Authentification
  - Identification
  - Agent
  - Administration
  - SSO
themes:
  - Administration & législation
contact_link: support.partenaires@agentconnect.gouv.fr
doc_tech_external: https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service
visits_2019: 4500
last_update: 10/12/2020
---

L‘API AgentConnect permet aux administrations centrales, aux services déconcentrés et aux opérateurs de l’Etat d’implémenter AgentConnect sur les services applicatifs métiers (fournisseurs de service) afin de leur permettre de déléguer la vérification de l’identité de l’agent à des fournisseurs d’identités.

Ces derniers transmettent des données d’identité dites pivot à AgentConnect qui se chargera de partager les données nécessaires avec le fournisseur de service pour habiliter l’agent à accéder à son application.

### A quoi ca sert ?

Intégrer le fédérateur d’identité AgentConnect, permet :

- Pour les agents : d’utiliser un compte existant sans avoir à conserver en mémoire plusieurs mots de passe
- Pour les fournisseurs de service : s’affranchir de la création de compte pour accéder aux services et permettre les usages interministériels
- Pour les administrations : renforcer la sécurité des moyens d’authentification

### Les données disponibles via l'API

l'API AgentConnect récupère auprès des fournisseurs d’identités des données d’identité qui permettront aux fournisseurs de services d’authentifier les agents et leurs ouvrir l’accès aux applications.

On distingue les données de l’identité pivot, il s’agit de données obligatoires que le fournisseur de données devra transmettre à AgentConnect.

| Nom                   | Description                                                                          |
| --------------------- | ------------------------------------------------------------------------------------ |
| Nom                   | nom de naissance                                                                     |
| Prénoms               | tous les prénoms de l’état civil                                                     |
| Identifiant technique | Identifiant technique unique qui est enregistré auprès du fournisseur d’identité     |
| Adresse mail          | Adresse de courrier électronique qui est enregistré auprès du fournisseur d’identité |

En plus de cette identité pivot, selon le cas d'usage et la capacité des fournisseurs d’identités à les transmettre, il sera possible d’accéder à des données complémentaires :

| Nom                       | Description                                                                                              |
| ------------------------- | -------------------------------------------------------------------------------------------------------- |
| Siren                     | Identifiant de l'administration                                                                          |
| Siret                     | Identifiant établissement                                                                                |
| Ministère                 | Direction ou service d’affectation Nom de l’organisation de rattachement (Ministère, Direction, Service) |
| Adresse mail              | Adresse de courrier électronique qui est enregistré auprès du fournisseur d’identité                     |
| Population d’appartenance | Agent, prestataire, stagiaire                                                                            |
| Téléphone                 | Numéro de téléphone de contact                                                                           |

### Comment ça marche ?

_Schéma de fonctionnement de AgentConnect :_
![Fonctionnement de AgentConnect](/images/divers/agentConnect.png)

- Identifier vos agents utilisateurs simplement et de façon sécurisée, sans leur demander de compléter des formulaires et de créer et gérer des identifiant/mot de passe dédiés à votre service en ligne.
- Recueillir tout ou partie des données mises à disposition par AgentConnect :
  - Les données d’identité : le nom d’usage, le prénom d’usage, l’identifiant technique unique, l’adresse email.
  - La donnée de contact @mail vérifiée par le fournisseur d’identité.

**NB:** Pour en savoir plus, vous pouvez consulter la <External href="https://partenaires.franceconnect.gouv.fr/documentation">documentation partenaires</External>.

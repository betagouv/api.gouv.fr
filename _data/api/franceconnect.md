---
title: FranceConnect
tagline: FranceConnect est un dispositif qui garantit l’identité d’un usager en se reposant sur des comptes certifiés existants.
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
  - DGFiP
  - Ameli
  - La Poste
  - MobileConnect & Moi
  - MSA
producer: dinum
keywords:
  - Authentification
  - Identification
  - SSO
themes:
  - Particulier
contact_link: support.partenaires@franceconnect.gouv.fr
doc_tech_external: https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service
visits_2019: 5000
uptime: 99.893 # https://uptimerobot.com/dashboard.php#778110642
last_update: 10/12/2019
---

### Qu'est-ce que FranceConnect ?

FranceConnect est un dispositif qui permet aux internautes de s'identifier sur un service en ligne par l'intermédiaire d'un compte existant (impots.gouv.fr, ameli.fr...).

L'authentification est transparente pour une application utilisant FranceConnect (elle ne converse jamais directement avec le fournisseur d'identité, c'est FranceConnect qui s'en charge).

FranceConnect fournit au service en ligne l'identité vérifiée d'une personne physique, appelée l'identité pivot.

### A qui s'adresse FranceConnect ?

FranceConnect cible les partenaires suivants :

- Fournisseurs de services : Vous proposez des services en ligne aux usagers.
- Fournisseurs d'identité : Vous garantissez l’identification et l’authentification d’un usager.
- Fournisseurs de données : Vous transmettez des données aux fournisseurs de service suite au consentement de l'usager.

### Sites de démonstration

#### Tester l'identification avec FranceConnect du point de vue usager

1. se rendre sur le site de test : [http://fournisseur-de-service.dev-franceconnect.fr/](http://fournisseur-de-service.dev-franceconnect.fr/)
2. cliquer sur "se connecter" puis sur "s'identifier avec FranceConnect"
3. choisir "identity-provider-example" comme fournisseur d'identité
4. utiliser les identifiants suivants : 3_melaine \| 123 (d'autres identifiants de test sont disponibles [ici](https://github.com/france-connect/identity-provider-example/blob/master/database.csv), le mot de passe est toujours 123)
5. une fois revenu sur le site, vous êtes connecté

#### Tester l'échange de données avec FranceConnect du point de vue usager

1. sur le site de test, cliquer sur le bouton "récuperer mes données via FranceConnect"
2. dans la mire FranceConnect de consentement d'échange de données, cliquer sur "Accepter"
3. vous devriez voir apparaître les données relatives à l'identifiant FranceConnect choisi (d'autres données sont disponibles [ici](https://github.com/france-connect/data-provider-example/blob/master/database.csv))

#### Test du point de vue fournisseur de service

L'interface qui est en ligne peut être installée sur votre poste de travail, ce qui vous permettra de voir :

- les échanges entre FranceConnect et le FS
- les échanges entre le FS et l'API de test Impôts Particulier
- les échanges entre l'API de test Impôts Particulier et FranceConnect

Le code et la procédure d'installation sont disponibles sur notre dépôt de code github : [https://github.com/france-connect/service-provider-example/](https://github.com/france-connect/service-provider-example/).

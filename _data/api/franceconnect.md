---
title: API de FranceConnect
tagline: Ajouter la brique d'identification du service publique sur un site internet et accéder à certaines données d'état civil certifiées
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

### Qu'est-ce que l’API de FranceConnect ?

L‘API de FranceConnect est un dispositif qui permet à des administrations, des collectivités ou des entreprises d’ajouter un bouton FranceConnect, pour **identifier les utilisateurs** de leur service en ligne.

Si vous êtes un particulier, vous pouvez [contacter l’équipe de FranceConnect.](https://franceconnect.gouv.fr/faq)

### A quoi ca sert ?

- identifier les utilisateurs de votre service en ligne simplement et de façon sécurisée, sans création de compte supplémentaire, c'est-à-dire sans leur demander de gérer des identifiants dédies pour chaque service en ligne.
- accéder aux **6 informations** nécessaires pour identifier une personne unique : l'identité pivot FranceConnect : le nom de naissance, les prénoms, le sexe, la date de naissance, le lieu de naissance (ville et pays).
- accéder à des **informations supplémentaires**, éventuellement détenues par les fournisseurs de l'identité pivot : l'adresse mail de la personne et son nom d'usage.
- accéder à des **informations** de multiples administration, grâce aux APIs FranceConnectées.

### Les données disponibles via l'API

Utiliser l'API de FranceConnect pour identifier les utilisateurs de votre site permet également d'accéder à des données d'état civil. C'est ce qu'on appelle **l'identité pivot**.

| Nom       | Description               |
| --------- | ------------------------- |
| Nom       | nom de naissance, prénom  |
| Sexe      | Homme / Femme             |
| Naissance | date et lieu de naissance |

En plus de cette identité pivot, selon votre cas d'usage, vous pouvez aussi avoir accès aux informations complémentaires :

| Nom          | Description                                                                                                                  |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| adresse mail | l'adressecourrier électronique qui est enregistrée auprès du fournisseur d'identité choisi par l'usager lors de sa connexion |
| Nom d'usage  |                                                                                                                              |

### API FranceConnectées = accéder aux données d'une API via FranceConnect

Certaines APIs sont étroitement liées a FranceConnect et permettent de récupérer des informations suivantes directement à partir de l'identité pivot :

| Nom                        | Description                                                                                   | API                                                 |
| -------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| Revenu fiscal de référence | Les revenus déclarés auprès de l'administration fiscale                                       | [API Impot particulier](/les-api/impot-particulier) |
| Adresse fiscale            | L'adresse déclarée auprès de l'administration fiscale                                         | [API Impot particulier](/les-api/impot-particulier) |
| Nombre de parts fiscales   |                                                                                               | [API Impot particulier](/les-api/impot-particulier) |
| bénéficiaires              | Les bénéficiaires de l'individu connecté via FranceConnect                                    | [API de droits](/les-api/api_ameli_droits_cnam)     |
| caisse                     | L'organisme de rattachement du bénéficiaire (régime, centre de gestion, adresse de la caisse) | [API de droits](/les-api/api_ameli_droits_cnam)     |
| niveau de couverture       | Droits de base, droits à une complémentaire santé solidaire, présence d'un médecin traitant   | [API de droits](/les-api/api_ameli_droits_cnam)     |
| motifs d’exonération       | Uniquement accessible aux établissements de soins                                             | [API de droits](/les-api/api_ameli_droits_cnam)     |
| médecin traitant           | Uniquement accessible aux établissements de soins                                             | [API de droits](/les-api/api_ameli_droits_cnam)     |

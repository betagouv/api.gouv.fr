---
title: API Pro Santé Connect
tagline: Permettre l'authentification des professionnels de la santé
external_site: https://esante.gouv.fr/
is_open: -1 # -1 means API not open
datapass_link: https://esante.gouv.fr/
access_page:
  - who:
      - Un particulier
    is_eligible: -1
    description: |
      Seules les administrations et les entreprises sont habilitées à utiliser l'API Pro Santé Connect ou intégrer le bouton Pro Santé Connect.

      Si vous cherchez à contacter l'équipe Pro Santé Connect, vous pouvez [contacter l'Agence Numérique en Santé](https://esante.gouv.fr/assistance)

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

L‘API FranceConnect permet à des administrations, des collectivités ou des entreprises d’ajouter un bouton FranceConnect, pour recueillir des données d’identité fiables et ainsi identifier les utilisateurs de leur service en ligne (en vue d’une entrée en relation ou connexion).

### A quoi ca sert ?

PRO Santé Connect est un fournisseur d’identité (FI) au standard OpenID. Il accepte comme « credential » d’authentification la carte CPS et une e-carte CPS qui est une application téléphone. L’assertion d’authentification OpenIDConnect « remonte » au fournisseur de service (FS) demandeur de l’authentification les traits d’identités classiques plus l’identité sectorielle (profession, savoir-faire, situation d’exercice, …) afin que celui-ci puisse, au-delà de la simple authentification, gérer tout ou partie de son contrôle d’accès . Ces éléments sont fournis par [notre annuaire](https://annuaire.sante.fr) et incorporé dans le jeton OpenIdConnect.

### Les données disponibles via l'API

Utiliser l'API FranceConnect pour identifier les utilisateurs de votre site permet également d'accéder à des données d'état civil. C'est ce qu'on appelle **l'identité pivot**.

| Nom       | Description                      |
| --------- | -------------------------------- |
| Nom       | nom de naissance                 |
| Prénoms   | tous les prénoms de l’état civil |
| Naissance | date  et lieu (ville/pays)       |
| Sexe      | Homme / Femme                    |

En plus de cette identité pivot, selon votre cas d'usage, vous pouvez aussi avoir accès aux informations complémentaires :

| Nom          | Description                                                                                                                      |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| adresse mail | l'adresse de courrier électronique qui est enregistrée auprès du fournisseur d'identité choisi par l'usager lors de sa connexion |
| Nom d'usage  |                                                                                                                                  |

### Comment ça marche ?

_Schéma de fonctionnement de FranceConnect :_
![Fonctionnement de FranceConnect](/images/divers/franceConnect.png)

- Identifier vos utilisateurs simplement et de façon sécurisée, sans leur demander de compléter des formulaires et de créer et gérer des identifiant/mot de passe dédiés à votre service en ligne.
- Recueillir tout ou partie des données mises à disposition par FranceConnect :
  - Les données d’identité : le nom de naissance, les prénoms, le sexe, la date de naissance, le lieu de naissance (ville et pays). Le nom marital s’il existe et est connu du fournisseur d’identité sélectionné par l’utilisateur.
  - La donnée de contact @mail vérifiée par le fournisseur d’identité.

**NB:** Pour en savoir plus, vous pouvez consulter la <External href="https://partenaires.franceconnect.gouv.fr/documentation">documentation partenaires</External>.

### API FranceConnectées

Certaines API fonctionnent avec FranceConnect et permettent de récupérer tout ou partie des informations suivantes directement à partir des données d’identité recueillies via FranceConnect :

| Nom                        | Description                                                                                   | API                                                               |
| -------------------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Revenu fiscal de référence | Les revenus déclarés auprès de l'administration fiscale                                       | [API Impôt particulier](/les-api/impot-particulier)               |
| Adresse fiscale            | L'adresse déclarée auprès de l'administration fiscale                                         | [API Impôt particulier](/les-api/impot-particulier)               |
| Nombre de parts fiscales   |                                                                                               | [API Impôt particulier](/les-api/impot-particulier)               |
| bénéficiaires              | Les bénéficiaires de l'individu connecté via FranceConnect                                    | [API de droits Assurance Maladie](/les-api/api_ameli_droits_cnam) |
| caisse                     | L'organisme de rattachement du bénéficiaire (régime, centre de gestion, adresse de la caisse) | [API de droits Assurance Maladie](/les-api/api_ameli_droits_cnam) |
| niveau de couverture       | Droits de base, droits à une complémentaire santé solidaire, présence d'un médecin traitant   | [API de droits Assurance Maladie](/les-api/api_ameli_droits_cnam) |
| motifs d’exonération       | Uniquement accessible aux établissements de soins                                             | [API de droits Assurance Maladie](/les-api/api_ameli_droits_cnam) |
| médecin traitant           | Uniquement accessible aux établissements de soins                                             | [API de droits Assurance Maladie](/les-api/api_ameli_droits_cnam) |

### Comment ça marche ?

Ces API sont complémentaires à FranceConnect et ne sont accessibles que dans le cadre de l’utilisation de FranceConnect par le citoyen, elles sont appelées API FranceConnectées. Elles ne sont accessibles qu’à certaines organisations.

_Schéma de fonctionnement des API FranceConnectées :_
![Fonctionnement des API FranceConnectées](https://franceconnect.gouv.fr/images/how-it-works-data.svg)

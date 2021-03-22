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
      Seules les administrations et les éditeurs de logiciels sont habilitées à utiliser l'API Pro Santé Connect ou intégrer le bouton Pro Santé Connect.

      Si vous cherchez à contacter l'équipe Pro Santé Connect, vous pouvez [contacter l'Agence Numérique en Santé](https://esante.gouv.fr/assistance)

      <Button href="/rechercher-api">Ou vous pouvez rechercher une autre API</Button>
  - who:
      - Une entreprise
    is_eligible: 0
    description: |
      Seuls les éditeurs de logiciels proposant une solution web adressée aux professionnels de santé peuvent demander à se raccorder à PRO Santé Connect.
  - who:
      - Une collectivité ou une administration
    is_eligible: 1
    description: |
      Vous pouvez réaliser une demande d'accès à l'API. 
      
  - Un éditeur de logiciels
    is_eligible: 0
    description: |
      Tout éditeur proposant une solution web adressée aux professionnels de santé et qui souhaite pouvoir authentifier des professionnels de santé peut demander à se raccorder à PRO Santé Connect. 

      <NextSteps />
      <Button href="https://franceconnect.gouv.fr/partenaires">Remplir une demande</Button>
partners:
  - ANS
  - Ministère des Solidarités et de la Santé (MSS)
producer: ANS
keywords:
  - Authentification
  - Identification
  - SSO
  - Santé
  - Professionnels
  - Editeurs
themes:
  - Santé
contact_link: prosanteconnect.editeurs@esante.gouv.fr
doc_tech_external: https://integrateurs-cps.asipsante.fr/pages/prosanteconnect/documentation-fs
visits_2019: 5000
uptime: 99.893 # https://uptimerobot.com/dashboard.php#778110642
last_update: 22/03/2020
---

L‘API Pro Santé connect permet à des administrations, des éditeurs de logiciels ou des entreprises d’ajouter un bouton Pro Santé Connect, pour recueillir des données d’identité fiables et ainsi identifier les utilisateurs de leur service en ligne (en vue d’une entrée en relation ou connexion).

### A quoi ca sert ?

PRO Santé Connect est un fournisseur d’identité (FI) au standard OpenID. Il accepte comme « credential » d’authentification la carte CPS et une e-carte CPS qui est une application téléphone. L’assertion d’authentification OpenIDConnect « remonte » au fournisseur de service (FS) demandeur de l’authentification les traits d’identités classiques plus l’identité sectorielle (profession, savoir-faire, situation d’exercice, …) afin que celui-ci puisse, au-delà de la simple authentification, gérer tout ou partie de son contrôle d’accès . Ces éléments sont fournis par [notre annuaire](https://annuaire.sante.fr) et incorporé dans le jeton OpenIdConnect.
                                                                                                                          |

### Comment ça marche ?

**L'identité pivot**.

| Type       | Données                      |
| --------- | -------------------------------- |
| Données d'identification       | nom, prénom, idNat (adeli ou RPPS) |
| Données sectorielles   | type d'activité (salarié ou libéral) et lieu d'activité. |



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
doc_tech_external: https://integrateurs-cps.asipsante.fr/pages/prosanteconnect/documentation-fs
visits_2019: 5000
uptime: 99.893 # https://uptimerobot.com/dashboard.php#778110642
last_update: 10/12/2019
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



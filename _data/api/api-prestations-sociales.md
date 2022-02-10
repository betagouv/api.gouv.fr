---
title: API bénéficiaires d'une prestation de sécurité sociale
tagline: Vérifiez si une personne est bénéficiaire d'une prestation de la sécurité sociale
external_site: https://www.securite-sociale.fr/accueil
is_open: -1 # -1 means API not open
is_france_connected: 1 # undefined | 1 | 2. 2 means can be used with FC, 2 means has to be used with FC
datapass_link: https://datapass.api.gouv.fr/api-prestations-sociales-fc
access_page:
  - who:
      - Un particulier
    is_eligible: -1
    description: |
      Vous ne pouvez pas accéder a ces informations.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Une administration
    is_eligible: 1
    description: |

      <NextSteps />
      <QuestionTree tree='france-connected-api' question='prestationsSociales' />
  - who:
      - Une entreprise
    is_eligible: 0
    description: |
      Vous pouvez accéder à l’API uniquement si vous êtes [partenaire de France Connect](https://franceconnect.gouv.fr/partenaires), et pour un cas d’usage autorisé par la loi. Vous devrez fournir le cadre juridique qui vous autorise à utiliser ces données.

      <NextSteps />
      <Button href="https://datapass.api.gouv.fr/api-prestations-sociales-fc">Remplir une demande</Button>
partners:
  - Direction de la sécurité sociale
producer: mss
keywords:
  - rsa
  - css
  - cmu
  - santé
  - bénéficaire
  - allocations
  - revenu
  - mutuelle
  - social
content_intro: |
  La Direction de la Sécurité Sociale met à disposition des administrations éligibles cette API, qui permet de vérifier si un individu **identifié sur France Connect** bénéficie d'une prestation de la sécurité sociale.
#rate_limiting_description: |
#monitoring_link: 
#monitoring_description: |
contact_link: contact@apisecu.fr
doc_tech_link: /swaggers/api-prestations-sociales.json
themes:
  - Particulier
visits_2019: 3000
#uptime: 
last_update: 09/11/2021
---
### À quoi sert l'API bénéficiaire d'une prestation de sécurité sociale ?

Aujourd'hui, l'API permet de vérifier si une personne bénéficie :

  1. de la Complémentaire Santé Solidaire (CSS)
  2. du Revenu de Solidarité Active (RSA).

Ainsi, l'API autorise les administrations à accéder à des informations certifiées à la source et ainsi :

- s’affranchir de demander le téléchargement des pièces justificatives,
- automatiser le processus de traitement des demandes et de supprimer le contrôle en back-office,
- d'écarter le risque de fraude documentaire.

### Données

Les données présentes dans l’API, pour chaque individu :

| Nom                  | Description                                                                                   |
| -------------------- | --------------------------------------------------------------------------------------------- |
| CSSDescription       | valeur indiquant si la personne bénéficie de la CSS                                           |
| RSADescription       | valeur indiquant si la personne bénéficie du RSA                                              |

### Plus d'informations

**La Complémentaire Santé Solidaire (CSS)** est un dispositif qui permet aux personnes ayant un revenu modeste, de bénéficier d'une complémentaire santé.

**Le Revenu de Solidarité Active** est une prestation qui permet de compléter les ressources d'une personne démunie ou aux ressources faibles.

---
title: API Prestations sociales
tagline: Vérifiez si une personne est bénéficiaire d'une prestation de la sécurité sociale
external_site: https://www.securite-sociale.fr/accueil
is_open: -1 # -1 means API not open
is_france_connected: 1 # undefined | 1 | 2. 2 means can be used with FC, 2 means has to be used with FC
#datapass_link: 
access_page: 
  - who:
      - Une administration
    is_eligible: 0
    description: |
      Cette API est accessible aux administrations. 

      <NextSteps />
      <Button href="https://datapass.api.gouv.fr/api-prestations-sociales">Remplir une demande</Button>
  - who: 
      - Une entreprise
    is_eligible: 0
    description: |
      Cette API est accessible aux entreprises sous certaines conditions.   

      <NextSteps />
      <Button href="https://datapass.api.gouv.fr/api-prestations-sociales">Remplir une demande</Button>
  - who:
      - Un particulier
    is_eligible: -1
    description: |
      Seules les administrations et les organisations qui sont partenaires de France Connect sont éligibles. 
      <Button href="/rechercher-api">Rechercher une autre API</Button>
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
  La Direction de la Sécurité Sociale met à disposition des administrations éligibles cette API, qui permet de vérifier si une personne bénéficie de prestations sociales.
#rate_limiting_description: |
#monitoring_link: 
#monitoring_description: |
contact_link: contact@apisecu.fr
doc_tech_link: /swaggers/api_prestations.json
themes:
  - Particulier
visits_2019: 3000
#uptime: 
last_update: 09/11/2021
---
### À quoi sert l'API Prestations de sécurité sociale ?

Aujourd'hui, l'API permet de vérifier si une personne bénéficie :

  1. de la Complémentaire Santé Solidaire (CSS)
  2. du Revenu de Solidarité Active (RSA).

### Données

Les données présentes dans l’API, pour chaque individu :

| Nom                  | Description                                                                                   |
| -------------------- | --------------------------------------------------------------------------------------------- |
| CSSDescription       | valeur indiquant si la personne bénéficie de la CSS                                           |
| RSADescription       | valeur indiquant si la personne bénéficie du RSA                                              |

### Plus d'informations

**La Complémentaire Santé Solidaire (CSS)** est un dispositif qui permet aux personnes ayant un revenu modeste, de bénéficier d'une complémentaire santé.

**Le Revenu de Solidarité Active** est une prestation qui permet de compléter les ressources d'une personne démunie ou aux ressources faibles.

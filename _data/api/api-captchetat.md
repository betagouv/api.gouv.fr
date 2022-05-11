---
title: API CaptchEtat
tagline: Générer un CAPTCHA pour sécuriser un service en ligne
datapass_link: https://datapass.api.gouv.fr/api-captchetat
access_page: 
  - who:
      - Un particulier
      - Une entreprise
    is_eligible: -1
    description: |
      L'API est réservée aux administrations.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Une institution
      - Une collectivité
      - Un ministère
    is_eligible: 1
    description: |

      <NextSteps />
      <Button href="https://datapass.api.gouv.fr/api-captchetat">Remplir une demande</Button>
is_open: -1
producer: aife
keywords:
  - applications
  - institutions
  - collectivités
  - ministères
  - sécurité
  - captcha
  - authentification
  - robot
  - humain
  - mot de passe
  - PISTE
themes:
  - Administration
contact_link: https://piste.gouv.fr/support/#/
doc_tech_link: /swaggers/api-captchetat.json
visits_2019: 1500
last_update: 28/01/2022
---

L’API CaptchEtat permet de générer un CAPTCHA de type de chaine de caractères déformée à reproduire. Elle est destinée aux partenaires interministériels ou à des entités publiques.

## Contenu accessible via cette API

Elle contient les données suivantes :

- structure HTML
- images
- sons
- chaînes de caractères
- icones.

---
title: API VigiEau
tagline: Connaître les restrictions d'eau en vigueur à son adresse.
producer: mtes
contact_link: contact@vigieau.beta.gouv.fr
partners:
  - mtes
  - ademe
  - dinum
is_open: 1
themes:
 - Energie
 - Environnement
 - Eau
keywords:
  - Eau
  - Restrictions
  - Potable
  - Collectivite
  - Vigieau
last_update: 31/05/2024
doc_tech_external: https://api.vigieau.beta.gouv.fr/swagger
content_intro: |

---

### À quoi sert l'API VigiEau ?

En intégrant l'API dans votre système d'information, vous pouvez notamment :

- rechercher le niveau de gravité (tension sur la ressource en eau) en vigueur à son adresse
- rechercher les restrictions en vigueur à son adresse selon le profil d'utilisateur (particulier, entreprise, collectivité, exploitation agricole) et / ou le type d'eau consommé (eau potable, eau superficielle, eau souterraine)

L'API s'adresse aux médias et gestionnaire de réseaux d'eaux.

Vous pouvez retrouver la documentation ici : https://github.com/MTES-MCT/vigieau-api


## Principales données disponibles

-Zone d'alerte associé à l'adresse => Son code, nom, type, niveau de gravité et son département

-Arrêté de restriction associé => sa date de début, date de fin, le lien vers son PDF

-Les usages / restrictions en vigueur => nom, thématique, description

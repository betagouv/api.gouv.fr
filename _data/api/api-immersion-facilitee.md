---
title: API Immersion Facilitée
tagline: Faciliter la mise en relation des personnes les plus éloignées de l'emploi avec les employeurs solidaires (SIAE, GEIQ, EA et EATT) et les accompagnants (orienteurs et prescripteurs habilités).
is_open: 0 # 0 means API require an account
account_link: https://immersion-facile.beta.gouv.fr/doc-api
external_site: https://immersion-facile.beta.gouv.fr/
producer: gip-inclusion
keywords:
  - Insertion
  - social
  - Inclusion
  - Aides
  - Entreprise
  - Inclusive
#rate_limiting_resume: 
themes:
  - Entreprise
  - Emploi
contact_link: 
doc_tech_link: https://immersion-facile.beta.gouv.fr/doc-api
last_update: 22/02/2024
---

## Description

Le but d'Immersion facilitée est de simplifier les immersions professionnelles selon plusieurs axes de travail :

- Dématérialiser entièrement les demandes d'immersion et les interactions des conseillers pôle emploi, missions locales, etc.
- Constituer un annuaire des entreprises qui sont susceptible d'accueillir en immersion
- Rendre les immersions recherchables par les bénéficiaires

  
### À quoi sert l'API Immersion facilitée ?


L'API permet :

🔎 La recherche d'entreprises accueillantes et mise en contact :

- Consulter le détail d’une offre d’immersion
- Rechercher des offres d'immersion correspondant à une recherche
- Soumettre une demande de mise en contact auprès d’une entreprise accueillante
  

🔎 L'accès aux conventions (dans ce cas il nous faudra connaître les agences qui vous concernent)

- Récupération et Consultation du détail d’une convention
- Lister (avec filtre) les conventions rattachées au consommateur
  
  
👉 [Tester le service](https://immersion-facile.beta.gouv.fr/)


### Quelles sont les données contenues dans l'API Immersion facilitée ?

On retrouve - entre autres :
- SIRET
- Raison sociale ou nom d'enseigne
- NAF
- Effectifs
- Adresse de l'entreprise
- métiers (ROME et  appellations)

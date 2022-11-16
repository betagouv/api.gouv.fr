---
title: API Sesali
tagline: Accéder à la synthèse médicale d’un patient européen de manière sécurisée, structurée et en français
external_site: https://sesali.fr/ncpehfr-gui/index.html
is_open: -1 # -1 means API not open
access_page: 
  - who:
      - Un particulier
      - Une administration
    is_eligible: -1
    description: |
      Seuls les les éditeurs de logiciels raccordés à Pro Santé Connect sont habilitées à utiliser l'API Sesali.

      <Button href="/rechercher-api">Ou vous pouvez rechercher une autre API</Button>
  - who:
      - Une entreprise
      - Un éditeur de logiciels
    is_eligible: 0
    description: |
      Seuls les les éditeurs de logiciels raccordés à Pro Santé Connect sont habilitées à utiliser l'API Sesali.

      <Button href="mailto:ans-europe@esante.gouv.fr">Demander un accès</Button>
partners:
  - Ministère des Solidarités et de la Santé (MSS)
producer: ans
keywords:
  - Authentification
  - Patient
  - Europe
  - dossier médical
  - carte vitale
  - Identification
  - SSO
  - Santé
  - Professionnels
  - Editeurs
  - Connect
  - RPPS
  - adeli
  - idNat
themes:
  - Santé
contact_link: ans-europe@esante.gouv.fr
doc_tech_external: https://sesali.fr/ncpehfr-gui/index.html
last_update: 04/11/2022
content_intro: | 
    Le Service Sesali (Service Européen de SAnté en LIgne) permet aux professionnels de santé français d’accéder à la synthèse médicale d’un patient européen de manière sécurisée, structurée et en français. Plus de barrière linguistique !

---

### À quoi sert l'API Sesali ?

L’API Sesali permet de raccorder directement les logiciels métiers des professionnels de santé au service Sesali pour accéder aux données de santé des patients européens. Les professionnels de santé peuvent alors accéder à Sesali sans avoir besoin de passer par l’interface web (http://www.sesali.fr) et sans réauthentification via Pro Santé Connect.


### Données disponibles dans l'API

- Les coordonnées du professionnel de santé qui souhaite se connecter (nom, prénom, numéro RPPS, adresse du cabinet, etc.)
- La liste des pays et des traits d’identité associés à chaque pays.
- La situation d’exercice du professionnel de santé.
- Les coordonnées des patients européens (nom, prénom, adresse, date de naissance, etc.).
- La synthèse médicale des patients européens en version traduite et originale (PDF et XML).
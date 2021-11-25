---
title: API statut demandeur d'emploi
tagline: Vérifiez si une personne a le statut de demandeur d'emploi.
is_open: -1 # -1 means API not open
access_page:
  - who:
      - Un particulier
      - Une entreprise
    is_eligible: -1
    description: |
      Vous n’êtes pas autorisé à accèder aux données de l’API.

      <Button href="/rechercher-api">Retourner à la page de recherche</Button>
  - who:
      - Une entité administrative
    is_eligible: 1
    description: |
      Conformément aux dispositions de <External href="https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000031366350&idArticle=LEGIARTI000031367412&dateTexte=&categorieLien=cid">l'article L114-8</External> du *code des relations entre le public et l'administration*, seules les administrations sont habilitées à échanger entre elles des informations ou données strictement nécessaires pour traiter une démarche.

      Pour obtenir l’accès à l’API, vous devez notamment **justifier d'une simplification pour les citoyens** et vous engager à n'accéder qu’aux données strictement nécessaires à la démarche conformément au principe de proportionnalité.

      <NextSteps />
      <IsFranceConnected fcLink="https://datapass.api.gouv.fr/api-statut-demandeur-emploi-fc" notFcLink="https://datapass.api.gouv.fr/api-statut-demandeur-emploi"/>
  - who:
      - Un éditeur de logiciel
    is_eligible: 0
    description: |
      Si vous êtes **éditeur de logiciels** et agissez pour le compte d'une administration ou d'une collectivité, vous pouvez remplir une demande d’accès à l’API vous-même pour l'entité que vous représentez, dans le cadre de <External href="https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000031366350&idArticle=LEGIARTI000031367412&dateTexte=&categorieLien=cid">l'article L114-8</External> du *code des relations entre le public et l'administration*.

      Lors de votre demande vous devrez **justifier** dans quelle mesure l'entité pour laquelle vous opérez rentre dans ce cadre juridique.

      <NextSteps is_editeur/>
      <IsFranceConnected fcLink="https://datapass.api.gouv.fr/api-statut-demandeur-emploi-fc" notFcLink="https://datapass.api.gouv.fr/api-statut-demandeur-emploi"/>
producer: pole-emploi
keywords:
  - emploi
  - chômage
  - démarche
  - justificatif
  - demandeur
  - emploi
  - chômeur
  - inscription
  - travail
rate_limiting_resume: 
rate_limiting_description: |
monitoring_link: 
monitoring_description: |
contact_link: https://pole-emploi.io/contact
doc_tech_external: https://pole-emploi.io/data/api/pole-emploi-connect/statut?tabgroup-api=documentation&doc-section=api-doc-section-caracteristiques
themes:
  - Particulier
  - Emploi
visits_2019: 4000
uptime: 
last_update: 25/11/2021
content_intro: |
  Cette API permet de déterminer si une personne a le statut de demandeur d'emploi ou non. 

  ### A quoi sert l’API statut demandeur d'emploi ?

  L'API permet aux administrations d'accéder à des informations **certifiées à la source** et ainsi :

  - de s’affranchir des pièces justificatives lors des démarches en ligne,
  - de réduire le nombre d’erreurs de saisie,
  - d'écarter le risque de fraude documentaire.

---

### Données accessibles dans l'API

| Donnée                    | Description                                                                            |
| ------------------------- | -------------------------------------------------------------------------------------- |
| codeStatutIndividu        | Code du statut de l'individu (0 = non demandeur d'emploi ; 1 = demandeur d'emploi)     |
| libelleStatutIndividu     | Libellé correspondant au statut de l'individu                                          |

Pour plus d’informations techniques sur la structuration des données, vous pouvez <External href='/https://pole-emploi.io/data/api/pole-emploi-connect/statut?tabgroup-api=documentation&doc-section=api-doc-section-caracteristiquesr'>consulter la documentation technique</External>

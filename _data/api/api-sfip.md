---
title: API Service Finances Publiques (SFiP)
tagline: Raccordez-vous directement au courtier SFiP pour récupérer les données nécessaires à vos téléservices. Ce nouveau service rassemblera pour vous les données strictement nécessaires issues de différentes API de la DGFiP, en excluant les données intermédiaires.
producer: dgfip
is_open: -1 # -1 means API not open
is_france_connected: 0 # undefined | 1 | 2. 2 means can be used with FC, 2 means has to be used with FC
access_page:
  - who:
      - Un particulier
      - Une entreprise
    is_eligible: -1
    description: |
      Vous n’êtes pas autorisé à accèder aux données du courtier fonctionnel SFiP.

      <Button href="/rechercher-api">Retourner à la page de recherche</Button>
  - who:
      - Une entité administrative
    is_eligible: 1
    description: |
      Conformément aux dispositions de <External href="https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000031366350&idArticle=LEGIARTI000031367412&dateTexte=&categorieLien=cid">l’article L114-8</External> du *code des relations entre le public et l’administration*, seules les administrations sont habilitées à échanger entre elles des informations ou données strictement nécessaires pour traiter une démarche.

      Pour obtenir l’accès à l’API, vous devez notamment **justifier d’une simplification pour les citoyens** et vous engager à n’accéder qu’aux données strictement nécessaires à la démarche conformément au principe de proportionnalité.

      <NextSteps />
      <QuestionTree tree='formulaire-unique' question='sfip' />
  - who:
      - Un éditeur de logiciel
    is_eligible: 0
    description: |
      Si vous êtes **éditeur de logiciels** et agissez pour le compte d’une administration ou d’une collectivité, vous pouvez remplir une demande d’habilitation au courtier fonctionnel SFiP vous-même pour l’entité que vous représentez, dans le cadre de [l’article L114-8](https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000031366350&idArticle=LEGIARTI000031367412&dateTexte=&categorieLien=cid) du *code des relations entre le public et l’administration*.

      Lors de votre demande vous devrez **justifier** dans quelle mesure l’entité pour laquelle vous opérez rentre dans ce cadre juridique.

      <NextSteps is_editeur/>
      <Button href="https://datapass.api.gouv.fr/api-sfip-sandbox">Remplir une demande</Button>
  - who:
      - Un établissement bancaire
    is_eligible: 0
    description: |
      Dans le cadre de la vérification de l’éligibilité au LEP, et conformément aux dispositions de l’article [L 166 AA du Livre de Procédures Fiscales](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042627574/2022-06-15), l’administration fiscale indique aux établissements bancaires, à leur demande, si les personnes demandant l’ouverture d’un compte remplissent les conditions d’ouverture et de détention. Le [décret N° 2021-277 du 12 mars 2021](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043246555) précise les modalités d’application de ce dispositif légal.

      Si vous entrez dans ce cadre, vous pouvez effectuer une demande d’habilitation à l’API Service Finances Publiques (SFiP).

      <NextSteps />
      <Button href="https://datapass.api.gouv.fr/api-sfip-sandbox?demarche=eligibilite_lep">Remplir une demande</Button>
datapass_link: https://datapass.api.gouv.fr/api-sfip-sandbox
keywords:
  - Impots
  - Revenu Fiscal de Référence
  - Adresse
  - Justificatif de domicile
rate_limiting_resume: illimité
rate_limiting_description: |
  Le volume d’utilisation du courtier SFiP n’est pas limité par défaut, mais fait l’objet d’une déclaration lors de votre demande d’accès. En cas d’utilisation abusive, la DGFiP se réserve le droit de restreindre et/ou couper votre accès à tout moment.
monitoring_description: |
  La DGFIP s’engage à ce que le service soit accessible à plus de 98,5% et à communiquer sur les coupures de service ponctuelles qui pourraient survenir.
themes:
  - Particulier
contact_link: dtnum.donnees.demande-acces@dgfip.finances.gouv.fr
visits_2019: 0
doc_tech_link: /swaggers/api-sfip.json
content_intro: |
  Le courtier SFiP est un service de la DGFiP simplifiant le recours aux différentes API de la DGFiP. Il permet aux partenaires : entité administrative (administration, ministère, organisme public, collectivité) ou entreprise ; de récupérer les données strictement nécessaires à la simplification des démarches des usagers et au processus de gestion des téléservices. 
  Pour ce faire, il enchaîne pour le compte du partenaire, les appels aux différentes API et restitue les données qu’il aura rassemblées en excluant les données intermédiaires.

  ### A quoi sert l’API Impôt particulier ?

  Pour l’acteur qui le met en place :

  - Réduction des coûts de traitements Back office
  - Transmission par la DGFiP de données fiables et fraîches
  - Simplification (un seul DataPass nécessaire pour se raccorder à plusieurs APIs)
  - Sécurisation juridique et administrative

last_update: 27/03/2023
---

### Les données disponibles dans l’API

L’API SFiP peut restituer sous réserve du respect des conditions juridiques requises, et sur demande des partenaires, toutes les données des API DGFiP existantes.
Ces données sont accessibles dans la documentation de chaque API.

Le tableau ci-dessous présente un exemple non exhaustif du type de données restituées :

| Nom de la donnée                                           | type           | Commentaire                                            |
| ---------------------------------------------------------- | -------------- | ------------------------------------------------------ |
| Nom d’usage                                                | Alphanumérique |                                                        |
| Prénom d’usage                                             | Alphanumérique |                                                        |
| Situation de famille                                       | Alphanumérique | Exemple : « M » pour marié                             |
| Situation d’invalidité au regard de l’impôt sur le revenu  | Numérique      | 1 si Case « 7DG » cochée dans la déclaration de revenu |
| Éligibilité à la détention d’un livret d’épargne populaire | Alphanumérique | O pour Oui ou N pour Non                               |

Un document, présent dans le formulaire de demande d’accès liste un plus large panel de données pouvant être restituées par le courtier.

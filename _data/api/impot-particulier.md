---
title: API Impôt particulier
tagline: Raccordez-vous directement à la DGFiP pour récupérer les éléments fiscaux nécessaires à vos téléservices, éliminez le traitement et le stockage des pièces justificatives
producer: dgfip
is_open: -1 # -1 means API not open
is_france_connected: 1 # undefined | 1 | 2. 2 means can be used with FC, 2 means has to be used with FC
access_page:
  - who:
      - Un particulier
      - Une entreprise
    is_eligible: -1
    description: |
      Vous n’êtes pas autorisé à accèder aux données de l’API Impôt particulier.

      <Button href="/rechercher-api">Retourner à la page de recherche</Button>
  - who:
      - Une entité administrative
    is_eligible: 1
    description: |
      Conformément aux dispositions de <External href="https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000031366350&idArticle=LEGIARTI000031367412&dateTexte=&categorieLien=cid">l'article L114-8</External> du *code des relations entre le public et l'administration*, seules les administrations sont habilitées à échanger entre elles des informations ou données strictement nécessaires pour traiter une démarche.

      Pour obtenir l’accès à l’API, vous devez notamment **justifier d'une simplification pour les citoyens** et vous engager à n'accéder qu’aux données strictement nécessaires à la démarche conformément au principe de proportionnalité.

      <NextSteps />
      <QuestionTree tree='france-connected-api' question='dgfip' />
  - who:
      - Un éditeur de logiciel
    is_eligible: 0
    description: |
      Si vous êtes **éditeur de logiciels** et agissez pour le compte d'une administration ou d'une collectivité, vous pouvez remplir une demande d’habilitation à l’API particulier vous-même pour l'entité que vous représentez, dans le cadre de <External href="https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000031366350&idArticle=LEGIARTI000031367412&dateTexte=&categorieLien=cid">l'article L114-8</External> du *code des relations entre le public et l'administration*.

      Lors de votre demande vous devrez **justifier** dans quelle mesure l'entité pour laquelle vous opérez rentre dans ce cadre juridique.

      <NextSteps is_editeur/>
      <QuestionTree tree='france-connected-api' question='dgfip' />
  - who:
      - Un établissement bancaire
    is_eligible: 0
    description: |
      Dans le cadre de la vérification de l'éligibilité au LEP, et conformément aux dispositions de l'article [L 166 AA du Livre de Procédures Fiscales](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042627574/2022-06-15), l'administration fiscale indique aux établissements bancaires, à leur demande, si les personnes demandant l'ouverture d'un compte remplissent les conditions d'ouverture et de détention. Le [décret N° 2021-277 du 12 mars 2021](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043246555) précise les modalités d'application de ce dispositif légal.

      Si vous entrez dans ce cadre, vous pouvez effectuer une demande d'habilitation à l’API Impôt particulier.

      **NB :** En remplissant cette demande, vous allez obtenir l’accès à l'API Impôt Particulier. Afin d'accéder aux données il est également nécessaire d’avoir accès à <External href="/les-api/api_r2p/demande-acces"> l'API R2P</External> afin d'obtenir l'identifiant fiscal (SPI).

      <NextSteps />
      <Button href='https://datapass.api.gouv.fr/api-impot-particulier-sandbox?demarche=eligibilite_lep'>Remplir une demande</Button>
datapass_link: https://datapass.api.gouv.fr/api-impot-particulier-sandbox
keywords:
  - Impots
  - Revenu Fiscal de Référence
  - Adresse
  - Justificatif de domicile
rate_limiting_resume: illimité
rate_limiting_description: |
  Votre volume d'utilisation de l'API Impôt Particulier n'est pas limité par défaut mais fait l'objet d'une déclaration lors de votre demande d'habilitation. En cas d'utilisation abusive, la DGFiP se réserve le droit de restreindre et/ou couper votre accès à tout moment.
monitoring_description: |
  La DGFIP s’engage à ce que le service soit accessible à plus de 98,5% et à communiquer sur les coupures de service ponctuelles qui pourraient survenir.
themes:
  - Particulier
contact_link: dtnum.donnees.demande-acces@dgfip.finances.gouv.fr
visits_2019: 9856
doc_tech_link: /swaggers/api-impot-particulier.json
content_intro: |
  L'API Impôt particulier simplifie les démarches des usagers et le processus de gestion de vos téléservices. Elle permet l’échange d’informations fiscales entre la DGFiP et une entité administrative (administration, ministère, organisme public, collectivité) ou une entreprise dans le cadre de leurs obligations légales et réglementaires pour des missions d’intérêts général.

  ### A quoi sert l’API Impôt particulier ?

  Pour l'usager : l'API Impôt particulier dématérialise les démarches à 100% :

  1. Je me connecte ou je me "FranceConnect" sur un site pour réaliser une démarche administrative.
  2. Si je me suis FranceConnecté, je suis informé de la liste des données qui seront transmises.
  3. Si je ne me suis pas FranceConnecté, je communique mon identifiant fiscal (SPI) ou mon état civil complet.
  4. Le fournisseur de service récupère immédiatement mes informations.
  5. Je n’ai rien d’autre à faire, ma démarche est terminée !

  Pour l’acteur qui la met en place :

  - Réduction des coûts de traitement back-office : pas besoin de pièces justificatives complémentaires
  - Fin du risque de fraude documentaire et des erreurs de saisie : transmission immédiate par la DGFiP de données fiables et fraîches
last_update: 08/10/2019
---

### Les données disponibles dans l'API

L’API Impôt particulier peut restituer différentes données fiscales issues de la déclaration annuelle de revenus soumise à taxation.
Le tableau ci-dessous présente les principales données de l’API Impôt particulier qui permettent de simplifier l’instruction des demandes.

| Nom de la donnée                 | type         | Commentaire                                         |
| -------------------------------- | ------------ | --------------------------------------------------- |
| Revenu fiscal de référence (RFR) | nombre       |                                                     |
| Nombre de parts fiscales         | nombre       |                                                     |
| Adresse fiscale de taxation      | données JSON |                                                     |
| Données du local                 | données JSON | Exemples : régime de taxation, identifiant du local |

Un document, présent dans le formulaire de la demande d’habilitation, liste un plus large panel des données
pouvant être restituées par l’API Impôt particulier.

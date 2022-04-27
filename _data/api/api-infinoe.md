---
title: API Information Financière des Organismes de l’État (Infinoé) 
tagline: Transférez les écritures et référentiels budgétaires et comptables et les budgets exécutoires des organismes publics nationaux pour alimenter l’application Infinoé de la  DGFiP
producer: dgfip
is_open: -1 # -1 means API not open
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
      Dans le cadre de la vérification de l’éligibilité au <External href="https://www.service-public.fr/particuliers/vosdroits/F2367">LEP</External> les banques peuvent être considérées comme une administration au sens de <External href="https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000031366350&idArticle=LEGIARTI000031367308&dateTexte=&categorieLien=cid">l'article L100-3</External> du *code des relations entre le public et l'administration*.

      Si vous entrez dans ce cadre, vous pouvez effectuer une demande d'habilitation à l’API Impôt particulier.

      **NB :** En remplissant cette demande, vous allez obtenir l’accès à l'API Impôt Particulier. Afin d'accéder aux données il est également nécessaire d’avoir accès à <External href="/les-api/api_r2p/demande-acces"> l'API R2P</External> afin d'obtenir l'identifiant fiscal (SPI).

      <NextSteps />
      <Button href='https://datapass.api.gouv.fr/api-impot-particulier-sandbox?demarche=eligibilite_lep'>Remplir une demande</Button>
datapass_link: https://datapass.api.gouv.fr/api-impot-particulier-sandbox
keywords:
  - Comptes
  - Finance
  - Financier
  - Ecriture
  - Budget
  - Comptabilité
  - OCTP
  - Nomenclature
themes:
  - Administration
contact_link: dtnum.donnees.demande-acces@dgfip.finances.gouv.fr
visits_2019: 2000
doc_tech_link: /swaggers/api-impot-particulier.json
content_intro: |
  L'API INFINOE permet à chaque organisme public national de transmettre ses écritures budgétaires, comptables et financières, ses budgets prévisionnels (budget initial et rectificatifs) et ses référentiels budgétaires et comptables à l’application Infinoé de la Direction générale des finances publiques.
last_update: 27/04/2022
---
### À quoi sert l'API Infinoé ?

L'API Infinoé permet de simplifier, rationaliser et fiabiliser la production des documents budgétaires et comptables relatifs aux organismes d’Etat soumis à la comptabilité publique grâce à la collecte des données budgétaires et comptables transmises par les systèmes d'information des OPN en temps réel.

### Quelles sont les données nécessaires ?

L’API Infinoé permet le transfert de données en exécution, en prévision et de données référentielles.

**Nature des données liées à l’exécution transmises via l’API (deux flux) :**

- écritures budgétaires (flux budgétaire)
- écritures comptabilité générale (flux journal)

**Nature des données liées à la prévision transmises via l’API :**

- Neuf tableaux prévisionnels : ABP, DESP, EFP, OCTP, SPP, PTP, RFP, OPP, TSBCP

**Nature des référentiels transmis via l’API :**

- Sept nomenclatures dénommées : nomenc, tiers, nature, destination, origine, pluriannuel

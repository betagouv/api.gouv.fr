---
title: API Impôt particulier
logo: logo-dgfip.jpg
tagline: Raccordez-vous directement à la DGFiP pour récupérer les éléments fiscaux nécessaires à vos téléservices, éliminez le traitement et le stockage des pièces justificatives
owner: Direction Générale des Finances Publiques
owner_acronym: DGFIP
is_open: false
access_link: /les-api/impot-particulier/demande-acces
access_description: |
  Cette API nécessite une habilitation :
access_page:
  - who:
      - Un particulier
    is_eligible: -1
    description: |
      Vous n’êtes pas autorisé à accèder aux données de l’API Impôt Particulier.

      <Button href="/rechercher-api">Retourner à la page de recherche</Button>
  - who:
      - Une collectivité
      - Une administration
      - Un ministère
    is_eligible: 1
    description: |
      Conformément aux dispositions de <External href="https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000031366350&idArticle=LEGIARTI000031367412&dateTexte=&categorieLien=cid">l'article L114-8</External> du *code des relations entre le public et l'administration*, seules les administrations sont habilitées à échanger entre elles des informations ou données strictement nécessaires pour traiter une démarche.

      Pour obtenir un agrément, vous devez **justifier d'une simplification pour les citoyens**, et vous engager à n'accéder aux données personnelles qu'avec **l'accord explicite** de l'usager.

      <NextSteps />
      <IsFranceConnected fcLink="https://signup.api.gouv.fr/api-impot-particulier" notFcLink="https://signup.api.gouv.fr/api-impot-particulier"/>
  - who:
      - Un éditeur de logiciel
    is_eligible: 0
    description: |
      Si vous êtes **éditeur de logiciels** et agissez pour le compte d'une administration ou d'une collectivité, vous pouvez remplir une demande d’accès à l’API Particulier vous-même pour l'entité que vous représentez, dans le cadre de <External href="https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000031366350&idArticle=LEGIARTI000031367412&dateTexte=&categorieLien=cid">l'article L114-8</External> du *code des relations entre le public et l'administration*.

      Lors de votre demande vous devrez **justifier** dans quelle mesure l'entité pour laquelle vous opérez rentre dans ce cadre juridique.

      <NextSteps is_editeur/>
      <IsFranceConnected fcLink="https://signup.api.gouv.fr/api-impot-particulier" notFcLink="https://signup.api.gouv.fr/api-impot-particulier"/>
  - who:
      - Une entreprise
    is_eligible: 0
    description: |
      Seules les entreprises considérées comme une administration au sens de <External href="https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000031366350&idArticle=LEGIARTI000031367308&dateTexte=&categorieLien=cid">l'article L100-3</External> du *code des relations entre le public et l'administration*.

      Lors de votre demande vous devrez **justifier** dans quelle mesure l'entité pour laquelle vous opérez rentre dans ce cadre juridique. Si vous ne rentrez pas dans ces critères, **votre demande ne pourra pas être acceptée**.

      <NextSteps />
      <Button href='https://signup.api.gouv.fr/api-impot-particulier'>Remplir une demande</Button>
keywords:
  - Impots
  - Revenu Fiscal de Référence
  - Adresse
  - Justificatif de domicile
  - Signup
rate_limiting_resume: illimité
rate_limiting_description: |
  <p>Votre volume d'utilisation de l'API Impôt Particulier n'est pas limité par défaut mais fait l'objet d'une déclaration lors de votre demande d'accès. En cas d'utilisation abusive, la DGFiP se réserve le droit de restreindre et/ou couper votre accès à tout moment.</p>
monitoring_description: |
  <p>La DGFIP s’engage à ce que le service soit accessible à plus de 98,5% et à communiquer sur les coupures de service ponctuelles qui pourraient survenir.</p>
themes:
  - Particulier
contact_link: impot.particulier@api.gouv.fr
doc_tech_link: https://particulier.api.gouv.fr/swagger_api_impots_particulier.yaml
visits_2019: 1324
last_update: 08/10/2019
---

L'API Impôt particulier simplifie les démarches des usagers et le processus de gestion de vos téléservices. Elle permet en effet l’échange d’informations fiscales entre la DGFiP et une administration ou collectivité dans le cadre d'un téléservice FranceConnecté.

Pourquoi une administration devrait utiliser l'API Impôt particulier ?

- Un usager parfaitement identifié grâce à FranceConnect
- Réduction des coûts de traitement back-office : pas besoin de pièces justificatives complémentaires
- Fin du risque de fraude documentaire et des erreurs de saisie : transmission immédiate par la DGFiP de données fiables et fraîches

Pour l’usager, une démarche 100% dématérialisée :

1. Je me "franceconnecte" sur le site de ma commune pour réaliser une démarche.
2. En lieu du justificatif de revenu papier, je consens lors de ma demande de prestation à la transmission par la DGFiP des seules données fiscales nécessaires au traitement de ma demande (revenu fiscal de référence par exemple).
3. Ma commune récupère immédiatement ces informations. Je n’ai rien d'autre à faire pour déterminer mon droit à prestations.

### Catalogue des données de l'API Impôt Particulier

- Revenu fiscal de référence
- Nombre de parts fiscales
- Adresse principale du contribuable
- Données du local

---
title: API Impôt particulier
logo: logo-dgfip.jpg
tagline: Raccordez-vous directement à la DGFiP pour récupérer les éléments fiscaux nécessaires à vos téléservices, éliminez le traitement et le stockage des pièces justificatives
owner: Direction Générale des Finances Publiques (DGFiP)
contract: OUVERT sous contrat
clients:
  - collectivités
  - ministères
keywords:
  - Impots
  - Revenu Fiscal de Référence
  - Adresse
  - Justificatif de domicile
  - Signup
score:
  detail:
    monitoring:
      description: |
        <p>La DGFIP s’engage à ce que le service soit accessible à plus de 98,5% et à communiquer sur les coupures de service ponctuelles qui pourraient survenir.</p>
    rate_limiting:
      description: |
        <p>Votre volume d'utilisation de l'API Impôt Particulier n'est pas limité par défaut mais fait l'objet d'une déclaration lors de votre demande d'accès. En cas d'utilisation abusive, la DGFiP se réserve le droit de restreindre et/ou couper votre accès à tout moment.</p>
    contact:
      link: impot.particulier@api.gouv.fr
    access:
      description: |
        <p>L'API Impôt Particulier est utilisable par toute collectivité ou ministère :</p>
        <ul>
          <li>ayant déjà préalablement implémenté FranceConnect ;</li>
          <li>justifiant d'un fondement légal permettant le recueil d'informations fiscales rattachées à une démarche administrative.</li>
        </ul>
        <p>Les demandes d'accès à l'API Impôt Particulier utilisent signup.api.gouv.fr, un outil mis à disposition pour toutes les API catalogués sur api.gouv.fr.</p>
        <p>Lors de la contractualisation pour accéder à l'API, une convention précise les engagements de chacune des parties et décrit les échanges de données réalisés.</p>
      link: https://signup.api.gouv.fr/api-impot-particulier
    doc_tech:
      link: https://particulier.api.gouv.fr/swagger_api_impots_particulier.yaml
---

## Récupérez les informations fiscales nécessaires à votre téléservice directement auprès de la DGFiP

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

---
title: Simplifiez les souscriptions au livret d'épargne populaire (LEP) grâce aux API
tagline: Vous êtes un établissement bancaire et souhaitez simplifier la souscription au LEP ? Utilisez l'API Impôt particulier pour ne plus demander et vérifier de justificatifs.
tags: cas usage, impôts, RFR, banque, lep, epargne, livret, revenu, fiscal, tarification, revenu, quotient
image: lep.png
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
api:
  - API Impôt particulier
---

Le livret d'épargne populaire (LEP) est un placement garanti et défiscalisé, avec un taux d'intérêt qui est le double de celui du livret A. Pour en bénéficier, il faut être en dessous d'un plafond de revenus.

<External href="https://www.service-public.fr/particuliers/vosdroits/F2367">🔍 En savoir plus sur le livret d'épargne populaire</External>

## Utiliser une API pour simplifier la souscription au LEP

Pour ouvrir un livret d'épargne populaire, les établissements bancaires sont tenus de vérifier l'éligibilité de leurs clients : leurs revenus ne doivent pas dépasser un certain seuil. Plutôt que de demander un avis d'imposition, il est possible d'instruire un dossier directement à partir des données issues de l'administration.

Ces données sont distribuées [via l'API Impôt Particulier](/les-api/impot-particulier), de la Direction Générale des Finances Publiques.

### Avantage pour les clients

👉 La souscription est **plus rapide** : pas d'envoi de pièces justificatives

### Avantages pour l'établissement bancaires

☑️ Les informations sont **certifiées** par la Direction Générale des Finances Publiques ;

⏱ C'est plus **rapide**, car il n'y a pas de documents à vérifier ;

📕 C'est **conforme au RGPD**, car les données collectées sont réduites au strict nécessaire ;

🔖 **Il n'y a plus de validation de document à la main à effectuer** ni d'archivage de documents papier ;

🖥 La circulation de données directement entre les systèmes d'information permet **d'éviter les saisies manuelles, les erreurs ou fautes de frappes ;**

🔐 **C'est aussi plus sécurisé**, car les données ne sont pas stockées par l'établissement.

## Quel est le cadre juridique pour les établissements bancaires ?

Dans le cadre de la vérification de l’éligibilité au LEP, les banques peuvent être considérées comme une administration au sens de <External href="https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000031366350&idArticle=LEGIARTI000031367308&dateTexte=&categorieLien=cid">l'article L100-3</External> du *code des relations entre le public et l'administration*.

Si vous entrez dans ce cadre, vous pouvez effectuer une demande d'habilitation à l’API Impôt particulier.

## Comment accéder à l'API Impôt Particulier ?

Pour accéder à l'API, il est nécessaire de demander une habilitation.

<NextSteps />
<Button href='https://datapass.api.gouv.fr/api-impot-particulier-sandbox?demarche=eligibilite_lep'>Remplir une demande</Button>

## En savoir plus sur les données renvoyées par l'API

🔍 Accédez à la [fiche descriptive de l'API Impôt Particulier](/les-api/impot-particulier#les-donnees-disponibles-dans-l'api)

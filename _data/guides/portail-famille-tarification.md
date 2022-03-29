---
title: Tarification de la restauration scolaire et des activités périscolaires et municipales
tagline: Simplifiez le calcul des tarifs de la restauration scolaire, ou des activités périscolaires ou municipales dans votre colllectivité
tags: cas usage, api particulier, portail-famille, tarification restauration scolaire, tarification activités périscolaires
image: cantine.jpg
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
related_guides:
api:
  - API Particulier
---

Chaque année, les collectivités doivent calculer les tarifs de la restauration scolaire et des activités périscolaires, applicables à chaque famille en fonction de sa situation.

En général, le calcul des tarifs utilise le quotient familial de la Caisse d’Allocations Familiales (CAF) ou l'avis d'imposition (DGFIP) fournis par les citoyens.

Avec la brique API Particulier, vous avez la possibilité de récupérer automatiquement des données certifiées à la source, permettant ainsi de réduire les risques d'erreurs ainsi que les fraudes aux déclarations. Cela vous permet par ailleurs de faire gagner un temps précieux aux agents en évitant des validations manuelles de pièces jointes et donc de faciliter le traitement des dossiers par vos équipes en accédant **automatiquement aux données nécessaires** au calcul du tarif appliqué.

En intégrant la brique API Particulier dans votre système d'information ou votre site internet :

- Vous accédez facilement aux données de la CAF et de la DGFIP
- Vous n'avez **plus besoin de demander** d'avis fiscal ou de quotient familial aux parents
- Vous n'avez **pas de vérification supplémentaire** car les informations sont **certifiées**
- La démarche peut être faite 100% en ligne

## Quelles données utilisez-vous ?

API Particulier met à disposition les données de la CAF (composition familiale du foyer du demandeur) et les données de la DGFIP (pour vérifier les conditions d'éligibilité d'une demande). Voici la liste non exhaustive des données accessibles :

| Donnée            | Commentaire                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------ |
| Adresse           | L'adresse fiscale du foyer et/ou du demandeur                                                    |
| Quotient Familial | Le quotient familial calculé par la CAF                                                          |
| Avis d'imposition | Le statut d’imposition, montant de l'impôt, revenu fiscal de référence, nombre de parts fiscales |

**Quelle est la différence entre le Quotient Familial (QF) de la CAF et le Quotient Familial de la DGFIP**

Le Quotient  Familial CAF est revu à chaque changement de situation familiale et/ou professionelle. Il prend en compte 1/12e du revenue imposable de l’année N-2 + les Prestations familiales du mois de référence divisés par le nombre de parts fiscales du foyer.

Le Quotient Familiale « DGFIP » est calculé au moment de la déclaration de revenus. Il divise le revenue imposable de l’année N-1 par le nombre de part fiscale du foyer.

## Comment accèder à la donnée ?

L'utilisation des données est encadrée légalement. Vous devez formuler une demande auprès de nos services et la motiver.

Les articles suivants peuvent vous aider à justifier vos droits d'accès aux données :

- Article <External href="https://www.legifrance.gouv.fr/affichCode.do;jsessionid=BADF41D6CFF34AAC5E88C9B3ADF9280C.tplgfr29s_1?idSectionTA=LEGISCTA000006182383&cidTexte=LEGITEXT000006071191&dateTexte=20190528">L.213</External> du _Code de l'éducation_
- Article <External href=https://www.legifrance.gouv.fr/affichCode.do?idSectionTA=LEGISCTA000020743087&cidTexte=LEGITEXT000006071191>R531-52</External> du _Code de l'éducation_
- Article L114-8 : <External href="https://www.vie-publique.fr/eclairage/19591-protection-des-donnees-personnelles-essentiel-loi-cnil-du-20-juin-2018">La loi relative à la protection des données personnelles</External> \_ a été promulguée le 20 juin 2018. Elle adapte la loi "Informatique et libertés" du 6 janvier 1978 au "paquet européen de protection des données".
- Certaines délibérations prises par la ville et/ou par la commune peuvent constituer le cadre légal

<NextSteps />
<Button href="https://datapass.api.gouv.fr/api-particulier?demarche=tarif-restauration-scolaire">Remplir une demande</Button>

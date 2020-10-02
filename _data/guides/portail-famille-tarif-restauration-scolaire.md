---
title: Tarification de la restauration scolaire
tagline: Simplifiez le calcul des tarifs de la restauration scolaire dans votre colllectivité
tags: cas usage, api particulier, portail-famille, tarification restauration scolaire
image: cantine.jpg
related_guides:
  - portail-famille-petite-enfance
  - portail-famille-pass-famille
  - portail-famille-tarif-activite-periscolaire
api:
  - API Particulier
---

Chaque année, les collectivités doivent calculer les tarifs de la restauration scolaire et [des activités périscolaires](/guides/portail-famille-tarif-activite-periscolaire).

En général, le calcul des tarifs utilise le quotient familial de la Caisse d’Allocations Familiales (CAF) ou l'avis d'imposition fournis par les citoyens.

Avec la brique API Particulier vous avez la possibilité de réduire les risques d'erreurs ainsi que les tentatives de fraude. L'API Particulier permet également de faciliter le traitement des dossiers par vos équipes en accèdant **facilement aux données nécessaires** au calcul du tarif applicable.

En intégrant la brique API Particulier dans votre système d'information ou votre site internet :

- Vous accédez facilement aux données de la CAF et de la DGFIP
- Vous n'avez **plus besoin de demander** d'avis fiscal ou de quotient familial aux parents
- Vous n'avez **pas de vérification supplémentaire** car les informations sont **certifiées**
- La démarche peut être faite 100% en ligne

## Quelles données utilisez-vous ?

API Particulier met à disposition les données de la CAF (composition familiale du foyer du demandeur) et les données de la DGFIP (pour vérifier les conditions d'éligibilité d'une demande), voici la liste non exhaustive des données accessibles :

| Donnée            | Commentaire                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------ |
| Quotient Familial | Le quotient familial calculé par la CAF                                                          |
| Avis d'imposition | Le statut d’imposition, montant de l'impôt, revenu fiscal de référence, nombre de parts fiscales |

## Comment accèder à la donnée ?

L'utilisation des données est encadrée légalement. Vous devez formuler une demande auprès de nos services et la motiver.

Les articles suivants peuvent vous aider à justifier vos droits d'accès aux données :

- Article <External href="https://www.legifrance.gouv.fr/affichCode.do;jsessionid=BADF41D6CFF34AAC5E88C9B3ADF9280C.tplgfr29s_1?idSectionTA=LEGISCTA000006182383&cidTexte=LEGITEXT000006071191&dateTexte=20190528">L.213</External> du _Code de l'éducation_
- Article <External href=https://www.legifrance.gouv.fr/affichCode.do?idSectionTA=LEGISCTA000020743087&cidTexte=LEGITEXT000006071191>R531-52</External> du _Code de l'éducation_

<NextSteps />
<Button href="https://datapass.api.gouv.fr/api-particulier?scopes=%7B%22dgfip_avis_imposition%22%3Atrue%2C%22dgfip_adresse%22%3Afalse%2C%22cnaf_quotient_familial%22%3Atrue%2C%22cnaf_allocataires%22%3Afalse%2C%22cnaf_enfants%22%3Afalse%2C%22cnaf_adresse%22%3Afalse%7D#description">Remplir une demande</Button>

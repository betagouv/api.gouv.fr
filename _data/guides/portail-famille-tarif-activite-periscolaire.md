---
title: Tarification des activités périscolaires et municipales
tagline: Simplifiez l'adhésion aux activités municipales et périscolaires dans votre collectivité
tags: cas usage, api particulier, portail-famille, tarification activités prériscolaire, activités municipales
image: ecole.jpeg
related_guides:
  - portail-famille-petite-enfance
  - portail-famille-pass-famille
  - portail-famille-tarif-restauration-scolaire
api:
  - API Particulier
---

Chaque année, les collectivités doivent calculer les tarifs des activités périscolaires et de la [restauration scolaire](/guides/portail-famille-tarif-restauration-scolaire).

En général, le calcul des tarifs utilise l'adresse, le quotient familial de la Caisse d’Allocations Familiales (CAF) et l'avis d'imposition fournis par les citoyens.

Avec la brique API Particulier vous avez la possibilité de diminuer les erreurs et les fraudes et faciliter le traitement des dossiers par vos équipes en accèdant **facilement aux données nécessaires** au calcul.

En intégrant la brique API Particulier dans votre système d'information, ou votre site internet :

- Vous accèdez facilement aux données de la CAF et de la DGFIP.
- Vous n'avez **plus besoin de demander** d'avis fiscal ou de quotient familial aux parents
- Vous n'avez **pas de vérifications supplémentaires** car les informations sont **certifiées**
- La démarche peut-être faite 100% en ligne

## Quelles données utilisez-vous ?

API Particulier met à disposition les données de la CAF (composition familiale du foyer du demandeur) et les données de la DGFIP (pour vérifier les conditions d'éligibilité d'une demande), voici la liste non exhaustive des données accessibles :

| Donnée            | Commentaire                                                                                   |
| ----------------- | --------------------------------------------------------------------------------------------- |
| Adresse           | L'adresse du foyer et/ou l'adresse fiscale du demandeur                                       |
| Quotient Familial | Le quotient familial calculé par la CAF                                                       |
| Avis d'imposition | statut d’imposition, montant de l'impôt, revenu fiscal de référence, nombre de parts fiscales |

## Comment accèder à la donnée ?

L'utilisation des données dans le cadre de la tarification de la restauration scolaire est encadrée légalement. Vous devez formuler une demande auprès de nos services et la motiver.

Les articles suivants peuvent vous aider a justifier vos droits d'accès :

- Article L114-8<External href="https://www.vie-publique.fr/eclairage/19591-protection-des-donnees-personnelles-essentiel-loi-cnil-du-20-juin-20189">La loi relative à la protection des données personnelles</External> _ a été promulguée le 20 juin 2018. Elle adapte la loi "Informatique et libertés" du 6 janvier 1978 au "paquet européen de protection des données"._
- Certaines délibérations prises par la ville et/ou par la commune peuvent constituer le cadre légal

**Pour remplir votre demande, vous aurez besoin de :**

- votre numéro SIRET
- cadre juridique associé à votre demande
- la description du service justifiant une simplication pour les citoyens
- coordonnées de l'équipe technique
- coordonnées de votre délégué à la protection des données et du responsable de traitement

<Button href="https://datapass.api.gouv.fr/api-particulier?scopes=%7B%22dgfip_avis_imposition%22%3Atrue%2C%22dgfip_adresse%22%3Atrue%2C%22cnaf_quotient_familial%22%3Atrue%2C%22cnaf_allocataires%22%3Afalse%2C%22cnaf_enfants%22%3Afalse%2C%22cnaf_adresse%22%3Afalse%7D">Remplir une demande</Button>

<!--
## Ils l'ont fait

Témoignage : [COMMUNE DE SCHILTIGHEIM](https://signup.api.gouv.fr/api-particulier/460#description)
[COMMUNAUTE COMMUNES DU PAYS DE LUXEUIL](https://datapass.api.gouv.fr/api-particulier/2082#donnees)
[COMMUNE DE LINGOLSHEIM](https://datapass.api.gouv.fr/api-particulier/1881#donnees)
[COMMUNE DE GARCHES](https://datapass.api.gouv.fr/api-particulier/854#donnees) -->

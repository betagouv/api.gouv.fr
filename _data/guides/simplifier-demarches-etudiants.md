---
title: Simplifier les démarches des étudiants
tagline: Utilisez les API dans vos services en ligne pour simplifier les démarches des étudiants 
tags: cas usage, adresse, geo, postal, commune
image: etudiants.png
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
api:
  - FranceConnect et les API FranceConnectées
  - API Statut Etudiant
  - API Statut étudiant boursier
  - API contrôle CVEC (contribution de vie étudiante)
---

## Quelles démarches des étudiants peuvent être simplifiées par des API ?

### Tarification dans les transports en commun

Les collectivités et les autorités organisatrices de mobilités (AOM) mettent en œuvre des tarifications sociales et solidaires. Le statut d'étudiant permet d'obtenir des abonnements à prix réduits. D'autres données peuvent être prises en compte pour la tarification sociale et solidaire : **l'API Particulier permet d'y accéder.**

🔎 [En savoir plus sur la tarification sociale et solidaire des transports en commun](/guides/delivrance-titres-transport)

<Button href="/les-api/api-particulier">Accéder à l'API Particulier</Button>

### Tarification des activités culturelles et sportives par les collectivités territoriales

Votre administration propose des réductions aux étudiants et aux boursiers ? Qu'il s'agisse d'activités de loisir, culturelles ou sportives, vous êtes éligibles pour accéder aux données du statut étudiant ou du statut étudiant boursier. **L'accès à ces données via une API permet de ne plus leur demander de justificatif, et par conséquent d'accélérer le traitement des dossiers.**

Deux modes d'accès sont possibles :

<details>
<summary>**Vous êtes partenaires de France Connect**</summary>

Si votre site propose un bouton de connexion France Connect, vous pouvez accéder aux API en mode FranceConnecté.

👉 [En savoir plus sur l'API Statut étudiant](https://api.gouv.fr/les-api/api-statut-etudiant)

👉 [En savoir plus sur l'API Statut étudiant boursier](/les-api/api-statut-etudiant-boursier)

</details>

<br>

<details>
<summary>**Vous ne comptez pas utiliser France Connect**</summary>

Dans ce cas, vous pouvez intégrer l'API Particulier, qui vous permet d'utiliser les données (statut étudiant et statut étudiant boursier).

👉 [Accéder à l'API Particulier](/les-api/api-particulier)

</details>

### Cottisation à la CVEC (Contribution de vie étudiante et de campus)

Chaque étudiant en formation initiale dans un établissement supérieur doit obligatoirement obtenir, préalablement à son inscription, son attestation d’acquittement de la contribution de vie étudiante et de campus (CVEC), par paiement ou exonération.

L'API CVEC est en accès libre pour tous les établissements de l'enseignement supérieur. Elle permet d'éviter de demander une attestation aux étudiants (et donc de devoir la vérifier).

<Button href="/les-api/api-cvec">Accéder à l'API CVEC</Button>

## Quels sont les avantages des API pour les étudiants et l'administration ?

**Avantages pour les étudiants :**

- simplifier leurs démarches en ligne grâce à la suppression des pièces justificatives (remplacées par des données),
- accélérer le traitement de leurs dossiers.

**Avantages pour les administrations :**

- automatiser l'instruction des demandes,
- disposer d'informations certifiées à la source,
- consulter et mettre à jour des données en back-office.

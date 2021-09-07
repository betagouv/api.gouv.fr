---
title: Délivrance de titres de transport
tagline: Vous êtes une collectivité, un opérateur ou un éditeur de logiciel ? Appliquez facilement un tarif de vos titres de transport adapté à la situation de vos usagers, en utilisant les données de l'API Particulier.
tags: cas usage, api particulier, transport
image: transport.jpg
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
api:
  - API Particulier
---

Chaque année, les collectivités disposant de la compétence transport et leurs opérateurs doivent délivrer des titres de transport aux usagers, à un tarif adapté à leur situation.

En général, le calcul de ces tarifs prend en compte :

- le niveau de ressources de la personne, souvent évalué à travers le revenu fiscal de référence ou le quotient familial
- si la personne est demandeur d’emploi
- si la personne est étudiante
- si la personne est allocataire du RSA (API à venir)

Avec la brique API Particulier vous avez la possibilité de récupérer automatiquement des informations certifiées sur le demandeur.

Cette récupération automatique permet de récupérer une donnée certifiée, limitant les risques d'erreurs ainsi que les fraudes aux déclarations. Cela vous permet par ailleurs de faire gagner un temps précieux aux agents en évitant des validations manuelles de pièces jointes et donc de faciliter le traitement des dossiers par vos équipes en **accédant automatiquement aux données nécessaires** au calcul du tarif appliqué.

En intégrant la brique API Particulier dans votre système d'information ou votre site internet :

- Vous accédez facilement aux données de la CAF, de la DGFIP, de Pôle emploi et du Ministère de l’Enseignement Supérieur ;
- Vous n'avez **plus besoin de demander** de justificatifs : avis fiscal, quotient familial, carte étudiant ou attestation Pôle emploi ;
- Vous n'avez **pas de vérification supplémentaire** car les informations sont **certifiées** ;
- La démarche peut être faite **100% en ligne**.

## Quelles données utilisez-vous ?

API Particulier met à disposition des données de la CAF (composition familiale du foyer du demandeur), DGFIP (avis d’imposition), de Pôle emploi (statut demandeur d’emploi), du Ministère de l’Enseignement Supérieur (statut étudiant), dont voici une liste non exhaustive :

| Donnée                    | Commentaire                                                                                   |
| ------------------------- | --------------------------------------------------------------------------------------------- |
| Adresse                   | L'adresse du foyer (CAF) et/ou l'adresse fiscale (DGFiP) de l'usager                          |
| Quotient Familial         | Le quotient familial calculé par la CAF                                                       |
| Avis d'imposition         | Statut d’imposition, montant de l'impôt, revenu fiscal de référence, nombre de parts fiscales |
| Composition familiale     | La composition du foyer est donnée par la CAF                                                 |
| Statut étudiant           | Indique que l’usager est inscrit dans l’enseignement supérieur                                |
| Statut demandeur d'emploi | Indique que l'usager est demandeur d'emploi                                                   |

## Comment accéder à la donnée

L'utilisation des données est encadrée légalement. Vous devez formuler une demande auprès de nos services et la motiver.

Les articles suivants peuvent vous aider à justifier vos droits d'accès aux données :

- Article L114-8 : <External href="https://www.vie-publique.fr/eclairage/19591-protection-des-donnees-personnelles-essentiel-loi-cnil-du-20-juin-2018">La loi relative à la protection des données personnelles</External> a été promulguée le 20 juin 2018. Elle adapte la loi "Informatique et libertés" du 6 janvier 1978 au "paquet européen de protection des données".

Pour remplir votre demande, vous aurez besoin :

- de votre numéro SIRET
- du cadre juridique
- de la description du service justifiant une simplification pour les citoyens
- des coordonnées de l'équipe
- des coordonnées de votre délégué à la protection des données et responsable de traitement

<br/>
<Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande</Button>

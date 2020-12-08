---
title: Calculer le Quotient Familial dans un Portail Famille
tagline: Vous êtes une commune ou un éditeur de logiciel ? Calculez facilement le Quotient Familial grâce aux données de la CAF et de la DGFiP accessibles travers l'API Particulier.
tags: cas usage, api particulier, portail famille, quotient familial dématérialisé
noindex: true
image: portail_famille.jpg
# api:
#   - API Particulier
---

De plus en plus de communes mettent à disposition des habitants un Portail Famille permettant d'accéder à des services en ligne pour gérer les activités de l'ensemble de la famille : la crèche, l'halte-garderie, les centres de loisirs, la restauration scolaire, les goûter, les études, le conservatoire, l'atelier beaux-arts et autres.

Ce type de portail permet généralement de reserver et de payer en ligne les factures liées aux activitiés péri- et extrascolaires, de suivre les paiements et de gérer les informations liées au compte de la famille.

De nombreuses communes appliquent une tarification "solidaire" dépendant des revenus d'un foyer : le niveau de ressources de la famille est évalué grâce à ce qu'on appelle le Quotient Familial.

## Calcul du Quotient Famillial dématerialisé

En intégrant la brique API Particulier dans votre portail famille : les familles peuvent calculer leur quotient familial en ligne si vous mettez en place l'API Particulier, permettant la liaison avec les données de la CAF et de la DGFiP.

Vous profitez ainsi de données certifiées et évitez toute erreur de saisie.

Ce système présente des avantages importants <a href="#l'avantage-pour-les-familles">pour les familles</a> et <a href="#l'avantage-pour-les-agents-de-la-communes">pour les agents</a>.

## Les données disponibles

Voici les données de la CAF (composition familiale du foyer du demandeur) et de la DGFIP (pour vérifier les conditions d'éligibilité d'une demande) accessibles directement avec l'API, ce sont les données les plus utilisées pour ce service, mais la liste ci-dessous n'est pas exhaustive :

| Donnée            | Commentaire                                                                                   |
| ----------------- | --------------------------------------------------------------------------------------------- |
| Allocataire       | L'état-civil du demandeur (nom prénom date de naissance)                                      |
| Enfant(s)         | Le/La/Les enfant(s) (nom, prenom, date de naissance)                                          |
| Quotient Familial | Le quotient familial calculé par la CAF                                                       |
| Avis d'imposition | statut d’imposition, montant de l'impôt, revenu fiscal de référence, nombre de parts fiscales |
| Adresse           | L'adresse du foyer et/ou l'adresse fiscale du demandeur                                       |

## Comment accéder à la donnée

Pour remplir votre demande, vous aurez besoin :

- de votre numéro de SIRET
- de la descripition du service justifiant une simplification pour les citoyens
- du cadre juridique, notamment d'une délibération
- des coordonnées de l'équipe
- des coordonnées de votre délégué à la protection des données et responsable de traitement

<br/>
<Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande</Button>

Si vous travaillez avec un des éditeurs ou intégrateurs, <a href='#editeurs'>consultez la section éditeurs.</a>

## L'avantage pour les familles

La démarche est réalisable 100% en ligne, il n'y a plus de déplacement nécessaire en mairie si de temps d'attente.

La donnée est certifiée par le fournisseur de données, cela évite toute éventuelle fraude de document ou de déclaration.

<Quote logo="/images/guides/clamart.svg" who='Ville de Clamart' title='Simon-Pierre Chalvidan, directeur général adjoint des services'>
En 2014, nos usagers posaient une demi-journée pour effectuer leurs démarches en mairie. Aujourd'hui, ils les effectuent en ligne en 5 minutes.
</Quote>

## L'avantage pour les agents de la communes

Les informations sont certifiées par le fournisseur de données, il n'y a plus de validation de document à la main à effectuer ni d'archivage de documents papier.

La circulation de données directement entre les systèmes d'information permet d'éviter les saisies manuelles, les erreurs ou fautes de frappes.

<Quote logo="/images/guides/boulbi.svg" who='Ville de Boulogne-Billancourt' title='Services de la mairie'>
En 1,5 mois grâce au système de Quotient Familial Dématerialisé, nous avons pu traiter les dossiers d'autant de famille qu'en 4 mois avec le système précedent.
</Quote>

Les agents gagnent du temps pour accompagner les usagers en difficulté.

<Quote logo="/images/guides/clamart.svg" who='Ville de Clamart' title='Aurélie Coutant, directrice de la relation usagers'>
Maintenant que le traitement est automatisé, nous avons enfin le temps d'accompagner les usagers en difficulté, de leur expliquer plus largement les prestations auxquelles ils peuvent avoir accès.
</Quote>

**Pour en savoir plus :**&nbsp;<External href="https://www.dailymotion.com/video/x7xsjgz"> voir le témoignage de la ville de Clamart</External> dans le cadre du webinaire sur la simplificiation des démarches des citoyens grâce aux API (à partir de la 9eme minute).

## Editeurs

Si vous travaillez avec l'un des éditeurs ou intégrateurs ci-dessous vous pouvez faire une demande pré-remplie :

| Editeur     | Nom de la solution | Date | Lien vers la demande                                                                         |
| ----------- | ------------------ | ---- | -------------------------------------------------------------------------------------------- |
| Agora Plus  |                    |      | <External href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande</External> |
| Ciril Group |                    |      | <External href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande</External> |
| JVS         | Parascol           |      | <External href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande</External> |
| Arpège      |                    |      | <External href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande</External> |

Vous êtes un éditeur et vous souhaitez apparaître dans cette liste ? Écrivez-nous à [contact@particulier.api.gouv.fr](mailto:contact@particulier.api.gouv.fr)

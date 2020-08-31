---
title: Vous souhaitez simplifier les démarches de vos concitoyens ?
tagline: |
  Créez un pass famille : un seul portail, plusieurs démarches, plus de justificatifs papier.
tags: cas usage, api particulier, portail-famille, pass famille
noindex: true
---

Le Pass Famille est un bouquet de service accessible en ligne qui permet de regrouper différentes activités gérées par la ville.
_A voir comment cela fonctionne extactement du côté des villes_

Avec la **brique API Particulier** dans votre portail :

- Mise à disposition des données de la CAF et de la DGFIP
- **Plus besoin de demander les justificatifs** (avis fiscal ou quotient familial) aux citoyens
- **Pas de vérifications supplémentaires** : les informations sont certifiées par la CAF et la DGFIP
- Démarche 100% en ligne
- Des dossiers plus rapide à traiter pour vos agents

## Quelles données utilisez-vous dans vos démarches ?

Le Pass Famille est un téléservice modulable et personnalisable. En effet, les données sont exposées en fonction de la méthode de calcul du quotient familial.

Voici les données de la CAF (composition familiale du foyer du demandeur) accessibles directement avec notre API :

| Donnée            | Commentaire                                              |
| ----------------- | -------------------------------------------------------- |
| Allocataire       | L'état-civil du demandeur (nom prénom date de naissance) |
| Enfant(s)         | Le/La/Les enfant(s) (nom, prénom, date de naissance)     |
| Adresse           | L'adresse du foyer                                       |
| Quotient Familial | Le quotient familial calculé par la CAF                  |

Voici les données de la DGFIP (pour vérifier les conditions d'éligibilité d'une demande) accessibles directement avec notre API :

| Donnée            | Commentaire                                                                                   |
| ----------------- | --------------------------------------------------------------------------------------------- |
| Avis d'imposition | statut d’imposition, montant de l'impôt, revenu fiscal de référence, nombre de parts fiscales |
| Adresse           | L'adresse fiscale du demandeur                                                                |

## Comment formuler une demande ?

L'utilisation des données dans le cadre d'un Pass Famille est encadrée légalement. Vous pouvez motiver votre demande à l'aide des articles suivants :

- Article L114-8 <External href="https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000033219997&cidTexte=LEGITEXT000031366350&dateTexte=20161009"> Article L114-8 </External> du _Code des relations entre le public et l'administration_
- Certaine délibération prise par la ville peuvent constituer le cadre légal

**Pour remplir votre demande, vous aurez besoin de :**

- votre numéro SIRET
- cadre juridique associé à votre demande
- la description du service justifiant une simplication pour les citoyens
- coordonnées de l'équipe technique
- coordonnées de votre délégué à la protection des données et du responsable de traitement

<Button href="https://signup.api.gouv.fr/api-particulier">Remplir une demande</Button>

## Ils l'ont fait

Témoignage :
[Brest Métropole](https://signup.api.gouv.fr/api-particulier/1255#donnees)
[Commune de Nîme](https://signup.api.gouv.fr/api-particulier/129#organisation)
[Commune de Metz](https://signup.api.gouv.fr/api-particulier/626#organisation)

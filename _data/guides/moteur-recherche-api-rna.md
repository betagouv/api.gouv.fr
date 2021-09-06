---
title: Créer un moteur de recherche des associations françaises
tagline: Comment utiliser l’API Répertoire National des Associations pour créer un moteur de recherche qui trouve le numéro RNA d'une association ?
tags: cas usage, api RNA, répertoire, association
api:
  - API Répertoire National des Associations
image: code.jpg
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
---

## Qu'est ce que l’API Répertoire National des Associations (RNA) ?

Le répertoire national des associations françaises, contient les informations des associations dont le siège est en France à l’exception des départements de la Moselle (57), du Bas-Rhin (67) et du Haut-Rhin (68).

L’API RNA permet à un programme informatique de facilement interroger le répertoire, sans avoir à le télécharger. Elle permet de :

- rechercher les données d'une association grâce à son SIRET
- rechercher les données d'une association grâce à son nom
- rechercher les données d'une association grâce à son code RNA

## Cas pratique : rechercher une association par son nom

On peut notamment utiliser l'API pour créer un moteur de recherche des associations.

Le moteur de recherche ci-dessous est un simple démonstrateur. Il permet de rechercher une association à partir de son nom mais il n'affiche que les <b>10 premiers résultats</b>.

Il est aussi possible de faire un moteur de recherche par n° SIRET ou par n° RNA.

<ApiRnaWidget />

## Comment ça marche ?

Que se passe-t-il vraiment ? Le moteur de recherche interroge l'API RNA grâce à l'url suivante :

`https://entreprise.data.gouv.fr/api/rna/v1/full_text/<MOT-CLEF-DE-RECHERCHE>`

**Astuce**: copiez-collez cette url dans votre navigateur, remplacez _MOT-CLEF-DE-RECHERCHE_ par le nom d'une association pour visualiser ce que renvoie l'API.

Attention, c'est un peu aride. L'API RNA retourne près d'une quarantaine d'informations différentes sous format texte. Le texte est parfait pour communiquer entre deux ordinateurs, mais pour les humains, un peu de mise en page est nécessaire.

Ainsi dans notre démonstrateur, nous avons affiché dans l'interface une combinaison de quatre champs. Prenons en exemple <External href='https://entreprise.data.gouv.fr/api/rna/v1/full_text/restos%20du%20coeur'>les "Restos du coeur"</External> :

```json
{
  adresse_code_postal: "55000",
  (...)
  id_association: "W551000280", // n°RNA
  (...)
  objet: "aider et apporter une assistance aux jeunes démunis, notamment dans le domaine alimentaire.",
  titre: "RESTOS DU COEUR",
  (...)
}
```

Chaque association retournée par l’API est mise en page, (titre, adresse, id_association et objet) puis affichée dans la liste des résultats. Et voilà, notre moteur de recherche est terminé !

## Aller plus loin 🚀

Vous savez désormais comment fonctionne un moteur de recherche avec [l’API Répertoire National des Associations](/les-api/api_rna).

Pour aller plus loin et construire un moteur de recherche complet, ou utiliser cette API dans un service en ligne, consultez la [documentation](/documentation/api_rna) ou consultez la fiche API:

<Button href="/les-api/api_rna">Voir la fiche API</Button>

Enfin, sachez que le répertoire est librement téléchargeable sur la plateforme ouverte des données publiques françaises, <External href='https://data.gouv.fr'>data.gouv.fr</External>:

<Datagouv title='Répertoire National des Associations' productor='Ministère de l’Intérieur' href="https://www.data.gouv.fr/fr/datasets/repertoire-national-des-associations/">

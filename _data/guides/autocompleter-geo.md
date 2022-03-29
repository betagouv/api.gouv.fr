---
title: Autocompléter une entité administrative dans un formulaire en ligne
tagline: Facilitez le remplissage d'un formulaire en ligne en utilisant l'API découpage administratif
tags: cas usage, adresse, geo, postal, commune, département, région, code
image: guide-geo.png
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
api:
  - API Découpage Administratif - (API Geo)
---

Le guide original sur l'autocomplétion d'entités administratives [est publié sur le guide Etalab](https://guides.etalab.gouv.fr/apis-geo/2-api-decoupage-administratif.html#pourquoi-utiliser-l-api-decoupage-administratif).

## Qu'est-ce que l'autocomplétion d'une entité administrative ?

Lorsqu'un internaute doit saisir sa commune dans un formulaire (ou rechercher un département ou une région), il est possible de compléter automatiquement la saisie.
L'avantage de l'autocomplétion est double :

#### ⏱ faire gagner du temps à l'usager

#### ✅ proposer une donnée fiable

## Pourquoi utiliser l’API découpage administratif ?

L'[**API Découpage Administratif**](https://api.gouv.fr/les-api/api-geo) permet d’obtenir des données administratives française :

- à des échelles différentes (communes, départements, régions),
- à des années différentes (notion de millésime)

L'API Découpage Administratif est principalement destinée à un besoin de recherches pour des formulaires en partant du nom de la commune, du code postal ou bien du code INSEE.

<iframe id="geo"
    title="geo"
    width="100%"
    height="800"
    src="https://geo.api.gouv.fr/decoupage-administratif/communes#name">
</iframe>

Les usages départements ou régions bien que pratiques semblent moins intéressant car les données ne changent quasiment jamais dans le temps et le nombre limité d'éléments fait qu'il est possible de gérer ces informations côté client.

## Utilisation de l'API dans un site web

L’API est très utile pour permettre de faire **l'auto-complétion** qu’il s’agisse d’un formulaire ou pour permettre de zoomer sur une commune trouvée dans un contexte web

[🔎 Voir un exemple](http://bl.ocks.org/ThomasG77/0b99013795f76699c5c9a0d7daf4411e)

La partie importante se base sur un simple [Fetch](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API)

Il est aussi possible de [remplir les informations de coordonnées dans un tableur comme Libre Office](https://medium.com/@ThomasG77/api-et-g%C3%A9ocodage-dans-libre-office-calc-488ab78dc360)

<Button href="https://api.gouv.fr/les-api/api-geo">Accéder à l'API</Button>

## Rappels des exemples officiels

Nous présentons ici les exemples les plus courants. Pour des usages plus spécifiques, vous pouvez utiliser [les exemples de la documentation officielle](https://geo.api.gouv.fr/decoupage-administratif)

### Utilisation de l’API pour récupérer des communes

- Recherche par code postal <https://geo.api.gouv.fr/communes?codePostal=78000>
- Recherche par code INSEE <https://geo.api.gouv.fr/communes?code=44109>
- Recherche par nom <https://geo.api.gouv.fr/communes?nom=Nantes&boost=population&limit=5> (on ajoute un boost par population pour que la plus grand commune soit privilégiée)
- Par coordonnées <https://geo.api.gouv.fr/communes?lat=47.0482944&lon=-1.1501568>
- Filtrer par département pour éviter les problèmes liés à l'homonymie de commune, par exemple la commune de Saint-Aubin existe dans les départements 10, 21, 36, 39, 40, 47, 59, 62, 91 et 02 <https://geo.api.gouv.fr/communes?nom=Saint-Aubin&codeDepartement=21>
- Obtenir toutes les communes d'un département <https://geo.api.gouv.fr/departements/44/communes>
- Obtenir toutes les communes d'une région <https://geo.api.gouv.fr/communes?codeRegion=84>

Tous les exemples ci-dessus ne filtrent pas les champs, ne permettent pas de choisir si on veut des géométries pour les communes: soit le centre (au sens mathématique) de la commune, soit son contour, et ne permettent pas le choix de la sérialisation: pour la cartographie (généralement, on utilise un JSON spécifique dit GeoJSON pour cela).

La meilleure manière de comprendre comment cela fonctionne est d'utiliser [la démo recherche avancée de la documentation officielle](https://geo.api.gouv.fr/decoupage-administratif/communes#advanced).

Elle permet en cochant de voir comment l'URL d'appel change en particulier l'option "*fields*" pour ne retourner que les colonnes/champs nécessaires.

## Pour en savoir plus

**👉 Rendez-vous sur [le guide détaillé d'Etalab](https://guides.etalab.gouv.fr/apis-geo/2-api-decoupage-administratif.html#rappels-des-exemples-officiels)**

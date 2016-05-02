---
name: API Cadastre
tagline: Consultez ou affichez le cadastre vectoriel
contract: OUVERT
openapi_definition: https://cadastre.api.gouv.fr/definition.yml
clients:
  - collectivités
  - ministères
  - entreprises
  - particuliers
partners:
  - DGFiP
owner: DINSIC
type: reference
experimentale: true
keywords:
  - Cadastre
  - PCI Vecteur
  - Parcelles
  - Section
  - Communes
---

__Attention : Cette API est en construction. Le contenu et la documentation changent régulièrement.__

L'API Cadastre vous permet de consulter simplement les parcelles d'une commune, ou de rechercher un ensemble de parcelles en particulier.

Le cadastre est un référentiel essentiel pour de nombreux usages :

* Aménagement du territoire
* Agriculture / Sylviculture
* Droit / Fiscalité
* Urbanisme
* Positionnement géographique

Les données proviennent de la [Direction Générale des Finances Publiques](http://www.economie.gouv.fr/DGFiP).

__Couverture du territoire :__ 90% des communes

## Données géographiques

L'API retourne actuellement des données au format [GeoJSON](http://geojson.org/)/WGS-84.

## Restrictions à l'usage des données

* Les données collectées via cette API ne peuvent être rediffusées sans l'accord explicite de la DGFiP.
* Elles ne peuvent en aucun cas servir à reconstituer une base de données à usage commerciale.

## Derniers changements
* 02/05 : Ajout de la validation du code commune INSEE
* 28/04 : Ajout de la possibilité de filtrer par section cadastrale et numéro de parcelle

## Contact

cadastre@api.gouv.fr



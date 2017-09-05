---
title: API La Bonne Boite # nom commercial de l'API
tagline: Accédez aux taux de retour à l'emploi par formation  # une phrase maximum
owner: Pôle Emploi  # producteur de l'API
category: ouverte  # type de donnée exposée, voir api_category dans le fichier _config.yml
contract: OUVERT sous contrat  # peut être "OUVERT" ou "OUVERT sous contrat"
logo: https://ma-super-api.fr/logo.svg  # URL d'un logo de l'API
openapi_definition: https://ma-super-api.fr/spec.yaml # URL de la documentation au format OpenAPI <https://github.com/OAI/OpenAPI-Specification>
contact:  contact@ma-super-api.fr #moyen de contact, soit un mail, soit un lien vers formulaire de contact
doc_tech: https://ma-super-api.fr/doc  # URL de la documentation technique de l'API au format HTML
access_link: https://ma-super-api.fr/register  # URL d'une page de demande d'accès si l'API est à accès restreint
stat:
  url: https://ma-super-api.fr/stats  # adresse à laquelle un nombre d'appels à l'API est publié, en content-type application/json
  label: Appels  # description d'un appel à l'API
  lastXdays: 30  # nombre de jours sur lequel les appels à l'API sont comptabilisés
clients:  # types d'entités habilitées à utiliser l'API
  - particuliers  # texte libre en minuscules
  - entreprises  # ajoutez ou supprimez des types d'entités
  - collectivités
  - ministères
partners:  # liste de co-producteurs de l'API
  - fournisseur local  # texte libre
keywords: # utilisé dans la recherche
  - adresse  # texte libre
  - SIRET
---

## Description de l'API

Texte libre au format [Markdown](http://ricostacruz.com/cheatsheets/markdown.html).

Ne pas utiliser le premier niveau de titre `h1` car il est réservé.

## Rappel

- [ ] Modifier le nom du fichier `nom_api.md` dans le champ ci-dessus.
- [ ] Créer une nouvelle branche pour l'ajout de ce fichier, et la nommer du même nom que le fichier `nom_api`.
- [ ] Ouvrir une pull request pour valider l'intégration.
- [ ] Effacer ce texte une fois que vous l'avez lu

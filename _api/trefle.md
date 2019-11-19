---
title: Trèfle  # nom commercial de l'API
tagline: Moteur de financement de formations  # une phrase maximum
owner: Pôle emploi  # producteur de l'API
logo: logo.svg  # Nom du fichier de votre logo à placer dans le dossier /img
#stat:
#  url: http://trefle.pole-emploi.fr/stats  # adresse à laquelle un nombre d'appels à l'API est publié, en content-type application/json
#  label: Appels  # description d'un appel à l'API
#  lastXdays: 30  # nombre de jours sur lequel les appels à l'API sont comptabilisés
clients:  # types d'entités habilitées à utiliser l'API
  - particuliers  # texte libre en minuscules
  - entreprises  # ajoutez ou supprimez des types d'entités
  - collectivités
  - ministères
# partners:  # liste de co-producteurs de l'API
#  - fournisseur local  # texte libre
keywords: # utilisé dans la recherche
  - adresse  # texte libre
  - SIRET
score:
  detail:
    access:
      description: OUVERT sous contrat
      link: https://ma-super-api.fr/register  # URL d'une page de demande d'accès si l'API est à accès restreint
    rate_limiting:
      description: |
        <p>L'API est disponible à hauteur de 20 appels par secondes et par jetons d'accès.</p>
    contact:
      link: david.foucher@pole-emploi.fr #moyen de contact, soit un mail, soit un lien vers formulaire de contact
    doc_tech:
      link: http://trefle.pole-emploi.fr/schema # URL de la documentation au format OpenAPI <https://github.com/OAI/OpenAPI-Specification>
    # monitoring:
    #  link: https://status.ma-super-api.fr  # URL d'une page qui affiche le statut
    #  description: |
    #    <p>La DINSIC s’engage à ce que le Service soit accessible à 95% et la DINSIC s’engage à améliorer progressivement ce rendement.</p>
---

## Description de l'API

Texte libre au format [Markdown](http://ricostacruz.com/cheatsheets/markdown.html).

Ne pas utiliser le premier niveau de titre `h1` car il est réservé.

## Rappel

- [ ] Modifier le nom du fichier `nom_api.md` dans le champ ci-dessus.
- [ ] Créer une nouvelle branche pour l'ajout de ce fichier, et la nommer du même nom que le fichier `nom_api`.
- [ ] Ouvrir une pull request pour valider l'intégration.
- [ ] Effacer ce texte une fois que vous l'avez lu

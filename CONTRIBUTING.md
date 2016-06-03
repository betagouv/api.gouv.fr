# Améliorer le site public des API des administrations


## Ajouter une API

### [En un clic par l'interface web de GitHub](https://github.com/sgmap/api.gouv.fr/new/gh-pages/_api?filename=_api/nom_api.md&value=---%0Aname%3A%20Nom%20API%20%23nom%20de%20l%27API%0Atagline%3A%20Mission%20de%20l%27API%20%23%20description%20courte%20de%20l%27API%0Adoc_tech%3A%20http%3A%2F%2Fdoc.api.com%20%23%20lien%20vers%20la%20documentation%20technique%20de%20l%27API%0Aaccess_link%3A%20http%3A%2F%2Fregistration.api.com%20%23%20lien%20vers%20la%20page%20d%27enregistrement%20de%20l%27API%20%7C%20optionnel%0Adomain%3A%20http%3A%2F%2Fapi.com%20%23%20lien%20vers%20le%20domain%20de%20l%27API%0Acontract%3A%20OUVERT%20sous%20contrat%20%23%20type%20de%20contrat%20%28OUVERT%2C%20OUVERT%20sous%20contrat%29%0Arestriction%3A%20toto%20%23%20restriction%20de%20l%27utilisation%20de%20l%27API%20%7C%20optionnel%0Aopenapi_definition%3A%20https%3A%2F%2Fhost.fr%2Fapi-def.yaml%20%7C%20optionnel%0Aclients%3A%20%23%20liste%20des%20personnes%20pouvant%20utiliser%20l%27API%0A%20%20-%20client1%0A%20%20-%20client2%0Astat%3A%20%23%20lien%20vers%20les%20statistiques%0A%20%20lastXdays%3A%2030%20%23%20dur%C3%A9e%20du%0A%20%20url%3A%20https%3A%2F%2Fhost.fr%2Fdata%0A%20%20label%3A%20Pi%C3%A8ces%20justificatives%20d%C3%A9mat%C3%A9rialis%C3%A9es%20%23%20description%20m%C3%A9tier%20de%20chaque%20appel%0Apartners%3A%20%23%20liste%20des%20partenaires%0A%20%20-%20Partenaire1%0A%20%20-%20Partenaire2%0Aowner%3A%20DINSIC%20%23%20organisme%20g%C3%A9rant%20l%27API%0Acategory%3A%20confidential%20%23%20type%20de%20donn%C3%A9e%2C%20voir%20le%20champs%20id%20dans%20le%20fichier%20_config%0Akeywords%3A%20%23%20liste%20des%20mots%20cl%C3%A9s%20utilis%C3%A9s%20lors%20de%20la%20recherche%0A%20%20-%20toto%0A%20%20-%20tutu%0A%20%20-%20titi%0Alogo%3A%20%23%20URL%20vers%20un%20logo%20de%20l%27API%20%7C%20optionnel%0A---%0A%0A%23%23%20Description%20de%20l%27API%0A%0ATexte%20libre%20au%20format%20%5BMarkdown%5D%28http%3A%2F%2Fricostacruz.com%2Fcheatsheets%2Fmarkdown.html%29.%0A%0A%0A%23%23%20Rappel%0A%0A-%20%5B%20%5D%20Modifier%20le%20nom%20du%20fichier%20%60nom_api.md%60%20dans%20le%20champ%20ci-dessus.%0A-%20%5B%20%5D%20Cr%C3%A9er%20une%20nouvelle%20branche%20pour%20l%27ajout%20de%20ce%20fichier%2C%20et%20la%20nommer%20du%20m%C3%AAme%20nom%20que%20le%20fichier%20%60nom_api%60.%0A-%20%5B%20%5D%20Ouvrir%20une%20pull%20request%20pour%20valider%20l%27int%C3%A9gration.%0A-%20%5B%20%5D%20Effacer%20ce%20texte%20une%20fois%20que%20vous%20l%27avez%20lu) :smiley:

> Sinon, offline : créer un nouveau fichier de description dans le dossier [`_api`](https://github.com/sgmap/api.gouv.fr/tree/gh-pages/_api) et renseigner les informations en prenant exemple sur un fichier de description existant déjà dans ce dossier.


## Ajouter un service

### [En un clic par l'interface web de GitHub](https://github.com/sgmap/api.gouv.fr/new/gh-pages/_service?filename=_service/nom_service.md&value=---%0D%0Aname%3A+Nom+Service+%23nom+du+service%0D%0Alink%3A+http%3A%2F%2Fservice.com+%23+lien+vers+le+service%0D%0Adescription%3A+Lorem+Ipsum+%23+description+rapide+du+service%0D%0Aapi%3A+%23+liste+des+API+utilis%C3%A9es+dans+le+service+%28utiliser+l%27attribut+name+de+l%27API%29%0D%0A+-+Nom+API%0D%0Ascreenshot%3A+screenshot.jpg+%23ajouter+un+screenshot+de+l%27API%0D%0Afeatured%3A+false+%23+est-ce+que+la+r%C3%A9utilisation+doit+%C3%AAtre+affich%C3%A9e+sur+la+page+d%27accueil.%0D%0A---%0D%0A%0D%0A%23%23+Description+du+service%0D%0A%0D%0ATexte+libre+au+format+%5BMarkdown%5D%28http%3A%2F%2Fricostacruz.com%2Fcheatsheets%2Fmarkdown.html%29.%0D%0A%0D%0A%0D%0A%23%23+Rappel%0D%0A%0D%0A-+%5B+%5D+Modifier+le+nom+du+fichier+%60nom_service.md%60+dans+le+champ+ci-dessus.%0D%0A-+%5B+%5D+Cr%C3%A9er+une+nouvelle+branche+pour+l%27ajout+de+ce+fichier%2C+et+la+nommer+du+m%C3%AAme+nom+que+le+fichier+%60nom_service%60.%0D%0A-+%5B+%5D+Ouvrir+une+pull+request+pour+valider+l%27int%C3%A9gration.%0D%0A-+%5B+%5D+Effacer+ce+texte+une+fois+que+vous+l%27avez+lu%0D%0A) :smiley:

> Sinon, offline : créer un nouveau fichier de description dans le dossier [`_service`](https://github.com/sgmap/api.gouv.fr/tree/gh-pages/_service) et renseigner les informations en prenant exemple sur un fichier de description existant déjà dans ce dossier.


## Éditer la description d'une API

Modifier le fichier de description de l'API dans le dossier [`_api`](https://github.com/sgmap/api.gouv.fr/tree/gh-pages/_api).


## Modifier le contenu éditorial

[Rechercher le contenu à modifier](https://github.com/sgmap/api.gouv.fr/search?q=contenu+à+modifier&type=Code) et éditer le fichier correspondant.


## Modifier les types d'API

Mettre à jour la propriété `api_category` dans [`_config.yml`](https://github.com/sgmap/api.gouv.fr/tree/gh-pages/_config.yml).

## Modifier les exemples de recherches

Mettre à jour la propriété `searchExamples` dans [`index.html`](https://github.com/sgmap/api.gouv.fr/tree/gh-pages/index.html).


## Modifier la présentation du site

Ce site est construit avec [Jekyll](https://jekyllrb.com/), un générateur de sites statiques. La version utilisée est celle [actuellement en production](https://github.com/jekyll/jekyll/issues/4441) sur GitHub Pages.

Pour l'améliorer, les informations dans le [README.md](https://github.com/sgmap/api.gouv.fr/blob/gh-pages/README.md) permettent d'installer la platforme en local.

Les fichiers pertinents pour une modification de la présentation sont probablement dans les dossiers `_layouts` et `css`.


## Modifier le logo

La source du logo est dans le répertoire `_sources`. Il s'agit d'un SVG contenant du texte. Pour le rendre accessible à tous les utilisateurs, il importe de le transformer en un SVG contenant des `path`.

Cela peut être fait à la ligne de commande avec [Inkscape](https://inkscape.org/fr/) :

```shell
inkscape --export-text-to-path `pwd`/_sources/logo.svg -l `pwd`/img/logo.svg
```

## Déployer

Ce site est déployé en continu avec [Github Pages](https://pages.github.com).

Pousser sur `gh-pages`, c’est partager avec le monde… ce qui signifie donc qu'il faut être très prudent avec ce pouvoir et privilégier l'usage de [pull requests](https://guides.github.com/introduction/flow/) :wink:

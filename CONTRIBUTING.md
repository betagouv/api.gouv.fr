# Améliorer le site public des API des administrations


## Ajouter une API

### [En un clic par l'interface web de GitHub](https://github.com/sgmap/api.gouv.fr/new/gh-pages/_api?filename=_api/nom_api.md&value=---%0D%0Atitle%3A+Ma+Super+API++%23+nom+commercial+de+l%27API%0D%0Atagline%3A+Mission+de+l%27API++%23+une+phrase+maximum%0D%0Aowner%3A+DINSIC++%23+producteur+de+l%27API%0D%0Acategory%3A+confidential++%23+type+de+donn%C3%A9e+expos%C3%A9e%2C+voir+api_category+dans+le+fichier+_config.yml%0D%0Acontract%3A+OUVERT+sous+contrat++%23+peut+%C3%AAtre+%22OUVERT%22+ou+%22OUVERT+sous+contrat%22%0D%0Alogo%3A+https%3A%2F%2Fma-super-api.fr%2Flogo.svg++%23+URL+d%27un+logo+de+l%27API%0D%0Aopenapi_definition%3A+https%3A%2F%2Fma-super-api.fr%2Fspec.yaml+%23+URL+de+la+documentation+au+format+OpenAPI+%3Chttps%3A%2F%2Fgithub.com%2FOAI%2FOpenAPI-Specification%3E%0D%0Adoc_tech%3A+https%3A%2F%2Fma-super-api.fr%2Fdoc++%23+URL+de+la+documentation+technique+de+l%27API+au+format+HTML%0D%0Aaccess_link%3A+https%3A%2F%2Fma-super-api.fr%2Fregister++%23+URL+d%27une+page+de+demande+d%27acc%C3%A8s+si+l%27API+est+%C3%A0+acc%C3%A8s+restreint%0D%0Astat%3A%0D%0A++url%3A+https%3A%2F%2Fma-super-api.fr%2Fstats++%23+adresse+%C3%A0+laquelle+un+nombre+d%27appels+%C3%A0+l%27API+est+publi%C3%A9%2C+en+content-type+application%2Fjson%0D%0A++label%3A+Appels++%23+description+d%27un+appel+%C3%A0+l%27API%0D%0A++lastXdays%3A+30++%23+nombre+de+jours+sur+lequel+les+appels+%C3%A0+l%27API+sont+comptabilis%C3%A9s%0D%0Aclients%3A++%23+types+d%27entit%C3%A9s+habilit%C3%A9es+%C3%A0+utiliser+l%27API%0D%0A++-+particuliers++%23+texte+libre+en+minuscules%0D%0A++-+entreprises++%23+ajoutez+ou+supprimez+des+types+d%27entit%C3%A9s%0D%0A++-+collectivit%C3%A9s%0D%0A++-+minist%C3%A8res%0D%0Apartners%3A++%23+liste+de+co-producteurs+de+l%27API%0D%0A++-+fournisseur+local++%23+texte+libre%0D%0Akeywords%3A+%23+utilis%C3%A9+dans+la+recherche%0D%0A++-+adresse++%23+texte+libre%0D%0A++-+SIRET%0D%0A---%0D%0A%0D%0A%23%23+Description+de+l%27API%0D%0A%0D%0ATexte+libre+au+format+%5BMarkdown%5D%28http%3A%2F%2Fricostacruz.com%2Fcheatsheets%2Fmarkdown.html%29.%0D%0A%0D%0ANe+pas+utiliser+le+premier+niveau+de+titre+%60h1%60+car+il+est+r%C3%A9serv%C3%A9.%0D%0A%0D%0A%23%23+Rappel%0D%0A%0D%0A-+%5B+%5D+Modifier+le+nom+du+fichier+%60nom_api.md%60+dans+le+champ+ci-dessus.%0D%0A-+%5B+%5D+Cr%C3%A9er+une+nouvelle+branche+pour+l%27ajout+de+ce+fichier%2C+et+la+nommer+du+m%C3%AAme+nom+que+le+fichier+%60nom_api%60.%0D%0A-+%5B+%5D+Ouvrir+une+pull+request+pour+valider+l%27int%C3%A9gration.%0D%0A-+%5B+%5D+Effacer+ce+texte+une+fois+que+vous+l%27avez+lu) :smiley:

> Sinon, offline : créer un nouveau fichier de description dans le dossier [`_api`](https://github.com/sgmap/api.gouv.fr/tree/gh-pages/_api) et renseigner les informations en prenant exemple sur un fichier de description existant déjà dans ce dossier.


## Ajouter un service

### [En un clic par l'interface web de GitHub](https://github.com/sgmap/api.gouv.fr/new/gh-pages/_service?filename=_service/nom_service.md&value=---%0d%0atitle%3a+Mon+Super+Service++%23+texte+libre%0d%0alink%3a+https%3a%2f%2fmon-super-service.fr%0d%0adescription%3a+Une+phrase+devrait+suffire+%c3%a0+pr%c3%a9senter+ce+service.+%23+%c3%a9vitez+de+r%c3%a9p%c3%a9ter+le+nom+du+service%2c+il+sera+indiqu%c3%a9+imm%c3%a9diatement+%c3%a0+c%c3%b4t%c3%a9%0d%0aapi%3a++%23+lister+toutes+les+API+r%c3%a9f%c3%a9renc%c3%a9es+dans+api.gouv.fr+et+utilis%c3%a9es+par+le+service%0d%0a+-+G%c3%a9oAPI++%23+utiliser+le+nom+de+l%27API%0d%0ascreenshot%3a+mon-super-service.jpg++%23+nom+de+fichier+relatif+au+dossier+%2fimg%0d%0a---%0d%0a%0d%0a%23%23+Description+du+service%0d%0a%0d%0aTexte+libre+au+format+%5bMarkdown%5d(http%3a%2f%2fricostacruz.com%2fcheatsheets%2fmarkdown.html).%0d%0a%0d%0a%0d%0a%23%23+Rappel%0d%0a%0d%0a-+%5b+%5d+Modifier+le+nom+du+fichier+%60nom_service.md%60+dans+le+champ+ci-dessus.%0d%0a-+%5b+%5d+Cr%c3%a9er+une+nouvelle+branche+pour+l%27ajout+de+ce+fichier%2c+et+la+nommer+du+m%c3%aame+nom+que+le+fichier+%60nom_service%60.%0d%0a-+%5b+%5d+Ouvrir+une+pull+request+pour+valider+l%27int%c3%a9gration.%0d%0a-+%5b+%5d+Effacer+ce+texte+une+fois+que+vous+l%27avez+lu%0d%0a) :smiley:

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

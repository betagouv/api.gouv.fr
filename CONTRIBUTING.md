# Améliorer le site public des API des administrations

## Ajouter une API

### [En un clic par l'interface web de GitHub](<https://github.com/betagouv/api.gouv.fr/new/master/_api?filename=_api/nom_api.md&value=---%0Atitle%3A%20Ma%20Super%20API%20%20%23%20nom%20commercial%20de%20l%27API%0Atagline%3A%20Mission%20de%20l%27API%20%20%23%20une%20phrase%20maximum%0Aowner%3A%20DINUM%20%20%23%20producteur%20de%20l%27API%0Alogo%3A%20logo.svg%20%20%23%20Nom%20du%20fichier%20de%20votre%20logo%20%C3%A0%20placer%20dans%20le%20dossier%20%2Fimg%0Astat%3A%0A%20%20url%3A%20https%3A%2F%2Fma-super-api.fr%2Fstats%20%20%23%20adresse%20%C3%A0%20laquelle%20un%20nombre%20d%27appels%20%C3%A0%20l%27API%20est%20publi%C3%A9%2C%20en%20content-type%20application%2Fjson%0A%20%20label%3A%20Appels%20%20%23%20description%20d%27un%20appel%20%C3%A0%20l%27API%0A%20%20lastXdays%3A%2030%20%20%23%20nombre%20de%20jours%20sur%20lequel%20les%20appels%20%C3%A0%20l%27API%20sont%20comptabilis%C3%A9s%0Aclients%3A%20%20%23%20types%20d%27entit%C3%A9s%20habilit%C3%A9es%20%C3%A0%20utiliser%20l%27API%0A%20%20-%20particuliers%20%20%23%20texte%20libre%20en%20minuscules%0A%20%20-%20entreprises%20%20%23%20ajoutez%20ou%20supprimez%20des%20types%20d%27entit%C3%A9s%0A%20%20-%20collectivit%C3%A9s%0A%20%20-%20minist%C3%A8res%0Apartners%3A%20%20%23%20liste%20de%20co-producteurs%20de%20l%27API%0A%20%20-%20fournisseur%20local%20%20%23%20texte%20libre%0Akeywords%3A%20%23%20utilis%C3%A9%20dans%20la%20recherche%0A%20%20-%20adresse%20%20%23%20texte%20libre%0A%20%20-%20SIRET%0Ascore%3A%0A%20%20detail%3A%0A%20%20%20%20access%3A%0A%20%20%20%20%20%20description%3A%20OUVERT%20sous%20contrat%0A%20%20%20%20%20%20link%3A%20https%3A%2F%2Fma-super-api.fr%2Fregister%20%20%23%20URL%20d%27une%20page%20de%20demande%20d%27acc%C3%A8s%20si%20l%27API%20est%20%C3%A0%20acc%C3%A8s%20restreint%0A%20%20%20%20rate_limiting%3A%0A%20%20%20%20%20%20description%3A%20%7C%0A%20%20%20%20%20%20%20%20%3Cp%3EL%27API%20est%20disponible%20%C3%A0%20hauteur%20de%2020%20appels%20par%20secondes%20et%20par%20jetons%20d%27acc%C3%A8s.%3C%2Fp%3E%0A%20%20%20%20contact%3A%0A%20%20%20%20%20%20link%3A%20contact%40ma-super-api.fr%20%23moyen%20de%20contact%2C%20soit%20un%20mail%2C%20soit%20un%20lien%20vers%20formulaire%20de%20contact%0A%20%20%20%20doc_tech%3A%0A%20%20%20%20%20%20link%3A%20https%3A%2F%2Fma-super-api.fr%2Fspec.yaml%20%23%20URL%20de%20la%20documentation%20au%20format%20OpenAPI%20%3Chttps%3A%2F%2Fgithub.com%2FOAI%2FOpenAPI-Specification%3E%0A%20%20%20%20monitoring%3A%0A%20%20%20%20%20%20link%3A%20https%3A%2F%2Fstatus.ma-super-api.fr%20%20%23%20URL%20d%27une%20page%20qui%20affiche%20le%20statut%0A%20%20%20%20%20%20description%3A%20%7C%0A%20%20%20%20%20%20%20%20%3Cp%3ELa%20DINUM%20s%E2%80%99engage%20%C3%A0%20ce%20que%20le%20Service%20soit%20accessible%20%C3%A0%2095%25%20et%20la%20DINUM%20s%E2%80%99engage%20%C3%A0%20am%C3%A9liorer%20progressivement%20ce%20rendement.%3C%2Fp%3E%0A---%0A%0A%23%23%20Description%20de%20l%27API%0A%0ATexte%20libre%20au%20format%20%5BMarkdown%5D(http%3A%2F%2Fricostacruz.com%2Fcheatsheets%2Fmarkdown.html).%0A%0ANe%20pas%20utiliser%20le%20premier%20niveau%20de%20titre%20%60h1%60%20car%20il%20est%20r%C3%A9serv%C3%A9.%0A%0A%23%23%20Rappel%0A%0A-%20%5B%20%5D%20Modifier%20le%20nom%20du%20fichier%20%60nom_api.md%60%20dans%20le%20champ%20ci-dessus.%0A-%20%5B%20%5D%20Cr%C3%A9er%20une%20nouvelle%20branche%20pour%20l%27ajout%20de%20ce%20fichier%2C%20et%20la%20nommer%20du%20m%C3%AAme%20nom%20que%20le%20fichier%20%60nom_api%60.%0A-%20%5B%20%5D%20Ouvrir%20une%20pull%20request%20pour%20valider%20l%27int%C3%A9gration.%0A-%20%5B%20%5D%20Effacer%20ce%20texte%20une%20fois%20que%20vous%20l%27avez%20lu%0A>) :smiley:

> Sinon, offline : créer un nouveau fichier de description dans le dossier [`_api`](https://github.com/betagouv/api.gouv.fr/tree/master/_api) et renseigner les informations en prenant exemple sur un fichier de description existant déjà dans ce dossier.

Nous vous recommandons de :

- Fournir la documentation au format [OpenAPI](https://openapis.org/).
- Décrire de manière claire et concise les modalités d'accès à l'API (CGU, licence…).
- Donner des exemples pertinents démontrant des utilisations réelles de l'API.
- Fournir des statistiques publiques donnant des mesures d'impact (par exemple : nombre de courses de taxi, de pièces justificatives non réclamées…).

Dans le cas d'API fermées :

- Rendre accessible un environnement « bac à sable » permettant de tester l'API.
- Automatiser et simplifier autant que possible la procédure d'enrôlement.

## Ajouter un service

### [En un clic par l'interface web de GitHub](<https://github.com/betagouv/api.gouv.fr/new/master/_service?filename=_service/nom_service.md&value=---%0d%0atitle%3a+Mon+Super+Service++%23+texte+libre%0d%0alink%3a+https%3a%2f%2fmon-super-service.fr%0d%0adescription%3a+Une+phrase+devrait+suffire+%c3%a0+pr%c3%a9senter+ce+service.+%23+%c3%a9vitez+de+r%c3%a9p%c3%a9ter+le+nom+du+service%2c+il+sera+indiqu%c3%a9+imm%c3%a9diatement+%c3%a0+c%c3%b4t%c3%a9%0d%0aapi%3a++%23+lister+toutes+les+API+r%c3%a9f%c3%a9renc%c3%a9es+dans+api.gouv.fr+et+utilis%c3%a9es+par+le+service%0d%0a+-+G%c3%a9oAPI++%23+utiliser+le+nom+de+l%27API%0d%0ascreenshot%3a+mon-super-service.jpg++%23+nom+de+fichier+relatif+au+dossier+%2fimg%0d%0a---%0d%0a%0d%0a%23%23+Description+du+service%0d%0a%0d%0aTexte+libre+au+format+%5bMarkdown%5d(http%3a%2f%2fricostacruz.com%2fcheatsheets%2fmarkdown.html).%0d%0a%0d%0a%0d%0a%23%23+Rappel%0d%0a%0d%0a-+%5b+%5d+Modifier+le+nom+du+fichier+%60nom_service.md%60+dans+le+champ+ci-dessus.%0d%0a-+%5b+%5d+Cr%c3%a9er+une+nouvelle+branche+pour+l%27ajout+de+ce+fichier%2c+et+la+nommer+du+m%c3%aame+nom+que+le+fichier+%60nom_service%60.%0d%0a-+%5b+%5d+Ouvrir+une+pull+request+pour+valider+l%27int%c3%a9gration.%0d%0a-+%5b+%5d+Effacer+ce+texte+une+fois+que+vous+l%27avez+lu%0d%0a>) :smiley:

> Sinon, offline : créer un nouveau fichier de description dans le dossier [`_service`](https://github.com/betagouv/api.gouv.fr/tree/master/_service) et renseigner les informations en prenant exemple sur un fichier de description existant déjà dans ce dossier.

## Éditer la description d'une API

Modifier le fichier de description de l'API dans le dossier [`_api`](https://github.com/betagouv/api.gouv.fr/tree/master/_api).

## Modifier le contenu éditorial

[Rechercher le contenu à modifier](https://github.com/betagouv/api.gouv.fr/search?q=contenu+à+modifier&type=Code) et éditer le fichier correspondant.

## Ajouter des statistiques d'usage

Il est possible d'afficher des statistiques d'usage de votre API. Par exemple, le nombre de traitements, le nombre d'appels HTTP etc.

Vous devez renseigner une URL où vous mettez à disposition des statistiques d'usage. 2 possibilités s'offrent à vous : renseigner uniquement un chiffre ou mettre à dispostion un objet JSON avec plusieurs clés (plusieurs indicateurs par exemple).

Uniquement un chiffre :

```yaml
stat:
  # Indique la temporalité de l'indicateur en nombre de jours
  lastXdays: 30
  # L'URL où vous mettez à disposition un chiffre
  url: https://api.gouv.fr/api/stats/justificatifs
  # La description de votre statistique
  label: justificatifs papier évités
```

Un document JSON :

```yaml
stat:
  # Indique la temporalité de l'indicateur en nombre de jours
  lastXdays: 30
  # L'URL où vous mettez à disposition un document JSON contenant des statistiques
  url: https://api.gouv.fr/api/stats
  # La description de votre statistique
  label: justificatifs papier évités
  # La clé du document JSON que vous souhaitez utiliser
  path:
    - justificatifs
```

Dans le dernier exemple, votre document JSON devrait avoir la structure suivante :

```json
{
  "justificatifs": 42,
  "non_utilise": 1
}
```

## Modifier les exemples de recherches

Mettre à jour la propriété `SEARCH_FIELDS` dans [`index.js`](https://github.com/betagouv/api.gouv.fr/tree/master/components/api-search-bar.js).

## Déploiement

### Installation locale

Cette application utilise [Next.js](https://github.com/zeit/next.js).

1. Installer les dépendances

```bash
yarn
```

2. Lancer le serveur de développement

```bash
yarn dev
```

### Production

Cette application utilise [Next.js](https://github.com/zeit/next.js).

1. Installer les dépendances

```bash
yarn
```

2. Générer les bundles de production

```bash
yarn build
```

3. Lancer le serveur de production

```bash
yarn start
```

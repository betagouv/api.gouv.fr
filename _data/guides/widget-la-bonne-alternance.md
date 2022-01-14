---
title: Comment installer le widget formulaire de dépôt d'offre d'alternance sur son site ?
tagline: Intégrez le widget LBA sur votre site, pour afficher les formations et les entreprises qui proposent un apprentissage.
tags: cas usage, La Bonne alternance, apprentissage, widget, pole emploi, matcha, alternance
image: code.jpg
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
api:
  - API La Bonne Alternance
---

Voici à quoi ressemble le widget La Bonne Alternance. Il permet d'afficher directement sur votre site les formations et les entreprises qui proposent un apprentissage en interrogeant les données de <External href="/les-api/api-la-bonne-alternance">l'API La Bonne Alternance</External>

<iframe style="height: 700px; width: 380px;max-width: 100%;margin: auto;display: block;" src="https://labonnealternance.apprentissage.beta.gouv.fr/recherche-apprentissage?radius=60&romes=F1702,F1705,F1701&scope=all&lat=47&lon=2.2&caller=ID_service_appelant_labonnealternance&return_uri=/&return_logo_url=https://api.gouv.fr/images/api-logo/dinum.png" />

## Comment intégrer le widget ?

Vous devez intégrer le widget avec le périmètre désiré dans une Iframe. Ex :

```
<iframe src="https://labonnealternance.apprentissage.beta.gouv.fr/${perimètre}" />
```

Vous devez ensuite **paramétrer le widget** en ajoutant les paramètres à la fin de l'url, dans l'Iframe. Voici un exemple de paramètres :

```
?radius=60&romes=F1702,F1705,F1701&scope=all&lat=47&lon=2.2&caller=ID_service_appelant_labonnealternance&return_uri=/&return_logo_url=https://url/image.png
```

Voici un exemple d'Iframe paramétrée :

```
<iframe style="height: 660px; width: 360px;max-width: 100%;margin: auto;display: block;" src="https://labonnealternance.apprentissage.beta.gouv.fr/recherche-apprentissage?radius=60&romes=F1702,F1705,F1701&scope=all&lat=47&lon=2.2&caller=ID_service_appelant_labonnealternance&return_uri=/&return_logo_url=https://api.gouv.fr/images/api-logo/dinum.png" />
```

Vous pouvez utilisez l’outil suivant pour tester les différentes versions possibles du widget :

<Button href="https://labonnealternance.apprentissage.beta.gouv.fr/test-widget">Tester le widget</Button>

## Explication des périmètres

Le choix d'un périmètre (path) est obligatoire. En l'absence vous serez redirigé vers la homepage du site.

| Périmètre / Path                     | Description                                                           |
| ------------------------------------ | --------------------------------------------------------------------- |
| `/recherche-apprentissage`           | La recherche portera sur les formations ET les opportunités d'emploi. |
| `/recherche-emploi`                  | La recherche portera sur les opportunités d'emploi seulement.         |
| `/recherche-apprentissage-formation` | La recherche portera sur les formations uniquement.                   |

## Explication des paramètres

| Paramètre         | Description                                                                                                                                                                                           |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | --- | ---------------------------------------------------------------------------- |
| `radius`          | Optionnel. Valeur numérique.<br/> Valeurs autorisées : `10                                                                                                                                            | 30                                                                | 60  | 100` <br/> Le rayon de recherche autour du lieu en km. Valeur par défaut 30. |
| `romes`           | Optionnel. Une liste de codes romes séparés par des virgules.<br/> Ex : `A1021                                                                                                                        | F1065,F1066,F1067`<br/> Maximum 3 romes. Valeur par défaut `null` |
| `lat`             | Optionnel. Coordonnée géographique en degrés décimaux (float)<br/> Valeur par défaut `null`<br/> La partie lattitude des coordonnées gps.                                                             |
| `lon`             | Optionnel. Coordonnée géographique en degrés décimaux (float)<br/> Valeur par défaut `null`<br/> La partie longitude des coordonnées gps.                                                             |
| `caller`          | **Obligatoire**. L'identification du site appelant<br/> A fixer lors de la mise en place avec l’équipe de Labonnealternance.                                                                          |
| `return_uri`      | Optionnel. Valeur par défaut `/`<br/> L'uri de retour qui sera notifiée au site appelant.                                                                                                             |
| `return_logo_url` | Optionnel. Valeur par défaut : logo du site Labonnealternance.pole-emploi.fr<br/> L'url du logo du site vers lequel l'utilisateur revient en cliquant sur le bouton de retour dans Labonnealternance. |

Si **lat, lon** et **romes** sont correctement renseignés une recherche sera lancée automatiquement en utilisant ces critères. Si radius est correctement renseigné il sera utilisé comme critère de la recherche.

### Bouton de retour

Cliquer sur le logo en haut du formulaire ou d’une liste de résultat permet de signaler à la page appelante une instruction de changement de page.

Si vous ne codez rien cette fonctionnalité n’a pas d’effet.

Pour bénéficier du bouton de retour vous devez ajouter un listener pour l'API postMessage de javascript et coder l’action de navigation :

```
window.addEventListener('message',function(e){
/*Remplacer par votre code pour gérer la navigation vers la page de votre site correspondante aux paramètres transmis par Labonnealternance dans le message*/

console.log("Type du message goToPage ", e.data.type);
console.log("URI de la page de redirection ", e.data.page);
});
```

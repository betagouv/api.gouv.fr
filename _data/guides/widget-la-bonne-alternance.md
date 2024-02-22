---
title: Installer le widget d'exposition des opportunités d'emploi et/ou de formation en alternance sur son site
tagline: Intégrer le widget La bonne alternance sur votre site en quelques minutes.
tags:  widget, La bonne alternance, apprentissage, alternance, emploi, formation, jobboard, candidat
image: code.jpg
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
api:
  - API La bonne alternance
---

Voici un aperçu du widget La bonne alternance. Il permet d'exposer directement sur votre site tout ou partie de l’offre de formation et d’emploi en alternance et permet à vos utilisateurs d’entrer en contact avec les organismes de formation ainsi que les entreprises issues de <External href="/les-api/api-la-bonne-alternance">l'API La bonne alternance</External>

<iframe style="height: 700px; width: 380px;max-width: 100%;margin: auto;display: block;" src="https://labonnealternance.apprentissage.beta.gouv.fr/recherche-apprentissage?radius=60&romes=F1702,F1705,F1701&scope=all&lat=47&lon=2.2&caller=ID_service_appelant_labonnealternance&return_uri=/&return_logo_url=https://api.gouv.fr/images/api-logo/dinum.png" />

## Comment intégrer le widget ?

Utilisez le code suivant au sein d’une balise HTML, en remplaçant les valeurs des paramètres comme indiqué ci-dessous :
```
<iframe style="height: 660px; width: 360px;max-width: 100%;margin: auto;display: block;" src="https://labonnealternance.apprentissage.beta.gouv.fr/{perimetre}?radius={rayon}&romes={romes}&scope=all&lat={latitude}&lon={longitude}&caller={caller}&return_uri=/&return_logo_url={return_logo_url}" />
```

- **perimètre (obligatoire)**
  - remplacer `{perimetre}` par `recherche-apprentissage` pour récupérer les formations et opportunités d’emploi en alternance
  - remplacer `{perimetre}` par `recherche-emploi` pour récupérer uniquement les opportunités d’emploi en alternance
  - remplacer `{perimetre}` par `recherche-apprentissage-formation` pour récupérer uniquement les formations en apprentissage
- **caller (obligatoire) **: le nom de votre établissement (exemple : `Parcoursup`, `1jeune1solution`, …)
- **radius (facultatif)** : Rayon de recherche autour du lieu en km. Sa valeur par défaut est 30. Si elle vous convient, vous pouvez supprimer la partie suivante de l’exemple `radius={rayon}&`. Si vous souhaitez instaurer une autre valeur, remplacez `{rayon}` par une des 4 valeurs suivantes `10 | 30 | 60 | 100`.
- **romes (facultatif) **: Métier(s) sur le(s)quel(s) vous souhaitez restreindre la recherche. Si vous ne souhaitez pas restreindre la liste des métiers, vous pouvez supprimer la partie suivante de l’exemple `&romes={romes}`. Si vous souhaitez instaurer une autre valeur, remplacez `{romes}` par une liste de maximum 20 codes romes séparés par des virgules. Exemple : `A1021 | F1065,F1066,F1067`
- **lat (facultatif)** : Latitude géographique en degrés décimaux (float). Sa valeur par défaut est `null`
- **lon (facultatif)** : Longitude géographique en degrés décimaux (float). Sa valeur par défaut est `null`
- **return_uri (facultatif)** : L'uri de retour qui sera notifiée au site appelant. Sa valeur par défaut est `/`
- **return_logo_url (facultatif)** : L'url du logo du site vers lequel l'utilisateur revient en cliquant sur le bouton de retour. Sa valeur par défaut correspond au logo du site La bonne alternance. Exemple de valeur : `https://api.gouv.fr/images/api-logo/dinum.png`

Vous pouvez utilisez l’outil suivant pour tester les différentes versions possibles du widget :

<Button href="https://labonnealternance.apprentissage.beta.gouv.fr/test-widget">Tester le widget</Button>

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

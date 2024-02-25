---
title: Exposez tout ou partie de l'offre de formation et d'emploi en alternance
tagline: Intégrer le widget La bonne alternance sur votre site en quelques minutes.
tags:  emploi, formation, alternance, apprentissage, candidat, jobboard, widget
image: code.jpg
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
api:
  - API La bonne alternance
---

Le widget La bonne alternance permet d'afficher directement sur votre site les formations et entreprises qui accueillent des alternants en interrogeant les données de <External href="/les-api/api-la-bonne-alternance">l'API La bonne alternance</External>.
Disponible sous différents formats, en voici un aperçu :

<iframe style="height: 700px; width: 450px;max-width: 100%;margin: auto;display: block;" src="https://labonnealternance.apprentissage.beta.gouv.fr/recherche-apprentissage?radius=60&romes=F1702,F1705,F1701&scope=all&lat=47&lon=2.2&caller=ID_service_appelant_labonnealternance&return_uri=/&return_logo_url=https://api.gouv.fr/images/api-logo/dinum.png" />

## Comment intégrer le widget ?

Utilisez le code suivant au sein d’une balise HTML, en remplaçant les valeurs des paramètres comme indiqué ci-dessous :

```
<iframe style="height: 660px; width: 360px;max-width: 100%;margin: auto;display: block;" src="https://labonnealternance.apprentissage.beta.gouv.fr/{perimetre}?radius={rayon}&romes={romes}&scope=all&lat={latitude}&lon={longitude}&caller={caller}&return_uri=/&return_logo_url={return_logo_url}" />
```
- **perimètre (obligatoire)** : remplacer _{perimetre}_ par _recherche-apprentissage_ pour récupérer les formations et opportunités d’emploi en alternance  
Remplacer _{perimetre}_ par _recherche-emploi_ pour récupérer uniquement les opportunités d’emploi en alternance  
Remplacer _{perimetre}_ par _recherche-apprentissage-formation_ pour récupérer uniquement les formations en apprentissage
- **caller (obligatoire) **: le nom de votre établissement (ex : _Parcoursup_, _1jeune1solution_, …)
- **radius (facultatif)** : Rayon de recherche autour du lieu en km. Sa valeur par défaut est 30. Si elle vous convient, vous pouvez supprimer la partie suivante de l’exemple _radius={rayon}&_. Si vous souhaitez instaurer une autre valeur, remplacez _{rayon}_ par une des 4 valeurs suivantes : _10 | 30 | 60 | 100_.
- **romes (facultatif)**
Métier(s) sur le(s)quel(s) vous souhaitez restreindre la recherche. Si vous ne souhaitez pas restreindre la liste des métiers, vous pouvez supprimer la partie suivante de l’exemple _&romes={romes}_. Si vous souhaitez instaurer une autre valeur, remplacez _{romes}_ par une liste de maximum 20 codes romes séparés par des virgules. Exemple : _A1021 | F1065,F1066,F1067_
- **lat (facultatif)**
Latitude géographique en degrés décimaux (float). Sa valeur par défaut est _null_
- **lon (facultatif)**
Longitude géographique en degrés décimaux (float). Sa valeur par défaut est _null_
- **return_uri (facultatif)**
L'uri de retour qui sera notifiée au site appelant. Sa valeur par défaut est _/_
- **return_logo_url (facultatif)**
L'url du logo du site vers lequel l'utilisateur revient en cliquant sur le bouton de retour. Sa valeur par défaut correspond au logo du site La bonne alternance. Exemple de valeur : _https://api.gouv.fr/images/api-logo/dinum.png_

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

---
title: API Alternance
tagline: Facilitez la mise en relation des candidats à l’alternance avec les entreprises et organismes de formation. 
external_site: https://labonnealternance.pole-emploi.fr/
producer: dinum
is_open: 1 # -1 means API not open
partners:
  - pole-emploi
  - Mission interministérielle pour l'apprentissage
keywords:
  - apprentissage
  - widget
  - alternance
  - entreprise
  - emploi
  - offre
contact_link: labonnealternance@apprentissage.beta.gouv.fr
doc_tech_link: https://labonnealternance.apprentissage.beta.gouv.fr/api-docs/swagger.json
themes:
  - Emploi
last_update: 14/12/2020
content_intro: |
  L’API Alternance a vocation à faciliter la mise en relation des candidats à l’alternance avec les entreprises accueillant des alternants et les CFA.
  Elle permet ainsi d’exposer et de recueillir les données des deux principales composantes de l'alternance : la formation et l'emploi. 
  L’échange de données est possible à partir de trois services proposés par La Bonne Alternance, dans une approche complémentaire. 
  
  Chacun de ces services peut-être appelé de manière indépendante : 
  
  - **La Bonne Alternance** qui agrège et diffuse l’offre de formation en apprentissage, l’offre d’emploi en alternance et identifie les entreprises susceptibles de recruter en alternance ;
  - **Matcha** qui facilite le dépôt, la gestion et la multidiffusion d’offres d’emploi en alternance pour les entreprises et les organismes de formation 
  - **Je candidate** qui simplifie la prise de contact entre un candidat à l’alternance et une entreprise qui recrute en alternance ;
  - **RDV Apprentissage** qui simplifie la prise de contact entre un candidat à l’alternance et un organisme de formation en apprentissage.

  ## A quoi sert l'API Alternance ?

  En tant qu’opérateur public ou privé traitant des questions d’orientation, de formation, ou d’emploi en alternance, vous souhaitez enrichir vos services en récupérant tout ou partie des données des formations en apprentissage, des offres d’emploi en alternance et des entreprises présentant un fort potentiel de recrutement en alternance (marché caché) ?

  **👉 Le service La Bonne Alternance est fait pour vous !** [En savoir plus](#service-la-bonne-alternance)

  Vous êtes un OPCO, un organisme de formation ou tout autre acteur accompagnant des entreprises ? Vous souhaitez proposer un service simplifié de dépôt d’offres en alternance à vos entreprises partenaires, tout en facilitant la diffusion et le suivi de leurs offres ?

  **👉 Le service Matcha est fait pour vous !** [En savoir plus](#service-matcha)

  Vous exposez des entreprises qui recrutent en alternance sur votre site internet ? Vous souhaitez permettre aux jeunes de candidater en quelques clics auprès de ces entreprises ? 

  **👉 Le service Je candidate est fait pour vous !** [En savoir plus](#service-je-candidate)

  Vous exposez des formations en alternance sur votre site internet ? Vous souhaitez permettre aux jeunes de prendre un premier contact avec les organismes proposant ces formations ? 


  **👉 Le service Rendez-vous apprentissage est fait pour vous !** [En savoir plus](#service-rendez-vous-apprentissage)

---
### Service La Bonne Alternance

#### Origine des données

|Donnée                       |Origine                                                                                   |
|---------------------------- | -----------------------------------------------------------------------------------------|
|Formations en apprentissage  |Les données sont alimentées par le [catalogue des formations](https://catalogue.apprentissage.beta.gouv.fr/) en apprentissage. Ce service, développé par la mission interministérielle pour l’apprentissage, permet les contrôles et enrichissements des informations collectées par les Carif-Oref. *Source “formations” dans l’API*
|Offres d’emploi en alternance (Pôle emploi et partenaires)   |Les données sont alimentées par l’API Offres d’emploi de Pôle emploi, qui agrège les offres déposées sur Pôle emploi et les sites de [ses partenaires](https://www.pole-emploi.fr/candidat/vos-services-en-ligne/des-partenaires-pour-vous-propos.html). *Source “offres” dans l’API*|
|Offres d’emploi en alternance (Matcha)|Les données sont collectées à partir du formulaire simplifié de recueil de besoins en recrutement de La Bonne Alternance nommé “Matcha”. *Source “Matcha” dans l’API*|
|Entreprises susceptibles de recruter en alternance| Les données proviennent de l’algorithme prédictif de La Bonne Alternance. Chaque mois, il identifie une liste restreinte d’entreprises à fort potentiel d’embauche, afin d’encourager et de faciliter les démarches de candidatures spontanées des candidats. *Source “lba” dans l’API* |

#### Formats disponibles

<details>
  <summary>API</summary>
L’ensemble des données présentées ci-dessus est accessible en tout ou partie via l’API La Bonne Alternance.
Ce format permet une intégration personnalisée des données sur l’interface de votre choix.
Selon la route d’API utilisée, vous pouvez récupérer les formations et/ou les entreprises en fonction d’un lieu et d’un ou plusieurs métiers donnés.

🔎 Exemple d’exploitation de l’API sur [**1jeune1solution.**](https://www.1jeune1solution.gouv.fr/apprentissage?commune=75101&distance=30&etudes=all&metier=Boulangerie,%20p%C3%A2tisserie,%20chocolaterie&type=company&page=1)

📄 Comment exploiter et tester l’API ? [**Consulter cette documentation.**](https://api.gouv.fr/documentation/api-la-bonne-alternance)

</details>
<br>
<details>
  <summary>Widget</summary>

Les données présentées ci-dessus sont également disponibles sous forme de widget. 
Ce format permet une intégration rapide et simplifiée sur l’interface de votre choix.
Le widget est disponible en marque blanche et est proposé en plusieurs tailles. Par ailleurs, différents filtres peuvent être appliqués aux données qu’il restitue.

🔎 Exemple d’exploitation du widget sur [**jassuremonfutur**](https://www.jassuremonfutur.fr/annuaire-formation-assurance), en lançant une recherche “Chargé de clientèle” à “Paris”.

📄 Comment exploiter le widget ? [Consultez cette documentation.](https://api.gouv.fr/guides/widget-la-bonne-alternance)

👉 Comment tester le widget ? [Consultez cette page.](https://labonnealternance.apprentissage.beta.gouv.fr/test-widget)

</details>

### Service Matcha

#### Formats disponibles

<details>
  <summary>API</summary>

Matcha dispose d’une API permettant d’accéder à l’ensemble des fonctionnalités proposées originalement sur le formulaire, vous permettant ainsi de configurer notre formulaire selon vos usages et besoins.

📄 Comment exploiter l’API ? [Consultez cette documentation.](https://matcha.apprentissage.beta.gouv.fr/api/v1/docs/)

</details>
<br>
<details>
  <summary>Widget</summary>

Pour intégrer facilement le formulaire simplifié de dépôt d’offres.

🔎 Exemple d’exploitation du widget sur [**l’OPCO AKTO**](https://www.akto.fr/deposer-une-offre-demploi-en-alternance/)

**Comment exploiter le widget ?**

👉 Utilisez le code suivant au sein d’une balise HTML :

```html
<iframe loading="lazy" src="https://matcha.apprentissage.beta.gouv.fr/widget/{ORIGINE}/" width="100%" height="800" frameborder="0" style="max-width: 100%;"></iframe>
```
--> en remplaçant "ORIGINE" par le nom de votre établissement.

👉 Comment tester le widget ? Consultez [cette page.](https://matcha-recette.apprentissage.beta.gouv.fr/widget/matcha)

</details>

### Service Je candidate

#### Format disponible

<details>
  <summary>Widget</summary>

Le service de candidature en ligne Je candidate est aujourd’hui déployé au sein du widget du service La Bonne Alternance.

👉 Pour en savoir plus, [contactez l'équipe](mailto:labonnealternance@apprentissage.beta.gouv.fr)

</details>


### Service Rendez-vous apprentissage

#### Format disponible

<details>
  <summary>Widget</summary>

Pour proposer le service de prise de rendez-vous aux utilisateurs de votre site internet en intégrant le widget Rendez-vous apprentissage.

🔎 Exemple d’exploitation du widget [**sur le site de l’Onisep.**](https://www.onisep.fr/Ressources/Univers-Lycee/Lycees/Ile-de-France/Essonne/cfa-faculte-des-metiers-de-l-essonne-site-d-evry/cap-esthetique-cosmetique-parfumerie)

📄 Comment exploiter et tester le widget ? [**Consultez cette documentation.**](https://rdv-cfa.apprentissage.beta.gouv.fr/widget/tutorial)

</details>

## Réutilisation

L’exploitation de ces données engage la responsabilité du réutilisateur.

## L'équipe

Ces API et widgets sont produits par l'équipe de la mission interministérielle pour l'apprentissage, au sein de la DINUM. Pôle emploi est partenaire du développement de certains d'entre eux.
Pour en savoir plus, [consultez la présentation du service La Bonne Alternance.](https://beta.gouv.fr/startups/la-bonne-alternance.html)

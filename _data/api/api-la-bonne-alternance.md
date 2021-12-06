---
title: API Alternance
tagline: Accédez aux données liées aux formations en apprentissage, aux offres d’emploi en alternance et aux entreprises susceptibles de recruter en alternance.
external_site: https://labonnealternance.pole-emploi.fr/
producer: dinum
is_open: 1 # -1 means API not open
partners:
  - Pôle emploi
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
  L’API Alternance permet d’exposer les deux composantes de l'alternance : la **formation** et l'**emploi**. Ce service permet d’exposer également les entreprises susceptibles de recruter sur l'ensemble du périmètre Alternance. Le site <External href="https://labonnealternance.pole-emploi.fr?utm_medium=mweb&utm_source=apigouvfr&utm_campaign=pagelba_apigouvfr">La Bonne Alternance</External> donne un aperçu visuel de ces données.

  En bref, l'API Alternance vous permet d'exposer : 

  - une carte et une liste de résultats de formations en apprentissage et/ou d’emplois en alternance,
  - un formulaire de recueil d’offres d’emploi en alternance,
  - un formulaire de prise de contact auprès d’un organisme de formation.


  ### A quoi sert l'API Alternance ?

  L’API Alternance sert à offrir une information complète et centralisée aux publics en recherche d’une formation en apprentissage et/ou d’un contrat en alternance.

  En tant qu’opérateur public ou privé traitant des questions d’orientation, de formation ou d’emploi en général, et d’alternance (apprentissage, professionnalisation) en particulier, il est possible de récupérer indépendamment ou simultanément les données :

  - formations en apprentissage
  - offres d’emploi en alternance
  - entreprises présentant un fort potentiel de recrutement en alternance

  Selon l’API sélectionnée, ces données sont récupérables pour :

  - un secteur géographique (point géographique, département, région ou France entière)
  - un secteur professionnel (domaine ou ensemble de domaines professionnels ou tous domaines professionnels)
  - un métier ou ensemble de métiers définis
---

### Données accessibles dans l'API

| Nom                                                | Description                                                                                                                                                                                                                            |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Formations en apprentissage                        | Les données sont alimentées en flux par le Réseau Carif-Oref et consolidées dans un catalogue produit par la Mission Nationale Apprentissage (<External href="https://catalogue.apprentissage.beta.gouv.fr/">API catalogue</External>) |
| Offres d’emploi en alternance                   | Les données sont collectées par l’API Offres d’emploi de Pôle emploi, qui agrège également des offres déposées par des partenaires de Pôle emploi.                                                                                     |
| Offres d’emploi en alternance (Matcha)          | Les données sont collectées à partir d'un formulaire de reccueil simplifié                                                                                      |
| Entreprises susceptibles de recruter en alternance | Les données proviennent d’un algorithme prédictif qui analyse 6 années de recrutements en alternance                                                                                                                                   |
| Entreprises à fort potentiel de recrutement        | Les données proviennent d’un algorithme prédictif qui analyse les recrutements en CDI et CDD de plus de 30 jours des 6 années passées (<External href="https://api.gouv.fr/les-api/LaBonneBoite">API La Bonne Boite</External>)        |

### Descriptif et données de chaque API

Nos API normalisent les données sources pour restituer en un même format, soit :

1. les formations en apprentissage pour un métier, un ensemble de métiers, un domaine professionnel, un ensemble de domaines professionnels autour d'un point géographique
2. les formations en apprentissage dans un département, une région ou dans la France entière pour un métier, un ensemble de métiers, un domaine professionnel ou un ensemble de domaines professionnels
3. les entreprises recrutant ou susceptibles de recruter en alternance référencées par les APIs de Pôle emploi, pour un métier ou un ensemble de métiers, autour d'un point géographique
4. les entreprises recrutant en alternance qui ont déposé une offre d’emploi via le formulaire de dépôt simplifié, pour un ensemble de métiers, autour d’un point géographique
5. les formations en apprentissage et les entreprises recrutant ou susceptibles de recruter en alternance référencées par les APIs de Pôle emploi, pour un métier ou un ensemble de métiers, autour d'un point géographique.

### Autres formats de données disponibles

Les données récupérables par l'API Alternance peuvent aussi être affichées sous forme de widget, ce qui permet la prise en charge complète de l’affichage des données pour l’utilisateur. Ce widget s’intègre aux sites déjà existants, il est disponible en plusieurs tailles et <External href="/guides/widget-la-bonne-alternance">intégrable en marque blanche</External>.

Deux autres widget sont également disponibles:

- **Widget Matcha** : il    permet à une plateforme d’intégrer un formulaire de saisie pour un employeur qui souhaite diffuser une offre ; cette offre est redistribuée sur le site web La Bonne Alternance et sur d’autres sites grâce à l’API jobs mentionnée ci-dessus. 
🔎 [Exemple d’intégration ici](https://www.akto.fr/deposer-une-offre-demploi-en-alternance/)
- **Widget Rendez-vous apprentissage** : il permet à une plateforme d’intégrer un bouton qui ouvre un formulaire de prise de contact auprès d’un organisme de formation. 
🔎 [Exemple d’intégration ici](https://www.onisep.fr/Ressources/Univers-Lycee/Lycees/Ile-de-France/Essonne/cfa-faculte-des-metiers-de-l-essonne-site-d-evry/cap-esthetique-cosmetique-parfumerie)

### Réutilisation

La réutilisation de ces données engage la responsabilité du réutilisateur.

### L'équipe

Les API et widgets sont produits par la DINUM, et pour certains en partenariat avec pole-emploi.

Pour en savoir plus, consultez la <External href="https://mission-apprentissage.gitbook.io/general/">présentation de l'équipe</External>.

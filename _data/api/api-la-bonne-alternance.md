---
title: API La Bonne Alternance
tagline: Accédez aux données liées aux formations en apprentissage, aux offres d’emploi en apprentissage et aux entreprises susceptibles de recruter en apprentissage.
external_site: https://labonnealternance.pole-emploi.fr/
producer: dinum
is_open: 1 # -1 means API not open
partners:
  - Pôle-Emploi
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
  L’API La bonne Alternance permettent d’exposer les deux composantes de l'apprentissage : la **formation** et l'**emploi**. Ce service permet d’exposer également les entreprises susceptibles de recruter sur l'ensemble du périmètre Alternance. Le site <External href="https://labonnealternance.pole-emploi.fr/">La Bonne Alternance</External> donne un aperçu visuel de ces données.

  ### A quoi sert l'API La Bonne Alternance ?

  L’API La Bonne Alternance servent à offrir une information complète et centralisée aux publics en recherche d’une formation en apprentissage et/ou d’un contrat en alternance.

  En tant qu’opérateur public ou privé traitant des questions d’orientation, de formation ou d’emploi en général, et d’alternance (apprentissage, professionnalisation) en particulier, il est possible de récupérer indépendamment ou simultanément les données :

  - formations en apprentissage
  - offres d’emploi en apprentissage
  - entreprises présentant un fort potentiel de recrutement en alternance

  Selon l’API sélectionnée, ces données sont récupérables pour :

  - un secteur géographique (point géographique, département, région ou France entière)
  - un secteur professionnel (domaine ou ensemble de domaines professionnels ou tous domaines professionnels)
  - un métier ou ensemble de métiers définis
---

### Données accessibles dans l'API

| Nom                                                | Description                                                                                                                                                                                                                     |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Formations en apprentissage                        | Les données sont alimentées en flux par le Réseau Carif-Oref et consolidées dans un catalogue produit par la Mission Nationale Apprentissage (<External href="https://mna-admin-prod.netlify.app/">API catalogue</External>)    |
| Offres d’emploi en apprentissage                   | Les données sont collectées par l’API Offres d’emploi de Pôle emploi, qui agrège également des offres déposées par des partenaires de Pôle emploi.                                                                              |
| Entreprises susceptibles de recruter en alternance | Les données proviennent d’un algorithme prédictif qui analyse 6 années de recrutements en alternance                                                                                                                            |
| Entreprises à fort potentiel de recrutement        | Les données proviennent d’un algorithme prédictif qui analyse les recrutements en CDI et CDD de plus de 30 jours des 6 années passées (<External href="https://api.gouv.fr/les-api/LaBonneBoite">API La Bonne Boite</External>) |

### Descriptif et données de chaque API

Nos API normalisent les données sources pour restituer en un même format, soit :

1. les formations en apprentissage pour un métier, un ensemble de métiers, un domaine professionnel, un ensemble de domaines professionnels autour d'un point géographique
2. les formations en apprentissage dans un département, une région ou dans la France entière pour un métier, un ensemble de métiers, un domaine professionnel ou un ensemble de domaines professionnels
3. les entreprises recrutant ou susceptibles de recruter en alternance référencées par les APIs de Pôle emploi, pour un métier ou un ensemble de métiers, autour d'un point géographique
4. les formations en apprentissage et les entreprises recrutant ou susceptibles de recruter en alternance référencées par les APIs de Pôle emploi, pour un métier ou un ensemble de métiers, autour d'un point géographique.

### Autre format de données disponible

Les données récupérables par l'API La Bonne Alternance peuvent aussi être affichées sous forme de widget, ce qui permet la prise en charge complète de l’affichage des données pour l’utilisateur. Ce widget s’intègre aux sites déjà existants, il est disponible en plusieurs tailles et <External href="/guides/widget-la-bonne-alternance">intégrable en marque blanche</External>.

### Réutilisation

La réutilisation de ces données engage la responsabilité du réutilisateur.

### L'équipe

L'API est produite par la <External href="https://beta.gouv.fr/startups/apprentissage.html">Mission Nationale Apprentissage</External>, qui opère au sein de la DINUM

Pour en savoir plus, consultez le <External href="https://mission-apprentissage.gitbook.io/general/">présentation de l'équipe</External>.

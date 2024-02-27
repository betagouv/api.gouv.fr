---
title: API Alternance
tagline: Facilitez la mise en relation des candidats à l’alternance avec les entreprises et organismes de formation. 
external_site: https://labonnealternance.apprentissage.beta.gouv.fr/
producer: dinum
is_open: 1 # -1 means API not open
partners:
  - France Travail
  - Mission interministérielle pour l'apprentissage
  - Le Réseau des Carif-Oref
keywords:
  - apprentissage
  - widget
  - alternance
  - entreprise
  - emploi
  - offre
contact_link: labonnealternance@apprentissage.beta.gouv.fr
doc_tech_link: https://labonnealternance-recette.apprentissage.beta.gouv.fr/api/docs/json
themes:
  - Emploi
rate_limiting_resume: de 5  à 20 appels / seconde
rate_limiting_description: |
  Les quotas diffèrent en fonction des routes
stats_detail_resume: Les statistiques sont disponibles en temps réel
stats_detail_description: |
  Accédez au suivi des consommations de l'API
stats_detail_link: http://labonnealternance.apprentissage.beta.gouv.fr/metabase/public/dashboard/ce3c7892-0931-46a6-85c5-c768716aff04
uptime: 98.82
monitoring_link: https://mission-apprentissage.github.io/upptime/history/la-bonne-alternance-api
last_update: 14/12/2020
content_intro: |
  L’API La bonne alternance rend accessible à tous le marché de l’emploi et de la formation en alternance.
  Elle expose l’offre de formation en apprentissage, l’offre d’emploi en alternance et identifie les entreprises susceptibles de recruter en alternance.
  Utilisée dans sa globalité, elle permet la mise en relation des candidats à l’alternance avec des entreprises accueillant des alternants d’une part et/ou avec des organismes de formation en alternance d’autre part.

  ## Pourquoi utiliser l'API Alternance ?

  **Vous souhaitez exposer tout ou partie de l’offre de formation et d’emploi en alternance auprès de vos utilisateurs, et leur permettre d’y candidater directement depuis votre site ?**

  Notre API centralise d’une part l’ensemble de l’offre de formation en apprentissage disponible sur le territoire national, soit environ 50 000 formations, mises à jour en temps réel.
  D’autre part les offres d’emploi en alternance, en provenance de plus d’une centaine de sites (France travail, Monster, Indeed, 1jeune1solution, La bonne alternance, …), soit environ 200 000 offres par an, mises à jour en temps réel.
  Puis, une liste ciblée et exclusive d’entreprises auprès desquelles adresser des candidatures spontanées, identifiées grâce à l’analyse de diverses données publiques, soit environ 300 000 opportunités supplémentaires.

  Par ailleurs, l’API Alternance permet à vos utilisateurs de candidater directement à ces opportunités d’emploi et de formation, sans quitter votre site, grâce à un flux d’échange de données sécurisé.

  [🚀 C'est parti](#pour-exposer-tout-ou-partie-de-l’offre-de-formation-et-d’emploi-en-alternance-et-permettre-a-vos-utilisateurs-d’y-candidater)

  **Vous souhaitez mettre en avant des opportunités d’emploi en lien avec les formations que vous exposez ?**

  A partir de codes de formation (RNCP), ou de codes d’emploi (ROME), l’API Alternance vous restitue les opportunités d’emploi et/ou de formation associés, avec la possibilité de cibler un périmètre géographique restreint.
  Vous pouvez ainsi facilement lier des emplois à des formations en alternance. 

  [🚀 C'est parti](#pour-mettre-en-avant-des-opportunites-d’emploi-en-lien-avec-les-formations-que-vous-exposez)

  **Vous souhaitez offrir à vos utilisateurs la possibilité de contacter des entreprises et des centres de formation directement depuis votre site ?**

  Afin de fluidifier le parcours de vos utilisateurs, l'API La bonne alternance vous permet de transmettre directement aux recruteurs et organismes de formations les candidatures et questions de vos usagers, sans que ces derniers n’aient à quitter votre site.

  [🚀 C'est parti](#pour-offrir-a-vos-utilisateurs-la-possibilite-de-contacter-des-entreprises-et-des-centres-de-formation-directement-depuis-votre-site)

  **Vous souhaitez collecter et/ou diffuser vos propres offres d’emploi ?**

  Le service La bonne alternance vous propose : 
  - Un formulaire de collecte d’offres clé en main, accessible en marque blanche sous format widget ou API. A l'aide d’un format simplifié, il permet de déposer une offre en moins de 2 minutes en générant une description automatique du poste.
  - Une API vous permettant de partager les offres présentes sur votre plateforme, afin de les diffuser à grande échelle sur le site La bonne alternance ainsi que ses sites partenaires (1jeune1solution, France travail, Parcoursup, …)

  Lorsqu’une offre est partagée à La bonne alternance, nous proposons également de la diffuser aux centres de formation en alternance formant sur ce métier et situés dans la même zone géographique que l’entreprise recrutant. Ce service facultatif de mise en relation permet d’accélérer le recrutement et proposer des candidats aux entreprises.
  
  Ce service s’adresse également aux organismes de formation qui souhaitent diffuser des offres d’emploi pour le compte d’entreprises partenaires.

  [🚀 C'est parti](#pour-collecter-et/ou-diffuser-vos-propres-offres-d’emploi)
---
## Comment utiliser l'API Alternance ?
L’API Alternance se découpe en différentes routes, toutes documentées [ici](https://api.gouv.fr/documentation/api-la-bonne-alternance).

### Pour exposer tout ou partie de l’offre de formation et d’emploi en alternance et permettre à vos utilisateurs d’y candidater
**Utiliser l’API pour une intégration personnalisée**
1. Les routes GET /v1/jobs* vous permettent de récupérer les données liées aux opportunités d’emploi en alternance
2. Les routes GET /v1/formations* vous permettent de récupérer les données liées aux formations en apprentissage
3. La route GET /v1/jobsEtFormations vous permet de récupérer les données liées aux opportunités d’emploi en alternance ainsi qu’aux formations en apprentissage
L’ensemble de ces routes proposent des paramètres de filtres par métier, niveau de diplôme, rayon de recherche et zone géographique.
4. La route POST /v1/application vous permet d’envoyer la candidature d’un utilisateur à une entreprise liée aux opportunités d’emploi en alternance connues de La bonne alternance
5. La route POST /appointment-request/context/create vous permet d’envoyer la prise de contact d’un utilisateur à un centre de formation proposant une formation connue de La bonne alternance.

🔎 Exemple d’exploitation de l’API sur [1jeune1solution](https://www.1jeune1solution.gouv.fr/apprentissage?commune=75101&distance=30&etudes=all&metier=Boulangerie,%20p%C3%A2tisserie,%20chocolaterie&type=company&page=1).

📄 Comment exploiter et tester l’API ? Consulter [cette documentation](https://api.gouv.fr/documentation/api-la-bonne-alternance).

**Utiliser le widget pour une intégration simple et rapide**

Les données présentées liées aux opportunités d’emploi en alternance ainsi qu’aux formations en apprentissage sont également disponibles sous forme de widget. 
Le widget est disponible en marque blanche et est proposé en plusieurs tailles. Par ailleurs, différents filtres peuvent être appliqués aux données qu’il restitue.

🔎 Exemple d’exploitation du widget sur [jassuremonfutur](https://www.jassuremonfutur.fr/annuaire-formation-assurance), en lançant une recherche “Chargé de clientèle” à “Paris”.

📄 Comment exploiter le widget ? Consultez [cette documentation](https://api.gouv.fr/guides/widget-la-bonne-alternance).

👉 Comment tester le widget ? Consultez [cette page](https://labonnealternance.apprentissage.beta.gouv.fr/test-widget). 

D’où proviennent les données exposées dans ces routes ?
- Les formations en apprentissage sont alimentées par le catalogue des formations en apprentissage du Réseau des Carif Oref. 
_Source “formations” dans l’API_
- Les offres d’emploi en alternance provenant de France travail et ses partenaires sont alimentées par l’API Offres d’emploi de France travail, qui agrège les offres déposées sur France travail et les sites de ses partenaires.
_Source “offres” dans l’API_
- Les offres d’emploi en alternance provenant de La bonne alternance et ses partenaires sont collectées à partir du formulaire simplifié de collecte d’offres La bonne alternance ainsi que via l’API de partage d’offres
_Source “matcha” dans l’API_
- Les entreprises susceptibles de recruter en alternance proviennent de l’algorithme prédictif de La bonne alternance. Chaque mois, il identifie une liste restreinte d’entreprises à fort potentiel d’embauche, afin d’encourager et de faciliter les démarches de candidatures spontanées des candidats.
_Source “lba” dans l’API_

### Pour mettre en avant des opportunités d’emploi en lien avec les formations que vous exposez
- La route GET /v1/formations vous permet notamment de récupérer les opportunités de formations en lien avec des métiers (ROME) donnés
- La route GET /v1/jobs vous permet notamment de récupérer les opportunités d’emplois en lien avec des formations (RNCP) données

### Pour offrir à vos utilisateurs la possibilité de contacter des entreprises et des centres de formation directement depuis votre site
- La route POST /v1/application vous permet de transmettre directement aux recruteurs les candidatures de vos usagers.
Pour cela, elle requiert seulement la transmission des coordonnées ainsi que du CV du candidat. Un message de motivation, à destination du recruteur, peut également être transmis de manière facultative. La candidature est ensuite envoyée au recruteur par email.
- La route POST /appointment-request/contexte/create vous permet de transmettre directement aux établissements de formation les demandes de vos usagers.
Pour cela, elle requiert seulement la transmission d’identifiants de la formation. Ensuite, un formulaire de contact vous est mis à disposition via une URL dédiée où le candidat pourra saisir ses coordonnées de contact ainsi qu’un texte détaillant les sujets qu’il souhaite aborder avec l’organisme de formation. La demande est ensuite envoyée à l’organisme de formation par email.

### Pour collecter et/ou diffuser vos propres offres d’emploi
**Utiliser l’API pour une intégration personnalisée**

Les routes POST /v1/jobs* vous permettent de diffuser vos offres d’emploi en alternance afin d’augmenter leur visibilité.
L’ordre à suivre est le suivant
1. Utiliser la route POST /v1/jobs/establishment pour créer l’établissement qui diffusera des offres (à l‘aide d’un couple email - SIRET)
2. Utiliser la route POST /v1/jobs/{establishmentId}, avec l’id de l’établissement créé afin de diffuser une offre d’emploi liée à cet établissement
3. Utiliser les routes POST /v1/jobs/provided/{jobId}, /v1/jobs/canceled/{jobId} et /v1/jobs/extend/{jobId} pour mettre à jour l’état de l’offre

**Utiliser le widget pour une intégration simple et rapide**

Pour intégrer facilement le formulaire simplifié de dépôt d’offres.

🔎 Exemple d’exploitation du widget sur le [site de l'OPCO Akto](https://www.akto.fr/deposer-une-offre-demploi-en-alternance/).

📄 Comment exploiter le widget ? 

👉 Utilisez l’adresse suivante au sein d’une balise HTML

```html
<iframe loading="lazy" src="https://labonnealternance.apprentissage.beta.gouv.fr/espace-pro/widget/ORIGINE" width="100%" height="800" frameborder="0" style="max-width: 100%;"></iframe>
```
--> en remplaçant "ORIGINE" par le nom de votre établissement.

Exemple :

```html
<iframe loading="lazy" src="https://labonnealternance.apprentissage.beta.gouv.fr/espace-pro/widget/akto" width="100%" height="800" frameborder="0" style="max-width: 100%;"></iframe>
```

👉 Comment tester le widget ? Consultez [cette page](https://labonnealternance-recette.apprentissage.beta.gouv.fr/espace-pro/widget/matcha).

## Réutilisation

L’exploitation de ces données engage la responsabilité du réutilisateur.

## L'équipe

Ces API et widgets sont produits par l'équipe de la [Mission interministérielle pour l'apprentissage](https://beta.gouv.fr/incubateurs/mission-apprentissage.html), au sein de la DINUM. 
Pour en savoir plus, consultez [la présentation du service La bonne alternance.](https://beta.gouv.fr/startups/la-bonne-alternance.html)

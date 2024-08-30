---
title: Guide pratique pour la diffusion d'une API sur api.gouv.fr
tagline: Production, diffusion, critères de qualité et bonnes pratiques
tags:
image: meta.png
noindex: false # this page will appear on Google
publish: false # this page will appear on /guides page
api: # empty = this page wont appear in an API page
---

Ce guide a pour objectif de détailler les critères permettant à une API d'être référencée sur api.gouv.fr. Il décline de manière opérationnelle la [doctrine des API de l'administration](/guides/doctrine-api).

# Table des matières

- [📒 api.gouv.fr : le catalogue des API de l'Etat](#📒-api.gouv.fr-:-le-catalogue-des-api-de-l'etat)
- [📌 Standards à respecter pour qu'une API puisse être référencée](#📌-quels-sont-les-standards-a-respecter-pour-qu'une-api-puisse-etre-referencee-?)
- [👌 Quelle est la qualité de service demandée ?](#👌-quelle-est-la-qualite-de-service-demandee-?)
- [📡 Référencement sur api.gouv.fr : en pratique](#📡-referencement-sur-api.gouv.fr-:-en-pratique)
- [🔑 Gestion de l'accès à votre API](#🔑-gestion-de-l'acces-a-votre-api)

## 📒 api.gouv.fr : le catalogue des API de l'Etat

[api.gouv.fr](http://api.gouv.fr) n'exige pas un choix technique ou une architecture spécifique pour référencer une API. Il existe en revanche des standards permettant de fournir un service optimal (architecture adaptée à l'usage, documentation claire, forte disponibilité...).

Chaque API fait l'objet d'une page. Celle-ci doit être comprise par le plus grand nombre, elle décrit l'API, comment elle peut être utilisée et les données contenues. Depuis cette page, les visiteurs pourront :

- Lire la documentation fonctionnelle de l'API qui est un élément clé de son appropriation ;
- Accéder à la documentation technique (avec des swaggers), de préférence hébergée par le producteur de l'API afin de faciliter sa mise à jour ;
- Faire une demande d'habilitation à l'API (si celle-ci n'est pas en open data) ;
- Contacter l'équipe en charge de l'API pour des questions techniques à laquelle la documentation ne répond pas.

> 💡 [api.gouv.fr](http://api.gouv.fr) est donc un catalogue, qui référence les API existantes en hébergeant les documentations associées.

> **Exemple d'une documentation fonctionnelle :** [API Géo](/les-api/api-geo)

## 📌 Quels sont les standards à respecter pour qu'une API puisse être référencée ?

Bien que le référencement sur [api.gouv.fr](http://api.gouv.fr) n'exige pas de contraintes particulières, des standards d'architecture et de diffusion existent et leur respect est nécessaire pour que les API soient utilisables par le plus grand nombre de services.

### API REST : un standard recommandé et répandu

REST (pour _REpresentational State Transfer_) impose plusieurs contraintes architecturales, qui sont déterminantes pour assurer une fiabilité à l'API et lui permettre d'évoluer de manière fluide.

[En savoir plus](https://fr.wikipedia.org/wiki/Representational_state_transfer)

### Open API, documentation et swaggers

L'_Open API Specification_ décrit un ensemble de standards qui s'appliquent aux API publiques (qui ont vocation à être utilisées par des services tiers).

L'élément le plus important avec l'Open API consiste à fournir des swaggers. Il s'agit d'une documentation technique de l'API qui permet de tester les différentes manières d'appeler les données qu'elle contient.

Sur api.gouv.fr, il s'agit par exemple de la [documentation de l'API Découpage Administratif](https://api.gouv.fr/documentation/api-geo) (qui est en open data).

Le futur utilisateur de l'API est ainsi en mesure de comprendre en détail à quoi sert l'API et les données qu'elle permet de recevoir ou d'envoyer (input / output).

Les swaggers sont contenus dans un fichier YAML ou JSON, et peuvent être publiés sur une url. cette option est recommandée, afin de garantir une meilleure mise à jour sur api.gouv.fr.

Pour construire une documentation avec des swaggers, un éditeur peut être utile, comme celui-ci : [https://editor.swagger.io/](https://editor.swagger.io/)

## 👌 Quelle est la qualité de service demandée ?

### Disponibilité des API

Les API peuvent alimenter plusieurs services et de très nombreux utilisateurs finaux, c'est pourquoi il est essentiel qu'elle soit disponible à un niveau optimal.

- Le standard de qualité pour les API des administrations **vise une disponibilité de 99,9%**
- **La vitesse de réponse** doit être inférieure à 50ms.
- Les capacités techniques de l'API doivent lui permettre d'être appelée lors de **pics de consommation** (trafic variable selon les API), sa volumétrie doit donc être adaptée à son usage.

De même, ces statistiques de disponibilité et les limites (en nombre d'appels) doivent être communiquées dans la documentation de l'API.

Pour aller plus loin, retrouvez [**les différents principes de la doctrine des api dans l'administration.**](/guides/doctrine-api)

### Délais de réponse aux demandes d'accès

Pour les API demandant une habilitation, le délai de réponse aux demandes d'accès doit être inférieur à 15 jours.

L'outil d'habilitation [DataPass](https://beta.gouv.fr/startups/datapass.html) est à disposition des administrations pour dématérialiser les conventions d'accès aux données et réduire ainsi les délais de traitement (lire la section dédiée à DataPass).

## 📡 Référencement sur api.gouv.fr : en pratique

### Quels sont les prérequis pour qu'une API puisse être référencée ?

[x] L'API doit provenir d'une administration, d'un établissement public ou d'une organisation investie d'une mission de service public ;

[x] Elle doit disposer d'une documentation technique (qui décrit en détail les données en entrée et en sortie) ;

[x] L'équipe en charge de l'API doit pouvoir être contactée (via une adresse mail générique), par exemple en cas de problème technique ou d'accès ;

[x] L'API doit être documentée (Qui propose cette API ? Qui a le droit de la consommer ? À quoi sert-elle ? Comment s'en sert-on ?).

### Quelles sont les étapes pour référencer son API sur api.gouv.fr ?

Si les conditions ci-dessus sont réunies, voici les différentes étapes pour la publier sur [api.gouv.fr](http://api.gouv.fr) :

[x] Compléter le formulaire pour demander le référencement d'une API ;

<Button href="/nouvelle-api">Référencer une nouvelle API</Button>

[x] Un échange avec l'équipe API peut être proposé par la suite, pour affiner la documentation ou pour préciser le projet ;

[x] Une page test est créée par l'équipe et vous est présentée ;

[x] Si la page convient, elle est alors publiée.

### Dans le cas des bouquets d'API :

L'[API Entreprise](https://api.gouv.fr/les-api/api-entreprise) et l'[API Particulier](https://api.gouv.fr/les-api/api-particulier) concentrent des API provenant de plusieurs administrations.

✉️ Si vous estimez que votre API concerne les entreprises ou les particuliers, nous vous invitons à contacter directement notre équipe pour présenter votre API : [contact@api.gouv.fr](mailto:contact@api.gouv.fr)

> <img src="/images/guides/guide_diffusion_bouquet.png" alt= "deux bouquets d'API" style="width:500px"/>

## 🔑 Gestion de l'accès à votre API

Pour les API qui demandent une habilitation pour y avoir accès, DataPass permet de dématérialiser les conventions entre les producteurs d'API et les demandeurs. Plusieurs avantages : centraliser les demandes, fluidifier et accélérer le traitement des demandes, et sécuriser les échanges.

[Voir la présentation complète de DataPass](/resources/DataPass_presentation_new.pdf)

<details>
  <summary>**Dans le cas des API exposées avec une page dédiée**</summary>

Pour les API qui ne sont pas intégrées aux bouquets API Particulier ou API Entreprise, et qui ne sont pas FranceConnectées, un formulaire DataPass dédié doit être créé.

DataPass propose un formulaire clé en main de demande d'habilitation à une API qu'il est possible de pré-remplir, pour faciliter la gestion des demandes.

   <details>
      <summary>Que peut-on paramétrer dans DataPass ?</summary>

#### Les modèles pré-remplis :

Si l'API est prévue pour des cas d'usages précis, il est possible de les lister. Ainsi, selon le cas d'usage sélectionné par le demandeur, le formulaire sera auto-complété avec :

- Le cadre juridique qui autorise le demandeur à utiliser l'API pour ce cas d'usage (un article disponible sur légifrance par exemple)
- Les données appelées (le demandeur peut cocher ou décocher les données concernées par son cas d'usage).

#### La présence ou non de certaines rubriques :

En fonction de l'API, certaines rubriques du formulaires (RGPD, volumétrie, cadre juridique) peuvent ne pas être indispensables. Le producteur de l'API peut choisir de les conserver ou de les supprimer.

   </details>

   <details>
      <summary>Quelles sont les étapes suivantes de la gestion des demandes ?  </summary>

Une fois que le formulaire DataPass est prêt, vous pourrez [le tester de bout en bout](https://github.com/betagouv/datapass#tester-datapass).
Et lorsque l'API est publiée et ouverte aux demandes, c'est au producteur de l'API de traiter les demandes d'accès.

Lorsqu'un formulaire est complété et envoyé par un demandeur, plusieurs personnes sont notifiées du côté du producteur de l'API :

- **les instructeurs** (les personnes qui pourront valider ou refuser les demandes) ;
- **les lecteurs** (les personnes qui pourront accéder aux demandes) ;
- **l'adresse mail générique de notification** ("vous avez reçu une nouvelle demande d'habilitation à l'API").

Une fois la demande consultée, l'instructeur a trois possibilités : valider la demande, refuser la demande, ou demander une modification.

> <img src="/images/guides/guide_diffusion_datapass.png" alt= "valider une demande" style="width:700px"/>

Lorsque la demande est validée, le demandeur reçoit un e-mail, qui lui indique également que les accès techniques (token) lui seront fournis prochainement.

DataPass permet de gérer les accès juridiques (les habilitations), mais il est aussi possible de le relier aux accès techniques, pour automatiser la distribution des tokens lorsqu'une demande est validée. Cela peut se faire grâce à l'API manager du producteur de l'API : cette étape pourra être abordée lors de la conception de votre formulaire DataPass.

---

   </details>

</details>

<details>
   <summary>**Dans le cas des API qui intègrent un bouquet d'API (Particulier, Entreprise)**</summary>

Si votre API intègre directement l'API Particulier ou l'API Entreprise, la DINUM se chargera de faire évoluer le formulaire DataPass de ces API, en y intégrant la possibilité de demander accès aux données de votre API.

C'est également la DINUM qui sera garante de la validation ou du refus des demandes d'accès à votre API, hormis les cas particuliers exigeant un avis de l'administration productrice de l'API.

---

</details>

<details>
   <summary>**Dans le cas des API France Connectées**</summary>

En plus des informations qui intègrent les formulaires DataPass, les API France Connectées nécessitent :

**Les périmètres de données (scopes) :**

[x] une liste de couples clé (key) / label (transmis à l'équipe FranceConnect pour afficher le bon label à l'utilisateur qui cherche à se connecter).
À titre d'exemple voici la [liste de scopes que nous avons définis avec la DGFiP](https://github.com/betagouv/signup-front/blob/master/src/pages/DgfipPages/api-impot-particulier-common.js#L155-L371)

[x] Par ailleurs, concernant les clés de scopes, nous vous invitons à vous conformer aux [recommandations OpenID Connect](https://openid.net/specs/openid-connect-core-1_0.html#AdditionalClaims) et [JWT](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.2) officielles, à savoir utiliser des « namespaced keys » par exemple en préfixant chacune de ces clés par un préfixe qui vous sera propre (ex: « dgfip* » dans le cas de la DGFiP). Nous ajoutons qu'il est préférable de n'utiliser que des lettres minuscules avec le caractère « * » en séparateur.

[x] Enfin, il est important de noter qu'à chaque validation dans DataPass, les périmètres contenus dans l'habilitation DataPass sont transmis dans l'espace partenaire FranceConnect. De cette façon, au moment de l'échange de données initié par l'utilisateur final, FranceConnect peut contrôler les périmètres qui sont demandés par le fournisseur de service.

</details>

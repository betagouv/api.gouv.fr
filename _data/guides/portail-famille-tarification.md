---
title: Portail famille des communes
tagline: Communes et intercommunalités, simplifiez les démarches des familles en calculant automatiquement leur tarif de restauration scolaire, de crèches ou d'activités périscolaires ou municipales.
tags: cas usage, api particulier, portail famille, quotient familial dématérialisé, tarification restauration scolaire, tarification activités périscolaires
image: portail_famille.jpg
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
api:
  - API Particulier
---

<details>
   <summary>**Qu'est-ce qu'un portail famille ?**</summary>

De plus en plus de communes et intercommunalités mettent à disposition des habitants un portail famille permettant d'accéder à des services en ligne pour gérer les activités de l'ensemble de la famille : la crèche, l'halte-garderie, les centres de loisirs, la restauration scolaire, les goûters, les études, le conservatoire, l'atelier beaux-arts etc..

Ce type de portail permet généralement de réserver et payer en ligne les factures liées aux activités péri- et extrascolaires, de suivre les paiements et de gérer les informations liées au compte de la famille. La tarification de ces activités peut être sociale ou solidaire, c'est-à-dire adaptée en fonction du statut ou des ressources de la famille.

En général, le calcul des tarifs utilise le quotient familial de la Caisse d’allocations familiales (CAF) et/ou l'avis d'imposition (DGFIP) fournis par les citoyens.

</details>

# Table des matières

- [Une simplification des démarches du portail famille grâce aux API](#une-simplification-des-démarches-du-portail-famille-grâce-aux-API)
- [Exemple d'applications](#exemple-d-applications)



## Une simplification des démarches du portail famille grâce aux API 

Communes et intercommunalités, en intégrant des API dans votre portail famille :

- 😃 les familles peuvent obtenir une **tarification solidaire et sociale immédiate et automatique**, permise grâce à la liaison avec les données de l'API Particulier et de la DGFIP ;

- ⏰ Vous accélérez le traitement des dossiers car vos agents n’ont **pas de vérifications supplémentaires à réaliser**, les informations obtenues par les API sous-mentionnées sont certifiées 🔎 ;

- 🎯 Enfin, vous **participez activement à la simplification des démarches pour les citoyens en mettant en place le [« Dites-le-nous une fois »](https://www.numerique.gouv.fr/services/guichet-dites-le-nous-une-fois/) : vous ne demandez plus aux familles une information qu’elles ont déjà donnée ou que l’administration connaît déjà.
Vous vous mettez ainsi **en conformité avec la législation** et, plus particulièrement l’[Article L113-12 du Code des relations entre le public et l’administration](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037313155).

## Exemple d'applications 

### Une famille souhaite inscrire son enfant à la cantine, sur le portail famille de sa commune, connecté à l'API Particulier et à d'autres API

1. Lorem
2. Lorem
3. Lorem

## Calcul du Quotient Familial dématerialisé

En savoir plus sur les [données mises à disposition par l'API Particulier](https://api.gouv.fr/les-api/api-particulier#donnees-accessibles-dans-l'api) et sur la [méthodologie pour y accéder](https://api.gouv.fr/les-api/api-particulier#que-dois-je-faire-pour-utiliser-l'api-particulier-?).

⚠️ **Les données fiscales des particuliers ne sont plus disponibles via l'API Particulier, produit opéré par la DINUM.** Pour obtenir ces données (ex : le revenu fiscal de référence, les informations sur les déclarants et le nombre de parts du foyer fiscal), veuillez désormais interroger directement l'API dédiée à l'accès aux données fiscales des particuliers [**l'API Impôt particulier** de la DGFiP](https://api.gouv.fr/les-api/impot-particulier).

## Cadre Juridique

L'utilisation des données est encadrée légalement. Vous devez formuler une demande auprès des services de l'API Particulier et/ou de la DGFIP en fournissant un cadre légal :

- L'article L114-8 du code des relations entre le public et l'administration fixe le cadre général des échanges de données au sein de l'administration ;
- En tant que collectivités territoriales vous avez donc un droit d'accès à certaines données dans le cadre de demandes, services pro-actifs et déclarations usagers. Vérifiez et indiquez quel est l'objet de votre téléservice en cliquant sur le lien suivant : [Arrêté du 04/07/13 sur les téléservices](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000027697207/#:~:text=Dans%20les%20r%C3%A9sum%C3%A9s-,Arr%C3%AAt%C3%A9%20du%204%20juillet%202013%20autorisant%20la%20mise%20en%20%C5%93uvre,publiques%20locales%20dont%20ils%20sont)

**Il est indispensable de fournir l'acte/ la délibération qui fixe les conditions tarifaires qui permettra d'apprécier finement le droit d'accès à chaque donnée.**


<br/>
<Button href="https://datapass.api.gouv.fr/api-particulier?demarche=ccas">Remplir une demande API Particulier</Button>

## Éditeurs

Si vous travaillez avec l'un des éditeurs ou intégrateurs ci-dessous vous pouvez faire une demande pré-remplie :

| Éditeur                      | Nom de la solution            |
| ---------------------------- | ----------------------------- |
| Agora Plus                   | Agor@Famille Premium          |
| Ciril Group                  | Civil Enfance                 |
| JVS                          | Parascol – MonEspaceFamille   |
| Arpège                       | Concerto                      |
| NFI Nord France Informatique |                               |
| Entr'ouvert                  | Publik                        |
| Berger Levrault              | BL Enfance                    |
| Jdéalise                     | Cantine de France             |
| Mushroom                     | CityFamily                    |
| TeamNet                      | Axel                          |
| Abelium                      | Domino Web                    |
| Waigéo                       | MyPérischool                  |
| AIGA                         | iNoé                          |
| Qiis                         | eTicket                       |
| JVS-Mairistem                | Parascol                      |
| 3D Ouest                     | P3D Ouest                     |
| Amiciel                      | Malice                        |

Vous êtes un éditeur et vous souhaitez apparaître dans cette liste ? Écrivez-nous à [api-particulier@api.gouv.fr](mailto:api-particulier@api.gouv.fr)

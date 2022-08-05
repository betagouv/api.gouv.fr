---
title: Tarification des services publics municipaux et scolaires
tagline: Simplifiez le calcul des tarifs de la restauration scolaire, ou des activités périscolaires ou municipales dans votre collectivité
tags: cas usage, api particulier, portail famille, quotient familial dématérialisé, tarification restauration scolaire, tarification activités périscolaires
image: portail_famille.jpg
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
api:
  - API Particulier
---

De plus en plus de communes mettent à disposition des habitants un Portail Famille permettant d'accéder à des services en ligne pour gérer les activités de l'ensemble de la famille : la crèche, l'halte-garderie, les centres de loisirs, la restauration scolaire, les goûter, les études, le conservatoire, l'atelier beaux-arts et autres.

Ce type de portail permet généralement de reserver et de payer en ligne les factures liées aux activitiés péri- et extrascolaires, de suivre les paiements et de gérer les informations liées au compte de la famille.

En général, le calcul des tarifs utilise le quotient familial de la Caisse d’Allocations Familiales (CAF) et/ou l'avis d'imposition (DGFIP) fournis par les citoyens.

## Calcul du Quotient Familial dématerialisé

En intégrant les API dans votre portail famille, les familles peuvent obtenir une tarification immédiate et automatique, permise grâce à la liaison avec les données de l'API Particulier et de la DGFIP. D'autres sources de données sont disponibles.

En savoir plus sur les [données mise à disposition par l'API Particulier](https://api.gouv.fr/les-api/api-particulier#donnees-accessibles-dans-l'api) et sur la [méthodologie pour y accéder](https://api.gouv.fr/les-api/api-particulier#que-dois-je-faire-pour-utiliser-l'api-particulier-?).

⚠️ **Les données fiscales des particuliers ne sont plus disponibles via l'API Particulier, produit opéré par la DINUM.** Pour obtenir ces données (ex : le revenu fiscal de référence, les informations sur les déclarants et le nombre de parts du foyer fiscal), veuillez désormais interroger directement l'API dédiée à l'accès aux données fiscales des particuliers [**l'API Impôt particulier** de la DGFiP](https://api.gouv.fr/les-api/impot-particulier).

## Cadre Juridique

L'utilisation des données est encadrée légalement. Vous devez formuler une demande auprès des services de l'API Particulier et/ou de la DGFIP en fournissant un cadre légal :

- L'article L114-8 du code des relations entre le public et l'administration fixe le cadre général des échanges de données au sein de l'administration ;
- En tant que collectivités territoriales vous avez donc un droit d'accès à certaines données dans le cadre de demandes, services pro-actifs et déclarations usagers. Vérifiez et indiquez quel est l'objet de votre téléservices en cliquant sur le lien suivant : [Arrêté du 04/07/13 sur les téléservices](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000027697207/#:~:text=Dans%20les%20r%C3%A9sum%C3%A9s-,Arr%C3%AAt%C3%A9%20du%204%20juillet%202013%20autorisant%20la%20mise%20en%20%C5%93uvre,publiques%20locales%20dont%20ils%20sont)

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

Vous êtes un éditeur et vous souhaitez apparaître dans cette liste ? Écrivez-nous à [contact@particulier.api.gouv.fr](mailto:contact@particulier.api.gouv.fr)

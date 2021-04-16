---
title: Hub'Eau - Surveillance du littoral
tagline: Surveillance du littoral
contract: OUVERT
external_site: https://hubeau.eaufrance.fr/page/api-surveillance-littoral
logo: Contaminants chimiques marins_transp.png
clients:
  - particuliers
  - entreprises
  - bureaux d'études
  - collectivités
  - ministères
partners:
  - OFB
  - BRGM
  - IFREMER
owner: Office français de la biodiversité & Bureau de Recherches Géologiques et Minières
owner_acronym: OFB & BRGM
keywords:
  - Milieu marin
  - Littoral
  - Lieux de surveillance
  - Contaminants chimiques
  - Ecotoxicologie
  - Quadrige
  - Ifremer
  - Masse d'eau littorale
themes: 
  - Environnement
score:
  detail:
    access:
      is_open: true
    contact:
      link: newshubeau@brgm.fr
    doc_tech:
      link: https://hubeau.eaufrance.fr/api/vbeta/surveillance_littoral/api-docs
last_update: 16/04/2021
---

### Description fonctionnelle de l'API Surveillance du littoral

[L'API "Surveillance du Littoral"](https://hubeau.eaufrance.fr/page/api-surveillance-littoral) diffuse les données de surveillance du littoral gérées et valorisées par [l'Institut français de recherche pour l'exploitation de la mer (IFREMER)](https://wwz.ifremer.fr) à travers le [système d'information QUADRIGE](http://quadrige.eaufrance.fr).  

QUADRIGE regroupe de nombreuses thématiques : Phytoplancton et hydrologie, suivi environnemental de centrale nucléaire, Microbiologie, Benthos, ...). Chacune de ces thématiques fera l'objet d'un endpoint (opération) de l'API Surveillance du Littoral. A titre de test, c'est la thématique **Contaminants chimiques et écotoxicologie** qui a été choisie pour initier la diffusion des données de QUADRIGE via Hub'Eau.  

**L'API est actuellement en version beta.** Une des limitations principales de cette version beta est l'absence des données permettant l'interprétation des analyses des contaminants chimiques (Aluminium, CaCO3, Carbone organique, ...). Pendant cette période de test, nous vous invitons à faire remonter toute demande de correction ou tout besoin non satisfait sur le [forum de contribution Github](http://github.com/BRGM/hubeau/issues).
  
2 opérations sont actuellement disponibles :  

- **lieux_surv** : permet de récupérer tous les lieux de surveillance (sites) du littoral.
- **contaminants_chimiques** : permet de récupérer les analyses de la thématique Contaminants chimiques et écotoxicologie.

NB : Les analyses des différentes thématiques de QUADRIGE seront progressivement disponibles et feront l'objet de nouveaux endpoints. A noter que le endpoint lieux_surv fournit l'ensemble des lieux de surveillance, y compris ceux n'ayant pas de mesures sur la thématique Contaminants chimiques et écotoxicologie, pour être complet quand les autres thématiques seront disponibles. Pour interroger seulement les lieux de surveillance avec des données de contaminants chimiques, ajoutez le paramètre donnees_cc=true à votre requête. 

Les données sont exposées sous la forme d'une API REST, les formats supportés sont : JSON, GeoJSON et CSV.

Dernières évolutions de l'API Surveillance du Littoral :

- 15/04/2021 : mise à disposition de la version beta

### Connaissez-vous Hub'Eau ?

#### Simplifier l'accès aux données sur l'eau

Service pérenne de la toile [Eau France](https://www.eaufrance.fr), [Hub'Eau](https://hubeau.eaufrance.fr/) met à disposition des API Rest favorisant l’accès aux données du [SIE](https://www.eaufrance.fr/donnees) dans des formats simples d’emploi et propices à la réutilisation (CSV, JSON, GeoJSON).
Fondé sur une infrastructure et des méthodes adaptées au traitement et au stockage de données massives, les APIs Hub'Eau garantissent les meilleures performances de disponibilité (20 téra-octets de données fournies en 455 millions d'appels pour l'année 2020).
Hub’Eau est le résultat de la collaboration de l’OFB et du BRGM dans le cadre du pôle de recherche et d'innovation en interopérabilité des systèmes d'information distribués sur l'eau : [INSIDE](http://www.pole-inside.fr/fr).

Les autres API disponibles à ce jour dans Hub'Eau sont :

- [Etat piscicole](/api/api_hubeau_poissons.html) ;
- [Indicateurs Eau potable et Assainissement](/api/api_hubeau_indic_EP_Asst.html) ;
- [Piézométrie](/api/api_hubeau_piezometrie.html) ;
- [Qualité physico-chimique des cours d'eau](/api/api_hubeau_qualite_rivieres.html) ;
- [Qualité des nappes d'eau souterraine](/api/api_hubeau_qualite_nappes_eau_sout.html) ;
- [Température des cours d'eau](/api/api_hubeau_temperature_rivieres.html) ;
- [Hydrométrie](/api/api_hubeau_hydrometrie.html) ;
- [Prélèvements en eau (beta)](/api/api_hubeau_prelevements.html).

#### Un service en co-construction

Pour des APIs toujours plus en phase avec les besoins utilisateurs, Hub'Eau a inauguré en 2018 une politique de bêta testing en organisant une campagne de tests ouverte avant la mise la mise en production de chaque nouvelle API.
D'une durée de quelques mois, ces campagnes ont pour objectif de recueillir un maximum de retour d’expérience des utilisateurs sur les points forts et les points faibles des API en construction.
Pour être informé de la sortie des nouvelles API et les tester en avant-première, inscrivez-vous à la [newsletter](https://hubeau.eaufrance.fr/newsletter) !
Faites-nous part de vos observations sur la [page de contribution GitHub](https://github.com/BRGM/hubeau/issues).

### Exemples de réutilisation

- [Soumettez le votre sur la page GitHub des utilisateurs de Hub'Eau](https://github.com/BRGM/hubeau)


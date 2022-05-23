---
title: Hub'Eau - Indicateurs Eau potable et Assainissement
tagline: Indicateurs des services d'eau et d'assainissement
is_open: 1 # 1 means API is fully open
external_site: https://hubeau.eaufrance.fr/page/documentation-eau_potable-assainissement
partners:
  - eaufrance
  - ofb
  - brgm
producer: hub-eau
keywords:
  - Indicateurs
  - Performance
  - Services
  - Eau potable
  - Assainissement
contact_link: newshubeau@brgm.fr
doc_tech_link: https://hubeau.eaufrance.fr/api/v0/indicateurs_services/api-docs
themes:
  - Environnement
visits_2019: 430
last_update: 12/06/2018
content_intro: |
  [L'API Indicateurs eau potable et assainissement](https://hubeau.eaufrance.fr/page/api-indicateurs-services) de Hub'Eau permet de connaître les **indicateurs** réglementaires sur les services publics d'eau, d'assainissement et sur l'assainissement non collectif.
  
  En effet, dans le but d’évaluer les performances de chacun de ces services et afin de permettre les comparaisons d’une année sur l’autre et entre services similaires, le ministère chargé de l’écologie a piloté dès 2004 l’élaboration d’un référentiel commun en concertation avec les acteurs de l’eau.
---

### Description fonctionnelle de l'API Indicateurs eau potable et assainissement

Une trentaine d’indicateurs sur des aspects économiques, techniques, sociaux et environnementaux ont ainsi été créés. Il s’agit d’indicateurs permettant de suivre les différentes composantes du service et qui, pris dans leur ensemble, offrent une vision globale de ses performances. Ces indicateurs constituent des outils de pilotage facilitant l’inscription des services dans une démarche de progrès.
La source de données est [le Système d'Information sur les Services Publics d'Eau et d'Assainissement (SISPEA), hébergé sur le site Services de la toile EauFrance](http://www.services.eaufrance.fr/).

Les données sont mises à jour au fil des remontées de données par les collectivités locales sur le site Service, et tous les mois (le 1er du mois) sur Hub'Eau.

Les données sont exposées sous la forme d'une API REST, les formats supportés sont : JSON, GeoJSON et CSV.

Trois thématiques sont disponibles :

- Eau potable (AEP) avec par exemple les indicateurs nombre d'habitants desservis, prix du service, délai maximal d’ouverture, taux de conformité des eaux distribuées au titre du contrôle sanitaire, rendement du réseau de distribution, indice de pertes en réseau ;
- Assainissement collectif (AC) avec par exemple les indicateurs nombre d'habitants desservis, quantité de boues, prix du service, taux de desserte, conformités à la directive ERU ;
- Assainissement non collectif (ANC) avec par exemple les indicateurs nombre d’habitants desservis, taux de conformité.

Les différentes opérations possibles sont :

- communes : retourne les indicateurs de performance des services publics d'eau et d'assainissement par commune (un minimum, maximum et moyenne sont calculés quand il existe plusieurs services publics sur une même commune) ;
- indicateurs : retourne la liste des valeurs de performance pour un ou plusieurs indicateurs donnés ;
- services : retourne la liste des indicateurs de performance d'un type de service donné (AEP, AC ou ANC) ;

Dernières évolutions de l'API Indicateurs eau potable et assainissement de Hub'Eau:

- 04/05/2017 : mise à jour de l'adresse de l'API api.hubeau.fr vers [hubeau.eaufrance.fr/](http://hubeau.eaufrance.fr/)
- 21/09/2016 : ajout des libellés SANDRE à côté des codes SANDRE dans la réponse
- 08/08/2016 : ajout du paramètre fields, la valeur est une liste des champs souhaités dans la réponse, par exemple fields=code_station,localisation

### Connaissez-vous Hub'Eau ?

#### Simplifier l'accès aux données sur l'eau

Service pérenne de la toile [Eau France](https://www.eaufrance.fr), [Hub'Eau](https://hubeau.eaufrance.fr/) met à disposition des API Rest favorisant l’accès aux données du [SIE](https://www.eaufrance.fr/donnees) dans des formats simples d’emploi et propices à la réutilisation (CSV, JSON, GeoJSON).
Fondé sur une infrastructure et des méthodes adaptées au traitement et au stockage de données massives, les API Hub'Eau garantissent les meilleures performances de disponibilité.
Hub’Eau est le résultat de la collaboration de l’AFB et du BRGM dans le cadre du pôle de recherche et d'innovation en interopérabilité des systèmes d'information distribués sur l'eau : [INSIDE](http://www.pole-inside.fr/fr).

Les autres API disponibles à ce jour dans Hub'Eau sont :

- [Etat piscicole](/les-api/api_hubeau_poissons) ;
- [Piézométrie](/les-api/api_hubeau_piezometrie) ;
- [Qualité physico-chimique des cours d'eau](/les-api/api_hubeau_qualite_rivieres) ;
- [Qualité des nappes d'eau souterraine](/les-api/api_hubeau_qualite_nappes_eau_sout).

#### Un service en co-construction

Pour des API toujours plus en phase avec les besoins utilisateurs, Hub'Eau inaugure en 2018 une [politique de bêta testing](https://hubeau.eaufrance.fr/page/apis) en organisant une campagne de tests ouverte avant la mise la mise en production de chaque nouvelle API.
D'une durée de 30 à 45 jours, ces campagnes ont pour objectif de recueillir un maximum de retour d’expérience des utilisateurs sur les points forts et les points faibles des API en construction.
Pour être informé de la sortie des nouvelles API et les tester en avant-première, inscrivez-vous à la [newsletter](https://hubeau.eaufrance.fr/page/news-letter-hubeau) !

### Exemples de réutilisation

- [Soumettez le votre sur la page GitHub des utilisateurs de Hub'Eau](https://github.com/BRGM/hubeau)

### Glossaire

#### AFB

L'[OFB (Office Français de la Biodiversité)](https://ofb.gouv.fr/) a été créée le 1er janvier 2017. Elle regroupe l'Agence des aires marines protégées, l'Atelier technique des espaces naturels, l'Office national de l'eau et des milieux aquatiques et les Parcs nationaux de France. L'AFB , établissement public du ministère en charge de l'environnement, exerce des missions d’appui à la mise en œuvre des politiques publiques dans les domaines de la connaissance, la préservation, la gestion et la restauration de la biodiversité et des milieux terrestres, aquatiques et marins. Elle vient en appui aux acteurs publics mais travaille également en partenariat étroit avec les acteurs socio-économiques. Elle a aussi vocation à aller à la rencontre du public pour mobiliser les citoyens en faveur de la biodiversité. En matière d’espaces protégés, elle gère notamment les parcs naturels marins et le sanctuaire de mammifères marins Agoa aux Antilles. Elle est opératrice et animatrice de sites Natura 2000 en mer. Les parcs nationaux sont rattachés à l’Agence, des synergies fortes sont mises en place avec eux.

#### BRGM

Le [BRGM (Bureau de Recherches Géologiques et Minières)](http://www.brgm.fr/), service géologique national français, est l'établissement public de référence dans les applications des sciences de la Terre pour gérer les ressources et les risques du sol et du sous-sol. Le BRGM assure notamment la diffusion de données géologiques et environnementales via les technologies de l’information et de la communication, avec pour objectif la mise à disposition des pouvoirs publics, des acteurs économiques et du grand public d'informations géoréférencées pour appuyer leurs décisions. Parmi les domaines de compétence du BRGM figurent les infrastructures informatiques de diffusion, calcul, simulation-visualisation 3D et réalité virtuelle ainsi que l'interopérabilité.

#### SANDRE

Le [SANDRE (Service d'Administration Nationale des Données et Référentiels sur l'Eau)](http://www.sandre.eaufrance.fr/) a pour mission d'établir et de mettre à disposition le référentiel des données sur l'eau du SIE (Système d'Information sur l'Eau). Ce référentiel, composé de spécifications techniques et de listes de codes libres d'utilisation, décrit les modalités d'échange des données sur l'eau à l'échelle de la France. D'un point de vue informatique, le Sandre garantit l'interopérabilité des systèmes d'information relatifs à l'eau.

#### Services publics de l'eau et de l'assainissement

Les 35000 services publics de l’eau et de l’assainissement en France ont pour mission d’acheminer l’eau potable jusqu’au robinet du consommateur puis de collecter et de traiter les eaux usées et les eaux pluviales avant leur retour au milieu naturel. Ils sont également en charge des relations avec le consommateur : informations, gestion des demandes, facturation… Le service « eau potable » comprend le prélèvement d’eau dans le milieu naturel, sa potabilisation et sa distribution. Le service « assainissement » comprend la collecte, le transport et le traitement des eaux usées ainsi que l’élimination ou la valorisation des boues produites lors des traitements. Pour le service « eau potable », ¾ des communes sont regroupées dans des structures intercommunales contre seulement 44 % pour le service « assainissement ». Depuis 1970, les communes se sont vues confier la gestion des services de l’eau. Elles ont le choix d’assumer directement en régie la gestion de leurs services d’eau et d’assainissement ou en confier tout ou partie à des entreprises spécialisées en délégant leurs compétences. En savoir plus...(http://www.vie-publique.fr/politiques-publiques/politique-eau-qualite/service-public-eau/)

#### Service public d'assainissement non collectif

La loi sur l’eau de 1992 et le Code Général des Collectivités Territoriales imposent aux communautés de communes ou aux communes qui ne réalisent pas de dispositif d’assainissement collectif de mettre en place un Service Public d’Assainissement Non Collectif (SPANC). Le SPANC a pour mission de contrôler les installations d’assainissement non collectif afin de prévenir les risques sanitaires. Le SPANC peut également être apte à réaliser et à entretenir les installations d’assainissement autonome.

#### SISPEA

Le [SISPEA, Système d'Information (ou Observatoire National) sur les Services Publics d'Eau et d'Assainissement](http://www.services.eaufrance.fr/), donne accès à la description et aux données des services publics d'eau potable et d'assainissement, qu’il s’agisse de leur organisation, de leur tarif ou de leur performance. Il est aussi une source d’informations sur le fonctionnement des services d’eau et d’assainissement en France, la composition d’une facture d’eau, les textes réglementaires dans le domaine de la gestion de l’eau et de l’assainissement collectif ou non collectif.
L’observatoire sur les services d’eau et d’assainissement a été créé en 2009 et depuis les communes ou groupements intercommunaux peuvent y saisir leurs indicateurs. Cette saisie est devenue obligatoire à partir du 1er janvier 2016 pour les communes ou groupements intercommunaux de plus de 3500 habitants. Issu d’un partenariat entre l’ensemble des acteurs de l’eau, l’observatoire est un outil destiné aux collectivités locales pour piloter leurs services, suivre leurs évolutions d’années en années, comparer leurs performances. De plus, il apporte une réponse aux exigences des usagers et des citoyens soucieux d’avoir une information transparente. Enfin, l’observatoire permet l’élaboration d’une base de données nationale des prix de l’eau et des performances des services publics d’eau et d’assainissement.

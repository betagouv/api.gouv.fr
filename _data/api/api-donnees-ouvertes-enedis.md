---
title: API Données ouvertes d'Enedis
tagline: Accédez aux données relatives à l'énergie publiées par Enedis
producer: enedis
is_open: 1 # 0 means API require an account
keywords:
  - Energie
  - Consommation
  - Electricité
  - iris
  - raccordement
  - reseau
  - poteau
  - filiere
  - production
  - recharge
  - profil
  - meteo
  - température
themes:
  - Environnement
  - Energie
contact_link: https://data.enedis.fr/page/contact
doc_tech_link: https://data.enedis.fr/api/v2/swagger.json
datagouv_uuid:
  - 60cac8db0480dab2ce2fcb3b
  - 5a82655db595081fb6b66415
visits_2019: 1000
last_update: 25/10/2022
content_intro: |
  L'API Données ouvertes d'Enedis permet d'accéder aux données sur les productions et consommations d'énergie au niveau national et local, ainsi qu'aux données sur les infrastructures.
---

## Données accessibles dans l'API

#### Données sur les consommations d'énergie

- Agrégats segmentés de consommation électrique au pas 1/2 h des points de soutirage
  - Maille nationale
  - Maille régionale
- Consommation et thermosensibilité électriques par secteur d'activité
  - Maille IRIS
  - Maille commune

#### Données sur les production d'énergie

- Agrégats segmentés de production électrique au pas 1/2 h 
  - Maille Nationale
  - Maille régionale
- Production électrique annuelle par filière
  - Maille IRIS
  - Maille commune
- Parc de production 
  - Maille régionale
  - Maille départementale

#### Coefficients des profils
<details>
<summary>💡 Qu'est-ce qu'un profil ?</summary>
Un profil reflète une forme de consommation ou de production, c'est-à-dire la façon dont un client moyen consomme ou produit l'électricité au cours du temps.
</details>

#### Données sur les demandes de racordement

<details>
<summary>💡 Précisions sur les données</summary>
Volume des demandes de raccordement en cours de traitement au réseau de distribution géré par Enedis par tranche de puissance et modalité d'injection

- Maille régionale
- Maille départementale
</details>

#### Indicateur réglementaire continuité d'alimentation

<details>
<summary>💡 Précisions sur les données</summary>
Ce jeu de données restitue la valeur en % du ratio : nombre de clients HTA et BT du département qui sont en écart par rapport aux seuils réglementaires / nombre de clients HTA et BT du département.

Ces données sont fournies à titre indicatif car elles peuvent évoluer en fonction des caractéristiques des incidents, principalement le caractère exceptionnel.
</details>

#### Données sur les points de charge

<details>
<summary>💡 Qu'est-ce qu'un point de charge ?</summary>
Les points de charge sont matérialisés par un socle de prise sur lequel un véhicule électrique peut potentiellement se brancher. Une borne de recharge peut comporter un ou plusieurs points de charge. Les données présentées segmentent les points de charge en trois typologies :

Les points de charge « accessible au public » correspondent aux points de charge accessibles dans les commerces (supermarché, concession automobile…), parking, sites publics ou stations en voirie.
Les points de charge « particulier » sont des points de charges privés localisés dans le résidentiel collectif (immeubles, copropriétés…) ou individuel (pavillons).
Les points de charge « société » sont des points de charge privés localisés dans les sociétés et réservés à l’activité de la société ou à la recharge des véhicules électriques des employés.
Le jeu de données a été élaboré par Enedis à partir de ses données propres combinées avec certaines données externes, issues des sociétés Girève et AAA Data.
</details>

#### Autres données

- Données relatives à la météo
- Fréquence des coupures de courant
- Lignes aériennes
- Lignes souterraines
- Poteaux HTA et BT
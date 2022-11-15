---
title: Les API au service de la transition énergétique
tagline: Quelles API utiliser pour suivre et faciliter la transition énergétque ?
tags: cas usage, energie, geo, électricité, consommation, environnement, gaz, MTES, EDF, GRDF, Enedis, bilan, carbone, ademe, GES, climat
image: energie.png
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
api:
  - API Données ouvertes d'Enedis
  - API Données locales de consommation d'énergie
  - API Aides Territoires
  - API Aides financières à la rénovation énergetique (Simul’Aid€s)
  - API DPE logements
  - API DPE bâtiments tertiaires
  - API Aide financieres de l’ADEME
  - API Professionnels RGE
  - API Base Carbone®

---

## La donnée au coeur de la transition énergétique

Pour pouvoir agir contre le réchauffement climatique et dans un contexte de crise énergétique, l'accès à des données à jour et de qualité est primordial.

De même, l'orientation et le suivi des politiques énergétiques ne peut se faire sans un partage efficace des données entre administrations et opérateurs de l'énergie.

**Pour mettre en visibilité ces données, Etalab propose deux ressources :**

- 📘 [Guide sur les données relatives à l'énergie disponibles sur data.gouv.fr](https://www.data.gouv.fr/fr/pages/donnees-energie/)
- Le présent guide sur les API relatives à l'énergie

## Comment utiliser les API relatives à l'énergie ?

Le catalogue api.gouv.fr référence plusieurs API utiles pour les politiques énergétiques :

### 📊 Suivre les consommations et productions d'énergie

<details>
<summary>Données ouvertes d'Enedis</summary>
L'API Données ouvertes d'Enedis permet d'accéder aux données sur les productions et consommations d'énergie au niveau national et local, ainsi qu'aux données sur les infrastructures.

<Button href="https://api.gouv.fr/les-api/api-donnees-ouvertes-enedis">Accéder à l'API</Button>
</details>

<br>

<details>
<summary>Données locales de consommation d'énergie</summary>
L'API Données locales de consommation d'énergie permet de suivre la consommation d'électricite, gaz, livraison de chaleur, froid et les ventes de carburants.

<Button href="https://api.gouv.fr/les-api/api-donnees-locales-energie">Accéder à l'API</Button>
</details>

### ⚡️ Diagnostiquer ou connaître la performance énergétique d'un bâtiment

<details>
<summary>DPE des logements</summary>
Cette API donne accès au recensement des diagnostics de performance énergétique (DPE) pour la France entière.

<Button href="https://api.gouv.fr/les-api/api_dpe_logements">Accéder à l'API</Button>
</details>

<br>

<details>
<summary>DPE des bâtiments tertiaires</summary>
Cette API donne accès au recensement des diagnostics de performance énergétique (DPE) des bâtiments tertiaires de la France entière.

<Button href="https://api.gouv.fr/les-api/api_dpe_batiments_publics">Accéder à l'API</Button>
</details>

### 💶 Simplifier l'accès aux dispositifs d'aides relatives à l'énergie

<details>
<summary>Aides financières de l'ADEME</summary>
L'API Aides financières de l'ADEME permet d'interroger l’ensemble des dossiers d’aides engagées par l’ADEME sur les trois dernières années, non confidentiels, sans limite de montants, pour des dossiers de subventions et d’aides remboursables.

<Button href="https://api.gouv.fr/les-api/api_aides_financieres_ademe">Accéder à l'API</Button>
</details>

<br>

<details>
<summary>Simulateur d'aides financières à la rénovation énergetique</summary>
L'API Aides financières à la rénovation énergetique permet d'interroger la liste des dispositifs d’aides financières, identifiées par les conseillers du réseau FAIRE et disponible via l'outil Simul’Aid€s.

<Button href="https://api.gouv.fr/les-api/api_aides_renovation_energetique">Accéder à l'API</Button>
</details>

<br>

<details>
<summary>Professionnels RGE</summary>
Cette API donne accès au recensement des entreprises RGE avec leur domaine de travaux. Elle permet de vérifier si une entreprise est agrée RGEE (Reconnu Garant de l'Environnement).

<Button href="https://api.gouv.fr/les-api/api_professionnels_rge">Accéder à l'API</Button>
</details>

<br>

<details>
<summary>Aides Territoires</summary>
Aides Territoires est un moteur de recherche qui permet de retrouver près de 3000 dispositifs d'aides publiques existants en fonction du territoire.

<Button href="https://api.gouv.fr/les-api/api-aides-territoires">Accéder à l'API</Button>
</details>

### 🌍 Réaliser un bilan d'émissions de gaz à effet de serre (GES)

<details>
<summary>Base Carbonne</summary>
La Base Carbone® est une base de données publique de facteurs d'émissions, nécessaires à la réalisation d’un bilan d’émissions de gaz à effet de serre (GES) et plus généralement tout exercice de comptabilité carbone.

<Button href="https://api.gouv.fr/les-api/api_base_carbone">Accéder à l'API</Button>
</details>

## Comment intégrer ces API dans vos outils ou sites internet ?

Les [API](/guides/api-definition) permettent d'accéder à des données et les intégrer dans des outils et sites internet. 

Par exemple, pour afficher la consommation d'énergie d'une commune sur un site ou dans un logiciel métier, l'intégration d'une API permettra d'automatiser sa mise à jour en temps réel.

### De manière générale, les API permettent :
- ⏱ de disposer des données les plus récentes (grâce à l'accès direct à une base de données de référence),
- 🤖 d'automatiser la mise à jour de données, sites web, tableaux de bord,
- ✅ d'utiliser une donnée certifiée à la source,
- 🔎 de filtrer ou afficher une seule information parmi un grand ensemble de données,
- 📂 de ne pas télécharger et stocker soi-même les fichiers et jeux de données.

### En pratique ?

1. Accédez à la documentation [des API que vous souhaitez utiliser](#comment-utiliser-les-api-relatives-a-l'energie-?) ;
2. Testez l'API avec différents paramètres d'appel (Volet de droite : **Tester l'API**) ;
3. Générez un jeton d'appel propre à votre usage ;
4. Intégrez l'URL de l'API dans votre système d'information, et paramétrez les appels possibles.

#### [En savoir plus sur les API](https://api.gouv.fr/guides/api-definition)

## Contribuez au partage d'API sur l'énergie

#### Référencez vos API sur api.gouv.fr 

Toute administration peut référencer ses API sur le catalogue api.gouv.fr. 

Vous diffusez ou souhaitez diffuser une API ?

<Button href="https://api.gouv.fr/nouvelle-api">Référencer une nouvelle API</Button>

#### Vous ne trouvez pas l'API dont vous avez besoin ?

<Button href="/parcours-client?source=preFooter">Contactez-nous</Button>

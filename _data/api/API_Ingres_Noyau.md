---
title: API Ingres Noyau
tagline: Récupérez l'ensemble des référentiels utilisés par les SIRH de la Fonction Publique d'Etat au format "Noyau RH FPE"
producer: cisirh
is_open: -1 # -1 means API not open
access_page:
  - who:
      - Une application RH
      - Une institution
      - Une collectivité
      - Un ministère
    is_eligible: 0
    description: |
      Le CISIRH met à disposition cette API exploitable et accessible uniquement via le Réseau Interministériel de l'Etat (RIE).

      Son utilisation par une application tierce ne saurait engager la responsabilité du CISIRH, par exemple, en termes de disponibilité.

      <Button href="mailto:api.cisirh@finances.gouv.fr">Faire une demande d'accès</Button>
  - who:
      - Un particulier
      - Autre
    is_eligible: -1
    description: |
      Le CISIRH met à disposition cette API exploitable accessible **uniquement par les ministères ou institutions** ayant accès au Réseau Interministériel de l'Etat (RIE).

      <Button href="/rechercher-api">Rechercher une autre API</Button>
external_site: https://www.economie.gouv.fr/cisirh/ingres
stat:
  url:
  label: Appels
  lastXdays: 30
partners:
  - CISIRH -- BSRMRH > Application Ingres
  - CISIRH -- Centre de compétences éditoriales > Simulateur de carrière
  - CISIRH -- BSRMRH > Application RenoiRH
keywords:
  - CISIRH
  - Référentiels
  - Noyau RH FPE
  - RCC
  - Référentiels de Classification Centrale
  - Nomenclatures

contact_link: api.cisirh@finances.gouv.fr
doc_tech_external: https://www.economie.gouv.fr/cisirh/ingres
#doc_tech_external: http://pissarho.cisirh.rie.gouv.fr/sites/default/files/2019-10/INGRES-PIL-API%20Diffusions%20Ingres_%20%280_2%29_0.pptx
themes:
  - Administration & législation
visits_2019: 0
last_update: 28/05/2020
---

L’API Noyau permet d’accéder aux fichiers de diffusion XML et Excel des nomenclatures noyau gérées dans l’application Ingres du CISIRH, soit plus de 350 nomenclatures accessibles.

### Limitations actuelles:

Le format de restitution des données est celui défini par le noyau RH FPE. Il s'agit de fichiers XML et de leur équivalent au format Excel.
Une conversion JSON du XML est également proposée, à titre expérimental.
Cette API permet de récupérer automatiquement les fichiers à l'identique de ce qu'ils sont produits et mis à disposition sur le portail PissaRHo (open RH FPE).
Cette API ne permet pas la récupération unitaire d'un code est de ses attributs et peut par conséquent ne pas être adaptée à une API entre applications mais tout dépend du besoin.
Pour cet usage, une autre API ([API Ingres Nomenclatures](/les-api/API_Ingres_Nomenclatures)) permet une restitution au format JSON avec des temps de réponse bien meilleurs.

### Evolutions possibles:

Certaines évolutions ont été demandées par nos partenaires et devraient être disponibles courant 2020.
Par exemple, il sera possible d'obtenir directement la version la plus récente et dans le format noyau le plus récent.
Nous vous proposons donc de nous faire part de vos besoins afin de les étudier et de faire évoluer l’API de façon à ce qu’elle réponde au mieux à vos attentes.

### Contenu accessible via cette API:

L'ensemble des référentiels gérés dans l'application Ingres du Cisirh est accessible via cette API.
Ces référentiels couvrent les domaines fonctionnels suivants:

#### Référentiels de classification centraux (RCC)

##### Nomenclatures RCC:

- Catégories
- Corps
- Grade
- Emplois fonctionnels
- Groupe dans un emploi fonctionnel
- Grilles
- Echelons
- Indices
- Spécialités
- ...

##### Nomenclatures militaires:

- Grades militaires
- Hiérarchie
- Appellations
- ...

#### Nomenclatures du noyau RH FPE:

- Ministères et institutions de la république
- Modalités de service
- Positions
- Pays
- Régions
- Départements
- ...

#### Nomenclatures Fichier GEST

- Annexes 14/15
- Codes BJ
- Codes taux
- PABA22
- ...

#### Nomenclatures FIP

- Code administration
- Code affectation
- ...

#### Nomenclatures externes

- ADAGE
- Code NNE
- Hexaposte
- Tabank/SEPA
- Programmes/Ministères
- Centre de coût
- Centre de profit
- Centre financier
- ...

La liste exhaustive est trop longue pour être listée ici, vous pouvez y accéder via cet appel à l'API:

```
https://api.cisirh.rie.gouv.fr/ingres/diffusions/HORSVERS/19.00.00/complete/
```

### Principe d'utilisation et exemples:

L'utilisation de cette API nécessite d'être familiarisé avec le jargon "Noyau".
Pour récupérer une nomenclature, il faut:

- VERSION NOYAU: les fichiers sont publiés mensuellement de façon officielle pour une version noyau donnée. Par exemple, la versin "19.00.08" diffusée en
  Juin 2020 est la 8ème version publiée depuis la version structurante 19.00.00 publiée en Juillet 2019).
  Si cette version n'est pas connue, l'API permet de les listes toutes sur la route **/diffusions**.
  Le plus grand nombre correspond à la version la plus récente disponible.
  Si ce que vous recherchez est un contenu le plus "frais" possible, alors choisir la version "HORSVERS" qui correspond à des fichiers produits la veille au soir. Il y a toutefois un écart possible pour les nomenclatures RCC car certaines modifications incluses dans ce fichier pourraient ne pas être validées par la DGAFP.

- FORMAT NOYAU: ce format correspond à la structure XML des fichiers restitués. Chaque version noyau structurante (une par an) porte des évolutions de format, c'est à dire l'ajout, la suppression ou la modification d'attributs (donc de balises XML dans le fichier). Bien qu'il soit recommandé de toujours prendre la version la plus récente, vous pouvez choisir le format qui vous convient, par exemple: la version noyau 19.00.08 avec le format 18.00.00 plutôt que le 19.00.00.

- TYPE DE DIFFUSION: deux choix possibles: "complete" ou "differentielle" (sans accents!). La version complete restitue tous les codes dans leur dernière version (quelle qu'elle soit).
  Exemple de mode complet : le fichier des GRADES 19.00.08 complet pourra contenir aussi bien les codes grades modifiés en 19.00.08 que ceux qui n'ont pas été modifiés depuis la 19.00.01.
  Exemple de mode différentiel : le fichier des GRADES 19.00.08 différentiel ne contiendra que les codes grades modifiés en 19.00.08.

Liste des référentiels gérés dans Ingres:

```
https://api.cisirh.rie.gouv.fr/ingres/diffusions
```

Liste des version diffusées (et disponibles) :

```
https://inta.ingres.cisirh/API/diffusions
```

Liste des formats (structure noyau) disponibles pour une version donnée:

```
https://inta.ingres.cisirh/API/diffusions/HORSVERS
```

Liste des types de diffusion disponibles pour une version et un format donnés :

```
https://inta.ingres.cisirh/API/diffusions/HORSVERS/19.00.00
```

Liste des nomenclatures disponibles pour une version, un format et un type de diffusion donnés :

```
https://inta.ingres.cisirh/API/diffusions/HORSVERS/19.00.00/complete
```

Récupération au format XML d’une nomenclature pour une version, un format et un type de diffusion donnés :

```
https://inta.ingres.cisirh/API/diffusions/HORSVERS/19.00.00/complete/GRADE
  ou
https://inta.ingres.cisirh/API/diffusions/HORSVERS/19.00.00/complete/GRADE/xml
```

Récupération au format Excel d’une nomenclature pour une version, un format et un type de diffusion donnés :

```
https://inta.ingres.cisirh/API/diffusions/HORSVERS/19.00.00/complete/GRADE/xls
```

Récupération au format JSON d’une nomenclature pour une version, un format et un type de diffusion donnés :

```
https://inta.ingres.cisirh/API/diffusions/HORSVERS/19.00.00/complete/GRADE/json
```

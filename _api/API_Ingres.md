---
title: API Ingres
tagline: Récupérez l'ensemble des référentiels utilisés par les SIRH de la Fonction Publique d'Etat
owner: CISIRH - Centre Interministériel des Systèmes d'Information relatifs aux Ressources Humaines 
contract: OUVERT (utilisation restreinte au Réseau Interministériel de l'Etat (RIE))
logo: logo_cisirh.png
external_site: https://pissarho.cisirh.rie.gouv.fr/actualites/ingres/deploiement-de-deux-api-sur-lapplication-ingres
stat:
  url: 
  label: Appels
  lastXdays: 30
clients:
  - applications RH
  - institutions
  - collectivités
  - ministères
partners:
  - CISIRH -- BSRMRH > Application Ingres
  - CISIRH -- Département Innovation > Application El Greco 
  - CISIRH -- BSRMRH > Application RenoiRH (Self Mobile)
keywords:
  - CISIRH
  - Référentiels
  - Noyau RH FPE
  - RCC
  - Référentiels de Classification Centrale
  - Nomenclatures
  
score:
  detail:
    contact:  
      link: nicolas.augereau@finances.gouv.fr
    access:
      link: https://api.cisirh.rie.gouv.fr/ingres/nomenclatures
    doc_tech:
      external: http://pissarho.cisirh.rie.gouv.fr/sites/default/files/2019-10/INGRES-PIL-API%20Nomenclatures%20Ingres_%20%280_7%29.pptx
---
L’API Nomenclature permet d’accéder à toutes les nomenclatures noyau gérées dans l’application Ingres du CISIRH, soit plus de 350 nomenclatures accessibles.

## Conditions Générales d'Utilisation:
Le CISIRH met à disposition cette API exploitable accessible uniquement par les ministères ou institutions ayant accès au Réseau Interministériel de l'Etat (RIE).
Son utilisation par une application tierce ne saurait engager la responsabilité du CISIRH, par exemple, en termes de disponibilité.

## Limitations actuelles:

Pour le moment, en dehors de certaines nomenclatures RCC ou externes pour lesquelles nous avons eu des demandes particulières (corps, grades, hexaposte…) seuls le code, les libellés court et long et la période de validité sont restitués par l’API pour 99% des nomenclatures.

## Evolutions possibles:

En cas de besoin il est tout à fait possible de restituer l’ensemble des attributs gérés dans l'application Ingres pour chacune de ces nomenclatures. Cependant, au regard des développements nécessaires, nous préférons attendre qu’il y ait des besoins avérés.
Nous vous proposons donc de nous faire part de vos besoins afin de les étudier et de faire évoluer l’API de façon à ce qu’elle réponde au mieux à vos attentes.

## Contenu accessible via cette API:

L'ensemble des référentiels gérés dans l'application Ingres du Cisirh est accessible via cette API.
Ces référentiels couvrent les domaines fonctionnels suivants:

### Référentiels de classification centraux (RCC)

#### Nomenclatures RCC:
* Catégories
* Corps
* Grade
* Emplois fonctionnels
* Groupe dans un emploi fonctionnel
* Grilles
* Echelons
* Indices
* Spécialités
* ...

#### Nomenclatures militaires:
* Grades militaires
* Hiérarchie
* Appellations
* ...

### Nomenclatures du noyau RH FPE:
* Ministères et institutions de la république
* Modalités de service
* Positions
* Pays
* Régions
* Départements
* ...

### Nomenclatures Fichier GEST
* Annexes 14/15
* Codes BJ
* Codes taux
* PABA22
* ...

### Nomenclatures FIP
* Code administration
* Code affectation
* ...

### Nomenclatures externes
* ADAGE
* Code NNE
* Hexaposte
* Tabank/SEPA
* Programmes/Ministères
* Centre de coût
* Centre de profit
* Centre financier
* ...

La liste exhaustive est trop longue pour être listée ici, vous pouvez y accéder via cet appel à l'API:
https://api.cisirh.rie.gouv.fr/ingres/nomenclatures 

## Principe d'utilisation et exemples:

### Liste des référentiels gérés dans Ingres:
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures

### Extraction de contenu (quel que soit le référentiel) :
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures/[nomenclature]	=> Extraction de tous les codes de la nomenclature désirée
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures/[nomenclature]/[code]	=> Extraction d’un seul code dans la nomenclature désirée

### Référentiel des Catégories statutaires :
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures/CATG_STATUTAIRE

### Référentiel « Ministères & institutions de la république » :
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures/MINISTERE
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures/MINISTERE/MI200 
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures/MINISTERE/MI200/corps
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures/MINISTERE/MI200/Corps?categorie=1

### Référentiel des Corps:
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures/CORPS 
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures/CORPS/00089  
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures/CORPS/00089/grades 
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures/CORPS/?categorie=1  

### Référentiel des Grades:
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures/GRADE
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures/GRADE/00188 

### Référentiel des Grilles:
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures/GRILLE_IND 
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures/GRILLE_IND/00028
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures/GRILLE_IND/00028/echelons
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures/GRILLE_IND/00028/echelons?rang=2  

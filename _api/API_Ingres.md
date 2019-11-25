---
title: API Ingres
tagline: Récupérez l'ensemble des référentiels utilisés par les SIRH de la Fonction Publique d'Etat
owner: CISIRH - Centre Interministériel des Systèmes d'Information relatifs aux Ressources Humaines 
contract: OUVERT (utilisation restreinte au RIE)
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
L’API Nomenclature permet d’accéder à toutes les nomenclatures noyau gérées dans l’application Ingres, soit plus de 350 nomenclatures sont accessibles.

**Attention:** cette API n'est accessible que par les ministères ou institutions ayant accès au Réseau Interministériel de l'Etat (RIE)

# Limitations actuelles:

Pour le moment, en dehors de certaines nomenclatures RCC ou externes pour lesquelles nous avons eu des demandes particulières (corps, grades, hexaposte…) seuls le code, les libellés court et long et la période de validité sont restitués par l’API pour 99% des nomenclatures.

# Evolutions possibles:

En cas de besoin il est tout à fait possible de restituer l’ensemble des attributs gérés dans l'application Ingres pour chacune de ces nomenclatures. Cependant, au regard des développements nécessaires, nous préférons attendre qu’il y ait des besoins avérés.
Nous vous proposons donc de nous faire part de vos besoins afin de les étudier et de faire évoluer l’API de façon à ce qu’elle réponde au mieux à vos attentes.

# Principe d'utilisation et exemples:

## Liste des référentiels gérés dans Ingres:
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures

## Extraction de contenu (quel que soit le référentiel) :
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures/[nomenclature]	=> Extraction de tous les codes de la nomenclature désirée
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures/[nomenclature]/[code]	=> Extraction d’un seul code dans la nomenclature désirée

## Référentiel des Catégories statutaires :
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures/CATG_STATUTAIRE

## Référentiel « Ministères & institutions de la république » :
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures/MINISTERE
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures/MINISTERE/MI200 
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures/MINISTERE/MI200/corps
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures/MINISTERE/MI200/Corps?categorie=1

## Référentiel des Corps:
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures/CORPS 
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures/CORPS/00089  
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures/CORPS/00089/grades 
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures/CORPS/?categorie=1  

## Référentiel des Grades:
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures/GRADE
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures/GRADE/00188 

## Référentiel des Grilles:
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures/GRILLE_IND 
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures/GRILLE_IND/00028
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures/GRILLE_IND/00028/echelons
* https://api.cisirh.rie.gouv.fr/ingres/nomenclatures/GRILLE_IND/00028/echelons?rang=2  

# La liste des nomenclatures accessibles est la suivante :

* Activités
* Adage
* Affectation principale-secondaire
* Agrégats pseudo grades niv1
* Annexes 14 et 15
* Appellations militaires
* Armes ou subdivisions d'armes
* Armées ou services
* Caractère ministériel US
* Caractéristiques US - Agrégats niv1
* Caractéristiques US - Agrégats niv2
* Caractéristiques US héritables
* Caractéristiques propres à une US
* Catégories COMAEEH
* Catégories COTOREP
* Catégories bénéfic. oblig. emploi
* Catégories d'emploi LOLF
* Catégories d'emplois LOLF en délégation
* Catégories d'ouvriers du MINARM
* Catégories d'établissement
* Catégories de caractéristique US
* Catégories de casino
* Catégories de compétences
* Catégories de service
* Catégories ou pseudo catégories
* Catégories service d'origine (N4DS)
* Causes d'affectation
* Causes renouvellement de scolarité
* Centres de coûts
* Centres de profit
* Centres financiers
* Centres financiers en délégation
* Chevrons
* Classes cotisation PREFON
* Clés de calcul
* Code Pays
* Codes BJ
* Codes INSEE TAAF
* Codes NNE
* Codes PCS
* Codes PCS-ESE
* Codes SIRH
* Codes SLR
* Codes administration
* Codes administration
* Codes affectation
* Codes affectation et administration
* Codes article indem. compensatrice
* Codes avis
* Codes de situation de l'enfant
* Codes des OMID
* Codes devise
* Codes enfant à charge PF ou SFT
* Codes fin de situation
* Codes majoration PF
* Codes maladie professionnelle
* Codes mouvement
* Codes mutuelle
* Codes opération
* Codes origine
* Codes paiement
* Codes poste
* Codes prestation directe employeur
* Codes prestations familiales
* Codes prime ancienneté
* Codes prise en charge
* Codes prise en charge enfant
* Codes retraite complémentaire
* Codes régime de sécurité sociale
* Codes sens
* Codes spéciaux de mise à jour
* Codes taux
* Codes ventilation budgétaire
* Coefficients prime d'attractivité
* Compte PCE
* Compétences
* Conditions d'ouverture droit ASF
* Conditions de logement
* Congés absences - Agrégats niv1
* Congés-absences (position activité)
* Contrôles "Congés à l'étranger"
* Corps ou pseudo-corps
* Directions et Services Gestionnaires de RH militaires
* Distinctions honorifiques
* Domaine
* Domaine fonctionnel (PASA) en délégation
* Domaines fonctionnels (PASA)
* Données associées aux ER
* Droits liés à la mutation
* Départements
* Echelons
* Echéancier Jour-Nuit
* Ecoles
* Eléments de rémunération
* Emplois fonctionnels
* Enfant ou personne à charge
* Etat civil
* Etats du congé
* Etats du droit de la prestation
* Evénement
* Extension du numéro de voie
* Filières ou pseudo filières
* Fonctions
* Formes de service national
* Fréquences retenue à la source
* Garanties
* Grades dans l'ordre
* Grades du statut général des militaires
* Grades militaires statuts particuliers
* Grades ou pseudo-grades
* Grilles indiciaires ou échelles
* Groupes d'emplois fonctionnels
* Groupes d'invalidité
* Groupes d'éléments de rémunération
* Groupes de fonctions
* Groupes de résidence
* Hexaposte
* Hiérarchie militaire
* Hiérarchie militaire détaillée
* Hors-échelle-lettres
* Identifiant titularisation
* Identifiants PLQ
* Identifiants chaine de paye
* Identifiants métier
* Impacts rémunération
* Incompatibilités
* Indemnités forfaitaires suppl.
* Indemnités sujétion spéc. d'origine
* Indicateur booléen
* Indicateur droit PF
* Indicateur droit SFT
* Indicateur indem. difficultés adm.
* Indicateurs enfant ou pers. à charge
* Indicateurs liés au conjoint
* Indicateurs liés aux PF
* Indicateurs régime social applicable
* Indices
* Langues
* Lien Caractéristiques US héritables - Ministères et institutions de la République
* Lien Fonctions - Ministère et institution de la république
* Liens ER / Données associées
* Liens de filiation de l'enfant
* Liens de parenté
* Lieu d'exercice télétravail
* Limites d'âge
* Localisations interministérielles
* Localités à l'étranger
* Lots de gestion
* Ministère fichier GEST
* Ministères et instit. de la répub.
* Modalités d'affectation
* Modalités d'exercice - Unités de référence
* Modalités de concours
* Modalités de pratique de la langue
* Modalités de service
* Mode de calcul des PF
* Modes d'accès au corps ou assimilé
* Modes d'accès au grade
* Modes d'accès à l'échelon
* Modes d'attribution récompense
* Modes de calcul
* Modes de garde
* Modes de gestion
* Modes de paiement
* Modes de règlement
* Modes de rémunération
* Modes de sortie du corps
* Modes de versement pécule
* Modes entrée FPE ou carrière milit.
* Motifs cess. définitive de fonction
* Motifs d'interruption 2ème section
* Motifs de cessation - Agrégats niv1
* Motifs de changement d'employeur
* Motifs de fin du lien
* Motifs de maintien MICM
* Motifs de non participation
* Motifs de prolongation d'activité
* Motifs de sanctions
* Motifs du refus de formation
* Motifs prolongat./prorogat. stage
* Mutuelles
* Natures d'US
* Natures d'accident
* Natures d'affectation opérationnelle
* Natures d'enquête
* Natures d'organisation internationale
* Natures d'éléments de rémunération
* Natures de bonification
* Natures de corps ou emploi fonct.
* Natures de décision CDAPH
* Natures de fonction publique
* Natures de formation
* Natures de lésion
* Natures de texte
* Natures de versement
* Natures de voie
* Natures des services
* Natures des travaux
* Niveaux d'habilitation
* Niveaux de compétence
* Niveaux de diplôme
* Niveaux de langue
* Niveaux de médaille
* Niveaux de qualification
* Nomenclature d'activités françaises
* Nomenclatures génériques - Définition
* Nomenclatures génériques booléen - définition
* Nomenclatures simples - Définition
* Ordres des distinctions honorifiques
* Organisation internationale
* Organisations syndicales
* Organismes bilan de compétences
* Organismes certificateurs du diplôme
* Ornements
* PABA22
* Pays
* Populations
* Populations (Classification)
* Positions - Agrégats niv1
* Positions - Agrégats niv2
* Positions / Situations admin.
* Positions de la bonification
* Positions statutaires
* Profils cotisants
* Programmes / Ministères
* Propriétés du poste
* Pseudo grade NNE
* Périodicités
* Périodicités
* Périodicités travaillées
* Qualifications
* RIME - Domaines fonctionnels
* RIME - Emplois de référence
* Raisons de mise en 2ème section
* Raisons du forfait
* Revenus du conjoint
* Revenus liés à la famille
* Référentiels RGRH
* Régimes de rémunération
* Régimes de solde militaires
* Régions
* Résultats au concours
* Sanctions
* Sanctions - Agrégats niv1
* Sens Opération CET
* Sexes
* Situation de l'enfant
* Situations du congé
* Situations particulières
* Situations service national
* Situations statutaires
* Situations à l'étranger
* Sièges des lésions
* Sous-catég. ou pseudo sous-catég.
* Sous-domaine
* Sous-groupes d'ER
* Spécialités
* Spécialités RNCP
* Spécialités RNCP - Agrégats niv1
* Spécialités RNCP - Agrégats niv2
* Spécialités RNCP - Agrégats niv3
* Statut des actes
* Statuts (Types de population)
* Statuts - Agrégats niv1
* Statuts - Agrégats niv2
* Statuts / Modes gestion / Modes rém.
* Statuts juridique d'origine (N4DS)
* Structures budgétaires
* TP, service incomplet, surcotisation
* Tabank SEPA
* Taux HSE-HSA
* Taux d'ICM perçu
* Taux d'incapacité ou d'handicap
* Taux horaires ouvriers de la défense
* Taux horaires ouvriers du MTES
* Territoires de campagne
* Territoires hors d'Europe
* Texte
* Thèmes de formation
* Titres d'attribution
* Titres de civilité
* Transcodification codes ministères
* Type d'événement
* Type de carrière
* Type de fonction
* Type de format élémentaire
* Types adresse
* Types d'abonnement
* Types d'accident ou maladie prof.
* Types d'activité prof. de l'agent
* Types d'activité saisissable
* Types d'adresse d'US
* Types d'ancienneté
* Types d'avantage en nature
* Types d'engagement spécial réserve
* Types d'enseignement
* Types d'exposition
* Types d'habilitation
* Types d'identifiant
* Types d'indice
* Types d'indémnité
* Types d'occurrences
* Types d'organe de publication
* Types d'organisme
* Types d'échéancier
* Types d'éléments de rémunération
* Types d'évènement
* Types de bonification
* Types de bonification d'ancienneté
* Types de commune
* Types de concours
* Types de conjoint
* Types de contrat
* Types de cycle
* Types de distinction honorifique
* Types de durées
* Types de formation
* Types de lien juridique
* Types de mandat électif
* Types de mesure
* Types de nom
* Types de prestation enfants
* Types de préavis
* Types de prénom
* Types de saisine
* Types de service
* Types de service ou d'employeur
* Types de situation de famille
* Types de situation de stage
* Types de situation du contrat
* Types de territoire
* Types de texte
* Types de tiers bénéficiaire
* Types de variation d'ancienneté
* Typologies de population
* Témoins AM-PM
* Unités de gestion
* Unités de référence
* Unités structurelles
* Valeur du point de la FPE
* Versions Interface
* Versions de noyau
* Versions du FIP
* Zone astérisque
* Zone tarification remboursement trajet
* Zones de congés à l'étranger
* Zones de résidence
* Zones de validité
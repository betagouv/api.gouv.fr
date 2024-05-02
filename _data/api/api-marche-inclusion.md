---
title: API Marché de l'inclusion
tagline: Plateforme d'achat et de sourcing à destination des acheteurs privés et publics engagés pour l'inclusion. l'API permet de retrouver facilement les informations sur les structures de l'inclusion, et de déposer des besoins d'achats.
is_open: 0 # 0 means API require an account
account_link: https://lemarche.inclusion.beta.gouv.fr/api/
external_site: https://lemarche.inclusion.beta.gouv.fr/
producer: gip-inclusion
keywords:
  - Insertion
  - social
  - Inclusion
  - Subvention
  - Aides
  - Entreprise
  - Handicap
  - ETTI
  - EITI
  - GEIQ
  - EATT
  - ESAT
  - Inclusive
#rate_limiting_resume: 
themes:
  - Entreprise
  - Emploi
contact_link: lemarche.api@inclusion.beta.gouv.fr
doc_tech_link: https://lemarche.inclusion.beta.gouv.fr/api/schema/

content_intro: |
  L'API Marché de l'inclusion simplifie et accélère l'identification et la mise en relation avec toutes les structure sociales et inclusives. Une solution permettant aux acheteurs de sourcer parmi plus de 6000 prestataires socialement responsables conventionnés par l'Etat. 

last_update: 13/03/2024
---

## À quoi sert l'API Marché de l'inclusion ?

### Chercher des structures

L'API fournit toutes les données essentielles pour identifier les prestataires inclusifs. Elle permet de :
  
- Rechercher (via son SIRET ou SIREN) et consulter le détail des **structures de l'IAE**
- Rechercher et consulter le détail des **types de structures**
- Rechercher et consulter le détail des **types de prestations**
- Rechercher et consulter le détail des **secteurs d'activité**
- Rechercher et consulter le détail des **réseaux de l'IAE**
- Rechercher et consulter le détail des **périmètres et types de périmètres**

👉 [Tester le version web du moteur de recherche](https://lemarche.inclusion.beta.gouv.fr/prestataires)

### Déposer un besoin d'achat

Elle permet aussi de déposer des besoins d'achats. Une fois déposé, le moteur de recherche trouvera les structures les plus pertinentes pour répondre au besoin.
    
- Créer un besoin d'achat
- Lister tous les montants de besoins d'achat 
- Lister tous les types de besoins d'achat

👉 [Tester le version web du formulaire de dépôt de besoins](https://lemarche.inclusion.beta.gouv.fr/besoins/ajouter)

## Les différents cas d'usage

### 🔎 Moteur de recherche multicritères

1. Je suis acheteur
2. Je souhaite rechercher un prestataire inclusif
3. Je renseigne le secteur géographique
4. Je sélectionne le secteur d'activité
5. Je lance la recherche
6. J'accède à la listes des prestataires et à leurs fiches de contact

### 🔎 Moteur de recherche par nom ou SIRET/SIREN

1. Je suis acheteur
2. Je souhaite rechercher un prestataire inclusif
3. Je renseigne son nom, ou son n° de SIRET/SIREN
5. Je lance la recherche
6. J'accède à la fiche de contact du (ou des) prestataire(s) correpondant(s)

### 🔎 Sourcing inversé

   1. Je suis acheteur
   2. Je souhaite rechercher un prestataire inclusif
   3. Je renseigne son n° de SIRET/SIREN ou son nom
   5. Je lance la recherche
   6. J'accède à fiche de contact du prestataire

### 🔎 Déposer un appel d'offre
    
1. Je suis acheteur
2. J'ai un besoin d'achat et je souhaite trouver un prestataire inclusif
3. Je dépose mon besoin via l'API
4. Je me connecte ensuite sur mon tableau de bord pour accéder à la liste des prestataires correspondants, et j'échange avec ceux qui sont intéressés

## Quelles sont les données contenues dans l'API ?

### Structures

On retrouve pour chaque structure :

| Nom de la donnée | Description                       |
|------------------|-----------------------------------|
| name             | Raison sociale                    |
| brand            | Nom commercial                    |
| kind             | Type de structure                 |
| kind_parent      | Type "parent" de structure        |
| siret            | Numéro de siret de la structure   |
| address          | Localisation de la structure      |
| offers           | Offres proposées par la structure |
| sectors          | Secteurs d'activité               |
| networks         | Liens avec les différents réseaux |
| labels           | Labels de la structure            |
| updated_at       | Date de dernière mise à jour      |

### Types de structures

#### Insertion par l'activité économique (IAE)
    
➡️ Entreprises d'insertion (EI),<br>
➡️ Associations intermédiaires (AI),<br>
➡️ Ateliers de chantier d'insertion (ACI),<br>
➡️ Entreprises de travail temporaire d'insertion (ETTI),<br>
➡️ Entreprises d'insertion par le travail indépendant (EITI),<br>
➡️ Groupements d'employeurs pour l'insertion et la qualification (GEIQ)
    

#### Handicap
    
➡️ Entreprises adaptées (EA),<br>
➡️ Entreprises adaptées de travail temporaire (EATT),<br>
➡️ Etablissements et services d'aides par le travail (ESAT)
    

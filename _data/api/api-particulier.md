---
title: API Particulier
tagline: Accédez à des données de plusieurs administrations pour simplifier les démarches de vos usagers (revenu fiscal de référence, quotient familial, statut demandeur d’emploi et statut étudiant et étudiant boursier...)
is_open: -1 # -1 means API not open
datapass_link: https://datapass.api.gouv.fr/api-particulier
access_page:
  - who:
      - Un particulier ou une entreprise
    is_eligible: -1
    description: |
      Seules les administrations sont habilitées à utiliser API Particulier.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Une collectivité ou une administration
    is_eligible: 1
    description: |
      Conformément aux dispositions de <External href="https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000031366350&idArticle=LEGIARTI000031367412&dateTexte=&categorieLien=cid">l'article L114-8</External> du *code des relations entre le public et l'administration*, seules les administrations sont habilitées à échanger entre elles des informations ou données strictement nécessaires pour traiter une démarche.

      Pour obtenir un agrément, vous devez **justifier d'une simplification pour les citoyens**, et vous engager à
      n'accéder aux données personnelles qu'avec **l'accord explicite** de l'usager.

      <NextSteps />
      <Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande</Button>
  - who:
      - Un éditeur de logiciel
    is_eligible: 0
    description: |
      Si vous êtes **éditeur de logiciels** et agissez pour le compte d'une administration ou d'une collectivité, vous pouvez remplir une demande d’accès à l’API Particulier vous-même pour l'entité que vous représentez, dans le cadre de <External href="https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000031366350&idArticle=LEGIARTI000031367412&dateTexte=&categorieLien=cid">l'article L114-8</External> du *code des relations entre le public et l'administration*.

      Lors de votre demande vous devrez **justifier** dans quelle mesure l'entité pour laquelle vous opérez rentre dans ce cadre juridique.

      <NextSteps is_editeur />
      <Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande</Button>
stat:
  lastXdays: 30
  url: https://monitoring.particulier.api.gouv.fr/api/stats/
  label: justificatifs papier évités
partners:
  - dgfip
  - CNAF
  - pole-emploi
  - mesri
producer: dinum
keywords:
  - Impots
  - Quotient Familial
  - statut
  - étudiant
  - demandeur
  - emploi
  - ccas
  - Revenu Fiscal de Référence
  - Adresse
  - Justificatif de domicile
rate_limiting_resume: 20 appels / seconde / jeton
rate_limiting_description: |
  L'API est disponible à hauteur de 20 appels par secondes et par jetons d'accès.
monitoring_link: https://status.particulier.api.gouv.fr
monitoring_description: |
  La DINUM s’engage à ce que le Service soit accessible à 95% et la DINUM s’engage à améliorer progressivement ce rendement.
contact_link: contact@particulier.api.gouv.fr
doc_tech_link: https://particulier.api.gouv.fr/api/open-api.yml
themes:
  - Particulier
visits_2019: 15831
uptime: 99.992 # https://uptimerobot.com/dashboard#777746216 * https://uptimerobot.com/dashboard#778826562 / 2
last_update: 31/03/2021
content_intro: |
 L'API Particulier est un bouquet de données proposé pour simplifier les démarches administratives. 

  ### A quoi sert l’API Particulier ?

  L'API particulier permet d'obtenir une multitude de données provenant d'administration différentes dans le cadre de démarches lignes (appelée aussi formulaires en ligne ou téléservices). Un usage dans les logiciels métiers est aussi possible. 

  **Avantages pour les administrations :** 

  - automatiser l'instuction des demandes,
  - disposer d'information certifiées à la source,
  - consulter et mettre à jour des données en back-office.


  **Avantages pour les usagers :**
  
  - simplifier leurs démarches en ligne gâce à la suppression des pièces justificatives (remplacées par des données),
  - accélérer le traitement de leurs dossiers.


  **Que dois-je faire pour utiliser une API ?**
  
  - Je contacte mon éditeur pour m'assurer que son produit utilise l'API particulier ou je transmets le lien vers la documentation technique au gestionnaire de mon formulaire  (DSI ou éditeur), 
  - Je demande un accès aux données dont j'ai besoin, 
  - Je transmets le droit d'accès à l'éditeur.

---

### Données accessibles dans l'API

| Donnée                                     | Description                                                                            |
| ------------------------------------------ | -------------------------------------------------------------------------------------- |
| [Données fiscales (DGFiP](/les-api/api-particulier#donnees-fiscales)    | Revenu fiscal de référence, déclarants, nombre de parts.  |
| [Quotient familial (CNAF)](/les-api/api-particulier#quotient-familial)  | Quotient familial, composition familiale          |
| [Statut étudiant (MESRI)](/les-api/api-particulier#statut-etudiant)  | Statut, établissement(s)                                     |
| Statut étudiant boursier (CNOUS)| Statut, niveau de bourse(s)                                     |
| [Statut demandeur d'emploi (Pôle Emploi)](/les-api/api-particulier#statut-demandeur-d'emploi)| Statut et catégorie (A,B,C,D)      |
| Bénéficiaire d'une prestation sociale | RSA, CSS (complémentaire santé solidaire)               |

### Données fiscales

<details>
   <summary>Liste des données</summary>
| Donnée                       | Description                                                                                        |
| ---------------------------- | -------------------------------------------------------------------------------------------------- |
| RFR                          | Le revenu fiscal de référence (RFR) de l'année en cours et le nombre de parts du foyer             |
| Avis d'imposition            | Montant d'impôt, revenu brut, net, imposable, date de recouvrement et d'établissement              |
| Déclarants                   | Les nom, prénoms, date de naissance des déclarants du foyer fiscal                                 |
| Adresse fiscale              | L'adresse fiscale structurée ainsi que les coordonnées GPS                                         |

</details>

<p>

<details>
   <summary>Précisions sur les données</summary>
Seules les données des deux dernières années sont disponibles. Par exemple en 2019, il n'est pas possible d'obtenir de données sur l'année 2017.

Les déclarants du foyer fiscal sont la(le) contribuable elle(lui)-même et le(la) conjoint(e) ou partenaire de Pacs.

L’Adresse est celle connue au 1er janvier de l’année d’imposition (exemple au 1er janvier 2018 pour les revenus de 2017)
</details>

### Quotient familial

<details>
   <summary>Liste des données</summary>
| Donnée                       | Description                                                                                        |
| ---------------------------- | -------------------------------------------------------------------------------------------------- |
| Quotient familial            | Le quotient familial (QF) du mois précédent pour la famille                                        |
| Composition familiale        | Liste des parents et des enfants de la famille (avec nom, prénoms, date de naissance)              |
| Adresse                      | L'adresse structurée détenue par la CAF                                                            |
</details>

### Statut étudiant

<details>
   <summary>Liste des données</summary>
| Donnée                             | Description                                                                   |
| ---------------------------------- | ----------------------------------------------------------------------------- |
| INE                                | Identifiant National de l'étudiant                                            |
| Inscriptions en formation continue | Permet d’interroger les données des étudiants en formation continue. Données : date de début, de fin d'inscription, et code COG de la commune du lieu d'étude    |
| Inscriptions en formation initiale | Permet d’interroger les données des étudiants en formation initiale. Données : dates de début, fin d'inscription et code COG de la commune du lieu d'étude     |
| Admissions                         | Limite la recherche aux seuls étudiants admis (non-inscrits)                  |
| Etablissement                      | Le ou les établissements (nom et  identifiant - UAI)                         |

</details>

<p>

<details>
   <summary>Précisions sur les données</summary>
Vous aurez à sélectionner des scopes de données dans votre demande. Voici leur fonctionnement :

Deux scopes sont utilisés comme "masque de données". Ces données ne seront 
donc pas retournées si le scope n'a pas été sélectionné.

- "Etablissements" : renvoie le ou les établissements et code COG du lieu d'étude
- "INE (Identifiant National Etudiant)"

Trois scopes ont été réalisés pour ne travailler que sur une population restreinte

- "Admission" : si ce scope est sélectionné la recherche de l'étudiant s'effectuera sur la population restreinte aux seuls admis (inscription non-définitive).
- "Inscriptions en formation initiale"
- "Inscription en formation continue"

**Périmètre  :**

Cette api délivre les données des étudiants inscrits dans les 
établissements sous tutelle du ministère de l'enseignement supérieur.

La couverture des établissements du champ des étudiants sera progressivement complétée.

🔎 Consulter le [nombre d'étudiants identifiés dans l'API](https://statutetudiant.esr.gouv.fr/)
</details>

### Statut demandeur d'emploi

<details>
   <summary>Liste des données</summary>
| Donnée                       | Description                                                                                        |
| ---------------------------- | -------------------------------------------------------------------------------------------------- |
| Identité                     | Nom, prénom, civilité, date de naissance                                                           |
| Données de contact           | e-mail, téléphone                                                                                  |
| Adresse                      |                                                                                                    |
| Inscription                  | Date d’inscription, date de cessation inscription, Categorie d’inscription                         |

</details>

<p>

<details>
   <summary>Précisions sur les données</summary>
Sont disponibles les données des demandeurs d’emploi inscrits ou 
ayant été inscrits à Pôle emploi depuis 2010, date d’inscription et de 
cessation d’inscription le cas échéant.

Les catégories de situation des demandeurs d’emploi sont les 5 proposées par Pôle emploi: 
A, B, C, D et E. La répartition permet d'établir une classification 
selon la disponibilité du demandeur d'emploi.

- A : Personne
sans emploi, tenue d'accomplir des actes positifs de recherche d'emploi, à la recherche d'un emploi quel que soit le type de contrat (CDI,CDD, à temps plein, à temps partiel, temporaire ou saisonnier)
- B :
Personne ayant exercé une activité réduite de 78 heures maximum par
mois, tenue d'accomplir des actes positifs de recherche d'emploi
- C : Personne ayant exercé une activité réduite de plus de 78 heures par
mois, tenue d'accomplir des actes positifs de recherche d'emploi
- D : Personne sans emploi, qui n'est pas immédiatement disponible, et qui
n'est pas tenue d'accomplir des actes positifs de recherche d'emploi
(demandeur d'emploi en formation, en maladie, etc.)
- E : Personne pourvue d'un emploi, et qui n'est pas tenue d'accomplir des actes positifs de recherche d'emploi

L’Adresse est celle déclarée par le demandeur lors de son inscription ou suite à une déclaration de changement d’adresse.
L’API devrait inclure d’ici fin 2021 des données relatives à l’indemnisation des demandeurs d’emploi.
</details>

### Conditions générales d'utilisation

Les conditions générales d'utilisation sont disponibles à [cette adresse](http://api.gouv.fr/resources/CGU%20API%20Particulier.pdf).
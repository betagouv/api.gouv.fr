---
title: API Particulier
tagline: Accédez à des données de plusieurs administrations pour simplifier les démarches de vos usagers (revenu fiscal de référence, quotient familial, statut demandeur d’emploi, statut étudiant et étudiant boursier...)
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
      Si vous êtes **éditeur de logiciels** , c'est à votre collectivité ou administration de faire sa demande d'habilitation vous pouvez remplir une demande d’habilitation à l’API Particulier, dans le cadre de <External href="https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000031366350&idArticle=LEGIARTI000031367412&dateTexte=&categorieLien=cid">l'article L114-8</External> du *code des relations entre le public et l'administration*.

      Vous pouvez nous demandez de vous référencer sur un cas d'usage afin de proposer des formulaires pré-remplis et ainsi simplifier l'expérience de vos clients.

      <NextSteps is_editeur />
      <Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande</Button>
stat:
  lastXdays: 30
  url: https://status.api.gouv.fr/
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
monitoring_link: https://status.api.gouv.fr/
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
 L'API Particulier est un bouquet de données proposé pour simplifier les démarches administratives. L'API Particulier permet d'obtenir une multitude de données provenant d'administration différentes dans le cadre de démarches en ligne (appelée aussi formulaires en ligne ou téléservices). Un usage dans les logiciels métiers est aussi possible. 

 🔎 En savoir plus sur [les API](/guides/api-definition) 

 **Avantages pour les administrations et collectivités :** 
 
  - Les informations sont certifiées par le fournisseur de données, il n'y a plus de saisie des données à effectuer.
  <Quote logo="/images/guides/clamart.svg" who='Ville de Clamart' title='Aurélie Coutant'>
  Maintenant que le traitement est automatisé, nous avons enfin le temps de mieux accompagner les usagers en difficulté, de leur expliquer plus largement les prestations auxquelles ils peuvent avoir accès.
  </Quote>

 **Avantages pour les usagers :**

  - La démarche est réalisable 100% en ligne mais aussi en guichet.
  - Plus besoin de rassembler les documents demandés ou de saisir des informations déjà connues de l'administration.
  <Quote logo="/images/guides/clamart.svg" who='Ville de Clamart' title='Simon-Pierre Chalvidan'>
  En 2014, nos usagers prenaient une demi-journée de congés pour effectuer leurs démarches en mairie. Aujourd'hui, ils les effectuent en ligne en 5 minutes.
  </Quote>

---

## Données accessibles dans l'API Particulier

  | Donnée | Description | API Particulier | API FranceConnect |
  |---------------------|---------------------------------------------- |------------------- |--------------------------- |
  | [Données fiscales (DGFiP)](/les-api/api-particulier#donnees-fiscales)    | Revenu fiscal de référence, déclarants, nombre de parts  | ✅      | ✅                    |
  | [Quotient familial (CNAF)](/les-api/api-particulier#quotient-familial)  | Quotient familial, composition familiale          | ✅                      | Fin 2022                   |
  | [Statut étudiant (MESRI)](/les-api/api-particulier#statut-etudiant)  | Statut, établissement | ✅                      | ✅                         |
  | [Statut étudiant boursier (CNOUS)](#statut-etudiant-boursier)| Statut, niveau de bourse                                     | ✅      | ✅                         |
  | [Statut demandeur d'emploi (Pôle Emploi)](/les-api/api-particulier#statut-demandeur-demploi)| Statut et catégorie (A,B,C,D)      | ✅                      | En cours de test          |
  | Indemnités demandeur d'emploi | à définir | Juin 2022               | En cours de test          |
  | Statut CSS                 | à définir | Juillet 2022               | Juillet 2022                 |
  | Statut RSA                 | à définir | Juillet 2022               | Juillet 2022                 |
  | Statut élève scolarisé      | à définir | Fin-2022                | En cours d'étude          |

**En savoir plus sur [les API](https://api.gouv.fr/guides/api-definition) et les [API France Connectées](https://api.gouv.fr/guides/api-franceconnectees) :**

## Que dois-je faire pour utiliser l'API Particulier ?

### Je suis un éditeur :

- J'identifie les données que j'aimerais utiliser pour un cas d'usage donné.
- Je consulte la documentation technique, et j'utilise le bac à sable pour tester les appels d'API
- Je contacte [cette adresse](https://api.gouv.fr/parcours-client?source=preFooter) pour être référencé sur le cas d'usage associé et avoir un formulaire pré-rempli à disposition de mes clients.

### Je suis une collectivité ou une administration

- Je consulte [les cas d’usage de l'API Particulier](/les-api/api-particulier#exemples-d’application) pour savoir si mon éditeur intègre l’API Particulier. Sinon je contacte mon éditeur et je lui transmets le lien vers la documentation technique.
- Je clique sur "faire une demande d'habilitation", je sélectionne mon éditeur, puis le formulaire correspondant à mon besoin. Sans éditeur, je sélectionne “demande libre”.
- Je complète mon formulaire (numéro SIRET, cadre juridique - dont délibération -, coordonnées de l'équipe, du délégué à la protection des données et du responsable de traitement)
- Je transmets le droit d'accès (token/jeton) à l'éditeur ou à mes développeurs.

## Détails sur les données

#### Données fiscales

<details>
  <summary>Paramètres d'appel à renseigner par l'utilisateur</summary>

| Donnée                       | Description                                                                                        |
| ---------------------------- | -------------------------------------------------------------------------------------------------- |
| Numéro fiscal                | Identifiant numérique de 13 chiffres                                                               |
| Référence de l'avis fiscal   | Identifiant alphanumérique de 13 caractères (14 si dégrèvement)                                    |

</details>

<p>

<details>
  <summary>Liste des données</summary>
| Donnée                       | Description                                                                                        |
| ---------------------------- | -------------------------------------------------------------------------------------------------- |
| Etat civil du /des déclarant(s)   | Nom, nom de naissance, prénom(s), date de naissance            |
| Échéances de l'avis d'imposition  | Date de recouvrement, date d'établissement                            |
| Situation du foyer fiscal  | Adresse, année de déclaration, nombre de parts, nombre de personnes à charge, situation de famille  |
| Agrégats fiscaux   | Revenu brut global, revenu imposable, impôt sur le revenu net avant corrections, montant de l'impôt, revenu fiscal de référence, année de l'impôt, année des revenus   |

</details>

<p>

<details>
  <summary>Précisions sur les données</summary>

⚠️ Attention : si vous comptez utiliser uniquement les données de la DGFIP, il convient d'utiliser l'API [impôt particulier](https://api.gouv.fr/les-api/impot-particulier)

**Données complémentaires**

Erreur correctif : ce scope complémentaire indique si un correctif plus récent que l'avis recherché est disponible.

Situation partielle : ce scope retourne une réponse dans un foyer marié ou pacsé, quand un décès d'un des contribuables affiche les données de l’avis avec l’indication « situation partielle ». Les références de l’autre avis sont donc nécessaires pour le consulter.

**Périmètre**

Seules les données des deux dernières années sont disponibles. Par exemple en 2022, il n'est pas possible d'obtenir de données sur l'année 2020.

Les déclarants du foyer fiscal sont la(le) contribuable elle(lui)-même et le(la) conjoint(e) ou partenaire de Pacs.

L’Adresse est celle connue au 1er janvier de l’année d’imposition (exemple au 1er janvier 2022 pour les revenus de 2021).
</details>

#### Quotient familial

<details>
  <summary>Paramètres d'appel à renseigner par l'utilisateur</summary>

| Donnée                       | Description                                                                                        |
| ---------------------------- | -------------------------------------------------------------------------------------------------- |
| Numéro d'allocataire         |                                                                                                    |
| Code postal                  | Exemple : 84250                                                                                    |

</details>

<p>

<details>
  <summary>Liste des données</summary>
| Donnée                       | Description                                                                                        |
| ---------------------------- | -------------------------------------------------------------------------------------------------- |
| Quotient familial            | Le quotient familial (QF) du mois précédent pour la famille                                        |
| Composition familiale        | Liste des parents et des enfants de la famille (avec nom, prénoms, date de naissance).             |
| Adresse                      | L'adresse structurée détenue par la CAF                                                            |


</details>

<p>

<details>
  <summary>Précisions sur les données</summary>
Le quotient familial retourné par l'API est celui du mois de référence qui est M-1 (M= mois de l’appel).
S’il n’y a pas de quotient familial calculé pour cette période de référence, l'API ne restituera pas de quotient familial.

Les données de l’API Particulier ne permettent pas encore de calculer les tarifs en établissement d'accueil du jeune enfant (crèche, multi-accueil, halte-garderie…).

-> Le Quotient  Familial CAF est revu à chaque changement de situation familiale et/ou professionelle. Il prend en compte 1/12e du revenue imposable de l’année N-2 + les Prestations familiales du mois de référence divisés par le nombre de parts fiscales du foyer. Le Quotient Familiale « DGFIP » est calculé au moment de la déclaration de revenus. Il divise le revenue imposable de l’année N-1 par le nombre de part fiscale du foyer.

</details>

#### Statut étudiant

<details>
  <summary>Paramètres d'appel à renseigner par l'utilisateur</summary>

Ils sont mutuellement exclusifs

| Donnée                       | Description                                                                                        |
| ---------------------------- | -------------------------------------------------------------------------------------------------- |
| Identifiant National Étudiant| L'appel par INE est réservé aux acteurs de la sphère de l'enseignement.                            |
| Etat civil                   | Nom, prénom, date de naissance, sexe et lieu de naissance                                          |

</details>

<p>

<details>
  <summary>Liste des données</summary>
| Donnée                             | Description                                                                   |
| ---------------------------------- | ----------------------------------------------------------------------------- |
| INE                                | Identifiant national de l'étudiant                                            |
| Inscriptions en formation continue | Permet d’interroger les données des étudiants en formation continue. Données : date de début, de fin d'inscription, et code COG de la commune du lieu d'étude.    |
| Inscriptions en formation initiale | Permet d’interroger les données des étudiants en formation initiale. Données : dates de début, fin d'inscription et code COG de la commune du lieu d'étude.     |
| Admissions                         | Limite la recherche aux seuls étudiants admis (non-inscrits).                  |
| Etablissement                      | Le ou les établissements (nom et  identifiant - UAI).                         |

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

#### Statut étudiant boursier

<details>
  <summary>Paramètres d'appel à renseigner par l'utilisateur</summary>

Ils sont mutuellement exclusifs

| Donnée                       | Description                                                                                        |
| ---------------------------- | -------------------------------------------------------------------------------------------------- |
| Identifiant National Étudiant| L'appel par INE est réservé aux acteurs de la sphère de l'enseignement.                            |
| Etat civil                   | Nom, prénom, date de naissance, sexe et lieu de naissance                                          |

</details>

<p>

<details>
  <summary>Liste des données</summary>
| Donnée                             | Description                                                                   |
| ---------------------------------- | ----------------------------------------------------------------------------- |
| Statut boursier                    | Indique si l'étudiant est boursier                                            |
| Echelon de la bourse               | Echelon de la bourse de 0bis à 8                                              |
| email                              | Adresse mail                                                                  |
| Période de versement / Date de rentrée  | Date de début de rentrée scolaire ou universitaire  et durée de versement de la bourse  |
| Statut de la bourse                | Statut définitif ou provisoire (conditionnel)                                |
| Ville d'étude                      | Libellé de la ville d'étude                                                   |

</details>

<p>

<details>
  <summary>Précisions sur les données</summary>
Informations à saisir par l'utilisateur (secrets) : Identifiant National Étudiant et Etat civil (nom, prénom, date de naissance, sexe et lieu de naissance)

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
L’API délivre les données des étudiants :

- **Boursiers d’État** sur critères sociaux (gérés par les Crous) ;
- **Boursiers sur critères sociaux des filières sanitaires et sociales des régions.**

### Liste des régions dont les données sont disponibles dans l'API

⚠️ La liste des boursiers gérés par les régions, disponible dans cette API, sera mise à jour dès mise à disposition des informations.
 L’API à ce jour, couvre uniquement le périmètre des boursiers sur critères sociaux à l’exception des boursiers Campus France et des autres bourses.

**Régions disponibles**

- Normandie

</details>

#### Statut demandeur d'emploi

<details>
  <summary>Paramètres à renseigner par l'utilisateur</summary>

| Donnée                       | Description                                                                                        |
| ---------------------------- | -------------------------------------------------------------------------------------------------- |
| Nom d’utilisateur Pôle emploi| Choisi par le particulier lors de la création de son espace personnel en ligne.                    |

</details>

<br>

<details>
  <summary>Liste des données</summary>
| Donnée                       | Description                                                                                        |
| ---------------------------- | -------------------------------------------------------------------------------------------------- |
| Identité                     | Nom, prénom, civilité, date de naissance                                                           |
| Données de contact           | e-mail, téléphone                                                                                  |
| Adresse                      |                                                                                                    |
| Inscription                  | Date d’inscription, date de cessation inscription, catégorie d’inscription                         |

</details>

<p>

<details>
  <summary>Précisions sur les données</summary>
Sont disponibles les données des demandeurs d’emploi inscrits ou
ayant été inscrits à Pôle emploi depuis 2010, date d’inscription et de
cessation d’inscription le cas échéant.

Les catégories de situation des demandeurs d’emploi sont les suivantes :

| Catégorie                    | Description                                                                                        |
| ---------------------------- | -------------------------------------------------------------------------------------------------- |
| 1           | Personnes sans emploi, immédiatement disponibles au sens de l'article R. 311-3-3 (article R.5411-9 du CT), tenues d'accomplir des actes positifs de recherche d'emploi, à la recherche d'un emploi à durée indéterminée à plein temps                                                                                  |
| 2          | Personnes sans emploi, immédiatement disponibles au sens de l'article R. 311-3-3 (article R.5411-9 du CT), tenues d'accomplir des actes positifs de recherche d'emploi, à la recherche d'un emploi à durée indéterminée à temps partiel               |
| 3          | Personnes sans emploi, immédiatement disponibles au sens de l'article R. 311-3-3 (article R.5411-9 du CT), tenues d'accomplir des actes positifs de recherche d'emploi, à la recherche d'un emploi à durée déterminée temporaire ou saisonnier, y compris de très courte durée      |
| 4          | Personnes sans emploi, non immédiatement disponibles, à la recherche d'un emploi      |
| 5          | Personnes pourvues d'un emploi, à la recherche d'un autre emploi    |
| 6          | Personnes non immédiatement disponibles au sens de l'article R. 311-3-3 (1°) (article R.5411-10 1°) du CT) à la recherche d'un autre emploi, à durée indéterminée à plein temps, tenues d'accomplir des actes positifs de recherche d'emploi |
| 7          | Personnes non immédiatement disponibles au sens de l'article R. 311-3-3 (1°) (article R.5411-10 1°) du CT) à la recherche d'un autre emploi, à durée indéterminée à temps partiel, tenues d'accomplir des actes positifs de recherche d'emploi      |
| 8          | Personnes non immédiatement disponibles au sens de l'article R. 311-3-3 (1°) (article R.5411-10 1°) du CT) à la recherche d'un autre emploi, à durée déterminée, temporaire ou saisonnier, y compris de très courte durée, tenues d'accomplir des actes positifs de recherche d'emploi      |

L’Adresse est celle déclarée par le demandeur lors de son inscription ou suite à une déclaration de changement d’adresse.
L’API devrait inclure d’ici fin 2021 des données relatives à l’indemnisation des demandeurs d’emploi.

Informations à saisir par l'utilisateur (secrets) : Nom d’utilisateur Pôle emploi choisi par le particulier lors de la création de son espace personnel en ligne.

</details>

## Conditions générales d'utilisation

Les conditions générales d'utilisation sont disponibles à [cette adresse](http://api.gouv.fr/resources/CGU%20API%20Particulier.pdf).

## Infolettre API Particulier

Chaque année, l'équipe de l'API Particulier envoie un bilan chiffré sur l'utilisation de l'API, et la feuille de route de l'année suivante (nouvelles démarches, prochaines données qui intègrent l'API...).

<Button href="https://487b4da0.sibforms.com/serve/MUIEADKIZQbixV2PoSlS2VU1cgnh4xihiaswOxPpI0HHRX4F9Wi2C8ojDtqpU70dpyEJF6s1JXYj0oHuHCHTpe-KKzm18PzpaKSBJ7Tq0yyz6FMst27i-kVe_gcvX-pK_rw_6DgRFukOX0HPq4gYVCkglTTjUslLjhGUva9aEN2m9O6CHjgYCuUND2QESrjEeviVzG_Z8Mq6WQwc">Abonnez-vous à l'infolettre API Particulier</Button>
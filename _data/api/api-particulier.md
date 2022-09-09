---
title: API Particulier
tagline: Entités administratives, simplifiez les démarches des particuliers en récupérant pour eux leurs informations administratives (quotient familial CAF, composition familiale, statut demandeur d’emploi, étudiant et étudiant boursier)
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
      Si vous êtes **éditeur de logiciels, c'est à votre collectivité ou administration de faire sa demande d'habilitation.**

      Vous pouvez nous demander de vous référencer sur un cas d'usage afin de proposer des formulaires pré-remplis et ainsi simplifier l'expérience de vos clients publics.

      <NextSteps is_editeur />
      <Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande</Button>
stat:
  lastXdays: 30
  url: https://status.api.gouv.fr/
  label: justificatifs papier évités
partners:
  - CNAF
  - pole-emploi
  - mesr
producer: dinum
keywords:
  - Quotient Familial
  - statut
  - étudiant
  - demandeur
  - emploi
  - ccas
  - Adresse
  - Justificatif de domicile
rate_limiting_resume: 20 appels / seconde / jeton
rate_limiting_description: |
  L'API est disponible à hauteur de 20 appels par secondes et par jeton d'accès.
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
  API Particulier permet aux entités administratives d'**accéder aux données et aux documents administratifs des particuliers**, afin de simplifier leurs démarches.

  Ce bouquet de données provenant d'administrations différentes est utilisable :

  - dans le cadre des démarches en ligne proposées aux usagers (formulaires en ligne ou téléservices) ;
  - dans les logiciels métiers utilisés par les agents habilités en guichet.
  - l'API particulier n'est pas encore France connectée, de fait, même si votre service intègre le bouton France Connect, les informations de vos usagers nécessaires à l'appel de l'API (comme par exemple le numéro d'allocataire ou la date de naissance) et détenues dans l'identifiant France connect, devront transiter dans vos systèmes.

  ### À quoi sert l’API Particulier ?

  **En tant qu'administration ou collectivité**, en intégrant la brique API Particulier dans votre système d’information ou votre site internet :
  
  ✅ Vous n’avez **plus besoin de demander certains justificatifs** aux particuliers ;
  
  ✅ Vous n’avez pas de vérification supplémentaire à réaliser car les **informations sont certifiées** 
  
  ✅ Vous accédez avec un seul compte aux **données de différents fournisseurs** : 
    la Caisse nationale des allocations familiales (CNAF), Pôle-emploi, le ministère de l'enseignement supérieur et de la recherche (MESR) et enfin le Centre national des œuvres universitaires et scolaires (Cnous).

    <Quote logo="/images/guides/clamart.svg" who='Ville de Clamart' title='Aurélie Coutant'>
    Maintenant que le traitement est automatisé, nous avons enfin le temps de mieux accompagner les usagers en difficulté, de leur expliquer plus largement les prestations auxquelles ils peuvent avoir accès.
    </Quote>

  **C'est aussi plus simple pour vos usagers !**

  ✅ Leur démarche est réalisable 100% en ligne autant qu'en guichet ;
  
  ✅ Ils n'ont plus besoin de rassembler et saisir les documents ou informations déjà connues de l'administration.

    <Quote logo="/images/guides/clamart.svg" who='Ville de Clamart' title='Simon-Pierre Chalvidan'>
    En 2014, nos usagers prenaient une demi-journée de congés pour effectuer leurs démarches en mairie. Aujourd'hui, ils les effectuent en ligne en 5 minutes.
    </Quote>

⚠️ Les données de l’API ne permettent pas encore de calculer les tarifs en établissement d'accueil du jeune enfant (crèche, multi-accueil, halte-garderie…). **Elles ne doivent donc pas être utilisées pour le calcul des participations familiales en Eaje.**

---

## API accessibles depuis l'API Particulier

  | API | Fournisseur des données | Données | Disponibilité sur API Particulier |
  |---------------------|----------|------------------------------------- |------------------- |
  | **Quotient familial CAF** | CNAF | Quotient familial CAF, composition familiale<br>[📖 Documentation](#doc-api-qf-cnaf) | ✅                      |
  | **Statut étudiant** | MESR | Statut, établissement<br>[📖 Documentation](#doc-api-statut-etudiant-mesr) | ✅                      |
  | **Statut étudiant boursier** | Cnous | Statut, niveau de bourse<br>[📖 Documentation](#doc-api-statut-etudiant-boursier-cnous)       | ✅      |
  | **Statut demandeur d'emploi** | Pôle Emploi |Statut et catégorie (A,B,C,D)<br>[📖 Documentation](#doc-api-statut-demandeur-emploi-pole-emploi)      | ✅          |
  | **Indemnités demandeur d'emploi** | Pôle Emploi | Montants et types d'indemnisations | T4 2022               |
  | **Statut CSS**              |  Direction de la Sécurité Sociale | oui / non | T4 2022               |
  | **Statut RSA**                 |Direction de la Sécurité Sociale | oui / non| T4 2022               |
  | **Statut élève scolarisé**        | Ministère de l'éducation nationale| Attestation de scolarité et statut boursier | T4 2022                |

⚠️ **Les données fiscales des particuliers ne sont plus disponibles via l'API Particulier, produit opéré par la DINUM.** Pour obtenir ces données (ex : le revenu fiscal de référence, les informations sur les déclarants et le nombre de parts du foyer fiscal), veuillez désormais interroger directement l'API dédiée à l'accès aux données fiscales des particuliers [**l'API Impôt particulier** de la DGFiP](https://api.gouv.fr/les-api/impot-particulier). Cette API est aussi compatible avec France Connect.

### Et si j'ai besoin d'une API France connectée ? <a name="api-france-connectees"></a>

L'API Particulier n'est pas France connectée. Certaines des données de l'API Particulier sont par contre disponibles en mode France connecté, en vous branchant à chaque API, une par une :

  | API sur API Particulier | Alternatives France connectées |
|------------------- |--------------------------- |
  | **Quotient familial CAF** - CNAF | _Disponible fin 2023_         |
  | **Statut étudiant** - MESR |  ✅ [API Statut Étudiant](/les-api/api-statut-etudiant) |
  | **Statut étudiant boursier** - Cnous   | ✅ [API Statut Étudiant boursier](/les-api/api-statut-etudiant-boursier)                      |
  | **Statut demandeur d'emploi** - Pôle Emploi | ✅ [API statut demandeur d'emploi](/les-api/api-statut-demandeur-emploi)   |
  | **Indemnisation Pôle emploi** - Pôle Emploi | ✅ [API indemnisation Pôle emploi](/les-api/api-indemnisation-pole-emploi)       |

🔎 En savoir plus sur [les API](https://api.gouv.fr/guides/api-definition) et les [API France Connectées](https://api.gouv.fr/guides/api-franceconnectees).

## Quelles sont les étapes pour utiliser l'API Particulier ?

### Je suis une collectivité ou une administration

1. **Je consulte [les cas d’usage de l'API Particulier](/les-api/api-particulier#exemples-d’application)** :
  - Si j'ai un éditeur de logiciel, je consulte le tableau en bas du cas d'usage pour savoir si mon éditeur intègre déjà l’API Particulier.
  - Sinon je contacte mon éditeur et je lui transmets le lien vers la documentation technique pour m'assurer qu'il peut intégrer l'API.
2. **Je clique sur le bouton "[faire une demande d'habilitation](https://datapass.api.gouv.fr/api-particulier)"**, je crée mon compte DataPass ou je me connecte.
3. **Une fois sur la première page du formulaire d'accès à l'API Particulier, je complète l'encadré "Qui implémentera l'API ?"** :
  - Si j'ai un éditeur, je coche "Votre éditeur de logiciel" et je le sélectionne dans la liste déroulante s'il est disponible.
  - Si je n'ai pas d'éditeur, je coche "Votre équipe de développeurs". Je clique sur "Suivant".
4. **À la page suivante, rubrique "Modèles pré-remplis", je sélectionne le formulaire pré-rempli adéquat** :
  - Si j'ai un éditeur, je retrouve son nom et le nom de la solution dans la liste déroulante.
  - Si je n'ai pas d'éditeur, je laisse le mode par défaut "Demande libre".
5. **Je complète mon formulaire** : informations sur le projet, données nécessaires, traitement des données, cadre juridique - dont délibération -, coordonnées de l'équipe dont responsable technique, délégué à la protection des données et responsable de traitement.
6. **Une fois ma demande instruite et validée par l'équipe API Particuliere**, je reçois un e-mail m'indiquant où récupérer mon jeton. Je le transmets à mon éditeur ou à mes développeurs.

### Je suis un éditeur et je ne suis pas encore référencé :

ℹ️ Si vous êtes **éditeur de logiciels, c'est à votre client public, collectivité ou administration, de faire sa demande d'habilitation auprès de l'API Particulier**.

Vous pouvez nous demander de vous référencer sur un cas d'usage afin de proposer un formulaire pré-rempli qui simplifiera l'expérience de vos clients. Voici la procédure à suivre :

- Je repère les données dont mes clients publics ont besoin pour un cas d'usage précis que je peux ou pourrai proposer dans ma solution logicielle ;
- Je consulte la documentation technique, et j'utilise le bac à sable pour tester les appels d'API ;
- J'écris à [cette adresse](https://api.gouv.fr/parcours-client?source=preFooter) pour être référencé sur le cas d'usage associé et avoir un formulaire pré-rempli à disposition de mes clients.

## Détails sur les données

### API Quotient familial CAF - CNAF <a name="doc-api-qf-cnaf"></a>

Quotient familial et composition de la famille d'un allocataire de la Caisse nationale des allocations familiales (CNAF).

**Format des données délivrées** : JSON

<details>
  <summary>Paramètres d'appel</summary>
 
Pour effectuer l'appel, deux paramètres sont à compléter :

| Donnée                 | Description           |    Exemple |
| ---------------------- | --------------------- |----------- |
| Numéro d'allocataire   |  1 à 7 chiffres. Le numéro d'allocataire n'est pas un numéro unique, il doit être accompagné du code postal pour que la CNAF retrouve le dossier de l'allocataire.              |       `0012345`     |
| Code postal            | Il s'agit d'un code postal français (métropôle & DROM COM). Cette donnée permet de faire la correspondance avec la CAF de rattachement de l’allocataire. Un code postal complet peut être entré par l'usager, même si seuls les 2 premiers chiffres (exemple : 75 pour 75007) sont nécessaire pour trouver la Caf associée.      |    `75007`        |
 
</details>

<p>

<details>
  <summary>Périmètre de l'API</summary>
  
#### Particuliers concernés :
Cette API concerne les allocataires du régime général de la sécurité sociale.
❌ Il n'y a pas les particuliers relevant du régime agricole qui eux sont rattachés à la MSA, ce qui représente 1 à 2% des allocataires.

ℹ️ Le QF CNAF est calculé seulement pour les allocataires dont les ressources sont déclarées. En effet, pour calculer le quotient familial, la CNAF collecte tous les mois auprès de la DGFIP les ressources de l'individu (revenus salariés et non-salariés, du capital, rentes ...). Elle récupère le bilan en fin d'année. Sans la réception de ces ressources, le QF CNAF ne peut être calculé : une erreur est renvoyée.

ℹ️ Si le particulier n'a plus d'allocations, son QF n'est pas renvoyé. Une erreur sera transmise.  


#### Périmètre géographique :
✅ Allocataires de France métropolitaine
✅ Allocataires DROM COM
✅ Allocataires de nationalité étrangère

#### Fréquence de mise à jour des données :
Les données sont **mises à jour en temps réel**, l'API étant directement relié au système d'information de la Caisse nationale des allocations familiales.

⚠️ **Les informations obtenues sont représentatives de la situation connue par la CNAF et peuvent évoluer très fréquemment**. Le Quotient familial CAF est recalculé tous les mois, il peut être rétroactif et dépend de la situation du particulier et de l'état du droit. Il peut donc y avoir des écarts, notamment si la situation de la personne évolue entre temps : perte d'un emploi, évolution des ressources, arrivée d'un enfant, majorité d'un enfant, modification de la législation etc. Depuis que les allocations logement sont contemporaines (transmises très régulièrement), le QF est amené à évoluer lui aussi très fréquemment.
  
</details>

<p>

<details>
  <summary>Liste des données</summary>

| Donnée                       | Description    |
| ---------------------------- |--------------- |
| Quotient familial  CAF         | ⚠️ Il faut distinguer le quotient familial de la CAF du QF fiscal. ([En savoir plus](#faq-diff-qf-fiscal)             |
| Informations sur les parents composant la famille        | Prénoms, noms et dates de naissance |
| Informations sur les enfants composant la famille        |   Prénoms, noms et dates de naissance ⚠️ Il s'agit des enfants au sens de la CNAF ([En savoir plus](#faq-def-enfant-caf) |
| Adresse                      | Adresse structurée détenue par la CAF. C'est une adresse déclarative.                   |


</details>

<p>

<details>
  <summary>Précisions sur les données</summary>
  
⚠️ Les données de l’API ne permettent pas encore de calculer les tarifs en établissement d'accueil du jeune enfant (crèche, multi-accueil, halte-garderie…). **Elles ne doivent donc pas être utilisées pour le calcul des participations familiales en Eaje.**

#### Quelle différence entre le QF de la CAF et le QF de l'administration fiscale ? <a name="faq-diff-qf-fiscal"></a>

Le quotient familial retourné par l'API est le quotient familial de la CAF. Ce QF est différent de celui de l'administration fiscale car il prend en compte les prestations familiales. Contrairement au quotient familial DGFIP calculé au moment de la déclaration de revenu, le QF de la CAF est revu à chaque changement de situation familiale et/ou professionnelle. 

([Source : Caf.fr](https://caf.fr/allocataires/vies-de-famille/articles/quotient-familial-caf-impots-quelles-differences))

_Calcul du QF de la CAF :_ Revenu imposable de l’année N-2 divisé par 12 + **les prestations familiales du mois de référence**, le tout divisé par le nombre de parts fiscales du foyer. 


#### Qu'est-ce qu'un enfant au sens de la CNAF ? <a name="faq-def-enfant-caf"></a>

La liste des enfants transmis par l'API correspond à la notion d'enfant à charge au sens de la législation familiale.
Pour qu'un enfant soit considéré comme "à charge", l’allocataire doit assurer financièrement son entretien de manière effective et permanente et assumer à son égard la responsabilité affective et éducative. Il n'y a pas d'obligation de lien de parenté avec l’enfant. 

Deux notions d’enfant à charge cohabitent :
- enfant à charge au sens des prestations familiales (Pf) : un enfant est reconnu à charge s’il est âgé d’un mois à moins de 20 ans quelle que soit sa situation, dès lors que son salaire net mensuel ne dépasse pas 55 % du Smic brut ;
- enfant à charge au sens de la législation familiale: en plus des enfants à charge au sens des Pf, sont également considérés à charge pour les aides au logement, les enfants âgés de moins de 21 ans en Métropole (22 ans dans les Dom), les enfants âgés de 20 à 25 ans pour le calcul du Rmi/Rsa, et dès le mois de leur naissance, les enfants bénéficiaires de l’allocation de base de la Paje.

([Source : data.caf.fr](http://data.caf.fr/dataset/population-des-foyers-allocataires-par-commune/resource/3baa3b5b-8376-4b24-a79b-10ee364e956f)

</details>

#### API Statut étudiant - MESR <a name="doc-api-statut-etudiant-mesr"></a>

<details>
  <summary>Paramètres d'appel</summary>


Pour appeler l'API statut étudiant, deux modes d'appel sont possibles :

**Un mode d'appel avec l'état civil de l'étudiant :**

| Donnée                       |       Description        |
| ---------------------------- | ------------------------ |
| Nom de l'étudiant            |   Nécessaire             |
| Prénom                       |   Nécessaire             |
| Date de naissance            |   Nécessaire             |
| Lieu de naissance            |      Facultatif          |


**Un mode d'appel avec l'identifiant national étudiant :**
⚠️ Ce mode est exclusivement accessible aux services de la sphère éducative.

| Donnée                       | Description                          |
| ---------------------------- | ------------------------------------ |
| Identifiant National Étudiant (INE)| Numéro à 11 caractères, _par exemple 990000001HH_                            |


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
- "Inscription en formation initiale"
- "Inscription en formation continue"

**Périmètre  :**

Cette api délivre les données des étudiants inscrits dans les
établissements sous tutelle du ministère de l'enseignement supérieur.

La couverture des établissements du champ des étudiants sera progressivement complétée.

🔎 Consulter le [nombre d'étudiants identifiés dans l'API](https://statutetudiant.esr.gouv.fr/)
</details>

#### API Statut étudiant boursier - Cnous <a name="doc-api-statut-etudiant-boursier-cnous"></a>

<details>
  <summary>Paramètres d'appel</summary>

Pour appeler l'API statut étudiant boursier, deux modes d'appel sont possibles :

**Un mode d'appel avec l'état civil de l'étudiant :**

| Donnée                       |       Description        |
| ---------------------------- | ------------------------ |
| Nom de l'étudiant            |   Nécessaire             |
| Prénom                       |   Nécessaire             |
| Date de naissance            |   Nécessaire             |
| Lieu de naissance            |      Facultatif          |


**Un mode d'appel avec l'identifiant national étudiant :**
⚠️ Ce mode est exclusivement accessible aux services de la sphère éducative.

| Donnée                       | Description                          |
| ---------------------------- | ------------------------------------ |
| Identifiant National Étudiant (INE)| Numéro à 11 caractères, _par exemple 990000001HH_                            |

</details>

<p>

<details>
  <summary>Liste des données</summary>

| Donnée                             | Description                                                                   |
| ---------------------------------- | ----------------------------------------------------------------------------- |
| Statut boursier                    | Indique si l'étudiant est boursier                                            |
| Échelon de la bourse               | Échelon de la bourse de 0bis à 8                                              |
| e-mail                              | Adresse e-mail                                                                  |
| Période de versement / Date de rentrée  | Date de début de rentrée scolaire ou universitaire  et durée de versement de la bourse  |
| Statut de la bourse                | Statut définitif ou provisoire (conditionnel)                                |
| Ville d'étude                      | Libellé de la ville d'étude                                                   |

</details>

<p>

<details>
  <summary>Précisions sur les données</summary>

**Périmètre  :**
L’API délivre les données des étudiants boursiers :

- **Boursiers d’État** sur critères sociaux (gérés par les Crous) ;
- **Boursiers sur critères sociaux des filières sanitaires et sociales des régions.**

### Liste des régions dont les données sont disponibles dans l'API

⚠️ La liste des boursiers gérés par les régions, disponible dans cette API, sera mise à jour dès mise à disposition des informations.
 L’API à ce jour, couvre uniquement le périmètre des boursiers sur critères sociaux à l’exception des boursiers Campus France et des autres bourses.

**Régions disponibles**

- Normandie

</details>

#### API Statut demandeur d'emploi - Pôle emploi <a name="doc-api-statut-demandeur-emploi-pole-emploi"></a>

<details>
  <summary>Paramètre d'appel</summary>

| Donnée                       | Description                                                                                        |
| ---------------------------- | -------------------------------------------------------------------------------------------------- |
| Nom d’utilisateur Pôle emploi| Choisi par le particulier lors de la création de son espace personnel en ligne.                    |

</details>

<p>

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

Les conditions générales d'utilisation sont disponibles à [ici en PDF](http://api.gouv.fr/resources/CGU%20API%20Particulier.pdf).

## Infolettre API Particulier

Chaque année, l'équipe de l'API Particulier envoie un bilan chiffré sur l'utilisation de l'API, et la feuille de route de l'année suivante (nouvelles démarches, prochaines données qui intègrent l'API...).

<Button href="https://487b4da0.sibforms.com/serve/MUIEADKIZQbixV2PoSlS2VU1cgnh4xihiaswOxPpI0HHRX4F9Wi2C8ojDtqpU70dpyEJF6s1JXYj0oHuHCHTpe-KKzm18PzpaKSBJ7Tq0yyz6FMst27i-kVe_gcvX-pK_rw_6DgRFukOX0HPq4gYVCkglTTjUslLjhGUva9aEN2m9O6CHjgYCuUND2QESrjEeviVzG_Z8Mq6WQwc">Abonnez-vous à l'infolettre API Particulier</Button>

## FAQ

<details>
  <summary>Qu'est-ce qu'une API ?</summary>

  Pour mieux comprendre ce qu'est une API, consulter cette [page](/guides/api-definition).

</details>

<details>
  <summary>Les API sur API Particulier sont-elles France connectées ?</summary>

L’API particulier n'est pas encore France connectée, de fait, même si votre service intègre le bouton France Connect, les informations de vos usagers nécessaires à l'appel de l'API (comme par exemple le numéro d'allocataire ou la date de naissance) et détenues dans l'identifiant France connect, devront transiter dans vos systèmes.

En revanche, certaines données présentes dans le bouquet API Particulier sont aussi accessibles par une version France connectée des API. Il vous faudra alors faire une demande d'accès auprès de ces API directement. La liste des alternatives France connectée est décrite [plus haut, à cette rubrique](#api-france-connectees).

🔎 En savoir plus sur les [API France Connectées](/guides/api-franceconnectees).

</details>


<details>
  <summary>Comment tester l'API ? Un jeton d'accès est-il nécessaire pour accéder au bac à sable ?</summary>

Vous pouvez accéder au [bac à sable](/documentation/api-particulier) afin de tester des appels d’API avec des données virtuelles. Aucune habilitation n’est nécessaire, un token est généré immédiatement.

**Il est possible d'ajouter des données au bac à sable à travers la plateforme Airtable :**
Depuis le [swagger](/documentation/api-particulier), en cliquant sur le détail des données proposées par un fournisseur de données, vous pouvez cliquer sur la liste des données présentes en bac à sable. Sur AirTable vous pouvez ensuite éditer des données.
Exemple [ici](https://airtable.com/appMEKRGMNrw4YRff) avec les données bac à sable de l'API de la CNAF.

</details>

<details>
  <summary>Comment récupérer mon jeton d'accès (token) une fois ma demande validée ?</summary>

1. **Une fois votre demande d'habilitation validée, un e-mail vous est envoyé** avec un lien vers [mon.portail-test-staging.api.gouv.fr/](https://mon.portail-test-staging.api.gouv.fr/).

2. **Une fenêtre de connexion (compte Datapass) s'ouvre**. Renseignez les mêmes identifiants utilisés lors de votre demande d'habilitation.

3. Sur votre espace [mon.portail-test-staging.api.gouv.fr/](https://mon.portail-test-staging.api.gouv.fr/), **votre jeton est disponible et peut-être copié**.
<br>⚠️ **Votre token vous est propre, il ne faut pas le diffuser.**  Vous ne devez jamais copier-coller un token dans un moteur de recherche ou dans un e-mail. L’usage de votre token se fait uniquement dans votre logiciel métier sécurisé utilisé pour réaliser vos appels.

4. **Vous devez transmettre ce jeton à votre éditeur ? Ou à votre équipe technique ?** Utilisez un moyen de transmission sécurisé (messagerie cryptée par exemple).

</details>

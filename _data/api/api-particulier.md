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
      <QuestionTree tree='api-particulier' question='apipart'/>
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

### Je suis une collectivité ou une administration :

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

**Format de la donnée** : JSON

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

Cette API concerne les **allocataires de la majorité des régimes** :
- ✅ le régime général ;
- ✅ les titulaires de l'éducation nationale,
- ✅ les retraités de la fonction publique d'État et des collectivités locales ;
- ✅ les régimes spéciaux suivants : Artiste auteur compositeur, France Télécom, Industries électriques et gazières, Marin du commerce et pêche, Mines (régime général), Poste, RATP, SNCF, Navigation intérieure en cas d'accord local et les pensions des autres régimes.

Ne sont pas concernés par cette API, les bénéficiaires des régimes suivants :
- ❌ le régime agricole, les bénéficiaires étant rattachés à la MSA, ce qui représente 1 à 2% des allocataires ;
- ❌ le régime des titulaires de l'Assemblée nationale et du Sénat ;
- ❌ le régime de la navigation intérieure **sauf** lorsqu'un accord local est passé, et que le régime est alors pris en compte par la CAF.


ℹ️ Le QF CNAF est calculé seulement pour les allocataires dont les ressources sont déclarées. En effet, pour calculer le quotient familial, la CNAF collecte tous les mois auprès de la DGFIP les ressources de l'individu (revenus salariés et non-salariés, du capital, rentes ...). Elle récupère le bilan en fin d'année. Sans la réception de ces ressources, le QF CNAF ne peut être calculé : une erreur est renvoyée.

ℹ️ Si le particulier n'a plus d'allocations, son QF n'est pas renvoyé. Une erreur sera transmise.


#### Périmètre géographique :

- ✅ Allocataires de France métropolitaine
- ✅ Allocataires DROM COM
- ✅ Allocataires de nationalité étrangère

#### Fréquence de mise à jour des données :

Les données sont **mises à jour en temps réel**, l'API étant directement relié au système d'information de la Caisse nationale des allocations familiales.

⚠️ **Les informations obtenues sont représentatives de la situation connue par la CNAF et peuvent évoluer très fréquemment**. Le Quotient familial CAF est recalculé tous les mois, il peut être rétroactif et dépend de la situation du particulier et de l'état du droit. Il peut donc y avoir des écarts, notamment si la situation de la personne évolue entre temps : perte d'un emploi, évolution des ressources, arrivée d'un enfant, majorité d'un enfant, modification de la législation etc. Depuis que les allocations logement sont contemporaines (transmises très régulièrement), le QF est amené à évoluer lui aussi très fréquemment.

</details>

<p>

<details>
  <summary>Liste des données</summary>

| Donnée                       | Description    |
| ---------------------------- |--------------- |
| Quotient familial  CAF         | ⚠️ Il faut distinguer le quotient familial de la CAF du QF fiscal.<br/>_Plus de détails dans la rubrique ci-dessous "Précision sur les données"._             |
| Informations sur les parents composant la famille        | Prénoms, noms et dates de naissance |
| Informations sur les enfants composant la famille        |   Prénoms, noms et dates de naissance ⚠️ Il s'agit des enfants au sens de la CNAF.<br/>_Plus de détails dans la rubrique ci-dessous "Précision sur les données"._ |
| Adresse                      | Adresse structurée détenue par la CAF. C'est une adresse déclarative.                   |


</details>

<p>


<details>
  <summary>Précisions sur les données</summary>

⚠️ Les données de l’API ne permettent pas encore de calculer les tarifs en établissement d'accueil du jeune enfant (Eaje) (crèche, multi-accueil, halte-garderie…). **Elles ne doivent donc pas être utilisées pour le calcul des participations familiales en Eaje.**
  
#### Pourquoi le quotient familial (QF) retourné par l'API Particulier est-il parfois différent de celui transmis par le CDAP ?<a name="faq-diff-qf-api-part-et-cdap"></a>
  
Actuellement, il peut arriver que le quotient familial transmis par l'API particulier diffère de celui obtenu sur le [CDAP (Consultation du dossier allocataire par les partenaires)](https://www.caf.fr/partenaires/cdap). Voici des éléments de réponses pour comprendre les différences suivantes : 
- **Le montant du QF est différent :** La différence des montants observés est souvent liée à une différence de temporalité. L'API Particulier délivre le QF du mois M-1 ; là où le CDAP indique le QF en cours. 
- **Le montant du QF est à 0 sur API Particulier, au lieu de non connu sur le CDAP** : Actuellement, l'API de la CNAF qui alimente l'API Particulier, n'indique pas par un code erreur précis le cas des allocataires dont le QF n'est pas calculable faute de connaître les ressources perçues. En effet, actuellement, un QF à 0 est envoyé, plutôt qu'une erreur. La CNAF a conscience que ce retour peut porter à confusion. Il est prévu une évolution dans la future API.
- **Le montant du QF n'est pas délivré par l'API Particulier (affiché non droit) alors qu'il est délivré par le CDAP** : Lorsqu'aucune prestation n'est versée au mois M, l'API CNAF, source de l'API Particulier, ne retourne pas de QF, y compris si en M-1 la personne avait bien des prestations. Une question métier est en cours pour faire évoluer l’API afin de fournir le dernier QF calculé ainsi que la date de ce dernier calcul.

La CNAF travaille actuellement sur une nouvelle API qui retournera les mêmes informations que le CDAP. Les développements sont déjà en cours.

#### Quelle différence entre le quotient familial de la CAF et le QF de l'administration fiscale ? <a name="faq-diff-qf-fiscal"></a>

Le quotient familial retourné par l'API est le quotient familial de la CAF. Ce QF est différent de celui de l'administration fiscale car il prend en compte les prestations familiales. Contrairement au quotient familial DGFIP calculé au moment de la déclaration de revenu, le QF de la CAF est revu à chaque changement de situation familiale et/ou professionnelle.

_Calcul du QF de la CAF :_ Revenu imposable de l’année N-2 divisé par 12 + **les prestations familiales du mois de référence**, le tout divisé par le nombre de parts fiscales du foyer.

_Source_ : [Caf.fr](https://caf.fr/allocataires/vies-de-famille/articles/quotient-familial-caf-impots-quelles-differences)


#### Qu'est-ce qu'un enfant au sens de la CNAF ? <a name="faq-def-enfant-caf"></a>

La liste des enfants transmis par l'API correspond à la notion d'enfant à charge au sens de la législation familiale.
Pour qu'un enfant soit considéré comme "à charge", l’allocataire doit assurer financièrement son entretien de manière effective et permanente et assumer à son égard la responsabilité affective et éducative. Il n'y a pas d'obligation de lien de parenté avec l’enfant.

Deux notions d’enfant à charge cohabitent :
- enfant à charge au sens des prestations familiales (Pf) : un enfant est reconnu à charge s’il est âgé d’un mois à moins de 20 ans quelle que soit sa situation, dès lors que son salaire net mensuel ne dépasse pas 55 % du Smic brut ;
- enfant à charge au sens de la législation familiale: en plus des enfants à charge au sens des Pf, sont également considérés à charge pour les aides au logement, les enfants âgés de moins de 21 ans en Métropole (22 ans dans les Dom), les enfants âgés de 20 à 25 ans pour le calcul du Rmi/Rsa, et dès le mois de leur naissance, les enfants bénéficiaires de l’allocation de base de la Paje.

_Source_ : [data.caf.fr](http://data.caf.fr/dataset/population-des-foyers-allocataires-par-commune/resource/3baa3b5b-8376-4b24-a79b-10ee364e956f)

</details>

### API Statut étudiant - MESR <a name="doc-api-statut-etudiant-mesr"></a>

Liste des inscriptions - et pré-inscriptions CROUS - aux établissements d'enseignement supérieur d'un étudiant.

**Format de la donnée** : JSON


<details>
  <summary>Paramètres d'appel</summary>

Pour appeler l'API statut étudiant, deux modes d'appel sont possibles :

**Un mode d'appel avec l'état civil de l'étudiant :**

| Donnée                       |       Modalité        |
| ---------------------------- | ------------------------ |
| Nom de l'étudiant            |   Nécessaire             |
| Prénom                       |   Nécessaire             |
| Date de naissance            |   Nécessaire             |
| Lieu de naissance            |      Facultatif          |


**Ou un mode d'appel avec l'identifiant national étudiant :**
<br />⚠️ Ce mode est exclusivement accessible aux services de la sphère éducative.

| Donnée                       | Description                          |  Exemple    |
| ---------------------------- | ------------------------------------ | ----------- |
| Identifiant National Étudiant (INE)| Numéro à 11 caractères | `990000001HH`         |


</details>

<p>

<details>
  <summary>Périmètre de l'API</summary>

#### Particuliers concernés :

Cette API concerne les ✅ **étudiants inscrits dans les établissements sous tutelle du ministère de l'enseignement supérieur**, ou pré-inscrits au sens du CROUS.

Ne sont pas concernés :

- ❌ les établissements sous tutelle du ministère de l'agriculture ;
- ❌ les établissements sous tutelle du ministère de la culture ;
- ❌ les établissements du secondaire (BTS, classes préparatoires,...) ;
- ❌ les établissements privés.

ℹ️ La couverture des établissements du champ des étudiants sera progressivement complétée. Le MSER, fournisseur de la donnée, précise que l'ambition de cette API est bien de couvrir un nombre maximum d’étudiants, même à terme les étudiants dont les établissements sont sous tutelles autre que celle du Ministère l’Enseignement Supérieur et de la Recherche.


**Les étudiants concernés sont ceux ayant au minimum une pré-inscription ou inscription dans l'année en cours** quelque soit leur régime :  étudiant en formation initiale, apprenti, stagiaire de la formation continue, contrat de professionnalisation...

⚠️ **Tous les établissements ne délivrent pas les informations des étudiants pré-inscrits au sens du CNOUS**, indiqués par le statut _admis_. Par conséquent si un étudiant est pré-inscrit au sens du CNOUS et que l'API ne vous renvoie pas d'information, il n'est pas possible de considérer de façon définitive que cet étudiant n'est pas pré-inscrit.


#### Périmètre géographique :

Le référentiel national du statut étudiant couvre une partie des établissements de ✅ métropole et les départements et régions d'outre-mer : Martinique, Guadeloupe, Guyane et Réunion.

Ne sont pas couverts :

- ❌ les collectivités d’outre-mer Mayotte, Polynésie française, Saint-Barthélemy, Saint-Martin, Saint-Pierre-et-Miquelon, Wallis-et-Futuna ;
- ❌ Les établissements français de l'étranger.

ℹ️ Le MSER, fournisseur de la donnée, précise que l'ambition de cette API est bien de couvrir tous les établissements situées en France métropolitaine et d’outre-mer, y compris les collectivités d’outre-mer. Les établissements français de l'étranger ne seront pas contre pas couverts.

<iframe src="https://data.enseignementsup-recherche.gouv.fr/explore/embed/dataset/fr-esr-api-statut-etudiant/viz/?static=false&datasetcard=false&apikey=509275f034986f39f87d0ccf2a075efe6c2df21f253e505abb58af38" width="600" height="400" frameborder="0"></iframe>


#### Fréquence de mise à jour des données :

La mise à jour des informations est **variable selon les établissements** car tous les établissements ne procèdent pas de la même manière pour fournir les données de pré-inscription et d’inscription :

- Pour les **grandes universités**, le délai peut être en **temps réel** ;
- Pour les petits établissements, le délai est probablement plus long.

Des inscriptions peuvent avoir lieu toute l'année, et la transmission de ces informations par les établissements se fait elle aussi tout au long de l'année.


#### Choisir dès votre demande d'habilitation le périmètre des données transmises :

Lors de votre demande d'habilitation, vous allez déterminer le périmètre des données en interrogeant tout ou partie de la base des étudiants :
- les inscriptions en formation initiale (cocher "Inscriptions en formation initiale");
- et/ou les inscriptions en formation continue (cocher "Inscriptions en formation continue");
- et/ou les pré-inscriptions pour le CROUS (cocher "Pré-inscriptions CROUS").

Si vous cochez les trois cases, vous aurez donc accès à toute la base. 

**⚠️ Le périmètre choisi est définitif, pour élargir ou réduire le périmètre vous devrez demander un nouveau jeton.**

</details>

<p>

<details>
  <summary>Liste des données</summary>

Cette API délivre les informations de l'étudiant sur l'**année en cours** :

| Donnée d'identité de l'étudiant    | Description                              | Exemple             |
| ---------------------------------- | -----------------------------------------|-------------------- |
| Nom                                |                                          |      `Martin`       |
| Prénom                             |                                          |   `Camille`         |
| Date de naissance                  |                                          |  `2000-01-01`       |
| Lieu de naissance                  |         Code insee ou code postal        |     `35315`         |
<br />
| Liste des inscriptions             | Description       | Exemple   |
| ---------------------------------- | -----------------------------------------|-------------------- |
| Date de début                      |    Début de la période d'étude           |      `2023-09-01`   |
| Date de fin                        |    Fin de la période d'étude             |   `2023-08-31`      |
| Statut de l'étudiant               |  _Deux modalités :_ <br>**Inscrit** : inscrit dans l'établissement <br> **Admis (pré-inscrit au sens du CROUS)**   : Le statut admis correspond à une pré-inscription de l'étudiant dans un établissement, en formation initiale ou continue. Ce statut ne garantit pas que l'étudiant soit accepté par l'établissement. Cette pré-inscription permet à l'étudiant de faire ses démarches auprès du CROUS. <br> Les étudiants "admis" passent au statut "inscrit" une fois leur inscription validée par l'établissement. L'inscription dépend des critères de l'établissement : acceptation la candidature, paiement des droits d'inscription...  Tous les étudiants "admis" ne sont donc pas forcément de futurs étudiants "inscrits"                  |  `inscrit` ou `admis`       |
| Régime de l'étudiant                 |     _Deux modalités :_ <br> **Formation initiale ou reprise d'études** : Ce champ indique que l'étudiant est en formation initiale ou en reprise d'études. La formation initiale correspond à un parcours d’études amorcé à l’école élémentaire et suivi sans interruption de plus d’un an. Si il y a interruption, il s’agit d'une reprise d’études. <br> **Formation continue** :  Ce champ indique que l'étudiant est en formation continue. Ce type de formation est destinée aux salariés, employés ou demandeurs d’emploi et a pour objectif de conforter, améliorer ou acquérir des connaissances professionnelles au-delà de la formation initiale. La formation continue s'accompagne toujours de la signature d’une convention ou d’un contrat de formation professionnelle entre la personne et l’établissement formateur.    |     `formation initiale` ou `formation continue`      |
| Nom de l'établissement  |                    |   `EGC AIN BOURG EN BRESSE EC GESTION ET COMMERCE (01000)`      |
| Identifiant de l'établissement UAI  |                      |   `0011402U`      |
| Lieu d'étude |          Code Insee ou code COG de la commune         |   `75115`      |

ℹ️ Le nombre d'inscriptions est techniquement de 10 au maximum.

</details>

<p>

<details>
  <summary>Précisions sur les données</summary>

#### Quelle différence entre formation continue, la reprise d'études et la formation initiale ?

La **formation initiale** correspond à un parcours d’études amorcé à l’école élémentaire et suivi sans interruption de plus d’un an. S'il y a interruption, il s’agit d'une **reprise d’études**.

La **formation continue** est, quant à elle, destinée aux salariés, employés ou demandeurs d’emploi. Elle a pour objectif de conforter, améliorer ou acquérir des connaissances professionnelles au-delà de la formation initiale.
La distinction principale entre formation initiale et formation continue est le critère de conventionnement, spécifique à la formation continue et qui se traduit par la signature d’une convention ou d’un contrat de formation professionnelle entre la personne et l’établissement formateur tel qu’il est décrit dans les [articles L.6353-1 à L. 6353-7 du Code du travail](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072050/LEGISCTA000006178215/#LEGISCTA000006178215) et l’[article D. 714-62 du Code de l’éducation](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000027866356/).

</details>

### API Statut étudiant boursier - Cnous <a name="doc-api-statut-etudiant-boursier-cnous"></a>

Statut boursier d'un étudiant.

**Format de la donnée** : JSON

<details>
  <summary>Paramètres d'appel</summary>

Pour appeler l'API statut étudiant boursier, deux modes d'appel sont possibles :

**Un mode d'appel avec l'état civil de l'étudiant :**

| Donnée                       |       Description        |
| ---------------------------- | ------------------------ |
| Nom de l'étudiant            |   Nécessaire             |
| Prénom                       |   Nécessaire             |
| Date de naissance            |   Nécessaire             |
| Lieu de naissance            |   Facultatif             |


**Un mode d'appel avec l'identifiant national étudiant :**
⚠️ Ce mode est exclusivement accessible aux services de la sphère éducative.

| Donnée                       | Description                          | Exemple             |
| ---------------------------- | ------------------------------------ |-------------------- |
| Identifiant National Étudiant (INE)| Numéro à 11 caractères         | `990000001HH`       |

</details>

<p>

<details>
  <summary>Périmètre de l'API</summary>

#### Particuliers concernés :

Cette API délivre **uniquement les bourses "obligatoires"**, elle ne concerne pas les bourses d'ordre facultatif. Le périmètre n'est pas exhaustif à ce jour.

L'API délivre les données :
- ✅ des **boursiers d’État sur critères sociaux (gérés par les Crous)** ;
- des **boursiers sur critères sociaux des filières sanitaires et sociales** des régions Normandie et Occitanie.

#### Périmètre géographique :

Uniquement les informations des boursiers de nationalité française.
L'API couvre :
- le ✅ territoire français, dont les ✅ DROM ;
- ❌ Les territoires d'outre-mer ne sont pas couverts ;
- ❌ Les données des étudiants boursiers étrangers ne sont pas couvertes.

Pour les boursiers sur critères sociaux des filières sanitaires et sociales, d'autres régions devraient être couvertes à l'avenir.

#### Fréquence de mise à jour des données :

Les données sont **mises à jour une fois par an**, début septembre, une fois tous les étudiants inscrits.

</details>

<p>

<details>
  <summary>Liste des données</summary>


| Donnée d'identité de l'étudiant    | Description                              | Exemple             |
| ---------------------------------- | -----------------------------------------|-------------------- |
| Nom                                |                                          |      `Martin`       |
| Prénoms                            |     Plusieurs prénoms possibles           |   `Camille`         |
| Date de naissance                  |                                          |  `2000-01-01`       |
| Lieu de naissance                  |         Libellé de la commune de naissance        |     `Poitiers`         |
| Sexe                  |                |     `M` ou  `F`      |
<br />
| Donnée                             | Description                      |    Exemple       |
| ---------------------------------- | -------------------------------- | ----------- |
| Statut boursier        | Indique si l'étudiant est boursier |          `true`   ou `false`         |
| Échelon de la bourse   | Correspond au montant reçu pour l'année scolaire. Il y a 8 échelon de bourse, de 0bis à 7. Chaque échelon est composé de deux montants, le premier correspondant au montant versé pour 10 mois ; le second, plus élevé, pour les étudiants bénéficiant du maintien de la bourse pendant les grandes vacances universitaires. <br> Les taux sont fixé par arrêté, la [page dédiée sur Service-public.fr](https://www.service-public.fr/particuliers/vosdroits/F12214) détaille les montants et vous permettra de retrouver l'arrêté de l'année en cours.    |  `0bis`, `1`, `2`, `3`, `4`, `5`, `6`, `7`   |
|  Date de rentrée  | Date de début de rentrée scolaire ou universitaire     |    |
|  Durée de versement de la bourse  | Nombre de mois de versement de la bourse  |   `12` |
| Statut de la bourse    | Statut définitif ou provisoire (conditionnel)     | `0` ou  >=`1`|
| Ville d'étude          | Libellé de la ville d'étude                       | `Paris` |
| Établissement          |                                                   |`Carnot` |
| E-mail                 | Adresse e-mail                                    | |

</details>


### API Statut demandeur d'emploi - Pôle emploi <a name="doc-api-statut-demandeur-emploi-pole-emploi"></a>

Données d'identité, de contact et de statut du demandeur d'emploi.

**Format de la donnée** : JSON

<details>
  <summary>Paramètre d'appel</summary>

| Donnée                       | Description                                 |
| ---------------------------- | ------------------------------------------- |
| Nom d’utilisateur Pôle emploi| Choisi par le particulier lors de la création de son espace personnel en ligne.                    |

</details>

<p>

<details>
  <summary>Périmètre de l'API</summary>

#### Particuliers concernés :

L’API délivre des informations sur les ✅ **personnes inscrites comme demandeur d’emploi**.

Cela signifie que l'API transmet des informations sur les demandeurs d'emploi :
- en recherche d'emploi ;
- qui ne sont pas disponibles immédiatement ;
- qui ne sont pas tenus de faire des actes positifs de recherche d’emploi.

L'API renvoie la catégorie du demandeur d'emploi permettant justement de déterminer la situation précise du demandeur.

ℹ️ L'API délivre des informations sur les demandeurs d'emploi ayant été inscrits à Pôle emploi depuis 2010, y compris ceux dont l'inscription a pris fin. Dans ce cas, seules les dates d'inscription et de cessation d'inscription sont renvoyées.
Actuellement, la durée de conservation de ces données (durée prévues à l’[article R. 5312-44 du code du travail](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032625875/) relatif au système d’information de Pôle emploi) va être amenée à changer, suite à la mise en œuvre du droit à l’oubli, travaux en cours.


#### Périmètre géographique :

**Tous les demandeurs d'emploi** sont concernés :
- ✅ France métropolitaine
- ✅ DROM COM
- ✅ Travailleurs étrangers ressortissant d'un européen (membre de l’Union Européenne, de l’Espace économique européen, de la Suisse, Monaco, Andorre ou Saint- Martin) ou ayant [les titres et autorisations nécessaires](https://www.pole-emploi.fr/candidat/mes-droits-aux-aides-et-allocati/a-chaque-situation-son-allocatio/quelle-est-ma-situation-personne/je-suis-travailleur-etranger--pu.html) pour être inscrits à pôle emploi.



#### Fréquence de mise à jour des données :

Les données sont **mises à jour en temps réel**, l'API étant directement reliée au système d'information de Pôle emploi.

Les informations obtenues sont représentatives de la situation à date du demandeur d'emploi. Par exemple, la catégorie d'inscription, donnée qui peut évoluer au cours du temps, est mise à jour en temps réel également.

</details>

<p>

<details>
  <summary>Liste des données</summary>

| Donnée d'identité du demandeur d'emploi    | Description                              | Exemple             |
| ---------------------------------- | -----------------------------------------|-------------------- |
| Nom de naissance                   |                                          |      `Martin`       |
| Nom d'usage                        |                                          |      `Dupont`       |
| Prénom                             |   Limité à 13 caractères                 |   `Camille`         |
| Civilité                           |                                          |   `MME` `M`        |
| Date de naissance                  |                                          |  `1967-11-17T00:00:00+01:00"`       |
| Sexe                               |                                          |     `masculin` ou  `feminin`      |
| Code et libellé du statut de certification d'identité CNAV        |        Pôle emploi dépend d’un flux de certification d’identité émis par la CNAV. Un individu peut avoir été certifié ou non.  |   _Considéré comme certifié :_ <br> `VC` `IDENTITE CERTIFIEE`<br>`IC` : `IDENTITE ASSIMILEE CERTIFIEE`<br>`PC` : `IDENTITE CERTIFIEE PARTIELLEMENT`<br><br> _Considéré comme non certifié :_ <br>`AC` : `ATTENTE TRAITEMENT RETOUR CNAV`<br>`DC` : `DEMANDE CERTIF. ENVOYEE` <br> `EC` : `ECHEC DE CERTIFICATION CNAV`<br>`null` : `IDENTITE NON CERTIFIEE`<br>`RC` : `REFUS PROPOSITION DE CERTIFICATION`|
<br />
| Donnée de contact                 | Description                              | Exemple             |
| ---------------------------------- | -----------------------------------------|-------------------- |
| E-mail                             |                                          |      `camille.dupont@domaine.com`       |
| Téléphones                         |  Plusieurs numéros possibles             |      `0606060606`       |
| Adresse                         |  Déclarée par le demandeur lors de son inscription ou suite à une déclaration de changement d’adresse.           |            |
<br />
| Données d'inscription Pôle Emploi | Description                               | Exemple             |
| ---------------------------------- | -----------------------------------------|-------------------- |
| Date d’inscription                 |                                          |      `2021-01-07T00:00:00+01:00`       |
| Date de cessation inscription      |                                          |      `2023-03-12`       |
| Code et libellé de la catégorie d’inscription       |       5 catégories d'inscriptions différentes, consulter ci-dessous la rubrique "Précision sur les données" pour en savoir plus.                                   |      `1` `PERSONNE SANS EMPLOI DISPONIBLE DUREE INDETERMINEE PLEIN TPS` <br>`2` `PERSONNE SANS EMPLOI DISPONIBLE DUREE INDETERMINEE PARTIEL` <br>`3` `PERSONNE SANS EMPLOI DISPONIBLE DUREE DETERMINEE OU SAISON`<br>`4` `PERSONNE SANS EMPLOI NON DISPONIBLE IMMEDIATEMENT`<br>`5` `PERSONNE POURVUE D'UN EMPLOI A LA RECHERCHE D'UN AUTRE`     |

</details>

<p>

<details>
  <summary>Précisions sur les données</summary>


La catégorie du demandeur d'emploi délivrée par l'API correspond aux 5 premières catégories administratives définies par l’[arrêté du 5 février 1992 portant application de l’article L. 5411-2 du Code du travail](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000174464/). Les différentes situations des demandeurs d’emploi sont les suivantes :

| Catégorie administrative    | Description                            |  Catégorie présente dans l'API|
| --------------------------------------- | -------------------------------------- |------------------------------ |
| 1           | Personnes sans emploi, immédiatement disponibles, tenues d'accomplir des actes positifs de recherche d'emploi, à la **recherche d'un emploi à durée indéterminée à plein temps**.   |  ✅  |
| 2          | Personnes sans emploi, immédiatement disponibles, tenues d'accomplir des actes positifs de recherche d'emploi, à la **recherche d'un emploi à durée indéterminée à temps partiel**. |  ✅  |
| 3          | Personnes sans emploi, immédiatement disponibles, tenues d'accomplir des actes positifs de recherche d'emploi, à la **recherche d'un emploi à durée déterminée temporaire ou saisonnier, y compris de très courte durée**. |  ✅  |
| 4          | Personnes sans emploi, **non immédiatement disponibles**, à la recherche d'un emploi.|  ✅  |
| 5          | Personnes **pourvues d'un emploi, à la recherche d'un autre emploi.** |  ✅  |
| 6          | Personnes non immédiatement disponibles à la recherche d'un autre emploi, à durée indéterminée à plein temps, tenues d'accomplir des actes positifs de recherche d'emploi. |  ❌  |
| 7          | Personnes non immédiatement disponibles à la recherche d'un autre emploi, à durée indéterminée à temps partiel, tenues d'accomplir des actes positifs de recherche d'emploi.  |  ❌  |
| 8          | Personnes non immédiatement à la recherche d'un autre emploi, à durée déterminée, temporaire ou saisonnier, y compris de très courte durée, tenues d'accomplir des actes positifs de recherche d'emploi.  |  ❌  |


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

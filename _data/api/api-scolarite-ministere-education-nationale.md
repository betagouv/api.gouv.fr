---
title: API scolarité de l'élève
tagline: Statut scolarisé et statut boursier d'un élève du primaire, collège ou lycée. 
producer: menj
contact_link: api-sco-eleve_contacts@education.gouv.fr
is_open: -1
datapass_link: https://datapass.api.gouv.fr/api-scolarite
is_france_connected: -1
access_page:
  - who:
      - Un particulier
    is_eligible: -1
    description: |
      L’usage de cette API est **uniquement reservé aux acteurs publics**. En tant que particulier, vous ne pouvez pas y accéder.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Une administration
    is_eligible: 1
    description: |

      <NextSteps />
      <QuestionTree tree='is_bouquet_api_parteprise' question='scolariteEleve' />
  - who:
      - Une entreprise ou une association
    is_eligible: -1
    description: |
      L’usage de cette API est **uniquement reservé aux acteurs publics**.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
# rate_limiting_resume: 10 appels / minute / IP # 📍 Volumétrie maximale de votre API.
# rate_limiting_description: | L'API est disponible à hauteur de 10 appels par minute.
# Phrase descriptive de la volumétrie
partners:
  - dinum
themes:
  - Particulier
  - Education
  - Administration
keywords:
  - eleve
  - scolarite
  - scolaire
  - bourse
  - boursier
  - etablissement
  - ecole
  - primaire
  - college
  - lycee
  - enseignement
doc_tech_link: /swaggers/api-scolarite-eleve.yaml
visits_2019: 4000
last_update: 15/12/2023
---

Cette API, délivrée par le Ministère de l'éducation nationale, permet de vérifier si un particulier est scolarisé au primaire, au collège ou au lycée, et savoir s'il est boursier.
Votre service utilisera d'autres API ? Retrouvez les données de cette API dans le bouquet d'API distribué par la DINUM [API Particulier](les-api/api-particulier).

### Périmètre

#### Particuliers concernés :

Cette API concerne les ✅ élèves du primaire, du collège et du lycée.
Une large majorité d’établissements sont concernés :
- ✅ établissements publics ;
- ✅ établissements privés sous contrat ;
- ✅ lycées militaires et lycées maritimes ;
- ✅ une partie des formations à distance du CNED.

Concernant le statut boursier des élèves : seules les bourses sur critères sociaux à l’échelle nationale sont couvertes par l’API. Par ailleurs, les bourses ne concernent que les collégiens et lycéens.

Les établissements suivants ne sont pas couverts par l’API :
- ❌ établissements privés hors contrat ;
- ❌ lycées agricoles ;
- ❌ instruction dans la famille.

####  Périmètre géographique :
- ✅ France métropolitaine
- ✅ DROM-COM

#### Actualisation de la donnée 

Cette API délivre les informations de l’année scolaire en cours et bientôt de l’année scolaire à venir (N+1).
Les données du premier degré (primaire) sont mises à jour en temps réel. Les données du second degré (collèges et lycées) sont mises à jour quotidiennement toutes les nuits.
Les informations, même si elles évoluent principalement lors de la rentrée scolaire en septembre, peuvent changer en cours d’année (déménagements, etc.).

⚠️ Attention, si un élève est indiqué “non-boursier” avant mi-octobre, il ne faut pas prendre en compte cette information. Le statut non-boursier est véritablement fiable à partir de mi-octobre.


### Modalités d'appel
Cette API propose une modalité d’appel avec les données d’identité, tous les paramètres sont obligatoires : 
- Nom, prénom,
- sexe et date de naissance de l’élève,
- code UAI de l’établissement
- année scolaire souhaitée.

### Données

Cette API indique si l’élève est scolarisé et sous quel statut pour l’année scolaire en cours et bientôt N+1. Le statut boursier ainsi que l’échelon de bourse est également précisé le cas échéant.

Informations renvoyées en JSON : 

| Nom         | Description                                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------------------------ |
| Information sur l'élève     | Le nom, prénom, sexe, date de naissance de l'élève. <br/>La recherche s'effectue avec les données entrées en paramètre. Si les nom ou prénom sont incomplets en entrée, ils sont retournés complets en retour. |
| Code UAI de l'établissement | Code d'unité administrative immatriculée (code UAI) de l'établissement où est scolarisé l'élève. <br/>Ce code unique inscrit au répertoire national des établissements est composé de 7 chiffres et d'une lettre ; les trois premiers chiffres correspondent au numéro de département de l'établissement. Pour retrouver facilement le code UAI d'un établissement à partir d' informations plus facilement connues des usagers (commune, code postal, etc.), vous pouvez utiliser l'[API "Annuaire de l'éducation nationale"](/les-api/api-annuaire-education).<br/>NB : L'établissement 0861288H (CNED Direction générale) n'existe pas dans l'API annuaire de l'éducation nationale, il faudra donc compléter la liste des établissements avec une ligne CNED à laquelle sera associée le code UAI qui sera en passé en entrée. |
| Année scolaire      | Année scolaire de l'élève au format AAAA-AAAA ou AAAA (AAAA= 2023 pour l'année scolaire 2023-2024)   |
| Est scolarisé        | True / False : indique si l'élève est scolarisé dans l'établissement. |
| Est boursier        | True / False : indique si l'élève est boursier dans l'établissement. <br/>Les bourses concernent uniquement les élèves des collèges et lycées. NB : Si le statut boursier est à "false" avant mi-octobre, cela ne signifie pas forcément que l'élève n'est pas boursier. Il peut s'agir d'un faux négatif lié à une absence de l'information en base. <br/>Pour en savoir plus consulter <External href="https://particulier.api.gouv.fr/catalogue/education_nationale/statut_eleve_scolarise#faq_entry_answer_1_api_particulier_endpoint_education_nationale_statut_eleve_scolarise">la fiche métier</External>.|
| Niveau de bourse        | exemple : 1 : indique l'échelon de la bourse de l'élève. <br/>Est à "null" quand "est_boursier" est "false". Les bourses concernent uniquement les élèves des collèges et lycées. Il existe trois échelons de bourses pour les collégiens (1 à 3) et six échelons pour les lycéens (1 à 6), correspondant aux montants reçus par l'élève pour l'année scolaire. Pour en savoir plus, consulter <External href="https://particulier.api.gouv.fr/catalogue/education_nationale/statut_eleve_scolarise#faq_entry_answer_2_api_particulier_endpoint_education_nationale_statut_eleve_scolarise">la fiche métier</External>.  |
| Code statut de l'élève  | Indique le statut sous lequel l'élève est scolarisé dans l'établissement. <br/>Les valeurs sont susceptibles d'évoluer : ST : Scolaire, il s'agit du statut de base renvoyé pour près de 95% des élèves / AP : Apprenti / CQ : Contrat de qualification / FC : Formation continue / ED : Enseignement à distance / IN : Candidat individuel / FQ : Stagiaire de la formation Professionnelle / SC : Scolaire ou formation initiale / CP : Contrat de professionnalisation. / NC : Non connu ou non communiqué. |
| Libellé statut de l'élève        | Exemple : SCOLAIRE : Libellé du statut sous lequel l'élève est scolarisé dans l'établissement.|


### Modalités d'utilisation des scopes

Lors de votre demande d'habilitation, vous aurez à sélectionner un ou plusieurs scopes selon votre cas d'usage.
Cette API comprend trois périmètres d'accès : 

| Nom du scope        | Données accessibles  |                                                                                           
| ----------- | --------------------------------------- |
| Scolarité     | état_scolarité + statut_scolaire |
| état_boursier | boursier oui/non |
| niveau_bourse| échelon de la bourse|


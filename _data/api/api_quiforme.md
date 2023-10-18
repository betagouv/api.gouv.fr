---
title: API Quiforme
tagline: Vérifiez si un établissement est habilité à former en récupérant ses certifications Qualiopi et habilitations France compétences
datapass_link: https://datapass.api.gouv.fr/TODO
access_page:
  - who:
      - Un particulier
      - Une entreprise
    is_eligible: -1
    description: |
      Vous ne pouvez pas accèder à ces informations qui sont des données protégées.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Une administration
      - Un acteur privé habilité par une administration
    is_eligible: 1
    description: |
      En tant que collectivité territoriale ou administration, vous êtes éligible à utiliser cette API selon votre cadre juridique. Vous pouvez déposer une demande d'habilitation :
      <Button href="https://datapass.api.gouv.fr/TODO">Demander un accès</Button>
is_open: -1
is_france_connected: -1
producer: carif-oref
keywords:
  - Qualiopi
  - France compétences
  - Habilitations
  - Certifications
  - Organismes de formation
themes:
  - Entreprises
  - Formation
  - Administration
contact_link: api-sco-eleve_contacts@education.gouv.fr/TODO
doc_tech_link: URL TODO
last_update: 10/10/2023 /TODO
---

Cette API, délivrée directement par le réseau des Cariforef, permet de vérifier si un établissement est habilité à délivrer un formation certifiante Qualiopi et/ou France compétences.
**La valeur ajoutée** de cette API opérée par le réseau des CARIF OREF est :

- De connaître les certificats Qualiopi des établissements et pas uniquement des unités légales ;
de véritablement dire si un établissement est habilité à former ou à organiser des épreuves car elle indique également les habilitations France Compétences de l’établissement ;
- D’avoir une donnée plus fiable car le réseau des Carif Oref effectue une double vérification en croisant ses bases et les bases du Ministère de l’intérieur.
- En cas de détection d’anomalie, les Carif Oref peuvent, grâce à leurs réseaux locaux, prendre contact avec l’établissement concerné et vérifier la situation.

Votre service utilisera d'autres API "données entreprises-associations" ? Retrouvez les données de cette API dans le bouquet d'API distribué par la DINUM [API entreprise](https://entreprise.api.gouv.fr/).

## Sources de données 

- API sirene ( incluant les données non diffusibles )
- Base Adresse nationale 
- Certificats Qualiopi ( DGEFP , Liste OF )
- Habilitations France compétences ( France Compétences, RNCP, RS )

## Périmètre

### Entreprises ou associations concernées :

Cette API concerne ✅ tous les établissements quelque soit leur statut, publics, à but lucratif, associatifs, etc...
Une large majorité d’établissements sont concernés :
- ✅ établissements publics ;
- ✅ établissements privés ;
- ✅ associations ;

Les établissements suivants ne sont pas couverts par l’API /TODO
- ❌ établissements privés hors contrat ;
- ❌ lycées agricoles ;
- ❌ instruction dans la famille.

###  Périmètre géographique :
- ✅ France métropolitaine
- ✅ DROM-COM

### Actualisation de la donnée 
Les données sont mises à jour en majorité toutes les 24h mais ce délai peut parfois passer à 72h ou plus pour des cas spécifiques.

## Modalités d'appel
Cette API est appelé avec le SIRET de l'établissement recherché.

## Données

Cette API indique si un établissement est habilité à former. 
Elle délivre les informations suivantes au format JSON :

| Nom         | Exemple              |Description          |
| ----------- | -------------------- | ------------------- |
| **Siret de l'établissement**   | `12000101100010`  | Siret de l'établissement appelé. |
| **Code UAI de l'établissement** | `0123456A` | Code d'unité administrative immatriculée (code UAI) de l'établissement habilité ou agrée. <br/>Ce code unique, inscrit au répertoire national des établissements, est composé de 7 chiffres et d'une lettre ; les trois premiers chiffres correspondent au numéro de département de l'établissement. <br/><br/>Pour retrouver facilement le code UAI d'un établissement à partir d' informations plus facilement connues des usagers (commune, code postal, etc.), vous pouvez utiliser l'[API Annuaire de l'éducation nationale](../les-api/api-annuaire-education).<br/><br/>NB : L'établissement 0861288H (CNED Direction générale) n'existe pas dans l'API annuaire de l'éducation nationale, il faudra donc compléter la liste des établissements avec une ligne CNED à laquelle sera associée le code UAI qui sera en passé en entrée.  |
| **Unités légales avec plusieurs NDA**   | `true` ou `false`   | Dans de rares cas, l'unité légale d'un établissement peut avoir plusieurs numéros de déclaration d'activité (NDA). Tous ces numéros d'activités (qui ne sont pas fournis par cette API délivrant uniquement les NDA d'un établissement) ne sont pas forcément propagés sur les établissements.|
| **Déclarations d'activité de l'etablissement**   || Tableau des déclarations d'activité de l'établissement : (dans de rares cas, un établissement peut avoir plusieurs NDA environ 30 établissements sur 120 000)| 
| Numéro de déclaration d'activité      | `11910843391`  | |
| Indique que le NDA est actif   | `true` ou `false`| Ce champ indique le numéro de déclaration d'activité (NDA) de l'établissement est actif. Pour conserver un NDA valide, l'établissement doit remplir chaque année un bilan pédagogique et financier prévu à l'article L6352-11 du Code du travail. Sans cette démarche le numéro NDA devient inactif, l'établissement est retiré de la liste publique des organismes de formation. |
| Date de dernière déclaration  | `2021-01-30` | Cette date indique le jour où l'établissement a transmi son bilan pédagogique et financier (BPF), indispensable pour maintenir actif le numéro de déclaration d'activité (NDA). Cette date est transmise au format AAAA-MM-DD. |
| Date de début d'exercice fiscal      | `2021-01-30` | Cette date correspond à la fin du dernier exercice fiscal analysé pour le bilan pédagogique et financier. Cette date est transmise au format AAAA-MM-DD.|
| Certification qualiopi     | `"action_formation": true` <br> `"bilan_competences": true` <br/>`"validation_acquis _experience": true`  <br/> `"apprentissage": true` <br/>`"obtention_via _unite_legale": true` | **Certication Action Formation** : Indique si l'établissement est certifié Action Formation <br/> **Certification Bilan Compétences** : Indique si l'établissement est certifié Bilan Compétences <br/> **Certification Bilan Compétences** : indique si l'établissement est certifié Bilan Compétences <br/> **Certification VAE** : indique si l'établissement est certifié VAE (Validation des Acquis de l'Experience) <br/> **Certification Apprentissage** : indique si l'établissement est certifié Action de Formation par Apprentissage <br/> **Obtention via unité légale** : indique si le certificat Qualiopi est propagé depuis le SIREN de l'unité légale ex: true |
| Specialités |     `"specialite_1": {` <br/> `"code": "313",` <br/> `"libelle": "Finances, banque, assurances"` <br/>`},` | Informations relatives aux spécialités relevant du numéro de déclaration d'activité et figurant dans le bilan pédagogique et financier. Un établissement peut ne pas avoir de spécialités, et l'API en transmet jusqu'à trois, leur ordre n'a pas d'importance. |
| **Habilitations France compétences**  | |Tableau des habilitations France Compétences obtenues par l'établissement. La liste des habilitations France Compétences n'est pas figée et est mise à jour régulièrement par les organismes certificateurs. |
| Code de l'habilitation | `RNCP10013` | Code de l'habilitation  France Compétences|
| Indique si l'habilitation est active | `true` ou `false`|  |
| Date à laquelle l'habilitation est passée en état active |  `2030-01-30`  ||
| Date de fin d'enregistrement |  `2030-01-30`  ||
| Date de fin d'enregistrement de l'habilitation de l'établissement agrée |  `2030-01-30`  |  Cette date est transmise au format AAAA-MM-DD |
| Date de décision | `2020-01-30` | Date de décision de l'habilitation de l'établissement agrée : Cette date est transmise au format AAAA-MM-DD | 
| Habilitation à former | `true` ou `false` | Indique que cette habilitation autorise à former/préparer les candidats à une certification inscrite au répertoire national des compétences professionnelles (RNCP) ou au répertoire spécifique (RS). Cette habilitation vise à s'assurer que les organismes de formation proposant des offres de formation certifiantes, sont bien habilités à préparer des élèves à cette certification |
| Habilitation à organiser l'évaluation | `true` ou `false`| Indique que cette habilitation autorise à mettre en place des épreuves pour évaluer les compétences des candidats visant une certification inscrite au répertoire national des compétences professionnelles (RNCP) ou au répertoire spécifique (RS) |
|Siret des organismes certificateurs | `12345678901234` |Liste des SIRETs des organismes certificateurs ayant délivré à l'établissement les habilitations à former et/ou organiser l'évaluation de leur certification.|


## Vous avez besoin d'autres données sur les entreprises ou les associations ?

**Demander un accès au bouquet <External href='/les-api/api-entreprise'>API Entreprise</External>** opéré par la DINUM. Ce dernier vous permet d'obtenir de nombreuses données entreprises et associations avec une seule habilitation.

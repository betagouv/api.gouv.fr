---
title: API élève scolarisé
tagline: Statut scolarisé et statut boursier d'un élève du primaire, collège ou lycée. 
datapass_link: https://datapass.api.gouv.fr/TODO
access_page:
  - who:
      - Un particulier
      - Un étudiant
      - Une entreprise
    is_eligible: -1
    description: |
      Vous ne pouvez pas accèder à ces informations.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Une administration
    is_eligible: 1
    description: |
      Vous êtes éligible. TODO
      <NextSteps />
      <QuestionTree tree='france-connected-api TODO' question='statutEtudiant TODO' />
is_open: -1
is_france_connected: 1
producer: men
keywords:
  - TODO MOTS CLÉS DE LA RECHERCHE
themes:
  - Particulier
  - Education
contact_link: statutetudiant@enseignementsup.gouv.fr TODO
doc_tech_link: URL TODO
visits_2019: 4000
last_update: 10/10/2023
---

Cette API, délivrée directement par le Ministère de l'éducation nationale, permet de vérifier si un particulier est scolarisé au primaire, au collège ou au lycée, et savoir s'il est boursier.
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

### Données

Cette API indique si l’élève est scolarisé et sous quel statut pour l’année scolaire en cours et bientôt N+1. Le statut boursier ainsi que l’échelon de bourse est également précisé le cas échéant.

| Donnée                             | Description                           |
| ---------------------------------- | ------------------------------------- |
| Nom de la donnée 1                 | description                                                                                                                           |
| Nom de la donnée 1                 | description      | 
| Nom de la donnée 1                 | description      | 

### Modalités d'utilisation des scopes
TODO si pertinent

TODO FranceConnect si pertinent.

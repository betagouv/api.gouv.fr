---
title: API Immersion Facilitée
tagline: Faciliter la réalisation des immersions professionnelles.
is_open: 0 # 0 means API require an account
account_link: https://immersion-facile.beta.gouv.fr/doc-api
external_site: https://immersion-facile.beta.gouv.fr/
producer: gip-inclusion
keywords:
  - Insertion
  - Immersion professionnelle
  - Recrutement
  - Projet professionnel
  - social
  - Inclusion
  - Aides
  - Entreprise
  - Inclusive
#rate_limiting_resume: 
themes:
  - Entreprise
  - Emploi
contact_link: admin@immersion-facile.beta.gouv.fr
doc_tech_link: https://immersion-facile.beta.gouv.fr/doc-api
content_intro: |
  Le but d'Immersion facilitée est de faciliter la réalisation des immersions professionnelles en s’appuyant sur deux piliers :
  - la dématérialisation de la convention et, à terme, du bilan
  - un annuaire d’entreprises accueillantes, volontaires pour accueillir en immersion professionnelle sur leurs métiers. Cette base entreprise est enrichie par l’appel à des bases existantes (La Bonne Boîte …). La base est accessible grâce à un moteur de recherche et un parcours de mise en relation avec l’entreprise.

last_update: 13/03/2024
---

## À quoi servent les API  d’Immersion facilitée ?

Les API permettent  :

🔎 **La recherche d'entreprises accueillantes et mise en contact** :

- Consulter le détail d’une offre d’immersion
- Rechercher des offres d'immersion correspondant à une recherche
- Soumettre une demande de mise en contact auprès d’une entreprise accueillante


🔎 **L'accès aux conventions** (dans ce cas il nous faudra connaître les agences qui vous concernent)

- Récupération et consultation du détail d’une convention
- Lister (avec filtre) les conventions rattachées au consommateur


👉 [Tester le service](https://immersion-facile.beta.gouv.fr/)


## Quelles sont les données contenues dans l'API Immersion facilitée ?

On retrouve - entre autres :

### Entreprises accueillantes

➡️ SIRET,<br>
➡️ Raison sociale ou nom d'enseigne,<br>
➡️ NAF,<br>
➡️ Effectifs,<br>
➡️ Adresse de l'entreprise,<br>
➡️ Métiers (ROME et appellations) pour lesquels l’entreprise est prête à accueillir en immersion,<br>
➡️ Les modalités de mise en relation,<br>

### Conventions d’immersion (PMSMP)

➡️ Toutes les informations contenues dans la convention,<br>
➡️ L’état de la convention :
- En brouillon ou demande de modification en cours
- Obsolète
- Partiellement signée
- Prête à signer
- Rejetée
- Validée par le prescripteur
- À valider par le conseiller
- À valider par le prescripteur

ℹ️ La souscription aux API se fait par  *webhook*.  Une clé API est nécessaire pour utiliser  les API. Cette clé est fournie sur demande auprès de l’équipe.


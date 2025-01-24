---
title: API Fichier des Comptes Bancaires et Assimilés (FICOBA)
tagline: Accédez aux coordonnées bancaires d'un usager connues de l’administration fiscale (DGFIP) et transmises par les établissements bancaires
producer: dgfip
is_open: -1
datapass_link: https://datapass.api.gouv.fr/api-ficoba-sandbox
access_page:
  - who:
      - Un particulier
      - Une entreprise
    is_eligible: -1
    description: |
      Vous n’êtes pas autorisé à accéder aux données de l’API Fichier des Comptes Bancaires et Assimilés (FICOBA).

      Pour les particuliers : dans certaines conditions vous pouvez avoir accès à votre compte bancaire en suivant le lien suivant : https://www.cnil.fr/fr/exercer-ses-droits-par-lintermediaire-de-la-cnil

      <Button href="/rechercher-api">Retourner à la page de recherche</Button>
  - who:
      - Une entité administrative
    is_eligible: 0
    description: |
      L'API FICOBA restituant des éléments sensibles (comptes bancaires du titulaire et/ou du co-titulaire, état civil et adresse) est couvert par la règle du secret professionnel prévue par les dispositions de <External href="https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000031366350&idArticle=LEGIARTI000031367308&dateTexte=&categorieLien=cid">l'article L100-3</External> du Livre des Procédures Fiscales, car ceux-ci constituent des données nominatives et personnelles. Il ne peut être dérogé au secret professionnel que par une disposition législative spécifique.

      En conséquence, les informations restituées par l'API FICOBA ne peuvent être communiquées qu’aux personnes, organismes ou autorités bénéficiant d’une telle mesure et dans la limite fixée par la loi.

      Pour obtenir un agrément, vous devez **justifier du cadre juridique** dans lequel s’inscrit votre demande.

      <NextSteps service_description="de la description du service justifiant l'accès aux données" />
      <QuestionTree tree='formulaire-unique' question='ficoba' />
  - who:
      - Un éditeur de logiciel
    is_eligible: 0
    description: |
      Si vous êtes éditeur de logiciels et agissez pour le compte d'une administration ou d'une collectivité, vous pouvez remplir une demande d'habilitation à l'API FICOBA en bac à sable.

      En conséquence, les informations restituées par l'API FICOBA ne peuvent être communiquées qu’aux personnes, organismes ou autorités bénéficiant d’une telle mesure et dans la limite fixée par la loi.

      Pour obtenir un agrément, vous devez **justifier du cadre juridique** dans lequel s’inscrit votre demande.

      <NextSteps service_description="de la description du service justifiant l'accès aux données" is_editeur={true}/>
      <Button href="https://datapass.api.gouv.fr/api-ficoba-sandbox">Remplir une demande</Button>
  - who:
      - Un établissement bancaire
    is_eligible: 0
    description: |
      Conformément au II de l'article R. 221122 du code monétaire et financier (version au 01/01/2026), l'établissement saisi de la demande d'ouverture d'un produit d'épargne réglementée interroge l'administration fiscale afin de vérifier si la personne détient déjà un produit d'épargne réglementée de la même catégorie.
      Cette saisine comporte une série de données dont la liste est fixée par arrêté des ministres chargés de l'économie et du budget. Il y est précisé si le client a accepté ou refusé que les informations relatives aux produits d'épargne réglementée de la même catégorie qu'il détiendrait déjà soient communiquées à l'établissement de crédit.
      Sur demande de l'administration, l'établissement produit le contrat conclu.

      Si vous entrez dans ce cadre, vous pouvez effectuer une demande d'habilitation à l’API FICOBA.

      <NextSteps service_description="de la description du service justifiant l'accès aux données" />
      <Button href="https://datapass.api.gouv.fr/api-ficoba-sandbox">Remplir une demande</Button>
keywords:
  - Fichier
  - Compte
  - Bancaire
  - IBAN
  - banque
  - etat
  - civil
  - SPI
  - SIREN
  - SIRET
  - fiscal
  - identifiant
rate_limiting_resume: 200 appels/minute
rate_limiting_description: |
  L’API Manager de la DGFiP délivre un quota de consultation pour chacun de ses partenaires pour chaque API utilisée. Concernant l'API Ficoba le quota par partenaire est fixé à 200 appels à la minute.
monitoring_description: |
  La DGFIP s’engage à ce que le service soit accessible à plus de 98,5% et à communiquer sur les coupures de service ponctuelles qui pourraient survenir.
themes:
  - Particulier
  - Entreprise
contact_link: dtnum.donnees.demande-acces@dgfip.finances.gouv.fr, tapir.dgfip@dgfip.finances.gouv.fr
doc_tech_link: /swaggers/api-ficoba.json
last_update: 22/09/2020
visits_2019: 11000
---

L'API FICOBA (*FI*chier des *CO*mptes *B*ancaires et *A*ssimilés) permet aux entités administratives (administrations publiques, ministères, organismes sociaux) et aux acteurs privés qui sont éligibles d’accéder aux coordonnées bancaires d'un usager afin de permettre d'intégrer et de valider ces données dans leur système d'information.

En effet, selon les dispositions de <External href='https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041578443/2020-02-29'>l'article 1649 A du Code Général des Impôts</External> : _"les administrations publiques, les établissements ou organismes soumis au contrôle de l'autorité administrative, (...) et toutes personnes qui reçoivent habituellement en dépôt des valeurs mobilières, titres ou fonds doivent déclarer à l'administration des impôts l'ouverture et la clôture des comptes de toute nature (...)"_.

### A quoi sert l'API Ficoba ?

L'API permet de rechercher un compte bancaire, de plusieurs manières:

- avec un identifiant : IBAN, SIREN/SIRET ou identifiant fiscal (SPI, voir <External href='/les-api/api_r2p'>API R2P</External>)
- avec un état civil d'un usager, avec ou sans adresse, pour une personne physique
- avec la dénomination et deux éléments d'adresse pour une personne morale
- Vérifier l'existence d'un compte bancaire
- Valider la cohérence entre un compte et l'identité du titulaire

**Cas spécifique**: lors de l'ouverture d'un produit d'épargne réglementé (ex : livret d'épargne populaire LEP, livret A etc.), l’API peut être appelée pour le contrôle de la multi-détention de comptes. Dans ce cas elle peut être interrogée de quatre manières :

- Accord client (et adresse facultative)
- Etat civil de la personne physique (et adresse facultative)
- Raison sociale de la personne morale et adresse
- SIRET ou SIREN et adresse

### Exemples de cas d'utilisation :

- vérification de la validité d'un IBAN dans le cadre de la lutte contre la fraude pour la prise en charge d'une facture dans CHORUS
- pour une banque dans le cadre du contrôle de la multi-détention avant l'ouverture d'un LEP
- recouvrement forcé d'un organisme social qui a versé une prestation obtenue par fraude

### Les données disponibles dans l'API

Cette API fait appel au référentiel national FICOBA géré par la DGFiP afin de rechercher et de restituer les éléments relatifs à un compte associé au titulaire : état civil, dénomination, l'adresse d'un usager ou d'une personne morale.

En fonction du besoin métier, l'API permet de restituer pour un compte bancaire les données associées à ce compte :

| Nom de la donnée                | Commentaire                                                                                                            |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| l’état civil ou la dénomination | l'état civil complet (la dénomination pour une personne morale) du titulaire du compte et/ou du co-titulaire du compte |
| l’adresse                       | la dernière adresse connue du titulaire transmise par l'établissement bancaire                                                   |
| la désignation du compte        | le numéro (IBAN), la nature, le type et la caractéristique du compte                                                    |
| l’établissement bancaire        | désignation de l'établissement et du guichet gestionnaire du compte                                                      |
| date                            | la date d’ouverture du compte et la date de clôture le cas échéant                                                     |

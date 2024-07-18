---
title: API Chorus Pro
tagline: Envoyer facilement vos factures électroniques à une entité publique française
external_site: http://www.chorus-pro.gouv.fr/
is_open: -1 # -1 means API not open
access_page:
  - who:
      - Un éditeur
      - Une entreprise
    is_eligible: 0
    description: |
      La plateforme s’adresse à l’ensemble des fournisseurs de l'Etat, tant privés que publics, afin de leur permettre de transmettre de façon efficace et automatique leurs factures à destination de la sphère publique.

      <Button href="https://piste.gouv.fr/en/api-catalog-sandbox">Faire une demande d'habilitation</Button>
  - who:
      - Une collectivité
      - Un établissement public
      - Un Ministère
    is_eligible: 1
    description: |
      La plateforme s’adresse aux entités du **secteur public** : l’Etat, les établissements publics nationaux (EPN), les collectivités territoriales et les établissements publics locaux (EPL).

      Elle permet de traiter l’ensemble des factures de manière optimisée en réduisant les délais de validation et d’enregistrement.

      <Button href="https://piste.gouv.fr/en/api-catalog-sandbox">Faire une demande d'habilitation</Button>
  - who:
      - Un particulier
    is_eligible: -1
    description: |
      Chorus Pro s’adresse aux des acteurs de la commande publique : émetteurs et récepteurs de facture.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
partners:
  - AIFE
  - DGFiP
producer: aife
keywords:
  - Factures
  - Dématérialisation
  - Comptabilité
  - Portail professionel
themes:
  - Administration & législation
contact_link: api-choruspro.aife@finances.gouv.fr
doc_tech_external: https://communaute.chorus-pro.gouv.fr/documentation/specifications-externes/
visits_2019: 3000
doc_tech_link: /swaggers/api-chorus-pro.json
last_update: 07/08/2017
---

### Qu’est-ce que Chorus Pro ?

Chorus Pro est la solution mutualisée de facturation électronique qui a été mise en place pour tous les fournisseurs de la sphère publique afin de répondre aux obligations fixées par l’ordonnance du 26 juin 2014. Cette solution a remplacé en septembre 2016 Chorus Factures, utilisé depuis le 1 er janvier 2012 par les fournisseurs de l’État.
La construction de cette solution a démarré en 2015, après une vaste phase de concertation tant avec les représentants des entreprises qu’avec ceux de la sphère publique. Elle s’est poursuivi tout au long de l’année 2016 avec en ligne de mire son déploiement au premier janvier 2017.

L’ordonnance du 26 juin 2014 relative au développement de la facturation électronique prévoit une dématérialisation des factures à compter du 1er janvier 2017 pour les grandes entreprises et les entités publiques , puis une généralisation progressive d’ici le 1er janvier 2020 en tenant compte de la taille des entreprises concernées :

- au 1er janvier 2017 : pour les grandes entreprises (plus de 5000 salariés) et les personnes publiques ;
- au 1er janvier 2018 : pour les entreprises de taille intermédiaire (250 à 5000 salariés) ;
- au 1er janvier 2019 : pour les petites et moyennes entreprises(10 à 250 salariés) ;
- au 1er janvier 2020 : pour les microentreprises (moins de 10 salariés).

### A qui s’adresse Chorus Pro ?

Chorus Pro s’adresse à l’ensemble des acteurs de la commande publique :

- **Côté émetteurs** : la plateforme s’adresse à l’ensemble des fournisseurs tant privés que publics, afin de leur permettre de transmettre de façon efficace et automatique leurs factures à destination de la sphère publique. La solution Chorus Pro prend également en compte le processus de gestion et de validation des factures de travaux.
- **Côté récepteurs** : la plateforme s’adresse aux entités du **secteur public** : l’Etat, les établissements publics nationaux (EPN), les collectivités territoriales et les établissements publics locaux (EPL). Elle leur permet de traiter l’ensemble des factures de manière optimisée en réduisant les délais de validation et d’enregistrement.

### Chorus Pro côté émetteur :

Les fournisseurs qu’ils soient issus du domaine privé ou du secteur public ont accès via Chorus Pro à l’ensemble des fonctionnalités suivantes :

- [Dépôt](https://communaute.chorus-pro.gouv.fr/deposer-flux-facture/) ou [saisie d’une facture](https://communaute.chorus-pro.gouv.fr/soumettre-facture/),
- [Suivi du traitement de ses factures](https://communaute.chorus-pro.gouv.fr/rechercher-facture-par-fournisseur/),
- [Ajout de pièces complémentaires nécessaires au traitement de sa facture](https://communaute.chorus-pro.gouv.fr/completer-facture/),
- [Consultation des engagements émis par les services de l’Etat](https://communaute.chorus-pro.gouv.fr/rechercher-engagement-juridique/).

### Chorus Pro côté récepteur :

Les récepteurs de factures ont la possibilité de réaliser les actions suivantes :

- [Consultation](https://communaute.chorus-pro.gouv.fr/consulter-facture-par-recipiendaire/) et [téléchargement de factures ainsi que de leurs pièces-jointes](https://communaute.chorus-pro.gouv.fr/telecharger-groupe-facture/),
- [Validation ou rejet de dossiers de facturation](https://communaute.chorus-pro.gouv.fr/traiter-facture-recue/),
- [Recherche de factures reçues/archivées](https://communaute.chorus-pro.gouv.fr/rechercher-facture-par-recipiendaire/).

### Site de qualification

Le portail Chorus Pro de Qualification permet de se connecter à un environnement similaire à l’environnement de production, afin de prendre en main la solution et de monter en compétences.
Dans cet environnement, il est possible d’exploiter les principales fonctionnalités du portail Chorus Pro : dépôt, traitement et recherche de factures, gestion des espaces, suivi des flux, etc.

Pour les structures souhaitant mettre en œuvre un raccordement technique à Chorus Pro, le portail de Qualification offre la possibilité de se raccorder à un environnement de qualification pour réaliser les tests techniques nécessaires. **Cette étape est indispensable avant de se raccorder en production.**

Dans le cadre d’un projet de raccordement, le portail de Qualification permet :

- D’effectuer une demande de raccordement EDI ou API ;
- D’envoyer des flux vers l’environnement de qualification ;
- De recevoir des flux depuis l’environnement de qualification ;
- D’effectuer des appels API
- De suivre les flux émis par EDI ou API
  En complément de ces fonctionnalités, le portail de Qualification dispose d’une fonctionnalité de test des formats entrants et sortants.

Il est accessible à cette [adresse](http://chorus-pro.gouv.fr/qualif/)

### Site de Production

Chorus Pro de production est accessible à cette [adresse](http://chorus-pro.gouv.fr/cpp/)

### Portail PISTE

L’AIFE a mis en place la plateforme PISTE: Plateforme d’Intermédiation des Services pour la Transformation de l’Etat. Celle-ci mutualise les services API (Application Programming Interface) de l’Etat et de la sphère publique. Autrement dit, cette plateforme a pour vocation de fournir un point d’entrée unique pour invoquer l’ensemble des API mis à disposition par le secteur public. Le catalogue des API accessibles à partir de PISTE couvre notamment la facturation électronique, avec Chorus Pro, mais aussi le Service DUME, Légifrance ou encore Guichet entreprises.

PISTE est accessible à cette [adresse](https://piste.gouv.fr/en/api-catalog-sandbox)

### Site de la communauté Chorus Pro

La communauté Chorus Pro est accessible à cette [adresse](https://lab.chorus-pro.gouv.fr/)

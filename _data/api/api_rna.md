---
title: API Répertoire National des Associations
tagline: Le registre public des associations
is_open: 1 # 1 means API is fully open
partners:
  - beta.gouv.fr
  - DINUM
  - Ministère de l’Interieur
  - Etalab
producer: dinum
keywords:
  - Répertoire
  - open data
  - Associations
  - RNA
themes:
  - Entreprise
rate_limiting_resume: 7 appels / seconde
rate_limiting_description: |
  Actuellement, le nombre d’appels à l’API est limité à 7 appels par seconde
uptime: 100
monitoring_link: https://status.entreprise.data.gouv.fr/
monitoring_description: |
  Une supervision du service en temps réel est disponible à cette adresse.
contact_link: entreprise@data.gouv.fr
doc_tech_external: https://entreprise.data.gouv.fr/api_doc/rna
datagouv_uuid:
  - 58e53811c751df03df38f42d
visits_2019: 3000
last_update: 16/06/2020
content_intro: |
  L’API Répertoire des Associations (RNA) permet d'interroger le répertoire des associations françaises.

  ### A quoi sert cette API ?

  Ajouter l’API dans votre système d'information vous permet de :

  - requêter les données d'une association grâce à son SIRET
  - requêter les données d'une association grâce à son nom
  - requêter les données d'une association grâce à son code RNA

  Si vous êtes une association et recherchez votre numéro RNA, vous pouvez consulter le [moteur de recherche des associations du journal officiel](https://www.journal-officiel.gouv.fr/associations/recherche/), ou [la fiche explicative sur service-public.fr](https://www.service-public.fr/associations/vosdroits/F34726).
---

### Les données disponibles dans l'API

Les principales données accessibles sont :

| Nom        | Description                                                                  |
| ---------- | ---------------------------------------------------------------------------- |
| Titre      | nom de l'association                                                         |
| Objet      | description de l'association                                                 |
| Adresse    | numero de voie, rue, ville et code postal                                    |
| numéro RNA | identifant d'une association. Commence par un W et est composé de 9 chiffres |

### Que contient le RNA ?

Le RNA répertorie l’ensemble des associations relevant de la loi du 1er juillet 1901 relative au contrat d’association, dont le siège est en France (métropole et outre-mer) à l’exclusion des départements de la Moselle (57), du Bas-Rhin (67) et du Haut-Rhin (68) qui relèvent d’un régime spécifique.
Le RNA contient également, dans les mêmes conditions, les associations reconnues d’utilité publique.
Le RNA est alimenté après instruction du dossier par le greffe des associations lors d’une création, d’une modification ou d’une dissolution.

Les déclarations de création sont ensuite publiées au Journal Officiel des Associations et Fondations d’Entreprise (JOAFE).

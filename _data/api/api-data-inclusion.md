---
title: API data·inclusion
tagline: data·inclusion facilite et accélère le partage des données entre les acteurs de l'insertion en mutualisant l’effort de mise à jour et de recensement entre les différents services numériques.
is_open: 0 # 0 means API require an account
account_link: https://www.data.inclusion.beta.gouv.fr/api/conditions-generales-dutilisation-de-lapi
external_site: https://www.data.inclusion.beta.gouv.fr
datagouv_uuid:
  - 6233723c2c1e4a54af2f6b2d
partners:
  - gip-inclusion
  - France Travail
  - Les lieux de médiations numérique
  - Collectivités territoriales
  - 1jeune1solution
producer: gip-inclusion
keywords:
  - Inclusion
  - Insertion
  - Siret
  - Sociale
  - Subvention
contact_link: https://tally.so/r/w7N6Zz
doc_tech_link: https://api.data.inclusion.beta.gouv.fr/openapi.json
doc_tech_external: https://api.data.inclusion.beta.gouv.fr/api/v0/docs
stats_detail_resume: Accédez au suivi des consommations des API
stats_detail_description: Tableau de bord public disponible ci-dessous
stats_detail_link: http://metabase.data.inclusion.beta.gouv.fr/public/dashboard/a53c0d36-3467-41d9-876e-973311604ae2
#monitoring_link: https://stats.uptimerobot.com/kXzwzfk7BE
#monitoring_description: |
#  Une supervision du service en temps réel est disponible à cette adresse.
#uptime: 99.96
themes:
  - Administration
  - Emploi

content_intro: |
  L'API data·inclusion permet de mettre en œuvre le principe « Dites-le-nous une fois », en application de [l’article L114-8 du Code des relations entre le public et l’administration](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000045213315)

  L’équipe data·inclusion propose le traitement et l’analyse des jeux de données multi sources en un seul et unique patrimoine commun disponible publiquement 👉 [Accéder à notre site](https://www.data.inclusion.beta.gouv.fr/)

last_update: 13/03/2024
---

### À quoi sert l'API data.inclusion  ?

L’API data·inclusion a mis en place un langage commun pour définir l’offre d’insertion. Ce langage se traduit par [un schéma public de données](https://github.com/gip-inclusion/data-inclusion-schema/tree/main/schemas) que toute donnée intégrée dans data·inclusion respecte.

Nos données sont disponibles en accès libre open-data ou par API. Le jeu en open-data n’inclut aucune donnée personnelle. L’API offre une connexion en flux direct et permet la mise à jour en temps réel des données, évitant ainsi les risques liés à l’obsolescence des informations.

### Les différents cas d'usage

![Illustration cas d'usage](/images/divers/api-data-inclusion-ecosystem.png)

### Quelles sont les données contenues dans l'API data.inclusion  ?

Schéma des structures et services d'insertion

🔎 Exemple schéma "Structure"

```
[
	{
    	"id": "c3d15659-8de9-4fd6-b283-04d50f6ace57",
    	"siret": "60487647500499",
    	"rna": "W123456789",
    	"nom": "MOBILETTE",
    	"commune": "Robinboeuf CEDEX",
    	"code_postal": "09891",
    	"code_insee": "09890",
    	"adresse": "RUE DE LECLERCQ",
    	"date_maj": "2022-04-28T16:53:11Z",
    	"complement_adresse": "HOTEL DE VILLE",
    	"longitude": 7.848133,
    	"latitude": 48.7703,
    	"typologie": "ASSO",
    	"telephone": "0102030405",
    	"courriel": "julie@example.net",
    	"site_web": "https://www.asso-gonzalez.net/",
    	"presentation_resume": "L’association Mobilette propose des solutions de déplacement aux personnes pour qui la non mobilité est un frein à l’insertion professionnelle : - connaissance de l'offre de transport du territoire - accès à un véhicule 2 ou 4 roues - transport solidaire - accès au permis",
    	"presentation_detail": null,
    	"source": "solidagregateur",
    	"antenne": True,
    	"lien_source": "https://solidagregateur.fr/structures/c3d15659-8de9-4fd6-b283-04d50f6ace57",
    	"horaires_ouverture": "Mo-Fr 10:00-20:00 \"sur rendez-vous\"; PH off",
    	"accessibilite": "https://acceslibre.beta.gouv.fr/app/29-lampaul-plouarzel/a/bibliotheque-mediatheque/erp/mediatheque-13/",
    	"labels_nationaux": ["MOBIN", "AFPA"],
    	"labels_autres": ["Nièvre médiation numérique"],
    	"thematiques": ["mobilite", "trouver-un-emploi"]
	}
]
```


🔎 Exemple schéma "Service"

```
[
	{
    	"id": "mon-service-id",
    	"structure_id": "ma-structure-id",
    	"source": "dora",
    	"nom": "TISF",
    	"presentation_resume": "Accompagnement des familles à domicile",
    	"presentation_detail": "Service de proximité visant à soutenir les familles ayant la responsabilité de jeunes enfants, en particulier les familles monoparentales.",
    	"types": [
        	"formation",
        	"information",
        	"aide-materielle",
        	"accueil",
        	"accompagnement",
    	],
    	"thematiques": ["mobilite"],
    	"prise_rdv": "https://www.alys.fr/familles/etre-accompagne-a-domicile",
    	"frais": "gratuit",
    	"frais_autres": null,
    	"profils": ["adultes","jeunes-16-26", "femmes"],
    	"pre_requis": "Bonne connaissance du français oral et écrit",
    	"cumulable": True,
    	"justificatifs": "Carte d'identité, passeport ou permis de séjour",
    	"modes_orientation_accompagnateur": ["envoyer-un-mail-avec-des-documents-a-completer"],
    	"modes_orientation_beneficiaire": ["envoyer-un-email", "se-presenter"],
    	"formulaire_en_ligne": null,
    	"commune": "Plougasnou",
    	"code_postal": "29630",
    	"code_insee": "29188",
    	"adresse": "25 route de Morlaix",
    	"complement_adresse": null,
    	"longitude": 3.76855,
    	"latitude": 23.88654,
    	"recurrence": "Tu 09:00-12:00;We 14:00-17:00",
    	"date_creation": "2023-02-04T12:34:44Z",
    	"date_maj": "2023-03-11T16:54:10Z",
    	"date_suspension": null,
    	"lien_source": "https://dora.fabrique.social.gouv.fr/services/etre-accompagne-a-domicile",
    	"telephone": "02 78 91 12 62",
    	"courriel": "contact@alys.fr",
    	"contact_nom_prenom": "Gwennaël Kergonna",
    	"contact_public": True,
    	"modes_accueil": ["a-distance", "en-presentiel"],
    	"zone_diffusion_type": "departement",
    	"zone_diffusion_code": "29",
    	"zone_diffusion_nom": "Finistère"
	}
]
```

### Typologie d'utilisateurs

#### Producteurs
Les acteurs de l’insertion qui partagent leur offre de service sur notre commun numérique. Leur offre est variée en termes de thématiques abordées, de publics ciblés et de couverture géographique.

➡️ [Devenir producteur](https://tally.so/r/w7N6Zz)

#### Consommateurs
Toute personne qui récupèrent et utilisent les données disponibles sur data·inclusion. Nos consommateurs sont variés : communs numériques, annuaires d'offre d'insertion, logiciels de suivi de parcours, outils de cartographie, outils de pilotage pour l'administration…”

➡️ [Devenir consommateur](https://tally.so/r/w7N6Zz)




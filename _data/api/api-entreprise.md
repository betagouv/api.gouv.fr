---
title: API Entreprise
tagline: Entités administratives, simplifiez les démarches des entreprises et des associations en récupérant pour elles leurs informations administratives.
external_site: https://entreprise.api.gouv.fr/
is_open: -1 # -1 means API not open
datapass_link: https://datapass.api.gouv.fr/api-entreprise
access_page:
  - who:
      - Un particulier
    is_eligible: -1
    description: |
      L’usage des données de l’API Entreprise est reservé aux acteurs publics : les administrations, leurs opérateurs et les collectivités, les acteurs de santé, etc.

      <Button href='/les-api/api-entreprise#alternatives-en-acces-libre' >Consulter les alternatives</Button>
  - who:
      - Une entité administrative
    is_eligible: 1
    description: |
      L’API Entreprise vous permet d’accéder directement aux données des entreprises et des associations pour faciliter leurs démarches (demandes d’aides, marchés publics, ...).

      Pour vérifier que l’API Entreprise vous permet d’accéder aux données dont vous avez besoin, consultez :

      - le [catalogue des données](https://entreprise.api.gouv.fr/catalogue/) ;
      - les [cas d’usage](https://entreprise.api.gouv.fr/cas_usage/) de l’API Entreprise.

      <QuestionTree tree='api-entreprise' question='administrations' />
  - who:
      - Une entreprise ou une association
    is_eligible: 0
    description: |
      <QuestionTree tree='api-entreprise' question='entreprises-or-associations' />
  - who:
      - Un éditeur de logiciel
    is_eligible: 0
    description: |
      <QuestionTree tree='api-entreprise' question='editors' />
stat:
  lastXdays: 30
  url: https://dashboard.entreprise.api.gouv.fr/api/watchdoge/stats/last_30_days_usage
  label: informations non redemandées aux entreprises
partners:
  - ADEME
  - Agefiph
  - Agence BIO
  - Banque de france
  - CMA France
  - CNETP
  - dgfip
  - Douanes
  - Fabrique numérique des ministères sociaux
  - FNTP
  - Infogreffe
  - INPI
  - INSEE
  - Ministère intérieur
  - MSA
  - OPQIBI
  - ProBTP
  - Qualibat
  - urssaf
producer: dinum
keywords:
  - Établissement
  - Entreprise
  - Association
  - Administration
  - Certification
  - Certificat
  - Attestation
  - Vigileance
  - Fiscal
  - Social
  - RCS
  - Actes
  - Conventions
  - Entreprise artisanale
  - Effectifs
  - EORI
  - Chiffre d'affaires
  - Bilans
  - Déclarations
  - Liasses
  - Conformité
  - Travailleur handicapé
  - Handicapé
  - Cotisations
  - Retraite
  - Congés payés
  - Chômage intempérie
  - Carte professionnelle
  - BIO
  - Biologique
  - RGE
  - Qualification
  - Bâtiment
  - Ingénierie
  - Brevet
  - Marque
  - Marché
  - Fraude
  - Aides
  - Juridique
  - Géographique
  - Registre
  - Répertoire
  - Sirene
  - Siret
  - Siren
  - RNA
  - Redressement judiciaire
  - Adresse
  - Mandataire
  - Statut
  - Délibération
  - Document
  - PDF
  - JSON
  - Capital social
  - Associé
  - Identifiant
  - Métier
  - Activité
  - Dates
  - Chambre des métiers
  - TPE
  - Covid-19
  - Coronavirus
  - Aide Covid
  - Immatriculation
  - Immatriculé
  - Numéro
  - Numéro EORI
  - Comptes
  - Greffe
  - Obligation fiscale
  - Obligation sociale
  - Contributions
  - Agricol
  - Agriculture
  - Travaux
  - Travaux publics
  - Eligible
  - Eligibilité
  - Organismes certificateurs
  - Compétences
  - Rénovation énergétique
rate_limiting_resume: 1000 requêtes/min par IP
rate_limiting_description: "Les limites de volumétrie sont détaillées ici :"
rate_limiting_link: https://entreprise.api.gouv.fr/doc/#respecter-la-volumétrie/
monitoring_link: https://status.entreprise.api.gouv.fr/
contact_link: https://entreprise.api.gouv.fr/support/
doc_tech_link: https://entreprise.api.gouv.fr/v2/open-api.yml
useSwaggerProxy: true
doc_tech_external: https://entreprise.api.gouv.fr/catalogue/
themes:
  - Entreprise
visits_2019: 12610
uptime: 100
last_update: 14/09/2020
content_intro: |
  API Entreprise permet aux entités administratives d'accéder aux données et aux documents administratifs des entreprises et des associations, afin de simplifier leurs démarches.

  ### À quoi sert l’API Entreprise ?

  En intégrant la brique API Entreprise dans votre système d’information ou votre site internet :

    - Vous n’avez **plus besoin de demander certains justificatifs** aux entreprises et associations&nbsp;;
    - Vous n’avez pas de vérification supplémentaire à réaliser car les **informations sont certifiées**&nbsp;;
    - Vous accédez avec un seul compte aux données de **différents fournisseurs** tels que l’INSEE, la DGFIP, l’URSSAF, etc.

  Au delà de la simplification apportée aux agents habilités des administrations, l'API Entreprise rend service aux entreprises et associations en leur évitant de chercher leurs documents administratifs et en permettant le pré-remplissage automatique de leurs formulaires.

  L’API permet notamment de simplifier le dépôt et l'instruction des candidatures aux <External href='https://entreprise.api.gouv.fr/cas_usage/marches_publics/'>marchés publics</External> et des demandes d'<External href='https://entreprise.api.gouv.fr/cas_usage/aides_publiques/'>aides et subventions publiques</External>.
  <External href='https://entreprise.api.gouv.fr/cas_usage/'>Découvrir tous les cas d'usage</External>
---

### API accessibles depuis l'API Entreprise

Pour avoir la liste à jour des API disponibles, n'hésitez pas à consulter le <External href='https://entreprise.api.gouv.fr/catalogue/'>catalogue des données de l’API Entreprise</External>. Le catalogue vous permet également de découvrir la liste précise des données disponibles pour chacune des API.

| API                                                                                                                                                               | Fournisseur de la donnée                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| **Données générales :**                                                                                                                                           |                                           |
| <External href='https://entreprise.api.gouv.fr/catalogue/#a-entreprises'>Données de référence d'une entité</External>                                             | INSEE & Infogreffe                        |
| <External href='https://entreprise.api.gouv.fr/catalogue/#a-etablissements'>Données de référence d'un établissement</External>                                    | INSEE                                     |
| <External href='https://entreprise.api.gouv.fr/catalogue/#a-extraits_rcs_infogreffe'>Extrait des données du Registre du Commerce et des Sociétés (RCS)</External> | Infogreffe                                |
| <External href='https://entreprise.api.gouv.fr/catalogue/#a-associations'>Informations déclaratives d'une association</External>                                  | Ministère intérieur                       |
| <External href='https://entreprise.api.gouv.fr/catalogue/#a-documents_associations'>Divers documents d'une association</External>                                 | Ministère intérieur                       |
| <External href='https://entreprise.api.gouv.fr/catalogue/#a-actes_inpi'>Actes et statuts des personnes morales et physiques</External>                            | INPI                                      |
| <External href='https://entreprise.api.gouv.fr/catalogue/#a-conventions_collectives'>Conventions collectives</External>                                           | Fabrique Numérique des Ministères Sociaux |
| <External href='https://entreprise.api.gouv.fr/catalogue/#a-entreprises_artisanales_cma'>Données de référence d'une entreprise artisanale</External>              | CMA France                                |
| <External href='https://entreprise.api.gouv.fr/catalogue/#a-effectifs_..._acoss_covid'>Effectifs d'une entreprise</External>                                      | Urssaf Caisse nationale                   |
| <External href='https://entreprise.api.gouv.fr/catalogue/#a-eori_douanes'>Immatriculation EORI</External>                                                         | Douanes                                   |
| **Informations financières :**                                                                                                                                    |                                           |
| <External href='https://entreprise.api.gouv.fr/catalogue/#a-exercices'>Chiffre d'affaires</External>                                                              | DGFiP                                     |
| <External href='https://entreprise.api.gouv.fr/catalogue/#a-bilans_inpi'>Bilans annuels</External>                                                                | INPI                                      |
| <External href='https://entreprise.api.gouv.fr/catalogue/#a-bilans_entreprises_bdf'>3 derniers bilans annuels</External>                                          | Banque de france                          |
| <External href='https://entreprise.api.gouv.fr/catalogue/#a-liasses_fiscales_dgfip'>Déclarations de résultat (liasses fiscales)</External>                        | DGFiP                                     |
| **Attestations sociales et fiscales :**                                                                                                                           |                                           |
| <External href='https://entreprise.api.gouv.fr/catalogue/#a-attestations_fiscales_dgfip'>Attestation fiscale</External>                                           | DGFiP                                     |
| <External href='https://entreprise.api.gouv.fr/catalogue/#a-attestations_sociales_acoss'>Attestation de vigilance</External>                                      | URSSAF                                    |
| <External href='https://entreprise.api.gouv.fr/catalogue/#a-attestations_agefiph'>Conformité emploi des travailleurs handicapés</External>                        | AGEFIPH                                   |
| <External href='https://entreprise.api.gouv.fr/catalogue/#a-cotisations_msa'>Cotisations de sécurité sociale agricole</External> (conformité)                     | MSA                                       |
| <External href='https://entreprise.api.gouv.fr/catalogue/#a-cotisation_retraite_probtp'>Cotisations retraite bâtiment</External> (conformité et attestation)      | PRO BTP                                   |
| <External href='https://entreprise.api.gouv.fr/catalogue/#a-cartes_professionnelles_fntp'>Carte professionnelle travaux publics</External>                        | FNTP                                      |
| <External href='https://entreprise.api.gouv.fr/catalogue/#a-certificats_cnetp'>Cotisations congés payés & chômage intempéries</External> (attestation)            | CNETP                                     |
| **Les certifications professionnelles :**                                                                                                                         |                                           |
| <External href='https://entreprise.api.gouv.fr/catalogue/#a-certificats_agence_bio'>Certifications en BIO</External>                                              | Agence BIO                                |
| <External href='https://entreprise.api.gouv.fr/catalogue/#a-certificats_rge_ademe'>Certificat RGE (Reconnu garant de l'environnement)</External>                  | ADEME                                     |
| <External href='https://entreprise.api.gouv.fr/catalogue/#a-certificats_qualibat'>Certificat de qualification bâtiment Qualibat</External>                        | QUALIBAT                                  |
| <External href='https://entreprise.api.gouv.fr/catalogue/#a-certificats_opqibi'>Certificat de qualification d'ingénierie OPQIBI</External>                        | OPQIBI                                    |
| **La propriété intellectuelle :**                                                                                                                                 |                                           |
| <External href='https://entreprise.api.gouv.fr/catalogue/#a-extraits_courts_inpi'>Brevets, modèles et marques déposés</External>                                  | INPI                                      |

### Quelles sont les conditions d'éligibilité à l'API Entreprise ?

L’API Entreprise est réservée :

- aux **acteurs publics investis d’une mission de service public** ✅ : les administrations, leurs opérateurs et les collectivités, les acteurs de santé, etc.
- à **leurs prestataires privés** qui peuvent être destinataires des informations techniques permettant l’usage de l’API mais en aucun cas des données elles-même.

Même si elle a pour objectif de simplifier leurs démarches, l’API Entreprise ne s’adresse pas aux particuliers ❌, aux associations ❌ et aux entreprises ❌.

Il faut également être <External href='https://entreprise.api.gouv.fr/doc/#fondamentaux'>techniquement en mesure d'intégrer l'API Entreprise</External>, c'est à dire :

- avoir une équipe technique qui peut intégrer des API ;
- travailler ou s'apprêter à travailler avec un prestataire ou un éditeur de logiciel, qui soit en mesure d’intégrer API Entreprise.

L’<External href="https://entreprise.api.gouv.fr/">API Entreprise</External> est une composante de l’État plateforme, l’accès à l’API Entreprise est modéré et régulé par la DINUM, qui attribue des autorisations de récupération d’informations selon la nature des démarches à traiter (marchés publics, aides publiques,…).

### Alternatives en accès libre

Vous n'êtes pas éligible à l'API Entreprise ? Il existe d'autres alternatives, en accès libre :

**Pour trouver une information sur une entreprise/association en particulier**, consultez <External href='https://annuaire-entreprises.data.gouv.fr/'>l'annuaire des entreprises</External> .

**Vous avez reperé une erreur dans la base de donnée Sirene sur votre entreprise/association ?** Le lien suivant vous permet de la signaler directement à l'INSEE : <External href='https://www.sirene.fr/sirene/public/nous-contacter'>https://www.sirene.fr/sirene/public/nous-contacter</External>.

**Certaines données proposées par l'API Entreprise sont accessibles, par API, en open data** :

- l'[API Sirene, produite par l'INSEE](/les-api/sirene_v3), donnant accès aux données du répertoire Sirene de l’INSEE, à l’exception des entreprises <External href="https://www.insee.fr/fr/information/4127417">non-diffusibles</External> ;
- l'[API RNCS, produite par l'INPI](/les-api/api-rncs), donnant accès aux informations publiques détenues par les greffes sur les sociétés françaises ;
- l'[API RNA, produite par la DINUM](/les-api/api_rna), interrogeant le répertoire des associations françaises ;
- l'[API RNM, produite par CMA France](/les-api/api_rnm), interrogeant le répertoire des entreprises artisanales françaises.
- l'[API Professionnels RGE, produite par l'ADEME](/les-api/api_professionnels_rge), recensant les professionnels Reconnus Garants de l'Environnement.

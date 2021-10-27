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
      Seules les administrations et certaines sociétés sont habilitées à utiliser API Entreprise.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Une collectivité ou une administration
    is_eligible: 1
    description: |
      Si vous êtes une collectivité ou une administration, vous pouvez remplir une demande d’accès à l’API Entreprise vous-même pour l'entité que vous représentez.

      Lors de votre demande vous devrez **renseigner le cadre juridique** qui légitime l'entité pour laquelle vous opérez à recevoir ces données.

      <NextSteps />
      <Button href="https://datapass.api.gouv.fr/api-entreprise">Remplir une demande</Button>
  - who:
      - Une entreprise
    is_eligible: 0
    description: |
      Seule les **sociétés chargées d’une mission de service public** sont éligibles.

      Lors de votre demande vous devrez **justifier** dans quelle mesure vous rentrez dans ce cadre juridique.

      <NextSteps />
      <Button href="https://datapass.api.gouv.fr/api-entreprise">Remplir une demande</Button>
  - who:
      - Un éditeur de logiciel
    is_eligible: 0
    description: |
      Si vous êtes **éditeur de logiciels** et agissez pour le compte d'une administration ou d'une collectivité, vous pouvez remplir vous même une demande d'accès à l'API entreprise pour l'entité que vous représentez.

      Lors de votre demande vous devrez **renseigner le cadre juridique (un texte ou délibération/décision)** qui légitime  l'entité pour laquelle vous opérez à recevoir ces données.

      <NextSteps is_editeur />
      <Button href="https://datapass.api.gouv.fr/api-entreprise">Remplir une demande</Button>
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
rate_limiting_description: |
  <External href='https://entreprise.api.gouv.fr/doc/#respecter-la-volumétrie'>En savoir plus</External>
monitoring_link: https://status.entreprise.api.gouv.fr/
contact_link: https://entreprise.api.gouv.fr/support/
doc_tech_link: /api/v1/proxy/https%3A%2F%2Fentreprise.api.gouv.fr%2Fv2%2Fopen-api.yml
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
  - Vous n’avez **plus besoin de demander certains justificatifs** aux entreprises ;
  - Vous n’avez pas de vérification supplémentaire à réaliser car les **informations sont certifiées**; 
  - Vous accédez avec un seul compte aux données de **différents fournisseurs** tels que l’INSEE, la DGFIP, l’URSSAF, etc.
  
Au delà de la simplification apportée aux agents habilités des administrations, l'API Entreprise rend service aux entreprises et associations en leur évitant de chercher leurs documents administratifs et en permettant le pré-remplissage automatique de leurs formulaires.

L’API permet notamment de simplifier le dépôt et l'instruction des candidatures aux <External href='https://entreprise.api.gouv.fr/use_cases/marches_publics/'>marchés publics</External> et des demandes d'<External href='https://entreprise.api.gouv.fr/use_cases/aides_publiques/'>aides et subventions publiques</External>. 
<External href='https://entreprise.api.gouv.fr/use_cases/'>Découvrir tous les cas d'usage</External>

---

### API accessibles depuis l'API Entreprise

Pour cavoir la liste à jour des API disponibles, n'hésitez pas à consulter le <External href='https://entreprise.api.gouv.fr/catalogue/'>catalogue des données de l’API Entreprise</External>. Le catalogue vous permet également de découvrir la liste précise des données disponibles pour chacune des API.

| API                                                                  | Administration                            |
| -------------------------------------------------------------------- | ----------------------------------------- |
| **Données générales :**                                              |                                           |
| Les données de référence d'une entité                                | INSEE                                     |
| Les données de référence d'un établissement                          | INSEE                                     |
| Un extrait des données du Registre du Commerce et des Sociétés (RCS) | INFOGREFFE                                |
| Les informations déclaratives d'une association                      | Ministère intérieur                       |
| Divers documents d'une associaiton                                   | Ministère intérieur                       |
| Les actes et statuts des personnes morales et physiques              | INPI                                      |
| Les conventions collectives                                          | Fabrique Numérique des Ministères Sociaux |
| Les données de référence d'une entreprise artisanale                 | CMA France                                |
| Les effectifs d'une entreprise                                       | ACOSS                                     |
| L'immatriculation EORI                                               | Douanes                                   |
| **Données financières :**                                            |                                           |
| Les chiffre d'affaires                                               | DGFiP                                     |
| Les bilans annuels                                                   | INPI                                      |
| Les 3 derniers bilans annuels                                        | Banque de france                          |
| La déclarations de résultat (liasses fiscales)                       | DGFiP                                     |
| **Les attestations sociales et fiscales :**                          |                                           |
| L'attestation fiscale                                                | DGFiP                                     |
| L'attestation de vigilance                                           | URSSAF                                    |
| Conformité emploi des travailleurs handicapés                        | AGEFIPH                                   |
| Conformité contisations de sécurité sociale agricole                 | MSA                                       |
| Conformité cotisations retraite bâtiment et attestation              | PRO BTP                                   |
| Carte professionnelle travaux publics                                | FNTP                                      |
| L'attestation de cotisations congés payés & chômage intempéries      | CNETP                                     |
| **Les certifications professionnelles :**                            |                                           |
| Certifications biologiques en cours                                  | Agence BIO                                |
| Le certificat RGE (Reconnu garant de l'environnement)                | ADEME                                     |
| Le certificat de qualification bâtiment Qualibat                     | QUALIBAT                                  |
| Le certificat de qualification d'ingénierie OPQIBI                   | OPQIBI                                    |
| **La propriété intellectuelle :**                                    |                                           |
| Les brevets, modèles et marques déposés                              | INPI                                      |

### Quelles sont les conditions d'éligibilité à l'API Entreprise ?

L’API Entreprise est réservée : 
- aux **acteurs publics investis d’une mission de service public** ✅ : les administrations, leurs opérateurs et les collectivités, les acteurs de santé, etc. 
- à **leurs prestataires privés** qui peuvent être destinataires des informations techniques permettant l’usage de l’API mais en aucun cas des données elles-même.

Même si elle a pour objectif de simplifier leurs démarches, l’API Entreprise ne s’adresse pas aux particuliers ❌, aux associations ❌ et aux entreprises.

Il faut également être <External href='https://entreprise.api.gouv.fr/doc/#fondamentaux'>techniquement en mesure d'intégrer l'API Entreprise</External>, c'est à dire : 
- avoir une équipe technique qui peut intégrer des API ;
- travailler ou s'apprêter à travailler avec un éditeur de logiciel ou un prestataire, qui soit en mesure d’intégrer API Entreprise.

L’<External href="https://entreprise.api.gouv.fr/">API Entreprise</External> est une composante de l’État plateforme, l’accès à l’API Entreprise est modéré et régulé par la DINUM, qui attribue des autorisations de récupération d’informations selon la nature des démarches à traiter (marchés publics, aides publiques,…).

### Alternatives en accès libre

Vous n'êtes pas éligible à l'API Entreprise ? Il existe d'autres alternatives, en accès libre :

- **Pour trouver une information sur une entreprise/association en particulier**, consultez <External href='https://annuaire-entreprises.data.gouv.fr/'>l'annuaire des entreprises</External> . 

- **Vous avez reperé une erreur dans la base de donnée Sirene sur votre entreprise/association ?** Le lien suivant vous permet de la signaler directement à l'INSEE : https://www.sirene.fr/sirene/public/nous-contacter

- **Certaines données proposées par l'API Entreprise sont accessibles, par API, en open data :
    - l'[API Sirene, produite par l'INSEE](/les-api/sirene_v3), donnant accès aux données du répertoire Sirene de l’INSEE, à l’exception des entreprises <External href="https://www.insee.fr/fr/information/4127417">non-diffusibles</External> ; 
    - l'[API RNCS, produite par l'INPI](/les-api/api-rncs), donnant accès aux informations publiques détenues par les greffes sur les sociétés françaises ;
    - l'[API RNA, produite par la DINUM](/les-api/api_rna), interrogeant le répertoire des associations françaises ;
    - l'[API RNM, produite par CMA France](/les-api/api_rnm), interrogeant le répertoire des entreprises artisanales françaises.
    - l'[API Professionnels RGE, produite par l'ADEME](/les-api/api_professionnels_rge), recensant les professionnels Reconnus Garants de l'Environnement.
 




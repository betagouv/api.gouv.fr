---
title: API Entreprise
tagline: Accédez aux données et aux documents administratifs des entreprises et des associations, afin de simplifier leurs démarches
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

      Lors de votre demande vous devrez **renseigner le cadre juridique (un texte ou délibération/décision)** qui légitime l'entité pour laquelle vous opérez à recevoir ces données.

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
  - DGFiP
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
  - urssaf-caisse-nationale

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
rate_limiting_resume: 2000 appels / 10 minutes / IP
rate_limiting_description: |
Pour en savoir plus sur les conditions de volumétrie, veuillez consulter la documentation API Entreprise : https://entreprise.api.gouv.fr/doc/#respecter-la-volumétrie
monitoring_link: https://dashboard.entreprise.api.gouv.fr
contact_link: support@entreprise.api.gouv.fr
doc_tech_link: /api/v1/proxy/https%3A%2F%2Fentreprise.api.gouv.fr%2Fv2%2Fopen-api.yml
doc_tech_external: https://entreprise.api.gouv.fr/catalogue/
themes:
  - Entreprise
visits_2019: 12610
last_update: 14/09/2020
content_intro: |
  API Entreprise permet à une administration d'accéder aux données et aux documents administratifs des entreprises et des associations, afin de simplifier leurs démarches.

  ### A quoi sert l’API Entreprise ?

  L'API s'utilise principalement de deux manières :

  - le pré-remplissage de formulaire à destination des entreprises ou des associations ;
  - la récupération d'une donnée ou d'un document en back office par un agent habilité.

  L’API permet - entre autre - de :

  - faciliter la candidature aux <External href='https://entreprise.api.gouv.fr/use_cases/marches_publics/'>marchés publics</External> et leur instruction ;
  - faciliter le dépôt et l'instruction des <External href='https://entreprise.api.gouv.fr/use_cases/aides_publiques/'>aides et subventions publiques</External> ; 
  - <External href='https://entreprise.api.gouv.fr/use_cases/preremplissage/'>préremplir des formulaires</External> et de les personnaliser ;
  - simplifier la détection de la <External href='https://entreprise.api.gouv.fr/use_cases/detection_fraude/'>fraude fiscale et sociale des entreprises</External>.
  - vérifier l'éligibilité des demandes des TPE et associations à l'aide complémentaire dans le cadre de la <External href='https://entreprise.api.gouv.fr/use_cases/covid_19/'>crise sanitaire du Covid-19</External>.

---

### Données accessibles dans l'API

L'API Entreprise permet d'accéder simplement, avec une seule clé d'accès sécurisée, à de nombreuses données issues d'administrations différentes. L'interfaçage se fait uniquement avec le hub API Entreprise, dans des standards à jour des contraintes industrielles. API Entreprise agrège et vous restitue les connaissances techniques et métiers de chacune de ces données.


Les données générales :

| Donnée                                                                                | Administration                            | 
| ------------------------------------------------------------------------------------- | ----------------------------------------- |
| Les données de référence d'une entité                                                 | INSEE                                     |
| Les données de référence d'un établissement                                           | INSEE                                     |
| Un extrait des données du Registre du Commerce et des Sociétés (RCS)                  | INFOGREFFE                                |
| Les informations déclaratives d'une association                                       | Ministère intérieur                       |
| Divers documents d'une associaiton                                                    | Ministère intérieur                       |
| Les actes et statuts des personnes morales et physiques                               | INPI                                      |
| Les conventions collectives                                                           | Fabrique Numérique des Ministères Sociaux |
| Les données de référence d'une entreprise artisanale                                  | CMA France                                |
| Les effectifs d'une entreprise                                                        | ACOSS                                     |
| L'immatriculation EORI                                                                | Douanes                                   |


Les données financières :

| Donnée                                            | Administration   |
| ------------------------------------------------- | ---------------- |
| Les chiffre d'affaires                            | DGFiP            |
| Les bilans annuels                                | INPI.            |
| Les 3 derniers bilans annuels                     | Banque de france |
| La déclarations de résultat (ou liasses fiscales) | DGFiP            |

Les attestations sociales et fiscales :

| Donnée                                                         | Administration          |
| -------------------------------------------------------------- | ----------------------- |
| L'attestation fiscale                                          | DGFiP                   |
| L'attestation de vigilance                                     | ACOSS                   |
| Conformité emploi des travailleurs handicapés                  | AGEFIPH                 |
| Conformité contisations de sécurité sociale agricole           | MSA                     |
| Conformité cotisations retraite bâtiment et attestation        | PRO BTP                 |
| Carte professionnelle travaux publics                          | FNTP                    |
| L'attestation de cotisations congés payés & chômage intempéries| CNETP                   |

Les certifications professionnelles :

| Donnée                                                   | Administration |
| -------------------------------------------------------- | -------------- |
| Certifications biologiques en cours                      | Agence BIO     |
| Le certificat RGE (Reconnu garant de l'environnement)    | ADEME          |
| Le certificat de qualification bâtiment Qualibat         | QUALIBAT       |
| Le certificat de qualification d'ingénierie OPQIBI       | OPQIBI         |



La propriété intellectuelle :

| Donnée                                  | Administration |
| --------------------------------------- | -------------- |
| Les brevets, modèles et marques déposés | INPI           |

**NB**: Pour avoir la liste à jour des données disponibles, n'hésitez pas à consulter le <External href='https://entreprise.api.gouv.fr/catalogue/'>catalogue des données dans l’API Entreprise</External>

**NB**: Certaines données sont accessibles en open data (sans demande d'accès à l'API) via leur propre API et ne nécessitent pas de passer par API Entreprise. C'est notamment le cas de :

- les [données de l'INPI](/les-api/api-rncs)
- les [données de l'ADEME](/les-api/api_professionnels_rge)
- les [données du RNA](/les-api/api_rna)
- les [données de l'INSEE](/guides/quelle-api-sirene) (à l'exception des entreprises <External href="https://www.insee.fr/fr/information/4127417">non-diffusibles</External>)

### En savoir plus

L’<External href="https://entreprise.api.gouv.fr/">API Entreprise</External> est une composante de l’État plateforme, l’accès à l’API Entreprise est modérée et régulée par la DINUM, qui attribue à chaque client des autorisations de récupération d’informations selon la nature des démarches à traiter (Marchés publics, aides publiques,…).

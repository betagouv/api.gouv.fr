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
      Vous n’êtes pas autorisé à accéder aux données de cette API. L’usage de l’API Entreprise est **uniquement reservé aux acteurs publics** : les administrations, les collectivités, leurs opérateurs, les acteurs de santé, les organismes ayant le statut spécifique _« chargé d'une mission ou délégataire de service public »_, etc.

      <Button href='/les-api/api-entreprise#alternatives-en-acces-libre' alt>Consulter les alternatives</Button>
  - who:
      - Une collectivité ou une administration
    is_eligible: 1
    description: |
      Que vous soyez une collectivité, une administration centrale, un organisme ayant le statut spécifique _« chargé d'une mission ou délégataire de service public »_, vous êtes éligible à l'utilisation de l'API Entreprise.  

      **Si votre cadre légal le justifie**, l’API Entreprise vous permet d’accéder directement aux données administratives des entreprises et des associations pour faciliter leurs démarches.
      - Pour vérifier que votre besoin correspond aux utilisations justifiant l'API Entreprise, consultez nos différents <External href="https://entreprise.api.gouv.fr/cas_usages">cas d'usages</External> (marchés publics, aides et subventions, portail GRU...)
      - Pour vérifier si nous distribuons les données dont vos démarches ont besoin, veuillez consulter le <External href="https://entreprise.api.gouv.fr/catalogue">catalogue des API</External>.

      <Button href='https://datapass.api.gouv.fr/api-entreprise'>Demander une habilitation API Entreprise</Button>
  - who:
      - Une entreprise ou une association
    is_eligible: -1
    description: |
      Vous n’êtes pas autorisé à accéder aux données de cette API. L’usage de l’API Entreprise est **uniquement reservé aux acteurs publics** : les administrations, les collectivités, leurs opérateurs, les acteurs de santé, les organismes ayant le statut spécifique _« chargé d'une mission ou délégataire de service public »_, etc.

      <Button href='/les-api/api-entreprise#alternatives-en-acces-libre' alt>Consulter les alternatives</Button>
  - who:
      - Un éditeur de logiciel
    is_eligible: 0
    description: |
      **Si votre logiciel est commandé par des acteurs publics pour simplifier les démarches des entreprises/associations**, alors vous êtes éligible à intégrer l'API Entreprise pour la mettre à disposition de vos client publics **uniquement**. 

      - Pour vérifier que votre logiciel correspond aux utilisations justifiant l'API Entreprise, consultez nos différents <External href="https://entreprise.api.gouv.fr/cas_usages">cas d'usages</External> (marchés publics, aides et subventions, portail GRU...) ;
      - Pour vous assurer que les API répondent aux besoins de vos clients publics, consultez le <External href="https://entreprise.api.gouv.fr/catalogue">catalogue des API</External> ;

      ⚠️ **En tant que prestataire technique d’une entité administrative, si votre demande d'habilitation aboutit, vous ne serez pas habilité à recevoir les données issues de l'API Entreprise**, mais uniquement habilité à intégrer et gérer techniquement l'API pour votre client public. 

      <Button href='https://datapass.api.gouv.fr/api-entreprise?demarche=editeur' alt>Déposer une demande "spécifique éditeur"</Button>
stat:
  lastXdays: 30
  url: https://dashboard.entreprise.api.gouv.fr/api/watchdoge/stats/last_30_days_usage
  label: informations non redemandées aux entreprises
partners:
  - ademe
  - agence-bio
  - Banque de france
  - CMA France
  - CNETP
  - dgfip
  - Douanes
  - Fabrique numérique des ministères sociaux
  - FNTP
  - Infogreffe
  - inpi
  - insee
  - minint
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
  - RBE
  - bénéficiaire
  - bénéficiaires effectifs
  - registre
rate_limiting_resume: 1000 requêtes/min par IP
rate_limiting_description: 'Les limites de volumétrie sont détaillées ici :'
rate_limiting_link: https://entreprise.api.gouv.fr/developpeurs#respecter-la-volum%C3%A9trie
monitoring_link: https://status.entreprise.api.gouv.fr/
stats_detail_resume: Les statistiques sont disponibles sur 2 mois
stats_detail_description: Accédez au suivi des consommations des API
stats_detail_link: https://entreprise.api.gouv.fr/stats
contact_link: https://entreprise.api.gouv.fr/faq
doc_tech_link: https://entreprise.api.gouv.fr/v3/openapi-entreprise.yaml
useSwaggerProxy: true
doc_tech_external: https://entreprise.api.gouv.fr/developpeurs
themes:
  - Entreprise
visits_2019: 12610
uptime: 100
last_update: 14/09/2020
content_intro: |
  <External href="https://entreprise.api.gouv.fr/">API Entreprise</External> permet aux entités administratives d'accéder aux données et aux documents administratifs des entreprises et des associations, afin de simplifier leurs démarches.

  <Button href="https://entreprise.api.gouv.fr/">Consulter le site API Entreprise</Button>

---


### À quoi sert l’API Entreprise ?

L'API Entreprise donne accès à des données sur les entreprises et les associations : identité des entreprises et des associations, adresse, extrait Kbis, effectif, mandataires sociaux, attestations sociale et fiscale, données financières, carte professionnelle travaux publics, diverses certifications...

**L'accès à ces données par l'API Entreprise simplifie les démarches de différents cas d'usages** :
- le dépôt des candidatures aux <External href="https://entreprise.api.gouv.fr/cas_usages/marches_publics">marchés publics</External> et leur instruction ;
- le dépôt des demandes d'<External href="https://entreprise.api.gouv.fr/cas_usages/subventions">aides et subventions publiques</External> et l'instruction des dossiers ;
- les démarches sur les <External href="https://entreprise.api.gouv.fr/cas_usages/portail_gru">portails GRU et GRC</External> ;
- la <External href="https://entreprise.api.gouv.fr/cas_usages/fraude">détection de la fraude</External>.

<Button href="https://entreprise.api.gouv.fr/cas_usages">Voir tous les cas d'usages</Button>

### Ce que cela change pour vous, administrations et collectivités :

En intégrant la brique API Entreprise dans votre système d’information ou votre site internet :
- 📥 Vous n’avez **plus besoin de demander certains justificatifs** aux entreprises et associations&nbsp;;
- 🔍 Vous n’avez pas de vérification supplémentaire à réaliser car les **informations sont certifiées**&nbsp;;
- 🔌 Vous accédez avec un seul compte aux données de **différents fournisseurs** tels que l’Insee, la DGFIP, l’Urssaf, l'Inpi etc.

### API disponibles dans le hub API Entreprise :

<Button href="https://entreprise.api.gouv.fr/catalogue">Consulter le catalogue des API</Button>

### Quelles sont les conditions d'éligibilité à l'API Entreprise ?

L'<External href="https://entreprise.api.gouv.fr/">API Entreprise</External> s'adresse aux entités administratives délivrant un service aux entreprises et aux associations.
L’API Entreprise est une composante de l’État plateforme, l’accès à l’API Entreprise est modéré et régulé par la DINUM, qui attribue des autorisations de récupération d’informations selon la nature des démarches à traiter (marchés publics, aides publiques,…). <External href="https://entreprise.api.gouv.fr/faq#quelles-sont-les-conditions-d-eligibilite">En savoir plus sur les conditions d'éligibilité</External>

### Alternatives en accès libre

Vous n'êtes pas éligible à l'API Entreprise ? Il existe d'autres alternatives, en accès libre :

**Pour trouver une information sur une entreprise/association en particulier**, consultez <External href='https://annuaire-entreprises.data.gouv.fr/'>l'annuaire des entreprises</External> .

**Vous avez reperé une erreur dans la base de donnée Sirene sur votre entreprise/association ?** Le lien suivant vous permet de la signaler directement à l'INSEE : <External href='https://www.sirene.fr/sirene/public/nous-contacter'>https://www.sirene.fr/sirene/public/nous-contacter</External>.

**Certaines données proposées par l'API Entreprise sont accessibles, par API, en open data** :

- l'[API Sirene, produite par l'INSEE](/les-api/sirene_v3), donnant accès aux données du répertoire Sirene de l’INSEE, à l’exception des entreprises <External href="https://www.insee.fr/fr/information/4127417">non-diffusibles</External> ;
- l'[API RNCS, produite par l'INPI](/les-api/api-rncs), donnant accès aux informations publiques détenues par les greffes sur les sociétés françaises ;
- l'[API RNM, produite par CMA France](/les-api/api_rnm), interrogeant le répertoire des entreprises artisanales françaises.
- l'[API Professionnels RGE, produite par l'ADEME](/les-api/api_professionnels_rge), recensant les professionnels Reconnus Garants de l'Environnement.

---
title: API de droits à l'Assurance Maladie
tagline: Pour accélérer vos démarches en lien avec l'assurance maladie, automatisez la récupération des droits à l’Assurance Maladie de vos clients
external_site: https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/assurance-maladie-digital/api-droits-fs-doc/master/documentation-open-api.yaml
is_open: false
access_condition: OUVERT sous contrat
access_link: /les-api/api_ameli_droits_cnam/demande-acces
access_description: |
  Cette API nécessite une habilitation :
access_page:
  - who:
      - Un établissements de soins
      - Un organisme complémentaire de santé
    is_eligible: 0
    description: |
      Cette API est actuellement réservée aux établissements de soins pour leur démarche de pré admission et aux organismes complémentaires en santé pour faciliter leur démarche d’adhésion.

      Cette API fonctionne uniquement avec FranceConnect; vous devez remplir les critères d'eligbilité de FranceConnect.

      L’utilisation de l’API est soumise à une convention d’usage avec la Caisse Nationale d’Assurance Maladie. Les données accessibles dépendent également du cas d’usage.

      La Caisse Nationale se réserve le droit d’évaluer l’éligibilité des candidats au regard des cas d’usage indiqués.

      ** Pour remplir votre demande, vous aurez besoin de : **
      - votre numéro SIRET
      - le cadre juridique
      - la description du service justifiant une simplication pour les citoyens
      - les coordonnées de l'équipe
      - les coordonnées de votre délégué à la protection des données
    cta:
      label: Remplir une demande
      path: https://signup.api.gouv.fr/api-droits-cnam
  - who:
      - Autre
    is_eligible: -1
    description: |
      Seuls les établissements de soins et les organismes complémentaires en santé peuvent accèder à cette API.
    cta:
      label: Retourner à la page de recherche
      path: /rechercher-api
logo: cnam.jpg
stat:
  lastXdays: 30
  label: justificatifs papier évités
clients:
  - établissements de soins si éligibles à France Connect
  - organismes complémentaires en santé
partners:
  - CNAM
owner: Caisse Nationale d'Assurance Maladie
owner_acronym: CNAM
keywords:
  - Droits à assurance maladie
  - Prise en charge au titre du régime obligatoire
  - Exonération du ticket modérateur
  - Médecin traitant
  - Signup
rate_limiting_resume: Incluses dans la convention
rate_limiting_description: |
  <p>Les éventuelles limitations d’usage vis-à-vis d’un partenaire sont incluses dans la convention.</p>
monitoring_link: https://stats.uptimerobot.com/3wEv6hppvv
monitoring_description: |
  <p>Une supervision du service en temps réel est disponible à cette adresse.</p>
contact_link: partenaires-api-ameli.cnam@assurance-maladie.fr
doc_tech_link: https://raw.githubusercontent.com/assurance-maladie-digital/api-droits-fs-doc/master/documentation-open-api.yaml
themes:
  - Particulier
visits_2019: 576
uptime: 99.998 # https://stats.uptimerobot.com/3wEv6hppvv
last_update: 17/10/2019
---

Cette API présente les droits, d’un individu ou d’une famille (enfants rattachés), gérés par le régime général de l’Assurance Maladie.

Elle permet ainsi de connaître pour chaque individu d’une famille, sa caisse gestionnaire et son niveau de couverture (droits de base, droits à une complémentaire santé solidaire, présence d'un médecin traitant). Les données accessibles dépendent du cas d’usage, ainsi les établissements de soins bénéficient également des motifs d’exonération du ticket modérateur et de l’identification du médecin traitant.

**L’utilisation de l’API est soumise à une convention d’usage avec la Caisse Nationale d’Assurance Maladie.**

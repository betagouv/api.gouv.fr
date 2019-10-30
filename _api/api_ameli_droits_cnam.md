---
title: API de droits à l'Assurance Maladie
tagline: Pour accélérer vos démarches en lien avec l'assurance maladie, automatisez la récupération des droits à l’Assurance Maladie de vos clients
external_site: https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/assurance-maladie-digital/api-droits-fs-doc/master/documentation-open-api.yaml
contract: OUVERT sous contrat
logo: cnam.jpg
stat:
  lastXdays: 30
  label: justificatifs papier évités
clients:
  - établissements de soins si éligibles à France Connect
  - organismes complémentaires en santé
partners:
  - CNAM
owner: Caisse Nationale d'Assurance Maladie (CNAM)
keywords:
  - Droits à assurance maladie
  - Prise en charge au titre du régime obligatoire
  - Exonération du ticket modérateur
  - Médecin traitant
  - Signup
score:
  detail:
    access:
      link: https://signup.api.gouv.fr/api-droits-cnam
      description: |
        <p>Cette API est actuellement réservée aux établissements de soins pour leur démarche de pré admission et aux organismes complémentaires en santé pour faciliter leur démarche d’adhésion.</p>

        <p>Cette API fonctionne uniquement avec FranceConnect; le candidat à l’utilisation de cette API doit être préalablement "fournisseur de services" FranceConnect.</p>

        <p>L’utilisation de l’API est soumise à une convention d’usage avec la Caisse Nationale d’Assurance Maladie. Les données accessibles dépendent également du cas d’usage.</p>
        <p>La Caisse Nationale se réserve le droit d’évaluer l’éligibilité des candidats au regard des cas d’usage indiqués.</p>

        <p>Les demandes d'accès pour l'API Attestation de droits à l'Assurance Maladie utilisent signup.api.gouv.fr, un outil mis à disposition pour toutes les API cataloguées sur api.gouv.fr.</p>
    rate_limiting:
      description: |
        <p>Les éventuelles limitations d’usage vis-à-vis d’un partenaire sont incluses dans la convention.</p>
    contact:
      link: partenaires-api-ameli.cnam@assurance-maladie.fr
    doc_tech:
      link: https://raw.githubusercontent.com/assurance-maladie-digital/api-droits-fs-doc/master/documentation-open-api.yaml
    monitoring:
      link: https://stats.uptimerobot.com/3wEv6hppvv
      description: |
        <p>Une supervision du service en temps réel est disponible à cette adresse.</p>
---

## API attestation de droits à l'Assurance Maladie
Cette API présente les droits, d’un individu ou d’une famille (enfants rattachés), gérés par le régime général de l’Assurance Maladie.

Elle permet ainsi de connaître pour chaque individu d’une famille, sa caisse gestionnaire et son niveau de couverture (droits de base, droits à une complémentaire santé solidaire, présence d'un médecin traitant). Les données accessibles dépendent du cas d’usage, ainsi les établissements de soins bénéficient également des motifs d’exonération du ticket modérateur et de l’identification du médecin traitant.

**L’utilisation de l’API est soumise à une convention d’usage avec la Caisse Nationale d’Assurance Maladie.**

D’autres cas d’usages pourront être étudiés ultérieurement.

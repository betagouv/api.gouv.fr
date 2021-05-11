---
title: API de droits à l'Assurance Maladie
tagline: Accédez aux droits d’un individu ou d’une famille (enfants rattachés), gérés par le régime général de l’Assurance Maladie
external_site: https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/assurance-maladie-digital/api-droits-fs-doc/master/documentation-open-api.yaml
is_open: -1 # -1 means API not open
is_france_connected: 2 # undefined | 1 | 2. 2 means can be used with FC, 2 means has to be used with FC
datapass_link: https://datapass.api.gouv.fr/api-droits-cnam
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

      <NextSteps />
      <Button href="https://datapass.api.gouv.fr/api-droits-cnam">Remplir une demande</Button>
  - who:
      - Autre
    is_eligible: -1
    description: |
      Seuls les établissements de soins et les organismes complémentaires en santé peuvent accéder à cette API.

      Cela étant dit, si vous avez un projet précis :
      <Button href="mailto:partenaires-api-ameli.cnam@assurance-maladie.fr">Contactez-nous pour exposer votre projet</Button>
stat:
  lastXdays: 30
  label: justificatifs papier évités
partners:
  - CNAM
producer: cnam
keywords:
  - Droits à assurance maladie
  - Prise en charge au titre du régime obligatoire
  - Exonération du ticket modérateur
  - Médecin traitant
content_intro: |
  Cette API présente les droits, d’un individu ou d’une famille (enfants rattachés), gérés par le régime général de l’Assurance Maladie.

  ### A quoi sert l’API de droits à l'Assurance Maladie&nbsp;?

  Elle permet de connaître pour un individu **identifié avec FranceConnect**&nbsp;:

  - sa caisse gestionnaire
  - son niveau de couverture

  Certaines données ne sont accessibles qu’aux établissements de soins&nbsp;:

  - des motifs d’exonération du ticket modérateur
  - de l’identification du médecin traitant.

  L’utilisation de l’API est soumise à une **convention d’usage** avec la Caisse Nationale d’Assurance Maladie.
rate_limiting_resume: Incluses dans la convention
rate_limiting_description: |
  Les éventuelles limitations d’usage vis-à-vis d’un partenaire sont incluses dans la convention.
monitoring_link: https://stats.uptimerobot.com/3wEv6hppvv
monitoring_description: |
  Une supervision du service en temps réel est disponible à cette adresse.
contact_link: partenaires-api-ameli.cnam@assurance-maladie.fr
doc_tech_link: https://raw.githubusercontent.com/assurance-maladie-digital/api-droits-fs-doc/master/documentation-open-api.yaml
themes:
  - Particulier
visits_2019: 576
uptime: 99.998 # https://stats.uptimerobot.com/3wEv6hppvv
last_update: 17/10/2019
---

### Données

Les données présentes dans l’API, pour chaque individu d’une famille&nbsp;:

| Nom                  | Description                                                                                   |
| -------------------- | --------------------------------------------------------------------------------------------- |
| bénéficiaires        | Les bénéficiaires de l'individu connecté via FranceConnect                                    |
| caisse               | L'organisme de rattachement du bénéficiaire (régime, centre de gestion, adresse de la caisse) |
| niveau de couverture | Droits de base, droits à une complémentaire santé solidaire, présence d'un médecin traitant   |
| motifs d’exonération | Uniquement accessible aux établissements de soins                                             |
| médecin traitant     | Uniquement accessible aux établissements de soins                                             |

Cette API ne restitue que les droits des bénéficiaires **connus du régimes général et des régimes hebergés dans les Systèmes d’Informatin (SI) du régime général ( CNMSS, CAMIEG, MNH, CAVIMAC...)**. Il ne sera donc pas possible de connaître les droits de bénéficaires de la MSA, MGEN et du RSI (ce dernier est dans l'attente de son intégration au régime général).

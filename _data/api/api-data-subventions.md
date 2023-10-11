---
title: API data subventions
tagline: Accédez aux données sur les subventions attribuées aux associations
is_open: -1
producer: dinum
keywords:
  - subventions
  - aides
  - associations
  - rna
  - financière
  - asso
  - dispositif
  - dotation
  - dossier
  - instruction
  - versement
  - montant
  - financement
themes:
  - Entreprise
  - Administration
contact_link: contact@datasubvention.beta.gouv.fr
access_page:
  - who:
      - Un particulier
      - Une association
      - Une entreprise
    is_eligible: -1
    description: |
      Vous n'êtes pas éligible pour utiliser cette API. Pour accéder aux données publiques sur les subventions, vous pouvez effectuer [une recherche sur data.gouv.fr](https://www.data.gouv.fr/fr/datasets/?q=subventions)
  - who:
      - Une administration
    is_eligible: 1
    description: |
      Pour accéder à l'API, vous devez faire une demande à l'équipe de l'API Data Subventions.
       <Button href="mailto:contact@datasubvention.beta.gouv.fr?subject=Demande d'accès à l'API Data Subventions&body=Bonjour, je souhaite accéder à l'API Data Subventions.">Envoyer une demande</Button>
doc_tech_external: https://api-subvention-asso-prod.osc-secnum-fr1.scalingo.io/docs/
visits_2019: 2500
last_update: 20/09/2022
content_intro: |
  L’API Data subventions permet d'accéder aux données sur les demandes de subventions et sur les subventions attribuées. Elle facilite l'instruction des dossiers de demandes de subventions, en permettant d'**intégrer directement les données dans vos outils existants**.
---

### À quoi sert l’API data subventions ?

#### Problématique de départ

**🏛 Pour les services de l’Etat:**

- Quand je dois instruire une demande de subvention d’une association, je ne sais pas si celle-ci a déposé des demandes auprès d’autres services et leur décision;
- Je dois parfois effectuer de nombreux aller-retour avec l’association pour avoir un dossier complet et/ou conforme;
- J’ai du mal à mesurer l’impact du financement attribué.

**🏠Pour les associations:**

- Je perds beaucoup de temps en répétition des démarches, en suivi et en adaptation aux différents formats et outils de dépôt des demandes de subvention;
- Je dois parfois prendre le risque de présenter un projet et de le mettre en œuvre sans avoir de vision certaine sur les financements;
- J’ai du mal à me projeter et à stabiliser les activités de mon association dans le temps.

👉 L'API data subventions a vocation à **décloisonner la donnée** en la rendant interministérielle, et à **faciliter l'instruction des demandes de subvention** en centralisant toutes les informations concernant les associations. Elle alimente l'outil [Data Subventions](https://datasubvention.beta.gouv.fr/), accessible aux agents de l'Etat.

### Comment utiliser l'API Data subventions ?

L'API data subventions sert à intégrer les données sur les subventions dans vos outils. Elle est accessible aux agents de l'Etat.
Vous pouvez [demander un accès à l'API ici.](/les-api/api-data-subvention/demande-acces)

Une fois vos accès reçus, il est nécessaire d'intégrer l'API dans vos outils existants pour utiliser les données.

### Principales données accessibles dans l'API

| Champ              | Description                                                                          |
| ------------------ | ------------------------------------------------------------------------------------ |
| Provider           | Origine de la donnée (exemple : Chorus)                                              |
| Informations sur la structure   | Siret, n°RNA, activité, domaine fonctionnel, n° tiers                   |
| Subventions       | Dispositif, montant, date de versement...                                             |
| Données administratives | Co-financeurs, centre financier, modalités...                                   |

### Outils alternatifs

Vous souhaitez uniquement visualiser les données sur les subventions ? Accédez à l'outil [Data Subventions](https://datasubvention.beta.gouv.fr/)
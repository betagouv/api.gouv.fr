---
title: API Organismes de Formation
tagline: Récupérez la liste publique des organismes de formation
producer: ministere-travail
is_open: 1
themes:
  - Emploi
  - Education
  - Formation
keywords:
  - Organisme
  - formation
  - CPF
  - compte
  - personnel
  - opco
  - opca
rate_limiting_resume:
rate_limiting_description:
monitoring_link:
monitoring_description:
contact_link: david-alexandre.voisenet@externes.emploi.gouv.fr
doc_tech_link: https://referentielof.emploi.gouv.fr/referentiel_of/swaggerApi
doc_tech_external:
last_update: 01/03/2020
visits_2019:
partner:
dataset_uuid:
  - 582c8978c751df788ec0bb7e
---

Récupérez la liste publique des organismes de formation, centralisées et publiées par la délégation générale à l’emploi et à la formation professionnelle (DGEFP) et le Ministère du Travail.

### À quoi sert cette API ?

Grâce à cette API vous pouvez :

- vérifier si une entreprise est un organisme de formation
- obtenir les informations clés d'un organisme de formation (Siren, adresse, spécialisation)

### Données disponibles

Pour chaque organisme de formation, retrouvez :

| Nom                | Description                                                                |
| ------------------ | -------------------------------------------------------------------------- |
| nom                | Nom de l'organisme de formation                                            |
| siren              | Siren de l'organisme de formation                                          |
| numeroDa           | Numéro de déclaration d'activité                                           |
| cfa                | L'organisme de formation est-il un CFA (Centre de Formation d'Apprentis) ? |
| adresse            | Voie, Code Postal, Ville, Pays de l'organisme de formation                 |
| codeSpecialite     | Code spécialité                                                            |
| libelleSpecialite  | Libellé de la spécialité                                                   |
| nbStagiaires       | Nombre de stagiaires                                                       |
| nbHeuresStagiaires | Nombre d'heures stagiaires                                                 |

### Cadre juridique

La liste des organismes de formation déclarés auprès du Préfet de Région territorialement compétent et à jour de leur obligation de transmission du Bilan Pédagogique et Financier est rendue publique conformément à [l'article L.6351-7-1 du Code du Travail](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000021343604/).

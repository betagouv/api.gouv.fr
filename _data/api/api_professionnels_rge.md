---
title: API Professionnels RGE
tagline: Le recensement des professionnels RGE (Reconnu Garant de l'Environnement)
external_site: https://data.ademe.fr/datasets/liste-des-entreprises-rge
is_open: 1 # 1 means API is fully open
producer: ademe
keywords:
  - Performance energétique
  - Professionnels
  - SIRET
  - RGE
  - ADEME
rate_limiting_resume: 10 appels / seconde / IP
themes:
  - Environnement
contact_link: https://www.ademe.fr/content/contacter
doc_tech_link: https://koumoul.com/s/data-fair/api/v1/datasets/liste-des-entreprises-rge/api-docs.json
doc_tech_external: https://data.ademe.fr/datasets/liste-des-entreprises-rge
datagouv_uuid:
  - 600966dac71dd5e4f7bcbf5c
last_update: 27/07/2020
---

L'ADEME et les pouvoirs publics accordent la mention "Reconnu Garant de l'Environnement" (RGE) aux entreprises à l'origine de travaux ou d'études **concourant à la rénovation énergétique ou à l’installation d’énergies renouvelables**.

Cette mention donne la possibilité aux entreprises de se former aux énergies renouvelables. Elle est aussi une reconnaissance de qualité et permet aux clients de ces entreprises d'obtenir les aides publiques allouées aux travaux de performance énergétique (amélioration énergétique, installations d'équipements utilisant une source d'énergie renouvelable).

RGE est une mention indispensable pour que les clients bénéficient des aides de l’État (CITE, ANAH, ECOPTZ, CEE, Fonds chaleur de l’ADEME...) lors des travaux d’amélioration de la performance énergétique.

### À quoi sert l’API Professionnels RGE ?

Cette API donne accès au recensement des entreprises RGE avec leur domaine de travaux. Elle permet de vérifier si une entreprise est agrée RGEE (Reconnu Garant de l'Environnement).

Pour plus d'informations sur les entreprises RGE, vous pouvez vous rendre sur le site <External href="https://www.faire.gouv.fr/">faire.fr</External>.

### Données

| Nom de la donnée           | Description                                                                                    |
| -------------------------- | ---------------------------------------------------------------------------------------------- |
| SIRET                      | Permet de rechercher une entreprise par son SIRET                                              |
| Nom de l'entreprise        | Permet de rechercher une entreprise par son nom                                                |
| Adresse de l'entreprise    |                                                                                                |
| Domaine d'activité         | Types de travaux réalisés (chauffage, menuiseries, isolation, etc.)                            |
| Tranche d’effectif salarié | <External href="https://www.sirene.fr/sirene/public/variable/tefen">Voir code INSEE</External> |

### A propos de l'Open Data a l’ADEME

Cette API est en Open Data. Elle permet de consulter des données ouvertes, <External href="https://www.etalab.gouv.fr/licence-ouverte-open-licence">sous licence Etalab</External>.

Les données sont mises à jour régulièrement et accessibles sur le <External href="https://data.ademe.fr/datasets/liste-des-entreprises-rge">portail Open Data de l'ADEME</External>.

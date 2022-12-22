---
title: API Resultats de qualité des services publics
tagline: Accédez aux résultats de qualité des services publics de près de 15000 structures en France
external_site: https://www.plus.transformation.gouv.fr/
is_open: 1 # 1 means API is fully open
producer: ditp
keywords:
  - Service public
  - Organisations
  - Code postal
  - Accueil
  - Relations
  - Notation
  - Qualité
  - Résultats
  - Indicateur
  - Evaluation
  - CRM
  - Usager
  - Adresse
  - Territoire
themes:
  - Administration
contact_link: assistance-utilisateur-spplus.ditp@modernisation.gouv.fr
doc_tech_link: https://opendata.plus.transformation.gouv.fr/api/v2/swagger.json
last_update: 22/12/2022
visit_2019: 1000
---

Le programme Services Publics Plus lancé par le Gouvernement a pour but de contribuer à améliorer la qualité du service rendu et développer la confiance entre l’administration et les usagers.

### A quoi servent les indicateurs Services Publics Plus ?

Les indicateurs mesurés et affichés se veulent en adéquation avec les attentes prioritaires des usagers (rapidité, joignabilité, personnalisation etc.) dans leurs relations avec les services publics ainsi qu’avec les engagements Services Publics Plus. Les données sont mesurées au plus près de l’usager, à la maille locale, et sont mises à jour le plus régulièrement possible (année N-1 à minima). Elles visent à refléter la qualité de service des différents services publics, qu’il s’agisse de qualité rendue (« performance ») ou de qualité perçue (« satisfaction ») par les usagers.

### D'ou viennent les résultats de qualité des services publics ?

Les données publiées sont des données produites par chacun des services publics engagés dans le programme Services Publics Plus.

Par exemple, la Police nationale calcule le délai moyen d’intervention de Police-secours après un appel au 17 (« performance ») ; les services des impôts mesurent le taux de satisfaction des usagers qui ont fait une demande de rendez-vous (« satisfaction »).

Pour les résultats de performance, il s’agit le plus souvent de mesures internes, notamment issues des systèmes informatiques et de gestion des services concernés. Pour les résultats de satisfaction, ils sont issus d’enquêtes menées auprès des usagers, soit par un tiers extérieur soit par le service public lui-même. Les explications et les détails méthodologiques associés à chacun des indicateurs sont fournis par chaque service public et sont affichés à côté des indicateurs. Ils sont également consultables sur les sites de chaque service public.

### Données

Liste des champs obligatoires présents dans l'API résultats de qualité des services publics :

| Nom de la donnée           | Description                                                                                    |
| -------------------------- | ---------------------------------------------------------------------------------------------- |
| Code SP+ de la structure   | Identifiant unique utilisé par DITP pour distinguer les différentes structures entre elles     |
| Intitulé de la typologie   | Typologie de la structure. Exemple : Services des impôts aux particuliers                      |
| Intitulé de la structure   | Nom de la structure                                                                            |
| Code postal de la structure| Exemple : 69000                                                                                |
| Ville de la structure      | Exemple : Lyon                                                                                 |
| Code SP+ de l'indicateur   | Exemple : Taux de satisfaction global, Fréquentation du site                                   |
| Valeur                     | Exemple : 98                                                                                   |
| Fréquence                  | Exemple : annuelle, semestrielle...                                                            |
| Date de mise à jour        | Exemple : 21 janvier 2023                                                                      |

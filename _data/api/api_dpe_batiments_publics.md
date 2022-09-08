---
title: API DPE bâtiments tertiaires
tagline: Le recensement des diagnostics de performance énergétique (DPE) des bâtiments teriaires
external_site: https://data.ademe.fr/datasets/dpe-tertiaire
is_open: 1 # 1 means API is fully open
producer: ademe
keywords:
  - Performance energétique
  - Batiments publics
  - tertiaire
  - diagnostics de performance énergétique
  - DPE
  - Professionnels
  - Adresse
  - ADEME
rate_limiting_resume: 10 appels / seconde / IP
themes:
  - Environnement
contact_link: https://www.ademe.fr/content/contacter
doc_tech_link: https://data.ademe.fr/data-fair/api/v1/datasets/dpe-tertiaire/api-docs.json
doc_tech_external: https://data.ademe.fr/datasets/dpe-tertiaire
datagouv_uuid:
  - 6061abe367b3cc046a5a7e13
last_update: 27/07/2020
---

Depuis le 2 janvier 2008, le diagnostic de performance énergétique de certains bâtiments doit être affiché dans le hall d’accueil du bâtiment.

Cette obligation s’applique aux bâtiments de plus de 500 m², occupés par l’Etat, une collectivité territoriale ou un établissement public (propriétaire ou non du bâtiment), et accueillant un établissement recevant du public (ERP) de catégorie 1 à 4. Le DPE est établi aux frais de la personne publique qui occupe le bâtiment.

### À quoi sert l’API DPE bâtiments publics ?

Cette API donne accès au recensement des diagnostics de performance énergétique (DPE) des bâtiments tertiaires de la France entière.

### Données

| Nom de la donnée                  | Description                                    |
| --------------------------------- | ---------------------------------------------- |
| Numéro DPE                        | Numero DPE, méthode de DPE, date du diagnostic |
| Classe énergétique                | de A à G                                       |
| Classe GES (gaz à effet de serre) | de A à G                                       |
| Adresse postale                   | Permet de rechercher un batiment               |
| Information sur l'habitation      | Date de construction, surface, etc.            |

### À propos des diagnostics de performance énergétique

Le contenu et les modalités d’établissement du DPE sont réglementés.

Le DPE décrit le bâtiment ou le logement (surface, orientation, murs, fenêtres, matériaux, etc), ainsi que ses équipements de chauffage, de production d’eau chaude sanitaire, de refroidissement et de ventilation. Il indique, suivant les cas, soit la quantité d’énergie effectivement consommée (sur la base de factures), soit la consommation d’énergie estimée pour une utilisation standardisée du bâtiment ou du logement.

La lecture du DPE est facilitée par deux étiquettes à 7 classes de A à G (A correspondant à la meilleure performance, G à la plus mauvaise) :

- L’étiquette énergie pour connaître la consommation d’énergie primaire ;
- L'étiquette climat pour connaître la quantité de gaz à effet de serre émise.

### DPE à afficher dans les bâtiments publics

Depuis le 2 janvier 2008, le diagnostic de performance énergétique de certains bâtiments publics doit être affiché dans le hall d’accueil du bâtiment. Cette obligation s’applique aux bâtiments de plus de 500 m², occupés par l’Etat, une collectivité territoriale ou un établissement public (propriétaire ou non du bâtiment), et accueillant un établissement recevant du public (ERP) de catégorie 1 à 4. Le DPE est établi aux frais de la personne publique qui occupe le bâtiment.

Aussi, tous les ERP de catégorie 1 à 4, occupés par des organismes publics ou non, qui ont déjà fait l’objet d’un DPE dans le cadre d’une construction, d’une vente ou d’une location doivent également l’afficher publiquement.

Le DPE affiché contient les mêmes informations que le DPE réalisé pour la vente, la location ou la construction d’un bâtiment. Ces informations s’adressent au public, aux occupants et également au gestionnaire du bâtiment. C’est la consommation réelle d’énergie qui est indiquée, et non une consommation conventionnelle calculée. Il existe plusieurs étiquettes énergie et climat, pour tenir compte de la diversité des usages et modes d’occupation des bâtiments publics.

Les données sont mises à jour régulièrement et accessibles sur le <External href="https://data.ademe.fr/datasets/dpe-tertiaire">portail Open Data de l'ADEME</External>.

### À propos de l'Open Data a l’ADEME

Cette API est en Open Data. Elle permet de consulter des données ouvertes, <External href="https://www.etalab.gouv.fr/licence-ouverte-open-licence">sous licence Etalab</External>.

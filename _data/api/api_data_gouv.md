---
title: API catalogue des données ouvertes - data.gouv.fr
tagline: Interagissez avec le catalogue des données publiques
producer: dinum
is_open: 1 # 0 means API require an account
keywords:
  - open
  - data
  - données
  - ouvertes
  - data gouv
  - etalab
  - data.gouv
  - datagouv
  - data.gouv.fr
themes:
  - Education
  - Emploi
  - Entreprise
  - Environnement
  - Géographie
  - Particulier
  - Transport
contact_link: https://support.data.gouv.fr/
doc_tech_link: https://www.data.gouv.fr/api/1/swagger.json
doc_tech_external: https://doc.data.gouv.fr/api/reference/
datagouv_uuid:
  - 5d13a8b6634f41070a43dff3
last_update: 31/07/2020
---

Le site <External href="https://data.gouv.fr">data.gouv.fr</External> est le catalogue des données publiques de l'administration. La plateforme permet le dépôt et le référencement de données issues de ministères comme de collectivités locales. Le catalogue contient également des références vers d'autres catalogues d'administration ayant leur propre portail.

L'API permet de consulter les métadonnées ainsi que d'avoir un lien vers les données. Elle permet également aux producteurs de données d'automatiser la gestion de leurs fiches.

### À quoi ça sert ?

Intéragissez avec le catalogue data.gouv.fr :

- Consulter les métadonnées d'un jeu de donnée ainsi que les références vers les ressources associées
- Gérer les fiches des jeu de données et y ajouter de nouvelles ressources
- Gérer les informations liées à une organisation productrice

### Données

La liste non-exhaustive des données accessibles via cette API

| Nom             | Description                                                                                                                                                                               |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| jeux de données | Créer, modifier ou lire la fiche d'une jeu de donnée sur <External href="https://data.gouv.fr">data.gouv.fr</External>. Ajouter, supprimer ou modifier les ressources d'un jeu de données |
| organisations   | Créer, modifier, lire la fiche d'une organistion. Rattacher des jeux de données et des réutilisations.                                                                                    |
| réutilisations  | Référencer une réutilisation et la rattacher à un ou plusieurs jeux de données.                                                                                                           |

Pour plus d’informations techniques sur la structuration des données, vous pouvez <External href='/documentation/api_data_gouv'>consulter la documentation technique</External>

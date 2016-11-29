---
title: Médicapi
tagline: Base de données publique des médicaments de l'Agence nationale de sécurité du médicament et des produits de santé
doc_tech: https://medicaments.api.gouv.fr/doc
domain: https://medicaments.api.gouv.fr
contact: contact@medicaments.api.gouv.fr
contract: OUVERT
openapi_definition: https://medicaments.api.gouv.fr/doc/api-meds-openapi.yml
clients:
  - particuliers
  - entreprises
  - collectivités
  - ministères
experimental: true
partners:
  - ANSM
owner: DINSIC
category: reference
keywords:
  - Médicament
  - Présentation
  - Sécurité sociale
  - Génériques
  - Haute autorité de santé
---

## Présentation

Cette API expose les [médicaments](https://www.data.gouv.fr/fr/datasets/base-de-donnees-publique-des-medicaments-base-officielle/) référencés [<abbr title="Agence nationale de Sécurité du Médicament">ANSM</abbr>](http://ansm.sante.fr/) mises à jour le 03/10/2016.

Ces données comportent, entre autre :

 * le nom des médicaments;
 * les formats de vente;
 * le prix;
 * le taux de remboursement par la sécurité sociale;
 * les alternatives génériques;
 * les avis sur le service rendu par la <abbr title="Haute Autorité de Santé">HAS</abbr>;
 * les avis sur l'amélioration du service rendu par la <abbr title="Haute Autorité de Santé">HAS</abbr>.

Pour plus d'information sur ces données, vous pouvez utiliser la [documentation](http://base-donnees-publique.medicaments.gouv.fr/docs/Contenu_et_format_des_fichiers_telechargeables_dans_la_BDM_v1.pdf) du jeux de données de l'ANSM.


## Condition d'utilisation

Les données de l'API sont ouvertes selon la [Licence Ouverte/Open Licence](https://www.etalab.gouv.fr/licence-ouverte-open-licence) (Il est nécessaire de faire référence à l'origine des données dans vos services utilisant l'API).

L'utilisation de l'API est libre. Merci de ne pas abuser dans son utilisation. Si vous avez des besoins massifs, merci de nous contacter.

## Demande d'évolution

Si vous avez des besoins liés à l'utilisation de l'API, vous pouvez :

  * contribuer directement, le code est ouvert sur [GitHub](https://github.com/sgmap/api-medicaments);
  * envoyer un mail à [contact@medicaments.api.gouv.fr](mailto:contact@medicaments.api.gouv.fr).

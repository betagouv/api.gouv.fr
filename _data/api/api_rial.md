---
title: API RIAL (Répertoire Inter-Administratif des Locaux)
tagline: Raccordez-vous directement à la DGFiP pour récupérer les données des locaux connus par l’administration fiscale (caractéristiques, surface, adresse, identifiant cadastral, lots de copropriété)
producer: dgfip
is_open: -1
datapass_link: https://datapass.api.gouv.fr/api-rial-sandbox
access_page:
  - who:
      - Un particulier
    is_eligible: -1
    description: |
      Vous n’êtes pas autorisé à accéder aux données de l’API RIAL (Répertoire Inter-Administratif des Locaux).

      <Button href="/rechercher-api">Retourner à la page de recherche</Button>
  - who:
      - Une entité administrative
    is_eligible: 1
    description: |
      Conformément aux dispositions de <External href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000036588629">l'article L107</External> et <External href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000025176297">R* 107 A-7</External> du *livre des procédures fiscales*, ainsi que de <External href="https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000020883923/2021-07-02">l'article 4</External> de l'arrêté du 16 août 1984 (arrêté CNIL relatif à l'application Majic3), seules les administrations sont habilitées à échanger entre elles des informations ou données strictement nécessaires pour traiter une démarche.

      Pour obtenir l’accès à l’API, vous devez notamment **justifier d'une simplification pour les citoyens** et vous engager à n'accéder qu’aux données strictement nécessaires à la démarche conformément au principe de proportionnalité.

      <Button href="https://datapass.api.gouv.fr/api-rial-sandbox">Remplir une demande</Button>
  - who:
      - Une entreprise
    is_eligible: 0
    description: |
     Conformément aux dispositions de <External href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000036588629">l'article L107</External> et <External href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000025176297">R* 107 A-7</External> du *livre des procédures fiscales*, ainsi que de <External href="https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000020883923/2021-07-02">l'article 4</External> de l'arrêté du 16 août 1984 (arrêté CNIL relatif à l'application Majic3), vous pouvez obtenir une habilitation aux données exposées par l'API RIAL sous conditions.

      Pour obtenir un agrément, vous devez **justifier du cadre juridique** dans lequel s’inscrit votre demande.

      <Button href="https://datapass.api.gouv.fr/api-rial-sandbox">Remplir une demande</Button>
keywords:
  - répertoire
  - locaux
  - cadastre
  - parcelle
  - foncier
  - copropriété
  - local professionnel
rate_limiting_resume: 200 appels/minute
rate_limiting_description: |
  L’API Manager de la DGFiP délivre un quota de consultation pour chacun de ses partenaires pour chaque API utilisée. Concernant l'API RIAL, le quota par partenaire est fixé à 200 appels à la minute.
monitoring_description: |
  La DGFIP s’engage à ce que le service soit accessible à plus de 98,5% et à communiquer sur les coupures de service ponctuelles qui pourraient survenir.
themes:
  - Particulier
  - Entreprise
contact_link: dtnum.donnees.demande-acces@dgfip.finances.gouv.fr, tapir.dgfip@dgfip.finances.gouv.fr
doc_tech_link: /swaggers/dgfip_api_rial_oas3.json
last_update: 22/09/2020
visits_2019: 11000
---

Le RIAL (Répertoire Inter-Administratif des Locaux) s’appuie sur les données contenues dans R-Loc, le référentiel des locaux de la DGFIP. Ce référentiel a vocation à recenser l’ensemble des locaux présents sur le territoire national et partager leurs éléments d’évaluation avec les services fiscaux de la DGFIP pour permettre in fine leur taxation aux impôts directs locaux (IDL).

L’API RIAL permet l’échange d’informations fiscales entre la DGFiP et une entité administrative (administration, ministère, organisme public, collectivité) ou une entreprise exerçant des missions de service public ou d’intérêt général.

### A quoi sert l'API RIAL ?

L'API RIAL permet aux entités administratives (administration, ministère, organisme public, collectivité) et aux acteurs privés, porteurs de missions de service public qui sont éligibles, de rechercher des locaux en fonction de certains critères (recherche par l’identifiant cadastral d’un local, par une adresse ou par une parcelle cadastrale) et d'obtenir leurs données descriptives.

Les locaux restitués par l’API sont des locaux dits « fonciers », c’est-à-dire des locaux fiscalement achevés pour lesquels les services de la DGFIP ont attribué une évaluation visant à permettre leur assujettissement aux impôts directs locaux.

Les locaux en cours de construction ne sont donc pas restitués par l’API.

**Point d’attention** : la recherche de locaux à une adresse ou sur une parcelle cadastrale peut aboutir à la restitution de locaux « démolis ». Ceci permet d’identifier l’historique des évènements ayant affecté le ou les locaux présents à l’adresse ou la parcelle concernée par la recherche.

Dans le RIAL, la notion de démolition d’un local peut recouvrir des actes métiers très différents. L’origine de la démolition d’un local est en principe caractérisée par le code motif de sa démolition restitué par l’API.

### Les données disponibles dans l'API

L’API RIAL permet d’obtenir le descriptif sommaire d’un local dès lors que l’utilisateur connaît son identifiant fiscal.

| Nom de la donnée                | Commentaire                                                                                                            |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Etat du local | Local actif ou démoli, date d’effet de l’état |
| Adresse | Données d’adresse du local (département, commune, numéro de voie et adresse) |
| Identifiant cadastral | Référence cadastrale de la parcelle d’assise et codification cadastrale du local |
| Lot de copropriété | N° de lot de copropriété lorsque les locaux sont situés dans une copropriété |
| Descriptif général du local | Identifiant fiscal, nature du local, date et origine du dernier changement pris en compte pour le local |
| Descriptif de l’habitation ou du local professionnel | Descriptif sommaire et surfaces composant le local |

Une partie des informations contenues dans le RIAL et restituées par l’API sont des données codifiées.
La [documentation fonctionnelle de l’API RIAL](/resources/documentation_api_rial_v2024-11.pdf) permet de consulter le détail des données échangées.
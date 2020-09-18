---
title: Dématérialiser l'instruction des dossiers dans un CCAS
tagline: Vous êtes un CCAS ou un éditeur de logiciel ? Nous vous accompagnons avec l'API Particulier pour accéder facilement aux données de la CAF et de la DGFIP.
tags: cas usage, api particulier, CCAS
image: dossier.jpg
api:
  - API Particulier
noindex: true
---

En utilisant notre brique API Particulier dans votre SI :

- **Plus besoin de demander** d'avis fiscal ou de quotient familial aux citoyens
- **Pas de vérifications supplémentaires** : les informations sont certifiées
- Démarche 100% en ligne

## Vous utilisez les données de la CAF ou de la DGFIP ?

Nous vous mettons à disposition les données de la CAF (composition familiale du foyer du demandeur) :

| Donnée            | Commentaire                                              |
| ----------------- | -------------------------------------------------------- |
| Allocataire       | L'état-civil du demandeur (nom prénom date de naissance) |
| Enfant(s)         | Le/La/Les enfant(s) (nom, prenom, date de naissance)     |
| Adresse           | L'adresse du foyer                                       |
| Quotient Familial | Le quotient familial calculé par la CAF                  |

Et les données de la DGFIP (pour vérifier les conditions d'éligibilité d'une demande) :

| Donnée            | Commentaire                                                                                   |
| ----------------- | --------------------------------------------------------------------------------------------- |
| Avis d'imposition | statut d’imposition, montant de l'impôt, revenu fiscal de référence, nombre de parts fiscales |
| Adresse           | L'adresse fiscale du demandeur                                                                |

<!-- ## Ils l'ont fait

<Quote>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</Quote> -->

## Comment formuler une demande ?

L'utilisation des données par les CCAS est encadrée légalement. Vous pouvez motiver votre demande à l'aide des articles suivants :

- Article <External href="https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000026799356&cidTexte=LEGITEXT000006074069&dateTexte=20121219">L.312-1</External> et <External href="https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000031106561&cidTexte=LEGITEXT000006074069&dateTexte=20150809"> R123-5 </External> du _Code de l'action sociale et des familles_

- Article <External href="https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000033219997&cidTexte=LEGITEXT000031366350&dateTexte=20161009">L.114-8</External> et <External href="https://www.legifrance.gouv.fr/affichCodeArticle.do;jsessionid=83A5E43D6A6710F0F0FFE705AA476AA5.tplgfr26s_3?cidTexte=LEGITEXT000031366350&idArticle=LEGIARTI000038029900&dateTexte=20190213&categorieLien=id#LEGIARTI000038029900">R114-9-3 </External> du _Code des relations entre le public et l'administration_

Si vous travaillez avec un des éditeurs ou intégrateurs, <a href='#editeurs'>consultez la section éditeurs.</a>

<NextSteps/>
<br/>
<Button href="https://datapass.api.gouv.fr/api-particulier?scopes=%7B%22dgfip_avis_imposition%22%3Atrue%2C%22dgfip_adresse%22%3Atrue%2C%22cnaf_quotient_familial%22%3Atrue%2C%22cnaf_allocataires%22%3Atrue%2C%22cnaf_enfants%22%3Atrue%2C%22cnaf_adresse%22%3Afalse%7D">Remplir une demande</Button>

## Editeurs

Si vous travaillez avec l'un des éditeurs ou intégrateurs ci-dessous vous pouvez faire une demande simplifiée :

| Editeur | Nom de la solution       | Date           | Lien vers la demande                                                                                                                                                                                                                                                                                      |
| ------- | ------------------------ | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Up      | Millesime Action Sociale | Mi-Mai 2020    | <External href="https://datapass.api.gouv.fr/api-particulier?scopes=%7B%22dgfip_avis_imposition%22%3Atrue%2C%22dgfip_adresse%22%3Atrue%2C%22cnaf_quotient_familial%22%3Atrue%2C%22cnaf_allocataires%22%3Atrue%2C%22cnaf_enfants%22%3Atrue%2C%22cnaf_adresse%22%3Afalse%7D">Remplir une demande</External> |
| Arpège  | Sonate Opus              | Septembre 2020 | <External href="">Remplir une demande</External>                                                                                                                                                                                                                                                          |

Vous êtes un éditeur et vous souhaitez apparaître dans cette liste ? Écrivez-nous à [contact@particulier.api.gouv.fr](mailto:contact@particulier.api.gouv.fr)

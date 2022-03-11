---
title: Simplifier l'instruction des dossiers dans un CCAS
tagline: Vous êtes un CCAS ou un éditeur de logiciel ? Accédez facilement aux données de la CAF et de la DGFIP grâce à l'API Particulier et notre  accompagnement pas à pas.
tags: cas usage, api particulier, CCAS
image: dossier.jpg
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
api:
  - API Particulier
---

Les Centres Communaux d'Action Sociale sont amenés à instruire de nombreux dossiers d'obtention d'aide sociale : aide sociale légale, aide alimentaire, chèque énergie, aide au bus, etc..

Ces dossiers utilisent généralement les données d’état-civil, l'adresse, le quotient familial de la Caisse d’Allocations Familiales (CAF), la composition du foyer, l'avis d'imposition.
Avec la brique API Particulier vous avez la possibilité de diminuer les erreurs, réduire le risque de fraude et faciliter le traitement des dossiers par vos équipes en **accédant facilement aux données** nécessaires au calcul.

En intégrant la brique API Particulier dans votre système d'information, ou votre site internet :

- Vous accèdez facilement aux données de la CAF et de la DGFIP.
- Vous n'avez **plus besoin de demander** d'avis fiscal ou de quotient familial aux parents
- Vous n'avez **pas de vérifications supplémentaires** car les informations sont **certifiées**
- La démarche peut-être faite 100% en ligne

<Quote logo="/images/guides/sitiv.png" link='https://www.sitiv.fr/Actualites/L-action-sociale-des-villes-du-SITIV-integre-le-dispositif-Dites-le-nous-une-fois' who='Le SITIV' title='membre du réseau Déclic'>
le principe du "Dites-le nous une fois" (...) permet aux citoyens de ne pas avoir à donner leur consentement mais d'être simplement informés de l'utilisation de leurs pièces.
C'est dans ce cadre que le SITIV intègre directement au logiciel métier les informations des usagers (...) Les saisies dans les dossiers usagers sont ainsi **facilitées et certifiées**.
</Quote>

## Les données disponibles

Voici les données de la CAF (composition familiale du foyer du demandeur) et de la DGFIP (pour vérifier les conditions d'éligibilité d'une demande) accessibles directement avec l'API, ce sont les données les plus utilisées pour ce service, mais la liste ci-dessous n'est pas exhaustive :

| Donnée            | Commentaire                                                                                   |
| ----------------- | --------------------------------------------------------------------------------------------- |
| Allocataire       | L'état-civil du demandeur (nom prénom date de naissance)                                      |
| Enfant(s)         | Le/La/Les enfant(s) (nom, prenom, date de naissance)                                          |
| Quotient Familial | Le quotient familial calculé par la CAF                                                       |
| Avis d'imposition | statut d’imposition, montant de l'impôt, revenu fiscal de référence, nombre de parts fiscales |
| Adresse           | L'adresse du foyer et/ou l'adresse fiscale du demandeur                                       |

## Comment accéder à la donnée

L'utilisation des données par les CCAS est encadrée légalement, et demande donc de formuler une demande. Vous pouvez motiver votre demande à l'aide des articles suivants :

- Article <External href="https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000026799356&cidTexte=LEGITEXT000006074069&dateTexte=20121219">L.312-1</External> et <External href="https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000031106561&cidTexte=LEGITEXT000006074069&dateTexte=20150809"> R123-5 </External> du _Code de l'action sociale et des familles_

- Article <External href="https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000033219997&cidTexte=LEGITEXT000031366350&dateTexte=20161009">L.114-8</External> et <External href="https://www.legifrance.gouv.fr/affichCodeArticle.do;jsessionid=83A5E43D6A6710F0F0FFE705AA476AA5.tplgfr26s_3?cidTexte=LEGITEXT000031366350&idArticle=LEGIARTI000038029900&dateTexte=20190213&categorieLien=id#LEGIARTI000038029900">R114-9-3 </External> du _Code des relations entre le public et l'administration_

Si vous travaillez avec un des éditeurs ou intégrateurs, <a href='#editeurs'>consultez la section éditeurs.</a>

<NextSteps/>
<br/>
<Button href="https://datapass.api.gouv.fr/api-particulier?demarche=ccas">Remplir une demande</Button>

## Editeurs

Si vous travaillez avec l'un des éditeurs ou intégrateurs ci-dessous vous pouvez faire une demande simplifiée :

| Editeur | Nom de la solution       | Date           | Lien vers la demande                                                                                              |
| ------- | ------------------------ | -------------- | ----------------------------------------------------------------------------------------------------------------- |
| Up      | Millesime Action Sociale | Mi-Mai 2020    | <External href="https://datapass.api.gouv.fr/api-particulier?demarche=ccas-up">Remplir une demande</External>     |
| Arpège  | Sonate Opus              | Septembre 2020 | <External href="https://datapass.api.gouv.fr/api-particulier?demarche=ccas-arpege">Remplir une demande</External> |

Vous êtes un éditeur et vous souhaitez apparaître dans cette liste ? Écrivez-nous à [contact@particulier.api.gouv.fr](mailto:contact@particulier.api.gouv.fr)

---
title: API Particulier
tagline: Entités administratives, simplifiez les démarches des particuliers en récupérant pour eux leurs informations administratives (quotient familial CAF, composition familiale, statut demandeur d’emploi, étudiant et étudiant boursier).
is_open: -1 # -1 means API not open
datapass_link: https://datapass.api.gouv.fr/api-particulier
access_page:
  - who:
      - Un particulier
    is_eligible: -1
    description: |
      L’usage de l’API Particulier est **uniquement reservé aux acteurs publics** : les administrations, les collectivités, leurs opérateurs, les acteurs de santé, etc.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Une collectivité ou une administration
    is_eligible: 1
    description: |
      L’API Particulier vous permet d’accéder directement aux données administratives des particuliers pour faciliter leurs démarches (cantines, titres de transport, aides sociales, démarches famille, etc...).<br/>
      Pour vérifier que l’API Particulier vous permet d’accéder aux données dont vous avez besoin, consultez le <External href="https://particulier.api.gouv.fr/catalogue">catalogue des API</External> et nos différents <External href="https://api.gouv.fr/les-api/api-particulier#exemples-d%E2%80%99application">cas d'usages</External>.

      <p style="margin-left: 1rem; margin-right: 1rem;font-size: 0.9rem; line-height: 1.5rem;">Conformément aux dispositions de <External href="https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000031366350&idArticle=LEGIARTI000031367412&dateTexte=&categorieLien=cid">l'article L114-8 du Code des relations entre le public et l'administration</External> vous ne pourrez accéder qu'aux seules informations ou données strictement nécessaires pour traiter une démarche du particulier concerné.</p>

      <NextSteps />
      <p style="margin-top: 0rem; font-size: 0.9rem; line-height: 1.5rem;"> <External href="https://particulier.api.gouv.fr/faq#quelles-informations-me-seront-demandees">En savoir plus sur les informations demandées</External></p>

      <QuestionTree tree='api-particulier' question='apipart'/>
  - who:
      - Une entreprise ou une association
    is_eligible: -1
    description: |
      L’usage de l’API Particulier est **uniquement reservé aux acteurs publics** : les administrations, les collectivités, leurs opérateurs, les acteurs de santé, etc.


      <Button href="/rechercher-api">Rechercher une autre API</Button>

      Si vous êtes **éditeur de logiciels pour des acteurs publics, c'est à vos utilisateurs collectivité ou administration de faire une demande d'habilitation.** En revanche, vous pouvez nous demander de vous référencer sur un cas d'usage afin de proposer des formulaires pré-remplis et ainsi simplifier l'expérience de vos clients publics.
      <External href="https://form.typeform.com/to/GU90FCIE">Demander à être référencé</External>

  - who:
      - Un éditeur de logiciel
    is_eligible: -1
    description: |
      Si vous êtes **éditeur de logiciels pour des acteurs publics, c'est à vos utilisateurs collectivité ou administration de faire une demande d'habilitation.**

      En revanche, vous pouvez nous demander de vous référencer sur un cas d'usage afin de proposer des formulaires pré-remplis et ainsi simplifier l'expérience de vos clients publics :

      <Button href="https://form.typeform.com/to/GU90FCIE">Demander à être référencé</Button>

      Pour toute autre demande, consultez notre page <External href="https://particulier.api.gouv.fr/faq">FAQ & contact</External>.

stat:
  lastXdays: 30
  url: https://particulier.api.gouv.fr/stats
  label: justificatifs papier évités
partners:
  - CNAF
  - france-travail
  - mesr
producer: dinum
keywords:
  - Quotient familial
  - statut
  - étudiant
  - demandeur
  - emploi
  - ccas
  - adresse
  - justificatif de domicile
  - bourse
  - boursier
  - famille
  - enfant
  - crous
  - cnous
  - caf
  - études
  - établissement
  - certificat de scolarité
  - échelon
  - particulier
  - citoyen
  - aide
  - tarification
  - démarche
  - guichet
  - scolarité
  - indémnisation
  - chomage
  - dîtes le nous une fois
  - dlnuf
rate_limiting_resume: 20 appels / seconde / jeton
rate_limiting_description: |
  L'API est disponible à hauteur de 20 appels par secondes et par jeton d'accès.
stats_detail_resume: Les statistiques sont disponibles sur 2 mois
stats_detail_description: Accédez au suivi des consommations des API
stats_detail_link: https://particulier.api.gouv.fr/stats
monitoring_link:
monitoring_description: |
  La DINUM s’engage à ce que le Service soit accessible à 95% et la DINUM s’engage à améliorer progressivement ce rendement.
contact_link: api-particulier@api.gouv.fr
doc_tech_link: https://particulier.api.gouv.fr/api/open-api.yml
themes:
  - Particulier
visits_2019: 15831
uptime: 99.992 # https://uptimerobot.com/dashboard#777746216 * https://uptimerobot.com/dashboard#778826562 / 2
last_update: 31/03/2021
content_intro: |
  ### À quoi sert l’API Particulier ?

  L'<External href="https://particulier.api.gouv.fr/">API Particulier</External> permet de **mettre en oeuvre le principe « Dites-le-nous une fois »**, en application de l’<External href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000045213315">article L114-8 du Code des relations entre le public et l’administration</External>.

  L'API Particulier est **un bouquet d'API** donnant accès à des données administratives des particuliers : quotient familial CAF, composition familiale, statut demandeur d’emploi, certificat de scolarité des élèves du primaire, du secondaire et étudiant, statuts élève et étudiant boursier ... il est utilisable dans le cadre des démarches en ligne et téléservices proposés aux usagers, ainsi que dans les logiciels métiers utilisés par les agents habilités en guichet.

  **Les usagers n'ont plus à fournir de pièces justificatives à l'appui de leurs démarches administratives**, telles que la tarification sociale et solidaire des transports, la cantine à 1 euro, les aides facultatives à la scolarité...


  ### Ce qu'API Particulier change pour vous, administrations :


  En intégrant la brique API Particulier dans votre système d’information ou votre site internet :
  - ✅ Vous n’avez **plus besoin de demander certaines informations** aux particuliers, comme le certificat de scolarité ou l'attestation CAF ;
  - ✅ Vous n’avez **pas de saisie ou de vérification** supplémentaire à réaliser ;
  - ✅ Les **informations sont certifiées** ;
  - ✅ Vous accédez avec une seule habilitation aux **données de différents fournisseurs** : la Caisse nationale des allocations familiales (CNAF), la sécurité sociale agricole (MSA), France Travail, le ministère de l'enseignement supérieur et de la recherche (MESR), le ministère de l'éduction nationale (MEN) et enfin le Centre national des œuvres universitaires et scolaires (Cnous).


  <Button href="https://particulier.api.gouv.fr">Consulter le site API Particulier</Button>

---

## API accessibles avec l'API Particulier


  | API | Fournisseur des données | Données | Disponibilité sur API Particulier | Peut s'utiliser avec FranceConnect |
  |---------------------|----------|------------------------------------- |------------------- |------------- |
  | **Quotient familial MSA & CAF** | CNAF & MSA | Quotient familial, composition familiale<br>[📖 Documentation](https://particulier.api.gouv.fr/catalogue/cnav/quotient_familial_v2) <br> Extension du périmètre au régime agricole (MSA) prévu T1 2024 | ✅                      | Prévu T1 2024                      |
  | **Certificat de scolarité étudiant** | MESR | Statut, établissement<br>[📖 Documentation](https://particulier.api.gouv.fr/catalogue/mesri/statut_etudiant) | ✅                      |✅             |
  | **Statut étudiant boursier** | Cnous | Statut étudiant, statut boursier<br>[📖 Documentation](https://particulier.api.gouv.fr/catalogue/cnous/statut_etudiant_boursier)      | ✅      |  ✅             |
  | **Statut demandeur d'emploi** | France Travail |Statut et catégorie (A,B,C,D)<br>[📖 Documentation](https://particulier.api.gouv.fr/catalogue/pole_emploi/situation)     | ✅          | ➡️ Pas FranceConnecté dans API Particulier mais disponible avec [cette API](/les-api/api-statut-demandeur-emploi).            |
  | **Statut élève scolarisé et boursier**   | Ministère de l'éducation nationale| Statut élève scolarisé au primaire et secondaire ; et statut boursier |✅     | Prévu       |
  | **Paiements versés par France Travail** | France Travail | Montants des paiements des allocations ou des aides.<br>[📖 Documentation](https://particulier.api.gouv.fr/catalogue/pole_emploi/indemnites) | ✅              | ➡️ Ne sera pas FranceConnectée dans API Particulier mais déjà disponible avec [cette API](/les-api/api-indemnisation-pole-emploi). |
  | **Complémentaire santé solidaire (C2S)**              |  Sécurité sociale | Indique si le particulier a la C2S, avec ou sans participation.<br>[📖 Documentation](https://particulier.api.gouv.fr/catalogue/cnav/complementaire_sante_solidaire) | ✅               | ✅               |
  | **Statut Revenu de solidarité active (RSA)**                 | Direction de la sécurité sociale | _En cours de définition_| T1 2024               | T1 2024               |
  | **L'allocation adulte handicapé (AAH)**                 | CNAF | _En cours de définition_| T1 2024               | T1 2024               |
  | **L' Allocation de soutien familial (ASF)**                 | CNAF | _En cours de définition_| T1 2024               | T1 2024               |



<Button href="https://particulier.api.gouv.fr/catalogue">Consulter le catalogue des API</Button>


🔎 En savoir plus sur [les API](https://api.gouv.fr/guides/api-definition) et les [API France Connectées](https://api.gouv.fr/guides/api-franceconnectees).


## Conditions générales d'utilisation

Les conditions générales d'utilisation sont disponibles à [ici en PDF](http://api.gouv.fr/resources/CGU%20API%20Particulier.pdf).

## Infolettre API Particulier

Chaque année, l'équipe de l'API Particulier envoie un bilan chiffré sur l'utilisation de l'API, et la feuille de route de l'année suivante (nouvelles démarches, prochaines données qui intègrent l'API...).

<Button href="https://particulier.api.gouv.fr/infolettre">Abonnez-vous à l'infolettre API Particulier</Button>

## FAQ

Consulter notre <External href="https://particulier.api.gouv.fr/faq">FAQ sur le site d'API Particulier</External>.

## Support utilisateur

Vous êtes utilisateur de l'API Particulier, vous rencontrez un problème et avez besoin d'échanger avec nous en transmettant des données sensibles ? Utilisez le [formulaire de transfert d'informations sécurisées](https://www.demarches-simplifiees.fr/commencer/api-particulier-transfert-securise-d-informations).


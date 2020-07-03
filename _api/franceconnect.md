---
title: API Bouton FranceConnect
tagline: Le bouton FranceConnect est un dispositif qui garantit l’identité d’un usager en se reposant sur des comptes certifiés existants.
external_site: https://franceconnect.gouv.fr/partenaires
is_open: false
access_description: |
  Cette API nécessite une habilitation :
access_link: /les-api/franceconnect/etes-vous-eligible
access_page:
  - who:
      - Un particulier
    description: |
      ### Désolé, vous n’êtes pas éligible 🚫

      Ce site internet **ne permet pas de se connecter** à FranceConnect.

      Vous trouverez plus d’explications sur le [site de FranceConnect](https://franceconnect.gouv.fr/). En particulier, nous vous recommandons de consulter la FAQ :
    cta:
      label: Consultez la FAQ usager de FranceConnect
      path: https://franceconnect.gouv.fr/faq
  - who:
      - Une collectivité ou une administration
    description: |
      ### Vous êtes éligible 👌

      Toute administration qui le souhaite peut implémenter le **bouton FranceConnect** pour permettre à ses utilisateurs de s'identifier sur ses services en ligne.

      Dans votre demande d'habilitation, il vous suffira donc de citer [l'arrêté du 8 novembre 2018 relatif à FranceConnect](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000037611479).

      💡 Si vous travaillez avec un éditeur, celui-ci peut remplir cette démarche à votre place !

      ** Pour remplir votre demande, vous aurez besoin de : **
      - numéro SIRET
      - le cadre juridique, en l’occurence [l'arrêté du 8 novembre 2018 relatif à FranceConnect](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000037611479)
      - description du service
      - les coordonnées de l'équipe
      - les coordonnées de votre délégué à la protection des données
    cta:
      label: Remplir une demande
      path: https://signup.api.gouv.fr/franceconnect
  - who:
      - Un éditeur de logiciel
    description: |
      ### Vous êtes peut-être éligible 🧐

      Si vous êtes **éditeur de logiciels** et agissez pour le compte d'une administration ou d'une collectivité, vous pouvez remplir une demande de **bouton FranceConnect** vous même pour l'entité que vous représentez.

      Dans votre demande d'habilitation, il vous faudra citer [l'arrêté du 8 novembre 2018 relatif à FranceConnect](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000037611479).

      ** Pour remplir votre demande, vous aurez besoin de : **
      - numéro SIRET
      - le cadre juridique, en l’occurence [l'arrêté du 8 novembre 2018 relatif à FranceConnect](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000037611479)
      - description du service
      - les coordonnées de l'équipe
      - les coordonnées du délégué à la protection des données **de l'entité pour laquelle vous opérez**
    cta:
      label: Consultez la FAQ usager de FranceConnect
      path: https://franceconnect.gouv.fr/faq
  - who:
      - Une entreprise de droit privé
    description: |
      ### Vous êtes peut-être éligible 🧐

      Conformément à l'arrêté du 8 novembre 2018 relatif à FranceConnect, les entreprises ou associations peuvent intégrer FranceConnect dans les cas suivants :

      - Elles proposent des services en ligne liés à la démarche de changement d'adresse et uniquement pour ces services
      - Elles proposent des services en ligne dont l'usage nécessite, conformément à un texte règlementaire la vérification de l'identité de leurs utilisateurs.

      En plus des organismes privés indiqués ci-dessus, un arrêté d’expérimentation relatif à FranceConnect permet à certaines entreprises ou associations de tester durant un an l’intégration de FranceConnect. Cette expérimentation, menée avec un nombre maximal de cent personnes morales, vise à déterminer les nouveaux secteurs d’activité qui trouveraient un bénéfice à utiliser FranceConnect afin d’améliorer les services rendus à leurs utilisateurs. Elle s’inscrit dans les conditions et avec les mêmes garanties que celles fixées par [l'arrêté du 8 novembre 2018 relatif à FranceConnect](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000037611479).

      Pour participer à cette expérimentation, les entreprises et associations participantes doivent répondre aux critères suivants :

      **Critères d’éligibilité :**

      - Avoir un établissement en France
      - Exercer son activité depuis plus de 3 ans
      - Proposer un service par voie électronique, en vue de la fourniture, de l'échange ou du partage d'un bien ou d'un service, qui concourent :
        - aux secteurs de la santé, social et médico-social (ex : la prise de rendez-vous, la constitution du dossier patient ou le parcours de soin) ;
        - au secteur de l’éducation et de l’enseignement supérieur (ex : établissements privés, enseignement à distance, apprentissage) ;
        - aux prestations scolaires et périscolaires, aux activités sportives ou socioculturelles (ex : centres de loisirs, clubs sportifs) ;
        - au transport de personnes (ex : transport collectif de personnes, co-voiturage) ;
        - à la délivrance de certificats professionnels visés à l’article L. 6113-1 du code du travail ;
        - à la location de biens immobiliers et les véhicules.

      **Critères de sélection :**

      - Fournir tous les mois à l’équipe FranceConnect les données qui permettront de mesurer la valeur ajoutée de FranceConnect :
        - Volume de connexions par FranceConnect vs volume de connexions global
        - Volume de créations de compte par FranceConnect vs volume de créations de comptes global
        - Croissance constatée du trafic du fait de l’intégration de FranceConnect,
        - Retours qualitatifs des utilisateurs.
      - [Respecter le cahier des charges accessible sur le site partenaire FranceConnect](https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service). Il comprend l’ensemble des prérequis techniques, ergonomiques, de sécurité et fonctionnels à respecter. Toute demande de mise en production du dispositif FranceConnect fait l’objet d’une vérification du parcours de connexion par l’équipe FranceConnect qui contrôle également le respect des exigences précisées dans le cahier des charges.
      - Promouvoir le service dans les conditions prévues dans les CGU FS ;
      - Conserver les données obtenues dans le cadre de FranceConnect uniquement le temps de la relation contractuelle avec leur utilisateur et selon les conditions et garanties fixées dans l’arrêté du 8 novembre 2018 ;
      - Maintenir la possibilité pour ses clients d’utiliser un autre moyen d’authentification que FranceConnect ;
      - Ne pas commercialiser les données à caractère personnel obtenues dans le cadre du raccordement à FranceConnect et ne pas les transférer hors de l’Union européenne ;
      - Supprimer l’accès à FranceConnect à l’issue de l’expérimentation et détruire les données obtenues dans le cadre de l’expérimentation.

      La DINUM réceptionnera et instruira les demandes de participation à l’expérimentation. Elle sélectionnera au maximum 100 entreprises répondant aux critères d’éligibilité et de sélection cités ci-dessus selon leur ordre d’arrivée, l’activité concernée de façon à constituer un panel représentatif de personnes morales participant à l’expérimentation. Chaque candidature fait l’objet d’une analyse par le service juridique de la DINUM et l’équipe FranceConnect, afin de s’assurer de la pertinence et de la cohérence des données demandées par le fournisseur de service en ligne avec l’usage d’authentification. Les candidats inéligibles, les dossiers incomplets ou les dossiers ne remplissant pas les critères de sélection mentionnés ci-dessus seront écartés.

      L’utilisation de FranceConnect sera arrêtée à l’issue de l’expérimentation. Un bilan qualitatif et quantitatif en sera effectué avant la fin de l’expérimentation pour en tirer les conclusions et décider de l’ouverture ou pas de FranceConnect aux acteurs privés pour lesquels elle aura été concluante (forte utilisation de FranceConnect, valeur ajoutée perçue pour les utilisateurs des services en ligne expérimentateurs).

      Vous êtes dans un de ces deux cas et vous souhaitez intégrer FranceConnect à votre service en ligne ?
    cta:
      label: Remplir une demande
      path: https://signup.api.gouv.fr/franceconnect
partners:
  - DGFiP
  - Ameli
  - La Poste
  - MobileConnect & Moi
  - MSA
owner: Direction interministérielle du numérique
owner_acronym: DINUM
keywords:
  - Authentification
  - Identification
  - SSO
  - Signup
themes:
  - Particulier
logo: logo-fc.jpg
contact_link: support.partenaires@franceconnect.gouv.fr
doc_tech_external: https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service
visits_2019: 120883
uptime: 99.893 # https://uptimerobot.com/dashboard.php#778110642
last_update: 10/12/2019
---

### Qu'est-ce que l’API Bouton FranceConnect ?

L‘API Bouton FranceConnect est un dispositif qui permet à des administrations, des collectivités ou des entreprises d’ajouter un bouton FranceConnect sur son service en ligne.

Grâce à ce bouton les internautes peuvent s'identifier par l'intermédiaire d'un compte existant (impots.gouv.fr, ameli.fr...).

Si vous êtes un particulier, vous pouvez [contacter l’équipe de FranceConnect.](mailto:support@franceconnect.gouv.fr)

### A quoi ca sert ?

- identifier les utilisateurs de votre service en ligne simplement et de façon sécurisée, sans création de compte supplémentaire, c'est-à-dire sans leur demander de gérer des identifiants dédies pour chaque service en ligne.
- accéder aux 6 informations nécessaires pour identifier une personne unique : l'identité pivot FranceConnect : le nom de naissance, les prénoms, le sexe, la date de naissance, le lieu de naissance (ville et pays).
- accéder à des informations supplémentaires, éventuellement détenues par les fournisseurs de l'identité pivot : l'adresse mail de la personne et son nom d'usage.

### En savoir plus :

Enfin, l'API Bouton FranceConnect vous permet de simplifier les démarches des usagers en permettant l’échange d’informations les concernant d’une administration à une autre, via d'autres API liées au dispositif FranceConnect.

Voici une liste non exhaustive des données disponibles :

- [API Impôt Particulier](/les-api/impot-particulier) (Revenu fiscal de référence et Adresse fiscale)
- [API Attestation de droits maladie](/les-api/api_ameli_droits_cnam)
- API SIV
- [API Résultats aux examens](/les-api/arpent-resultats-api)

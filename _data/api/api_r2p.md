---
title: API R2P - Recherche des personnes physiques
logo: logo-dgfip.jpg
tagline: Récupérez les données connues par l’administration fiscale (DGFIP) sur une personne physique (état civil, adresse, identifiant fiscal)
owner: Direction Générale des Finances Publiques
owner_acronym: DGFIP
is_open: -1
access_link: /les-api/impot-particulier/demande-acces
access_page:
  - who:
      - Un particulier
      - Une entreprise
    is_eligible: -1
    description: |
      Vous n’êtes pas autorisé à accéder aux données de l’API R2P - Recherche des personnes physiques.

      <Button href="/rechercher-api">Retourner à la page de recherche</Button>
  - who:
      - Une collectivité
      - Une administration
      - Un ministère
    is_eligible: 0
    description: |
      L'API R2P restituant des éléments sensibles (état civil, adresse, identifiant fiscal), elle est couverte par la règle du secret professionnel prévue par les dispositions de l’article <External href="https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000031366350&idArticle=LEGIARTI000031367308&dateTexte=&categorieLien=cid">l'article L100-3</External> du Livre des Procédures Fiscales, car ceux-ci constituent des données nominatives et personnelles.

      Il ne peut être dérogé au secret professionnel que par une disposition législative spécifique. En conséquence, les informations restituées par l'API R2P ne peuvent être communiquées qu’aux personnes, organismes ou autorités bénéficiant d’une telle mesure et dans la limite fixée par la loi.

      Pour obtenir un agrément, vous devez **justifier du cadre juridique** dans lequel s’inscrit votre demande.

      <NextSteps service_description="de la description du cas d’utilisation" />
      <Button href="https://signup.api.gouv.fr/api-r2p-sandbox">Remplir une demande</Button>
  - who:
      - Un éditeur de logiciel
    is_eligible: 0
    description: |
      L'API R2P restituant des éléments sensibles (état civil, adresse, identifiant fiscal), elle est couverte par la règle du secret professionnel prévue par les dispositions de l’article <External href="https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000031366350&idArticle=LEGIARTI000031367308&dateTexte=&categorieLien=cid">l'article L100-3</External> du Livre des Procédures Fiscales, car ceux-ci constituent des données nominatives et personnelles.

      Il ne peut être dérogé au secret professionnel que par une disposition législative spécifique. En conséquence, les informations restituées par l'API R2P ne peuvent être communiquées qu’aux personnes, organismes ou autorités bénéficiant d’une telle mesure et dans la limite fixée par la loi.

      Pour obtenir un agrément, vous devez **justifier du cadre juridique** dans lequel s’inscrit votre demande.

      <NextSteps service_description="de la description du cas d’utilisation" is_editeur={true}/>
      <Button href="https://signup.api.gouv.fr/api-r2p-sandbox">Remplir une demande</Button>
  # - who:
  #     - Une banque
  #   is_eligible: 0
  #   description: |
  #     Dans le cadre de la vérification de l’éligibilité au <External href="https://www.service-public.fr/particuliers/vosdroits/F2367">LEP</External> les banques peuvent être considérées comme une administration au sens de <External href="https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000031366350&idArticle=LEGIARTI000031367308&dateTexte=&categorieLien=cid">l'article L100-3</External> du *code des relations entre le public et l'administration*.
  #     Si vous entrez dans ce cadre, vous pouvez effectuer une demande d'accès à l’API R2P.
  #     En remplissant cette demande, vous allez au passage effectuer une demande à l'API Impôt Particulier, dont les données sont nécessaires à la vérification de l'éligibilité au LEP.
  #     <NextSteps service_description="de la description du cas d’utilisation"/>
  #     <Button href="https://signup.api.gouv.fr/api-r2p-sandbox">Remplir une demande</Button>
keywords:
  - Recherche
  - Personnes
  - physiques
  - Adresse
  - Etat
  - civil
  - SPI
  - fiscal
  - identifiant
  - Signup
rate_limiting_resume: 1000 appels/minute
rate_limiting_description: |
  L’API Manager de la DGFiP délivre un quota de consultation pour chacun de ses partenaires pour chaque API utilisée. Concernant l'API R2P le quota par partenaire est fixé à 1 000 appels à la minute.
monitoring_description: |
  La DGFIP s’engage à ce que le service soit accessible à plus de 98,5% et à communiquer sur les coupures de service ponctuelles qui pourraient survenir.
themes:
  - Particulier
contact_link: bureau.capusagers-apimanagement@dgfip.finances.gouv.fr
doc_tech_link: https://api.gouv.fr/swaggers/api-r2p.json
last_update: 31/07/2020
---

L'API R2P permet aux administrations et aux acteurs privés qui sont éligibles d'obtenir les données personnelles d'un citoyen afin de les intégrer à leur Système d’Information (selon le cas d'usage : état civil complet, dernière adresse connue de l’administration fiscale (DGFIP) et identifiant fiscal ou SPI).

### A quoi sert l’API R2P - Recherche des personnes physiques ?

Exemples de cas d'utilisation :

- pour une collectivité locale dans le cadre de la prise en charge d'une facture afin de fiabiliser l'état civil du débiteur.
- pour une banque dans le cadre du contrôle de l'éligibilité des conditions d'ouverture d'un Livret d’Épargne Populaire (LEP).

### Les données disponibles dans l'API

Cette API fait appel aux différents référentiels nationaux de la DGFiP afin de rechercher et de restituer des éléments relatifs à l'état civil et l'adresse d'un usager ; éléments fiables dont les états civils sont pour une grande majorité certifiés par l'INSEE (+99%) et les adresses conformes aux normes topographiques nationales.

| Nom de la donnée | Commentaire                                         |
| ---------------- | --------------------------------------------------- |
| Etat civil       | Nom, prénom, date de naissance et lieu de naissance |
| Adresse          | Adresse connue par l’administration fiscale         |
| SPI              | Identifiant fiscal                                  |

**Cas spécifique**: les banques qui interrogent l’API dans le cadre du contrôle de l'éligibilité au Livret d’Épargne Populaire (LEP), ont seulement accès au SPI afin de pouvoir l’utiliser dans l’[API Impôt particulier](/les-api/impot-particulier).

### En savoir plus

L'API R2P propose 3 modes d'interrogation :

| Mode d'interrogation                     | Détail                                                                                                                                                                                                                                                                                                                                                               |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| état civil complet                       | nom, prénom, date et lieu de naissance                                                                                                                                                                                                                                                                                                                               |
| état civil dégradé et éléments d'adresse | les nom et prénom doivent alors être impérativement renseignés, de même que les éléments suivants : code pays, code département, et code commune de l'adresse. Les autres éléments d'état civil (date et lieu de naissance) et les autres éléments d'adresse (libellé voie, numéro de voirie et indice de répétition) peuvent être renseignés de manière facultative |
| SPI                                      | identifiant fiscal ou "numéro SPI"                                                                                                                                                                                                                                                                                                                                   |

L'API R2P ne restitue qu'une seule personne.

Des messages d'erreur spécifiques sont restitués lorsque les éléments saisis peuvent correspondre à plusieurs personnes, lorsqu'aucune personne n'est trouvée, lorsque des éléments devant obligatoirement être saisis en entrée sont absents, ou lorsque le format des éléments saisis est erroné.

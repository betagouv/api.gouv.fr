---
title: API Ma Cantine
producer: dinum
tagline: L'API ma-cantine permet aux logiciels de gestion de restauration collective de s'interfacer avec l'application ma-cantine afin de faciliter la télédéclaration obligatoire de leurs clients.
is_open: -1 

access_page:
  - who:
      - Un gestionnaire de cantine
    is_eligible: 1
    description: |
      Vous pouvez vous connecter sur la plateforme ma-cantine ou vous créer un compte. Pour voir les informations relatives à l'API, cochez l'option "développeur".
      <Button href='https://ma-cantine.agriculture.gouv.fr/developpement-et-apis/' >Ma cantine </Button>
      <Button href='https://ma-cantine-demo.cleverapps.io/developpement-et-apis/' >Plateforme de démo pour les tests </Button>
  - who:
      - Un éditeur d'un logiciel de gestion de cantine
    is_eligible: 1
    description: |
      Vous pouvez utiliser cette API pour interfacer votre logiciel avec la plateforme ma-cantine. Pour voir les informations relatives à l'API, cochez l'option "développeur".
      <Button href='https://ma-cantine.agriculture.gouv.fr/developpement-et-apis/' >Ma cantine </Button>
      <Button href='https://ma-cantine-demo.cleverapps.io/developpement-et-apis/' >Plateforme de démo pour les tests </Button>
  - who:
      - Autre
    is_eligible: -1
    description: |
      L’usage de l’API ma-cantine est reservé aux **gestionnaires de cantines** pour qu'il puissent gérer leurs établissements et effectuer les démarches de suivi d'achats alimentaires.
      <Button href='https://www.data.gouv.fr/fr/datasets/6482def590d4cf8cea3aa33e/#/resources' >Consulter les données ouvertes</Button>

partners: 
- maa
 
keywords:
  - ma
  - cantine
  - editeurs
  - logiciel
  - restauration
  - collective

rate_limiting_resume: 
rate_limiting_description: |
 
themes:
  - cantine
  - restauration

content_intro: |
  
L'API "approvisionnement" Egalim s'adresse aux éditeurs de logiciel de la restauration collective.
  
Cette API permet aux gestionnaires de cantines d'envoyer depuis leur logiciel tiers leurs données d'approvisionnements au format détaillé, à la fréquence de leurs choix, dans le but de réaliser leur déclaration annuelle.

Lorsque les données sont envoyées, celles-ci s'incrémentent dans le bilan de l'année concernée, pour la cantine concerné. Cela permet aux gestionnaires de visualiser ses objectifs Egalim sur le bio et les produits de qualité. Également, ces taux sont directement publié sur sa cantine en ligne afin que ses convives puissent consulter ces informations. 

Pour rappel, la déclaration de ses approvisionnements et sa communication sont obligatoires. 

Enfin, pour réaliser la synchronisation entre le logiciel tiers et l'établissement référencé sur ma cantine, cela se fait via le numéro SIRET. 


contact_link: contact@egalim.beta.gouv.fr
doc_tech_external: https://ma-cantine.agriculture.gouv.fr/blog/51/
uptime: 
visits_2019: 1000
last_update: 02/08/2024
---

### Données disponibles

| Nom        |Description                                       |
| ----------- | ------------------------------------------------------------------------------------------------------------------------ |
| Cantine  | Site de restauration collective |
| Secteurs | Catégorie de secteur d'activité   |
| Télédéclaration      | Bilan des mesures EGAlim publiés |
| Utilisateur     | Informations sur l'utilisateur |

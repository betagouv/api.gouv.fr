---
title: API Engagement
tagline: Diffusier les missions de bénévolat et de volontariat partout en France
external_site: https://beta.gouv.fr/startups/engagement-civique.html
is_open: -1 # -1 means API not open
#datapass_link: 
access_page:
  - who:
      - Un particulier
    is_eligible: -1
    description: |
      Seules les administrations et certaines sociétés sont habilitées à publier leurs annonces sur l' API Engagement.
      En revanche, il vous est possible de consulter les annonces sur [JeVeuxAider.gouv.fr](https://www.jeveuxaider.gouv.fr/) ou [ le portail Service Civique](https://www.service-civique.gouv.fr/jeunes-volontaires/?gclsrc=aw.ds)

      <Button href="/rechercher-api">Rechercher une autre API</Button>
      
  - who:
      - Une collectivité ou une administration
    is_eligible: 1
    description: |
      Si vous êtes une collectivité ou une administration, vous pouvez remplir une demande d’accès à l’API Engagement vous-même pour l'entité que vous représentez. 
      C'est cette demande d'accès qui vous permet à la fois de poster des annonces, ou de diffuser un flux d'annonces.  

      <NextSteps />
      <Button href="https://doc.api-engagement.beta.gouv.fr/getting-started/create-your-account">Demander un accès</Button>
  - who:
      - Une entreprise
    is_eligible: 1
    description: |
      Les entreprises peuvent publier des annonces et les diffuser via l'API Engagement. 
       

      <NextSteps />
      <Button href="https://doc.api-engagement.beta.gouv.fr/getting-started/create-your-account">Demander un accès</Button>
  - who:
      - Un éditeur de logiciel
    is_eligible: 1
    description: |
      Les éditeurs de logiciels peuvent publier des annonces et les diffuser via l'API Engagement.

      <NextSteps is_editeur />
       <Button href="https://doc.api-engagement.beta.gouv.fr/getting-started/create-your-account">Demander un accès</Button>

partners:
# - ANCT producteur à créer
  - 
#producer: ANCT
keywords:
  - Engagement
  - Annonce
  - Civique
  - Offres
  - Volontariat
  - Bénévolat
  - Associations
#rate_limiting_resume: 
#rate_limiting_description: 
#monitoring_link: 
contact_link: support@entreprise.api.gouv.fr
doc_tech_link: https://doc.api-engagement.beta.gouv.fr/
doc_tech_external: https://doc.api-engagement.beta.gouv.fr/
themes:
  - Emploi
visits_2019: 4000
last_update: 25/03/2021
content_intro: |

L'API Engagement permet aux organisations de publier et diffuser des annonces de bénévolat et de volontariat.

  ### A quoi sert l’API Engagement ?

L’API Engagement facilite la diffusion des missions de bénévolat et de volontariat partout en France. C’est un service public numérique gratuit qui permet aux plateformes d’engagement publiques et privées de mettre en commun leurs missions. L'API permet ainsi d'augmenter la visibilité des annonces et le taux d’occupation des places offertes aux potentiels bénévoles et volontaires.
  
Concrètement, chaque plateforme peut intégrer l’API pour diffuser ses missions vers les autres plateformes partenaires d'une part, et récupérer les missions disponibles sur les autres plateformes selon des critères spécifiques comme la localisation, le domaine d’action, etc. Le tableau de bord de l’API permet à chaque partenaire de configurer les flux de missions entrant/sortant et de mesurer la contribution de chaque plateforme en missions et en trafic.

---

  ### Données accessibles dans l'API

L'API Engagement permet de publier les données suivantes pour chaque annonces

Les champs requis :

| Champ                                           | Description      |
| ----------------------------------------------- | ---------------- |
| title                                           | Titre de votre mission            |
| description                                     | La description de votre mission   |
| clientId                                        | L'identifiant interne de votre mission |
| applicationUrl                                  | L'url vers votre annonce             |

Les champs générés par l'API :

L'api génère automatiquement les champs suivant : 

- publisherId : 
- publisherName
- publisherLogo
- publisherUrl : 
- statusCode ( ACCEPTED OR REFUSED ) 
- statusComment : Un commentaire sur le pourquoi la mission a été refusée
- createdAt : La date de creation de la mission
- updatedAt : La date de la dernière mise a jour de la mission



Les champs optionnels 

| Champ                                           | Description      |
| ----------------------------------------------- | ---------------- |
| organizationUrl                                 | L'url de l'organisation qui cherche un bénévole   |
| organizationId.                                 | ID unique de l'organisation qui la distingue des autres organisations de votre flux   |
| organizationFullAddress                         | L'adresse complete de l'organisation |
| applicationUrl.                                 | L'url vers votre annonce             |
| applicationUrl.                                 | L'url vers votre annonce             |
| applicationUrl.                                 | L'url vers votre annonce             |
| applicationUrl.                                 | L'url vers votre annonce             |
| applicationUrl.                                 | L'url vers votre annonce             |
| applicationUrl.                                 | L'url vers votre annonce             |
| applicationUrl.                                 | L'url vers votre annonce             |
| applicationUrl.                                 | L'url vers votre annonce             |
| applicationUrl.                                 | L'url vers votre annonce             |
| applicationUrl.                                 | L'url vers votre annonce             |
| applicationUrl.                                 | L'url vers votre annonce             |
| applicationUrl.                                 | L'url vers votre annonce             |
| applicationUrl.                                 | L'url vers votre annonce             |



**NB**: Pour en savoir plus, n'hésitez pas à consulter le <External href='https://entreprise.api.gouv.fr/catalogue/'>catalogue des données disponibles dans l’API Entreprise</External>

**NB**: Certaines données sont accessibles en open data (sans demande d'accès à l'API) via leur propre API et ne nécessitent pas de passer par API Entreprise. C'est notamment le cas de :

- les [données de l'INPI](/les-api/api_inpi)
- les [données de l'ADEME](/les-api/api_professionnels_rge)
- les [données du RNA](/les-api/api_rna)
- les [données de l'INSEE](/guides/quelle-api-sirene) (à l'exception des entreprises <External href="https://www.insee.fr/fr/information/4127417">non-diffusibles</External>)

### En savoir plus

L’<External href="https://entreprise.api.gouv.fr/">API Entreprise</External> est une composante de l’État plateforme, l’accès à l’API Entreprise est modérée et régulée par la DINUM, qui attribue à chaque client des autorisations de récupération d’informations selon la nature des démarches à traiter (Marchés publics, aides publiques,…).

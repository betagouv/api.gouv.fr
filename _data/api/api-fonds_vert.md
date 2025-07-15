---
title: API Fonds Vert (BETA)

tagline: L'API Fonds Vert permet de requêter les informations contenues dans les dossiers de Démarches Simplifiées dans le cadre des démarches du Fonds Vert. 

producer: dgaln

contact_link: fondsvert@developpement-durable.gouv.fr 

partners: 

is_open: -1 # 📍 -1 si l'API est fermée, accessible à un public restreint sous habilitation ; 0 si un compte est nécessaire pour utiliser l'API mais qu'il n'y a pas de conditions pour se créer un compte.

account_link: https://site-api/user/register # URL de la page de demande d'habilitation si l'API nécessite un compte pour être utilisée. ATTENTION : retirer ce champ si vous utilisez le champ ci-dessous "datapass_link".
datapass_link: https://datapass.api.gouv.fr/api-xxx # URL vers le formulaire d'habilitation Datapass (uniquement API en accès restreint). ATTENTION : retirer ce champ si vous utilisez le champ ci-dessus "account_link".
is_france_connected: -1 # 📍 -1 L'API n'est pas FranceConnectée ; 1 L'API est FranceConnectée.
access_page:
# Ce tableau vous permet de créer un entonnoir pour vérifier l'éligibilité de l'usager avant de le mener vers votre formulaire d'habilitation. Pour en savoir plus sur le fonctionnement de ce composant consulter le read.me.
  - who:
      - Un particulier ou une entreprise
    is_eligible: -1 # -1 signifie que ce public n'est pas elligible, la mention "Désolé, vous n’êtes pas éligible 🚫" sera affichée.
    description: |
      Seules les administrations sont habilitées à utiliser l'API XX.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Une collectivité ou une administration
    is_eligible: 1 # 1 signifie que ce public est éligible, la mention "Vous êtes éligible 👌" sera affichée.
    description: |
      Conformément aux dispositions XXXX, seul le public XXX est habilité à pouvoir utiliser cette API.
      Pour obtenir un agrément, vous devrez **justifier de XXXX**, et vous engager à XXXX.

      Vous aurez besoin des informations suivantes pour compléter votre demande d'habilitation :
      - Info 1
      - Info 2
      - Document 1

      <Button href="https://datapass.api.gouv.fr/api">Remplir une demande</Button>
  - who:
      - Un éditeur de logiciel
    is_eligible: -1
    description: |
      Si vous êtes **éditeur de logiciels, c'est à votre collectivité ou administration de faire sa demande d'habilitation.**

      <Button href="/rechercher-api">Rechercher une autre API</Button>

rate_limiting_resume: 10 appels / minute / IP # 📍 Volumétrie maximale de votre API.

rate_limiting_description: |
  Pas de limitation d'usage # Phrase descriptive de la volumétrie
  
doc_tech_link: https://api-fonds-vert.datahub.din.developpement-durable.gouv.fr/docs # 📍 URL qui donne accès au swagger de votre API, sur la page API.gouv suivante : https://api.gouv.fr/documentation, accessible depuis le bouton "Tester l'API" sur la fiche de l'API. Pour en savoir plus, consulter le read.me.
doc_tech_external: # 📍 URL vers la documentation technique de l'API
monitoring_link: https://api-fonds-vert.datahub.din.developpement-durable.gouv.fr/fonds_vert/health # URL de la page de statut de l'API
stats_detail_resume: stats_detail_description: |
  Accédez au suivi des consommations de l'API
stats_detail_link: # URL de la page des statistiques d'usage de l'API
uptime: 98.011 # 📍 Mettre le taux de disponibilité moyen du dernier mois
themes: # 📍 Ajouter un ou plusieurs thèmes, qui permettront aux usagers de trouver votre API en filtrant le catalogue par thématique. Pour ajouter un thème ci-dessous, supprimer simplement le # (sans retirer des blancs.)
#  - transition écologique
#  - territoires
#  - Performances environnementales
#  - Financement des projets des collectivités

keywords: # 📍 Ajouter des mots clés qui permettront aux usagers de trouver votre API avec le moteur de recherche.
  - fonds verts
  - transition écologique
  - aides état
  - collectivités
  - écologie 
  
last_update: 20/01/2024  
datagouv_uuid: 
content_intro: 

  ### À quoi sert l'API XXX ?

L'API Fonds Vert a pour objectif de mettre à disposition les données relatives aux aides déposées dans le cadre du dispositif "Fonds Vert"

https://aides-territoires.beta.gouv.fr/programmes/fonds-vert/?tab=program-description 

# 📍 Ce champ apparaîtra en haut de la fiche de l'API, sous le titre description. Le texte ci-dessus est un exemple et montre comment ajouter un lien vers l'extérieur.

---
<!-- Cette partie de la fiche permet d'ajouter du contenu en utilisant le langage markdown. Nous proposons ici une trame des informations utiles à fournir aux usagers, si votre API est une API permettant d'accéder à de la data. Pour en savoir plus sur la syntaxe markdown, vous pouvez consulter internet et cette page Github : https://docs.github.com/fr/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax -->

## Périmètre de l'API 

5000 communes Public concernés par le dispositif 

### Entitées concernés : 
Administrations demandeuses d'aides "fonds vert"

Cette API ne concerne pas :
- ❌ les aides aux particuliers ;
- ❌ les aides aux entreprises.

### Périmètre géographique : <!-- Quelle est la localisation des entités concernées ?-->

- ✅ **Métropole** 
- ✅ **DROM-COM** 

### Actualisation de la donnée 
 2 fois par jour
<!-- Quelle est la fraicheur de la donnée transmise ?-->


## Modalités d'appel 

- Numéro de dossier
- Numéro de démarche
- Stock

## Les données 

Informations renvoyées en JSON : https://api-fonds-vert.datahub.din.developpement-durable.gouv.fr/openapi.json


## 🔎 En savoir plus <!-- PARTIE 3  : Des liens pour aller plus loin ? -->
- <External href="https://URL">API XXX</External>
- <External href="https://URL">API XXX</External>

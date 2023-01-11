---
title: Autocompléter une adresse dans un formulaire en ligne
tagline: Facilitez le remplissage d'un formulaire en ligne en autocomplétant l'adresse saisie grâce à l'API Adresse
tags: cas usage, adresse, geo, postal, commune
image: adresse.png
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
api:
  - API Adresse (Base Adresse Nationale - BAN)
---

## Qu'est-ce que l'autocomplétion d'adresse ?

Lorsqu'un internaute doit saisir son adresse, ou rechercher une adresse pour la trouver sur une carte, il est possible de compléter automatiquement la saisie de cette adresse.
L'avantage de l'autocomplétion est double :

#### ⏱ faire gagner du temps à l'usager pour lui suggérer une adresse entière**

#### ✅ proposer une adresse fiable et associée à une géolocalisation précise.**

## Comment ça marche ?

Derrière ce module, c'est la Base Adresse Nationale qui est appelée, grâce à l'API Adresse.

L'exemple ci-dessous fonctionne grâce à l'API Adresse : testez en saisissant une adresse :

<iframe id="adresse"
    title="Adresse"
    width="100%"
    height="400"
    src="https://adresse.data.gouv.fr/base-adresse-nationale#5.25/46.833/3.666">
</iframe>

## Quelle API doit-on utiliser pour autocompléter une adresse ?

C'est [l'API Adresse (Base Adresse Nationale)](/les-api/base-adresse-nationale) qui devra être utilisée : elle centralise toutes les adresses géolocalisées, qui proviennent notamment des Bases Adresses Locales, alimentées par les communes.

🌍 L'API couvre les adresses en France métropolitaine et dans les Départements et régions d'outre-mer.

### Données disponibles

| Nom              | Description                                                        |
| ---------------- | ------------------------------------------------------------------ |
| type             | type de résultat trouvé : rue, numéro de plaque, lieu-dit, commune |
| numéro de plaque | numéro avec indice de répétition éventuel (bis, ter, A, B)         |
| nom              | numéro éventuel et nom de voie ou lieu dit                         |
| code postal      | code postal                                                        |
| code de ville    | code INSEE de la commune                                           |
| commune          | nom de la commune                                                  |
| arrondissement   | nom de l’arrondissement (Paris/Lyon/Marseille)                     |
| context          | n° de département, nom de département et de région                 |

## Ressources complémentaires pour utiliser l'API

👉 <External href='https://adresse.data.gouv.fr'>Site national des adresses</External>

👉 <External href='https://guides.etalab.gouv.fr/apis-geo/1-api-adresse.html#les-donnees-d-adresses'>Guide (Etalab) pour utiliser l'API et voir des exemples d'utilisation</External>

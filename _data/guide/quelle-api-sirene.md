---
title: Quelle API Sirene utiliser ?
tags: cas usage, api sirene,insee, api entreprise, KBIS
---

Lorsqu’on est à la recherche d’infomations sur les entreprises en France,
on finit toujours par trouver la base SIRENE administrée par l’INSEE.

En effet, le répertoire SIRENE contient des informations sur chacun des 28 millions d’établissements immatriculés en France, dont 11 millions sont des établissements actifs.

<FlatFileWidget title="Accèder aux données de la base Sirene sur data.gouv" href="https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/" />

Les données issues de la base SIRENE sont disponibles en opendata sur data.gouv.fr sous forme de 5 fichiers stocks mensuels :

https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/

Le plus souvent, votre cas d’utilisation ne nécessite pas d’avoir accès à l’intégralité du répertoire : Vous recherchez des informations sur un ou plusieurs (jusqu’à quelques dizaines) unités légales ou établissement. Dans ce cas, l’interrogation par API est sans doute la bonne solution.

Sur API.gouv.fr, vous allez trouver 3 API mettant à disposition ces informations liées aux entreprises. Laquelle utiliser ?
La source de la donnée est toujours la base SIRENE

Avant tout, les API ont toujours la même source de données : la base SIRENE produite et diffusée par l’INSEE.
Ensuite chaque API se différencie par les fonctions qu’elle propose en plus et par les traitements qu’elle applique pour enrichir, transformer et mettre en valeur les données.
Pour choisir quelle API utiliser, il faut décider quels sont les fonctions et les enrichissements qui vous sont nécessaire pour construire votre service par dessus l’API.
Les API existantes :
La source primaire : l’API sirene de l’INSEE

C’est l’API proposée par l’INSEE.
Cette API nécessite une inscription sur le site de l’INSEE avant d’accéder à l’API.
L’usage d’API Sirene est soumis à une limite de 30 interrogations par minute.

Cette API donne accès aux informations concernant les entreprises et les établissements immatriculés au répertoire interadministratif Sirene depuis sa création en 1973, y compris les unités fermées. La recherche peut être unitaire, multicritère, phonétique et porter sur les données courantes et historisées. Les services actuellement disponibles interrogent les unités légales (Siren) et les établissements (Siret), ainsi que les prédécesseurs et les successeurs d’un établissement donné.

https://api.insee.fr/entreprises/sirene/V3/siren/
https://api.insee.fr/entreprises/sirene/V3/siret/

Codes erreur :
301 Entreprise doublon
404 Entreprise non trouvée dans la base Sirene (si le paramètre date n’a pas été utilisé, cela peut signifier que le numéro de 9 chiffres ne correspond pas à un Siren présent dans la base ; si le paramètre a été utilisé, le Siren peut exister mais la date de création est postérieure au paramètre date)
429 Quota d’interrogations de l’API dépassé
500 Erreur interne du serveur

L’API proposée par l’INSEE donne également accès aux informations suivantes :

    les unités légales et les établissements non diffusibles
    les unités légales avec un refus d’immatriculation au Rcs

L’API opendata proposée par Etalab : entreprise.data.gouv.fr

L’API Sirene (entreprise.data.gouv.fr) contient tous les établissements des entreprises françaises, ainsi que toutes les associations disposant d’un code SIRET. Les données de l’API Sirene sont délivrées par l’INSEE.

La documentation est disponible ici https://entreprise.data.gouv.fr/api_doc/sirene

L’API vous renverra les informations demandées au format JSON (code 200).
Vous recevrez un code 404 si aucun établissement n’est trouvé, ou un 500 si le serveur n’est pas fonctionnel (par exemple pendant une maintenance). 429 après dépassement de la volumétrie maximale d’appels.

Le serveur accepte un maximum de 7 requêtes par seconde. Au delà, un code 429 est renvoyé indiquant que la volumétrie d’appels a été dépassée. L’IP sera blacklistée si les appels ne sont pas régulés suite aux retours 429.

Les unités légales et leurs établissements sont disponibles au travers de deux endpoints différents :
https://entreprise.data.gouv.fr/api/sirene/v3/etablissements/
https://entreprise.data.gouv.fr/api/sirene/v3/unites_legales/
L’historique des entreprises et des établissements fermés sont aujourd’hui disponibles.

Exemple de requete pour avoir seulement les établissement actifs d’une entreprise etat_administratif=A
https://entreprise.data.gouv.fr/api/sirene/v3/etablissements/?etat_administratif=A&siren=345184428

Routes dispo :
GET https://entreprise.data.gouv.fr/api/sirene/v3/unites_legales/
GET https://entreprise.data.gouv.fr/api/sirene/v3/unites_legales/<VOTRE_SIREN>
GET https://entreprise.data.gouv###.fr/api/sirene/v3/etablissements/
GET https://entreprise.data.gouv.fr/api/sirene/v3/etablissements/<VOTRE_SIRET>

L’API entreprise.data.gouv.fr ne donne pas accès aux autres services proposées par l’INSEE : unités légales ou établissement non diffusibles, unité légale avec un refus d’immatriculation au RCS et recherche des prédesseurs ou successeurs d’un établisseement)

Par rapport à l’API SIRENE de l’INSEE, le format des réponses de l’API entreprise.data.gouv.fr :

    ajoute quelques champs : notamment une géolocalisation (lat/long) des UL et et des établissements.
    modifie le nommage de la plupart des champs (sans en supprimer)

La documentation est accessible ici : https://entreprise.data.gouv.fr/api_doc/sirene
L’API soumise à habilitation, proposée par la DINUM : entreprise.api.gouv.fr

https://doc.entreprise.api.gouv.fr/#etablissements-v2

GET https://entreprise.api.gouv.fr/v2/entreprises/:siren
Les différences de fonctionnalités et de données accessibles :

Par rapport à l’api entreprise.data.gouv.fr :

    l’API SIRENE et l’API entreprise.api.gouv proposent en plus un accès aux non diffusibles (pour les unités légales et les établissements) et un acces aux prédesseurs/successeurs pour les établissmeents

Par rapport à l’api entreprise.api.gouv.fr

    l’API SIRENE offre en plus un accès aux refus d’immatriculation RCS et des possibilités de recherche plus fine et plus complete.

Par rapport à l’api sirene :

    L’API ENT. offre une adresse normalisée en plus de l’adresse déclarée
    L’API DATA offre une géolocalisation en plus de l’adresse déclarée

Les nommages des champs des 3 api sont différents, cependant il s’agit d’un simple renommage, il n’y a pas de suppressions de champs ou de fusion de plusieurs champs en un seul.
Tableau

un truc interactif pour un siret voila ce que tu aurais
41816609600051

https://entreprise.data.gouv.fr/sirene/41816609600069
https://entreprise.api.gouv.fr/v2/etablissements/41816609600069
https://api.insee.fr/entreprises/sirene/V3/siret/41816609600069

Démonstrateur intégré dans la page

Sachants :

Alexandre de pablo
Alexandre bulté et geoffrey aldebert
pour reprise de l’infra

démonstrateur

referencer dans api.gouv
coté back -> data.gouv

Liaison dans chaque page api sirene
et communication facile

    différents api

    pour les api :

| type de requete     | SIRENE | EDGF | EAGF |
| ------------------- | ------ | ---- | ---- |
| requete par nom ?   | OUI    | OUI  | OUI  |
| requete par SIRET   | OUI    | OUI  | OUI  |
| requete par SIREN   | OUI    | OUI  | OUI  |
| requete par Adresse | OUI    | ?    | NON  |
| Non diffusible      | OUI    | NON  | OUI  |
| RefusImmatRCS       | OUI    | NON  | NON  |

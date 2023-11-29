---
title: API IMPRIM'FIP
tagline: Utilisez la solution éditique IMPRIM’FIP pour délocaliser le traitement de vos courriers administratifs sortants (impression, mise sous pli, affranchissement et remise à La Poste) vers les centres éditiques industriels de la DGFIP.
producer: dgfip
is_open: -1 # -1 means API not open
is_france_connected: 0 # undefined | 1 | 2. 2 means can be used with FC, 2 means has to be used with FC
access_page:
  - who:
      - Un particulier
      - Une entreprise
      - Un éditeur de logiciel
      - Un établissement bancaire
    is_eligible: -1
    description: |
      Vous n’êtes pas autorisé à accèder au service IMPRIM'FIP.

      <Button href="/rechercher-api">Retourner à la page de recherche</Button>
  - who:
      - Une entité administrative
    is_eligible: 0
    description: |
      L'API IMPRIM’FIP permet le dépôt de fichiers (mono documents ou multi plis avec ou sans annexes) et le suivi de leur traitement.
      L'utilisation de l'API IMPRIM’FIP nécessite la réalisation de tests éditiques préalables avec l'équipe dédiée au sein de la DGFiP afin de vérifier l'éligibilité des courriers à la solution. Dans le cadre de votre demande d'habilitation, vous serez recontacté à cet effet.

      <NextSteps />
      <Button href="https://datapass.api.gouv.fr/api-imprimfip-sandbox">Remplir une demande</Button>
datapass_link: https://datapass.api.gouv.fr/api-imprimfip-sandbox
keywords:
  - Mise sous plu
  - Courrier
  - Impression
  - Affranchissement
  - La Poste
  - Documents
rate_limiting_resume: 500 appels/minute
rate_limiting_description: |
  API : ouverture toute l’année.
  Plage d’ouverture : 0h-24h, 7j/7j.
  Offre de couverture du service : 8h-18h
themes:
  - Particulier
contact_link: imprimfip@dgfip.finances.gouv.fr
visits_2019: 1000
doc_tech_link: /swaggers/api-imprimfip.json
content_intro: |
  L’API IMPRIM’FIP permet à une administration de délocaliser le traitement de ses courriers sortants (impression, mise sous pli, affranchissement et remise à La Poste) vers l’un des quatre centres éditiques industriels de la DGFIP.
  Pour découvrir l’offre IMPRIM’FIP, nous vous invitons à visionner le film d’animation vidéo sur le lien suivant : https://www.linkedin.com/feed/update/urn:li:activity:7016718801777872896

  ### A quoi sert l’API IMPRIM’FIP ?

  Pour l’acteur qui le met en place :

  Les avantages d’IMPRIM’FIP sont nombreux pour les administrations qui utilisent le service :
  - une réduction des coûts d’affranchissement en bénéficiant d’un tarif postal industriel plus avantageux,
  - la suppression de tâches manuelles de confection des courriers,
  - des flux sécurisés et cryptés,
  - un engagement de remise à La Poste dans les 2 jours maximum suivants le dépôt du fichier,
  - une participation à la décarbonation partielle des activités d’envoi du courrier, renforçant l’exemplarité de l’État.
  Les agents de la DGFiP plébiscitent ce service avec plus de 20 millions de plis déposés par an et des économies sur les coûts d’affranchissement de l’ordre de 40 %. La DGCCRF, le service concours du Ministère de l’Intérieur, des starts UP du Ministère de la Transition Ecologique et le SGCD 69 utilisent cette solution. Leurs retours sont très positifs.

last_update: 27/03/2023
---

### Les données disponibles dans l’API

L'API IMPRIM’FIP permet le dépôt de fichiers (mono documents ou multi plis avec ou sans annexes) et le suivi de leur traitement.
Pour utiliser l’API IMPRIM’FIP, il faut contacter l’équipe IMPRIM’FIP de la DGFiP afin de réaliser des tests éditiques préalables d’éligibilité des courriers à la solution : imprimfip@dgfip.finances.gouv.fr

| Nom de la donnée    | type                 | Commentaire                                       |
| ------------------- | -------------------- | ------------------------------------------------- |
| Statut              | Chaîne de caractères | Statut du document dans la chaîne de production   |
| Date de statut      | Date/Heure           | Date/heure du statut du document                  |

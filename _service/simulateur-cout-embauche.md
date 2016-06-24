---
title: Simulateur de coût d'embauche
link: http://embauche.beta.gouv.fr/
description: Simulez le coût d'une embauche en France
screenshot: ecran_simulateur-cout-embauche.png
api:
  - API Prélèvements sociaux
  - GéoAPI
---
Un module Web de simulation du coût d'une embauche, à intégrer simplement sur une page Web.
Repose sur le simulateur OpenFisca, qui implémente les règles des prélèvements sociaux et les principales aides nationales à l'embauche.

Il utilise la [GéoAPI](https://api.gouv.fr/api/geoapi.html) pour faciliter la saisie du code INSEE de la commune à partir du code postal, mieux connu des utilisateurs.

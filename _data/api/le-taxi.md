---
title: le.Taxi
tagline: Un clic, un taxi
external_site: https://le.taxi
is_open: -1 # -1 means API not open
access_page:
  - who:
      - Un applicatif chauffeur (groupement, centrale, application pour indépendants...)
    is_eligible: 1
    description: |
      Vous pouvez remplir une demande d’accès à l’API Le.Taxi dans le cadre des articles [L. 3121-11-1](https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000029528684&cidTexte=LEGITEXT000023086525) et [R3121-24 à R3121-33](https://www.legifrance.gouv.fr/affichCode.do?idSectionTA=LEGISCTA000032278146&cidTexte=LEGITEXT000023086525) du Code des transports.

      <NextSteps />
      <Button href="https://datapass.api.gouv.fr/le-taxi-chauffeurs">Remplir une demande</Button>
  - who:
      - Un applicatif client (moteur de recherche de taxis, application multimodale…)
    is_eligible: 1
    description: |
      Vous pouvez remplir une demande d’accès à l’API Le.Taxi dans le cadre des articles [L. 3121-11-1](https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000029528684&cidTexte=LEGITEXT000023086525) et [R3121-24 à R3121-33](https://www.legifrance.gouv.fr/affichCode.do?idSectionTA=LEGISCTA000032278146&cidTexte=LEGITEXT000023086525) du Code des transports.

      <NextSteps />
      <Button href="https://datapass.api.gouv.fr/le-taxi-clients">Remplir une demande</Button>
  - who:
      - Un éditeur logiciel pour les flottes de taxis
    is_eligible: 0
    description: |
      Prenez contact avec nous directement. Les éditeurs logiciels qui équipent les flottes de taxis ont un statut spécifique sur notre API (manager de flotte).
      Ecrivez-nous à equipe@le.taxi en nous présentant votre structure et nous reviendrons très rapidement vers vous.

      <Button href="mailto:equipe@le.taxi">Nous écrire</Button>
  - who:
      - Un chauffeur de taxi indépendant
    is_eligible: -1
    description: |
      Pour accéder à l’API, vous devez utiliser une application ou un logiciel connecté.
      Pour voir la liste des applicatifs chauffeurs connectés, rendez vous sur
      <a href="https://le.taxi/partners.html">notre site internet</a>.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Particuliers, entreprise autre
    is_eligible: -1
    description: |
      Seuls les opérateurs de taxi ou éditeurs d’application peuvent demander un accès à l’API.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
datapass_link: https://datapass.api.gouv.fr/le-taxi-clients #default access link
partners:
  - Atlantis Taxi
  - G7
  - Tako
  - Taxiloc
  - Taxis Rennais
producer: dinum
keywords:
  - Transport
  - Taxi
contact_link: equipe@le.taxi
doc_tech_link: https://api.taxi/swagger.json
themes:
  - Transport
visits_2019: 1477
last_update: 10/12/2019
---

Grâce à la réunion des taxis au sein d'une plateforme unique, les éditeurs d'applications mobiles peuvent désormais offrir un bouton "le.Taxi" qui permet de visualiser et de héler électroniquement tous les taxis connectés, partout en France. Les usagers peuvent désormais effectuer une commande immédiate d'un taxi à partir de leur smartphone, depuis une des nombreuses applications agréées, qu'il s'agisse d'un moteur de recherche, d'une application de mobilité ou d'une application d'une compagnie de taxi. Avec la même application, ils peuvent trouver un taxi partout en France.

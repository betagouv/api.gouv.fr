---
title: le.taxi
tagline: Un clic, un taxi
external_site: https://le.taxi
is_open: -1 # -1 means API not open
access_page:
  - who:
      - Groupement de taxis
    is_eligible: 1
    description: |
      Vous pouvez remplir une demande d’habilitation à l’API le.taxi dans le cadre des articles [L. 3121-11-1](https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000029528684&cidTexte=LEGITEXT000023086525) et [R3121-24 à R3121-33](https://www.legifrance.gouv.fr/affichCode.do?idSectionTA=LEGISCTA000032278146&cidTexte=LEGITEXT000023086525) du Code des transports.

      <NextSteps />
      <Button href="https://datapass.api.gouv.fr/le-taxi?demarche=applicatif_chauffeur">Remplir une demande</Button>
  - who:
      - Application de mobilité
    is_eligible: 1
    description: |
      Vous pouvez remplir une demande d’habilitation à l’API le.taxi dans le cadre des articles [L. 3121-11-1](https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000029528684&cidTexte=LEGITEXT000023086525) et [R3121-24 à R3121-33](https://www.legifrance.gouv.fr/affichCode.do?idSectionTA=LEGISCTA000032278146&cidTexte=LEGITEXT000023086525) du Code des transports.

      <NextSteps />
      <Button href="https://datapass.api.gouv.fr/le-taxi?demarche=applicatif_client">Remplir une demande</Button>
  - who:
      - Acteur de mobilité publique
    is_eligible: 1
    description: |
      Vous pouvez remplir une demande d’habilitation à l’API le.taxi dans le cadre des articles [L. 3121-11-1](https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000029528684&cidTexte=LEGITEXT000023086525) et [R3121-24 à R3121-33](https://www.legifrance.gouv.fr/affichCode.do?idSectionTA=LEGISCTA000032278146&cidTexte=LEGITEXT000023086525) du Code des transports.
      
      <NextSteps />
      <Button href="https://datapass.api.gouv.fr/le-taxi?demarche=applicatif_client">Remplir une demande</Button>
  - who:
      - Editeur logiciel pour les flottes de taxis
    is_eligible: 0
    description: |
      Prenez contact avec nous directement. Les éditeurs logiciels qui équipent les flottes de taxis ont un statut spécifique sur notre API (manager de flotte).
      Ecrivez-nous à equipe@le.taxi en nous présentant votre structure et nous reviendrons très rapidement vers vous.
      <Button href="mailto:equipe@le.taxi">Nous écrire</Button>
  - who:
      - Artisan taxi
    is_eligible: -1
    description: |
      Pour accéder à l’API, vous devez utiliser un applicatif chauffeur ou un logiciel connecté.

      <Button href="https://le.taxi/partners#Application%20chauffeur">Voir la liste des services agréés</Button>
  - who:
      - Autres
    is_eligible: -1
    description: |
      Seuls les opérateurs de taxi ou éditeurs d’application peuvent demander un accès à l’API.

      <Button href="mailto:equipe@le.taxi">Nous écrire</Button>
datapass_link: https://datapass.api.gouv.fr/le-taxi #default access link
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

Héler un taxi depuis son smartphone en cliquant sur un bouton, plutôt que de lever la main dans la rue, voilà l'ambition de la startup d'Etat le.taxi !
Service porté par la DINUM, le.taxi travaille au développement d'une API qui fonctionne comme un registre de disponibilité des taxis en temps réel. Avec cette API, les acteurs privés comme publics ont à disposition les données nécessaires pour pouvoir développer un service de maraude électronique.

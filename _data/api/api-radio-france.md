---
title: API Radio France
tagline: Accéder aux programmes et aux contenus produits par Radio France
external_site: https://www.radiofrance.com/lopen-api-radio-france
producer: radio-france
is_open: 0 # 0 means API require an account
account_link: https://developers.radiofrance.fr/
keywords:
  - radio
  - podcast
  - emission
  - culture
  - france inter
  - france info
  - contenu
  - theatre
  - mouv
  - francebleu
  - webradios
  - stream
  - musique
themes:
  - Culture
rate_limiting_resume: 1000 appels / jour
rate_limiting_description: |
  La limite est fixée par Radio France à 1000 appels par jour par clé d'API. Si vous avez besoin d'une plus grande limite, contactez le support : support.openapi@radiofrance.com
contact_link: support.openapi@radiofrance.com
doc_tech_external: https://docs.google.com/document/d/1SKWunSLpuUtWyaRqrZCI70vNpq_nNCTxeNNVfyCSaPc/edit?usp=sharing
visits_2019: 2500
last_update: 25/01/2022
content_intro: |
  L'API Radio France permet d'accéder de façon programmatique à la grille des programmes (exemple : savoir quelle émission passe à quelle heure donnée sur une chaîne donnée) de toutes les chaînes du groupe, et à des informations sur les chaînes, émissions et podcasts.
---

### À quoi sert l'API Radio France ?

L'API de Radio France permet aujourd'hui d'accéder :

#### 🗓 À la grille de programmes : quelle émission, quel titre passe à quelle heure sur une chaîne ?

- de France Inter,
- de franceinfo,
- des 44 locales de France Bleu,
- de France Culture,
- de France Musique et leurs webradios,
- Fip et leurs webradios,
- Mouv’ et leurs webradios.

#### 🎤 Aux contenus

- connaître ce qui se passe en direct,
- récupérer les infomations sur une émission / sur un podcast,
- récupérer les derniers épisodes d'une émission / d'un podcast, avec notamment les liens pour leur écoute.

#### 🔎 Aux données associées

- titre,
- chapô,
- tags,
- noms des producteurs,
- noms des invités,
- durée de l’émission.

### À qui s'adresse l'API Radio France

L'API s’adresse à toute personne souhaitant tester une utilisation des contenus de Radio France.

⚠️ Attention, l'API n’est pas destinée à servir les applications d'agrégation de flux live (stream de radio) ou de podcasts.

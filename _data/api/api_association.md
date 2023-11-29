---
title: API Associations (RNA)
tagline: Interrogez l'API Associations, version open data, dont les ressources proviennent notamment du répertoire national national des associations (RNA).
is_open: 1 # 1 means API is fully open
producer: djepva
keywords:
  - associations
  - rna
  - identité
  - statut
  - forme juridique
  - agrément
  - affiliation
  - fédération
  - bénévole
  - volontaire
  - alsace-moselle
  - loi 1901
  - utilité publique
  - régime
  - compte engagement citoyen
  - cec
  - création
  - dissolution
  - objet social
  - effectif
  - economie sociale et solidaire
  - ess
  - finance
  - compte
  - résultat
rate_limiting_resume: 10 appels / minute / IP
rate_limiting_description: |
  L'API est disponible à hauteur de 10 appels par minutes.
contact_link: djepva.disi@jeunesse-sports.gouv.fr
doc_tech_external: https://www.associations.gouv.fr/les-api-et-autres-outils.html
themes:
  - Professionnels
  - Entreprise
  - Administration & législation
last_update: 11/10/2023
content_intro: |
  ### À quoi sert l’API Associations (version opendata) ?

  L'<External href="https://www.associations.gouv.fr/les-api-et-autres-outils.html">API Associations de la DJEPVA</External> délivre les informations et documents de référence d'une association et de ses établissements, issus du répertoire national des associations (RNA) et de la base Sirene de l'Insee.

---

## Périmètre de l'API

### Associations concernées :

Cette API concerne ✅ **les associations inscrites au répertoire national des associations (RNA) et/ou au répertoire Sirene**.

### Périmètre géographique : 

- ✅ **Métropole**, y compris Alsace-Moselle.
Les associations qui relèvent du **régime de droit local d’Alsace-Moselle** sont couvertes par l’API dès lors qu’elles sont immatriculées au répertoire Sirene ;
- ✅ **DROM-COM** sauf ❌ les associations de Nouvelle-Calédonie, de la Polynésie française et de Wallis-et-Futuna qui ne sont pas immatriculées à l’INSEE, mais dans des bases locales

### Actualisation de la donnée

Les données sont mises à jour quotidiennement :
- Les créations et modifications validées par les greffes des associations sont déversées et disponibles le lendemain dans le RNA. Les données du RNA sont transmises deux fois par jour à la DJEPVA pour être intégrées dans cette API.
- Pour le répertoire Sirene, la mise à jour des données est faite quotidiennement entre 0h et 3h à l’Insee.

## Les données

Cette API délivre des informations publiques sur : 
- l'unité légale de l'assocation ; 
- les établissements de l'association.

Les données sont issues de deux bases de ressources différentes: 
- le répertoire national des associations (RNA) ;
- le répertoire Sirene.

## 🔎 En savoir plus
- [Documentation](https://www.associations.gouv.fr/les-api-et-autres-outils.html)
- [Contrat d'interface](https://www.associations.gouv.fr/le-contrat-d-interface.html)


## Vous êtes une administration ou une collectivité ?

En tant qu'administration ou collectivité, vous avez probablement accès à la version protégée et complète de cette API.

Pour accéder à l'API protégée, vous avez deux possibilités : 
- **contacter la DJEPVA** (djepva.disi@jeunesse-sports.gouv.fr) pour demander une clé d'authentification. La démarche est détaillée dans le contrat d'interface.
- **demander un accès au bouquet <External href='/les-api/api-entreprise'>API Entreprise</External>** opéré par la DINUM. Ce dernier vous permet d'obtenir de nombreuses données entreprises et associations avec une seule habilitation.

---
title: API Bénéficiaires effectifs - Inpi | Bouquet API Entreprise
tagline: Entités administratives, parmi les données entreprises/associations distribuées par le bouquet API Entreprise, récupérez la liste Inpi des bénéficiaires effectifs d'une unité légale inscrite au RNE.
external_site: https://entreprise.api.gouv.fr/catalogue/inpi/rne/beneficiaires_effectifs
is_open: -1 # -1 means API not open
datapass_link: https://datapass.api.gouv.fr/api-entreprise
access_page:
  - who:
      - Un particulier
    is_eligible: -1
    description: |
      L’usage de l’API Entreprise est **uniquement reservé aux acteurs publics** : les administrations, les collectivités, leurs opérateurs, les acteurs de santé, etc.

      <Button href='/les-api/api-entreprise#alternatives-en-acces-libre' >Consulter les alternatives</Button>
  - who:
      - Une collectivité ou une administration
    is_eligible: 1
    description: |
      **Si vous avez besoin des bénéficiaires effectifs et d'autres données entreprise/assocation :**
      L’API Entreprise vous permet d’accéder directement aux données administratives des entreprises et des associations pour faciliter leurs démarches (demandes d’aides, marchés publics, ...) dont les données des bénéficiaires effectifs issues de l'Inpi.

      <p style="margin-left: 1rem; margin-right: 1rem;font-size: 0.9rem; line-height: 1.5rem;">Conformément aux dispositions de <External href="https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000031366350&idArticle=LEGIARTI000031367412&dateTexte=&categorieLien=cid">l'article L114-8 du Code des relations entre le public et l'administration</External> vous ne pourrez accéder qu'aux seules informations ou données strictement nécessaires pour traiter une démarche de l'entreprise ou association concernée.</p>
      <br/><br/>
      <Button href='https://datapass.api.gouv.fr/api-entreprise' target='_blank' rel="noreferrer noopener">Déposer une demande</Button>

      **Si vous avez seulement besoin des données bénéficiaires effectifs :** 
      Vous pouvez demander un accès à l'[API de l'Inpi](https://api.gouv.fr/les-api/api-rbe).
  - who:
      - Une entreprise ou une association
    is_eligible: -1
    description: |
      Vous n’êtes pas autorisé à accéder aux données de cette API. L’usage de l’API Entreprise est uniquement reservé aux acteurs publics : les administrations, les collectivités, leurs opérateurs, les acteurs de santé, etc.
  - who:
      - Un organisme "chargé d'une mission ou délégataire de service public" (statut spécifique)
    is_eligible: 1
    description: |
      **Si vous avez besoin des bénéficiaires effectifs et d'autres données entreprise/assocation :**
      Si votre cadre légal le justifie, l’API Entreprise vous permet d’accéder directement aux données administratives des entreprises et des associations pour faciliter leurs démarches  (demandes d’aides, marchés publics, ...) dont les données des bénéficiaires effectifs issues de l'Inpi.

      <p style="margin-left: 1rem; margin-right: 1rem;font-size: 0.9rem; line-height: 1.5rem;">Conformément aux dispositions de <External href="https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000031366350&idArticle=LEGIARTI000031367412&dateTexte=&categorieLien=cid">l'article L114-8 du Code des relations entre le public et l'administration</External> vous ne pourrez accéder qu'aux seules informations ou données strictement nécessaires pour traiter une démarche de l'entreprise ou association concernée.</p>
      <br/><br/>
      <Button href='https://datapass.api.gouv.fr/api-entreprise' target='_blank' rel="noreferrer noopener">Déposer une demande</Button>

      **Si vous avez seulement besoin des données bénéficiaires effectifs :** 
      Vous pouvez demander un accès à l'[API de l'Inpi](https://api.gouv.fr/les-api/api-rbe).
  - who:
      - Un éditeur de logiciel
    is_eligible: 0
    description: |
      Si vous êtes éditeur de logiciels pour des acteurs publics, vous êtes éligible pour mettre à disposition de vos utilisateurs l’API Entreprise 👍
      <br/>
      <span role='img' aria-label='émoji avertissement'>⚠️</span> En tant que prestataire technique d’une entité administrative, vous pourrez être destinataire des informations techniques permettant l’usage de l’API mais en aucun cas des données elles-même.
      <br/>
      <Button href='https://datapass.api.gouv.fr/api-entreprise?demarche=editeur' alt>Déposer une demande pour intégrer l'API Entreprise</Button>
stat:
  lastXdays: 30
  url: https://dashboard.entreprise.api.gouv.fr/api/watchdoge/stats/last_30_days_usage
  label: informations non redemandées aux entreprises
partners:
  - inpi
producer: dinum
keywords:
  - RBE
  - bénéficiaire
  - bénéficiaires effectifs
  - registre
rate_limiting_resume: 1000 requêtes/min par IP
rate_limiting_description: 'Les limites de volumétrie sont détaillées ici :'
rate_limiting_link: https://entreprise.api.gouv.fr/developpeurs#respecter-la-volum%C3%A9trie
monitoring_link: https://status.entreprise.api.gouv.fr/
stats_detail_resume: Les statistiques sont disponibles sur 2 mois
stats_detail_description: Accédez au suivi des consommations des API
stats_detail_link: https://entreprise.api.gouv.fr/stats
contact_link: https://entreprise.api.gouv.fr/faq
doc_tech_link: https://entreprise.api.gouv.fr/v3/openapi-entreprise.yaml
useSwaggerProxy: true
doc_tech_external: https://entreprise.api.gouv.fr/developpeurs
themes:
  - Entreprise
visits_2019: 12610
uptime: 100
last_update: 14/09/2020
content_intro: |
  <External href="https://entreprise.api.gouv.fr/catalogue/inpi/rne/beneficiaires_effectifs">L'API bénéficiaires effectifs - Inpi - du bouquet API Entreprise</External> permet aux entités administratives d'accéder à la liste des bénéficiaires effectifs d'une unité légale inscrite au répertoire national des entreprises (RNE).

  <Button href="https://entreprise.api.gouv.fr/catalogue/inpi/rne/beneficiaires_effectifs">Consulter l'API RBE du bouquet API Entreprise</Button>

---


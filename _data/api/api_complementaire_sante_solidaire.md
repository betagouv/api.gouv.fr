---
title: API Complémentaire santé solidaire | Bouquet API Particulier # 📍 Nom commercial de l'API, privilégier un nom court.
tagline: Entités administratives, simplifiez les démarches des bénéficiaires de la complémentaire santé solidaire en vérifiant leur statut # 📍 Une phrase pour résumer le service rendu par l'API. Si votre API est uniquement accessible à certaines organisation, spécifiez-le dès maintenant.
producer: securite_sociale # 📍 Identifiant du fournisseur de la donnée trouvable ou ajoutable dans le dossier `api_gouv/_data/producteurs`, pour en savoir plus consulter le read.me.
contact_link: api-particulier@api.gouv.fr # 📍 Adresse e-mail que les usagers peuvent utiliser pour vous contacter.
partners: 
  - dinum
is_open: -1 # 📍 -1 si l'API est fermée, accessible à un public restreint sous habilitation ; 0 si un compte est nécessaire pour utiliser l'API mais qu'il n'y a pas de conditions pour se créer un compte.
datapass_link: https://datapass.api.gouv.fr/api-particulier # URL vers le formulaire d'habilitation Datapass (uniquement API en accès restreint). ATTENTION : retirer ce champ si vous utilisez le champ ci-dessus "account_link".
is_france_connected: 1 # 📍 -1 L'API n'est pas FranceConnectée ; 1 L'API est FranceConnectée.
access_page:
  - who:
      - Un particulier
    is_eligible: -1
    description: |
      L’usage de l’API Particulier est **uniquement reservé aux acteurs publics** : les administrations, les collectivités, leurs opérateurs, les acteurs de santé, etc.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Une collectivité ou une administration
    is_eligible: 1
    description: |
      L’API Particulier donne accès à l'API complémentaire santé solidaire et plus généralement aux données administratives des particuliers pour faciliter leurs démarches (cantines, titres de transport, aides sociales, démarches famille, etc...)<br/> Pour vérifier que l’API Particulier vous permet d’accéder aux données dont vous avez besoin, consultez le <External href="https://particulier.api.gouv.fr/catalogue">catalogue des API</External> et nos différents <External href="https://api.gouv.fr/les-api/api-particulier#exemples-d%E2%80%99application">cas d'usages</External>.

      <p style="margin-left: 1rem; margin-right: 1rem;font-size: 0.9rem; line-height: 1.5rem;">Conformément aux dispositions de <External href="https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000031366350&idArticle=LEGIARTI000031367412&dateTexte=&categorieLien=cid">l'article L114-8 du Code des relations entre le public et l'administration</External> vous ne pourrez accéder qu'aux seules informations ou données strictement nécessaires pour traiter une démarche du particulier concerné.</p>

      <NextSteps />
      <p style="margin-top: 0rem; font-size: 0.9rem; line-height: 1.5rem;"> <External href="https://particulier.api.gouv.fr/faq#quelles-informations-me-seront-demandees">En savoir plus sur les informations demandées</External></p>

      <QuestionTree tree='api-particulier' question='apipart'/>
  - who:
      - Une entreprise ou une association
    is_eligible: -1
    description: |
      L’usage de l’API Particulier est **uniquement reservé aux acteurs publics** : les administrations, les collectivités, leurs opérateurs, les acteurs de santé, etc.


      <Button href="/rechercher-api">Rechercher une autre API</Button>

      Si vous êtes **éditeur de logiciels pour des acteurs publics, c'est à vos utilisateurs collectivité ou administration de faire une demande d'habilitation.** En revanche, vous pouvez nous demander de vous référencer sur un cas d'usage afin de proposer des formulaires pré-remplis et ainsi simplifier l'expérience de vos clients publics.
      <External href="https://form.typeform.com/to/OJ4rkf5Z">Demander à être référencé</External>

  - who:
      - Un éditeur de logiciel
    is_eligible: -1
    description: |
      Si vous êtes **éditeur de logiciels pour des acteurs publics, c'est à vos utilisateurs collectivité ou administration de faire une demande d'habilitation.** 
      
      En revanche, vous pouvez nous demander de vous référencer sur un cas d'usage afin de proposer des formulaires pré-remplis et ainsi simplifier l'expérience de vos clients publics : 

      <Button href="https://form.typeform.com/to/OJ4rkf5Z">Demander à être référencé</Button>

      Pour toute autre demande, consultez notre page <External href="https://particulier.api.gouv.fr/faq">FAQ & contact</External>.
      
rate_limiting_resume: 20 appels / seconde / jeton # 📍 Volumétrie maximale de votre API.
rate_limiting_description: |
   L'API est disponible à hauteur de 20 appels par secondes et par jeton d'accès.
# Phrase descriptive de la volumétrie
doc_tech_link: https://particulier.api.gouv.fr/api/open-api.yml # 📍 URL qui donne accès au swagger de votre API, sur la page API.gouv suivante : https://api.gouv.fr/documentation, accessible depuis le bouton "Tester l'API" sur la fiche de l'API. Pour en savoir plus, consulter le read.me.
doc_tech_external: https://particulier.api.gouv.fr/developpeurs/openapi#tag/Complementaire-sante-solidaire/paths/~1api~1v2~1complementaire-sante-solidaire/get # 📍 URL vers la documentation technique de l'API
monitoring_link: https://status.particulier.api.gouv.fr/ 
stats_detail_resume: Les statistiques sont disponibles sur 2 mois
stats_detail_description: | 
  Accédez au suivi des consommations de l'API
stats_detail_link: https://particulier.api.gouv.fr/stats
uptime: 98.011
themes: 
- Administration
- Administration & législation
- Particulier
- Santé
- Transport
keywords: 
  - particulier
  - complementaire
  - sante
  - solidaire
  - C2S
  - assuré
  - assurance maladie
  - mutuelle
last_update: 15/12/2023 
content_intro: |
  L'<External href="https://particulier.api.gouv.fr/catalogue/cnaf_msa/complementaire_sante_solidaire">API Complémentaire santé solidaire</External> permet de savoir si un particulier est bénéficiaire de la complémentaire santé solidaire (C2S). Elle fait partie du bouquet <External href="https://particulier.api.gouv.fr/catalogue">API Particulier</External>.

  <Button href="https://particulier.api.gouv.fr/catalogue/cnaf_msa/complementaire_sante_solidaire">Consulter la documentation</Button>

---


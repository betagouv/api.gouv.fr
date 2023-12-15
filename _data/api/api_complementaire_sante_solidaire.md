---
title: API Complémentaire santé solidaire # 📍 Nom commercial de l'API, privilégier un nom court.
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
      - Un étudiant
    is_eligible: -1
    description: |
      Vous ne pouvez pas accèder a ces informations.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Une administration
    is_eligible: 1
    description: |

      <NextSteps />
      <QuestionTree tree='is_bouquet_api_parteprise' question='statutEtudiant' />
  - who:
      - Une entreprise
    is_eligible: 0
    description: |
      Vous pouvez accéder à l’API uniquement si vous êtes [partenaire de France Connect](https://franceconnect.gouv.fr/partenaires), et pour un cas d’usage autorisé par la loi. Vous devrez fournir le cadre juridique qui vous autorise à utiliser ces données.

      <NextSteps />
      <Button href="https://datapass.api.gouv.fr/api-statut-etudiant">Remplir une demande</Button>
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
  L'<External href="https://particulier.api.gouv.fr/catalogue/cnaf_msa/complementaire_sante_solidaire">API Complémentaire santé solidaire</External> permet de savoir si un particulier est bénéficiaire de la complémentaire santé solidaire (C2S). Elle fait partie du bouquet <External href="https://particulier.api.gouv.fr/catalogue/cnaf_msa/complementaire_sante_solidaire">API Particulier</External>.

  <Button href="https://particulier.api.gouv.fr/catalogue/cnaf_msa/complementaire_sante_solidaire">Consulter la documentation</Button>

---


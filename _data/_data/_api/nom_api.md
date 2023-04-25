---title: Ma Super API  # nom commercial de l'API
tagline: Mission de l'API  # une phrase maximum
owner: Direction interministérielle du numérique  # producteur de l'API
owner_acronym: DINUM  # acronyme du producteur
logo: logo.svg  # Nom du fichier de votre logo à placer dans le dossier /images/api-logo
is_open: 1 # 1 si l'API est ouverte à tous et sans condition, 0 si un compte est nécessaire, -1 si elle nécessite une habilitation
account_link: https://ma-super-api.fr/register  # URL d'une page de création de compte si l'APi requiert un compte
access_page: # le detail des conditions d'accès si l'APi requiert une habilitation. Dans ce cas, contactez l'équipe apigouv : contact@api.gouv.fr
rate_limiting_resume: 10 appels / seconde / IP
rate_limiting_description: |
  <p>L'API est disponible à hauteur de 10 appels par seconde et par adresse IP.</p>
monitoring_link: https://status.ma-super-api.fr  # URL d'une page qui affiche le statut
monitoring_description: |
        <p>La DINUM s’engage à ce que le Service soit accessible à 95% et la DINUM s’engage à améliorer progressivement ce rendement.</p>
stat:
  url: https://ma-super-api.fr/stats  # adresse à laquelle un nombre d'appels à l'API est publié, en content-type application/json
  label: Appels  # description d'un appel à l'API
  lastXdays: 30  # nombre de jours sur lequel les appels à l'API sont comptabilisés
partners:  # liste de co-producteurs de l'API
  - fournisseur local  # texte libre
keywords: # utilisé dans la recherche
  - adresse  # texte libre
  - SIRET
themes: # un ou plusieurs des themes ci-dessous
  - Administration & législation
  - Particulier
  - Environnement
  - Emploi
  - Géographie
  - Education
  - Entreprise
  - Transport
contact_link: contact@ma-super-api.fr #moyen de contact, soit un mail, soit un lien vers formulaire de contact
doc_tech_link: https://ma-super-api.fr/spec.yaml # URL de la documentation au format OpenAPI <https://github.com/OAI/OpenAPI-Specification>
doc_tech_external: # URL de la documentation si celle-ci n'est pas au format OpenAPI
---

### Description de l'API

Texte libre au format [Markdown](http://ricostacruz.com/cheatsheets/markdown.html).

### A quoi sert l'API

Exemple d'utilisation de l'API

### Données accessibles dans l'API

Exemple de données accessibles

### Rappel

Ne pas utiliser le premier niveau de titre `h1` car il est réservé.

- [ ] Modifier le nom du fichier `nom_api.md` dans le champ ci-dessus.
- [ ] Créer une nouvelle branche pour l'ajout de ce fichier, et la nommer du même nom que le fichier `nom_api`.
- [ ] Ouvrir une pull request pour valider l'intégration.
- [ ] Effacer ce texte une fois que vous l'avez lu

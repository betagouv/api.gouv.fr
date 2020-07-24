---title: API Diffusion Données Locales Insee  # nom commercial de l'API
tagline: Accéder aux données localisées à la commune, diffusées sur insee.fr  # une phrase maximum
owner: Institut national de la statistique et des études économiques   # producteur de l'API
owner_acronym: Insee  # acronyme du producteur
logo: logo.svg  # Nom du fichier de votre logo à placer dans le dossier /images/api-logo
is_open: true # True si l'API est ouverte à tous et sans condition
access_condition: OUVERT sous contrat
access_description: # plus d'informations concernant l'accès à l'API
access_link: https://api.insee.fr/catalogue/site/themes/wso2/subthemes/insee/pages/sign-up.jag  # URL d'une page de demande d'accès si l'API est à accès restreint
clients:  # types d'entités habilitées à utiliser l'API
  - particuliers  # texte libre en minuscules
  - entreprises  # ajoutez ou supprimez des types d'entités
  - collectivités
  - ministères
rate_limiting_resume: 30 appels / minute / IP
rate_limiting_description: |
  <p>L'API est disponible à hauteur de 30 appels par minute et par adresse IP.</p>
monitoring_link:  # URL d'une page qui affiche le statut
monitoring_description: |
        <p>L'Insee s'engage à une obligation de moyens pour maintenir la disponibilité du service 99,5 % du temps mensuel, apprécié au terme de chaque mois. </p>
stat:
  url:   # adresse à laquelle un nombre d'appels à l'API est publié, en content-type application/json
  label:   # description d'un appel à l'API
  lastXdays:  # nombre de jours sur lequel les appels à l'API sont comptabilisés
partners:  # liste de co-producteurs de l'API
  -  # texte libre
keywords: # utilisé dans la recherche
  - données locales  # texte libre
  - statistiques
  - territoires
themes: # un ou plusieurs des themes ci-dessous
  - Statistiques
  - Territoires
contact_link: https://api.insee.fr/catalogue/site/themes/wso2/subthemes/insee/pages/help.jag#contact #moyen de contact, soit un mail, soit un lien vers formulaire de contact
doc_tech_link: https://api.insee.fr/catalogue/site/themes/wso2/subthemes/insee/pages/item-info.jag?name=DonneesLocales&version=V0.1&provider=insee # URL de la documentation au format OpenAPI <https://github.com/OAI/OpenAPI-Specification>
doc_tech_external: # URL de la documentation si celle-ci n'est pas au format OpenAPI
---

## Description de l'API

L’API ‘Données locales’ permet d’accéder aux données localisées à la commune, diffusées sur insee.fr dans la rubrique 'chiffres détaillés' (ou ‘chiffres clés’ pour les populations légales), sous forme de cubes prédéfinis.
Les cubes prédéfinis sont ceux utilisés pour l’élaboration des tableaux et graphiques en ligne, correspondant aux sources suivantes : recensement de la population, état civil, répertoire des entreprises et des établissements, fichier localisé social et fiscal et offre d’hébergement touristique.

Les statistiques sont disponibles pour tous les zonages géographiques allant de la commune à la France entière, c’est-à-dire pour les zonages administratifs (communes, arrondissements municipaux, arrondissements, intercommunalités/EPCI, départements, régions et France), ainsi que pour les zonages d’étude (zones d'emploi, aires urbaines, unités urbaines).

La recherche s’effectue à partir d’une source, d’un croisement de variables et d’un code géographique.

La consultation des résultats du recensement de la population (RP) étant destinée à un large public, la diffusion de certains tableaux est restreinte pour en garantir une interprétation de qualité. Ainsi la même finesse de croisement n’est pas disponible pour toutes les zones géographiques. Le détail des restrictions est précisé dans la documentation du recensement (cf. groupes de diffusion).
Exemple : certains tableaux ne sont élaborés que pour les zones géographiques de plus de 2000 habitants. 


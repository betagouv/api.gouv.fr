---
title: API Evénements France Travail
tagline: "Retrouvez en un coup d’oeil tous les évènements liés à l’emploi sélectionnés par France Travail : formations, forums, job dating et autres temps forts de l’emploi."
producer: france-travail
category: Public
is_open: 0 # -1 means API not open
account_link: https://francetravail.io/inscription
external_site: https://francetravail.io/data/api
partners:
  - France Travail
keywords:
  - Offres
  - Emploi
contact_link: support@pole-emploi.io
doc_tech_external: https://francetravail.io/data/api/evenements-pole-emploi?tabgroup-api=documentation&doc-section=api-doc-section-rechercher-les-salons-en-ligne-en-cours-et-%C3%A0-venir
themes:
  - Emploi
visits_2019: 1000
last_update: 28/11/2022
---

L'API Evènements France Travail permet de lister les formations, les forums, les jobs dating et tous les évènements sélectionnés ou proposés par France Travail.

## Exemples de données disponibles dans l'API

| Code                  | Format  | Description                                                                                                                                                                      |   |
|-----------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---|
| titre                 | String  | Titre de l’évènement                                                                                                                                                             |   |
| dateDebut             | Date    | Date de début de l’évènement                                                                                                                                                     |   |
| dateFin               | Date    | Date de fin de l’évènement                                                                                                                                                       |   |
| dateDebutCandidature  | Date    | Date de début de candidature de l’évènement                                                                                                                                      |   |
| dateFinCandidature    | Date    | Date de fin de candidature de l’évènement                                                                                                                                        |   |
| description           | String  | Description de l’évènement Le contenu de ce champ est au format HTML et peut contenir des éléments de type images ou liens.                                                      |   |
| localisation          | String  | Information concernant le bassin d'emploi ciblé par le salon (une ville, un département, une agence France Travail, etc.) Cette information est saisie par l'organisateur du salon. |   |
| typeEvenement         | String  | Type de l’évènement                                                                                                                                                              |   |
| organismeOrganisateur | String  | Organisme organisateur de l’évènement                                                                                                                                            |   |
| nombreOffres          | Integer | Nombre d’offres proposées sur le salon                                                                                                                                           |   |
| urlSalonEnLigne       | String  | URL vers la page de détail du salon en ligne                                                                                                                                     |   |
| salonEnCours          | Booléen | Indique si le salon est en cours ou à venir                                                                                                                                      |   |

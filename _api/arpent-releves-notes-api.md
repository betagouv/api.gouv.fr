---
title: API Relevés de notes
tagline: Simplifier vos démarches et accéder aux relevés de notes des étudiants de l'enseignement agricole.
owner: Ministère de l'Agricultre et de l'Alimentation
category: confidential
contract: OUVERT sous contrat
logo: maa.png
openapi_definition: https://ensagri.agriculture.gouv.fr/arpent-resultats-api/v2/api-docs?group=arpent-resultats
contact:  arpent-resultat.sg@agriculture.gouv.fr
doc_tech: https://ensagri.agriculture.gouv.fr/arpent-resultats-api/swagger-ui.html
access_link: mailto:arpent-resultat.sg@agriculture.gouv.fr
clients:
  - établissements scolaires
  - collectivités
  - ministères
keywords:
  - Relevés de notes
  - Notes
  - Examens
  - Enseignement agricole
  - Arpent
  - Résultats aux examens
  - ExamAgri
  - Etudiant
  - Candidat
  - Bac
  - BEP
  - CAP
  - BTS
  - Diplôme
---

### Pourquoi ?

Vous avez créé un téléservice d'inscription à votre établissement scolaire ? Cette API est faite pour vous !

Simplifiez les démarches administratives de vos candidats en leur permettant de récupérer leur relevé de notes en 1 clic : 
- Via leur token FranceConnect
- Via leurs identifiants Enseignement Agricole

ARPENT(résultats) vous transmettra un relevé de notes signé par le ministère en charge de l'agriculture.

### Loi CNIL

L'API Relevés de notes exposant des données à caractère personnel, le ministère en charge de l'agriculture attire votre attention sur les obligations légales qui en découlent. Le traitement de ces données relève des obligations de déclaration de la Loi 78-17 du 6 janvier 1978 modifiée, dîte Loi CNIL : [https://www.cnil.fr/fr/loi-78-17-du-6-janvier-1978-modifiee](https://www.cnil.fr/fr/loi-78-17-du-6-janvier-1978-modifiee)

### Aller à l'essentiel... 

Nous avons choisi d'exposer toutes les ressources utilisées par le service : [https://ensagri.agriculture.gouv.fr/arpent-resultats/](https://ensagri.agriculture.gouv.fr/arpent-resultats/)

Voici les ressources principales qui exposent les relevés de notes des candidats de l'enseignement agricole : 
- Relevé de notes via une identification Enseignement Agricole : 
```sh 
curl -X POST --header 'Content-Type: application/json' \
    --header 'Accept: application/json' \
    -d '{"ina": "12345678","numGestion": "0000000000X"}'\
    'https://ensagri.agriculture.gouv.fr/arpent-resultats-api/api/arpent-resultats/audit-notes/credentials'
```
- Relevé de notes via un token FranceConnect : disponible dès septembre 2017

### Besoin d'aller plus loin ?

N'hésitez pas à consulter le code source d'ARPENT(résultats) qui implémente cette API : [https://github.com/AGRILAB/arpent-resultats](https://github.com/AGRILAB/arpent-resultats)

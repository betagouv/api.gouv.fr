---
title: Comment utiliser l'API Service National ?
tagline: Vous êtes un service de ressources humaines d'une administration et souhaitez simplifier les recrutements de vos agents ? Vous êtes en charge des inscriptions pour un concours ou un examen ? Simplifiez vos démarches grâce à l'API Service National
tags: service national, cas usage, démarche, inscription, permis conduire, examen, concours, armée, japd
image: snat.png
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
api:
  - API Service National
---

## Qu'est-ce que l'API Service National ?

Pour plusieurs démarches, **il est nécessaire de vérifier que les candidats sont en règle vis à vis de leurs obligations de service national.** Il peut s’agir :

- d’une inscription à un examen ou un concours,
- d’un recrutement dans la fonction publique,
- de l’examen du permis de conduire.

L’API Service National, permet de savoir si une personne est en règle vis à vis de cette obligation à partir de son état civil.

## Simplifier les inscriptions aux concours et examens, ainsi que les recrutements de la fonction publique

Si votre organisation est éligible - car elle peut légalement demander d’être en règle vis à vis du service national - vous pouvez faire une demande d’accès à l’API.

Le Ministère des Armées vérifiera la légitimité de votre demande, et si l’accès à l’API vous est accordé, vous pourrez l’utiliser pour simplifier vos démarches de cette manière :

1. L’usagere ou l’usager se rend sur votre site (pour s’inscrire à un examen par exemple) ;
2. Elle ou il renseigne son nom, prénom(s), date et lieu de naissance ;
3. L’API Service National est appelée, et renseigne le statut (OK / KO / personne non trouvée) ;
4. Si le statut est OK, la personne peut poursuivre la démarche sans qu’il y ait besoin de fournir de justificatif de service national.
5. Vous obtenez une donnée certifiée à la source, et vous n’avez pas besoin de vérifier de justificatif.

## Pour quelles démarches peut-on utiliser l’API Service National ?

<details>
   <summary>**Inscription pour un concours soumis au contrôle de l'autorité publique**</summary>

### Possibilité d'utiliser l'API : ✅

### Cadre juridique :

Conformément aux dispositions de l’article L114-6  du code du service national, les personnes de moins de 25 ans assujetties à l'obligation de participer à la journée défense et citoyenneté doivent être en règle pour être autorisées à s'inscrire aux examens et concours soumis au contrôle de l'autorité publique.

Par conséquent, dans le cadre de cette vérification, si vous êtes un service chargé de l'inscription à un examen ou un concours soumis au contrôle de l'autorité publique, pouvez faire une demande d'accès à l'API.

<Button href="https://datapass.api.gouv.fr/api-service-national?demarche=inscription-examens">Demander un accès à l'API Service National</Button>

</details>
<br />
<details>
   <summary>**Inscription pour un examen soumis au contrôle de l'autorité publique**</summary>

### Possibilité d'utiliser l'API : ✅

### Cadre juridique :

Conformément aux dispositions de l’article L114-6  du code du service national, les personnes de moins de 25 ans assujetties à l'obligation de participer à la journée défense et citoyenneté doivent être en règle pour être autorisées à s'inscrire aux examens et concours soumis au contrôle de l'autorité publique.

Par conséquent, dans le cadre de cette vérification, si vous êtes un service chargé de l'inscription à un examen ou un concours soumis au contrôle de l'autorité publique, pouvez faire une demande d'accès à l'API.

<Button href="https://datapass.api.gouv.fr/api-service-national?demarche=inscription-examens">Demander un accès à l'API Service National</Button>

</details>

<br />

<details>
   <summary>**Recrutement pour un emploi de la fonction pubique qui demande d’être en règle vis à vis du service national**</summary>

### Possibilité d'utiliser l'API : ✅

### Cadre juridique :

Conformément aux dispositions de l’article L111-3  du code du service national, nul ne peut être investi de fonctions publiques s'il ne justifie avoir satisfait aux obligations imposées par ce code.

Par conséquent, les services de ressources humaines ou de recrutement chargés, en application de dispositions statutaires, de vérifier la situation des personnes de moins de 25 ans au regard des obligations de service national, sont autorisés à faire une demande d'accès à l'API :

<Button href="https://datapass.api.gouv.fr/api-service-national?demarche=status-service-national">Demander un accès à l'API Service National</Button>

</details>

<br />

<details>
   <summary>**Inscription à l’examen du permis de conduire**</summary>

### Possibilité d'utiliser l'API : 
⏳ utilisation possible mi-2022

<Button href="mailto:dsnj-api.contact.fct@intradef.gouv.frl">Contacter le ministère pour en savoir plus</Button>

</details>

<br />

<details>
   <summary>**Inscription à des examens non soumis au contrôle de l'autorité publique **</summary>

### Possibilité d'utiliser l'API : ❌
Vous ne pouvez pas utiliser cette API.

</details>

<br />

<details>
   <summary>**Recrutement pour le secteur privé**</summary>

### Possibilité d'utiliser l'API : ❌
Vous ne pouvez pas utiliser cette API.

</details>
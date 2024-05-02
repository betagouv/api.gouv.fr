---
title: API Déclaration préalable à l'embauche
tagline: Transmettez facilement des dépots de déclaration et obtenez les accusés de réception de la DPAE.
external_site: https://open.urssaf.fr/explore/?sort=modified
producer: urssaf
is_open: -1 # 1 means API is fully open
access_page:
  - who:
      - Déclarant direct
    is_eligible: -1
    description: |
      Il ne vous est pas nécessaire de souscrire : vous avez déjà accès à l’API en utilisant vos identifiants Urssaf il vous suffit ainsi de [consulter la documentation pour utiliser l’API](https://www.dpae-edi.urssaf.fr/5492-API-DPAE-Guide-Implementation.pdf)
  - who:
      - Concentrateur
    is_eligible: 0
    description: |
      Pour remplir votre demande, vous aurez uniquement besoin de créer un compte api.gouv.
       <Button href="mailto:api-dpae@acoss.fr?subject=Demande d'accès à l'API DPAE&body=Indiquez ici votre nom, prénom et le nom de votre organisation.">Remplir une demande</Button>
  - who:
      - Un particulier
      - Autres activités
    is_eligible: -1
    description: |
      Vous n'êtes pas autorisé à accéder à ces données.

      <Button href="/rechercher-api">Revenir à la recherche</Button>
contact_link: api-dpae@acoss.fr
useSwaggerProxy: true
doc_tech_link: https://portailapi.urssaf.fr/index.php?option=com_apiportal&view=definition&managerId=1&menuId=181&format=raw&stateReturn=L2ZyLz9JdGVtaWQ9MTgxJmFwaUlkPTRmMWM2ZWVhLTZiZTEtNDMxYy1hYjE3LTk0ZWE5MzdjOWQwYyZhcGlOYW1lPUFQSSUyMERQQUUmYXBpVmVyc2lvbj0xLjAuMCZhcGl0YWI9dGVzdHMmbWFuYWdlcklkPTEmbWVudUlkPTE4MSZvcHRpb249Y29tX2FwaXBvcnRhbCZyZW5kZXJUb29sPTImdHlwZT1yZXN0JnVzYWdlPWFwaSZ2aWV3PWFwaXRlc3Rlcg==&path=%2Fdiscovery%2Fswagger%2Fapi%2Fid%2F4f1c6eea-6be1-431c-ab17-94ea937c9d0c%3FswaggerVersion%3D2.0%26filename%3DAPI%2520DPAE.json%26extensions%3Dfalse
doc_tech_external: https://www.dpae-edi.urssaf.fr/5492-API-DPAE-Guide-Implementation.pdf
keywords:
  - Urssaf
  - Acoss
  - Embauche
  - Employeur
  - Déclaration
  - DPAE
  - déclarant
  - accusé
  - conformité
  - DSN
  - certificat
  - déclarer
themes:
  - Entreprise
last_update: 11/05/2022
---

L’Urssaf met à disposition une nouvelle offre de service pour la déclaration préalable à l’embauche : L’API DPAE.

### A quoi sert l’API déclaration préalable à l'embauche (DPAE) ?

Cette interface permet au logiciel producteur de DPAE de s’authentifier directement sur le point de dépôt Urssaf des DPAE et de transmettre de très grand nombre de dépôt de déclarations avec en retour des accusés d’enregistrement électronique, des certificats de conformité et le compte rendu métier : l’accusé de réception de la DPAE.

Cette offre DPAE converge vers celle de la DSN, ce qui facilite la mise en œuvre dans le logiciel de production des DPAE pour les éditeurs qui proposent l’API DSN.

### Qu'est-ce que la déclaration préalable à l'embauche ?

La déclaration préalable à l’embauche (DPAE) est une mesure de simplification des obligations déclaratives de l’employeur.

Elle est systématique pour chaque salarié qui est amené à être embauché, et doit être effectuée dans les 8 jours qui précèdent toute embauche.

Elle permet d'obtenir un moyen de preuve de la date réelle de l’embauche auprès des services de contrôle.
---
title: API Déclaration préalable à l'embauche
tagline: Transmettez facilement des dépots de déclaration et obtenez les accusés de réception de la DPAE.
external_site: https://open.urssaf.fr/explore/?sort=modified
producer: urssaf
is_open: -1 # 1 means API is fully open
access_page:
  - who:
      - Un editeur d’application mobile
      - Un editeur de services web
    is_eligible: 0
    description: |
      Si vous êtes éditeur appli mobile / éditeur de service web et agissez ou comptez agir pour le compte de vos clients en qualité de tiers déclarant, vous pouvez remplir une demande d’accès à l’API vous-même pour l'entité que vous représentez, au sens des articles L.133-11, <External href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037877089">R133-43 et R133-44</External> du Code de Sécurité sociale.

      Pour remplir votre demande, vous aurez uniquement besoin de :

      - Créer un compte api.gouv pour accéder au formulaire DataPass ;
      - Attestation fiscale.

      <Button href="https://datapass.api.gouv.fr/api-declaration-cesu">Remplir une demande</Button>
  - who:
      - Un mandataire de service à la personne
    is_eligible: 0
    description: |
      Pour remplir votre demande, vous aurez uniquement besoin de :

       - Créer un compte api.gouv pour accéder au formulaire DataPass ;
       - Attestation fiscale.
       <Button href="https://datapass.api.gouv.fr/api-declaration-cesu">Remplir une demande</Button>
  - who:
      - Un editeur de logiciel de paie
      - Autres activités
    is_eligible: -1
    description: |
      Vous n'êtes pas autorisé à accéder à ces données.

      <Button href="/rechercher-api">Revenir à la recherche</Button>
contact_link: contact.tiercedeclaration@urssaf.fr
#doc_tech_link: https://portailapi.urssaf.fr/index.php?option=com_apiportal&view=definition&managerId=1&menuId=181&format=raw&stateReturn=L2ZyLz9JdGVtaWQ9MTgxJmFwaUlkPTA1Zjk1MjFmLTI1YWMtNGU0OC04ZjkzLTQ0N2E2NmJmNGFhMCZhcGlOYW1lPUFQSSUyMFRpZXJjZSUyMERlY2xhcmF0aW9uJTIwQ0VTVSZhcGlWZXJzaW9uPTEuMC4wJmFwaXRhYj10ZXN0cyZtYW5hZ2VySWQ9MSZtZW51SWQ9MTgxJm9wdGlvbj1jb21fYXBpcG9ydGFsJnJlbmRlclRvb2w9MiZ0eXBlPXJlc3QmdXNhZ2U9YXBpJnZpZXc9YXBpdGVzdGVy&path=%2Fdiscovery%2Fswagger%2Fapi%2Fid%2F05f9521f-25ac-4e48-8f93-447a66bf4aa0%3FswaggerVersion%3D2.0%26filename%3DAPI%2520Tierce%2520Declaration%2520CESU.json%26extensions%3Dfalse
useSwaggerProxy: true
doc_tech_external: https://www.dpae-edi.urssaf.fr/
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
themes:
  - Entreprise
last_update: 02/12/2021
---

L’Urssaf met à disposition une nouvelle offre de service pour la déclaration préalable à l’embauche : L’API DPAE.

### A quoi sert l’API déclaration préalable à l'embauche (DPAE) ?

Cette interface permet au logiciel producteur de DPAE de s’authentifier directement sur le point de dépôt Urssaf des DPAE et de transmettre de très grand nombre de dépôt de déclarations avec en retour des accusés d’enregistrement électronique, des certificats de conformité et le compte rendu métier : l’accusé de réception de la DPAE.

Cette offre DPAE converge vers celle de la DSN, ce qui facilite la mise en œuvre dans le logiciel de production des DPAE pour les éditeurs qui proposent l’API DSN.

### Qu'est-ce que la déclaration préalable à l'embauche ?

La déclaration préalable à l’embauche (DPAE) est une mesure de simplification des obligations déclaratives de l’employeur.

Elle est systématique pour chaque salarié qui est amené à être embauché, et doit être effectuée dans les 8 jours qui précèdent toute embauche.

Elle permet d'obtenir un moyen de preuve de la date réelle de l’embauche auprès des services de contrôle.
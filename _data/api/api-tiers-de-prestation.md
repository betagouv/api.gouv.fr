---
title: API Tiers de prestation
tagline: Faites bénéficier les particuliers du crédit d'impôt en tant que tiers de prestation (service à la personne).
external_site: https://open.urssaf.fr/explore/?sort=modified
producer: urssaf
is_open: -1 # 1 means API is fully open
#datapass_link: 
access_page:
  - who:
      - Un editeur de logiciel de service à la personne
      - Un editeur de services web
    is_eligible: -1
    description: |
      Si vous êtes éditeur de logiciel services à la personne /éditeur de service web et agissez ou comptez agir pour le compte de vos clients en qualité de responsable technique, c’est votre client qui doit  remplir une demande d’accès à l’API en vous indiquant comme référent technique.

      <Button href="/rechercher-api">Revenir à la recherche</Button>
  - who:
      - Un prestataire de service à la personne
    is_eligible: 0
    description: |
      Si vous êtes prestataire de services à la personne, vous pouvez remplir une demande d’accès à l’API. 
      
      Le mode prestataire implique que le particulier achète une prestation auprès de vous qui lui sera facturée. Vous êtes alors l’employeur de l’intervenant qui effectue la prestation au domicile du particulier

      <Button href="https://datapass.api.gouv.fr/api-tiers-de-prestation">Remplir une demande</Button>
  - who:
      - Un mandataire de service à la personne
    is_eligible: 0
    description: |
      Si vous êtes mandataire de services à la personne en tant que mandataire complet, vous pouvez remplir une demande d’accès à l’API.
      
      Le mode mandataire complet implique que le particulier vous confie, contre rémunération, un certain nombre de tâches par contrat de mandat : recherche de candidatures, recrutement et embauche, calcul et établissement des bulletins de paie etc. et l’émission de votre part d’une facture à régler par le particulier. Le particulier est alors l’employeur de l’intervenant qui intervient à son domicile et vous procédez pour le compte du particulier au versement des cotisations et contributions sociales dues au titre de l'emploi du salarié concerné auprès de la branche recouvrement.

      <Button href="https://datapass.api.gouv.fr/api-tiers-de-prestation">Remplir une demande</Button>
  - who:
      - Autre activité
    is_eligible: -1
    description: |
      Si vous êtes prestataire de services à la personne, vous pouvez remplir une demande d’accès à l’API. 
      
      Le mode prestataire implique que le particulier achète une prestation auprès de vous qui lui sera facturée. Vous êtes alors l’employeur de l’intervenant qui effectue la prestation au domicile du particulier

      <Button href="/rechercher-api">Revenir à la recherche</Button> 
contact_link: contact.api@urssaf.fr
doc_tech_link: /swaggers/api-tiers-de-prestation.json
doc_tech_external: https://portailapi.urssaf.fr/fr/
keywords:
  - Urssaf
  - Acoss
  - service à la personne
  - tiers
  - déclarant
  - impôts
  - exonération
  - crédit d'impôt
  - prestataire
  - mandataire
themes:
  - Entreprise
last_update: 12/08/2021
---

L’API Tiers de prestation permet pour le compte d’un particulier et en qualité de tiers de prestation (prestataire ou mandataire de services à la personne) de transmettre à l’Urssaf la facturation de ce particulier afin qu’il bénéficie de l’avance immédiate de crédit d’impôt SAP après avoir inscrit celui-ci auprès de l’Urssaf en tant que client.

### A quoi sert l’API Tiers de prestation ?

L’inscription du particulier auprès de l’Urssaf est un préalable au bénéfice de l’avance immédiate de crédit d’impôt pour celui-ci. Le Tiers de prestation transmet les informations d’identité du particulier par API et se voit retourner un identifiant technique si l’inscription est confirmée. 

Le particulier doit être reconnu par le l’administration fiscale et disposer d’une période taxée (il doit déjà avoir réalisé au moins une déclaration de revenus auprès de l’administration fiscale au moment de l’inscription) pour avoir le droit à accéder à l’offre.

Après activation de son compte en ligne par le particulier, le Tiers de prestation peut transmettre la facturation au dispositif. La facturation du particulier est transmise sous forme d’une Demande de paiement, reprenant les prestations à régler par le particulier client du Tiers de prestation pour une période d’emploi ne pouvant excéder un mois calendaire.

Un Tiers de prestation peut ainsi par le biais de l’API :

- Inscrire un particulier
- Transmettre des Demandes de paiement à l’Urssaf ;
- Obtenir le statut sur les demandes de paiement transmises.

### Données disponibles

**Concernant l'appel de création d'une demande de paiement :**

| Champ             | Description                                                                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| idClient          | Identifiant du client du tiers de prestation                                                                                         |
| idDemandePaiement | Identifiant de la demande de paiement                                                                                                |
| numFactureTiers   | Numéro de la facture statut Statut de la demande de paiement                                                                         |
| Statut            | Statut de la demande de paiement                                                                                                     |

**Concernant l'appel de recherche d'une demande de paiement :**

| Champ             | Description                                                                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| idDemandePaiement | Identifiant de la demande de paiement                                                                                                |
| demandePaiement   | Informations sur la demande de paiement (montant, acompte, ...)                                                                      |
| Statut            | Statut de la demande de paiement                                                                                                     |
| infoRejet         | Dans le cadre d'un rejet, les informations complémentaires sur le rejet                                                              |
| infoVirement      | Contient des informations complémentaires sur le virement lors que cela est disponible                                               |

---
title: API Tiers de prestation
tagline: Faites bénéficier les particuliers du crédit d'impôt en tant que tiers de prestation (service à la personne).
external_site: https://open.urssaf.fr/explore/?sort=modified
producer: urssaf
is_open: -1 # 1 means API is fully open
#datapass_link: 
access_page:
  - who:
      - Un editeur d’application mobile
      - Un editeur de services web
    is_eligible: 0
    description: |
      Si vous êtes éditeur appli mobile / éditeur de service web et agissez ou comptez agir pour le compte de vos clients en qualité de tiers déclarant, vous pouvez remplir une demande d’accès à l’API vous-même pour l'entité que vous représentez, au sens des articles L.133-11, <External href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037877089">R133-43 et R133-44</External> du Code de Sécurité sociale.

      <Button href="https://datapass.api.gouv.fr/api-tiers-de-prestation">Remplir une demande</Button>
  - who:
      - Un editeur de logiciel de paie
      - Autres activités
    is_eligible: -1
    description: |
      Vous n'êtes pas autorisé à accéder à ces données.

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

L’API Tiers de prestation permet pour le compte d’un particulier et en qualité de tiers de prestation (prestataire ou mandataire de services à la personne) de transmettre à l’Urssaf la facturation de ce particulier afin qu’il bénéficie de l’avance immédiate de crédit d’impôt SAP.

### A quoi sert l’API Tierce Déclaration auto-entrepreneur ?

La facturation du particulier est transmise sous forme d’une Demande de paiement, reprenant les prestations à régler par le particulier client du Tiers de prestation pour une période d’emploi ne pouvant excéder un mois calendaire.

Un Tiers de prestation peut ainsi par le biais de l’API : 

- Transmettre des Demandes de paiement à l’Urssaf ;
- Obtenir le statut sur les demandes de paiement transmises.

Une Demande de paiement est émise pour un particulier unique, correspond à un numéro de facture unique et se décompose en article de prestation facturés (forfaitaire ou nombre d’heure et prix). Il est possible d’indiquer dans une Demande de paiement un acompte que le particulier aurait déjà versé au Tiers de prestation. Cet acompte ne doit pas dépasser 50% du montant facturé par la Demande de paiement.

Sur réception d’une Demande de paiement pour le particulier, l’Urssaf informe le particulier et calcule son droit à l’avance immédiate de Crédit d’impôt. Le particulier est prélevé uniquement de son reste à charge sur la Demande de paiement après application de l’avance immédiate de crédit d’impôt. Le Tiers de prestation reçoit le paiement pour la totalité de la Demande de paiement, acompte déduit.

### Données disponibles

**Concernant l'appel de création d'une demande de paiement :**

| Champ             | Description                                                                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| idClient          | Identifiant du client du tiers de prestation                                                                                         |
| idDemandePaiement | Identifiant de la demande de paiement                                                                                                |
| numFactureTiers   | Numéro de la facture statut Statut de a demande de paiement                                                                          |

**Concernant l'appel de recherche d'une demande de paiement :**

| Champ             | Description                                                                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| idDemandePaiement | Identifiant de la demande de paiement                                                                                                |
| demandePaiement   | Informations sur la demande de paiement (montant, acompte, ...)                                                                      |
| infoRejet         | Dans le cadre d'un rejet, les informations complémentaires sur le rejet                                                              |
| infoVirement      | Contient des informations complémentaires sur le virement lors que cela est disponible                                               |

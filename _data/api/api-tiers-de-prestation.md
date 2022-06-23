---
title: API Tiers de prestation
tagline: Transmettez directement les factures de service à la personne à l’Urssaf pour que vos clients bénéficient de l’avance immédiate de crédit d’impôt.
external_site: https://open.urssaf.fr/explore/?sort=modified
producer: urssaf
is_open: -1 # 1 means API is fully open
datapass_link: https://datapass.api.gouv.fr/api-tiers-de-prestation
access_page:
  - who:
      - Un prestataire de service à la personne
    is_eligible: 0
    description: |
      Si vous êtes prestataire de services à la personne, vous pouvez remplir une demande d’habilitation à l’API.
      
      Pour remplir votre demande, vous aurez uniquement besoin de :
      
      - Créer un compte api.gouv pour accéder au formulaire DataPass ;
      - Attestation fiscale ;
      - Coordonnées bancaires (RIB) au format pdf. 

      <Button href="https://datapass.api.gouv.fr/api-tiers-de-prestation">Remplir une demande</Button>

  - who:
      - Un editeur de logiciel de service à la personne
      - Un éditeur de services web
    is_eligible: 0
    description: |
      Si vous êtes éditeur de logiciel services à la personne / éditeur de service web, vous pouvez remplir une demande d'habilitation à l'API.
      
      Vous ne pourrez toutefois recevoir que des accès à l'environnement de test, et non à l'environnement de production.

      <Button href="https://datapass.api.gouv.fr/api-tiers-de-prestation">Remplir une demande</Button>
  - who:
      - Un mandataire de service à la personne
    is_eligible: 0
    description: |
      Si vous êtes mandataire de services à la personne en tant que mandataire complet, vous pouvez remplir une demande d’habilitation à l’API. 
      
      Le mode mandataire complet implique que le particulier vous confie, contre rémunération, un certain nombre de tâches par contrat de mandat : recherche de candidatures, recrutement et embauche, calcul et établissement des bulletins de paie etc. et l’émission de votre part d’une facture à régler par le particulier.
      
      Le particulier est alors l’employeur de l’intervenant qui intervient à son domicile et vous procédez pour le compte du particulier au versement des cotisations et contributions sociales dues au titre de l'emploi du salarié concerné auprès de la branche recouvrement. 
      
      Pour remplir votre demande, vous aurez uniquement besoin de :
      
      - Créer un compte api.gouv pour accéder au formulaire DataPass ;
      - Attestation fiscale ;
      - Coordonnées bancaires (RIB) au format pdf. 

      <Button href="https://datapass.api.gouv.fr/api-tiers-de-prestation">Remplir une demande</Button>

  - who:
      - Autre actvité
    is_eligible: -1
    description: |
      Pour accéder à l’API Tiers de prestation, vous devez être un organisme de service à la personne au sens de l’article de l'article L. 7232-6 du code du travail.

      <Button href="/rechercher-api">Revenir à la recherche</Button>
contact_link: habilitation-api@urssaf.fr
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
hide_pre_footer: true
---

L’API Tiers de prestation facilite les échanges entre l’Urssaf et les prestataires ou mandataires de services à la personne.
Le prestataire peut ainsi :

- Inscrire son client sur la plateforme,
- Transmettre à l’Urssaf la facturation d’un service à la personne afin que son client puisse bénéficier de l’avance immédiate de crédit d’impôt.

### A quoi sert l’API Tiers de prestation ?

Avec cette API, un tiers de prestation peut :

- Inscrire un particulier
- Transmettre des demandes de paiement à l’Urssaf ;
- Obtenir le statut sur les demandes de paiement transmises.

Le Tiers de prestation transmet les informations d’identité du particulier par API et se voit retourner un identifiant technique pour confirmer l’inscription. Le particulier doit être reconnu à partir de l’identité transmise et doit déjà avoir réalisé au moins une déclaration de revenus auprès de l’administration fiscale pour que l’inscription à la plateforme puisse se faire.

Après activation de son compte en ligne par le particulier, le tiers de prestation transmet la facturation sous forme d’une demande de paiement. La facture comprend les prestations à régler par le particulier (client du Tiers de prestation). La période d’emploi ne peut excéder un mois calendaire.

Sur validation de la demande de paiement, le Tiers de prestation reçoit par virement le paiement pour  la prestation de service à la personne facturée et le particulier est prélevé de son reste à charge après application de l’avance immédiate de crédit d’impôt.

### Données disponibles

**Concernant l'appel de création d'une demande de paiement :**

| Champ             | Description                                                                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| idClient          | Identifiant du client du tiers de prestation                                                                                         |
| idDemandePaiement | Identifiant de la demande de paiement                                                                                                |
| numFactureTiers   | Numéro de la facture                                                                          |

**Concernant l'appel de recherche d'une demande de paiement :**

| Champ             | Description                                                                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| idDemandePaiement | Identifiant de la demande de paiement                                                                                                |
| demandePaiement   | Informations sur la demande de paiement (montant, acompte, ...)                                                                      |
| infoRejet         | Dans le cadre d'un rejet, les informations complémentaires sur le rejet                                                              |
| infoVirement      | Contient des informations complémentaires sur le virement lors que cela est disponible                                               |

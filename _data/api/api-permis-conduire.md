---
title: API Rendez-vous du permis de conduire
tagline: Facilitez la portabilité des dossiers de vos élèves en auto-école, et simplifiez leur inscription à l'examen du permis de conduire.
access_page:
  - who:
      - Un particulier
      - Une administration
      - Un candidat à l'examen du permis de conduire
    is_eligible: -1
    description: |
      Vous ne pouvez pas accéder à ces informations.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Une auto-école
    is_eligible: 1
    description: |     
      
is_open: -1
producer: minint
keywords:
  - permis
  - erpc
  - dnum
  - dsr
  - école
  - autoécole
  - auto école
  - examen
  - conduire
  - portabilité
  - intérieur
  - inscription
  - formation
  - conduite
  - titres sécurisés
  - dossier
  - démarche
  - points
  - stage permis
themes:
  - Particulier
rate_limiting_resume: 600 appels / minute pour les AEL (Auto-Ecoles en Ligne)
rate_limiting_description: |
  Actuellement, le nombre d’appels à l’API est limité à 600 appels par minute pour les AEL et 210 appels par minute par employé d'AE
contact_link: support-api-erpc@interieur.gouv.fr
doc_tech_external: https://api.integediteurs.rdv-permis.interieur.gouv.fr/swagger-ui/index.html
visits_2019: 100
last_update: 06/10/2022
---

L’API Rendez-Vous Permis(**RdvPermis**) vise à répondre à la [**mesure 6 de la réforme du permis de conduire**](https://www.gouvernement.fr/10-mesures-pour-un-permis-pour-tous-moins-cher-et-plus-rapide) dont l’ambition est de faciliter l’accès aux places d’examen, en intégrant les **objectifs suivants** :
- Placer le **candidat au cœur du système**;
- **Réguler efficacement** la demande;
- Mettre en place les règles d’**une concurrence loyale** entre les **Auto-Ecoles(AE)**;
- **Responsabiliser le candidat** par la réservation d'examen nominative et l’application des délais de représentation;
- **Rééquilibrer les droits** entre l’**auto-école** et l’**élève**

## Les principales données de l’API RdvPermis sont :

|Type|Données|
|-----|-----|
|auto-écoles|raison sociale, courriel, adresse, liste des formateurs et leurs ETP|
|comptes utilisateurs (employés) d'auto-école|nom, prénom et courriel |
|élèves/candidats|noms, NEPH, catégories de permis, date de naissance, courriel, délais de représentation|

**ainsi que**: 
- Les centres d’examen et inspecteurs anonymisés;
- Les créneaux d’examens;
- La liste des examens de l'AE;
- La liste des formateurs de l'AE

## Quels bénéfices sont attendus ?

✅ des délais maitrisés;

✅ une augmentation des chances de réussite;

✅ une meilleure répartition des examens;

✅ une réduction du taux d'absentéisme;

✅ une interconnexion avec les solutions actuelles des Auto-Ecoles

<Button href="mailto:support-api-erpc@interieur.gouv.fr">Demander un accès à l'équipe du SI ERPC</Button>
<p align="center">Système d'information de l'éducation routière et du permis de conduire</p>



---
title: API Smart Verify
tagline: Vérifier la validité des données d'un titre, document ou d'un objet à partir de son Cachet Electronique Visible (CEV)
producer: ingroupe
is_open: -1
access_page:
  - who:
      - Un particulier
    is_eligible: -1
    description: |
      Vous ne pouvez pas accéder à ces informations.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Une administration
      - Une entreprise
    is_eligible: 1
    description: |
      L’API est accessible gratuitement en accès restreint.
      
      <Button href="https://messervices.ingroupe.com/about">Demander un accès à l'API</Button>
external_site: https://catalogue.numerique.gouv.fr/solutions/smart-verify
keywords:
  - 2D DOC
  - 2D-Doc
  - certification
  - authentification
  - wallet
  - KYC
  - CEV
  - certificat
  - vérifier
  - pass
  - identité
  - carte
  - titre
  - QR code
  - 
  - urgences
contact_link: https://messervices.ingroupe.com/about
doc_tech_external: https://catalogue.numerique.gouv.fr/solutions/smart-verify
themes:
  - Sécurité
  - Administration
last_update: 19/12/2022
visits_2019: 1500
---
L’API Smart Verify permet de vérifier la validité des données d'un titre, document ou d'un objet à partir de son Cachet Electronique Visible (CEV).

## A quoi sert l'API Smart Verify ?

En intégrant l'API dans votre système d'information, vous pouvez notamment :

✅ **Vérifier la validité des données** d'un titre, document ou d'un objet à partir de son Cachet Electronique Visible (CEV : QR Code, 2D Doc...) ou de son numéro de référence.

🛡 **Vérifier l'authenticité des données** par le décodage et vérification de la signature électronique du CEV.

䷨ **Comparer les données d'un titre**, document ou d'un objet par rapport à des bases de données dynamiques et mises à jour en temps réel.

### Quels titres ou documents peuvent être vérifiés avec l'API Smart Verify ?

IN Groupe, partenaire de l'Etat Français propose, à travers le service Smart Verify, le contrôle de différents titres régaliens (ou non) : 

- Pass Sanitaires Européens (au travers de l'application TousAntiCovid Verif), 
- Carte Mobilité Inclusions (CMI), Cartes Taxis, Cartes VTC, Cartes SDIS (Pompiers), 
- Identifiants Vélos,
- Cartes Familles Nombreuses...

### Dans quels outils l'API Smart Verify est-elle disponible ?

L'API Smart Verify est notamment intégrée :

- dans systèmes Cheops (Portail Web)
- Neo (Terminaux Mobiles) des forces de l'ordre françaises.

### Données disponibles

- Données **statiques** : Données encapsulées dans l'image du CEV (Nom, prénom, date de naissance...).
- Données **dynamiques** : Bases de données mises à jour en temps réel (statut du document, motif de révocation, date de fin de validité...).
- Données de **validité** : Résultat d'un calcul issu des données statiques et dynamiques permettant d'indiquer si un document est valide ou non.

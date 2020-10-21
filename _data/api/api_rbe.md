---
title: API Registre des Bénéficiaires Effectifs (RBE)
tagline: Accéder aux registre de toutes les personnes physiques associées ou actionnaires d’une société civile ou commerciale exerçant un contrôle effectif sur ses organes décisionnels.
is_open: -1
account_link: https://data.inpi.fr/register
partners:
producer: inpi
keywords:
  - beneficiaires
  - Effectifs
  - Entreprises
  - sociétés
  - registres
themes:
  - Entreprise
access_page:
  - who:
      - Un particulier
    is_eligible: -1
    description: |
      Seules les administrations sont habilitées à utiliser API Particulier.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Une entreprise
      - Une administration
    is_eligible: 0
    description: |
      Vous pouvez remplir une demande en téléchargeant et complétant [le formulaire de demande d'accès](/).

      Une fois le formulaire complété, soumettez votre demande d'accès à l'API :

      <Button href="mailto:rbe@inpi.fr">Soumettre ma demande</Button>
doc_tech_external: https://data.inpi.fr
contact_link: https://www.inpi.fr/fr/contactez-nous
last_update: 21/10/2020
---

L’API Registre des Bénéficiaires Effectifs (RBE) permet d'interroger les informations de toutes les personnes physiques exerçant un contrôle sur une société.

Il se base sur les déclarations RBE, obligatoires dans le cadre de la <External href='https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000033558528&categorieLien=id'>loi Sapin II du 9 décembre 2016</External> de lutte contre la corruption.

### A quoi sert cette API ?

Cette API permet, à partir d'un SIREN ou de la dénomination sociale d'une entreprise, d'obtenir la déclaration RBE de cette entreprise.

### Qu’est-ce qu’un bénéficiaire effectif ?

Un bénéficiaire effectif est une personne physique exerçant un contrôle sur une société. Les critères sont les suivants :

- Détention de strictement plus de 25% du capital et/ou des droits de vote
- Exercice d’un contrôle sur les organes de direction de la société ou sur l’assemblée générale des associés ou des actionnaires
- A défaut, représentant légal de la société

### Qui doit publier sa déclaration de bénéficiaires effectifs ?

Toutes les personnes morales, immatriculées au [Registre du commerce et des sociétés (RCS)](/les-api/api_inpi) doivent déclarer leurs bénéficiaires effectifs.

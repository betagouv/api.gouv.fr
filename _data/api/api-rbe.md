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
      Les particuliers ne sont pas éligibles a cette API.

      Les personnes éligibles au services sont définies dans les <External href="https://www.legifrance.gouv.fr/codes/id/LEGIARTI000041577735/2020-02-14/">articles L561-2 à L561-4</External> du *Code monétaire et financier* concernant les personnes assujetties aux obligations de lutte contre le blanchiment des capitaux et le financement du terrorisme.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Une entreprise
      - Une administration
    is_eligible: 0
    description: |
      Les personnes éligibles au services sont définies dans les <External href="https://www.legifrance.gouv.fr/codes/id/LEGIARTI000041577735/2020-02-14/">articles L561-2 à L561-4</External> du *Code monétaire et financier* concernant les personnes assujetties aux obligations de lutte contre le blanchiment des capitaux et le financement du terrorisme.

      Si vous faites parties des personnes éligible, vous pouvez remplir une demande en téléchargeant et complétant <External href='/resources/formulaire_rbe.pdf'>le formulaire de demande d'habilitation</External>.
      Une fois le formulaire complété, soumettez votre demande d'habilitation à l'API :

      <Button href="mailto:rbe@inpi.fr">Soumettre ma demande</Button>
doc_tech_external: https://www.inpi.fr/sites/default/files/inpi_doc_tech_rbe_api_fevrier_2020_v1.4.pdf
contact_link: https://www.inpi.fr/fr/contactez-nous
last_update: 21/10/2020
---

L’API Registre des Bénéficiaires Effectifs (RBE) permet d'interroger les informations de toutes les personnes physiques exerçant un contrôle sur une société.

Il se base sur les déclarations RBE, obligatoires dans le cadre de la <External href='https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000033558528&categorieLien=id'>loi Sapin II du 9 décembre 2016</External> de lutte contre la corruption.

### A quoi sert cette API ?

Cette API permet, à partir d'un SIREN ou de la dénomination sociale d'une entreprise, d'obtenir la déclaration RBE de cette entreprise.

### Données accessibles dans l'API

| Nom                         | Description                                             | Documentation                                                                                                         |
| --------------------------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Document RBE (PDF)          | Télécharger la déclaration RBE au format PDF            | <External href="https://www.inpi.fr/sites/default/files/inpi_doc_tech_rbe_api_fevrier_2020_v1.4.pdf">Lien</External>  |
| Donnés des déclarations RBE | Accéder aux données de la déclaration RBE au format XML | <External href="https://www.inpi.fr/sites/default/files/inpi_doc_tech_rbe_xml_api_sept_2020_v1.0.pdf">Lien</External> |

### Qu’est-ce qu’un bénéficiaire effectif ?

Un bénéficiaire effectif est une personne physique exerçant un contrôle sur une société. Les critères sont les suivants :

- Détention de strictement plus de 25% du capital et/ou des droits de vote
- Exercice d’un contrôle sur les organes de direction de la société ou sur l’assemblée générale des associés ou des actionnaires
- A défaut, représentant légal de la société

### Qui doit publier sa déclaration de bénéficiaires effectifs ?

Toutes les personnes morales, immatriculées au [Registre du commerce et des sociétés (RCS)](/les-api/api-rncs) doivent déclarer leurs bénéficiaires effectifs.

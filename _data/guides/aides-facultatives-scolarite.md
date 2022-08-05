---
title: Attribution des aides facultatives à la scolarité
tagline: Simplifiez l'attribution des aides facultatives pour l'équipement des élèves et des étudiants.
tags: cas usage, api particulier, ecole, collège, lycée, université, bourse, boursier, subvention
image: scolarite.jpg
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
related_guides:
api:
  - API Particulier
  - API Statut Etudiant
  - API Statut étudiant boursier
  - API Impôt particulier
---

## Simplifier l’attribution des aides facultatives à la scolarité

Communes, départements, régions ont mis en place des aides sociales pour aider les familles à financer la scolarité des enfants ou des jeunes.

Ces aides facultatives prennent différentes formes : aide financière, fourniture de matériel informatique, bon d’achat pour des livres. Elle sont conditionnées à certains critères sociaux.

Plusieurs API permettent, dans les téléservices (formulaire de demande en ligne) utilisés pour récolter les demandes d’aide, d’éviter aux parents ou aux étudiants d’avoir à justifier de leurs statuts ou de leurs revenus.

**L’usage des ces API permet aussi :**

1. de réaliser des téléservices **complètement dématérialisés sans intervention d’agents,**
2. d’éviter les erreurs de saisie (de l’usager ou du service traitant)
3. d’éviter de stocker des pièces justificatives (seule la donnée est conservée),
4. d’obtenir des données sûres et d’éviter les fraudes.

## Comment simplifier les dispositifs d’aides grâce aux API ?

Pour bénéficier des aides à l’achat de matériel scolaire, les personnes doivent justifier qu’elles y ont droit : conditions de revenu, statut d’étudiant, de boursier, ou d’élève.

Plusieurs sources de données disponibles par API sont proposées afin d’éviter aux étudiants ou aux parents d’avoir à justifier de leurs statuts ou de leurs revenus.

Ces API sont principalement utilisées dans la cadre de services ligne qui peuvent, de ce fait, être **complètement dématérialisés sans intervention d’agents.**

**L’usage des ces API permet aussi :**

1. d’obtenir des données sûres et d’éviter les fraudes,
2. de ne pas avoir à contrôler et stocker des pièces justificatives,
3. de diminuer/supprimer les interventions en en backoffice,
4. d’éviter les erreurs de saisie (de l’usager ou du service traitant).

## Quelles données sont disponibles par API ?

| Nom de la donnée | Disponibilité API Particulier | Disponibilité France Connect |
| --- | --- | --- |
| Données fiscales (DGFiP) | ❌ Disponible sur l'[API Impôt particulier - DGFIP](/les-api/impot-particulier) | [✅ Données fiscales (DGFiP)](/les-api/impot-particulier) |
| Quotient famillial (CNAF) | [✅ API Particulier](/les-api/api-particulier) | ⌛️ Fin 2022 |
| Statut étudiant | [✅ API Particulier](/les-api/api-particulier) | [✅ API Statut étudiant](/les-api/api-statut-etudiant) |
| Statut étudiant boursier | [✅ API Particulier](/les-api/api-particulier) | [✅ API Statut étudiant boursier](/les-api/api-statut-etudiant-boursier) |
| Scolarité | ⌛️ Fin 2022 | Non prévue |

⚠️ **Les données fiscales des particuliers ne sont plus disponibles via l'API Particulier, produit opéré par la DINUM.** Pour obtenir ces données (ex : le revenu fiscal de référence, les informations sur les déclarants et le nombre de parts du foyer fiscal), veuillez désormais interroger directement l'API dédiée à l'accès aux données fiscales des particuliers [**l'API Impôt particulier** de la DGFiP](https://api.gouv.fr/les-api/impot-particulier).

## Comment accéder aux données ?

Les API sont disponibles - que les téléservices utilisent franceConnect ou non.

🔎 En savoir plus sur [les API FranceConnectées](https://api.gouv.fr/guides/api-franceconnectees)

Un téléservice peut aussi proposer deux modes de connection, l’un avec FranceConnect, l’autre sans. Dans ce dernier cas il convient d’utiliser [l’API particulier](https://api.gouv.fr/les-api/api-particulier).

Vous devez formuler une demande d’habilitation auprès de chaque fournisseur de donnée pour les API FranceConnectées ou d’une seule demande pour l'API particulier.

### Pour remplir votre demande, vous devrez fournir :

#### 1. Votre numéro SIRET

Nous vérifierons que vous êtes bien une administration au sens des articles [(100-3](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000031367308) ou [300-2](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033218936/) du [code des relations entre le public et l’administration](https://www.legifrance.gouv.fr/codes/id/LEGITEXT000031366350/))

#### 2. Le nom du projet et sa description

Nous vérifierons que la finalité du service pour lequel votre demande est formulée s’inscrit dans le traitement des démarches du public ou accomplissement une mission de service public ( article 114-8 du code des relations entre le public et l’administration)

#### 3. Le cadre juridique (décret, arrêté délibération, décision…) qui vous légitime à obtenir les données.

Nous vérifierons que le cadre juridique qui fonde votre mission vous permet d’avoir connaissance des données demandées

  <details>
    <summary>En savoir plus sur le cadre juridique</summary>
    Le cadre juridique général permet aux administrations d’obtenir, auprès d’autres administrations les données qui leur sont nécessaires pour accomplir leur mission de service public. Ce cadre est prévu par le code des relations entre le public et l’administration (art. 114-8 et suivants) pour, notamment, traiter les demandes et déclarations du public. En outre l’article 1er  de la loi pour une République numérique permet d’obtenir les données nécessaires, plus largement, à l’accomplissement d’une mission de service public. D’autres dispositions spécifiques peuvent également prévoir des mesures analogues.
  </details>

#### 4. Les coordonnées des personnes responsables de l’utilisation de l’API :

- responsable de traitement,
- responsable technique : il peut être au sein de l’organnisation de l’administration ou un prestataire (éditeur, intégrateur),
- délégué à la protection des données (informé automatiquement lors de la soumission du formulaire).

<Button href="#quelles-donnees-sont-disponibles-par-api-?">Accéder aux API</Button>

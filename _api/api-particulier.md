---
name: API Particulier
tagline: Simplifiez les démarches de vos usagers, ne demandez plus de justificatifs
doc_tech: https://apiparticulier.sgmap.fr/tech
access_link: https://apiparticulier.sgmap.fr/#/registration/charte
domain: https://apiparticulier.sgmap.fr
contract: OUVERT sous contrat
restriction: simplication des démarches des usagers
openapi:
  definition: https://apiparticulier-test.sgmap.fr/docs/api-particulier.yaml
  override_description: |

      Bienvenue sur la documentation exécutable d'API Particulier

      #### Environnements

      Il existe plusieurs environnements:

      |             | Domain                       | Documentation                                     | API Key     | Stable |
      |-------------|------------------------------|---------------------------------------------------|-------------|--------|
      | Production  | apiparticulier.sgmap.fr      |[Lien](https://apiparticulier.sgmap.fr/docs/)      | Secret      | Oui    |
      | Test        | apiparticulier-test.sgmap.fr |[Lien](https://apiparticulier-test.sgmap.fr/docs/) | `test-token`| Oui    |
      | Dev         | apiparticulier-dev.sgmap.fr  |[Lien](https://apiparticulier-dev.sgmap.fr/docs/)  | Secret      | Non    |
      | Mocks       | apiparticulier-mock.sgmap.fr |[Lien](https://apiparticulier-mock.sgmap.fr/docs/) | ``          | Oui    |

      La documentation ci-dessous propose des données bidons pour faire des tests avec le token `test-token`.

      Pour la caf vous pouvez utiliser le numéro d'allocataire `0000354` et le département `99148`.
      Pour les impots vous pouvez utiliser le numéro fiscal `1562456789521` et la référence d'avis `1512456789521`.

      Essayez par vous même !
clients:
  - collectivités
  - ministères
partners:
  - DGFIP
  - CNAF
owner: DINSIC
type: confidential
keywords:
  - Impots
  - CAF
  - Caisse Allocations Familiales
  - Quotient Familial
  - Revenu Fiscal de Référence
  - Adresse
---


## Ne plus demander de pièces justificatives inutiles

Limiter les demandes des pièces justificatives ou informations lorsqu’elles sont détenues par d’autres administrations ( CAF, DGFIP, Pôle Emploi…).

Limiter le risque de fraude documentaire en récupérant des informations certifiées à la source dans un point d'accès unique.


## Accéder aux données de façon sécurisée

L'accès aux données est réalisé au travers de protocoles de communications sécurisés et seuls les opérateurs agréés peuvent se connecter à l'API.

Pour obtenir un agrément, vous devez justifier d'une simplification pour les citoyens, et vous engager à n'accéder aux données personnelles qu'avec *l'accord explicite de l'usager*.


## Comprendre la différence avec FranceConnect

API Particulier et FranceConnect sont deux systèmes indépendants mais complémentaires.

|                | FranceConnect                                | API Particulier                                                           |
|----------------|----------------------------------------------|---------------------------------------------------------------------------|
| Nature         | Fournisseur d'Identité et tiers de confiance | Fournisseur de Données                                                       |
| Identification | Citoyen et Fournisseur de Service            | Fournisseur de Service                                                    |
| Type de donnée | liée à la personne                           | liée à la personne, liée au foyer familial, liée aux parents, aux enfants |


API Particulier et FranceConnect peuvent être utilisés seul ou conjointement.

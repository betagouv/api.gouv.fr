export const ApiEntrepriseNonEligible =
  "**Vous n'êtes pas éligible <span role='img' aria-label='émoji non'>🚫</span>** \
  \n \
  L’usage des données de l’API Entreprise est reservé aux acteurs publics : les administrations, leurs opérateurs et les collectivités, les acteurs de santé, etc. \
  \n \n \
  <ButtonLink href='/les-api/api-entreprise#alternatives-en-acces-libre' alt>Consulter les alternatives</ButtonLink>"

export const Eligible =
  "**<span role='img' aria-label='émoji oui'>👌</span> Vous êtes éligible !** \
  \n \
  Lors de la demande, vous devrez justifier par le cadre légal adéquat de votre statut de société chargée d’une mission de service public. \
  \n \n \
  Pour vérifier que l’API Entreprise vous permet d’accéder aux données dont vous avez besoin, consultez : \
  \n \
  - le [catalogue des données](https://entreprise.api.gouv.fr/catalogue/) et la [documentation des API](https://entreprise.api.gouv.fr/doc/) ; \
  \n \
  - les [cas d’usage](https://entreprise.api.gouv.fr/cas_usage/) de l’API Entreprise. \
  "

export const EligibleEditeurOk =
  "**<span role='img' aria-label='émoji ok'>👍</span> Bonne nouvelle ! Vous êtes éligible et votre éditeur/profil acheteur a déjà intégré l’API Entreprise.** \
  \n \n \
  Vous n’avez plus qu’à vous adresser directement à votre éditeur."

export const EligibleEditeurNotOk =
  "**<span role=\"img\" aria-label=\"émoji loupe\">🔎</span> Vous êtes éligible mais votre éditeur/profil acheteur n’a pas intégré l’API&nbsp;Entreprise** \
  \n \
  Déposez une demande pour expliciter vos besoins et votre situation. L’équipe API Entreprise vous contactera pour identifier des pistes de solutions, et contactera le cas échéant votre éditeur (pensez donc bien à préciser le nom de votre éditeur et ses coordonnées). \
  \n \n \
  <ButtonLink href='https://datapass.api.gouv.fr/api-entreprise' target='_blank'>Déposer une demande</ButtonLink> \
  \n \n \
  **Nota :** L’API Entreprise s’utilise au travers d’un logiciel métier, votre éditeur vous met probablement à disposition un logiciel de ce type. \
  \n \
  En revanche, comme ce dernier n’a pas encore intégré l’API Entreprise, les instructeurs de l’API Entreprise devront, entre autres, vérifier si votre éditeur a les <a href='https://entreprise.api.gouv.fr/doc/#fondamentaux' target='_blank'>prérequis techniques</a> pour utiliser l’API Entreprise."

export const EligibleDevelopersOk =
  "**<span role='img' aria-label='émoji ok'>👍</span> Vous êtes éligible et avez les compétences techniques pour intégrer l’API Entreprise** à votre logiciel interne de traitement des démarches des associations et des entreprises. \
  \n \n \
  <ButtonLink href='https://datapass.api.gouv.fr/api-entreprise' target='_blank'>Déposer une demande</ButtonLink>"

export const EligibleNoDevelopers =
  "**<span role='img' aria-label='émoji loupe'>🔎</span> Vous êtes éligible mais n'avez pas les <a href='https://entreprise.api.gouv.fr/doc/#fondamentaux' target='_blank'>prérequis techniques</a> pour utiliser l’API&nbsp;Entreprise** \
  \n \
  L’API Entreprise s’utilise au travers d’un logiciel métier, comme par exemple un profil acheteur pour les marchés publics. Si vous collectez et traitez les données à la main, vous n’avez probablement pas un logiciel dédié aux démarches. \
  \n \n \
  **Vous pouvez :** \
  \n \
  **- contacter des éditeurs de logiciel ayant déjà intégré l’API Entreprise :** \
  \n \n \
  <ButtonLink href='https://entreprise.api.gouv.fr/use_cases/aides_publiques/#liste-d%C3%A9diteurs' target='_blank' alt>Liste des éditeurs Aides Publiques</ButtonLink> \
  \n \n \
  <ButtonLink href='https://entreprise.api.gouv.fr/use_cases/marches_publics/#liste-d%C3%A9diteurs' target='_blank' alt>Liste des éditeurs Marchés Publics</ButtonLink> \
  \n \n \
  **- déposer une demande afin de nous expliquer votre contexte d’utilisation et vos besoins.** Les instructeurs d’API Entreprise étudieront votre demande. L’identification d’une équipe technique sera indispensable pour délivrer une habilitation. Merci de nous indiquer dans le formulaire que vous n'avez pas d'équipe technique pour accélerer le traitement de votre demande. \
  \n \n \
  <ButtonLink href='https://datapass.api.gouv.fr/api-entreprise' target='_blank'>Déposer une demande</ButtonLink>"

export const EditeurOk =
  "**<span role='img' aria-label='émoji ok'>👍</span> Vous êtes éligible pour mettre à disposition de vos utilisateurs l’API Entreprise.** \
  \n \
  <span role='img' aria-label='émoji avertissement'>⚠️</span> En tant que prestataire technique d’une entité administrative, vous pourrez être destinataire des informations techniques permettant l’usage de l’API mais en aucun cas des données elles-même. \
  \n \n \
  <ButtonLink href='https://datapass.api.gouv.fr/api-entreprise?demarche=editeur'>Déposer une demande</ButtonLink>"

export const EditeurAskAdministration =
  "**<span role='img' aria-label='émoji ok'>👍</span> L’administration pour laquelle vous proposez une prestation est éligible à l’API&nbsp;Entreprise** \
  \n \
  **C’est à elle de compléter une demande auprès d’API Entreprise.** Elle devra dans sa demande d’habilitation vous renseigner en tant que “contact technique”. Le lien ci-dessous permet à l’administration d’accéder à la demande d’accès, partagez-lui : \
  \n \
  <a href='/les-api/api-entreprise/demande-acces' target='_blank'>Lien vers la page</a> \
  <ButtonCopy source={'/les-api/api-entreprise/demande-acces'}/>"

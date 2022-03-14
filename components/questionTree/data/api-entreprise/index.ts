import { pathEligible } from './eligible';
import { pathDevelopForAdministration } from './administrations';

const apiEntrepriseQuestions = {
  'entreprises-or-associations': {
    question: 'Votre entreprise/association est-elle :',
    choiceTree: [
      {
        choices: [
          'dîte **“chargée d’une mission de service public”**',
          'dîte **"délégataire de service public”**',
        ],
        answer: `**Vous êtes bien éligible <span role='img' aria-label='émoji oui'>👌</span> !**
        <br/>
        Lors de la demande, vous devrez justifier par le cadre légal adéquat de votre statut de société chargée d’une mission de service public.
        <br/><br/>
        Pour vérifier que l’API Entreprise vous permet d’accéder aux données dont vous avez besoin, consultez : <br/> - le [catalogue des données](https://entreprise.api.gouv.fr/catalogue/) ; <br/> - les [cas d’usage](https://entreprise.api.gouv.fr/cas_usage/) de l’API Entreprise.
        `,
        next: pathEligible,
      },
      {
        choices: [
          '**prestataire d’une entité administrative** et développant des logiciels/interfaces',
        ],
        next: pathDevelopForAdministration,
      },
      {
        choices: [
          'un **cabinet d’avocat ou comptable**',
          'dans aucune de ces situations',
        ],
        answer: `**Vous n'êtes pas éligible <span role='img' aria-label='émoji non'>🚫</span>**
        <br/>
        L’usage des données de l’API Entreprise est reservé aux acteurs publics : les administrations, leurs opérateurs et les collectivités, les acteurs de santé, etc.
        <br/>
        <br/>
        <Button href='/les-api/api-entreprise#alternatives-en-acces-libre' alt>Consulter les alternatives</Button>`,
      },
    ],
  },
  administrations: pathEligible,
  editors: pathDevelopForAdministration,
} as { [key: string]: any };

export default apiEntrepriseQuestions;

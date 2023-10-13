import { pathEligible } from './eligible';

const apiParticulierQuestions = {

    apipart: {
    question: 'Qui sera en charge techniquement de l’intégration de l’API Particulier ?',
    choiceTree: [
      {
        choices: [
          '**Nos développeurs internes.**<br/>Ils conçoivent une solution logicielle sur-mesure pour mon organisation.',
          '**Nos développeurs prestataires.**<br/>Ils conçoivent une solution logicielle sur-mesure pour mon organisation.',
        ],
        answer: `**<span role='img' aria-label='émoji ok'>👍</span> Vous êtes éligible et avez les <External href='https://entreprise.api.gouv.fr/developpeurs#prerequis-techniques'>prérequis techniques</External> pour intégrer l’API Entreprise** à votre logiciel interne de traitement des démarches des associations et des entreprises.**
        <br/><br/>
        <Button href='https://datapass.api.gouv.fr/api-entreprise' target='_blank' rel="noreferrer noopener">Déposer une demande</Button>`,
      },
      {
        choices: [
          '**Mon éditeur.**<br/>Rien à coder, j’utilise une solution clé en main proposée par un éditeur.',
        ],
        next: pathEligible,
      },
      {
        choices: [
          '**Je n’ai ni équipe technique, ni éditeur.**<br/>Actuellement, je contacte les particuliers un par un et traite leurs données à la main.',
        ],
        answer: `** Vous êtes éligible mais n'avez pas les <External href='https://particulier.api.gouv.fr/faq#quels-sont-les-prerequis-techniques-pour-utiliser-l-api'>prérequis techniques</External> pour utiliser l’API&nbsp;Particulier <span role='img' aria-label='émoji loupe'>🔎</span>**
        <br/>
        L’API Particulier s’utilise au travers d’un logiciel métier. Si vous collectez et traitez les données à la main, vous n’avez probablement pas un logiciel dédié aux démarches.
        <br/>
        **De nombreux éditeurs de logiciel, ont déjà intégré l'API Entreprise, nous vous recommandons d'en <External href='https://particulier.api.gouv.fr/faq#je-recherche-un-editeur-proposant-l-api-particulier'>consulter la liste</External>**.
        <br/>
        <br/>
        <Button href='https://datapass.api.gouv.fr/api-entreprise' target='_blank' rel="noreferrer noopener" alt>Déposer tout de même une demande</Button>`,
      },
    ],
},
    } as { [key: string]: any };

  export default apiParticulierQuestions;

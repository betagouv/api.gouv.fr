import { pathEligible } from './eligible';

const apiParticulierQuestions = {

    apipart: {
    question: 'Qui sera en charge techniquement de l’intégration de l’API Particulier ?',
    choiceTree: [
      {
        choices: [
          '**Vos développeurs internes.**<br/>Ils conçoivent une solution logicielle sur-mesure pour votre organisation.',
        ],
        answer: `**<span role='img' aria-label='émoji ok'>👍</span> Vous êtes éligible et avez les <External href='https://particulier.api.gouv.fr/faq#quels-sont-les-prerequis-techniques-pour-utiliser-l-api'>prérequis techniques</External> pour intégrer l’API Particulier** à votre logiciel interne de traitement des démarches des particuliers.**
        <br/><br/>
        <Button href='https://datapass.api.gouv.fr/api-particulier' target='_blank' rel="noreferrer noopener">Déposer une demande</Button>`,
      },
      {
        choices: [
          '**Vos développeurs prestataires.**<br/>Ils conçoivent une solution logicielle sur-mesure pour votre organisation.',
        ],
        answer: `**<span role='img' aria-label='émoji ok'>👍</span> Vous êtes éligible et vos développeurs externes ont les <External href='https://particulier.api.gouv.fr/faq#quels-sont-les-prerequis-techniques-pour-utiliser-l-api'>prérequis techniques</External> pour intégrer l’API Particulier** à votre logiciel interne de traitement des démarches des particuliers.**
        <br/><br/>
        <Button href='https://datapass.api.gouv.fr/api-particulier' target='_blank' rel="noreferrer noopener">Déposer une demande</Button>`,
      },
      {
        choices: [
          '**Votre éditeur.**<br/>Rien à coder, vous utilisez une solution clé en main proposée par un éditeur.',
        ],
        next: pathEligible,
      },
      {
        choices: [
          '**Ni équipe technique, ni éditeur.**<br/>Actuellement, vous contactez les particuliers un par un et traitez leurs données à la main.',
        ],
        answer: `** Vous êtes éligible mais n'avez pas les <External href='https://particulier.api.gouv.fr/faq#quels-sont-les-prerequis-techniques-pour-utiliser-l-api'>prérequis techniques</External> pour utiliser l’API&nbsp;Particulier**
        <br/>
        <span role='img' aria-label='émoji loupe'>🔎</span>&nbsp;L’API Particulier s’utilise au travers d’un logiciel métier. Si vous collectez et traitez les données à la main, vous n’avez probablement pas un logiciel dédié aux démarches.
        <br/>
        **De nombreux éditeurs de logiciel, ont déjà intégré l'API Particulier, nous vous recommandons d'en <External href='https://particulier.api.gouv.fr/faq#je-recherche-un-editeur-proposant-l-api-particulier'>consulter la liste</External>**.
        <br/>
        <br/>
        <Button href='https://datapass.api.gouv.fr/api-particulier' target='_blank' rel="noreferrer noopener" alt>Déposer tout de même une demande</Button>`,
      },
    ],
},
    } as { [key: string]: any };

  export default apiParticulierQuestions;

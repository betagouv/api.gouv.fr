import { pathDevelopForEditors } from './editeurs';

export const pathEligible = {
  question:
    'Qui sera en charge techniquement de l’intégration de l’API Entreprise ?',
  choiceTree: [
    {
      choices: [
        '**Vos développeurs internes.**<br/>Ils conçoivent une solution logicielle sur-mesure pour votre organisation.',
      ],
      answer: `**<span role='img' aria-label='émoji ok'>👍</span> Vous êtes éligible et avez les <External href='https://entreprise.api.gouv.fr/developpeurs#prerequis-techniques'>prérequis techniques</External> pour intégrer l’API Entreprise** à votre logiciel interne de traitement des démarches des associations et des entreprises.**
      <br/><br/>
      <Button href='https://datapass.api.gouv.fr/api-entreprise' target='_blank' rel="noreferrer noopener">Déposer une demande</Button>`,
    },
    {
      choices: [
        '**Vos développeurs prestataires.**<br/>Ils conçoivent une solution logicielle sur-mesure pour votre organisation.',
      ],
      answer: `**<span role='img' aria-label='émoji ok'>👍</span> Vous êtes éligible et vos développeurs externes ont les <External href='https://entreprise.api.gouv.fr/developpeurs#prerequis-techniques'>prérequis techniques</External> pour intégrer l’API Entreprise** à votre logiciel interne de traitement des démarches des associations et des entreprises.**
      <br/><br/>
      <Button href='https://datapass.api.gouv.fr/api-entreprise' target='_blank' rel="noreferrer noopener">Déposer une demande</Button>`,
    },
    {
      choices: [
        '**Votre éditeur.**<br/>Rien à coder, Vous utilisez une solution clé en main proposée par un éditeur.',
      ],
      next: pathDevelopForEditors
    },
    {
      choices: [
        '**Ni équipe technique, ni éditeur.**<br/>Actuellement, vous contactez les entreprises et associations une par une et traitez leurs données à la main.',
      ],
      answer: `** Vous êtes éligible mais n'avez pas les <External href='https://entreprise.api.gouv.fr/developpeurs#prerequis-techniques'>prérequis techniques</External> pour utiliser l’API&nbsp;Entreprise**
      <br/>
      <span role='img' aria-label='émoji loupe'>🔎</span>&nbsp;L’API Entreprise s’utilise au travers d’un logiciel métier, comme par exemple un profil acheteur pour les marchés publics. Si vous collectez et traitez les données à la main, vous n’avez probablement pas un logiciel dédié aux démarches.
      <br/>
      <div style="margin: 2rem; padding: 1rem; background-color: #EEEEEE; border-right: gray; border: 20px">
      <span role='img' aria-label='émoji cadeau'>🎁</span>**&nbsp;Nouveauté ! Faites partie des 1ers utilisateurs de « l'espace agent public » de l'annuaire des entreprises !**<br/> Vous devez vérifier les informations financières, fiscales et sociales des entreprises-associations ? Votre cadre juridique le permet ?
      <br/><External href='https://form.typeform.com/to/ol1jlpdf'><span role='img' aria-label='émoji flèche'>➡️</span> C'est possible en 1 clic en remplissant ce questionnaire</External>
      <br/>
      </div>
      **Autrement, vous pouvez :**<br/>
      <ul>
      <li>**Contacter des éditeurs de logiciel ayant déjà intégré l’API Entreprise :**
      <br/><Button href='https://entreprise.api.gouv.fr/cas_usage/aides_publiques/#liste-d%C3%A9diteurs' target='_blank' rel="noreferrer noopener" alt>Liste des éditeurs Aides Publiques</Button>
      <Button href='https://entreprise.api.gouv.fr/cas_usage/marches_publics/#liste-d%C3%A9diteurs' target='_blank' rel="noreferrer noopener" alt>Liste des éditeurs Marchés Publics</Button></li>
      <br/>
      <li>**déposer une demande afin de nous expliquer votre contexte d’utilisation et vos besoins.** Les instructeurs d’API Entreprise étudieront votre demande. L’identification d’une équipe technique sera indispensable pour délivrer une habilitation. Merci de nous indiquer dans le formulaire que vous n'avez pas d'équipe technique pour accélerer le traitement de votre demande.
      <br/>
      <Button href='https://datapass.api.gouv.fr/api-entreprise' target='_blank' rel="noreferrer noopener" alt>Déposer une demande</Button>
      </li>
      </ul>`,
    },
  ],
};

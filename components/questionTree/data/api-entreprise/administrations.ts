export const pathDevelopForAdministration = {
  question: 'À qui sont destinés les interfaces/logiciels que vous concevez ?',
  choiceTree: [
    {
      choices: ['Aux administrations et/ou aux collectivités'],
      answer: `**Vous êtes éligible pour mettre à disposition de vos utilisateurs l’API Entreprise <span role='img' aria-label='émoji ok'>👍</span>**
          <br/>
          <span role='img' aria-label='émoji avertissement'>⚠️</span> En tant que prestataire technique d’une entité administrative, vous pourrez être destinataire des informations techniques permettant l’usage de l’API mais en aucun cas des données elles-même.
          <br/>
          <span role='img' aria-label='émoji information'>ℹ️</span>** Pour que votre demande soit traitée plus rapidement :** Au niveau de la section "_Les modèles pré-remplis_", le modèle "_Demande spécifique aux éditeurs de logiciels_" est sélectionné. Il est impératif de garder ce modèle et de ne pas en changer.
          <br/>
          **Pour remplir votre demande, vous aurez notamment besoin de:**
          <ul>
            <li>votre numéro de SIRET ;</li>
            <li>décrire votre activité ;</li>
            <li>décrire les cas d'usage de l'API Entreprise qu'auront vos clients publics ;</li>
            <li>justifier les API demandées.</li>
          </ul>
          <Button href='https://datapass.api.gouv.fr/api-entreprise?demarche=editeur' alt>Déposer une demande pour intégrer l'API Entreprise</Button>`,
    },
    {
      choices: ['Aux entreprises, associations et/ou particuliers'],
      answer: `**Vous n'êtes pas éligible <span role='img' aria-label='émoji non'>🚫</span>**
      <br/>
      L’usage des données de l’API Entreprise est reservé aux acteurs publics : les administrations, leurs opérateurs et les collectivités, les acteurs de santé, etc.
      <br/>
      <Button href='/les-api/api-entreprise#alternatives-en-acces-libre' alt>Consulter les alternatives</Button>
      `,
    },
  ],
};

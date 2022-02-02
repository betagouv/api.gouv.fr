export const pathDevelopForAdministration = {
  question: 'À qui sont destinés les interfaces/logiciels que vous concevez ?',
  choiceTree: [
    {
      choices: ['Aux administrations et/ou aux collectivités'],
      next: {
        question: 'Quel type de service proposez-vous aux administrations ?',
        choiceTree: [
          {
            choices: [
              'Un **logiciel métier clé en main**, proposé à de nombreuses entités administratives',
            ],
            answer: `**Vous êtes éligible pour mettre à disposition de vos utilisateurs l’API Entreprise <span role='img' aria-label='émoji ok'>👍</span>**
              <span role='img' aria-label='émoji avertissement'>⚠️</span> en tant que prestataire technique d’une entité administrative, vous pourrez être destinataire des informations techniques permettant l’usage de l’API mais en aucun cas des données elles-même.
              <br/>
              <Button href='https://form.typeform.com/to/pQ0iFKzi' alt>Formulaire de contact pour intégrer l'API Entreprise</Button>`,
          },
          {
            choices: [
              'Un logiciel conçu **sur mesure** pour une administration',
            ],
            answer: `**L’administration pour laquelle vous proposez une prestation est éligible à l’API&nbsp;Entreprise <span role='img' aria-label='émoji ok'>👍</span>**
            <br/>
            **C’est à elle de compléter une demande auprès d’API Entreprise.** Elle devra dans sa demande d’habilitation vous renseigner en tant que “contact technique”. Le lien ci-dessous permet à l’administration d’accéder à la demande d’accès, partagez-lui :
            <br/>
            <External href='/les-api/api-entreprise/demande-acces'>Lien vers la page</External>
            &nbsp;
            <ButtonCopy source='https://api.gouv.fr/les-api/api-entreprise/demande-acces'/>`,
          },
        ],
      },
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

const isDgfipMigration = {
    dgfipMigration: {
      question:
        'Souhaitez-vous migrer de l‘API Particulier vers l‘API Impôt particulier ?',
      choiceTree: [
        {
          choices: ['Oui'],
          answer: `Vous pouvez remplir une demande de migration vers l'API Impôt particulier :
          <Button href="https://datapass.api.gouv.fr/api-impot-particulier-sandbox">Remplir une demande</Button>`,
        },
        {
          choices: ['Non'],
          answer: `En remplissant cette demande, vous allez obtenir l’accès à l'API Impôt Particulier.
          <br/>
          <Button href="https://datapass.api.gouv.fr/api-impot-particulier-sandbox">Remplir une demande</Button>
          `,
        },
      ],
    },
  } as { [key: string]: any };
  
  export default isDgfipMigration;
  
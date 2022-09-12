export const pathEligible = {
  question:
    'Qui sera en charge techniquement de l’intégration de l’API Entreprise ?',
  choiceTree: [
    {
      choices: [
        '**Nos développeurs internes.**<br/>Ils conçoivent une solution logicielle sur-mesure pour mon organisation.',
        '**Nos développeurs prestataires.**<br/>Ils conçoivent une solution logicielle sur-mesure pour mon organisation.',
      ],
      answer: `**<span role='img' aria-label='émoji ok'>👍</span> Vous êtes éligible et avez les compétences techniques pour intégrer l’API Entreprise** à votre logiciel interne de traitement des démarches des associations et des entreprises.**
      <br/><br/>
      <Button href='https://datapass.api.gouv.fr/api-entreprise' target='_blank' rel="noreferrer noopener">Déposer une demande</Button>`,
    },
    {
      choices: [
        '**Mon éditeur.**<br/>Rien à coder, j’utilise une solution clé en main proposée par un éditeur.',
      ],
      next: {
        question:
          "Votre éditeur ou profil acheteur a-t-il déjà intégré l'API Entreprise ? Sélectionnez votre éditeur dans la liste ci-dessous :",
        choiceTree: [
          {
            choices: [
              'Achatpublic - achatpublic.com',
              'Atexo - LocalTrustSub',
              'Atexo - Place',
              'AWS - AWS-achat',
              'Atline Services - marches-securises.fr',
              'Dematis - e-marchespublics.com',
              'E-attestations - E-attestations.com',
              'Klekoon - klekoon.com',
              'MGDIS - Portail des aides',
              'Provigis - Provigis plateforme',
              'Territoires numériques - Pack commande publique',
            ],
            answer: `**Bonne nouvelle ! Vous êtes éligible et votre éditeur/profil acheteur a déjà intégré l’API Entreprise. <span role='img' aria-label='émoji ok'>👍</span>**
            <br/><br/>
            Vous n’avez plus qu’à vous adresser directement à votre éditeur.`,
          },
          {
            choices: ['**Mon éditeur ne figure pas dans cette liste**'],
            answer: `**Vous êtes éligible mais votre éditeur/profil acheteur n’a pas intégré l’API&nbsp;Entreprise <span role="img" aria-label="émoji loupe">🔎</span>**
            <br/>
            Déposez une demande pour expliciter vos besoins et votre situation. L’équipe API Entreprise vous contactera pour identifier des pistes de solutions, et contactera le cas échéant votre éditeur (pensez donc bien à préciser le nom de votre éditeur et ses coordonnées).
            <br/>
            <Button href='https://datapass.api.gouv.fr/api-entreprise' target='_blank' rel="noreferrer noopener" alt>Déposer une demande</Button>
            <br/>
            **Nota :** L’API Entreprise s’utilise au travers d’un logiciel métier, votre éditeur vous met probablement à disposition un logiciel de ce type.
            <br/>
            En revanche, comme ce dernier n’a pas encore intégré l’API Entreprise, les instructeurs de l’API Entreprise devront, entre autres, vérifier si votre éditeur a les <External href='https://entreprise.api.gouv.fr/doc/#fondamentaux'>prérequis techniques</External> pour utiliser l’API Entreprise.`,
          },
        ],
      },
    },
    {
      choices: [
        '**Je n’ai ni équipe technique, ni éditeur.**<br/>Actuellement, je contacte les entreprises et associations une par une et traite leurs données à la main.',
      ],
      answer: `** Vous êtes éligible mais n'avez pas les <External href='https://entreprise.api.gouv.fr/doc/#fondamentaux'>prérequis techniques</External> pour utiliser l’API&nbsp;Entreprise <span role='img' aria-label='émoji loupe'>🔎</span>**
      <br/>
      L’API Entreprise s’utilise au travers d’un logiciel métier, comme par exemple un profil acheteur pour les marchés publics. Si vous collectez et traitez les données à la main, vous n’avez probablement pas un logiciel dédié aux démarches.
      <br/>
      **Vous pouvez :<br/>** - **contacter des éditeurs de logiciel ayant déjà intégré l’API Entreprise :**
      <br/><Button href='https://entreprise.api.gouv.fr/cas_usage/aides_publiques/#liste-d%C3%A9diteurs' target='_blank' rel="noreferrer noopener" alt>Liste des éditeurs Aides Publiques</Button>
      <Button href='https://entreprise.api.gouv.fr/cas_usage/marches_publics/#liste-d%C3%A9diteurs' target='_blank' rel="noreferrer noopener" alt>Liste des éditeurs Marchés Publics</Button>
      <br/>- **déposer une demande afin de nous expliquer votre contexte d’utilisation et vos besoins.** Les instructeurs d’API Entreprise étudieront votre demande. L’identification d’une équipe technique sera indispensable pour délivrer une habilitation. Merci de nous indiquer dans le formulaire que vous n'avez pas d'équipe technique pour accélerer le traitement de votre demande.
      <br/>
      <Button href='https://datapass.api.gouv.fr/api-entreprise' target='_blank' rel="noreferrer noopener" alt>Déposer une demande</Button>`,
    },
  ],
};

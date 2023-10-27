export const pathDevelopForEditors = {
  question: "Sélectionnez l'éditeur et la solution qui vous concerne :",
  choiceTree: [
      {
      choices: [
          'E-Attestations - Conformité titulaires de marchés',
      ],
      answer: `<br/><Button href="https://datapass.api.gouv.fr/api-entreprise?demarche=e_attestations">Remplir une demande</Button>
      `,
      },
      {
      choices: [
          'Provigis - Conformité titulaires de marchés',
      ],
      answer: `<br/><Button href="https://datapass.api.gouv.fr/api-entreprise?demarche=provigis">Remplir une demande</Button>
      `,
      },
      {
      choices: [
          'Achat Solution - Conformité titulaires de marchés',
      ],
      answer: `<br/><Button href="https://datapass.api.gouv.fr/api-entreprise?demarche=achat_solution">Remplir une demande</Button>
      `,
      },
      {
      choices: [
           'Atexo - Dématérialisation des marchés publics',
      ],
      answer: `<br/><Button href="https://datapass.api.gouv.fr/api-entreprise?demarche=atexo">Remplir une demande</Button>
      `,
      },
      {
      choices: [
          'MGDIS - Portail des aides',
      ],
      answer: `<br/><Button href="https://datapass.api.gouv.fr/api-entreprise?demarche=mgdis">Remplir une demande</Button>
      `,
      },
      {
      choices: [
          'Setec/Atexo - Dématérialisation des marchés publics',
      ],
      answer: `<br/><Button href="https://datapass.api.gouv.fr/api-entreprise?demarche=setec">Remplir une demande</Button>
      `,
      },
      {
      choices: [
          'Achatpublic - achatpublic.com',
          'Actradis',
          'Arnia - Pack commande publique',
          'Atline Services - marches-securises.fr',
          'AWS - AWS-achat',
          'Axyus',
          'Dematis - e-marchespublics.com',
          'Entr\'ouvert - Publik',
          'Klekoon - klekoon.com',
          'Maximilien',
          'Megalis Bretagne',
          'PICTAV Informatique',
          'SmartGlobal - Smart Global Governance',
          'Solution Attestations',
      ],
      answer: `**Bonne nouvelle ! Vous êtes éligible et votre éditeur/profil acheteur a déjà intégré l’API Entreprise. <span role='img' aria-label='émoji ok'>👍</span>**
      <br/>
      Vous n’avez plus qu’à vous adresser directement à votre éditeur.`,
      },
      {
      choices: ['**La solution de votre éditeur ne figure pas dans cette liste**'],
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
};

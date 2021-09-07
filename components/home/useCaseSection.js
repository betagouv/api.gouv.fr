import React from 'react';

import constants from '../../constants';

const USE_CASES = [
  {
    title: 'Les transports scolaires de la région Nouvelle-Aquitaine',
    content:
      'La région Nouvelle-Aquitaine propose une dégressivité du tarif des transports scolaires en fonction du revenu fiscal est nécessaire pour vous permettre de bénéficier éventuellement de la dégressivité du tarif. Un service en ligne permet aux familles de s’inscrire et de payer en ligne l’abonnement. Les familles n’ont pas produire de pièce justificative à l’appui de leur démarche.',
    // apis: [],
    picture: '/images/home/nouvelleAquitaine.jpg',
    button: {
      txt: 'Je cherche à faciliter les démarches des familles',
      linkTo: constants.links.mailto.NOUVELLE_AQUITAINE,
    },
  },
  {
    title: 'Le pass metz Loisirs',
    content:
      'Le Pass Metz Loisirs permet aux enfants de pratiquer une activité ( sportive, culturelle ou de loisirs) dans les structures conventionnées ou s’inscrire aux activités socio-éducatives après la classe et le mercredi après-midi. Il est subventionné par la ville pour les familles à faibles revenus sur la base du quotient familial. Les familles n’ont plus à fournir de justificatifs pour cette démarche.',
    // apis: [],
    picture: '/images/home/metz.jpg',
    button: {
      txt: 'Aidez-moi à dématérialiser des justificatifs',
      linkTo: constants.links.mailto.PASS_METZ,
    },
  },
];

const UseCaseSection = () => (
  <section id="use-cases" className="fr-container">
    {USE_CASES.map(useCase => (
      <div className="use-case" key={useCase.title}>
        <div className="content-wrapper">
          <h3>{useCase.title}</h3>
          <div>{useCase.content}</div>
          {useCase.apis && (
            <div className="apis">
              <b>API utilisées&nbsp;:</b> {useCase.apis.join(', ')}
            </div>
          )}
          {useCase.button && (
            <a href={useCase.button.linkTo}>{useCase.button.txt}</a>
          )}
        </div>
        <div className="img-wrapper">
          <img src={useCase.picture} alt={useCase.title} />
        </div>
      </div>
    ))}
  </section>
);

export default UseCaseSection;

import React from 'react';

import { ButtonLink } from '../../uiComponents/button';
import SubSection from './subSection';

interface IProps {
  logo: string;
  owner: string;
  owner_acronym?: string;
  link?: string;
  owner_slug: string;
}

const SupportAndTeam: React.FC<IProps> = ({
  logo,
  link,
  owner,
  owner_acronym,
  owner_slug,
}) => {
  return (
    <SubSection title="L’équipe">
      <div>Cette API est produite par :</div>
      <div className="team">
        <img src={`/images/api-logo/${logo || 'dinum.png'}`} alt="" />
        <span>
          <a href={`/producteurs/${owner_slug}`}>
            {owner}
            {owner_acronym && ` (${owner_acronym})`}
          </a>
        </span>
      </div>
      <>
        {link ? (
          <div className="layout-right vertical-margin">
            {link.indexOf('@') > -1 ? (
              <>
                <ButtonLink
                  href={`mailto:${link}?subject=Contact%20via%20api.gouv.fr`}
                  alt
                >
                  <span role="img" aria-label="émoji mail">
                    💌
                  </span>{' '}
                  Écrire un mail à l’équipe
                </ButtonLink>
              </>
            ) : (
              <>
                <ButtonLink href={link} target="_blank" rel="noopener" alt>
                  <span role="img" aria-label="émoji formulaire">
                    📝
                  </span>{' '}
                  Contacter l'équipe via formulaire
                </ButtonLink>
              </>
            )}
          </div>
        ) : (
          <p>Le contact de cette API n'est pas disponible publiquement.</p>
        )}
      </>
      <style jsx>{`
        .team {
          display: flex;
          align-items: center;
          margin: 10px 0;
        }

        .team img {
          border-radius: 5px;
          width: auto;
          max-height: 70px;
          max-width: 30%;
          margin-right: 15px;
          flex-shrink: 1;
        }

        .team span {
          flex-grow: 1;
          min-width: 50%;
        }
      `}</style>
    </SubSection>
  );
};

export default SupportAndTeam;

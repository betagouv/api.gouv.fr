import React, { PropsWithChildren } from 'react';
import constants from '../../constants';
import Emoji from '../../uiComponents/emoji';
import { ExternalLink, ButtonLink } from '../../uiComponents';

const DocSection: React.FC<PropsWithChildren<{ label: any }>> = ({
  children,
  label,
}) => (
  <div>
    <div className="wrapper">
      <div className="label">{label}</div>
      <div className="description">{children}</div>
    </div>
    <style jsx>{`
      .wrapper {
        max-width: 600px;
        margin-top: 20px;
        background-color: ${constants.colors.lightGrey};
        padding: 20px;
        border-radius: 5px;
      }
      .label {
        font-weight: bold;
        font-size: 1.2rem;
        line-height: 1.8rem;
        margin-bottom: 5px;
      }
    `}</style>
  </div>
);

export const ExternalDoc: React.FC<{ doc_link: string }> = ({ doc_link }) => (
  <DocSection
    label={
      <>
        <Emoji emoji="💻" label="Documentation" />
        Documentation externe
      </>
    }
  >
    Cette API possède une documentation complémentaire, à laquelle vous pouvez
    accéder en <ExternalLink href={doc_link}>cliquant ici</ExternalLink>
  </DocSection>
);

export const Habilitation: React.FC<{ slug: string }> = ({ slug }) => (
  <DocSection
    label={
      <>
        <Emoji emoji="🔒" label="lock" />
        API sous habilitation
      </>
    }
  >
    <div style={{ marginBottom: '10px' }}>
      Cette API nécessite une habilitation. Vous pouvez consulter sa
      documentation, mais pour accéder aux données vous devrez faire une demande
      d'accès
    </div>
    <div className="layout-right">
      <ButtonLink href={`/les-api/${slug}/demande-acces`}>
        <div className="layout-center btn-icon">Demander l’accès à l’API</div>
      </ButtonLink>
    </div>
  </DocSection>
);

export const SwaggerPartiallyFunctionnal: React.FC<{}> = ({}) => (
  <div>
    <br />
    <b>Cette documentation peut ne pas fonctionner correctement :</b>
    <br />
    Ce swagger est protégé par une politique de "Cross-origin resource sharing"
    (CORS) pouvant nuire à son bon fonctionnement.
    <style jsx>{``}</style>
  </div>
);

export const AccountNeeded: React.FC<{ account_link: string }> = ({
  account_link,
}) => (
  <DocSection
    label={
      <>
        <Emoji emoji="⚠️" label="attention" />
        Compte nécessaire pour appeler l’API
      </>
    }
  >
    <div style={{ marginBottom: '10px' }}>
      Attention ! Cette API nécessite de se créer un compte afin d’accéder aux
      données :
    </div>
    <div className="layout-right">
      <ButtonLink href={account_link}>
        <div className="layout-center btn-icon">Se créer un compte</div>
      </ButtonLink>
    </div>
  </DocSection>
);

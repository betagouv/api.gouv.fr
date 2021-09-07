import { Meta } from '../';
import { ButtonLink } from '../../uiComponents';
import Emoji from '../../uiComponents/emoji';

const Error = ({ msg, title }) => (
  <>
    <Meta title={title} description={msg} />

    <section id="errorContainer" className="ui text container">
      <div>
        <h1>
          <Emoji emoji="🤕" label="Problème" />
        </h1>
        <h2>{msg}</h2>
        <h3>
          Cela ne devrait pas arriver, mais si le problème persiste, vous pouvez{' '}
          <a href="mailto:contact@api.gouv.fr">nous contacter</a>.
        </h3>
        <ButtonLink href="/">
          Cliquez ici pour retourner à la page d’accueil
        </ButtonLink>
      </div>

      <style jsx>{`
        #errorContainer {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 75%;
          margin: 70px 0;
        }

        #errorContainer > div {
          display: flex;
          align-items: center;
          flex-direction: column;
          align-self: center;
        }

        h1,
        h2,
        h3 {
          text-align: center;
          margin: 10px auto 30px;
        }
        h1 {
          font-size: 6rem;
        }
        h2 {
          font-size: 1.8rem;
          line-height: 28px;
        }
        h3 {
          font-size: 1.3rem;
          color: #444;
        }
      `}</style>
    </section>
  </>
);

export default Error;

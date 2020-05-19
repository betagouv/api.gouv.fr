import React from 'react';
import { GetStaticProps } from 'next';

import { getAllAPIs, IApi } from '../../model';
import Page from '../../layouts/page';
import { HEADER_PAGE } from '../../components';
import constants from '../../constants';
import Results from '../../components/searchApis/results';

interface IProps {
  signupApis: IApi[];
}

const SignupApis: React.FC<IProps> = ({ signupApis }) => {
  return (
    <Page
      headerKey={HEADER_PAGE.FROM_SIGNUP}
      noIndex={true}
      preFooterBackground={constants.colors.white}
      title="Nouvelle demande d’habilitation"
    >
      <section className="content-container page-baseline">
        <h2>Nouvelle demande d’habilitation</h2>
      </section>

      <Results apiList={signupApis} />
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allApis = await getAllAPIs();

  return {
    props: {
      signupApis: allApis.filter(api => api.keywords.indexOf('Signup') > -1),
    },
  };
};

export default SignupApis;

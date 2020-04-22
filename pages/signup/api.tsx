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
  //@ts-ignore
  return (
    <Page
      headerKey={HEADER_PAGE.FROM_SIGNUP}
      preFooterBackground={constants.colors.white}
      title="Rechercher une API du service public"
      description="Vous faites partie d'un ministère ou d'une collectivité et vous cherchez une API du service public ? Vous êtes au bon endroit."
    >
      <section className="content-container page-baseline">
        <h2>
          Vous recherchez une API du service public ? Vous êtes au bon endroit !
        </h2>
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

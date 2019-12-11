import { getAPI } from "../utils/api";

import withErrors from "../components/hoc/with-errors";

import Page from "../layouts/page";

function API({ api }) {
  return (
    <Page>
      <h1>{api.title}</h1>
      <h2>{api.tagline}</h2>
    </Page>
  );
}

API.getInitialProps = async ({ query }) => {
  const api = await getAPI(query.apiId);

  return { api };
};

export default withErrors(API);

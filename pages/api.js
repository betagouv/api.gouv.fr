import { getAPI } from "../utils/api";

import withErrors from "../components/hoc/with-errors";

function API({api}) {
  return (
    <div>
      <h1>{api.title}</h1>
      <h2>{api.tagline}</h2>
    </div>
  );
}

API.getInitialProps = async ({ query }) => {
  const api = await getAPI(query.apiId);

  return {api}
};

export default withErrors(API);

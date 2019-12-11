import { getAPI } from "../utils/api";

function API({api}) {
  if (!api) {
    return <div>404 - Not found</div>
  }

  return (
    <div>
      <h1>{api.title}</h1>
      <h2>{api.tagline}</h2>
    </div>
  );
}

API.getInitialProps = async ({ query }) => {
  let api
  if (query.apiId) {
    api = await getAPI(query.apiId);
  }
  return {api}
};

export default API;

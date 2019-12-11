import { getAllAPIs } from "../utils/api";

import Page from "../layouts/page";

function Home({ apiList }) {
  return (
    <Page>
      <ul>
        {apiList.map(api => (
          <li key={api.title}>{api.title}</li>
        ))}
      </ul>
    </Page>
  );
}

Home.getInitialProps = async () => {
  const apiList = await getAllAPIs();
  return {
    apiList
  };
};

export default Home;

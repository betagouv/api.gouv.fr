import {getAllAPIs} from '../utils/api'

function Home({apiList}) {
  return (
    <ul>{apiList.map(api => (
      <li key={api.title}>{api.title}</li>
    ))}</ul>
    );
}

Home.getInitialProps = async () => {
  const apiList = await getAllAPIs();
  return {
    apiList
  };
}

export default Home;

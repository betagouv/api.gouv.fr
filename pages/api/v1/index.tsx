import Cors from 'cors';
import initMiddleware from '../../utils/api/init-middleware';
import { getAllAPIs } from '../../model';
import { NextApiRequest, NextApiResponse } from 'next';

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
    origin: true,
  })
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Run cors

  const allApis = await getAllAPIs();

  const openApis = allApis
    .filter(api => api.is_open)
    .map(api => {
      const { title, tagline } = api;
      return { title, tagline };
    });
  await cors(req, res);

  // Rest of the API logic
  res.json(openApis);
}

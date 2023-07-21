import Cors from 'cors';
import initMiddleware from '../../../utils/api/init-middleware';
import { getAllAPIs, getAPI } from '../../../model';
import { NextApiRequest, NextApiResponse } from 'next';
import { IApi } from '../../../model';
import constants from '../../../constants';

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
    origin: true,
  })
);

const openness = (is_open: 0 | 1 | -1) => {
  switch (is_open) {
    case 1:
      return 'open';
    case 0:
      return 'semi_open';
    case -1:
    default:
      return 'closed';
  }
};

const extractApiAttributes = (api: IApi) => {
  const {
    title,
    tagline,
    path,
    slug,
    is_open,
    owner,
    owner_acronym,
    logo,
    datagouv_uuid,
    datapass_link,
  } = api;
  return {
    title,
    tagline,
    path,
    slug,
    openness: openness(is_open),
    owner,
    owner_acronym,
    logo: `/images/api-logo/${logo || constants.logo}`,
    datagouv_uuid,
    datapass_link,
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slug = (req?.query?.slug || '') as string;

  if (!slug.length || ['apis', 'proxy'].indexOf(slug[0]) === -1) {
    res.statusCode = 404;
    return res.send({ Error: 'Route does not exist' });
  }

  if (slug[0] === 'proxy') {
    const apiSlug = slug[1];
    try {
      const api = await getAPI(apiSlug);
      if (!api) {
        throw new Error('invalid api');
      }

      const response = await fetch(api.doc_tech_link);
      const text = await response.text();
      Object.values(response.headers).forEach(headerKey =>
        // @ts-ignore
        res.setHeader(headerKey, response.headers[headerKey])
      );
      res.send(text);
    } catch (err) {
      res.statusCode = 500;
      res.send('Server error');
    }
  }

  if (slug[0] === 'apis') {
    await cors(req, res);

    if (slug.length === 1) {
      const allApis = await getAllAPIs();
      const openApis = allApis
        .filter((api: IApi) => api)
        .map(extractApiAttributes);

      // Rest of the API logic
      res.json(openApis);
    } else {
      const api = await getAPI(slug[1]);

      // Rest of the API logic
      res.json(extractApiAttributes(api));
    }
  }
}

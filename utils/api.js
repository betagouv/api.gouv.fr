import 'isomorphic-unfetch'; // eslint-disable-line import/no-unassigned-import
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const SITE_URL = publicRuntimeConfig.SITE_URL || 'https://api.gouv.fr';
export async function fetchJson(url) {
  const response = await fetch(url);
  if (response.status === 404) {
    return { status: 404 };
  }
  return response.json();
}

export const getAPI = async id => {
  return fetchJson(`${SITE_URL}/apis/${id}.json`);
};

export const getAllAPIs = async () => {
  return fetchJson(`${SITE_URL}/api/v1/api.json`);
};

export const getService = async id => {
  return fetchJson(`${SITE_URL}/services/${id}.json`);
};

export const getAllServices = async () => {
  return fetchJson(`${SITE_URL}/services/all`);
};

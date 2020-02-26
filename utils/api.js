import 'isomorphic-unfetch'; // eslint-disable-line import/no-unassigned-import
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const API_URL = publicRuntimeConfig.API_URL || 'https://api.gouv.fr';
export async function fetchJson(url) {
  const response = await fetch(url);
  return response.json();
}

export const getAPI = async id => {
  return fetchJson(`${API_URL}/apis/${id}.json`);
};

export const getAllAPIs = async () => {
  return fetchJson(`${API_URL}/api/v1/api.json`);
};

export const getService = async id => {
  return fetchJson(`${API_URL}/services/${id}.json`);
};

export const getAllServices = async () => {
  return fetchJson(`${API_URL}/services/all`);
};

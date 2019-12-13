import "isomorphic-unfetch"; // eslint-disable-line import/no-unassigned-import
import getConfig from "next/config";

const {
  publicRuntimeConfig: { API_URL }
} = getConfig();

export async function fetchJson(url) {
  const response = await fetch(url);
  return response.json();
}

export const getAPI = async id => {
  return fetchJson(`${API_URL}/apis/${id}.json`);
};

export const getAllAPIs = async () => {
  return fetchJson(`${API_URL}/api.json`);
};

import "isomorphic-unfetch"; // eslint-disable-line import/no-unassigned-import
import getConfig from 'next/config'

import HttpError from './http-error'

const {
  publicRuntimeConfig: { API_URL }
} = getConfig();

export async function _fetch(url) {
  const options = {
    mode: "cors",
    method: "GET"
  };

  const response = await fetch(url, options);
  const contentType = response.headers.get("content-type");

  if (!response.ok) {
    throw new HttpError(response);
  }

  if (response.ok && contentType && contentType.includes("application/json")) {
    return response.json();
  }

  throw new Error("Une erreur est survenue");
}

export const getAPI = async id => {
  return _fetch(API_URL + `/apis/${id}.json`);
};

export const getAllAPIs = async () => {
  return _fetch(API_URL + '/api.json')
};
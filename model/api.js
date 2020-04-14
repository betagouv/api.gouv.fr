import { loadApis, loadServices } from './markdownParser';

export const getAPI = async id => {
  const data = await loadApis();
  return data[id];
};

export const getService = async id => {
  const data = await loadServices();
  return data[id];
};

export const getAllAPIs = async () => {
  const data = await loadApis();
  return Object.values(data);
};

export const getAllServices = async () => {
  const data = await loadServices();
  return Object.values(data);
};

import { loadApis, loadServices } from './markdownParser';
import { IService, IApi } from '.';

export const getAPI = async (id: string): Promise<IApi> => {
  const data = await loadApis();
  return data[id];
};

export const getService = async (id: string): Promise<IService> => {
  const data = await loadServices();
  return data[id];
};

export const getAllAPIs = async (): Promise<IApi[]> => {
  const data = await loadApis();
  return Object.values(data);
};

export const getAllServices = async (): Promise<IService[]> => {
  const data = await loadServices();
  return Object.values(data);
};

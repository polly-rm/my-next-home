import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/properties';

export const getAll = () => request.get(baseUrl);

export const getOne = (propertyId) => request.get(`${baseUrl}/${propertyId}`);

export const create = (propertyData) => request.post(baseUrl, propertyData);

export const edit = (propertyId, propertyData) => request.put(`${baseUrl}/${propertyId}`, propertyData);

export const remove = (propertyId) => request.del(`${baseUrl}/${propertyId}`);
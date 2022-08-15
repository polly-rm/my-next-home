import * as request from "./requester";

const baseUrl = 'http://localhost:5000/property';

export const getAll = () => request.get(baseUrl);

export const getOne = (propertyId) => request.get(`${baseUrl}/${propertyId}`);

export const create = (propertyData) => request.post(`${baseUrl}/add`, propertyData);

export const edit = (propertyId, propertyData) => request.put(`${baseUrl}/update/${propertyId}`, propertyData);

export const remove = (propertyId) => request.del(`${baseUrl}/delete/${propertyId}`);
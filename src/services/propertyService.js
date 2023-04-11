import * as request from "./requester";


const baseUrl = 'http://127.0.0.1:8000/properties';

export const getAll = () => request.get(baseUrl);

export const getOne = (propertyId) => request.get(`${baseUrl}/details/${propertyId}`);

export const create = (propertyData) => request.post(`${baseUrl}/create`, propertyData);

export const edit = (propertyId, propertyData) => request.put(`${baseUrl}/update/${propertyId}`, propertyData);

export const remove = (propertyId) => request.del(`${baseUrl}/delete/${propertyId}`);


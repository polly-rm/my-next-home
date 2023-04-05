import * as request from "./requester";


const baseUrl = 'http://127.0.0.1:8000/users/profile';

export const getOne = (userId) => request.get(`${baseUrl}/details/${userId}`);

export const create = (profileData) => request.post(`${baseUrl}/create`, profileData);

export const edit = (userId, profileData) => request.put(`${baseUrl}/update/${userId}`, profileData);
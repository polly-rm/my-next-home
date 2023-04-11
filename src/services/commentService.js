import * as request from "./requester";


const baseUrl = 'http://127.0.0.1:8000/comments';

export const getAll = () => request.get(baseUrl);

export const getOne = (commentId) => request.get(`${baseUrl}/details/${commentId}`);

export const create = (commentData) => request.post(`${baseUrl}/create`, commentData);

export const edit = (commentId, commentData) => request.put(`${baseUrl}/update/${commentId}`, commentData);

export const remove = (commentId) => request.del(`${baseUrl}/delete/${commentId}`);


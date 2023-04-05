import * as request from "./requester";

const baseUrl = 'http://127.0.0.1:8000/users';

export const login = (username, password) =>
    request.post(`${baseUrl}/login`, { username, password });


export const logout = async (accessToken) => {
    try {
        const response = await fetch(`${baseUrl}/logout`, {
            headers: {
                'X-Authorization': accessToken
            }
        });

        return response;
    } catch (error) {
        console.log(error);
    }
};

export const register = (username, email, password, password2) =>
    request.post(`${baseUrl}/register`, { username, email, password, password2 });
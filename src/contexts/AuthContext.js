import { createContext, useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import * as profileService from '../services/profileService';


export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const [profile, setProfile] = useState({});

    const userLogin = (authData) => {
        setAuth(authData);
    };

    const userLogout = () => {
        setAuth({});
    };

    useEffect(() => {
        profileService.getOne(auth.id)
            .then(resultRequest => {
                const [profileData, response] = resultRequest;
                setProfile(profileData);
            });
    }, [auth.id]);

    return (
        <AuthContext.Provider value={{
            user: auth,
            profile,
            userLogin,
            userLogout,
            // isAuthenticated: !!auth.accessToken
        }}>
            {children}
        </AuthContext.Provider>
    );
};
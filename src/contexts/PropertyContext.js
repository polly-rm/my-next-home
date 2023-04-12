import { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import * as commentService from '../services/commentService';
import * as propertyService from '../services/propertyService';


export const PropertyContext = createContext();

export const PropertyProvider = ({
    children,
}) => {
    const [properties, setProperties] = useState([]);
    const [comments, setComments] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        propertyService.getAll()
            .then(resultRequest => {
                const [result, response] = resultRequest;
                setProperties(result);
            });
    }, []);


    useEffect(() => {
        commentService.getAll()
            .then(resultRequest => {
                const [result, response] = resultRequest;
                setComments(result);
            });
    }, []);

    const propertyAdd = (propertyData) => {
        setProperties(state => [
            ...state,
            propertyData,
        ]);

        navigate('/catalog');
    };

    const commentAdd = (commentData) => {
        setComments(state => [
            ...state,
            commentData,
        ]);
    };

    const propertyEdit = (propertyId, propertyData) => {
        setProperties(oldProperties => oldProperties.map(x => x.id !== propertyId ? x : propertyData));
        navigate(`/catalog/details/${propertyId}`);
    }

    const propertyRemove = (propertyId) => {
        setProperties(oldProperties => oldProperties.filter(x => x.id !== propertyId));
        navigate('/catalog');
    }

    const commentRemove = (commentId) => {
        setComments(oldComments => oldComments.filter(x => x.id !== commentId));
    }

    return (
        <PropertyContext.Provider value={{
            properties, comments, setProperties, propertyAdd, propertyEdit, propertyRemove, commentAdd, commentRemove
        }}>
            {children}
        </PropertyContext.Provider>
    );
};
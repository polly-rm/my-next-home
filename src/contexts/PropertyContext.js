import { createContext, useReducer, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import * as propertyService from '../services/propertyService';

export const PropertyContext = createContext();

const propertyReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PROPERTIES':
            return action.payload.map(x => ({ ...x, comments: [] }));
        case 'ADD_PROPERTY':
            return [...state, action.payload];
        case 'FETCH_PROPERTY_DETAILS':
        case 'EDIT_PROPERTY':
            return state.map(x => x._id === action.propertyId ? action.payload : x);
        case 'ADD_COMMENT':
            return state.map(x => x._id === action.propertyId ? { ...x, comments: [...x.comments, action.payload] } : x);
        case 'REMOVE_PROPERTY':
            return state.filter(x => x._id !== action.propertyId);
        default:
            return state;
    }
};

export const PropertyProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [properties, dispatch] = useReducer(propertyReducer, []);

    useEffect(() => {
        propertyService.getAll()
            .then(result => {
                const action = {
                    type: 'ADD_PROPERTIES',
                    payload: result
                };

                dispatch(action);
            });
    }, []);

    const selectProperty = (propertyId) => {
        return properties.find(x => x._id === propertyId) || {};
    };

    const fetchPropertyDetails = (propertyId, propertyDetails) => {
        dispatch({
            type: 'FETCH_PROPERTY_DETAILS',
            payload: propertyDetails,
            propertyId,
        })
    }

    const addComment = (propertyId, comment) => {
        dispatch({
            type: 'ADD_COMMENT',
            payload: comment,
            propertyId
        });
        // setpropertys(state => {
        //     const property = state.find(x => x._id == propertyId);

        //     const comments = property.comments || [];
        //     comments.push(comment)

        //     return [
        //         ...state.filter(x => x._id !== propertyId),
        //         { ...property, comments },
        //     ];
        // });
    };

    const propertyAdd = (propertyData) => {
        dispatch({
            type: 'ADD_PROPERTY',
            payload: propertyData,
        });

        navigate('/property-list');
    };

    const propertyEdit = (propertyId, propertyData) => {
        dispatch({
            type: 'EDIT_PROPERTY',
            payload: propertyData,
            propertyId,
        });
    };

    const propertyRemove = (propertyId) => {
        dispatch({
            type: 'REMOVE_PROPERTY',
            propertyId
        })
    }
    return (
        <PropertyContext.Provider value={{
            properties,
            propertyAdd,
            propertyEdit,
            addComment,
            fetchPropertyDetails,
            selectProperty,
            propertyRemove
        }}>
            {children}
        </PropertyContext.Provider>
    );
}

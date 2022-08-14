import { useState } from 'react';

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        const storedData = localStorage.getItem(key);
        
        // console.log(storedData);
        // if (storedData && storedData !== "undefined") {
        //     return JSON.parse(storedData);
        // } else {
        //     return defaultValue;
        // }

        return storedData ? JSON.parse(storedData) : defaultValue;
    });

    const setLocalStorageValue = (newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue));

        setValue(newValue);
    };

    return [
        value,
        setLocalStorageValue,
    ];
}
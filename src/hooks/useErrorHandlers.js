export const useErrorHandlers = (setErrors, values) => {
    const minLength = (e, bound) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: values[e.target.name].length < bound && `This field should be at least ${bound} characters long!`,
        }));
    }

    const isPositive = (e) => {
        let number = Number(e.target.value);

        setErrors(state => ({
            ...state,
            [e.target.name]: number < 0 && 'This field cannot be a negative number!',
        }));
    }

    const isImageUrlValid = (e) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: !/https?:\/\/.*\.(?:png|jpg)/.test(values[e.target.name]) && 'Image url is not valid!',
        }));
    }

    const isSelected = (e) => {
        console.log(e.target);
        setErrors(state => ({
            ...state,
            [e.target.name]: (e.target.value).includes("-") && 'Invalid select!',
        }));
    }

    const requiredValue = (e) => {
        let value = e.target.value;

        setErrors(state => ({
            ...state,
            [e.target.name]: value == "" && 'This field is required!',
        }));
    }

    return {
        'minLength': minLength,
        'isPositive': isPositive, 
        'isImageUrlValid': isImageUrlValid, 
        'isSelected': isSelected, 
        'requiredValue': requiredValue
    };
}
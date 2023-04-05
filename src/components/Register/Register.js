import '../../static/style/Common.css';

import { useContext, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from "../../contexts/AuthContext";

import * as authService from "../../services/authService";
import { useErrorHandlers } from '../../hooks/useErrorHandlers';


const Register = () => {
    const navigate = useNavigate();
    const { userLogin } = useContext(AuthContext);

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            username,
            email,
            password,
            password2
        } = Object.fromEntries(new FormData(e.target));

        authService.register(username, email, password, password2)
            .then(resultRequest => {
                const [authData, response] = resultRequest;

                if (!response.ok) {
                    // Get server errors
                    for (let error of Object.keys(errors)) {
                        const currentError = authData[error];

                        setErrors(state => ({
                            ...state,
                            [error]: currentError,
                        }));
                    }
                } else {
                    // Successful registration and login
                    userLogin(authData);
                    navigate('/');
                }
            })
            .catch(() => {
                navigate('/404');
            });
    }

    // Error Handlers
    const {requiredValue, ...errorHandlers} = useErrorHandlers(setErrors, errors);


    return (
        <div className="register-area background-white">
            <div className="container">
                <div className="col-md-6">
                    <div className="box-for overflow">
                        <div className="col-md-12 col-xs-12 register-blocks">
                            <h2>New account : </h2>

                            <form id="register" onSubmit={onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="username">Username <small>(required)</small></label>
                                    <input type="text" className="form-control" id="username" name="username" placeholder="Enter your username" onBlur={requiredValue} />
                                    {
                                        errors.username &&
                                        <p className="form-control error">
                                            {errors.username}
                                        </p>
                                    }
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email <small>(required)</small></label>
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" onBlur={requiredValue} />
                                    {
                                        errors.email &&
                                        <p className="form-control error">
                                            {errors.email}
                                        </p>
                                    }
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password <small>(required)</small></label>
                                    <input type="password" className="form-control" id="password" name="password" onBlur={requiredValue} />
                                    {
                                        errors.password &&
                                        <p className="form-control error">
                                            {errors.password}
                                        </p>
                                    }
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password2">Confirm Password <small>(required)</small></label>
                                    <input type="password" className="form-control" id="password2" name="password2" onBlur={requiredValue} />
                                    {
                                        errors.password2 &&
                                        <p className="form-control error">
                                            {errors.password2}
                                        </p>
                                    }
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-default">Register</button>
                                </div>
                                <br />
                                <div className="text-center"><p>If you already have an account click <Link to="/login">here</Link></p></div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

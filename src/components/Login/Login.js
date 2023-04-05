import '../../static/style/Common.css';

import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

import * as authService from "../../services/authService";
import { useErrorHandlers } from '../../hooks/useErrorHandlers';


const Login = () => {
    const navigate = useNavigate();
    const { userLogin } = useContext(AuthContext);

    const [errors, setErrors] = useState({
        username: '',
        password: '',
        detail: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            username,
            password,
        } = Object.fromEntries(new FormData(e.target));

        authService.login(username, password)
            .then(resultRequest => {
                const [authData, response] = resultRequest;

                if (!response.ok) {
                    // Ger server errors
                    for (let error of Object.keys(errors)) {
                        let currentError = '';

                        if (authData[error]) {
                            currentError = authData[error];
                        }
                        setErrors(state => ({
                            ...state,
                            [error]: currentError,
                        }));
                    }
                } else {
                    // Successful login
                    userLogin(authData);
                    navigate('/');
                }
            })
            .catch(() => {
                navigate('/404');
            });
    };

    // Error Handlers
    const {requiredValue, ...errorHandlers} = useErrorHandlers(setErrors, errors);


    return (
        <div className="register-area background-white">
            <div className="container">
                <div className="col-md-6">
                    <div className="box-for overflow">
                        <div className="col-md-12 col-xs-12 login-blocks">
                            <h2>Login : </h2>
                            <form id="login" onSubmit={onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="username">Username <small>(required)</small></label>
                                    <input type="text" className="form-control" id="username" name="username" placeholder="Enter your username" onChange={requiredValue} />
                                    {
                                        errors.username &&
                                        <p className="form-control error">
                                            {errors.username}
                                        </p>
                                    }
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password <small>(required)</small></label>
                                    <input type="password" className="form-control" id="password" name="password" onChange={requiredValue} />
                                    {
                                        errors.password &&
                                        <p className="form-control error">
                                            {errors.password}
                                        </p>
                                    }
                                </div>
                                {
                                    errors.detail &&
                                    <p className="form-control error">
                                        {errors.detail}
                                    </p>
                                }
                                <div className="text-center">
                                    <button type="submit" className="btn btn-default"> Login</button>
                                </div>
                                <br />
                                <div className="text-center"><p>If you don't have an account click <Link to="/register">here</Link></p></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

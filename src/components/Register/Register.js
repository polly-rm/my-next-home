import { useContext } from "react";
import { useNavigate } from 'react-router-dom';

import * as authService from "../../services/authService";
import { AuthContext } from "../../contexts/AuthContext";


const Register = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email');
        const password = formData.get('register-password');
        const confirmPassword = formData.get('confirm-password');

        if (password !== confirmPassword) {
            return;
        }

        authService.register(email, password)
            .then(authData => {
                userLogin(authData);
                navigate('/');
            });
    }

    return (
        <div className="register-area" style={{ backgroundColor: "rgb(249, 249, 249)" }}>
            <div className="container">

                <div className="col-md-6">
                    <div className="box-for overflow">
                        <div className="col-md-12 col-xs-12 register-blocks">
                            <h2>New account : </h2>

                            <form id="register" onSubmit={onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="register-password">Password</label>
                                    <input type="password" className="form-control" id="register-password" name="register-password" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirm-password">Confirm Password</label>
                                    <input type="password" className="form-control" id="confirm-password" name="confirm-password" />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-default">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;

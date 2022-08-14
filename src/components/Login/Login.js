import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";

const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            email,
            password,
        } = Object.fromEntries(new FormData(e.target));

        authService.login(email, password)
            .then(authData => {
                userLogin(authData);
                navigate('/');
            })
            .catch(() => {
                navigate('/404');
            });
    };

    return (
        <div className="register-area" style={{backgroundColor: "rgb(249, 249, 249)"}}>
            <div className="container">
                <div className="col-md-6">
                    <div className="box-for overflow">
                        <div className="col-md-12 col-xs-12 login-blocks">
                            <h2>Login : </h2>
                            <form id="login" onSubmit={onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" className="form-control" id="email" name="email" placeholder="Enter your email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" name="password"/>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-default"> Log in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <section id="login-page" className="auth">
        //     <form id="login" onSubmit={onSubmit}>
        //         <div className="container">
        //             <div className="brand-logo" />
        //             <h1>Login</h1>
        //             <label htmlFor="email">Email:</label>
        //             <input
        //                 type="email"
        //                 id="email"
        //                 name="email"
        //                 placeholder="Sokka@gmail.com"
        //             />
        //             <label htmlFor="login-pass">Password:</label>
        //             <input type="password" id="login-password" name="password" />
        //             <input type="submit" className="btn submit" value="Login" />
        //             <p className="field">
        //                 <span>
        //                     If you don't have profile click <a href="#">here</a>
        //                 </span>
        //             </p>
        //         </div>
        //     </form>
        // </section>
    );
}

export default Login;

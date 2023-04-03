import '../../static/style/404.css';
import { Link } from 'react-router-dom';

 
const Unauthorized = () => {
    return (
        <div className="content-area error-page not-found-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
                        <h2 className="">Please, <Link to="/login">Login</Link> to use this functionality!</h2>
                        <p>If you don't have an account, register here:</p>
                        <Link to="/register" className="btn btn-default">Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Unauthorized;
import '../../static/style/404.css';
import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div className="content-area error-page not-found-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
                        <h2 className="error-title">404</h2>
                        <p>Sorry, the page you requested cannot be found</p>
                        <Link to="/" className="btn btn-default">Home</Link>                        
                    </div>
                </div> 
            </div>
        </div> 
    )
}

export default NotFound;
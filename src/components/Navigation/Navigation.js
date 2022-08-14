import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Navigation = () => {
    const { user } = useContext(AuthContext);

    return (
        <nav className="navbar navbar-default ">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="/navigation">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to="/"><img src="assets/img/logo.png" alt="" /></Link>
                </div>

                <div className="collapse navbar-collapse yamm" id="navigation">
                    <div className="button navbar-right">
                        {user.email
                            ? <div id="user">
                                <Link to="/create">
                                    <button className="navbar-btn nav-button wow bounceInRight login" data-wow-delay="0.45s">Publish</button>
                                </Link>
                                <Link to="/logout">
                                    <button className="navbar-btn nav-button wow fadeInRight" data-wow-delay="0.48s">Logout</button>
                                </Link>
                            </div>
                            : <div id="guest">
                                <Link to="/login">
                                    <button className="navbar-btn nav-button wow bounceInRight login" data-wow-delay="0.45s">Login</button>
                                </Link>
                                <Link to="/register">
                                    <button className="navbar-btn nav-button wow fadeInRight" data-wow-delay="0.48s">Register</button>
                                </Link>
                            </div>
                        }
                    </div>
                    <ul className="main-nav nav navbar-nav navbar-right">
                        <li data-wow-delay="0.1s">
                            <Link className="dropdown-toggle active" data-toggle="dropdown" data-hover="dropdown" data-delay="200" to="/">Home</Link>
                        </li>
                        <li className="wow fadeInDown" data-wow-delay="0.2s">
                            <Link className="" to="/property-list">Properties</Link>
                        </li>
                        <li className="wow fadeInDown" data-wow-delay="0.5s">
                            <Link to="/">Contact</Link>
                        </li>

                        {user.email 
                            ? <li className="wow fadeInDown" data-wow-delay="0.3s"><Link to="/">Profile</Link></li>
                            : null
                        }
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
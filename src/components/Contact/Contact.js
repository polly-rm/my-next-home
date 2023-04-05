import '../../static/style/Common.css';


const Contact = () => {

    return (
        <>
            <div className="page-head">
                <div className="container">
                    <div className="row">
                        <div className="page-head-content">
                            <h1 className="page-title">Contact page</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-area recent-property padding-top-40 background-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="" id="contact1">
                                <div className="row">
                                    
                                    <div className="col-sm-4">
                                        <h3><i className="fa fa-map-marker"></i> Address</h3>
                                        <p>
                                            Tsar Asen 18
                                            <br />
                                            Sofia
                                            <br />
                                            <strong>Bulgaria</strong>
                                        </p>
                                    </div>

                                    <div className="col-sm-4">
                                        <h3><i className="fa fa-phone"></i> Call center</h3>
                                        <p className="text-muted">Contact telephone:</p>
                                        <p></p>
                                        <p>
                                            <strong>
                                                0877456789
                                            </strong>
                                        </p>
                                    </div>

                                    <div className="col-sm-4">
                                        <h3><i className="fa fa-envelope"></i> Email</h3>
                                        <p className="text-muted">Please, feel free to contact us via email for any questions</p>
                                        <ul>
                                            <li>
                                                <strong>
                                                    <a href="mailto:">
                                                        info@gmail.com"
                                                    </a>
                                                </strong>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
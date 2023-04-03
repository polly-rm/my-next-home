const WelcomeArea = () => {

    return (
        <div className="Welcome-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 Welcome-entry  col-sm-12">
                        <div className="col-md-5 col-md-offset-2 col-sm-6 col-xs-12">
                            <div className="welcome_text wow fadeInLeft" data-wow-delay="0.3s" data-wow-offset="100">
                                <div className="row">
                                    <div className="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
                                        <h2>GARO ESTATE </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-6 col-xs-12">
                            <div className="welcome_services wow fadeInRight" data-wow-delay="0.3s" data-wow-offset="100">
                                <div className="row">
                        
                                    <div className="col-xs-6 m-padding">
                                        <div className="welcome-estate">
                                            <div className="welcome-icon">
                                                <i className="pe-7s-home pe-4x"></i>
                                            </div>
                                            <h3>Any property</h3>
                                        </div>
                                    </div>

                                    <div className="col-xs-6 m-padding">
                                        <div className="welcome-estate">
                                            <div className="welcome-icon">
                                                <i className="pe-7s-users pe-4x"></i>
                                            </div>
                                            <h3>Registration</h3>
                                        </div>
                                    </div>

                                    <div className="col-xs-12 text-center">
                                        <i className="welcome-circle"></i>
                                    </div>

                                    <div className="col-xs-6 m-padding">
                                        <div className="welcome-estate">
                                            <div className="welcome-icon">
                                                <i className="pe-7s-notebook pe-4x"></i>
                                            </div>
                                            <h3>Easy to use</h3>
                                        </div>
                                    </div>

                                    <div className="col-xs-6 m-padding">
                                        <div className="welcome-estate">
                                            <div className="welcome-icon">
                                                <i className="pe-7s-help2 pe-4x"></i>
                                            </div>
                                            <h3>Any help </h3>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WelcomeArea;
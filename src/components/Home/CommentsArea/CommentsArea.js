const CommentsArea = () => {
    return (
        <div className="testimonial-area recent-property" style={{ backgroundColor: "#FCFCFC", paddingBottom: "15px" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">

                        <h2>Our Customers Said  </h2>
                    </div>
                </div>

                <div className="row">
                    <div className="row testimonial">
                        <div className="col-md-12">
                            <div id="testimonial-slider">
                                <div className="item">
                                    <div className="client-text">
                                        <p>Nulla quis dapibus nisl. Suspendisse llam sed arcu ultried arcu ultricies !</p>
                                        <h4><strong>Ohidul Islam, </strong><i>Web Designer</i></h4>
                                    </div>
                                    <div className="client-face wow fadeInRight" data-wow-delay=".9s">
                                        <img src="assets/img/client-face1.png" alt="" />
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="client-text">
                                        <p>Nulla quis dapibus nisl. Suspendisse llam sed arcu ultried arcu ultricies !</p>
                                        <h4><strong>Ohidul Islam, </strong><i>Web Designer</i></h4>
                                    </div>
                                    <div className="client-face">
                                        <img src="assets/img/client-face2.png" alt="" />
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="client-text">
                                        <p>Nulla quis dapibus nisl. Suspendisse llam sed arcu ultried arcu ultricies !</p>
                                        <h4><strong>Ohidul Islam, </strong><i>Web Designer</i></h4>
                                    </div>
                                    <div className="client-face">
                                        <img src="assets/img/client-face1.png" alt="" />
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="client-text">
                                        <p>Nulla quis dapibus nisl. Suspendisse llam sed arcu ultried arcu ultricies !</p>
                                        <h4><strong>Ohidul Islam, </strong><i>Web Designer</i></h4>
                                    </div>
                                    <div className="client-face">
                                        <img src="assets/img/client-face2.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <br />
        </div>
    );
}

export default CommentsArea;
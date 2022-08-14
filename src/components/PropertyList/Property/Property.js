const Property = () => {
    return (
        <div className="col-sm-6 col-md-4 p0">
            <div className="box-two proerty-item">
                <div className="item-thumb">
                    <a href="property-1.html" ><img src="assets/img/demo/property-1.jpg" alt="" /></a>
                </div>

                <div className="item-entry overflow">
                    <h5><a href="property-1.html"> Super nice villa </a></h5>
                    <div className="dot-hr"></div>
                    <span className="pull-left"><b> Area :</b> 120m </span>
                    <span className="proerty-price pull-right"> $ 300,000</span>
                    <p style={{ display: "none" }}>Suspendisse ultricies Suspendisse ultricies Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium ...</p>
                    <div className="property-icon">
                        <img src="assets/img/icon/bed.png" alt="" />(5)|
                        <img src="assets/img/icon/shawer.png" alt="" />(2)|
                        <img src="assets/img/icon/cars.png" alt="" />(1)
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Property;
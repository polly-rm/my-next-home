import LastPropertyArea from "./LastPropertyArea/LastPropertyArea"

const PropertyArea = ({ properties }) => {
    return (
        <div className="content-area home-area-1 recent-property" style={{ backgroundColor: "#FCFCFC", paddingBottom: "55px" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">

                        <h2>Top submitted property</h2>

                        {properties.length === 0
                            ? <p className="no-properties">No Properties Yet.</p>
                            : null
                        }

                    </div>
                </div>

                <div className="row">
                    <div className="proerty-th">

                        {properties.length > 0
                            ? properties.map(x => <LastPropertyArea key={x._id} property={x} />)
                            : null
                        }

                        {properties.length > 0
                            ?
                            <div className="col-sm-6 col-md-3 p0">
                                <div className="box-tree more-proerty text-center">
                                    <div className="item-tree-icon">
                                        <i className="fa fa-th"></i>
                                    </div>
                                    <div className="more-entry overflow">
                                        <h5><a href="property-1.html" >CAN'T DECIDE ? </a></h5>
                                        <h5 className="tree-sub-ttl">Show all properties</h5>
                                        <button className="btn border-btn more-black" value="All properties">All properties</button>
                                    </div>
                                </div>
                            </div>

                            : null
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}

export default PropertyArea;
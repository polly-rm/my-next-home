import '../../../static/style/Property.css';

import { useContext } from "react";
import { Link } from 'react-router-dom';
import { PropertyContext } from "../../../contexts/PropertyContext";

import LastPropertyArea from "./LastPropertyArea/LastPropertyArea";


const PropertyArea = () => {
    const { properties } = useContext(PropertyContext);


    return (
        <div className="content-area home-area-1 recent-property property-area-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
                        <h2>Top submitted property</h2>

                        {
                            properties.length === 0
                                ? <p className="no-properties">No Properties Yet.</p>
                                : null
                        }
                    </div>
                </div>

                <div className="row">
                    <div className="proerty-th">
                        {
                            properties.length > 0
                                ? properties.slice(0, 7).map(x => <LastPropertyArea key={x.id} property={x} />)
                                : null
                        }
                        {
                            properties.length > 0
                                ?
                                <Link to={`/catalog`}>
                                    <div className="col-sm-6 col-md-3 p0">
                                        <div className="box-tree more-proerty text-center">
                                            <div className="item-tree-icon">
                                                <i className="fa fa-th"></i>
                                            </div>
                                            <div className="more-entry overflow">
                                                <h5><span> CAN'T DECIDE ? </span></h5>
                                                <h5 className="tree-sub-ttl">Show all properties</h5>
                                                <button className="btn border-btn more-black" value="All properties">All properties</button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                : null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PropertyArea;
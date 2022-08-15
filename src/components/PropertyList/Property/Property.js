import { Link } from 'react-router-dom';

const Property = ({ property }) => {
    return (
        <div className="col-sm-6 col-md-4 p0">
            <div className="box-two proerty-item">
                <div className="item-thumb">
                    <Link to={`/property-list/${property._id}`} ><img src={property.image} alt="" /></Link>
                </div>

                <div className="item-entry overflow">
                    <h5><Link to={`/property-list/${property._id}`}> {property.title} </Link></h5>
                    <div className="dot-hr"></div>
                    <span className="pull-left"><b> Area :</b> {property.area} m2 </span>
                    <span className="proerty-price pull-right"> EUR {property.price}</span>
                    <p style={{ display: "none" }}>{property.description}</p>
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
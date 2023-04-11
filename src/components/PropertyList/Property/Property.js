import { Link } from 'react-router-dom';


const Property = ({ property }) => {

    return (
        <div className="col-sm-6 col-md-4 p0">
            <div className="box-two proerty-item">
                <div className="item-thumb">
                    <Link to={`/catalog/details/${property.id}`}><img src={property.imageUrl} alt="" /></Link>
                </div>

                <div className="item-entry overflow">
                    <h5><Link to={`/catalog/details/${property.id}`}> {property.title} </Link></h5>
                    <div className="dot-hr"></div>
                    <span className="pull-left"><b> Area: </b> {property.area ? `${property.area} m2` : '-'} </span>
                    <span className="proerty-price pull-right"> EUR {property.price}</span>

                    <div className="property-icon">
                        <img src="assets/img/icon/bed.png" alt="" />({property.bedroom ? property.bedroom : '-'})|
                        <img src="assets/img/icon/shawer.png" alt="" />({property.bathroom ? property.bathroom : '-'})|
                        <img src="assets/img/icon/cars.png" alt="" />({property.storage ? property.storage : '-'})
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Property;
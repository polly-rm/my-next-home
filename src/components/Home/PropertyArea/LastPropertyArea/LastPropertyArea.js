import { Link } from 'react-router-dom';


const LastPropertyArea = ({ property }) => {
    
    return (
        <div className="col-sm-6 col-md-3 p0">
            <div className="box-two proerty-item">
                <div className="item-thumb">
                <Link to={`/catalog/details/${property.id}`}><img src={property.imageUrl} alt="" /></Link>
                </div>
                <div className="item-entry overflow">
                    <h5><Link to={`/catalog/details/${property.id}`}>{property.title}</Link></h5>
                    <div className="dot-hr"></div>
                    <span className="pull-left"><b>Area: </b>{property.area ? `${property.area} m2` : '-'}</span>
                    <span className="proerty-price pull-right">EUR {property.price}</span>
                </div>
            </div>
        </div>
    );
}

export default LastPropertyArea;
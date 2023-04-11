import '../../../../static/style/Property.css';

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PropertyContext } from '../../../../contexts/PropertyContext';

import * as propertyService from '../../../../services/propertyService';


const MyPropertyItem = ({ property }) => {
    const { propertyRemove } = useContext(PropertyContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const confirmation = window.confirm('Are you sure you want to delete this property?');

        if (confirmation) {
            propertyService.remove(property.id)
                .then(resultRequest => {
                    propertyRemove(property.id);
                });
        }
    };


    return (
        <div className="col-md-4 p0">
            <div className="box-two proerty-item">
                <div className="item-thumb">
                    <Link to={`/catalog/details/${property.id}`} ><img src={property.imageUrl} /></Link>
                </div>

                <div className="item-entry overflow">
                    <h5><Link to={`/catalog/details/${property.id}`}> {property.title} </Link></h5>
                    <div className="dot-hr"></div>
                    <span className="pull-left"><b> Area:</b> {property.area ? `${property.area} m2` : '-'} </span>
                    <span className="proerty-price pull-right"> EUR {property.price}</span>
                    <p className="property-descr-height">{property.description}</p>
                    
                    <div className="property-icon">
                        <img src="assets/img/icon/bed.png" /> ({property.bedroom ? property.bedroom : '-'}) |
                        <img src="assets/img/icon/shawer.png" /> ({property.bathroom ? property.bathroom : '-'}) |
                        <img src="assets/img/icon/cars.png" /> ({property.storage ? property.storage : '-'})

                        <div className="dealer-action pull-right">
                            <Link to={`/catalog/edit/${property.id}`} className="button"> Edit </Link>
                            <a href={void (0)} className="button delete_user_car" onClick={onSubmit}> Delete </a>
                            <Link to={`/catalog/details/${property.id}`} className="button"> View </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default MyPropertyItem;
import '../../static/style/Property.css';

import { useContext } from "react";
import { useSorting } from '../../hooks/useSorting';
import { usePagination } from '../../hooks/usePagination';
import { PropertyContext } from "../../contexts/PropertyContext";

import Property from "./Property/Property";
import Pagination from "../Pagination/Pagination";

import * as propertyService from '../../services/propertyService';


const PropertyList = () => {
    const { properties, setProperties } = useContext(PropertyContext);

    // Sorting
    const [sortByDate, sortByPrice] = useSorting(properties);

    // Pagination Config
    const [nPages, currentPage, setCurrentPage, currentProperties] = usePagination(properties);


    // Filtering
    const onFilterSubmit = (e) => {
        e.preventDefault();

        const {
            keyWord,
            city,
            status,
            type,
            area,
            minPrice,
            maxPrice
        } = Object.fromEntries(new FormData(e.target));
        console.log(city, status);


        propertyService.getAll()
            .then(resultRequest => {
                const [result, response] = resultRequest;
                let filteredProperties = result;

                if (keyWord !== '') {
                    filteredProperties = filteredProperties.filter(x => x.description.includes(keyWord));
                }
                if (status !== '-All-') {
                    filteredProperties = filteredProperties.filter(x => x.status == status);
                }
                if (city !== '-All-') {
                    filteredProperties = filteredProperties.filter(x => x.city == city);
                }
                if (type !== '-All-') {
                    filteredProperties = filteredProperties.filter(x => x.type == type);
                }
                if (area !== '') {
                    filteredProperties = filteredProperties.filter(x => Number(x.area) == Number(area));
                }
                if (minPrice !== '') {
                    filteredProperties = filteredProperties.filter(x => Number(x.price) >= Number(minPrice));
                }
                if (maxPrice !== '') {
                    filteredProperties = filteredProperties.filter(x => Number(x.price) <= Number(maxPrice));
                }

                setProperties(filteredProperties);
            });
    };


    return (
        <div>
            <div className="page-head">
                <div className="container">
                    <div className="row">
                        <div className="page-head-content">
                            <h1 className="page-title">All Properties</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="properties-area recent-property background-white">
                <div className="container">
                    <div className="row">

                        <div className="col-md-3 p0 padding-top-40">
                            <div className="blog-asside-right pr0">
                                <div className="panel panel-default sidebar-menu wow fadeInRight animated" >
                                    <div className="panel-heading">
                                        <h3 className="panel-title">Filter By</h3>
                                    </div>
                                    <div className="panel-body search-widget">
                                        <form className="form-inline" onSubmit={onFilterSubmit}>
                                            <fieldset>
                                                <div className="row">
                                                    <div className="col-xs-12">
                                                        <input type="text" name="keyWord" className="form-control" placeholder="Key word" />
                                                    </div>
                                                </div>
                                            </fieldset>

                                            <fieldset>
                                                <div className="row">
                                                    <div className="col-xs-6">
                                                        <label htmlFor="property-geo">City:</label>
                                                        <select id="lunchBegins" name="city" className="selectpicker show-tick">
                                                            <option>-All-</option>
                                                            <option>Blagoevgrad</option>
                                                            <option>Burgas</option>
                                                            <option>Varna</option>
                                                            <option>Veliko Turnovo</option>
                                                            <option>Vidin</option>
                                                            <option>Vratsa</option>
                                                            <option>Gabrovo</option>
                                                            <option>Dobrich</option>
                                                            <option>Kurdzhali</option>
                                                            <option>Kjustendil</option>
                                                            <option>Lovech</option>
                                                            <option>Montana</option>
                                                            <option>Pazardzhik</option>
                                                            <option>Pernik</option>
                                                            <option>Pleven</option>
                                                            <option>Plovdiv</option>
                                                            <option>Razgrad</option>
                                                            <option>Ruse</option>
                                                            <option>Silistra</option>
                                                            <option>Sliven</option>
                                                            <option>Smolqn</option>
                                                            <option>Sofia</option>
                                                            <option>Stara Zagora</option>
                                                            <option>Turgovishte</option>
                                                            <option>Haskovo</option>
                                                            <option>Shumen</option>
                                                            <option>Yambol</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-xs-6">
                                                        <label htmlFor="property-geo">Status:</label>
                                                        <select id="basic" name="status" className="selectpicker show-tick form-control">
                                                            <option>-All-</option>
                                                            <option>Rent </option>
                                                            <option>Sale</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </fieldset>

                                            <fieldset className="padding-5">
                                                <div className="row">
                                                    <div className="col-xs-6">
                                                        <label htmlFor="property-geo">Type:</label>
                                                        <select id="type" name="type" className="selectpicker show-tick form-control">
                                                            <option>-All-</option>
                                                            <option>Apartment</option>
                                                            <option>Studio</option>
                                                            <option>House</option>
                                                            <option>Villa</option>
                                                            <option>Office</option>
                                                            <option>Garage</option>
                                                            <option>Storage</option>
                                                        </select>
                                                        <br />
                                                    </div>
                                                    <div className="col-xs-6">
                                                        <label htmlFor="property-geo">Property area (m2) :</label>
                                                        <input type="text" name="area" className="span2" data-slider-min="0"
                                                            data-slider-max="600" data-slider-step="5"
                                                            data-slider-value="[50,450]" id="property-geo" /><br />
                                                    </div>
                                                </div>
                                            </fieldset>

                                            <fieldset className="padding-5">
                                                <div className="row">
                                                    <div className="col-xs-6">
                                                        <label htmlFor="price-range">Min price (EUR) :</label>
                                                        <input type="text" name="minPrice" className="span2" data-slider-min="0"
                                                            data-slider-max="600" data-slider-step="5"
                                                            data-slider-value="[0,450]" id="price-range" /><br />
                                                    </div>
                                                    <div className="col-xs-6">
                                                        <label htmlFor="price-range">Max price (EUR) :</label>
                                                        <input type="text" name="maxPrice" className="span2" data-slider-min="0"
                                                            data-slider-max="600" data-slider-step="5"
                                                            data-slider-value="[0,450]" id="price-range" /><br />
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <br />
                                            <button type="submit" className="btn btn-default">Search</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-9  pr0 padding-top-40 properties-page">
                            {
                                properties.length > 0 &&

                                <div className="col-md-12 clear">
                                    <div className="col-xs-10 page-subheader sorting pl0">
                                        <ul className="sort-by-list">
                                            <li className="active asc">
                                                <a href="#!" className="order_by_date" data-orderby="property_date" data-order="ASC" onClick={sortByDate}>
                                                    Property Date <i className="fa fa-sort-amount-asc"></i>
                                                </a>
                                            </li>
                                            <li className="asc">
                                                <a href="#!" className="order_by_price" data-orderby="property_price" data-order="DESC" onClick={sortByPrice}>
                                                    Property Price <i className="fa fa-sort-numeric-asc"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            }
                            <div className="col-md-12 clear">
                                <div id="list-type" className="proerty-th">
                                    {properties.length > 0
                                        ? currentProperties.map(x => <Property key={x.id} property={x} />)
                                        : <h3 className="no-properties text-center">No properties yet</h3>
                                    }
                                </div>
                            </div>
                            {
                                properties.length > 0 && <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PropertyList;
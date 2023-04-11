import '../../../static/style/Property.css';

import { useContext } from "react";
import { useSorting } from '../../../hooks/useSorting';
import { usePagination } from '../../../hooks/usePagination';

import { PropertyContext } from "../../../contexts/PropertyContext";
import { AuthContext } from "../../../contexts/AuthContext";

import MyPropertyItem from "./MyPropertyItem/MyPropertyItem";
import Pagination from "../../Pagination/Pagination";


const MyPropertiesList = () => {
    const { user } = useContext(AuthContext);
    const { properties } = useContext(PropertyContext);

    // Sorting
    const [sortByDate, sortByPrice] = useSorting(properties);

    const userProperties = properties.filter(x => user.id == x.user)

    // Pagination Config
    const [nPages, currentPage, setCurrentPage, currentProperties] = usePagination(userProperties);
    

    return (
        <div>
            <div className="page-head">
                <div className="container">
                    <div className="row">
                        <div className="page-head-content">
                            <h1 className="page-title">My Properties</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-area recent-property background-white">
                <div className="container">
                    <div>
                        <div className="col-md-12 padding-top-40 properties-page user-properties">
                            {
                                userProperties.length > 0 &&

                                <div className="section">
                                    <div className="page-subheader sorting pl0 pr-10">
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

                            <div className="section">
                                <div id="list-type" className="proerty-th-list">
                                    {
                                        userProperties.length > 0
                                            ? currentProperties.map(x => <MyPropertyItem key={x.id} property={x} />)
                                            : <h3 className="no-properties text-center">No properties yet</h3>
                                    }
                                </div>
                            </div>
                            {
                                userProperties.length > 0 && <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyPropertiesList;
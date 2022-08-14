const { default: Property } = require("./Property/Property")

const PropertyList = () => {
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

            <div className="properties-area recent-property" style={{ backgroundColor: "/FFF" }}>
                <div className="container">
                    <div className="row">

                        <div className="col-md-3 p0 padding-top-40">
                            <div className="blog-asside-right pr0">
                                <div className="panel panel-default sidebar-menu wow fadeInRight animated" >
                                    <div className="panel-heading">
                                        <h3 className="panel-title">Smart search</h3>
                                    </div>
                                    <div className="panel-body search-widget">
                                        <form action="" className=" form-inline">
                                            <fieldset>
                                                <div className="row">
                                                    <div className="col-xs-12">
                                                        <input type="text" className="form-control" placeholder="Key word" />
                                                    </div>
                                                </div>
                                            </fieldset>

                                            <fieldset>
                                                <div className="row">
                                                    <div className="col-xs-6">

                                                        <select id="lunchBegins" className="selectpicker show-tick" data-live-search="true" data-live-search-style="begins" title="Select Your City">
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

                                                        <select id="basic" className="selectpicker show-tick form-control">
                                                            <option> -Status- </option>
                                                            <option>Rent </option>
                                                            <option>Sale</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </fieldset>

                                            <fieldset className="padding-5">
                                                <div className="row">
                                                    <div className="col-xs-6">
                                                        <label htmlFor="property-geo">Type :</label>
                                                        <input type="text" className="span2" data-slider-min="0"
                                                            data-slider-max="600" data-slider-step="5"
                                                            data-slider-value="[250,450]" id="min-bed" /><br />
                                                    </div>
                                                    <div className="col-xs-6">
                                                        <label htmlFor="property-geo">Property area (m2) :</label>
                                                        <input type="text" className="span2" data-slider-min="0"
                                                            data-slider-max="600" data-slider-step="5"
                                                            data-slider-value="[50,450]" id="property-geo" /><br />
                                                    </div>
                                                </div>
                                            </fieldset>

                                            <fieldset className="padding-5">
                                                <div className="row">
                                                    <div className="col-xs-6">
                                                        <label htmlFor="price-range">Min price (EUR) :</label>
                                                        <input type="text" className="span2" data-slider-min="0"
                                                            data-slider-max="600" data-slider-step="5"
                                                            data-slider-value="[0,450]" id="price-range" /><br />
                                                    </div>
                                                    <div className="col-xs-6">
                                                        <label htmlFor="price-range">Max price (EUR) :</label>
                                                        <input type="text" className="span2" data-slider-min="0"
                                                            data-slider-max="600" data-slider-step="5"
                                                            data-slider-value="[0,450]" id="price-range" /><br />
                                                    </div>
                                                </div>
                                            </fieldset>

                                            {/* <fieldset className="padding-5">
                                                <div className="row">
                                                    <div className="col-xs-6">
                                                        <div className="checkbox">
                                                            <label> <input type="checkbox" checked /> Fire Place</label>
                                                        </div>
                                                    </div>

                                                    <div className="col-xs-6">
                                                        <div className="checkbox">
                                                            <label> <input type="checkbox" /> Dual Sinks</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>

                                            <fieldset className="padding-5">
                                                <div className="row">
                                                    <div className="col-xs-6">
                                                        <div className="checkbox">
                                                            <label> <input type="checkbox" checked /> Swimming Pool</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6">
                                                        <div className="checkbox">
                                                            <label> <input type="checkbox" checked /> 2 Stories </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>

                                            <fieldset className="padding-5">
                                                <div className="row">
                                                    <div className="col-xs-6">
                                                        <div className="checkbox">
                                                            <label><input type="checkbox" /> Laundry Room </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6">
                                                        <div className="checkbox">
                                                            <label> <input type="checkbox" /> Emergency Exit</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>

                                            <fieldset className="padding-5">
                                                <div className="row">
                                                    <div className="col-xs-6">
                                                        <div className="checkbox">
                                                            <label>  <input type="checkbox" checked /> Jog Path </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6">
                                                        <div className="checkbox">
                                                            <label>  <input type="checkbox" /> 26' Ceilings </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>

                                            <fieldset className="padding-5">
                                                <div className="row">
                                                    <div className="col-xs-12">
                                                        <div className="checkbox">
                                                            <label>  <input type="checkbox" /> Hurricane Shutters </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>

                                            <fieldset >
                                                <div className="row">
                                                    <div className="col-xs-12">
                                                        <input className="button btn largesearch-btn" type="submit" />
                                                    </div>
                                                </div>
                                            </fieldset> */}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-9  pr0 padding-top-40 properties-page">
                            <div className="col-md-12 clear">
                                <div className="col-xs-10 page-subheader sorting pl0">
                                    <ul className="sort-by-list">
                                        <li className="active">
                                            <a href={void(0)} className="order_by_date" data-orderby="property_date" data-order="ASC">
                                                Property Date <i className="fa fa-sort-amount-asc"></i>
                                            </a>
                                        </li>
                                        <li className="">
                                            <a href={void(0)} className="order_by_price" data-orderby="property_price" data-order="DESC">
                                                Property Price <i className="fa fa-sort-numeric-desc"></i>
                                            </a>
                                        </li>
                                    </ul>

                                    <div className="items-per-page">
                                        <label htmlFor="items_per_page"><b>Property per page :</b></label>
                                        <div className="sel">
                                            <select id="items_per_page" name="per_page">
                                                <option value="3">3</option>
                                                <option value="6">6</option>
                                                <option value="9">9</option>
                                                <option selected="selected" value="12">12</option>
                                                <option value="15">15</option>
                                                <option value="30">30</option>
                                                <option value="45">45</option>
                                                <option value="60">60</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xs-2 layout-switcher">
                                    <a className="layout-list" href={void(0)}> <i className="fa fa-th-list"></i>  </a>
                                    <a className="layout-grid active" href={void(0)}> <i className="fa fa-th"></i> </a>
                                </div>
                            </div>

                            <div className="col-md-12 clear">
                                <div id="list-type" className="proerty-th">
                                    <Property />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="pull-right">
                                    <div className="pagination">
                                        <ul>
                                            <li><a href={void(0)}>Prev</a></li>
                                            <li><a href={void(0)}>1</a></li>
                                            <li><a href={void(0)}>2</a></li>
                                            <li><a href={void(0)}>3</a></li>
                                            <li><a href={void(0)}>4</a></li>
                                            <li><a href={void(0)}>Next</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PropertyList;
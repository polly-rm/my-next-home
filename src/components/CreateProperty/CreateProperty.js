import { useContext, useState } from 'react';

import { PropertyContext } from '../../contexts/PropertyContext';
import { AuthContext } from '../../contexts/AuthContext';
import * as propertyService from '../../services/propertyService';

const CreateProperty = () => {
    const { user } = useContext(AuthContext);
    const { propertyAdd } = useContext(PropertyContext);

    const [values, setValues] = useState({
        title: "",
        price: "",
        image: "",
        city: "",
        address: "",
        description: "",
        type: "",
        status: "",
        floor: "",
        storey: "",
        area: "",
        yardArea: "",
        bedroom: "",
        bathroom: "",
        storage: "",
        parking: "",
        basement: "",
        view: "",
        tac: "",
        userId: user._id,
    })

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.type == "checkbox" ? e.target.checked : e.target.value
        }));
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const propertyData = Object.fromEntries(new FormData(e.target));

        propertyService.create(propertyData)
            .then(result => {
                propertyAdd(result)
            });
    };

    return (
        <div>
            <div className="page-head">
                <div className="container">
                    <div className="row">
                        <div className="page-head-content">
                            <h1 className="page-title">Submit new property</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-area submit-property" style={{ backgroundColor: "#FCFCFC" }}>&nbsp;
                <div className="container">
                    <div className="clearfix" >
                        <div className="wizard-container">

                            <div className="wizard-card ct-wizard-orange" id="wizardProperty">
                                <form id="create" onSubmit={onSubmit}>
                                    <div className="wizard-header">
                                        <h3>
                                            <b>Submit</b> YOUR PROPERTY <br />
                                        </h3>
                                    </div>

                                    <ul>
                                        <li><a href="#step1" data-toggle="tab">Step 1 </a></li>
                                        <li><a href="#step2" data-toggle="tab">Step 2 </a></li>
                                        <li><a href="#step3" data-toggle="tab">Finished </a></li>
                                    </ul>

                                    <div className="tab-content">

                                        <div className="tab-pane" id="step1">
                                            <div className="row p-b-15  ">
                                                <h4 className="info-text"> Basic information</h4>
                                                {/* <div className="col-sm-4 col-sm-offset-1">
                                                    <div className="picture-container">
                                                        <div className="picture">
                                                            <img src="assets/img/default-property.jpg" className="picture-src" id="wizardPicturePreview" title="" alt="" />
                                                            <input type="url" id="wizard-picture" name="basic-picture"/>
                                                        </div>
                                                    </div>
                                                </div> */}
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="title">Property title <small>(required)</small></label>
                                                        <input name="title" type="text" className="form-control" placeholder="Two-bedroom apartment ..." onChange={changeHandler} value={values.title} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="price">Property price <small>(required)</small></label>
                                                        <input name="price" type="number" className="form-control" placeholder="100000" min={1} onChange={changeHandler} value={values.price} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="image">Photo URL <small>(required)</small></label>
                                                        <input name="image" type="url" className="form-control" placeholder="https://images.picture.jpg" onChange={changeHandler} value={values.image} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="city">City/town <small>(required)</small></label>
                                                        <input name="city" type="text" className="form-control" placeholder="Two-bedroom apartment ..." onChange={changeHandler} value={values.city} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="address">Address <small>(required)</small></label>
                                                        <input name="address" type="text" className="form-control" placeholder="Blvd Tsarigradsko Shose 104 ..." onChange={changeHandler} value={values.address} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-pane" id="step2">
                                            <h4 className="info-text"> Property Details </h4>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="col-sm-12">
                                                        <div className="form-group">
                                                            <label htmlFor="description">Property Description <small>(required)</small>:</label>
                                                            <input type="textarea" id="description" name="description" className="form-control" onChange={changeHandler} value={values.description} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-sm-12">
                                                    <div className="col-sm-3">
                                                        <div className="form-group">
                                                            <label htmlFor='type'>Property Type  <small>(required)</small>:</label>
                                                            <select id="type"
                                                                name="type"
                                                                className="selectpicker show-tick form-control"
                                                                multiple={false} onChange={changeHandler} value={values.type}>
                                                                <option> -Type- </option>
                                                                <option>Apartment</option>
                                                                <option>Studio</option>
                                                                <option>House</option>
                                                                <option>Villa</option>
                                                                <option>Office</option>
                                                                <option>Garage</option>
                                                                <option>Storage</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="form-group">
                                                            <label htmlFor='status'>Property Status  <small>(required)</small>:</label>
                                                            <select id="propertyStatus"
                                                                name="status"
                                                                className="selectpicker show-tick form-control"
                                                                multiple={false} onChange={changeHandler} value={values.status}>
                                                                <option> -Status- </option>
                                                                <option>Rent </option>
                                                                <option>Sale</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="form-group">
                                                            <label htmlFor="floor">Floors :</label>
                                                            <input name="floor" type="number" className="form-control" min={1} onChange={changeHandler} value={values.floor} />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="form-group">
                                                            <label htmlFor="storey">Storey :</label>
                                                            <input name="storey" type="number" className="form-control" min={1} onChange={changeHandler} value={values.storey} />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="form-group">
                                                            <label htmlFor="area">Area (m2) :</label>
                                                            <input name="area" type="number" className="form-control" min={0} onChange={changeHandler} value={values.area} />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="form-group">
                                                            <label htmlFor="yardArea">Yard Area (m2) :</label>
                                                            <input name="yardArea" type="number" className="form-control" min={0} onChange={changeHandler} value={values.yardArea} />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="form-group">
                                                            <label htmlFor="bedroom">Bedrooms (count) :</label>
                                                            <input name="bedroom" type="number" className="form-control" min={0} onChange={changeHandler} value={values.bedroom} />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="form-group">
                                                            <label htmlFor="bathroom">Bathrooms (count) :</label>
                                                            <input name="bathroom" type="number" className="form-control" min={0} onChange={changeHandler} value={values.bathroom} />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="form-group">
                                                            <label htmlFor="storage">Storages (count) :</label>
                                                            <input name="storage" type="number" className="form-control" min={0} onChange={changeHandler} value={values.storage} />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="form-group">
                                                            <label htmlFor='parking'>Parking  :</label>
                                                            <select id="parking"
                                                                name="parking"
                                                                className="selectpicker show-tick form-control"
                                                                multiple={false} onChange={changeHandler} value={values.parking}>
                                                                <option> -Select- </option>
                                                                <option>Yes</option>
                                                                <option>No</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="form-group">
                                                            <label htmlFor='basement'>Basement  :</label>
                                                            <select id="basement"
                                                                name="basement"
                                                                className="selectpicker show-tick form-control"
                                                                multiple={false} onChange={changeHandler} value={values.parking}>
                                                                <option> -Select- </option>
                                                                <option>Yes</option>
                                                                <option>No</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="form-group">
                                                            <label htmlFor="view">View :</label>
                                                            <input name="view" type="text" className="form-control" onChange={changeHandler} value={values.view} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <br />
                                            </div>
                                        </div>

                                        <div className="tab-pane" id="step3">
                                            <h4 className="info-text"> Publish </h4>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="">
                                                        <p>
                                                            <label><strong>Terms and Conditions</strong></label>
                                                            <br />
                                                            By accessing or using  GARO ESTATE services, such as
                                                            posting your property advertisement with your personal
                                                            information on our website you agree to the
                                                            collection, use and disclosure of your personal information
                                                            in the legal proper manner.
                                                        </p>

                                                        <div className="checkbox">
                                                            <label htmlFor="tac"><strong>Accept terms and conitions</strong></label>
                                                            <input type="checkbox" name="tac" id="tac" onChange={changeHandler} checked={values.tac} />
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="wizard-footer">
                                                <div className="pull-right">
                                                    <input type='submit' className='btn btn-finish btn-primary' name='finish' value='Finish' />
                                                </div>
                                                <div className="hide">
                                                    <label htmlFor="userId">User <small>(required)</small></label>
                                                    <input name="userId" type="text" defaultValue={values.userId} />
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>

                                        <div className="tab-pane" id="step4">
                                            <h4 className="info-text">Give us somme images and videos ? </h4>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="property-images">Chose Images :</label>
                                                        {/* <input className="form-control" type="file" id="property-images" /> */}
                                                        <p className="help-block">Select multipel images for your property.</p>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="property-video">Property video :</label>
                                                        {/* <input className="form-control" placeholder="http://www.youtube.com, http://vimeo.com" name="property_video" type="text" /> */}
                                                    </div>

                                                    <div className="form-group">
                                                        {/* <input className="form-control" placeholder="http://www.youtube.com, http://vimeo.com" name="property_video" type="text" /> */}
                                                    </div>

                                                    <div className="form-group">
                                                        {/* <input className="form-control" placeholder="http://www.youtube.com, http://vimeo.com" name="property_video" type="text" /> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateProperty;
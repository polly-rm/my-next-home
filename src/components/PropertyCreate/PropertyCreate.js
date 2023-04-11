import '../../static/style/Property.css';

import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { PropertyContext } from '../../contexts/PropertyContext';

import Unauthorized from '../Unauthorized/Unauthorized';
import * as propertyService from '../../services/propertyService';
import { useErrorHandlers } from '../../hooks/useErrorHandlers';


const PropertyCreate = () => {
    const { user } = useContext(AuthContext);
    const { propertyAdd } = useContext(PropertyContext);

    const [errors, setErrors] = useState({
        title: '',
        price: '',
        imageUrl: '',
        city: '',
        address: '',
        description: '',
        type: '',
        status: '',
        floor: '',
        storey: '',
        area: '',
        yardArea: '',
        bedroom: '',
        bathroom: '',
        storage: '',
        parking: '',
        basement: '',
        view: '',
    });
    const [values, setValues] = useState({
        title: '',
        price: '',
        imageUrl: '',
        city: '',
        address: '',
        description: '',
        type: '',
        status: '',
        floor: '',
        storey: '',
        area: '',
        yardArea: '',
        bedroom: '',
        bathroom: '',
        storage: '',
        parking: '',
        basement: '',
        view: '',
        user_id: user.id,
    });

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const propertyData = Object.fromEntries(new FormData(e.target));

        propertyService.create(propertyData)
            .then(resultRequest => {
                const [result, response] = resultRequest;

                // Get server errors
                if (!response.ok) {
                    for (let error of Object.keys(errors)) {
                        const currentError = result[error];

                        setErrors(state => ({
                            ...state,
                            [error]: currentError,
                        }));
                    }
                } else {
                    propertyAdd(result);
                }

            });
    };

    // Error Handlers
    const {minLength, isPositive, isImageUrlValid, isSelected} = useErrorHandlers(setErrors, values);

    const isFormValid = !Object.values(errors).some(x => x)
        && values['type'] !== '-Type-'
        && values['status'] !== '-Status-'
        && values['title'] && values['price']
        && values['imageUrl'] && values['city']
        && values['address'] && values['description']
        && values['type']
        && values['status']
        && values['tac'] === "on"


    return (
        <>
            {
                user.id
                    ?
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

                        <div className="content-area submit-property background-white">&nbsp;
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
                                                            <div className="col-sm-6">
                                                                <div className="form-group">
                                                                    <label htmlFor="title">Property title <small>(required)</small></label>
                                                                    <input name="title" type="text" className="form-control" placeholder="Two-bedroom apartment ..." value={values.title} onChange={changeHandler} onBlur={(e) => minLength(e, 3)} />
                                                                    {
                                                                        errors.title &&
                                                                        <p className="form-control error">
                                                                            {errors.title}
                                                                        </p>
                                                                    }
                                                                </div>
                                                                <div className="form-group">
                                                                    <label htmlFor="price">Property price BGN <small>(required)</small></label>
                                                                    <input name="price" type="number" className="form-control" placeholder="100000" min={1} value={values.price} onChange={changeHandler} onBlur={isPositive} />
                                                                    {
                                                                        errors.price &&
                                                                        <p className="form-control error">
                                                                            {errors.price}
                                                                        </p>
                                                                    }
                                                                </div>
                                                                <div className="form-group">
                                                                    <label htmlFor="imageUrl">Photo URL <small>(required)</small></label>
                                                                    <input name="imageUrl" type="url" className="form-control" placeholder="https://images.picture.jpg" value={values.imageUrl} onChange={changeHandler} onBlur={isImageUrlValid} />
                                                                    {
                                                                        errors.imageUrl &&
                                                                        <p className="form-control error">
                                                                            {errors.imageUrl}
                                                                        </p>
                                                                    }
                                                                </div>
                                                                <div className="form-group">
                                                                    <label htmlFor="city">City/town <small>(required)</small></label>
                                                                    <input name="city" type="text" className="form-control" placeholder="Two-bedroom apartment ..." value={values.city} onChange={changeHandler} onBlur={(e) => minLength(e, 3)} />
                                                                    {
                                                                        errors.city &&
                                                                        <p className="form-control error">
                                                                            {errors.city}
                                                                        </p>
                                                                    }
                                                                </div>
                                                                <div className="form-group">
                                                                    <label htmlFor="address">Address <small>(required)</small></label>
                                                                    <input name="address" type="text" className="form-control" placeholder="Blvd Tsarigradsko Shose 104 ..." value={values.address} onChange={changeHandler} onBlur={(e) => minLength(e, 3)} />
                                                                    {
                                                                        errors.address &&
                                                                        <p className="form-control error">
                                                                            {errors.address}
                                                                        </p>
                                                                    }
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
                                                                        <input type="textarea" id="description" name="description" className="form-control" value={values.description} onChange={changeHandler} onBlur={(e) => minLength(e, 3)} />
                                                                        {
                                                                            errors.description &&
                                                                            <p className="form-control error">
                                                                                {errors.description}
                                                                            </p>
                                                                        }
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
                                                                            multiple={false}
                                                                            value={values.type} onChange={e => { changeHandler(e); isSelected(e) }}>
                                                                            <option>-Type-</option>
                                                                            <option>Apartment</option>
                                                                            <option>Studio</option>
                                                                            <option>House</option>
                                                                            <option>Villa</option>
                                                                            <option>Office</option>
                                                                            <option>Garage</option>
                                                                            <option>Storage</option>
                                                                        </select>
                                                                        {
                                                                            errors.type &&
                                                                            <p className="form-control error">
                                                                                {errors.type}
                                                                            </p>
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor='status'>Property Status  <small>(required)</small>:</label>
                                                                        <select id="propertyStatus"
                                                                            name="status"
                                                                            className="selectpicker show-tick form-control"
                                                                            multiple={false}
                                                                            value={values.status} onChange={e => { changeHandler(e); isSelected(e) }}>
                                                                            <option>-Status-</option>
                                                                            <option>Rent </option>
                                                                            <option>Sale</option>
                                                                        </select>
                                                                        {
                                                                            errors.status &&
                                                                            <p className="form-control error">
                                                                                {errors.status}
                                                                            </p>
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="floor">Floors :</label>
                                                                        <input name="floor" type="number" className="form-control" min={1} value={values.floor} onChange={changeHandler} onBlur={isPositive} />
                                                                        {
                                                                            errors.floor &&
                                                                            <p className="form-control error">
                                                                                {errors.floor}
                                                                            </p>
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="storey">Storey :</label>
                                                                        <input name="storey" type="number" className="form-control" min={1} value={values.storey} onChange={changeHandler} onBlur={isPositive} />
                                                                        {
                                                                            errors.storey &&
                                                                            <p className="form-control error">
                                                                                {errors.storey}
                                                                            </p>
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="area">Area (m2) :</label>
                                                                        <input name="area" type="number" className="form-control" min={0} value={values.area} onChange={changeHandler} onBlur={isPositive} />
                                                                        {
                                                                            errors.area &&
                                                                            <p className="form-control error">
                                                                                {errors.area}
                                                                            </p>
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="yardArea">Yard Area (m2) :</label>
                                                                        <input name="yardArea" type="number" className="form-control" min={0} value={values.yardArea} onChange={changeHandler} onBlur={isPositive} />
                                                                        {
                                                                            errors.yardArea &&
                                                                            <p className="form-control error">
                                                                                {errors.yardArea}
                                                                            </p>
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="bedroom">Bedrooms (count) :</label>
                                                                        <input name="bedroom" type="number" className="form-control" min={0} value={values.bedroom} onChange={changeHandler} onBlur={isPositive} />
                                                                        {
                                                                            errors.bedroom &&
                                                                            <p className="form-control error">
                                                                                {errors.bedroom}
                                                                            </p>
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="bathroom">Bathrooms (count) :</label>
                                                                        <input name="bathroom" type="number" className="form-control" min={0} value={values.bathroom} onChange={changeHandler} onBlur={isPositive} />
                                                                        {
                                                                            errors.bathroom &&
                                                                            <p className="form-control error">
                                                                                {errors.bathroom}
                                                                            </p>
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="storage">Storages (count) :</label>
                                                                        <input name="storage" type="number" className="form-control" min={0} value={values.storage} onChange={changeHandler} onBlur={isPositive} />
                                                                        {
                                                                            errors.storage &&
                                                                            <p className="form-control error">
                                                                                {errors.storage}
                                                                            </p>
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor='parking'>Parking  :</label>
                                                                        <select id="parking"
                                                                            name="parking"
                                                                            className="selectpicker show-tick form-control"
                                                                            multiple={false}
                                                                            value={values.parking} onChange={changeHandler}>
                                                                            <option>-Select-</option>
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
                                                                            multiple={false}
                                                                            value={values.basement} onChange={changeHandler}>
                                                                            <option>-Select-</option>
                                                                            <option>Yes</option>
                                                                            <option>No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="view">View :</label>
                                                                        <input name="view" type="text" className="form-control" value={values.view} onChange={changeHandler} />
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
                                                                        <input className="tac" type="checkbox" name="tac" id="tac" onChange={changeHandler} />
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="wizard-footer">
                                                            <div className="pull-right">
                                                                <input disabled={!isFormValid} type='submit' className='btn btn-finish btn-primary' name='finish' value='Finish' />
                                                                {!isFormValid && <div className="red">Please fill all required fields!</div>}
                                                            </div>
                                                            <div className="hide">
                                                                <label htmlFor="user_id">User <small>(required)</small></label>
                                                                <input name="user_id" type="text" defaultValue={values.user_id} />
                                                            </div>
                                                            <div className="clearfix"></div>
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
                    :
                    <Unauthorized />
            }
        </>
    );
}

export default PropertyCreate;
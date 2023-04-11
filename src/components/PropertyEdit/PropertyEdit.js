import '../../static/style/Property.css';

import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { PropertyContext } from '../../contexts/PropertyContext';

import NotFound from '../404/404';
import * as propertyService from '../../services/propertyService';
import { useErrorHandlers } from '../../hooks/useErrorHandlers';


const EditProperty = () => {
    const { user } = useContext(AuthContext);
    const { propertyEdit } = useContext(PropertyContext);
    const { propertyId } = useParams();

    const [currentProperty, setCurrentProperty] = useState({});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        propertyService.getOne(propertyId)
            .then(resultRequest => {
                const [propertyData, response] = resultRequest;
                setCurrentProperty(propertyData);
            })
    }, [propertyId]);

    const changeHandler = (e) => {
        setCurrentProperty(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const propertyData = Object.fromEntries(new FormData(e.target));

        propertyService.edit(propertyId, propertyData)
            .then(resultRequest => {
                const [result, response] = resultRequest;
                propertyEdit(propertyId, result);
            });
    };

    // Errors Handlers
    const {minLength, isPositive, isImageUrlValid, isSelected} = useErrorHandlers(setErrors, currentProperty);

    const isFormValid = !Object.values(errors).some(x => x)
        && currentProperty['type'] !== '-Type-'
        && currentProperty['status'] !== '-Status-'
        && currentProperty['title'] && currentProperty['price']
        && currentProperty['imageUrl'] && currentProperty['city']
        && currentProperty['address'] && currentProperty['description']
        && currentProperty['type']
        && currentProperty['status']


    return (
        <>
            {currentProperty.user == user.id
                ?
                <div>
                    <div className="page-head">
                        <div className="container">
                            <div className="row">
                                <div className="page-head-content">
                                    <h1 className="page-title">Edit your property</h1>
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
                                                    <b>Edit</b> YOUR PROPERTY <br />
                                                </h3>
                                            </div>

                                            <div className="tab-content">

                                                <div className="" id="step1">
                                                    <div className="row p-b-15  ">
                                                        <h4 className="info-text"> Basic information</h4>
                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <label htmlFor="title">Property title <small>(required)</small></label>
                                                                <input name="title" type="text" className="form-control" placeholder="Two-bedroom apartment ..." onChange={changeHandler} defaultValue={currentProperty.title} onBlur={(e) => minLength(e, 3)} />
                                                                {
                                                                    errors.title &&
                                                                    <p className="form-control error">
                                                                        {errors.title}
                                                                    </p>
                                                                }
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="price">Property price <small>(required)</small></label>
                                                                <input name="price" type="number" className="form-control" placeholder="100000" min={1} onChange={changeHandler} defaultValue={currentProperty.price} onBlur={isPositive} />
                                                                {
                                                                    errors.price &&
                                                                    <p className="form-control error">
                                                                        {errors.price}
                                                                    </p>
                                                                }
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="imageUrl">Photo URL <small>(required)</small></label>
                                                                <input name="imageUrl" type="url" className="form-control" placeholder="https://images.picture.jpg" onChange={changeHandler} defaultValue={currentProperty.imageUrl} onBlur={isImageUrlValid} />
                                                                {
                                                                    errors.imageUrl &&
                                                                    <p className="form-control error">
                                                                        {errors.imageUrl}
                                                                    </p>
                                                                }
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="city">City/town <small>(required)</small></label>
                                                                <input name="city" type="text" className="form-control" placeholder="Two-bedroom apartment ..." onChange={changeHandler} defaultValue={currentProperty.city} onBlur={(e) => minLength(e, 3)} />
                                                                {
                                                                    errors.city &&
                                                                    <p className="form-control error">
                                                                        {errors.city}
                                                                    </p>
                                                                }
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="address">Address <small>(required)</small></label>
                                                                <input name="address" type="text" className="form-control" placeholder="Blvd Tsarigradsko Shose 104 ..." onChange={changeHandler} defaultValue={currentProperty.address} onBlur={(e) => minLength(e, 3)} />
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

                                                <div className="" id="step2">
                                                    <h4 className="info-text"> Property Details </h4>
                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <div className="col-sm-12">
                                                                <div className="form-group">
                                                                    <label htmlFor="description">Property Description <small>(required)</small>:</label>
                                                                    <input type="textarea" id="description" name="description" className="form-control" onChange={changeHandler} defaultValue={currentProperty.description} onBlur={(e) => minLength(e, 3)} />
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
                                                                        multiple={false} defaultValue={currentProperty.type} onChange={e => { changeHandler(e); isSelected(e) }}>
                                                                        <option> -Type- </option>
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
                                                                        multiple={false} onChange={e => { changeHandler(e); isSelected(e) }} defaultValue={currentProperty.status}>
                                                                        <option> -Status- </option>
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
                                                                    <input name="floor" type="number" className="form-control" min={1} onChange={changeHandler} defaultValue={currentProperty.floor} onBlur={isPositive} />
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
                                                                    <input name="storey" type="number" className="form-control" min={1} onChange={changeHandler} defaultValue={currentProperty.storey} onBlur={isPositive} />
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
                                                                    <input name="area" type="number" className="form-control" min={0} onChange={changeHandler} defaultValue={currentProperty.area} onBlur={isPositive} />
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
                                                                    <input name="yardArea" type="number" className="form-control" min={0} onChange={changeHandler} defaultValue={currentProperty.yardArea} onBlur={isPositive} />
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
                                                                    <input name="bedroom" type="number" className="form-control" min={0} onChange={changeHandler} defaultValue={currentProperty.bedroom} onBlur={isPositive} />
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
                                                                    <input name="bathroom" type="number" className="form-control" min={0} onChange={changeHandler} defaultValue={currentProperty.bathroom} onBlur={isPositive} />
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
                                                                    <input name="storage" type="number" className="form-control" min={0} onChange={changeHandler} defaultValue={currentProperty.storage} onBlur={isPositive} />
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
                                                                        multiple={false} onChange={changeHandler} defaultValue={currentProperty.parking}>
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
                                                                        multiple={false} onChange={changeHandler} defaultValue={currentProperty.parking}>
                                                                        <option> -Select- </option>
                                                                        <option>Yes</option>
                                                                        <option>No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <div className="form-group">
                                                                    <label htmlFor="view">View :</label>
                                                                    <input name="view" type="text" className="form-control" onChange={changeHandler} defaultValue={currentProperty.view} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br />
                                                    </div>
                                                </div>

                                                <div className="" id="step3">
                                                    <div className="wizard-footer">
                                                        <div className="pull-right">
                                                            <input disabled={!isFormValid} type='submit' className='btn btn-finish btn-primary' name='finish' value='Finish' />
                                                            {!isFormValid && <div className="red">Please fill all required fields!</div>}
                                                        </div>
                                                        <div className="hide">
                                                            <label htmlFor="user_id">User <small>(required)</small></label>
                                                            <input name="user_id" type="text" defaultValue={user.id} />
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
                <NotFound />
            }
        </>
    );
}

export default EditProperty;
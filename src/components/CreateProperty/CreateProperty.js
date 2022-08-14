import { useContext } from 'react';

import { PropertyContext } from '../../contexts/PropertyContext';
import * as propertyService from '../../services/propertyService';

const CreateProperty = () => {
    const { propertyAdd } = useContext(PropertyContext);

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
                                        {/* <li><a href="#step3" data-toggle="tab">Step 3 </a></li> */}
                                        <li><a href="#step4" data-toggle="tab">Finished </a></li>
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
                                                        <label htmlFor="propertyName">Property title <small>(required)</small></label>
                                                        <input name="propertyName" type="text" className="form-control" placeholder="Two-bedroom apartment ..." />
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="propertyPrice">Property price <small>(required)</small></label>
                                                        <input name="propertyPrice" type="number" className="form-control" placeholder="100000" min={1} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="image">Photo URL <small>(required)</small></label>
                                                        <input name="image" type="url" className="form-control" placeholder="https://images.picture.jpg" />
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
                                                            <label htmlFor="description">Property Description :</label>
                                                            <textarea name="description" className="form-control" defaultValue={""}></textarea>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-sm-12">
                                                    <div className="col-sm-3">
                                                        <div className="form-group">
                                                            <label htmlFor="city">City/town :</label>
                                                            <input name="city" type="text" className="form-control" placeholder="Sofia ..." />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="form-group">
                                                            <label htmlFor="address">Address :</label>
                                                            <input name="address" type="text" className="form-control" placeholder="Blvd Tsarigradsko Shose 104 ..." />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="form-group">
                                                            <label>Property Type  :</label>
                                                            <select id="basic" className="selectpicker show-tick form-control">
                                                                <option> -Status- </option>
                                                                <option>Apartment</option>
                                                                <option>Studio</option>
                                                                <option>House</option>
                                                                <option>Office</option>
                                                                <option>Garage</option>
                                                                <option>Storage</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="form-group">
                                                            <label>Property Statue  :</label>
                                                            <select id="basic" className="selectpicker show-tick form-control">
                                                                <option> -Status- </option>
                                                                <option>Rent </option>
                                                                <option>Sale</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="form-group">
                                                            <label htmlFor="floor">Floors :</label>
                                                            <input name="floor" type="number" className="form-control" min={1} />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="form-group">
                                                            <label htmlFor="storey">Storey :</label>
                                                            <input name="storey" type="number" className="form-control" min={1} />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="form-group">
                                                            <label htmlFor="area">Area (m2) :</label>
                                                            <input name="area" type="number" className="form-control" min={1} />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="form-group">
                                                            <label htmlFor="area">Yard Area (m2) :</label>
                                                            <input name="area" type="number" className="form-control" defaultValue="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <br />
                                            </div>
                                        </div>

                                        <div className="tab-pane" id="step3">
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


                                        <div className="tab-pane" id="step4">
                                            <h4 className="info-text"> Publish </h4>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="">
                                                        <p>
                                                            <label><strong>Terms and Conditions</strong></label>
                                                            <br/>
                                                            By accessing or using  GARO ESTATE services, such as
                                                            posting your property advertisement with your personal
                                                            information on our website you agree to the
                                                            collection, use and disclosure of your personal information
                                                            in the legal proper manner.
                                                        </p>

                                                        <div className="checkbox">
                                                            <label htmlFor="tac"><strong>Accept terms and conitions</strong></label>
                                                            <input type="checkbox" name="tac" id="tac"/>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="wizard-footer">
                                        <div className="pull-right">
                                            <input type='button' className='btn btn-next btn-primary' name='next' value='Next' />
                                            <input type='submit' className='btn btn-finish btn-primary ' name='finish' value='Finish' />
                                        </div>

                                        <div className="pull-left">
                                            <input type='button' className='btn btn-previous btn-default' name='previous' value='Previous' />
                                        </div>
                                        <div className="clearfix"></div>
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
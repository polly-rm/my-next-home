import '../../../static/style/Common.css';

import { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

import * as profileService from '../../../services/profileService';
import { useErrorHandlers } from '../../../hooks/useErrorHandlers';


const MyPersonalDataCreate = () => {
    const { user, setProfile } = useContext(AuthContext);

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        facebook: '',
        email: '',
        website: '',
        phone: '',
    });

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        facebook: '',
        email: '',
        website: '',
        phone: '',
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

        const profileData = Object.fromEntries(new FormData(e.target));

        profileService.create(profileData)
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
                    profileService.getOne(user.id)
                        .then(resultRequest => {
                            const [profileData, response] = resultRequest;
                            setProfile(profileData);
                        });
                }
                console.log(result);
            });
    };

    // Error Handlers
    const { minLength, requiredValue, ...errorHandlers } = useErrorHandlers(setErrors, values);


    return (
        <div>
            <div className="page-head">
                <div className="container">
                    <div className="row">
                        <div className="page-head-content">
                            <h1 className="page-title">Hello : <span className="orange strong">{user.username}</span></h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-area user-profiel background-white">&nbsp;
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10 col-sm-offset-1 profiel-container">

                            <form onSubmit={onSubmit}>
                                <div className="profiel-header">
                                    <h3>
                                        <b>BUILD</b> YOUR PROFILE <br />
                                    </h3>
                                    <hr />
                                </div>

                                <div className="clear">
                                    <div className="col-sm-5 col-sm-offset-1">
                                        <div className="form-group">
                                            <label htmlFor="firstName">First Name <small>(required)</small></label>
                                            <input name="firstName" type="text" className="form-control" value={values.firstName} onChange={changeHandler} onBlur={requiredValue} />
                                            {
                                                errors.firstName &&
                                                <p className="form-control error">
                                                    {errors.firstName}
                                                </p>
                                            }
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Public email :</label>
                                            <input name="email" type="email" className="form-control" value={values.email} onChange={changeHandler} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="facebook">Facebook :</label>
                                            <input name="facebook" type="text" className="form-control" value={values.facebook} onChange={changeHandler} />
                                        </div>
                                    </div>

                                    <div className="col-sm-5">
                                        <div className="form-group">
                                            <label htmlFor="lastName">Last Name <small>(required)</small></label>
                                            <input name="lastName" type="text" className="form-control" value={values.lastName} onChange={changeHandler} onBlur={requiredValue} />
                                            {
                                                errors.lastName &&
                                                <p className="form-control error">
                                                    {errors.lastName}
                                                </p>
                                            }
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="phone">Phone :</label>
                                            <input name="phone" type="text" className="form-control" value={values.phone} onChange={changeHandler} onBlur={(e) => minLength(e, 10)} />
                                            {
                                                errors.phone &&
                                                <p className="form-control error">
                                                    {errors.phone}
                                                </p>
                                            }
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="website">Website :</label>
                                            <input name="website" type="text" className="form-control" value={values.website} onChange={changeHandler} />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-5 col-sm-offset-1">
                                    <br />
                                    <input type='submit' className='btn btn-finish btn-primary' name='finish' value='Finish' />
                                </div>
                                <div className="hide">
                                    <label htmlFor="user_id">User <small>(required)</small></label>
                                    <input name="user_id" type="text" defaultValue={values.user_id} />
                                </div>

                                <br />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyPersonalDataCreate;
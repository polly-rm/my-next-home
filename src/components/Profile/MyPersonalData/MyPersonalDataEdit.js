import '../../../static/style/Common.css';

import { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

import * as profileService from '../../../services/profileService';
import { useErrorHandlers } from '../../../hooks/useErrorHandlers';


const MyPersonalDataEdit = () => {
    const { user, profile, setProfile } = useContext(AuthContext);

    const [errors, setErrors] = useState({});
    const [currentProfile, setCurrentProfile] = useState({ profile });

    const changeHandler = (e) => {
        setCurrentProfile(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const profileData = Object.fromEntries(new FormData(e.target));

        profileService.edit(user.id, profileData)
            .then(resultRequest => {
                const [result, response] = resultRequest;

                // Get server errors
                for (let error of Object.keys(errors)) {

                    if (Array.isArray(result[error])) {
                        const currentError = result[error];

                        setErrors(state => ({
                            ...state,
                            [error]: currentError,
                        }));
                    } else {
                        profileService.getOne(user.id)
                            .then(resultRequest => {
                                const [profileData, response] = resultRequest;
                                setProfile(profileData);
                            });
                    }
                }
            });
    };

    // Error Handlers
    const { minLength, requiredValue, ...errorHandlers } = useErrorHandlers(setErrors, currentProfile);


    return (
        <div>
            <div className="page-head">
                <div className="container">
                    <div className="row">
                        <div className="page-head-content">
                            <h1 className="page-title">Hello : <span className="orange strong">{profile.firstName ? `${profile.firstName} ${profile.lastName}` : user.username}</span></h1>
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
                                            <input name="firstName" type="text" className="form-control" placeholder="" defaultValue={profile.firstName} onBlur={requiredValue} />
                                            {
                                                errors.firstName &&
                                                <p className="form-control error">
                                                    {errors.firstName}
                                                </p>
                                            }
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Public email :</label>
                                            <input name="email" type="email" className="form-control" placeholder="" defaultValue={profile.email} onChange={changeHandler} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="facebook">Facebook :</label>
                                            <input name="facebook" type="url" className="form-control" placeholder="" defaultValue={profile.facebook} onChange={changeHandler} />
                                        </div>
                                    </div>

                                    <div className="col-sm-5">
                                        <div className="form-group">
                                            <label htmlFor="lastName">Last Name <small>(required)</small></label>
                                            <input name="lastName" type="text" className="form-control" placeholder="" defaultValue={profile.lastName} onChange={changeHandler} onBlur={requiredValue} />
                                            {
                                                errors.lastName &&
                                                <p className="form-control error">
                                                    {errors.lastName}
                                                </p>
                                            }
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="phone">Phone :</label>
                                            <input name="phone" type="text" className="form-control" placeholder="" defaultValue={profile.phone} onChange={changeHandler} onBlur={(e) => minLength(e, 10)} />
                                            {
                                                errors.phone &&
                                                <p className="form-control error">
                                                    {errors.phone}
                                                </p>
                                            }
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="website">Website :</label>
                                            <input name="website" type="url" className="form-control" placeholder="" defaultValue={profile.website} onChange={changeHandler} />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-5 col-sm-offset-1">
                                    <br />
                                    <input type='submit' className='btn btn-finish btn-primary' name='update' value='Update' />
                                </div>
                                <div className="hide">
                                    <label htmlFor="user_id">User <small>(required)</small></label>
                                    <input name="user_id" type="text" defaultValue={user.id} />
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

export default MyPersonalDataEdit;
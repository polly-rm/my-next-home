import '../../../static/style/Comment.css';

import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { PropertyContext } from '../../../contexts/PropertyContext';

import * as commentService from '../../../services/commentService';
import { useErrorHandlers } from '../../../hooks/useErrorHandlers';


const CommentCreate = () => {
    const { propertyId } = useParams();
    const { user, profile } = useContext(AuthContext);
    const { commentAdd } = useContext(PropertyContext);

    const [errors, setErrors] = useState({
        text: '',
    });

    const [values, setValues] = useState({
        text: '',
        user_id: user.id,
        property_id: propertyId,
    });

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const commentData = Object.fromEntries(new FormData(e.target));

        commentService.create(commentData)
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
                    commentAdd(result);

                    setValues(state => ({
                        ...state,
                        text: ''
                    }));
                }
            });
    };

    // Error Handlers
    const {minLength, ...errorHandlers} = useErrorHandlers(setErrors, values);
    

    return (
        <div className="item">
            <form onSubmit={onSubmit}>
                <div className="client-text">
                    <p htmlFor="text">Leave a comment for this property</p>
                    <input name="text" type="text" className="form-control" placeholder="Comment ..." value={values.text} onChange={e => { changeHandler(e); minLength(e, 3) }} />
                    {
                        errors.text &&
                        <p className="form-control error error-container">
                            {errors.text}
                        </p>
                    }
                    <div className="comment-user">
                        <h4>
                            <strong>{user.username}</strong>
                            {
                                profile.firstName && profile.lastName
                                &&
                                <i>, {profile.firstName} {profile.lastName}</i>
                            }
                        </h4>

                        <div className="mt-10">
                            <input type='submit' className='btn-finish btn-primary' name='create' value='Create' />
                        </div>
                    </div>
                </div>

                <div className="client-face wow fadeInRight" data-wow-delay=".9s">
                    <img src="assets/img/client-face1.png" alt="" />
                </div>

                <div className="hide">
                    <label htmlFor="user_id">User <small>(required)</small></label>
                    <input name="user_id" type="text" defaultValue={values.user_id} />

                    <label htmlFor="property_id">User <small>(required)</small></label>
                    <input name="property_id" type="text" defaultValue={values.property_id} />
                </div>
            </form>
        </div>
    )
}

export default CommentCreate;
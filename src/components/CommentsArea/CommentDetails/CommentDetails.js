import '../../../static/style/Comment.css';

import { useContext } from 'react';
import { PropertyContext } from '../../../contexts/PropertyContext';
import { AuthContext } from '../../../contexts/AuthContext';

import * as commentService from '../../../services/commentService';


const CommentDetails = ({ comment }) => {
    const { commentRemove } = useContext(PropertyContext);
    const { user, profile } = useContext(AuthContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const confirmation = window.confirm('Are you sure you want to delete this comment?');

        if (confirmation) {
            commentService.remove(comment.id)
                .then(resultRequest => {
                    commentRemove(comment.id);
                });
        }
    };


    return (
        <div className="">
            <div className="client-text">
                <div className="comment-details">
                    <div>
                        <p>{comment.text}</p>
                        <h4>
                            <strong>{user.username}</strong>
                            {
                                profile.firstName && profile.lastName
                                &&
                                <i>, {profile.firstName} {profile.lastName}</i>
                            }
                        </h4>
                    </div>
                    {
                        user.id == comment.user
                        &&
                        <div>
                            <button className='btn-finish btn-primary' onClick={onSubmit}>Delete</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default CommentDetails;
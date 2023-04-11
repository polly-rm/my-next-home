import '../../static/style/Comment.css';

import { useContext } from "react";
import { PropertyContext } from "../../contexts/PropertyContext";
import { AuthContext } from "../../contexts/AuthContext";

import CommentCreate from "./CommentCreate/CommentCreate";
import CommentDetails from "./CommentDetails/CommentDetails";


const CommentsArea = ({ property }) => {
    const { comments } = useContext(PropertyContext);
    const { user } = useContext(AuthContext);


    return (
        <div className="testimonial-area recent-property comment-area-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
                        <h2>Comments</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="row testimonial">
                        <div className="col-md-12">
                            <div id="testimonial-slider">
                                {
                                    user.id && property.user != user.id
                                    &&
                                    <CommentCreate />
                                }
                                {
                                    comments.filter(x => property.id == x.property).length > 0
                                        ? comments.reverse().map(x => property.id == x.property && <CommentDetails key={x.id} comment={x} />)
                                        : <h4 className="no-properties text-center">No comments yet</h4>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
}

export default CommentsArea;
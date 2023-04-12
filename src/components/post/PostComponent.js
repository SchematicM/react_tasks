import React, {useState} from 'react';
import PostDetailsComponent from "./PostDetailsComponent";
import './post.css'

const PostComponent = ({ post }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="post">
            <h3>
                {post.id}. Title: {post.title}
            </h3>
            <button onClick={toggleDetails}>
                {showDetails ? "Hide Details" : "Show Details"}
            </button>
            {showDetails && <PostDetailsComponent details={post} />}
        </div>
    );
};

export default PostComponent;
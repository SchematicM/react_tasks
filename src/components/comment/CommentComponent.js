import React from "react";

class CommentComponent extends React.Component {
    render() {
        const { name, email, body } = this.props;

        return (
            <li>
                <h3>{name}</h3>
                <h4>{email}</h4>
                <p>{body}</p>
            </li>
        );
    }
}

export default CommentComponent;

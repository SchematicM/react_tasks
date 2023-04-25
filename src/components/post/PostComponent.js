import React, { Component } from "react";

class PostComponent extends Component {
    render() {
        const { post } = this.props;
        return (
            <li className={'post'}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </li>
        );
    }
}

export default PostComponent;
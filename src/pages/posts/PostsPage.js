import React, { Component } from "react";
import PostComponent from "../../components/post/PostComponent";
import typicodeService from "../../services/typicode.service";
import {Outlet} from "react-router-dom";

class PostsPage extends Component {
    state = {
        posts: [],
    };

    componentDidMount() {
        typicodeService.getPosts().then((response) => {
            this.setState({ posts: response.data });
        });
    }

    render() {
        const { posts } = this.state;

        return (
            <div>
                <h1>Posts</h1>
                <Outlet/>
                <ul className={'posts'}>
                    {posts.map((post) => (
                        <PostComponent key={post.id} post={post} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default PostsPage;

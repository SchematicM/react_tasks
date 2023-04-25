import React from "react";
import CommentComponent from "../comment/CommentComponent";
import typicodeService from "../../services/typicode.service";

class CommentsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        };
    }

    componentDidMount() {
        typicodeService.getComments()
            .then((response) => {
                this.setState({comments: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const {comments} = this.state;
        return (
            <div>
                <h2>Comments</h2>
                <ul>
                    {comments.map((comment) => (
                        <CommentComponent key={comment.id} name={comment.name} email={comment.email}
                                          body={comment.body}/>
                    ))}
                </ul>
            </div>
        );
    }
}
export default CommentsComponent;

import React, { Component } from 'react';

import CommentsDetails from './Comments_Details';
import _ from 'lodash';
import Request from 'superagent';

class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    componentWillMount(){
        this.getComments();
    }

    getComments() {
        const url = `https://api.github.com/repos/rails/rails/issues/${this.props.issue.number}/comments`
        Request.get(url).then((data) => {this.getData(data)});

    }

    getData(data) {
        this.setState({
            comments: this.state.comments.concat(data.body)
        });
    }

    render() {
        const comments = _.map(this.state.comments, (comment) => {
            return <CommentsDetails comment={comment}/>
        })
            console.log(comments);
        
        return (
            <div key = {comments.id}>{comments}</div>
        );
    }
}

export default Comments;
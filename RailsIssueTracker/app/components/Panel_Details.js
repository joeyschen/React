import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

import _ from 'lodash';

import {teaser, processBody, teaserProcessed} from './utils';
import Comments from './Comments';
import CommentsDetails from './Comments_Details';
import PropTypes from 'prop-types';
import Label from './Label'

export default function Panel_Details(props){
    const labels = _.map(props.issue.labels, (label) => {
        return <div key={label.id}><Label name={label.name} color={label.color} /></div>;
    });

    return (
        <div className = "container" style={{width: '80%'}}>
            <div className= "jumbotron" style={jumbotronStyle}>
                <div className="media">
                    <div className="media-body">
                        <Link to="/"><span className="btn btn-primary" style ={{marginBottom: 5}}>Home</span></Link>
                        <p style={numStyle}>#{props.issue.number}</p>
                        <a href={props.issue.html_url}><h3 className="media-heading" style={{fontSize: 16}}>{props.issue.title}</h3></a>
                        {labels}
                        <p style={{fontSize: 12, paddingTop: 10 }} >{processBody(props.issue.body)}</p>
                    </div>
                    <div className="media-right" >
                        <a href= {props.issue.user.html_url} style={{marginRight: 40}}>
                            <img src={props.issue.user.avatar_url} className="thumbnail" alt="avatar url" style={avatarStyle}/>
                            <p className="caption" style={{fontSize: 10}}>@{props.issue.user.login}</p>
                        </a>
                    </div>
                </div>
            </div>
            <Comments issue={props.issue}/>
        </div>
    );

}

const jumbotronStyle = {
    backgroundColor: '#DAFF22', 
    marginBottom: 3
}

const numStyle = {
    color: 'grey',
    fontSize: 10, 
    margin: 3
}

const avatarStyle = {
    width: 70, 
    height: 'auto', 
    marginBottom:10 
}

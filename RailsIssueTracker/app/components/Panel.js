import {teaser, processBody, teaserProcessed} from './utils';
import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import RailsAPICall from './RailsAPICall';
import Label from './Label';
//import Router from './Routing';

export default function Panel(props){
    const header = props.issue.number + " " + props.issue.title;
    const link = `/issue/${props.issue.number}`;

    const avatarStyle = {
        width: 70, 
        height: 'auto', 
        marginBottom:10 
    };

    const panelStyle = {
        margin: 5,  
        padding: 10,
        backgroundColor: '#F8F8FF'
    }

    const labels = _.map(props.issue.labels, (label) => {
        return <span style={{marginLeft: 5}}> <Label name={label.name} color={label.color} /> </span>;
    });

    return (
        <div className="media" style={panelStyle}>
            <div className="media-body">
                <p style={numStyle}>#{props.issue.number}</p>
                <div>
                    <Link to={link}> <h3 className="media-header" style={{fontSize: 16, margin: 3}}>{props.issue.title}</h3></Link>
                    {labels}
                </div>
                <p style={{fontSize: 12}} >{props.body}</p>
            </div>
            <div className="media-right media media-middle" style={{margin: 20}}>
                <a href= {props.issue.user.html_url} >
                    <img src={props.issue.user.avatar_url} className="thumbnail" alt="avatar url" style={avatarStyle}/>
                    <p className="caption" style={{fontSize: 10}}>@{props.issue.user.login}</p>
                </a>
            </div>
        </div>
    );

}

const numStyle = {
    color: 'grey',
    fontSize: 10, 
    margin: 3
}




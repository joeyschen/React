import React from 'react';

import {teaser, processBody, teaserProcessed} from './utils';

class Comments_Details extends React.Component{
    constructor(props) {
        super(props);
    }

    daysDiff(a) {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

        var _MS_PER_DAY = 1000 * 60 * 60 * 24;

        // Discard the time and time-zone information.
        var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());

        return Math.floor((today - utc1) / _MS_PER_DAY);
    }

    render() {
        //const dayDiff = this.daysDiff(this.props.comment.created_at);
        console.log("returned comments");

        return(
            <div className= "jumbotron" style={commentDetailsStyle}>
                <div className="media" >
                    <div className="media-left media-top" >
                        <a href={this.props.comment.user.url} >
                            <img className="media-object" src={this.props.comment.user.avatar_url} style={avatarStyle}/>
                        </a>
                    </div>
                    <div className="media-body" style={{fontSize: 8}}> 
                        <h4 className="media-heading">
                            <div>
                                <a href={this.props.comment.user.html_url}>
                                    <strong>{this.props.comment.user.login} </strong>
                                </a>
                                    commented 5 days ago
                            </div>   
                        </h4>
                        <p >{processBody(this.props.comment.body)}</p>
                        
                    </div>
                </div>
            </div>
        );
    }
}

const commentDetailsStyle = {
    backgroundColor: '#E6E6FA',
    marginTop: 2,
    marginBottom: 2,
    padding: 10
}

const avatarStyle = {
    width: 50, height: 'auto', marginBottom:10, float: 'left' 
}

export default Comments_Details;
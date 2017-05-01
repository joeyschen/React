import React from 'react';
import ReactDOM from 'react-dom';

import _ from 'lodash';
import PropTypes from 'prop-types';

import Panel from './Panel';
import {teaser, processBody, teaserProcessed, Link} from './utils';
import Details from './Panel_Details';
import Pagination from './Pagination';

export default class View extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            start: 0,
            end: 25,
            issues: "",
            loading: true
        };
    }

    componentWillReceiveProps(nextProps){
        this.store(nextProps);
        this.state.loading
        this.paginate(nextProps.id);
    }

    componentWillUpdate(){
        this.setState({
            loading: true
        });
        this.reset();
    }

    shouldComponentUpdate(nextProps, nextState){
        return this.state.loading
    }

    reset(){
        this.setState({
            start: 0,
            end: 25
        });
    }

    paginate(id){
        this.setState({
            start: this.state.start + 25*(id-1),
            end: this.state.end + 25*(id-1),
            loading: false
        });
    }
        
    store(nextProps){
        const issues =  _.map(nextProps.issues, (issue)=>{
            return(
                <span key={issue.id}><Panel issue = {issue} body={teaserProcessed(issue.body)} /> </span>
            );
        });

        this.setState({
            issues: issues
        });
    }    

    render(){
        return (
            <div className = "container" style={{width: '80%'}}>
                <div style={jumbotronStyle}>
                    <h3>
                        <div>
                            <span style={titleStyle}>
                                <span className="glyphicon glyphicon-exclamation-sign" > </span>
                                Issues
                                <span className="badge">
                                    {this.props.issues.length}
                                </span>
                            </span>
                        </div>
                    </h3>
                    <div style={{marginLeft: 10}}>
                        <a href = "https://github.com/rails" >rails </a> /
                        <a href = "https://github.com/rails/rails" ><strong> rails</strong></a>
                    </div>
                    
                    <Pagination id={this.props.id} />

                    <div>{this.state.issues.slice(this.state.start, this.state.end)}</div>
                </div>
            </div>
        );
  }

}

const titleStyle={
    padding: 5, 
    borderRadius: 5,
    backgroundColor: '#E5F0D6',
    margin: 5
};

const jumbotronStyle = {
    margin: 5,
    padding: 5
};

View.defaultProps = {
    id: 1
};

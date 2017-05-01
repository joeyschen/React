"use strict";

import React                    from 'react';
import Request                  from 'superagent';
import _                        from 'lodash';
import View                     from './View';
import Details from './Panel_Details';

class RailsAPICall extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      xhr: {},
      canLoadMore: true,
      issues: [],
      lastPageLoaded: 0
    };
  }

  componentWillMount(){
    this.load();
  }

  load(){
    if(!this.state.canLoadMore){
      console.error("Cannot load more. ");
    }
    const url = `https://api.github.com/repos/rails/rails/issues?page=${this.state.lastPageLoaded + 1}&isOpen`;
    
    Request.get(url).then((data) => {this.getData(data)}); 
  }

  getData(data){
    const canLoadMore = data.body.length === 30
    this.setState({
      issues: this.state.issues.concat(data.body),
      canLoadMore: canLoadMore,
      lastPageLoaded: this.state.lastPageLoaded + 1
    });

    // if(canLoadMore){ //overloaded on anonymous api calls
    //   this.load();
    // }
  }

  render(){
    if(this.props.page === "panel"){
      return (
        <div>
          <View issues = {this.state.issues} id={this.props.id} />
        </div>
      );
    }
    else if(this.props.page === "details"){
      const issue = findIssue(this.props.id, this.state.issues);
      if(issue != -1){
        return (
          <div>
            <Details issue = {issue} display={this.props.display} />
          </div>
        );
      }
    }

    return <h3>Page Not Found</h3>;
  }

}

function findIssue(id, issues){
  var num = "-1";
  issues.forEach(function(item) {
    if(item.number.toString() === id){
      num = item;
    }
  });
  return num;
}

export { RailsAPICall as default };
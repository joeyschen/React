import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash'

class Pagination extends Component {

    constructor(props){
        super(props);
        this.state = {
            navPrev: 'disabled',
            navNext: ' ',
            linkPrev: '/1'
        }

        //pageBack = this.pageBack.bind();
    }

    pageBack(id) {
        var page = id;
        if(page === 0){
            this.setState({
                linkPrev: '/1'
            }) 
        }
        else{
            page -= 1;
            this.setState({
                linkPrev: `/${page}`
            }) 
        }
    }

    pageForward(id) {
        var page = id;
        if(page === 0){
            return '/1';
        }
        else{
            page -= 1;
            return `/${page}`;
        }
    }

    render() {
        const check = Check(this.props.id);
        //const back = this.pageBack(this.props.id);

        return (
            <nav aria-label="Page navigation" style={{textAlign: 'center', display: this.state.display}} >
                <ul className="pagination" style={paginationStyle}>
                    <li className="disabled" >
                        {/*<Link to={this.state.linkPrev} aria-label="Previous">
                        </Link>*/}
                            <span aria-hidden="true">&laquo;</span>
                    </li>
                    
                    {check}
                    <li className="disabled">
                        <Link to={`/${this.props.id}`} aria-label="Previous">
                                <span aria-hidden="true">&raquo;</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

const Check = ({id}) => {
    var end = 9;
    var start = end - 8;
    var links = [];

    // console.log(id);

    if(id > 9){
        end = props.id;
    }

    for(var i = start; i <= end; i++){
        // console.log(i);
        links.push(<Links id = {i} />);
    }

    // console.log(links);
     return links;
}

const Links = ({id}) => {
    var link = `/${id}`;

    return (
        <li><Link to={link}>{id}</Link></li>
    );
}

const paginationStyle = {
    padding: 5, 
    margin: 3, 
    display: 'inline-block'
}



export default Pagination;
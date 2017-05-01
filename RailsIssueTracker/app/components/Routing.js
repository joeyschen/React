import React from 'react'
import {Route, BrowserRouter as Router, Link, Redirect} from 'react-router-dom'

import RailsAPICall from './RailsAPICall';

const Routing = () => (
    <Router>
        <div>
            <Route exact path="/" render={() => (
                <Redirect to="1"/>
            )}/>
            <Route exact path="/:pageId" component={Page} />
            <Route path = "/issue/:issueId" component={Details} />
        </div>
    </Router>
)

const Page = ({match}) => (
    <div>
        <RailsAPICall page = "panel" id={match.params.pageId} />
    </div>
)

const Details = ({match}) => (
    <div>
        <RailsAPICall page = "details" id={match.params.issueId}/>
    </div>
)

export default Routing;
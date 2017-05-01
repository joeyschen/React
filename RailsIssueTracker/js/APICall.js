import React from 'react';
import $ from 'jquery';

class APICall extends React.Component{

    constructor(props){
        super(props);
    }

	getDataFromApi(searchTerm, callback) {
        var query = {
            q: searchTerm,
            part: 'snippet',
            key: 'AIzaSyD3ArjbpNMo8jtS9MxyV7pxuWE2EL9RvcI'
        };
        $.getJSON(this.props.YOUTUBE_BASE_URL, query, callback);
    }

    displayYoutubeSearchData(data) {
        var resultElement = '';
        if (data.items) {
            data.items.forEach(function(item) {
                resultElement += '<a href = https://youtube.com/watch?v=' + item.id.video + ' target = "_blank">' + '<img src =' + item.snippet.thumbnails.default.url + '><p>' + item.snippet.title + '</p>' + '</a><br>';
            });
        } else {
            resultElement += '<p>No Results </p>';
        }

        $('.js-search-results').html(resultElement);
    }

    componentWillMount() {
        $('.js-search-form').submit(function(e) {
            e.preventDefault();
            var query = $(this).find('.js-query').val();
            getDataFromApi(query, displayYoutubeSearchData);
        });
    }

    render(){
    	return ( 
            <div>
                <h1>Youtube Search</h1>
                <form action="#" class="js-search-form">
                    <label for="query"></label>
                    <input type="text" class="js-query"/>
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default APICall;

APICall.PropTypes = {
    YOUTUBE_BASE_URL: React.PropTypes.string.isRequired
}
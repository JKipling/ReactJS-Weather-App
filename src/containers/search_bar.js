import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};       // "term" meaning search term.

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();         // This will prevent the form from changing pages once submit is pressed.

    // We need to go an fetch weather data.
    this.props.fetchWeather(this.state.term);
    this.setState({ term: ''});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className='input-group'>
                <input 
                    placeholder="Get a five-day forcast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} /> 
                <span className='input-group-btn'>
                    <button type='submit' className='btn btn-secondary'>Submit</button>
                </span>
            </form>
        );
    }
}

// If you're passing a call back function and that callback has a reference to "this", you need to bind the context in the constructor, 
// or use an arrow function on the callback.

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
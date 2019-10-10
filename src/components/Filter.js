import React, { Component } from 'react';

class Filter extends Component {
    state = {  }

    handleSelectChange = (event) => {
        const hogFilter = event.target.value
        this.props.onFilterChange(hogFilter);
    }

    handleSortChange = (event) => {
        this.props.sortedHogs(event.target.value);
    }

    render() { 
        return (
            <div className="ui grid container">
                <div className="ui eight wide column">
                    <select onChange={this.handleSelectChange}>
                        <option value="all">All</option>
                        <option value="greased">Greased</option>
                        <option value="ungreased">Ungreased</option>
                    </select>
                </div>

                <div className="ui eight wide column">
                    <select onChange={this.handleSortChange}>
                        <option value="none">None</option>
                        <option value="name">Name</option>
                        <option value="weight">Weight</option>
                    </select>
                </div>
            </div>

        )
    }
}
 
export default Filter;
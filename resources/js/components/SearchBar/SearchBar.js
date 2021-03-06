import React, { Component } from 'react';
import './SearchBar.css';
class SearchBar  extends Component {
   
    render() { 
        return (
        <div className="searchBar">
          <input type="text"   placeholder="....SEARCH...."  value={this.props.value} onChange={this.props.handleChange}/>
          </div>
          );
    }
}
 
export default  SearchBar ;
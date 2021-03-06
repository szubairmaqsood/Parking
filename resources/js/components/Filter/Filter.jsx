import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
 
    getOptionClass(option)
    {
      let className="Normal";
       const {idProperty,selectedOption}=this.props;

      if(selectedOption)
      {
           if(option[idProperty]===selectedOption[idProperty])
           {
               className+=" ActiveFiler";
           }
      }
      return className;
    }

    render() { 
        const {options,onClick,textProperty,idProperty,selectedOption}=this.props;

        return ( 
       
            
            <ul className="Filter">
            {
                options.map((option)=>(
                <li key={option[idProperty]} className={this.getOptionClass(option)} >
                     <input type="radio" id={idProperty} name="Filter" value="" onClick={() =>onClick(option)}></input>
                    {option[textProperty]}</li>
                    ))  
            }
            </ul>
       
         );
    }
}
 
export default Filter;

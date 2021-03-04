import React, { Component } from 'react';
import './Pagination.css';
import {range } from "lodash";
class Pagination extends Component {


getPageClass =(P) =>
{
    let className="";
    const {CurrentPage}=this.props;
    if(CurrentPage===P)
    {
        className="ActivePage";
    }
    return className;
}

    CalculateNumberOfPages=()=>
    {
        const {pageSize ,numberOfRecords}=this.props;
        console.log(numberOfRecords);
        let NumberOfPages=Math.ceil(numberOfRecords/pageSize);
        return NumberOfPages;
    }

    render() { 
       const {onClick}=this.props;
        let NumberOfPages=this.CalculateNumberOfPages();
        let Pages=range(1,NumberOfPages+1);
         console.log(NumberOfPages);
        if(NumberOfPages===1)
        {
            return null;
        }
        return (
            <div className="Pagination">
            <ul>
            {Pages.map((P)=><li key={P}  className={this.getPageClass(P)} onClick={()=>onClick(P)}>{P}</li>)}
            </ul>
            </div>
         );
    }
}
 
export default Pagination;
import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSortUp} from "@fortawesome/free-solid-svg-icons";
import {faSortDown} from "@fortawesome/free-solid-svg-icons";
import './TableHeader.css'
class TableHeader extends Component {
  

    raiseSort = path =>
    {
        const sortColumn={...this.props.sortColumn};
        if(sortColumn.path===path)
      {
        sortColumn.order=(sortColumn.order==='asc' ? 'desc' :'asc')
      }
       else
     {
      sortColumn.order='asc';
      sortColumn.path=path;
    }
    this.props.onSort(sortColumn);    // calling function from Here
}

renderSortIcon =(column)=>
{
    
    if(column.path!==this.props.sortColumn.path) return null;
    else
    {
        if(this.props.sortColumn.order==='asc') return  <FontAwesomeIcon icon={faSortUp} style={{ fontSize: 20 }} />;
        else return  <FontAwesomeIcon icon={faSortDown} style={{ fontSize: 20 }} />;
    }
}




    render() { 
        const {columns}=this.props;
        return (  
             <thead className="tableHeader">
            <tr>
        {columns.map((column)=><th key={column.path}  onClick={()=>this.raiseSort(column.path)}><h4>{column.label}</h4>{ this.props.sortColumn && this.renderSortIcon(column)}</th>)}
             </tr>
             </thead>
            );

    }
}
 
export default TableHeader;
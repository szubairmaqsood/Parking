import React, { Component } from 'react'
import _ from "lodash";
import  './TableBody.css';
class TableBody extends Component {
  
    renderCell(Item,column)
    {
        if(column.content)
        {
             return  column.content(Item);
        }
        else
        {
           return  _.get(Item,column.path);
        }
    }


    render() { 
        const {columns,data}=this.props;
        return (  
           
            <tbody className="tableBody">
            {
                data.map((Item) =>(
                 <tr key={Item._id}>
        
                  {columns.map((column) =>(
                  <td key={Item._id + (column.path ||column.key)}>
                      { this.renderCell(Item,column) }
                     
                    </td>))}
                 </tr>
                ))
            }
         </tbody>
        );
    }
}
 
export default TableBody;
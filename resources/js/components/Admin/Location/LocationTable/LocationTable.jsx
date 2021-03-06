import React, { Component } from 'react';
import TableHeader from '../../../Table/TableHeader/TableHeader';
import TableBody from '../../../Table/TableBody/TableBody';
import  './LocationTable.css';
class LocationTable extends Component {
   
    render() { 

        const {columns,data}=this.props;
        console.log(data);
        return ( 
         <React.Fragment>
        <table  className="LocationTable">
        
         <TableHeader columns={columns}   onSort={this.props.onSort} sortColumn={this.props.sortColumn}></TableHeader>
        
         <TableBody columns={columns} data={data}></TableBody>
         
         </table>
         </React.Fragment> 
       

        );
    }
}
 
export default LocationTable;
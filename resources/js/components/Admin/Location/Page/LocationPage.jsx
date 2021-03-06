import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,NavLink, Route } from 'react-router-dom';
import axios from 'axios';
import SearchBar from '../../../SearchBar/SearchBar';
import Filter from '../../../Filter/Filter';
import LocationTable from '../LocationTable/LocationTable';
import Pagination from '../../../Pagination/Pagination';



class LocationPage extends Component {

   async getAStatusName(id)
  {
    const response=( await axios.get(`http://localhost/Parking/public/api/getAStatusName/${id}`));
    console.log(response.data);
    return response.data;
  }

  getStatusName(id)
  {
    return this.getAStatusName(id);
  }

    state = {  
        columns:[
        {label:"Name",path:"name", content:Location=><NavLink to={`/LacationPage/${_.get(Location,'id')}`}>{Location.name}</NavLink>},
            {label:"# OfParking Slots",path:"NumberOfParkingSlots"},
            {label:"Per Spot Charge",path:"PerSpotCharge"},
            {label:"Opening Time",path:"OpeningTime"},
            {label:"Closing Time",path:"ClosingTime"},
            {label:"Latitude",path:"Latitude"},
            {label:"Longitude",path:"Longitude"},
          {/*
            {label:"Status",path:"LocationStatus",content:(Location) =>this.getStatusName(_.get(Location,'LocationStatus'))},
          */}
            
            
    ],
    SelectedStatus:null,
    Status:[],
    SearchQuery:"",
    CurrentPage:1,
    PageSize:1,
    sortColumn:{path: "name" ,order:"asc"},
    
    }

    Title="Locations | Parking Solution";

  

    async componentDidMount()
  {
    let LocationStatus=await axios.get('http://localhost/Parking/public/api/LocationStatus');
    console.log(LocationStatus.data);
    //const types=[{id:"" ,name:'All Status'},...LocationStatus];
    
    
    document.title = this.Title;
    const data=(await axios.get('http://localhost/Parking/public/api/Location'));
    this.setState({LocationStatus:LocationStatus.data,data:data.data});
  }



  handleStatusChange =(Status) =>
  {
    this.setState({SearchQuery:"",SelectedStatus:Status,CurrentPage:1});
  }

  handleSearchBarChange =(e) =>
  {
   const  SearchQuery=e.target.value;
   this.setState({SearchQuery, SelectedType:null, CurrentPage:1});
  }

  handlePageChange=(PageNumber)=>
  {
    this.setState({CurrentPage:PageNumber});
  }


  handleSort=(sortColumn)=>
  {
    this.setState({sortColumn});
  }




FilterbySearchQuery=(data)=>
{
  return    this.state.SearchQuery  ? data.filter((d) =>d.name.toLowerCase().startsWith(this.state.SearchQuery.toLowerCase() ) )  : data;
}

  FilterByStatus=(data) =>
  {
  
    return     this.state.SelectedStatus  &&   this.state.SelectedStatus.id ? data.filter((d) =>d.Status===this.state.SelectedStatus.id)   : data;
  }

  FilterBySort=(data)=>
  {
    return _.orderBy(data,this.state.sortColumn.path,this.state.sortColumn.order);
  }

  FilterByPage=(data)=>
  {
     const startIndex=(this.state.CurrentPage-1)*this.state.PageSize;
    return _(data).slice(startIndex).take(this.state.PageSize).value();
  }

   getItemData()
  {
    const filterBySearchQueryData= this.FilterbySearchQuery(this.state.data);
    const filerByTypeData=this.FilterByStatus(filterBySearchQueryData);
    const sorted=this.FilterBySort(filerByTypeData);
    const filterByPageData=this.FilterByPage(sorted);
    return   filterByPageData;
  }

    getNumberOfPagesOfData =()=>
  {
    const filterBySearchQueryData=this.FilterbySearchQuery(this.state.data);
    const filerByTypeData=this.FilterByStatus(filterBySearchQueryData);
    return filerByTypeData.length;
  }




   render() { 
   
    let data;
    let numberOfRecords;
    if(this.state.data)
    {
    data=this.getItemData();
    numberOfRecords=this.getNumberOfPagesOfData();
    }
    

    
    return ( 

      //<div>This is location Page</div>

    
    <div className="ItemPage">
     <Router>
    <SearchBar value={this.state.SearchQuery} handleChange={this.handleSearchBarChange}></SearchBar>
    <NavLink to="/LocationPage/New" ><button className="NewButton">+ New</button></NavLink> 
    
    { this.state.data &&
     <div>
    <div className="ItemPageContentArea">
    <div>
    <Filter options={this.state.Status} textProperty="name" idProperty="_id" onClick={this.handleStatusChange} selectedOption={this.state.SelectedStatus}></Filter> 
    </div>
    <div>
      
    <LocationTable  columns={this.state.columns} data={data} onSort={this.handleSort} sortColumn={this.state.sortColumn}></LocationTable >
      
    </div>
    </div>
   <div className="Paginationdiv">
    <Pagination pageSize={this.state.PageSize} numberOfRecords={numberOfRecords}  CurrentPage ={this.state.CurrentPage} onClick={this.handlePageChange}></Pagination>
    </div>
    </div>
   
  }
    </Router>
     </div>
    

         );
   
  
 
   
  
}
}
 
export default LocationPage;


if (document.getElementById('root')) {
  ReactDOM.render(<LocationPage />, document.getElementById('root'));
  alert("Hello1");
}
else
{
  alert("LocationPage");
}
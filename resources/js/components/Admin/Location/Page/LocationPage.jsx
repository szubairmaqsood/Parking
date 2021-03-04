import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class LocationPage extends Component {
/*

    state = {  
        columns:[
        {label:"Name",path:"name", content:Location=><NavLink to={`/LacationPage/${_.get(Location,'id')}`}>{Location.name}</NavLink>},
            {label:"# OfParking Slots",path:"NumberOfParkingSlots"},
            {label:"Per Spot Charge",path:"PerSpotCharge"},
            {label:"Opening Time",path:"OpeningTime"},
            {label:"Closing Time",path:"ClosingTime"},
            {label:"Latitude",path:"Latitude"},
            {label:"Longitude",path:"Longitude"},
            {label:"Status",path:"LocationStatus",content:(Location) =>getATypeName(_.get(Location,'LocationStatus'))},
            
            
    ],
    SelectedStatus:null,
    Status:[],
    SearchQuery:"",
    CurrentPage:1,
    PageSize:4,
    sortColumn:{path: "name" ,order:"asc"},
    
    }

    Title="Locations | Parking Solution";

   

    async componentDidMount()
  {
    const types=[{id:"" ,name:'All Status'},...getTypes(),];
    document.title = this.Title;
    const data=(await axios.get('http://localhost/PARKING/public/api/Location')).data;
    this.setState({types,data});
  }



  handleTypeChange =(Status) =>
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
    const filerByTypeData=this.FilterByType(filterBySearchQueryData);
    return filerByTypeData.length;
  }


*/


   render() { 
   /*
    let data;
    let numberOfRecords;
    if(this.state.data)
    {
    data=this.getItemData();
    numberOfRecords=this.getNumberOfPagesOfData();
    }
    
*/
    
    return ( 

      <div>This is location Page</div>

    /*
    <div className="ItemPage">
     
    <SearchBar value={this.state.SearchQuery} handleChange={this.handleSearchBarChange}></SearchBar>
    <NavLink to="/LocationPage/New" ><button className="NewButton">+ New</button></NavLink> 
    { this.state.data &&
     <div>
    <div className="ItemPageContentArea">
    <div>
    <Filter options={this.state.Status} textProperty="name" idProperty="_id" onClick={this.handleTypeChange} selectedOption={this.state.SelectedStatus}></Filter> 
    </div>
    <div>
    <ItemTable  columns={this.state.columns} data={data} onSort={this.handleSort} sortColumn={this.state.sortColumn}></ItemTable >
    </div>
    </div>
   <div className="Paginationdiv">
    <Pagination pageSize={this.state.PageSize} numberOfRecords={numberOfRecords}  CurrentPage ={this.state.CurrentPage} onClick={this.handlePageChange}></Pagination>
    </div>
    </div>
   }
   
     </div>
    */  

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
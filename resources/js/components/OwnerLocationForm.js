import React, { Component } from "react";
import ReactDOM from 'react-dom';





class OwnerLocationForm extends Component
{
    render() {
        return (
            <h1>This is owner Location Form 1</h1>
        )
    }
}

export default OwnerLocationForm

$(window).on('load', function() {
    if (document.getElementById('root')) {
        ReactDOM.render(<OwnerLocationForm />, document.getElementById('root'));
    }
    else
    {
        alert("HelloOWfORM");
    }
    
   })


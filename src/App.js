/* import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import "./App.scss";
import {
  Bungalow,
  AcUnit,
  Campaign,
  ShoppingCart,
  AccountBox,
} from "@mui/icons-material";

export default function () {
  const sampleData = ["Phone", "Clothes", "Test Data"];

  return (
    <div className="top-nav-container flex">
      <h2 className="display-inline ml-10">
        <Bungalow className="mr-10" />
        Sample company
      </h2>
      <h2 className="display-inline ml-3p">
        <AcUnit className="mr-10" />
        Departments
      </h2>
      <h2 className="display-inline ml-3p">
        <Campaign className="mr-10" />
        Services
      </h2>
      <Autocomplete
        className="display-inline search-container"
        disablePortal
        id="combo-box-demo"
        options={sampleData}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Search items on this site" />
        )}
      />
      <h2 className="display-inline ml-3p">
        <AccountBox className="mr-10" />
        Sign In
      </h2>
      <h2 className="display-inline ml-3p">
        <ShoppingCart className="mr-10" />
        Cart
      </h2>
    </div>
  );
}
 */


import ReactDOM from 'react-dom';
import { Autocomplete, TextField } from "@mui/material";
import "./App.scss";
import {
  Bungalow,
  AcUnit,
  Campaign,
  ShoppingCart,
  AccountBox,
} from "@mui/icons-material";
import React, { useState } from 'react';

export class App extends React.Component {
  
  
  constructor(props) {
    super(props);
    this.props = props;
    //this.text = '';
    this.state = {
      text:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.trigger = this.trigger.bind(this);
    
  }
  handleChange(event) {
    this.setState({ text : event.target.value});
    /* const event = new CustomEvent('addToCart', { detail: event.target.value });
  window.dispatchEvent(event); */
  this.trigger(event.target.value)
  }

  trigger(data) {
    debugger;
    const event = new CustomEvent('addToCart', { detail: data });
    window.dispatchEvent(event);
  }

  render() {
    return (
      [
    
         <div className="top-nav-container flex">
         <h2 className="display-inline ml-10">
           Accenture
         </h2>
         <h2 className="display-inline ml-3p">
           Departments
         </h2>
         <h2 className="display-inline ml-3p">
           Services
         </h2>
         
         <h2 className="display-inline ml-3p">
           Sign In
         </h2>
         <h2 className="display-inline ml-3p">
           Cart
         </h2>
         <h2 className="display-inline ml-3p">
           Search Text
         </h2>
         <div className="display-inline ml-30 ">
         <input type="text" className="search" onChange={this.handleChange} />
         </div>
       </div>
    ])
  }
}
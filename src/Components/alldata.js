import React from 'react';
import {UserContext} from "./context";

console.log("alldata.js loaded");

function AllData(){
    const ctx = React.useContext(UserContext);
    return (
      <>
      <h5>All Data in Store</h5>
      {JSON.stringify(ctx)}<br/>
      </>
    );
  }

export default AllData;
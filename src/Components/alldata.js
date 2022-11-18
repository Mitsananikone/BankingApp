import React from 'react';
import {UserContext} from "./context";


function AllData(){
    const ctx = React.useContext(UserContext);
    return (
      <>
      <h5>All Data in Store</h5>
        <div>
        {JSON.stringify(ctx.users)}
        </div>
      </>
    );
  }

export default AllData;
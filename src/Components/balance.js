import React from 'react';
import {UserContext} from "./context";

function Balance(){
  const ctx = React.useContext(UserContext);
  return (
    <>
    <h1>Balance</h1>
    ${JSON.stringify(ctx.users[0].balance)}<br/>
    </>
  );
}

  export default Balance;
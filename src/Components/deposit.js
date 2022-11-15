import React from "react";
import {UserContext, Card} from "./context";



function Deposit(){
  const ctx = React.useContext(UserContext);  
  console.log(JSON.stringify(ctx.users.name))
  return (
    <Card
      txtcolor="black"
      header=""
      title="Deposit"
      text="You can move around using the navigation bar."
      body={(
        <>
        Balance <br/>
       ${JSON.stringify(ctx.users[0].balance)}
        </>
      )}
    />    
  );  
}

  export default Deposit;
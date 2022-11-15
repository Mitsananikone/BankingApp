import React from "react";
import {UserContext, Card} from "./context";



function Withdraw(){
  const ctx = React.useContext(UserContext);  
  console.log(JSON.stringify(ctx.users.name))
  return (
    <Card
      txtcolor="black"
      header=""
      title="Withdraw"
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

  export default Withdraw;
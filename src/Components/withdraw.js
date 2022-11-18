import React, { useEffect } from "react";
import {UserContext, ATM, Card} from "./context";
import Button from 'react-bootstrap/Button';



function Withdraw(){
  
  const [withdraw, setWithdraw]         = React.useState(0);
 
  const ctx = React.useContext(UserContext);  
  const currentUser = ctx.users.length-1;
  console.log("CURRENT USER Index: " + currentUser)


  function clearForm(){
    setWithdraw(0);
  }

    function submitWithdraw() {
  
      const fullBalance = ctx.users[currentUser].balance;
      const newBalance = ctx.users[currentUser].balance - withdraw;

    
      ctx.users[currentUser].balance = newBalance;
      console.log("CURRENT USER balance: " + (ctx.users[currentUser].balance));

      clearForm();
      
      return ( 
        
      <ATM
        txtcolor="black"
        header="WITHDRAW"
        title="BALANCE"
  
        body={(
          <>
       
        {JSON.stringify(ctx.users[currentUser].balance)}
  
  
         <input type="number" className="form-control" id="withdraw" placeholder="Amount to withdraw" value={withdraw} onChange={e => setWithdraw(Number(e.currentTarget.value))} />
         <Button type="submit" className="btn btn-light" onClick = {submitWithdraw} > Withdraw </Button>
  
          </>
        )}       
      />    
      )
      
    }


  return (
    <ATM
      txtcolor="black"
      header="WITHDRAW"
      title="BALANCE"

      body={(
        <>

       ${JSON.stringify(ctx.users[currentUser].balance)}


       <input type="number" className="form-control" id="deposit" placeholder="Amount to Deposit" value={withdraw} onChange={e => setWithdraw(Number(e.currentTarget.value))} />
       <Button type="submit" className="btn btn-light" onClick = {submitWithdraw} > Withdraw </Button>



        </>
      )}
     
    />    
  );  
}

  export default Withdraw;
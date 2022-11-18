import React, { useEffect } from "react";
import {UserContext, ATM, Card} from "./context";
import Button from 'react-bootstrap/Button';



function Deposit(){
  
  const [deposit, setDeposit]         = React.useState(0);
 
  const ctx = React.useContext(UserContext);  
  const currentUser = ctx.users.length-1;
  console.log("CURRENT USER Index: " + currentUser)


  function clearForm(){
    setDeposit(0);
  }

    function submitDeposit() {
  
      const fullBalance = ctx.users[currentUser].balance;
      const newBalance = ctx.users[currentUser].balance + deposit;

    
      ctx.users[currentUser].balance = newBalance;
      console.log("CURRENT USER balance: " + (ctx.users[currentUser].balance));

      clearForm();
      
      return ( 
        
      <ATM
        txtcolor="black"
        header="DEPOSIT"
        title="BALANCE"
  
        body={(
          <>
       
        {JSON.stringify(ctx.users[currentUser].balance)}
  
  
         <input type="number" className="form-control" id="deposit" placeholder="Amount to Deposit" value={deposit} onChange={e => setDeposit(Number(e.currentTarget.value))} />
         <Button type="submit" className="btn btn-light" onClick = {submitDeposit} > Deposit </Button>
  
          </>
        )}       
      />    
      )
      
    }


  return (
    <ATM
      txtcolor="black"
      header="DEPOSIT"
      title="BALANCE"

      body={(
        <>

       ${JSON.stringify(ctx.users[currentUser].balance)}


       <input type="number" className="form-control" id="deposit" placeholder="Amount to Deposit" value={deposit} onChange={e => setDeposit(Number(e.currentTarget.value))} />
       <Button type="submit" className="btn btn-light" onClick = {submitDeposit} > Deposit </Button>



        </>
      )}
     
    />    
  );  
}

  export default Deposit;
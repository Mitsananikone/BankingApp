import React, { useEffect } from "react";
import {UserContext, ATM, Card} from "./context";
import Button from 'react-bootstrap/Button';
import { json } from 'react-router';



function Deposit(){
  
  const [deposit, setDeposit]         = React.useState(null);
  const [show, setShow]               = React.useState(true);  // setshow = false brings 2nd card
  const [status, setStatus]           = React.useState('');
  const [secondCardButton, setSecondCardButton]      = React.useState(true);  // true = invis

  const ctx = React.useContext(UserContext);  

  const currentUser = ctx.users.length-1;


    function clearForm(){
       setShow(true);
       setSecondCardButton(true);
       setDeposit(null);
    }

    useEffect(() => {
      let check = validate(deposit);
      if(check) {setSecondCardButton(false);}
      else if(check === null) {setSecondCardButton(true);}
      else {setSecondCardButton(true);}
    })


    function validate(field) {
        if(!isNaN(field) === true && field >= 1) {    // if  a number, return true
          setStatus("");
          setTimeout(() => setStatus(''),3000)
          // clearForm();
          return true;
        }
        else if(Number(field) < 0) {
          console.log("field :" + field)
          setStatus("Please do not Enter Negative Numbers");
          setTimeout(() => setStatus(''),3000)
          // clearForm();
          return false;
        }
        else if(Number(field)===0) {
          setTimeout(() => setStatus(''),3000)
          // clearForm();
          return false;
        }
        else{
          setStatus("Please Enter a Numerical Value");
          setTimeout(() => setStatus(''),3000)
          // clearForm();
          return false;
        }

        
    }

    
    // const fullBalance = ctx.users[currentUser].balance;
    function submitDeposit() {
      if(validate(deposit)) {
        setShow(false)
        const newBalance = Number(ctx.users[currentUser].balance + Number(deposit));
        ctx.users[currentUser].balance = newBalance;
        alert({status}); 
        // clearForm();
        return;
      }
      if(!validate(deposit)) {
        alert({status});
        // clearForm();
        // const name = ctx.users[currentUser].name;
        console.log("CURRENT USER balance: " + (ctx.users[currentUser].balance));
        }
      }

    
      return ( 
      
            <ATM
              bgcolor="primary"
              txtcolor="black"
              header="DEPOSIT"
              title="BALANCE"
              status={status}
              disabled = "true"
              body={show ? (
                <>

                  ${JSON.stringify(ctx.users[currentUser].balance)}

                  <input type="input" className="form-control" id="deposit" placeholder="Amount to Deposit" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} />

                    <Button id="ATMsubmit" type="submit" className="btn btn-light" disabled={secondCardButton} onClick ={ submitDeposit} > Submit </Button>
                  
                </>
              ):(
                // SUCCESS 
                 <>  

                  ${JSON.stringify(ctx.users[currentUser].balance)}
                  <h5>SUCCESS <br/> <br/> ${deposit} deposited</h5>
                  <button type="submit" className="btn btn-light" onClick={clearForm}>Continue Button</button>
                </>

                  )}
                  /> 
    
    )
    
  }
    



  export default Deposit;
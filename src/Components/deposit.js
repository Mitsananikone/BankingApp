import React, { useEffect } from "react";
import {UserContext, ATM, Card} from "./context";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';

function Deposit(){
  
  const [deposit, setDeposit]         = React.useState(null || '');
  const [show, setShow]               = React.useState(true);  // setshow = false brings 2nd card
  const [status, setStatus]           = React.useState('');
  const [secondCardButton, setSecondCardButton]      = React.useState(true);  // true = invis

  const ctx = React.useContext(UserContext);  
  const currentUser = ctx.users.length-1;
 
    function clearForm(){
       setShow(true);
       setSecondCardButton(true);
       setDeposit(null || '');
    }

    useEffect(() => {
      let check = validate(deposit);
      if(check) {setSecondCardButton(false);}
      else if(check === null) {setSecondCardButton(true);}
      else {setSecondCardButton(true);}
    })


    function validate(field) {
        if(!isNaN(field) === true && field >= 1) {    // if  a number, return true
          setStatus(null || '');
          setTimeout(() => setStatus(''),3000)
          // clearForm();
          return true
        }
        else if(Number(field) < 0) {
          setStatus("Please do not Enter Negative Numbers");
          setTimeout(() => setStatus(''),3000)
          // clearForm();
          return false;
        }
        else if(Number(field)===0) {
          setTimeout(() => setStatus("Please Enter a Numerical Value"),3000)
          // clearForm();
          setTimeout(() => setStatus(''),3000)
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
        let title = "Successful Deposit";
        alert("Successful Deposit");
        // clearForm();
        return;
      }
      else {
         alert({status});
        }
      }
  
      return ( 
      
            <ATM
              bgcolor="primary"
              txtcolor="black"
              header="DEPOSIT"
              title="BALANCE"
              balance={"$" + JSON.stringify(ctx.users[currentUser].balance)}
              status={status}
              disabled = "true"
              body={show ? (
                <>
                  {/* <div id="balance">
                    ${JSON.stringify(ctx.users[currentUser].balance)}
                  </div> */}
                  <label><br/>Deposit Amount</label>
                  <input type="input" className="form-control glowing-border" id="deposit" placeholder="Amount to Deposit" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} />

                  <Button id="ATMsubmit" type="submit" className="btn btn-light" disabled={secondCardButton} onClick ={submitDeposit} > Deposit </Button>
    
                </>
              ):(
                // SUCCESS 
                 <>  
                  <label> <br/> <br/> ${deposit} deposited</label>
                  <Button id="ATMsubmit" type="submit" className="btn btn-light" onClick={clearForm}>Continue</Button>
                </>

                  )}
                  /> 
    
    )
    
  }
    



  export default Deposit;
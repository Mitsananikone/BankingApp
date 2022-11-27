import React, { useEffect } from "react";
import {UserContext, ATM, Card} from "./context";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

function Withdraw(){
  
  const [withdraw, setWithdraw]         = React.useState(null || '');
  const [show, setShow]               = React.useState(true);  // setshow = false brings 2nd card
  const [status, setStatus]           = React.useState('');
  const [secondCardButton, setSecondCardButton]      = React.useState(true);  // true = invis

  const ctx = React.useContext(UserContext);  
  const currentUser = ctx.users.length-1;

    function clearForm(){
       setShow(true);
       setSecondCardButton(true);
       setWithdraw(null || '');
    }

    useEffect(() => {
      let check = validate(withdraw);
      if(check) {setSecondCardButton(false);}
      else if(check === null) {setSecondCardButton(true);}
      else {setSecondCardButton(true);}
    })


    function validate(field) {
        if(!isNaN(field) === true && field >= 1) { 
          if((field != null) && (field > Number(ctx.users[currentUser].balance)))  {
            setStatus("Insufficient Funds");
          setTimeout(() => setStatus(''),3000)
            return false// if  a number, return true
          }
          setStatus("");
          setTimeout(() => setStatus(''),3000)
          // clearForm();
          return true;
        }

        else if(Number(field) < 0) {
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
    function submitWithdraw() {
      if(validate(withdraw)) {
        setShow(false)
        const newBalance = Number(ctx.users[currentUser].balance - Number(withdraw));
        ctx.users[currentUser].balance = newBalance;
        let title = "Successful Withdraw";
        alert(title); 
        // clearForm();
        return;
      }
      if(!validate(withdraw)) {
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
              header="WITHDRAW"
              title="BALANCE"
              balance={"$" + JSON.stringify(ctx.users[currentUser].balance)}
              status={status}
              disabled = "true"
              body={show ? (
                <>
                  {/* <div id="balance">
                    ${JSON.stringify(ctx.users[currentUser].balance)}
                  </div> */}
                  <label><br/>Withdraw Amount</label>
                  <input type="input" className="form-control glowing-border" id="withdraw" placeholder="Amount to Withdraw" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)} />

                  <Button id="ATMsubmit" type="submit" className="btn btn-light" disabled={secondCardButton} onClick ={ submitWithdraw} > Withdraw </Button>
                
                </>
              ):(
                // SUCCESS 
                 <>  
                  <label> <br/> <br/> ${withdraw} withdrawn</label>
                  <Button id="ATMsubmit" type="submit" className="btn btn-light" onClick={clearForm}>Continue Button</Button>
                </>

                  )}
                  /> 
    
    )
    
  }
    



  export default Withdraw;
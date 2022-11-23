import {UserContext, Card} from "./context";
import Button from 'react-bootstrap/Button';
import React,  {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function CreateAccount(){
  
    const ctx = React.useContext(UserContext); 
    const currentUser = ctx.users.length;
 

    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [id, setId]             = React.useState(currentUser);
    const [name, setName]         = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const [secondCardButton, setSecondCardButton]      = React.useState(true);  // true = invis
     
  
    useEffect(() => {
      
      if(name && email && password) {
        setSecondCardButton(false);
        return;
      }
      else {
        setSecondCardButton(true);
        return;
      }
    })


    
    function validate(field, label){
      if(field === null) {
        setStatus("");
      }
     else if (!field) {
        setStatus("Error: " + label);
        setTimeout(() => setStatus(''),3000);
        setSecondCardButton(true);
        console.log("false")
        return false;
      }

      else{
        setSecondCardButton(false);
        setId(id+1);
        console.log("true")
      }
      return true;
    }


    
  
    function handleCreate(){
      // if (!validate(id,       'id'))       return;
      // console.log("ID:   " + id)

      const balance = 1000;
      if (!validate(name,     'name')) {
        setShow(true);
        secondCardButton(true);
        return;
      }     
      if (!validate(email,    'email'))  {
        setShow(true);
        secondCardButton(true);
        return;
      }
      if (!validate(password, 'password')) {
        setShow(true);
        secondCardButton(true);
        return 
      }
      if(password.length < 8) {
        alert("Password must have more than 8 characters");
        setShow(true);
        secondCardButton(true);
        clearForm();
        return;
      }
      ctx.users.push({id, name, email, password, balance});
      setSecondCardButton(false);
      
      setShow(false);
      
    }    
  
    function clearForm(){
      setName('');
      setEmail('');
      setPassword('');
      setShow(true);
    }
  
    return (
      <Card
        bgcolor="primary"
        txtcolor="black"
        header="CREATE ACCOUNT"
        status={status}
        body={show ? (  
                <>                
                <div className="shadow"></div>
                Name<br/>
                <input type="input" className="form-control glowing-border" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
                Email address<br/>
                <input type="input" className="form-control glowing-border" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                Password<br/>
                <input type="password" className="form-control glowing-border" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                
                <Button type="submit" id="ATMsubmit" className="btn btn-light" disabled={secondCardButton} onClick={handleCreate}>Create Account</Button>
                
                
                </>
              ):(
                <>
                <h1>Success! </h1> <br/> <br/> <h5>{name} is logged in</h5>
                <Button type="submit" id="ATMsubmit" className="btn btn-light"  onClick={clearForm}> Add another account</Button>
                </>

              )}
      />
    )
  }

  export default CreateAccount;
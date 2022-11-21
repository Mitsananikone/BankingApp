import {UserContext, Card} from "./context";
import Button from 'react-bootstrap/Button';
import React from 'react';


function CreateAccount(){
  
    const ctx = React.useContext(UserContext); 
    const currentUser = ctx.users.length;
 

    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [id, setId]             = React.useState(currentUser);
    const [name, setName]         = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');

     
  

    function validate(field, label){
        if (!field) {
          setStatus('Error: ' + label);
          setTimeout(() => setStatus(''),3000);
          return false;
        }

        setId(id+1);
        return true;
    }
  
    function handleCreate(){
      // if (!validate(id,       'id'))       return;
      console.log("ID:   " + id)

      const balance = 1000;
      if (!validate(name,     'name'))     return;
      if (!validate(email,    'email'))    return;
      if (!validate(password, 'password')) return;
      ctx.users.push({id, name, email, password, balance});
      
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
        header="Create Account"
        status={status}
        body={show ? (  
                <>
                Name<br/>
                <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
                Email address<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                Password<br/>
                <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
                </>
              ):(
                <>
                <h5>Success! <br/> <br/>{name} is logged in.</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
                </>
              )}
      />
    )
  }

  export default CreateAccount;
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {UserContext, Card, AlertPopup} from "./context";
import { render } from '@testing-library/react';
import Popup from 'react-popup';
import { type } from '@testing-library/user-event/dist/type';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validPW, setValidPW] = useState(false);
  const ctx = React.useContext(UserContext);  

  function validateForm() {
    const searchEmail = email;
    const index = ctx.users.filter(function(ctx) {
      return (((ctx.name.indexOf(searchEmail))) > -1);
      });

    const userLogin = JSON.stringify((index[0].id))
    console.log("Index: " + JSON.stringify((index[0].id)));

    // const ctxEMAIL = JSON.stringify(ctx.users[userLogin]['email']);
    // console.log("UserContext EMAIL: " + ctxEMAIL);
    // console.log("UserInput email: " + email);

    // const ctxPW = JSON.stringify(ctx.users[userLogin]['password']);
    // console.log("UserContext PASSWORD: " + ctxPW);
    // console.log("UserInput password: " + password);
    return userLogin;
  
  };
    
  function handleSubmit(event) {
    
    const userLogin = validateForm();
    console.log("handlesubmit index: " + JSON.stringify(userLogin))
    // console.log("results: " + JSON.stringify(results));
    // const ctxEMAIL = JSON.stringify(ctx.users[0]['email']);
    const ctxEMAIL = JSON.stringify(ctx.users[userLogin]['email']);
    const ctxPW = JSON.stringify(ctx.users[userLogin]['password']);
    
    if( (('"' + password + '"') === ctxPW) && (('"' + email + '"') === ctxEMAIL)) { 
      setValidPW(true);
      console.log("VALID");
      console.log("UserContext EMAIL: " + ctxEMAIL);
      console.log("UserInput email: " + ('"' + email + '"'));
      console.log("UserContext PASSWORD: " + ctxPW);
      console.log("UserInput password: " + ('"' + password + '"'));
    }
    else {
      setValidPW(false)
      console.log("INVALID")
      alert('FAIL');
      console.log("UserContext EMAIL: " + ctxEMAIL);
      console.log("UserInput email: " + email);
      console.log("UserContext PASSWORD: " + ctxPW);
      console.log("UserInput password: " + password);
    }
    
  }

  // if(('"' + password + '"') === ctxPW.replace(/\s{2,}/g," "))

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        

        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        
        <Button  type="submit" className="btn btn-light" onClick={handleSubmit}>

          Login

        </Button>

      </Form>

    </div>

  );

}

export default Login;

// console.log("login.js loaded");

// function Login(){
//     return (
//       <h1>Login</h1>
//     )  
//   }

//   export default Login;
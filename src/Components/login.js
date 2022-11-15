import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {UserContext, Card} from "./context";
import { render } from '@testing-library/react';
import { Alert } from 'bootstrap';
import { type } from '@testing-library/user-event/dist/type';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const ctx = React.useContext(UserContext);  

  function validateForm() {
    var searchEmail = email;
    var results = ctx.users.filter(function(ctx) {
      return ctx.name.indexOf(searchEmail) > -1;
    });
    console.log("results:" + JSON.stringify(results));

    const ctxEMAIL = JSON.stringify(ctx.users[0]['email']);
    // console.log("UserContext EMAIL: " + ctxEMAIL);
    // console.log("UserInput email: " + email);

    const ctxPW = JSON.stringify(ctx.users[0]['password']);
    // console.log("UserContext PASSWORD: " + ctxPW);
    // console.log("UserInput password: " + password);
  
    //  
    // console.log("Found: " + JSON.stringify(results));

    console.log(('"' + password + '"'), (ctxPW));
    if(('"' + password + '"') === ctxPW) {
      console.log("XXXXXXXXXXXXXXXXXXXXXXXXX")
    }
    
           

    // if(password !== ctxPW) {
    //   return (
      // <Alert severity="error"> WRONG PASSWORD </Alert>
    //   )
    // }

    // return (
    //     ctx.users.map((ctx, i) => (
    //     <tr key={i}>
    //       <td>{ctx.name}</td>
    //       <td>{ctx.email}</td>
    //       <td>{ctx.password}</td>
    //       <td>{ctx.balance}</td>
    //     </tr>
    //         )
    //       ) 
    // )
  };
    
  

  function handleSubmit(event) {
     
  }

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

        
        <Button  type="submit" className="btn btn-light" onClick={validateForm}>

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
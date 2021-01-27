import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Login = (props) => {
 
  return (
    <>
      <div className="form-box">
        <h1>
          Login And Get <span>Started</span>
        </h1>
        <Form >
          <Form.Text className="text-danger error-text-top">
           
          </Form.Text>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
            
            />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
           
            />
          </Form.Group>
          <Button type="submit" className="btn register-btn">
            Log In
          </Button>
        </Form>
        <p>
          Dont have account ?
          <span onClick ={props.functionName}> Register </span>
        </p>
      </div>
    </>
  );
};

export default Login;

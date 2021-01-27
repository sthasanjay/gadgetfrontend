import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";


const Register = (props) => {

  return (
    <>
      <div className="form-box">
        <h1>
          Get Started and <span>Enjoy !</span>
        </h1>
        <Form>
          <Form.Text className="text-danger error-text-top">
          
          </Form.Text>
          <Form.Group controlId="firstname">
            <Form.Control
              type="text"
              placeholder="Enter first name"
              name="firstname"
            
            />
            <Form.Text className="text-danger error-text">
            
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="lastname">
            <Form.Control
              type="text"
              placeholder="Enter last name"
              name="lastname"
            
            />
            <Form.Text className="text-danger error-text">
             
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
             
            />
            <Form.Text className="text-danger error-text">
            
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
           
            />
            <Form.Text className="text-danger error-text">
           
            </Form.Text>
          </Form.Group>
          <Button type="submit" className="btn register-btn">
            Sign Up
          </Button>
        </Form>
        <p>
          Already have account ?
          <span onClick = {props.functionName}> Login </span>
        </p>
      </div>
    </>
  );
};

export default Register;

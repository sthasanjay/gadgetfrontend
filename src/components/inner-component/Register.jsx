import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { registerUsers } from "../../api/users";

const Register = (props) => {
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [errData, setErrData] = useState({
    statusMsg: "",
    errKey: "",
    errMessage: "",
  });

  errData.statusMsg === "succcess"
    ? props.functionName()
    : console.log("error");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUsers(input, (callBack) => {
      console.log(callBack.data);
      let statusMsg = callBack.data.status;
      let errMessage = callBack.data.message;
      let errKey = callBack.data.key;
      setErrData({
        statusMsg,
        errKey,
        errMessage,
      });
    });
  };

  return (
    <>
      <div className="form-box">
        <h1>
          Get Started and <span>Enjoy !</span>
        </h1>
        <Form onSubmit={handleSubmit}>
          <Form.Text className="text-danger error-text-top">
            {errData.errKey === null ? errData.errMessage : ""}
          </Form.Text>
          <Form.Group controlId="firstname">
            <Form.Control
              type="text"
              placeholder="Enter first name"
              name="firstname"
              onChange={handleInput}
              value={input.firstname}
            />
            <Form.Text className="text-danger error-text">
              {errData.errKey === "firstname" ? errData.errMessage : ""}
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="lastname">
            <Form.Control
              type="text"
              placeholder="Enter last name"
              name="lastname"
              onChange={handleInput}
              value={input.lastname}
            />
            <Form.Text className="text-danger error-text">
              {errData.errKey === "lastname" ? errData.errMessage : ""}
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleInput}
              value={input.email}
            />
            <Form.Text className="text-danger error-text">
              {errData.errKey === "email" ? errData.errMessage : ""}
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInput}
              value={input.password}
            />
            <Form.Text className="text-danger error-text">
              {errData.errKey === "password" ? errData.errMessage : ""}
            </Form.Text>
          </Form.Group>
          <Button type="submit" className="btn register-btn">
            Sign Up
          </Button>
        </Form>
        <p>
          Already have account ?
          <span onClick={props.functionName}> Login </span>
        </p>
      </div>
    </>
  );
};

export default Register;

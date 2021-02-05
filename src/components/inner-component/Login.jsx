import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { loginUsers } from "../../api/users";
import { useDispatch } from "react-redux";
// import loggedInAction from "../../actions/loggedIn";

const Login = (props) => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [errData, setErrData] = useState({
    statusMsg: "",
    errMessage: "",
  });

  const dispatch = useDispatch();

  if (errData.statusMsg === "success") {
    dispatch({ type: "IS_LOGGED_IN" });
    {
      props.closeModal();
    }
  }

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUsers(input, (callBack) => {
      let statusMsg = callBack.data.status;
      let errMessage = callBack.data.message;
      setErrData({
        statusMsg,
        errMessage,
      });
    });
  };

  return (
    <>
      <div className="form-box">
        <h1>
          Login And Get <span>Started</span>
        </h1>
        <Form onSubmit={handleSubmit}>
          <Form.Text className="text-danger error-text-top">
            {errData.errMessage !== "" ? errData.errMessage : ""}
          </Form.Text>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleInput}
              value={input.email}
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
              onChange={handleInput}
              value={input.password}
            />
          </Form.Group>
          <Button type="submit" className="btn register-btn">
            Log In
          </Button>
        </Form>
        <p>
          Dont have account ?{" "}
          <span onClick={props.functionName}> Register </span>
        </p>
      </div>
    </>
  );
};

export default Login;

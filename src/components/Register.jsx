import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Register = () => {
  const [email, setEmail] = useState("");
  const [PassWord, setPassword] = useState("");

  const ClickSubmit = (e) => {
    e.preventDefault();
    // alert("Your Email  :  " + { email });
    alert(`Your Email 2 : ${email} Your Password2: ${PassWord}`);
    //  بک تیک  '' === `` خیلی  مهم
  };
  return (
    <div style={{ margin: "15%" }}>
      <Form onSubmit={ClickSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
          value={PassWord}
          onChange={(e)=>setPassword(e.target.value)}
          type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;

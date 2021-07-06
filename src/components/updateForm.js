import React, { Component } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export class updateForm extends Component {
  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Img url</Form.Label>
          <Form.Control type="text" placeholder="enter Img" />
        </Form.Group>
    
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default updateForm

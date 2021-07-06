import React, { Component } from 'react'
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import axios from "axios";
export class FavCard extends Component {
  render() {
    return (
      <div>
        <Col lg={3}>
          <Card>
            <Card.Img variant="top" src={this.props.item.img} />
            <Card.Body>
              <Card.Title>{this.props.item.name}</Card.Title>
              <Button
                variant="primary"
                onClick={() =>this.props.handelUpdateBtn
                }
              >
                Update
              </Button>
              <Button variant="primary" onClick={() => this.props.handelDelete(this.props.item._id)}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  }
}

export default FavCard

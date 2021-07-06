import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
export class CocktailCard extends Component {
  render() {
    return (
      <Col lg={3}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.item.img}/>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default CocktailCard;

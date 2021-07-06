import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
export class CocktailCard extends Component {
  addFav = (name, img, id) => {
    const reqBody = { name, img, id };
    axios.post(`http://localhost:8788/fav/`, reqBody);
  };
  render() {
    return (
      <Col lg={3}>
        <Card>
          <Card.Img variant="top" src={this.props.item.strDrinkThumb} />
          <Card.Body>
            <Card.Title>{this.props.item.strDrink}</Card.Title>
            <Button variant="primary" onClick={()=>this.addFav(this.props.item.strDrink,this.props.item.strDrinkThumb,this.props.item.idDrink)}>Add to favorites</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default CocktailCard;

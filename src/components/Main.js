import React, { Component } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CocktailCard from "./CocktailCard";
export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cocktailData: [],
      url: process.env.REACT_APP_SERVER,
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`
      )
      .then((res) => this.setState({ cocktailData: res.data }));
      console.log(this.state.cocktailData);
  }
  render() {
    return (
      <Container>
        <Row>
          {this.state.cocktailData.length &&
            this.state.cocktailData.map((item, idx) => {
              <CocktailCard item={item} key={idx} />
            })}
        </Row>
      </Container>
    );
  }
}

export default Main;

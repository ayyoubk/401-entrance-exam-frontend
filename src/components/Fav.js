import axios from "axios";
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FavCard from "./FavCard";
export class Fav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favData: [],
      showModal: false,
    };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:8788/fav/`)
      .then((res) => this.setState({ favData: res.data }));
  }
  handelUpdateBtn = () => {
    this.setState({ showModal: !this.state.showModal });
  };
  handelUpdateSubmit = (e) => {
    e.preventDefault();
    this.handelUpdateBtn();
    const reqBody = { name, img, drinkId, id };
    axios.put(`http://localhost:8788/fav`, reqBody).then((res) =>{
      this.setState({ favData: res.data })
    })
  };
  handelDelete = (id) => {
    axios.delete(`http://localhost:8788/fav/${id}`).then((res) => {
      this.setState({ favData: res.data });
    });
  };
  render() {
    return (
      <div>
        <Container>
          <Row xs={1} md={3}>
            {this.state.favData.length &&
              this.state.favData.map((item, idx) => {
                return (
                  <FavCard
                    item={item}
                    key={idx}
                    handelUpdateSubmit={this.handelUpdateSubmit}
                    handelDelete={this.handelDelete}
                    handelUpdateBtn={this.handelUpdateBtn}
                  />
                );
              })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Fav;

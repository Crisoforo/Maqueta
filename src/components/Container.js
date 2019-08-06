import React, { Component } from "react";
import { Row, Col } from "react-materialize";
import "./Container.css";
import Noticia01 from "../C7_assets/img/home/c7_img_02.jpg";
import Noticia02 from "../C7_assets/img/home/c7_img_22.jpg";
import Noticia03 from "../C7_assets/img/home/c7_img_20.jpg";

class Container extends Component {
  state = {};

  render() {
    return (
      <>
        <Row>
          <Col s={4}>
            <img src={Noticia01} alt="Noticia 1" />
          </Col>
          <Col s={4} className="cancha">
            <img src={Noticia02} className="responsive-img" alt="Noticia 2" />
          </Col>
          <Col s={4}>
            <img src={Noticia03} alt="Noticia 3" />
          </Col>
        </Row>
      </>
    );
  }
}

export default Container;

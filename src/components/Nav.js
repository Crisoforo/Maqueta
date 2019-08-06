import React, { Component } from "react";
import { Navbar, NavItem } from "react-materialize";
import "./Nav.css";
import logo from "../C7_assets/branding/igp_c7_white.png";
import profile from "../C7_assets/branding/personas/img_person 06.png";

class Nav extends Component {
  state = {};

  render() {
    return (
      <Navbar
        brand={<img src={logo} width="7%" alt="logo" alignLinks="left" />}
        alignLinks="right"
      >
        <NavItem href="">INICIO</NavItem>
        <NavItem href="">QUINIELA</NavItem>
        <NavItem href="">RANKING</NavItem>
        <NavItem href="">NOTICIAS</NavItem>
        <NavItem>
          <img
            className="profile"
            src={profile}
            margin-top="2%"
            width="16%"
            alt="pic"
          />
          FERNANDO ARIZPE
          <p className="puntos">140 PUNTOS</p>
        </NavItem>
      </Navbar>
    );
  }
}

export default Nav;

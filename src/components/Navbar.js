import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import logo from "../logo.svg";
// import { ProductConsumer } from "../Context";
export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar header
       nav-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} className="navbar-brand" alt="" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer className="mr-3">
            <span>
              <i className="icon-shopping-cart" />
              {/* <ProductConsumer>
                {(value) => {
                  const { cart } = value;
                  const array = cart.map((item) => item.length);
                  console.log(array);
                }}
              </ProductConsumer> */}
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

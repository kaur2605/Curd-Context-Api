import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";

export default function Heading() {
  return (
    <Navbar color="dark" dark>
      <NavbarBrand href="/">Member List</NavbarBrand>

      <Nav>
        <NavItem>
          <Link className="btn btn-primary  mr-1" to="/add">
            Add Member
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

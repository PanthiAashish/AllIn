import React, { useState } from "react";

import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="nav-container" data-testid="navbar">
      <Navbar color="light" light expand="md">
        <Container className="d-flex justify-content-between align-items-center">
          <NavbarBrand className="logo" />
          <NavbarToggler onClick={toggle} data-testid="navbar-toggle" />
          <Collapse
            isOpen={isOpen}
            navbar
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              padding: "0 20px",
              maxWidth: "1200px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Nav className="mr-auto" navbar data-testid="navbar-items">
              <NavItem>
                <Link
                  href="/"
                  className="nav-link"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    fontFamily: "sans-serif",
                  }}
                  testId="navbar-home"
                >
                  Allln
                </Link>
              </NavItem>
            </Nav>
            <Nav className="d-flex align-items-center" navbar>
              {!isLoading && !user && (
                <NavItem id="qsLoginBtn">
                  <Link
                    href="/api/auth/login"
                    className="btn btn-primary btn-margin"
                    tabIndex={0}
                    testId="navbar-login-desktop"
                  >
                    <button className="border rounded-md px-10 py-1 mt-2 hover:bg-white hover:text-black transition-all cursor-pointer">
                      Log in
                    </button>
                  </Link>
                </NavItem>
              )}
              {user && (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Link
                    href="/api/auth/logout"
                    icon="power-off"
                    testId="navbar-logout-desktop"
                  >
                    <button className="border flex rounded-md px-10 py-1 mt-2 hover:bg-white hover:text-black transition-all cursor-pointer">
                      <img
                        src={user.picture}
                        alt="Profile"
                        className="nav-user-profile rounded-circle img-fluid img-thumbnail mr-2"
                        width="25"
                        height="25"
                        decode="async"
                        data-testid="navbar-picture-desktop"
                        style={{
                          borderRadius: "50%",
                        }}
                      />{" "}
                      Log out
                    </button>
                  </Link>
                </div>
              )}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

import React from "react";
import "./Header.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <div className="container">
                <Navbar.Brand as ={Link} to="/home" >Treat <span>Now</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as ={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as ={Link} to="/orders">Orders</Nav.Link>
                        <Nav.Link as ={Link} to="/admin" >Admin</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default Header;

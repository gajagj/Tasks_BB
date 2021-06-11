import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';



class Navigation extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (

            <Navbar bg="secondary" variant="dark">
                <Navbar.Brand><Link className="text text-white" to="/">BadaBro</Link></Navbar.Brand>
                <Nav className="mr-auto">
                    <ul className="nav navbar">
                        <Nav.Link><Link className="text text-white" to="/task1">Task1</Link></Nav.Link>
                        <Nav.Link><Link className="text text-white" to="/task2">Task2</Link></Nav.Link>
                        <Nav.Link><Link className="text text-white" to="/task3">Task3</Link></Nav.Link>
                        <Nav.Link><Link className="text text-white" to="/task4">Task4</Link></Nav.Link>

                    </ul>


                </Nav>
            </Navbar>

        )
    }
}

export default Navigation;
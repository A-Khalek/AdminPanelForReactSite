import React, {Component, Fragment} from 'react';
import {Navbar} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

class Manu extends Component {
    render() {
        return (
            <Fragment>
                <Navbar expand="lg" className="fixed-top" variant="light" bg="light">
                    <Navbar.Brand href="#home"><FontAwesomeIcon icon={faBars}/> React-Bootstrap </Navbar.Brand>
                </Navbar>

            </Fragment>
        )
    }
}

export default Manu;

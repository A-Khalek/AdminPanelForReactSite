import React, {Component, Fragment} from 'react';
import {Navbar} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";

class Manu extends Component {
    constructor(props) {
        super();
        this.state={
            sideNav:false,
            sideNavClose:"sidenavClose",
            mainDivOverlay:"main-overlay-close"
        }
    }

    showHideSideNav(){
        if (this.state.sideNav==false){
            this.setState({sideNav:true,sideNavClose:"sidenavOpen",mainDivOverlay:"main-overlay-open"})
        }
        else {
            this.setState({sideNav:false,sideNavClose:"sidenavClose",mainDivOverlay:"main-overlay-close"})
        }
    }



    render() {
        return (
            <Fragment>
                <Navbar expand="lg" className="fixed-top" variant="light" bg="light">
                    <Navbar.Brand onClick={this.showHideSideNav} href="#home"><FontAwesomeIcon icon={faBars}/>React</Navbar.Brand>
                </Navbar>

                <div className={this.state.sideNavClose}>
                    <NavLink className="my-8 p-0 text-white" to="#"><FontAwesomeIcon icon={faHome}/>Home</NavLink>
                </div>
                <div onClick={this.showHideSideNav} className={this.state.mainDivOverlay}></div>

            </Fragment>
        )
    }
}

export default Manu;

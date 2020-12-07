import React, {Component, Fragment} from 'react';
import {Navbar} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faBookOpen, faCode, faHome, faPowerOff} from "@fortawesome/free-solid-svg-icons";
import {Link, NavLink} from "react-router-dom";
import {Router} from "react-router";
import {faComment, faEnvelope, faFolder} from "@fortawesome/free-regular-svg-icons";


class Menu extends Component {
    constructor(props) {
        super();
        this.state={
            sideNav:false,
            sideNavClass:"sidenavClose",
            NavText:"d-none",
            mainDivOverlay:"main-overlay-close"
        }

        this.showHideSideNav=this.showHideSideNav.bind(this);
    }


    showHideSideNav(){
        if(this.state.sideNav===false){
            this.setState({sideNav:true,NavText:"",sideNavClass:"sidenavOpen",mainDivOverlay:"main-overlay-open"})
        }
        else {
            this.setState({sideNav:false,NavText:"d-none",sideNavClass:"sidenavClose",mainDivOverlay:"main-overlay-close"})
        }
    }


    render() {
        return (
            <Fragment>
                <Navbar  expand="lg" className="fixed-top shadow-sm bg-white mb-5 py-3" variant="light" bg="white">
                    <Navbar.Brand onClick={this.showHideSideNav}  href="#"><FontAwesomeIcon icon={faBars} /></Navbar.Brand>
                    <b>ADMIN DASHBOARD</b>
                </Navbar>

                <div >
                    <Link to="/about" ><FontAwesomeIcon className="NavItem"  icon={faHome} /><span className={this.state.NavText}>Home</span></Link>
                    
                </div>

                <div onClick={this.showHideSideNav} className={this.state.mainDivOverlay}></div>

                <div>
                    {this.props.children}
                </div>

            </Fragment>
        );

    }
}

export default Menu;

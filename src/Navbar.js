import React, { Component } from 'react';
import iconHome from './images/iconHome.png';
import iconCamera from './images/iconCamera.png';
import iconMap from './images/iconMap.png';
import iconMenu from './images/iconMenu.png';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            displayButton: "block"
        }
        this.HandleNav = this.HandleNav.bind(this);
    }
    // this is the function that activated when the button clicked, the func change the width of the div
    HandleNav() {
        this.state.width === 0 ? this.setState({ width: 65, displayButton: "none" }) : this.setState({ width: 0, displayButton: "block" });
    };

    render() {
        return (
            <div dir={this.props.direction} className = "navBar">
                {/* the first button  */}
                <button style={{ display: `${this.state.displayButton}` }} onClick={this.HandleNav}><img src={iconMenu} alt="Menu icon" /></button>
                <div id="Nav" style={{ width: ` ${this.state.width}%` }}>
                    <div id='NavBar_icons'>
                        {/* the seacond button  */}
                        <button style={{ display: `${!this.state.displayButton}` }} onClick={this.HandleNav}><img src={iconMenu} alt="Menu icon" /></button><br /><br />
                        {/* icon to first page */}
                        <Link to="/">
                            <div className="navbarList">
                                <img
                                    src={iconHome} alt="home icon" />&nbsp;&nbsp;
                    {this.props.languageNow.navBar.home}
                            </div>
                        </Link>
                        <div className="navbarList">
                            <img
                                src={iconCamera} alt="Camera icon" />&nbsp;&nbsp;
                                {this.props.languageNow.navBar.shareAMoment}
                        </div>
                        <Link to={`/${this.props.languageNow.path}/map`}>
                            <div className="navbarList">
                                <img
                                    src={iconMap} alt="Map icon Home" />&nbsp;&nbsp;
                            {this.props.languageNow.navBar.map}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
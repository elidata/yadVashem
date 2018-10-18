import React, { Component } from 'react';
import iconHome from './images/iconHome.png'
import iconCamera from './images/iconCamera.png'
import iconMap from './images/iconMap.png'
import iconMenu from './images/iconMenu.png'
export class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
         width : 0,
         displayButtio: "block"
        }
        this.HandleNav = this.HandleNav.bind(this);
    }
    HandleNav () {
       this.state.width === 0 ? this.setState ({ width:65, displayButtio: "none"}) : this.setState ({ width:0, displayButtio:"block"}) ;
          };
    
    render(){
        return(
           <div dir = {this.props.direction}>
               <button style={{display:`${this.state.displayButtio}`}} onClick={this.HandleNav}><img src={iconMenu} alt ="Menu icon"/></button>
               <div id="Nav" style={{width:` ${this.state.width}%`}}>
               <div id = 'NavBar_icons'>
               <button style={{display:`${!this.state.displayButtio}`}} onClick={this.HandleNav}><img src={iconMenu} alt ="Menu icon"/></button><br/><br/>
                    <img src={iconHome} alt="home icon"/>
                    {this.props.languageNow.navBar.home}
                    <br/><br/><br/>
                    <img src={iconCamera} alt ="Camera icon"/>
                    {this.props.languageNow.navBar.shareAMoment}
                    <br/><br/><br/>
                    <img src={iconMap} alt ="Map icon Home"/>
                    {this.props.languageNow.navBar.map}
               </div>
               </div>
           </div>
        )
    }
}
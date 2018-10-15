import React, { Component } from 'react';
import iconHome from './images/iconHome.png'

export class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
         width : 0
        }
        this.HandleNav = this.HandleNav.bind(this);
    }
    HandleNav () {

       this.state.width==0 ? this.setState ({ width:65}) : this.setState ({ width:0}) ;
          };
    
    render(){
        return(
           <div >
               
               <button onClick={this.HandleNav}>=</button>
               <div id="Nav" style={{width:` ${this.state.width}%`}}>
               <img src={iconHome} alt="home icon"/>

               </div>
           </div>
        )
    }
}
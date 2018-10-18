import React, { Component } from 'react';
import iconCoffee from './images/iconCoffee.png'
import iconBathroom from './images/iconBathroom.png'
import iconHomeFooter from './images/iconHomeFooter.png'
import {Weather} from './weather';

export class Footer extends Component {
    
    render(){
        return(
              <div dir='ltr' id = 'footer'>
                     <span>&nbsp;&nbsp;&nbsp; </span>
                    <img className = "footerIcon" src={iconHomeFooter} alt ="icon Home"/>
                    <span>&nbsp;&nbsp;&nbsp; </span>
                    <img className = "footerIcon" src={iconBathroom} alt ="icon Bathroom"/>
                    <span>&nbsp;&nbsp;&nbsp; </span>
                    <img className = "footerIcon" src={iconCoffee} alt ="icon Coffee"/> 
                    <Weather />
              </div>  
        );
    }
}



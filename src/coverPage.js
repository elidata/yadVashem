import React, { Component } from 'react';
import {LanguageButtons, languages} from './languages';


export class CoverPage extends Component {
    render(){
        return(
            <div dir = {this.props.direction}>
                <img src = {this.props.languageNow.coverPage.imgSrc} alt = "Yad Vashem logo" />
                <LanguageButtons 
                turnEnglish = {this.props.turnEnglish} 
                languageNow = {this.props.languageNow} 
                direction = {this.props.direction}
                turnHebrew = {this.props.turnHebrew}/>
            </div>
        );
    }
}
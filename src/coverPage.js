import React, { Component } from 'react';
import {LanguageButtons} from './languages';


export class CoverPage extends Component {
    render(){
        console.log('coverPageHistory',window.history);
        return(
            <div dir = {this.props.direction}>
                <img src = {this.props.languageNow.coverPage.imgSrc} alt = "Yad Vashem logo" />
                <LanguageButtons 
                turnEnglish = {this.props.turnEnglish} 
                languageNow = {this.props.languageNow} 
                direction = {this.props.direction}
                turnHebrew = {this.props.turnHebrew}/>
                <br/><br/><br/><br/>
                <button onClick={() => {this.props.history.push(`/locationsList`)}}>Download</button>
            </div>
        );
    }
}
export default CoverPage;
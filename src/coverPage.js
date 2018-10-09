import React, { Component, Link } from 'react';
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
                {/* <Link to = {"./locations/"}> */}
                <button onClick={() => {this.props.history.push(`/locations`)}}>Download</button>
                {/* </Link> */}
            </div>
        );
    }
}
export default CoverPage;
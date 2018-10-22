import React, { Component } from 'react';
import { LanguageButtons } from './languageButtons';


export class CoverPage extends Component {
    render() {
        return (
            <div dir={this.props.direction}>
                {/* logo */}
                <img src={this.props.languageNow.coverPage.imgSrc} alt="Yad Vashem logo" />
                <LanguageButtons
                    turnEnglish={this.props.turnEnglish}
                    languageNow={this.props.languageNow}
                    direction={this.props.direction}
                    turnHebrew={this.props.turnHebrew} />
                <br /><br /><br /><br />
                {/* changes URL to next page(locations list) */}
                <button onClick={() => { this.props.history.push(`/${this.props.languageNow.path}/locationsList`) }}>Download</button>
                {/* <div className = "loader"></div> */}
            </div>
        );
    }
}
export default CoverPage;
import React, { Component } from 'react';
export class LanguageButtons extends Component {
  render() {
    return (
      <div dir={this.props.direction}>
        {/* <h1>{this.props.languageNow.coverPage.title}</h1> */}
        {/* sends to the functions in Main  */}
        <button onClick={this.props.turnEnglish} >English</button>
        <button onClick={this.props.turnHebrew} >עברית</button>
      </div>
    );
  }
}
import React, { Component } from 'react';
import map from './images/map.jpg';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export class Map extends Component {
    render() {
        return (
            <div dir={this.props.direction}>
                <Navbar languageNow={this.props.languageNow} />
                <h2>{this.props.languageNow.map.title}</h2>
                <img src={map} alt={this.props.languageNow.map.title} />
                <button onClick={() => window.history.back()}>{this.props.languageNow.map.back}</button>
                <br /><br /><br /><br /><br /><br /><br /><br />
                <Footer languageNow={this.props.languageNow} dir={this.props.direction} />
            </div>
        );
    };
}
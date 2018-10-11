import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import iconWalkingMan from './images/iconWalkingMan.png'
import iconHandicap from './images/iconHandicap.png'
import {languages} from './languages';

export class LocationsList extends Component {
    render(){
        return(
            <div className="AllLocationsList" dir = {this.props.direction}>
                {Object.keys(this.props.languageNow.locationsList).map((item, i) =>
                    <div className="aLocation" key = {this.props.languageNow.locationsList[item].lable}>
                        <Link to = {`/${this.props.languageNow.path}/info/${item}`}>
                            <img className = {`${this.props.direction}locationListImage`} 
                            src={languages.Globals.locationsList[item].imgSrc} 
                            alt={this.props.languageNow.locationsList[item].lable} />
                            <div className="aLocationsText">
                                <b>{this.props.languageNow.locationsList[item].lable}</b>
                                <img src = {iconWalkingMan} alt = "amount of steps"/> 
                                {languages.Globals.locationsList[item].distance}
                                {languages.Globals.locationsList[item].handicap === true && 
                                <img src = {iconHandicap} alt = "iconHandicap"/> }<br/>
                                {this.props.languageNow.locationsList[item].description}
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        );
    }
}

export default Location;
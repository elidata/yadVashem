import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import iconWalkingMan from './images/iconWalkingMan.png'
import iconHandicap from './images/iconHandicap.png'
import {languages} from './languages';

export class LocationsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchValue: "",
        }

    
        this.searchEventHandler = this.searchEventHandler.bind(this);
    }
    
    searchEventHandler(event){
        this.setState({searchValue: event.target.value})
    }
    render(){
        return(
            <div className="AllLocationsList" dir = {this.props.direction}>
                <form>
                    <input type = "text" placeholder = {this.props.languageNow.locationListPage.placeHolderSearch} name = "searchLocationList" value = {this.state.searchValue} onChange = {this.searchEventHandler} ></input>
                </form>

                {Object.keys(this.props.languageNow.locationsList).map((item, i) =>
                (this.props.languageNow.locationsList[item].lable.toLowerCase().includes(this.state.searchValue.toLowerCase())  &&
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
                    )
                    
                )}
            </div>
        );
    }
}



export default Location;
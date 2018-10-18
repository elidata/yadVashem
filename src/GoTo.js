import React, { Component } from 'react';
import * as distancesJson from './distances.json';

export class GoTo extends Component{
    constructor(props){
        super(props);
        this.state = {
            chosenDistance:null,
            text1: '',
            text2: ''
        }
        this.findDistance = this.findDistance.bind(this);
    }
    findDistance(e){
        let distances = distancesJson.distances;
        let currentValue = e.target.value;
        let currentPlace = this.props.thisItem;
        this.setState({chosenDistance: distances[currentPlace][currentValue],
        text1: this.props.languageNow.info.goToDistanceText,
        text2: this.props.languageNow.info.goToDistanceinfo})
        }
    render(){
        return(
            <div>
                {/* the dropdown */}
                <select onChange = {this.findDistance}>
                {/* do a map on the keys and according the URL choose which places to display */}
                    {Object.keys(this.props.languageNow.locationsList).map(
                        (item, i) =>
                        (window.location.href.substr(window.location.href.lastIndexOf('/') + 1) !== item &&
                        <option key={i} value={item}>{this.props.languageNow.locationsList[item].label}</option>
                        )
                    )}
                </select>
                <br/>
                <h3>{this.state.text1}&nbsp;{this.state.chosenDistance}&nbsp;{this.state.text2}</h3>
                <br></br><br></br>
            </div>
        );
    }
}
import React, { Component } from 'react';
import * as distancesJson from './distances.json';

export class GoTo extends Component{
    constructor(props){
        super(props);
        this.state = {
            chosenDistance:null
        }
        this.findDistance = this.findDistance.bind(this);
    }
    findDistance(e){
        let distances = distancesJson.distances;
        let currentValue = e.target.value;
        let currentPlace = this.props.thisItem;
        this.setState({chosenDistance: distances[currentPlace][currentValue]})
    }
    
    render(){
        return(
            <div>
                <select onChange = {this.findDistance}>
                    {Object.keys(this.props.languageNow.locationsList).map(
                        (item, i) =>
                        (window.location.href.substr(window.location.href.lastIndexOf('/') + 1) !== item &&
                        <option key={i} value={item}>{this.props.languageNow.locationsList[item].lable}</option>
                        )
                    )}
                </select>
                {this.state.chosenDistance}
            </div>
        );
    }
}
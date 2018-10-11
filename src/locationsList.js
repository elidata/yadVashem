import React, { Component } from 'react';
import {Link , Route} from 'react-router-dom';
import {Info} from './info';


export class LocationsList extends Component {
    render(){
        console.log('abc' , this.props.languageNow);
        console.log('locationsListHistory',window.history);
        return(
            <div dir = {this.props.direction}>
                {Object.keys(this.props.languageNow.locationsList).map((item, i) =>
                    <div className="aLocation" key = {this.props.languageNow.locationsList[item].lable}>
                        <Link to = {`/info/${item}`}>
                            {this.props.languageNow.locationsList[item].lable}
                            <img width = {100} src={this.props.languageNow.locationsList[item].imgSrc} alt={this.props.languageNow.locationsList[item].lable} />
                            <br></br><br></br>
                        </Link>
                    </div>
                )}
            </div>
        );
    }
}

export default Location;
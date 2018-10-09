import React, { Component } from 'react';

export class Locations extends Component {
    render(){
        console.log('abc' , this.props.languageNow);
        console.log('locationsHistory',window.history);
        return(
            <div dir = {this.props.direction}>
                <h1>locations-רשימת מקומות</h1>
                {Object.keys(this.props.languageNow.locations).map((item, i) => 
                    <li className="travelcompany-input" >
                       {this.props.languageNow.locations[item].lable}

                    </li>
                )}
            </div>
        );
    }
}
export default Location;
import React, { Component } from 'react';
import * as distancesJson from './distances.json';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export class GoTo extends Component {
    constructor(props) {
        super(props);
        this.locationsList = this.props.languageNow.locationsList
        this.state = {
            chosenDistance: null,
        }
    }
    componentWillMount() {
        function compare (a, b) {
            const distancedA = a.distance
            const distanceB = b.distance
            let comparison = 0;
            if (distancedA > distanceB) {
                comparison = 1
            } else if (distancedA < distanceB) {
                comparison = -1
            }
            return comparison
        }
        let distances = distancesJson.distances
        let currentPlace = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
        let sortFunction = (distances[currentPlace]).sort(compare);
        this.setState({
            chosenDistance: sortFunction,
        });
        console.log('ggg', sortFunction)

    }
    render() {
        return (
            <div dir={this.props.direction} >

            <div className="header">
            <Navbar languageNow={this.props.languageNow}/>
            </div>

                <ul>
                    {/* do a map on the keys and according the URL choose which places to display */}
                    {this.state.chosenDistance.map(
                        (item, i) =>
                            (window.location.href.substr(window.location.href.lastIndexOf('/') + 1) !== this.state.chosenDistance[i].name &&
                                <Link to={`/${this.props.languageNow.path}/info/${this.state.chosenDistance[i].name}`}>
                                    <li className="goToList" key={i} value={item}>{Object.keys(this.locationsList).map((location, index) =>
                                        (location === this.state.chosenDistance[i].name && this.locationsList[location].label))}
                                        &nbsp;
                                        {this.state.chosenDistance[i].distance}
                                        &nbsp;
                                        {this.props.languageNow.goTo.meters}
                                     </li>
                                </Link>

                            )
                    )}
                </ul>
                <Footer languageNow={this.props.languageNow} dir={this.props.direction} />

            </div>
        );
    }
}
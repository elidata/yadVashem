import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import iconWalkingMan from './images/iconWalkingMan.png'
import iconHandicap from './images/iconHandicap.png'
import iconWheelchair from './images/iconWheelchair.png'
import {languages} from './languages';
import {Navbar} from './Navbar';
import {Footer} from './Footer';

export class LocationsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchValue: "",
            currentArrayOfPlaces:[]
        }

    
        this.searchEventHandler = this.searchEventHandler.bind(this);
    }
    
    searchEventHandler(event){
        this.setState({searchValue: event.target.value});
    }
    // for sorting items
    // componentWillMount(){
    //     function compare (a,b){
    //         const idA = a.id
    //         const idB =b.id
    //         let comparison = 0;
    //         if (idA>idB) {
    //             comparison= 1
    //         }else if (idA<idB){
    //             comparison= -1
    //         }
    //         return comparison
    //     } 
    //      let sortFunction =  Object.values(this.props.languageNow.locationsList).sort(compare);
    //      this.setState({currentArrayOfPlaces: sortFunction});        
    // }
   
    render(){
        return(
            <div className="AllLocationsList  overflow" dir = {this.props.direction}>
                    <div className = "header">
                        <Navbar  languageNow={this.props.languageNow} dir = {this.props.direction}/>
                    {/* search by id */}
                        <form >
                            <input  type = "text" placeholder = {this.props.languageNow.locationListPage.placeHolderSearch} name = "searchLocationList" value = {this.state.searchValue} onChange = {this.searchEventHandler} ></input>
                        </form>
                    </div>
                <br></br><br></br>
                {/* maps over all places in order to display diffarent information about them in a list */}
                {Object.keys(this.props.languageNow.locationsList).map((item, i) =>
                // next line refers to the search by id
                (this.props.languageNow.locationsList[item].id.toString().toLowerCase().includes(this.state.searchValue.toLowerCase())  &&
                    <div className="aLocation" key = {this.props.languageNow.locationsList[item].id}>
                        <Link to = {`/${this.props.languageNow.path}/info/${item}`}>
                            <img className = {`${this.props.direction}locationListImage`} 
                            src={languages.Globals.locationsList[item].imgSrc} 
                            alt={this.props.languageNow.locationsList[item].label} />
                            <div className="aLocationsText">
                            {/* icon amount of steps */}
                            &nbsp;
                                <b>{this.props.languageNow.locationsList[item].label}</b>
                                <img src = {iconWalkingMan} alt = "amount of steps"/> 
                                {languages.Globals.locationsList[item].distance}
                            {/* icon accessible */}
                            &nbsp;
                                {languages.Globals.locationsList[item].handicap === true && 
                                <img src = {iconHandicap} alt = "iconHandicap"/> }
                            {/* icon accessible with helper */}
                            &nbsp;
                                {languages.Globals.locationsList[item].wheelchair=== true && 
                                <img src = {iconWheelchair} alt = "iconWheelchair"/> }<br/>
                            {/* description about place */}
                                {this.props.languageNow.locationsList[item].description}
                                
                            </div>
                        </Link>
                      
                    </div>
                    )
                    
                )}
                
                  {<Footer/>} 
            </div>
        );
    }
}



export default Location;
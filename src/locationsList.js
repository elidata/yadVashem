import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import iconWalkingMan from './images/iconWalkingMan.png'
import iconHandicap from './images/iconHandicap.png'
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
    componentWillMount(){
        function compare (a,b){
            const idA = a.id
            const idB =b.id
            let comparison = 0;
            if (idA>idB) {
                comparison= 1
            }else if (idA<idB){
                comparison= -1
            }
            return comparison
        } 
         let sortFunction =  Object.values(this.props.languageNow.locationsList).sort(compare);
         console.log("fff", sortFunction)
         this.setState({currentArrayOfPlaces: sortFunction});
         console.log('kkk',this.state.currentArrayOfPlaces)
        
    }
   
    render(){
        let ids = Object.keys(this.props.languageNow.locationsList).map((item, i) =>
        {return this.props.languageNow.locationsList[item].id}).sort();
        console.log("ids", ids)
        return(
            <div className="AllLocationsList  overflow" dir = {this.props.direction}>
                    <div className = "header">
                        <Navbar  languageNow={this.props.languageNow} dir = {this.props.direction}/>
                        <form >
                            <input  type = "text" placeholder = {this.props.languageNow.locationListPage.placeHolderSearch} name = "searchLocationList" value = {this.state.searchValue} onChange = {this.searchEventHandler} ></input>
                        </form>
                    </div>
                <br></br>
                <br></br>
                
                {Object.keys(this.props.languageNow.locationsList).map((item, i) =>
                (this.props.languageNow.locationsList[item].id.toString().toLowerCase().includes(this.state.searchValue.toLowerCase())  &&
                    <div className="aLocation" key = {this.props.languageNow.locationsList[item].id}>
                    {/* {Object.values(this.props.languageNow.locationsList).sort} 
                    {console.log(Object.values(this.props.languageNow.locationsList[item].id))} */}
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
                                {this.props.languageNow.locationsList[item].id}
                            </div>
                        </Link>
                      
                    </div>
                    )
                    
                )}
                
                  {<Footer/>} 
                  {console.log('all locations' , Object.keys(this.props.languageNow.locationsList).map((item, i) =>
                    {return this.props.languageNow.locationsList[item].id}).sort( 

                    ))}
            </div>
        );
    }
}



export default Location;
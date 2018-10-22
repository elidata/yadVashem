import React, { Component } from 'react';
import {languages} from './languages';
import {Navbar} from './Navbar';
import {Footer} from './Footer';
import {Link} from 'react-router-dom';


export class Info extends Component {
    render(){
        return(
            <div dir = {this.props.direction} className = "overflow">      
           <br></br>
                <Navbar languageNow={this.props.languageNow}/>
                <br></br>             
                {/* maps over all places to find the place that equills to the URL n order to display it's information */}
                {Object.keys(this.props.languageNow.locationsList).map((item, i) =>
                    (window.location.href.substr(window.location.href.lastIndexOf('/') + 1) === item && 
                    <div className="locationsList-List" key = {i}>
                    {/* title */}
                       <b>{this.props.languageNow.locationsList[item].label}</b>
                       <br></br>
                    {/* image */}
                       <img className = {'locationImage'} 
                       src={languages.Globals.locationsList[item].imgSrc} 
                       alt={this.props.languageNow.locationsList[item].label} /> 
                       <br></br>
                    {/* description */}
                       {this.props.languageNow.locationsList[item].description}
                       <br></br>   <br></br>
                    {/*button to locations list  */}
                       <button onClick={() => {this.props.history.push(`/${this.props.languageNow.path}/locationsList`)}}>back</button>
                       <audio controls>
                       <source src= {this.props.languageNow.locationsList[item].vocalSrc} type="audio/mpeg"/>
                        Your browser does not support the audio element.
                        </audio>
                    {/* options to next place */}
                        <Link to = {`/${this.props.languageNow.path}/goTo/${item}`}>
                        <h2 id = "linkToGoTo">{this.props.languageNow.info.goTo}</h2>
                        </Link>
                     {<Footer languageNow={this.props.languageNow} dir = {this.props.direction}/>}  
                    </div>
                    )
                )}
            </div>
        )
    }
}


























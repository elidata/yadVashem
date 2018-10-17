import React, { Component } from 'react';
import {languages} from './languages';
import {Navbar} from './Navbar';
import {Footer} from './Footer';


export class Info extends Component {
    render(){
        return(
            <div dir = {this.props.direction}>      
           <br></br>
                <Navbar languageNow={this.props.languageNow}/>
                <br></br>             
                {Object.keys(this.props.languageNow.locationsList).map((item, i) =>
                    (window.location.href.substr(window.location.href.lastIndexOf('/') + 1) === item && 
                    <div className="locationsList-List" key = {i}>
                       <b>{this.props.languageNow.locationsList[item].lable}</b>
                       <br></br>
                       <img className = {'locationImage'} 
                       src={languages.Globals.locationsList[item].imgSrc} 
                       alt={this.props.languageNow.locationsList[item].lable} /> 
                       <br></br>
                       {this.props.languageNow.locationsList[item].description}
                       <br></br>   <br></br> 
                       <button onClick={() => {this.props.history.push(`/${this.props.languageNow.path}/locationsList`)}}>back</button>
                       <audio controls>
                       <source src= {this.props.languageNow.locationsList[item].vocalSrc} type="audio/mpeg"/>
                        Your browser does not support the audio element.
                        </audio>

                     {<Footer languageNow={this.props.languageNow} dir = {this.props.direction}/>}  
                    </div>
                    )
                )}
            </div>
        )
    }
}


























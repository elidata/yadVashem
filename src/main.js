import React, { Component } from 'react';
import {CoverPage} from './coverPage';
import {Info} from './info';
import {Locations} from './locations';
import {languages} from './languages';
import { Switch, Route, BrowserRouter} from 'react-router-dom';


export class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            languageNow: languages.Hebrew, 
            direction: "rtl"
        }
        this.turnEnglish = this.turnEnglish.bind(this);
        this.turnHebrew = this.turnHebrew.bind(this);
    }
    turnEnglish(){
        this.setState({languageNow: languages.English});
        this.setState({direction:"ltr"});
      }
    turnHebrew(){
        this.setState({languageNow: languages.Hebrew});
        this.setState({direction: "rtl"});
      }

    render(){
        return(
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path = "/"
                            render = {(props) => 
                                <CoverPage {...props}
                                // passes props to coverPage: what language is chosen, the direction of text, the functions for changing the state in main to a different language
                                languageNow = {this.state.languageNow} 
                                direction = {this.state.direction} 
                                turnEnglish = {this.turnEnglish}
                                turnHebrew = {this.turnHebrew}/>
                        }/>
                        <Route path = "/locations"
                            render = {(props) => 
                                <Locations {...props}
                                // passes props to coverPage: what language is chosen, the direction of text, the functions for changing the state in main to a different language
                                languageNow = {this.state.languageNow} 
                                direction = {this.state.direction}/>
                        }/>
                        <Route path = "/info" component = {Info}/>
                    </Switch>
                </BrowserRouter>
               
            </div>
        );
    }
}


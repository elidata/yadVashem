import React, { Component } from 'react';
import iconCoffee from './images/iconCoffee.png'
import iconBathroom from './images/iconBathroom.png'
import iconHomeFooter from './images/iconHomeFooter.png'

export class Footer extends Component {
    
    render(){
        return(
              <div>
                  <Weather />
              </div>  
        );
    }
}

const Api_Key = 'd80476a59498381bfef271eacf20ab65';
class Weather extends Component {
    constructor(props){
        super(props);
        this.state = {
          temperatureC: "",
          temperatureF: "",
        }
      }
      getWeather = async () => {
        const city = 'Jerusalem';
        const country = 'Israel';
        const api_callC = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}&units=metric`);
        const responseC = await api_callC.json();
        const api_callF = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}&units=imperial`);
        const responseF = await api_callF.json();
        
        this.setState({
          temperatureC: responseC.main.temp,
          temperatureF: responseF.main.temp
        })
        
        console.log(responseC);
        console.log("main", responseC.main.temp);
        
      }
      componentDidMount() {
        this.getWeather();
      }
  render(){
        return(
              <div dir='ltr' id = 'footer'>
                <span>&nbsp;&nbsp;&nbsp; </span>
                <img src={iconHomeFooter} alt ="icon Home"/>
                 <span>&nbsp;&nbsp;&nbsp; </span>
                <img src={iconBathroom} alt ="icon Bathroom"/>
                <span>&nbsp;&nbsp;&nbsp; </span>
                <img src={iconCoffee} alt ="icon Coffee"/>
                <span>&nbsp;&nbsp;&nbsp; </span>
                {this.state.temperatureC} 
                <span>   &#8451; &nbsp; &nbsp; &nbsp; &nbsp;</span> 
                {this.state.temperatureF} 
                <span> &#8457; </span> 
             </div>  
        );
    }
}


import React, { Component } from 'react';
const Api_Key = 'd80476a59498381bfef271eacf20ab65';
export class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperatureC: "",
      temperatureF: "",
    }
  }
  getWeather = async () => {
    const city = 'Jerusalem';
    const country = 'Israel';
    const api_callC = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}&units=metric`);
    const responseC = await api_callC.json();
    const api_callF = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}&units=imperial`);
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
  render() {
    return (
      <div className="weather" >
        <span>&nbsp;&nbsp;&nbsp; </span>
        {this.state.temperatureC}
        <span>   &#8451;  &nbsp; &nbsp;</span>
        {this.state.temperatureF}
        <span> &#8457; </span>
      </div>
    );
  }
}

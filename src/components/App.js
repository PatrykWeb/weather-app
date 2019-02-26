import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Result from './Result';


const apiKey = 'e62f39241165c5d23112252cd7a93053';

class App extends Component {
  state = {
    value: "", 
    date: "",
    city: "", 
    sunrise: "", 
    sunset: "", 
    temp: "", 
    pressure: "", 
    wind: "", 
    err: false,
  }
  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  // handleCitySumbit = (e) => {
  //   e.preventDefault()
  //   const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${apiKey}&units=metric`;
  //   fetch(API)
  //   .then(response => {
  //     if(response.ok) {
  //       return response
  //     }
  //     throw Error ('Nie udało się')
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     const date = new Date().toLocaleString()
  //     this.setState({
  //       err: false, 
  //       date: date,
  //       sunrise: data.sys.sunrise, 
  //       sunset: data.sys.sunset, 
  //       temp: data.main.temp, 
  //       pressure: data.main.pressure, 
  //       wind: data.wind.speed,
  //       city: this.state.value,  
        
  //     })
  //   })
//     .catch(err => {
//       console.log(err);
//       this.setState(state => ({
//         err: true,
//         city: state.value, 
//       }))
//   })
// }
  componentDidUpdate(prevProps, prevState){
    // console.log('poprzednia wartość' + prevState.value);
    // console.log('aktualna wartosc' + this.state.value);

    if(this.state.value.length === 0) return
    
    if(prevState.value !== this.state.value) {
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${apiKey}&units=metric`;
    fetch(API)
    .then(response => {
      if(response.ok) {
        return response
      }
      throw Error ('Nie udało się')
    })
    .then(response => response.json())
    .then(data => {
      const date = new Date().toLocaleString()
      this.setState({
        err: false, 
        date: date,
        sunrise: data.sys.sunrise, 
        sunset: data.sys.sunset, 
        temp: data.main.temp, 
        pressure: data.main.pressure, 
        wind: data.wind.speed,
        city: this.state.value,  
        
      })
    })
    .catch(err => {
      console.log(err);
      this.setState(state => ({
        err: true,
        city: state.value, 
      }))
  })
        
    }
  }


  render() {
    return (
      <div className="App">
      <Form value = {this.state.value} change = {this.handleInputChange}/>
      <Result weather = {this.state}/>
      </div>
    );
  }
}

export default App;

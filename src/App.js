import React from 'react'
import './App.css';
import CityComponent from './modules/CityComponent';
import WeatherInfoComponent from './modules/WeatherInfoComponent';

const myApp = () => {
  
  return(
    <div className="container">
      <span className="AppLabel">React Weather App</span>
     {/* <CityComponent className="city"></CityComponent> */}
     <WeatherInfoComponent className="weather"></WeatherInfoComponent>
    </div>
  )
}


export default myApp;

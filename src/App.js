import React , {useState} from 'react'
import './App.css';
import Axios from "axios";
import CityComponent from './modules/CityComponent';
import WeatherInfoComponent from './modules/WeatherInfoComponent';


const API_KEY ="7f234b10c85e455d0918554758ec3b5a"


const App = () => {
  const [city , updateCity] = useState();
  const [weather , updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
  const response =
    await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    updateWeather(response.data);




  }



  return(
    <div className="container">
      <span className="AppLabel">React Weather App</span>
    {weather?(
    <WeatherInfoComponent weather = {weather}/>
    ):(
    <CityComponent className="city" updateCity={updateCity} fetchWeather={fetchWeather} />
    )}
    </div>
  )
}


export default App;

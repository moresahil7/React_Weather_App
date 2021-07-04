import React from 'react'
import "./styles.css"


export const WeatherInfoIcons = {
    sunset: "/icons/temp.svg",
    sunrise: "/icons/temp.svg",
    humidity: "/icons/humidity.svg",
    wind: "/icons/wind.svg",
    pressure: "/icons/pressure.svg",
};


const WeatherComponent = (props) => {
    const {name , value}  = props;
    return(
        <div className="infocontainer">
            <img src={WeatherInfoIcons[name]} alt="" className="infoicon" />
            <span className="infolabel">{value}<span className="infolabel1">{name}</span></span>
        </div>
    )
}

const WeatherInfoComponent = (props) => {
    const {weather} = props;
    const isDay = weather?.weather[0].icon?.includes('d')
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }
        return (
      <>
      <div className="weathercondition">
          <span className="condition"><span className="condi" >{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>  {`|${weather?.weather[0].description}`}</span>
          

      </div>
      <span className="location">
              {`${weather?.name},${weather?.sys?.country}`}
          </span>
      <span className="wealabel">
             Weather Information
          </span>
          <div className="weatherinfocontainer">
              <WeatherComponent name= {isDay ? "sunrise" : "sunset"}
              value={getTime(weather?.sys[isDay ? "sunrise" : "sunset"])}
               />
              <WeatherComponent name="humidity" value={weather?.main?.humidity} />
              <WeatherComponent name="wind" value={weather?.wind?.speed} />
              <WeatherComponent name="pressure" value={weather?.main?.pressure} />
              

          </div>
      </>
    )
}


export default WeatherInfoComponent;
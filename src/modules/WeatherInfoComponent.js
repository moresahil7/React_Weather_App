import React from 'react'
import "./styles.css"

const WeatherInfoComponent = () => {
    return (
      <>
      <div className="weathercondition">
          <span className="condition"><span className="condi" >30C</span> | Cloudy</span>
          <img src="/icons/cloudy.svg" alt="photo" className="WeatherLogo" />
          

      </div>
      <span className="location">
              Pune,India
          </span>
      <span className="wealabel">
             Weather Information
          </span>
      </>
    )
}


export default WeatherInfoComponent;
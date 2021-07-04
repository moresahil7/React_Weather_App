import React from 'react'
import "./styles.css"


const CityComponent = (props) => {
    const {updateCity , fetchWeather} = props;
    return (
        <>
            <span className="citylabel">Find Weather in your City</span>
            <img src="/icons/rain-night.svg" alt="msg" className="WeatherLogo" />
            <form action="" className="search" onSubmit = {fetchWeather}>
                <input type="text" placeholder="Enter city here" onChange = {(e)=>updateCity(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
        </>
        
    )
}


export default CityComponent;

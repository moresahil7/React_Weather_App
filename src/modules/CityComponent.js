import React from 'react'
import "./styles.css"


const CityComponent = () => {
    return (
        <>
            <span className="citylabel">Find Weather in your City</span>
            <img src="/icons/rain-night.svg" alt="photo" className="WeatherLogo" />
            <form action="" className="search">
                <input type="text" placeholder="Enter city here"/>
                <button>Search</button>
            </form>
        </>
        
    )
}


export default CityComponent;

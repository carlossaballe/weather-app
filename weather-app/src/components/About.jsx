import React from 'react';
import './About.css';

export default function About (){

    return (
        <div className='about'>

            <h2>About Weather App</h2>

            <p> 
            Weather App is developed on Henry and it shows data from OpenWeather, a team of IT experts and data scientists that has been practising deep weather data science since 2014. 
            For each point on the globe, OpenWeather provides historical, current and forecasted weather data via light-speed APIs. 
            Headquarters in London, UK.
            </p>

            <p>
            We are glad to invite you to join our network of private weather stations. Today we have more than 40,000 weather stations around the world. 
            You can connect your weather station to OpenWeatherMap and get a convenient interface for gathering and monitoring data from your weather station. 
            You can also embed your weather station data into your home page.
            </p>

            <br/>
            <br/>

            <h3>Powered by</h3>

            <span>
            <img src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png" alt=""/>
            </span>
        </div>
    )


}


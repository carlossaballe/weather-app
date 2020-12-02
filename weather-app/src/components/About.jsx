import React from 'react';
import './About.css';

export default function About() {

    return (
        <div className='about'>

            <h2>Acerca de Weather App</h2>

            <p>

                This application is developed with ReactJS, it is a simple application in which
                the interaction with an API is shown, in this case OpenWeather, where the weather
                of the cities of the world can be consulted, the information is organized mainly
                in two screens, the main one, where cards of the cities consulted are shown and
                when clicking on their names, a detail screen and the map of the selected city is displayed.
            </p>
          
            <p>
                To use this application, remember that you must have the APIs corresponding to 
                <a href="https://openweathermap.org/api"> OpenWeather</a>  and <a href="https://cloud.google.com/"> Google</a>, you can consult the information on their respective
                web pages. Read the README file on <a href="https://github.com/carlossaballe/weather-app"> Github weather-app repo</a>.
            </p>

            <br />
            <br />

            <h3>Powered by</h3>

            <span className="img-container">
                <img className="img1" src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png" alt="" />
                <img className="img2" src="https://www.gstatic.com/devrel-devsite/prod/v73fbca10ce7899da426d451b3f74ee09bc6846fcf427552c7e8e85261505ef2c/cloud/images/cloud-logo.svg" alt="" />
            </span>
        </div>
    )


}


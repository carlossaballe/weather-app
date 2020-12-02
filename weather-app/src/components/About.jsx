import React from 'react';
import './About.css';

export default function About() {

    return (
        <div className='about'>

            <h2>Acerca de Weather App</h2>

            <p>
                Esta aplicación está desarrollada con ReactJS, es una aplicación sencilla en la que se muestra la interacción con una API, 
                en este caso OpenWeather, en la cual se puede consultar el clima de las ciudades del mundo, la información se organiza principalmente en dos pantallas, 
                una principal, donde se muestran tarjetas de las ciudades consultadas y al hacer clic en sus nombres se despliega una pantalla de detalle y el mapa de la ciudad seleccionada.
            </p>
          
            <p>
                Para probar esta aplicación, recuerda que debes tener las APIs correspondientes a
                <a href="https://openweathermap.org/api"> OpenWeather</a>  y <a href="https://cloud.google.com/"> Google</a>, puedes consultar la información correspondiente en sus respectivas
                páginas web. Lee el archivo README.md en el <a href="https://github.com/carlossaballe/weather-app"> repositorio de Github</a> para más detalles.
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


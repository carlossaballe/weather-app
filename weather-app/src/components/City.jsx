import React from "react";
import GoogleMaps from "simple-react-google-maps"
import {API_KEY_GM} from "../credentials.js"
import './City.css';

export default function Ciudad({ city }) {

    if (!city) {
        window.location.href = "/";
    }

    return (
        <div className="main-container">
            <div className="left-container">

                <div className="title-iconII">
                    <div className="titleII">{city.name}</div>
                    <img src={"http://openweathermap.org/img/wn/" + city.weather.icon + "@2x.png"} width="90" height="90" alt="" />
                </div>

                <div className="key-valueII">
                    <div className="keyII">Temperatura:</div>
                    <div className="valueII">{city.temp.temp} ºC</div>
                </div>

                <div className="key-valueII">
                    <div className="keyII">Temperatura mínima:</div>
                    <div className="valueII">{city.temp.temp_min} ºC</div>
                </div>

                <div className="key-valueII">
                    <div className="keyII">Temperatura máxima:</div>
                    <div className="valueII">{city.temp.temp_max} ºC</div>
                </div>

                <div className="key-valueII">
                    <div className="keyII">Humedad relativa:</div>
                    <div className="valueII">{city.temp.humidity}%</div>
                </div>

                <div className="key-valueII">
                    <div className="keyII">Velocidad del viento:</div>
                    <div className="valueII">{city.wind.speed} km/h</div>
                </div>

                <div className="key-valueII">
                    <div className="keyII">Presión:</div>
                    <div className="valueII">{city.temp.pressure} hPa</div>
                </div>

                <div className="key-valueII">
                    <div className="keyII">Clima:</div>
                    <div className="valueII">{city.weather.description}</div>
                </div>

                <div className="key-valueII">
                    <div className="keyII">Coordenadas</div>
                    <div className="valueII">{}</div>
                </div>

                <div className="key-valueII">
                    <div className="keyII">Latitud:</div>
                    <div className="valueII">{city.latitud}º</div>
                </div>

                <div className="key-valueII">
                    <div className="keyII">Longitud:</div>
                    <div className="valueII">{city.longitud}º</div>
                </div>

            </div>
        
            <GoogleMaps
                apiKey={API_KEY_GM} // Make sure you have created a credentials.js file into src folder
                style={{ height: "92vh", width: "100%" }}
                zoom={12}
                center={{ lat: city.latitud, lng: city.longitud }}
                markers={{ lat: city.latitud, lng: city.longitud }} //optional
            />

        </div>
    )
}
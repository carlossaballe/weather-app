import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card({ min, max, name, img, onClose, id, wind, temp, weather, clouds, latitud, longitud }) {

  return (

    <div className="card">

      <div className="head">
        <div className="head-one">
          <Link to={`/city/${id}`} >
            <h5>{name}</h5>
          </Link>
          <img src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} width="80" height="80" alt="" />
        </div>

        <button className="close-button" onClick={onClose}>x</button>
      </div>

      <div className="key-value">
        <h6>Temperatura:</h6>
        <p className="value">{temp.temp}°C</p>
      </div>

      <div className="key-value">
        <h6>Temperatura mínima:</h6>
        <p className="value">{min}°C</p>
      </div>

      <div className="key-value">
        <h6>Temperatura máxima:</h6>
        <p className="value">{max}°C</p>
      </div>

      <div className="key-value">
        <h6>Humedad relativa:</h6>
        <p className="value">{temp.humidity}%</p>
      </div>

      <div className="key-value">
        <h6>Velocidad del viento:</h6>
        <p className="value">{wind.speed} km/h</p>
      </div>

      <div className="coord">Coordenadas</div>
      <div className="key-value">
        <h6>Latitud:</h6>
        <div className="value">{latitud}</div>
      </div>
      <div className="key-value">
        <h6>Longitud:</h6>
        <p className="value">{longitud}</p>
      </div>

    </div>

  );
};

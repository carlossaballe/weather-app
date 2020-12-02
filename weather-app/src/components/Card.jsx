import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card({ min, max, name, img, onClose, id, wind, temp, latitud, longitud }) {

  return (

    <div className="container">

      <div className="title-icon-button">
        <div className="title-icon">
          <Link to={`/city/${id}`} >
            <h5>{name}</h5>
          </Link>
          <img src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} width="80" height="80" alt="" />
        </div>
        <button className="close-button" onClick={onClose}>x</button>
      </div>

      <div className="key-value">
        <div className="key">Temperatura:</div>
        <div className="value">{temp.temp}°C</div>
      </div>

      <div className="key-value">
        <div className="key">Temperatura mínima:</div>
        <div className="value">{min}°C</div>
      </div>

      <div className="key-value">
        <div className="key">Temperatura máxima:</div>
        <div className="value">{max}°C</div>
      </div>

      <div className="key-value">
        <div className="key">Humedad relativa:</div>
        <div className="value">{temp.humidity}%</div>
      </div>

      <div className="key-value">
        <div className="key">Velocidad del viento:</div>
        <div className="value">{wind.speed} km/h</div>
      </div>

      <div className="key-value">
        <div className="key">Coordenadas</div>
        <div className="value">{}</div>
      </div>

      <div className="key-value">
        <div className="key">Latitud:</div>
        <div className="value">{latitud}</div>
      </div>

      <div className="key-value">
        <h6 className="key">Longitud:</h6>
        <div className="value">{longitud}</div>
      </div>

    </div>

  );
};

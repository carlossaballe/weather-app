import React from 'react';
import './Cards.css';

import Card from './Card.jsx';

export default function Cards({ cities, onClose }) {

  return (

    cities.length > 0 ?
      <div>
        <br/>
        <div className='cards'>
          {cities.map(c => <Card
            key={c.id}
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
            wind={c.wind}
            temp={c.temp}
            weather={c.weather}
            clouds={c.clouds}
            latitud={c.latitud}
            longitud={c.longitud}
          />
          )}
        </div>
      </div>
      :
      <div className="empty">
        <span>ⓘ Aún no has agregado ciudades</span>
      </div>
  );

}

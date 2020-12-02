import React, { useState } from 'react';
import Nav from '../components/Nav.jsx';
import About from '../components/About.jsx';
import Cards from '../components/Cards.jsx';
import City from '../components/City.jsx';
import { Route } from 'react-router-dom';
import { API_KEY_OW } from '../credentials.js'
import './App.css';

function App() {

  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY_OW}&units=metric&lang=es`)
      .then(r => r.json())
      .then((response) => {

        for (let i = 0; i < cities.length; i++) {

          if (cities[i].id === response.id) return alert('Ciudad ya agregada');

        }
        if (response.main !== undefined) {
          const ciudad = {
            min: Math.round(response.main.temp_min),
            max: Math.round(response.main.temp_max),
            img: response.weather[0].icon,
            id: response.id,
            wind: response.wind,
            temp: response.main,
            name: response.name,
            weather: response.weather[0],
            clouds: response.clouds.all,
            latitud: response.coord.lat,
            longitud: response.coord.lon
          };
          
          setCities(oldCities => [...oldCities, ciudad]);

        } else {

          alert("Ciudad no encontrada");

        }
      });
  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }
  return (

    <div>
      <Route path='/' render={() => <Nav onSearch={onSearch} />} />
      <Route path='/about' component={About} />
      <Route exact path='/' render={() => <Cards cities={cities} onClose={onClose} />} />
      <Route exact path='/city/:cityId' render={({ match }) => <City city={onFilter(match.params.cityId)} />} />
    </div>

  );
}

export default App;

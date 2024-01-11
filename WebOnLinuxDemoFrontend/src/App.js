import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [weatherList, setWeatherList] = useState();
  const [weather, setWeather] = useState();
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    axios.get('http://localhost:5108/WeatherForecast/GetAll')
      .then(response => {
        setWeatherList(response.data);
      }
      ).catch(error => {
        setErrorMessage(error.message)
      })
  }, []);

  function addNewRecord() {
    axios.post('http://localhost:5108/WeatherForecast/Create', {
      date: new Date(),
      temperatureC: 10
    })
      .then(response => {
        setWeather(response.data);
      }
      ).catch(error => {
        setErrorMessage(error.message)
      })
  };

  return (
    <div className="App">
      {weatherList && <p>Weather list: {JSON.stringify(weatherList)}</p>}
      {errorMessage && <p>Error: {errorMessage}</p>}

      <button onClick={addNewRecord}>Add new</button>
      {weather && <p>Weather: {JSON.stringify(weather)}</p>}
    </div >
  );
}

export default App;

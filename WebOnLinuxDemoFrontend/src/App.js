import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [weather, setWeather] = useState();
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    axios.get('http://localhost:5108/WeatherForecast')
      .then(response => {
        setWeather(response.data);
      }
      ).catch(error => {
        setErrorMessage(error.message)
      })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {weather && <p>Weather: {JSON.stringify(weather)}</p>}
        {errorMessage && <p>Error: {errorMessage}</p>}
      </header>
    </div>
  );
}

export default App;

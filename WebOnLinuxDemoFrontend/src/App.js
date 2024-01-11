import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [weatherList, setWeatherList] = useState();
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    getAllRecords();
  }, []);

  function getAllRecords() {
    axios.get('http://localhost:5108/WeatherForecast/GetAll')
      .then(response => {
        setWeatherList(response.data);
      }
      ).catch(error => {
        setErrorMessage(error.message)
      })
  };

  function addNewRecord() {
    axios.post('http://localhost:5108/WeatherForecast/Create', {
      date: new Date(),
      temperatureC: 10
    })
      .then(() => {
        getAllRecords();
      }
      ).catch(error => {
        setErrorMessage(error.message)
      })
  };

  return (
    <div className="App">
      <button onClick={addNewRecord}>Add new</button>
      {weatherList && <div>Weather list: {weatherList.map(item => {
        return <p>{JSON.stringify(item)}</p>
      })}</div>}
      {errorMessage && <p>Error: {errorMessage}</p>}
    </div >
  );
}

export default App;

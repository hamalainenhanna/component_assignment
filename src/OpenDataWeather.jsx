import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    try {
      const { data } = await axios.get(`https://www.metaweather.com/api/location/search/?query=${city}`);
      const woeid = data[0]?.woeid;
      if (woeid) {
        const weatherData = await axios.get(`https://www.metaweather.com/api/location/${woeid}/`);
        setWeather(weatherData.data);
        setError('');
      } else {
        setError('City not found');
      }
    } catch {
      setError('Error fetching weather data');
    }
  };

  return (
    <div>
      <h2>Weather Checker</h2>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city name" />
      <button onClick={fetchWeather}>Check Weather</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather && (
        <div>
          <h3>Weather in {weather.title}</h3>
          <p>Temperature: {weather.consolidated_weather[0].the_temp.toFixed(1)}°C</p>
        </div>
      )}
    </div>
  );
};

const OpenData = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <button onClick={() => navigate('/componentUI')}>Go to ComponentUI Page</button>
      <Weather />
    </div>
  );
};

export default OpenData;

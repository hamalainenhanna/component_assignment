import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';

function OpenDataWeather () {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    try {
      const geoResponse = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
      if (geoResponse.data.results && geoResponse.data.results.length > 0) {
        const { latitude, longitude } = geoResponse.data.results[0];
        const weatherResponse = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        setWeather(weatherResponse.data.current_weather);
        setError('');
      } else {
        setError('City not found');
        setWeather(null);
      }
    } catch {
      setError('Error fetching weather data');
    } finally {
      setLoading(false);
    }
  };

  const navigate = useNavigate();

  return (
    <div>
    <button className="button2" onClick={() => navigate('/componentUI')}> Go to ComponentUI Page</button>
    <div className="open">
      <h2>Weather App</h2>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={fetchWeather} disabled={loading}>
        {loading ? 'Fetching...' : 'Get Weather'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather && (
        <div>
          <p>Temperature: {weather.temperature} °C</p>
          <p>Windspeed: {weather.windspeed} km/h</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default OpenDataWeather;

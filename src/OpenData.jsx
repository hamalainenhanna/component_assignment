import React, { useState } from 'react'; 
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const CurrencyConverter = () => {
  const [sek, setSek] = useState('');
  const [eur, setEur] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const api_key = "";  
  const url = `https://api.freecurrencyapi.com/v1/latest?base_currency=SEK&apikey=${api_key}&currencies=EUR,USD,CAD,SEK`;

  const handleConvert = async () => {
    if (!sek || isNaN(sek)) return; // Ennen kutsua tarkistetaan, ettei syöte ole tyhjä tai virheellinen
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      setEur((sek * data.data.EUR).toFixed(2)); // Suoritetaan laskenta ja näytetään tulos
    } catch {
      setError("Error fetching currency data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='open'>
      <h2>Currency Converter</h2>
      <input type="number" value={sek} onChange={(e) => setSek(e.target.value)} placeholder="Give SEK " />
      <button onClick={handleConvert} disabled={loading}>
        {loading ? 'Counting...' : 'Convert to EUR'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {eur && <p>{sek} SEK = {eur} EUR</p>}
    </div>
  );
};

const OpenData = () => {
  
    const navigate = useNavigate();
  
    return (
    <div>
      <button className='button2' onClick={() => navigate('/componentUI')}>Go to ComponentUI Page</button>
      <CurrencyConverter />
    </div>
  );
};

export default OpenData;
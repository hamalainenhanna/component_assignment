// import React from 'react';
// import { useNavigate} from "react-router-dom";

// function OpenData() {

//     const navigate = useNavigate();

//   return (
//     <div>
//       <button className='button2' onClick={()=> navigate('/componentUI')}>Go ComponenUI Page</button>
//       <h2>Open Data API</h2>
//     </div>
//   );
// }

// export default OpenData;

import React, { useState } from 'react'; 
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const CurrencyConverter = () => {
  const [sek, setSek] = useState('');
  const [eur, setEur] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const api_key = "fca_live_IhCLWpOBbD8FqQ2SHe3OEQIG3o6UnhO9XEuV50yG&currencies=EUR%2CUSD%2CCAD%2CSEK&base_currency=SEK";
  const url = `https://api.freecurrencyapi.com/v1/latest?base_currency=SEK&apikey=${api_key}`;

  const handleConvert = async () => {
    if (!sek || isNaN(sek)) return; // Ennen kutsua tarkistetaan, ettei syöte ole tyhjä tai virheellinen
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      setEur((sek * data.data.EUR).toFixed(2)); // Suoritetaan laskenta ja näytetään tulos
    } catch {
      setError('Virhe valuuttatiedon hakemisessa');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <input type="number" value={sek} onChange={(e) => setSek(e.target.value)} placeholder="Syötä SEK-arvo" />
      <button onClick={handleConvert} disabled={loading}>
        {loading ? 'Lasketaan...' : 'Muuta EUR:ksi'}
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



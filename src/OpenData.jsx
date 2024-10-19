import React from 'react';
import { useNavigate} from "react-router-dom";

function OpenData() {

    const navigate = useNavigate();

  return (
    <div>
      <button onClick={()=> navigate('/componentUI')}>Go ComponenUI Page</button>
      <h2>Open Data API</h2>
    </div>
  );
}

export default OpenData;


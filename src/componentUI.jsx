import OrderForm from "./orderform"
import headerImage from './assets/Hali.jpg'; 
import './App.css';
import { useNavigate} from "react-router-dom";

function Header({ image, title }) {

  return (
    <div className="header">
      <img src={image} alt="Header" className="header-image" />
      <h1>{title}</h1>
    </div>
  )
}

function ComponentUI() {

    const navigate = useNavigate();
    
  return (
    <div>
      <button className="button2" onClick={()=> navigate('/OpenData')}>Go OpenData Page</button>
      <Header image={headerImage} title="Welcome to the Dog's Shop" />
      <OrderForm />
    </div>
  )
}


export default ComponentUI;
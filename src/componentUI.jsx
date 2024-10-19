import OrderForm from "./orderform"
import headerImage from './assets/Hali.jpg'; 
import './App.css';


function Header({ image, title }) {
  return (
    <div className="header">
      <img src={image} alt="Header" className="header-image" />
      <h1>{title}</h1>
    </div>
  )
}

function ComponentUI() {
  return (
    <div>
      <Header image={headerImage} title="Welcome to the Dog's Shop" />
      <OrderForm />
    </div>
  )
}


export default ComponentUI
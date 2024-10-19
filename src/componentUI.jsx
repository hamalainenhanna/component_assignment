import OrderForm from "./orderform"
import headerImage from './assets/Hali.jpg'; 
import './Header.css';

// function ComponentUI () {

//     return (
//         <div>
//         <OrderForm/>
//         </div>
//     )
// }

// Header component
function Header({ image, title }) {
  return (
    <header className="header">
      <img src={image} alt="Header" className="header-image" />
      <h1>{title}</h1>
    </header>
  )
}

function ComponentUI() {
  return (
    <div>
      {/* Header is displayed at the top of the page */}
      <Header image={headerImage} title="Welcome to the Product Page" />
      <OrderForm />
    </div>
  )
}

export default ComponentUI
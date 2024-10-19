import OrderInfo from './orderinfo';
import { useState } from 'react';
import './App.css'


function OrderForm() {

    const products = ['Bone Small', 'Bone Medium', 'Bone Large'];
    const prices = [10, 15, 20];
  
    const [selectedProduct, setSelectedProduct] = useState(0);
    const [quantity, setQuantity] = useState(1);
  
    const adjustQuantity = (amount) => {
      if (quantity + amount >= 0) {
        setQuantity(quantity + amount);
      }
    };
  
    return (
        <div className="form">
        <h3>Select product</h3>
        <p style={{ fontSize: '18px' }}>Product: <select value={selectedProduct} onChange={(e) => setSelectedProduct(Number(e.target.value))}>
          {products.map((product, index) => (
            <option key={index} value={index}>
              {product}
            </option>
          ))}
        </select></p>
  
        <p style={{ fontSize: '18px' }}>Price: {prices[selectedProduct]} €</p>
        <div>
            
        <p style={{ fontSize: '18px' }}>Quantity: <button onClick={() => adjustQuantity(-1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => adjustQuantity(1)}>+</button></p>
        </div>
  
        {/* Lähetetään tilauksen tiedot OrderInfo-komponentille */}
        <OrderInfo 
          productName={products[selectedProduct]} 
          price={prices[selectedProduct]} 
          quantity={quantity}
        />
      </div>
    );
  }


export default OrderForm

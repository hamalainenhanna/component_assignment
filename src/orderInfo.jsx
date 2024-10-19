import './App.css'


function OrderInfo({ productName, price, quantity }) {
    const totalPrice = price * quantity;
  
    return (
        <div className='info'>
        
        <ul>
            <h3>Order Information</h3>
            <p>Product: {productName}</p>
            <p>Price: {price} €</p>
            <p>Quantity: {quantity}</p>
            <p><strong>Total: {totalPrice} €</strong></p>
        </ul>
      </div>
    );
  }
  

export default OrderInfo
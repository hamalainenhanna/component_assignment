import './App.css'


function OrderInfo({ productName, price, quantity }) {
    const totalPrice = price * quantity;
  
    return (
        <div className='info'>
        
        <ul>
            <h3>Order Information</h3>
            <p style={{ fontSize: '18px' }}>Product: {productName}</p>
            <p style={{ fontSize: '18px' }}>Price: {price} €</p>
            <p style={{ fontSize: '18px' }}>Quantity: {quantity}</p>
            <p style={{ fontSize: '18px' }}><strong>Total: {totalPrice} €</strong></p>
        </ul>

      </div>
    );
  }
  

export default OrderInfo
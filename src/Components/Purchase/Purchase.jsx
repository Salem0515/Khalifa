import React, { useState } from 'react';
import './Purchase.css';
import minuse from '../../assets/minus.png';
import pluse from '../../assets/pluse.png';

const Purchase = () => {

  const [quantity, setquantity] = useState(3);
  const priceperItem = 100;


  const IncreaseQuantity = () => {

    setquantity(quantity+1);
  };


  const DecreaseQuantity = () => {
    if(quantity > 0){
      setquantity(quantity-1);
    }
  };


  const totalPrice = quantity * priceperItem;


  const handelpurchase = ()=> {
    alert(`Your purchase is successful! Total price = $${totalPrice}`);
    setquantity(0);
  }

  return (
    <div className="purchase">
      <h1>Purchase Service</h1>
      <div className="counter">
        <div className="minus_pluse">
          <img src={minuse} alt="Decrease quantity" className="minus"onClick={DecreaseQuantity} />
          <h2>$${quantity}</h2>
          <img src={pluse} alt="Increase quantity" className="pluse" onClick={IncreaseQuantity} />
        </div>
        <div className="the_price">
          <h2>$${totalPrice}</h2>
        </div>
        <button className="purchase-btn" onClick={handelpurchase}>Purchase</button>
      </div>
    </div>
  );
};

export default Purchase;

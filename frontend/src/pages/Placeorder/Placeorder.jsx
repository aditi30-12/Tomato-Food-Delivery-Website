import React from 'react'
import './Placeorder.css'
const Placeorder = () => {
  const{getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="plac-order-left">
        <p className="title">Delivery Inforamtion</p>
        </div>
        <div className="multi-fields">
          <input type="text"placeholder='First name'/>
          <input type="text"placeholder='Last Name'/>
        </div>
        <input type="email"placeholder ='Email Address'/>
        <input type="text"placeholder='Street'/>
        <div className="multi-fields">
        <input type="text"placeholder='City'/>
        <input type="text"placeholder='State'/>
        </div>
        <div className="multi-fields">
        <input type="text"placeholder='Zipcode'/>
        <input type="text"placeholder='Country'/>
      </div>
    <input type="text"placeholder='Phone'/>  
        <div className="cart total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()+2}</b>
            </div>
            <button>PROCEED TO Payment</button>

          </div>
      </div>
  </form>
  )}

export default Placeorder
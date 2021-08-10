import React from 'react'

import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Scrollbars } from "react-custom-scrollbars-2";
import CartItems from "./CartItems";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import Checkout from "../Checkout/Checkout";

import {CartContext} from './Cart';


function ContexCart() {

    const item = React.useContext(CartContext);

    const StyledBadge = withStyles((theme) => ({
        badge: {
          right: -3,
          top: 13,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: "0 2px",
        },
      }))(Badge);

      const handleClick = () => {
        <Checkout />
        console.log("jsdjsdhj");
      
      };
    return (
        <>
       {/*} <header>
          <div className="continue-shopping">
            <ArrowBackIcon className="arrow-icon" />
            <h3>Continue Shopping</h3>
          </div>
  
          <div className="cart-icon">
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={4} color="primary">
                <ShoppingCartIcon
                  style={{
                    fontSize: "30px",
                  }}
                />
              </StyledBadge>
            </IconButton>
          </div>
                </header>*/}
  
        <section className="main-cart-section">
          <h1>Food Cart</h1>
          <p>
            You Have <span className="total-items-count">7</span> items in the
            cart
          </p>
  
          <div className="cart-items">
            <div className="cart-items-container">
              <Scrollbars>
                {item.map((currItem) => {
                  return <CartItems key={currItem.id} {...currItem} />;
                })}
              </Scrollbars>
            </div>
          </div>
  
          <div className="cart-total">
            <h3>
              Cart Total: <span>5000</span>
            </h3>
            {/*<button onClick={handleClick}>Checkout</button>*/}
            
          </div>
        </section>
        
      </>
    )
}

export default ContexCart;

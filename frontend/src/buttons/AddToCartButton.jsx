import React from "react";
import PropTypes from "prop-types";
import "../styles/AddButtonStyle.css";
import { useAddToCartMutation } from "../slices/cartApi"; // adjust path

const AddToCartButton = ({ bookId, type = "achat", quantity = 1 , className = ""  }) => {
  const [addToCart, { isLoading }] = useAddToCartMutation();

  const handleAddToCart = async () => {
    try {
      await addToCart({ bookId, type, quantity }).unwrap();
      // You can show toast or feedback here
    } catch (err) {
      console.error("Add to cart failed:", err);
    }
  };

  return (
    <button className={`CartBtn ${className}`} onClick={handleAddToCart} disabled={isLoading}>
    <span className="IconContainer"> 
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(255, 255, 255)"className="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
  </span>
      <p className="text">{isLoading ? "Adding..." : "Add to Cart"}</p>
    </button>
  );
};
AddToCartButton.propTypes = {
  bookId: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["achat", "location"]),
  quantity: PropTypes.number,
  className: PropTypes.string,
};

export default AddToCartButton;

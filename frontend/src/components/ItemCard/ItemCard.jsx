import "./ItemCard.scss";
import React from "react";
import { Link } from "react-router-dom";
// import pregnantLady from "../../assets/pregnant-woman-vector-25169661.jpg"

const ItemCard = ({ handleSelectProduct, product }) => {
  return (
    <li className="productList__item">
      <a href={product.link}>
        <div className="productList__image-container">
          <img
            className="productList__image"
            src={product.image}
            alt="product-image"
          />
        </div>
        <div className="productList__description">
          <p className="productList__product-title">{product.name}</p>
        </div>
        <div className="productList__submit-card">
          <button className="productList__button button">
            CHECK AT AMAZON
          </button>
        </div>
      </a>
    </li>
  );
};

export default ItemCard;

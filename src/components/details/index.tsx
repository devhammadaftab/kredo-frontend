import { DetailConstants } from "constants/content";
import { Product } from "interfaces";
import React from 'react'

const Details: React.FC<Product> = ({ image, name, description, price, createdAt }) => (<div className="details">
  <div className="details-image-container">
    <img src={image} alt="" className="details-image" />
  </div>
  <div className="details-detail">
    <h1>{name}</h1>
    <label><b>{DetailConstants.DESCRIPTION}:</b> {description}</label>
    <label><b>{DetailConstants.PRICE}:</b> ${price}</label>
    <label><b>{DetailConstants.PRICE}:</b> ${price}</label>
    <label><b>{DetailConstants.CREATED}:</b> {createdAt.split("T")[0]}</label>
  </div>
</div>)

export default Details;
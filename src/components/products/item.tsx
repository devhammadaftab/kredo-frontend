import React from "react"
import { RoutesConstent } from "constants/routes"
import { Product } from "interfaces"
import { useNavigate } from "react-router-dom"

const Item: React.FC<Product> = ({ id, image, name }) => {
  let navigate = useNavigate()

  const onClick = () => {
    navigate(`${RoutesConstent.product + id}`);
  };

  return (<div className="product" onClick={() => onClick()}>
    <img src={image} alt="product photo" className="imgcards" />
    <h3>{name}</h3>
  </div>)
}

export default Item
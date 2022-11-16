import React from "react"
import { useStore } from "store"
import Item from "./item"
import { Product } from "interfaces"

interface Props { }

const CategoryView: React.FC<Props> = () => {
    const { state } = useStore();
    const { products } = state;

    return (
        <div className="products-container">
            <div className="products">{
                products.map((product: Product) => <Item key={product.id} {...product} />)
            }</div>
        </div>
    )
}

export default CategoryView
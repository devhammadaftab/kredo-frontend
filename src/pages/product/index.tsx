import React, { useEffect } from "react"
import Details from "components/details"
import { setProduct } from "store/actions"
import { useStore } from "store";
import { useParams } from "react-router-dom";

interface Props {}

const Product: React.FC<Props> = () => {
    const { state, dispatch } = useStore();
    const { product } = state;
    const { id } = useParams();
  
    useEffect(() => {
      (async () => dispatch(await setProduct(Number(id))))();
    }, [id])

    return <>
        {product && <Details {...product} />}
    </>
}

export default Product;
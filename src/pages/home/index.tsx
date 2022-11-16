import React, { useEffect } from "react"
import { useParams } from 'react-router-dom'
import { setProducts } from "store/actions";
import { useStore } from "store";
import Products from "components/products"

interface Props { }

const Home: React.FC<Props> = () => {

  const { dispatch } = useStore();
  const { id } = useParams();

  useEffect(() => {
    (async () => dispatch(await setProducts(Number(id))))()
  }, [id])

  return (<>
    <Products />
  </>)
}

export default Home
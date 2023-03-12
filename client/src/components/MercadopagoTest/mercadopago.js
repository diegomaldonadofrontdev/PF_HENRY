import { useEffect, useState } from "react";
import axios from "axios";
import ProductsCard from "./mercadotest";
import React from "react";

const ProductsDisplayer = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/payments")
            .then(res =>
                setProducts(res.data)
            )
    }, [])

    console.log(products)

    return (
        <div style={{display: "flex", flexDirection:"column", alignItems: "center", background: "aliceblue"}}>
            <h1 style={{color:"black", fontSize:"30px"}}>LA PARRILLA</h1>
            <div style={{display:"flex",flexDirection: "row", margin: "20px"}}> 
                {products.map(product =>
                    <ProductsCard product={product} />
                )}
            </div>
        </div>
    )
}

export default ProductsDisplayer;
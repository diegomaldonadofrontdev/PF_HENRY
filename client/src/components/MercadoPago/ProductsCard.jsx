import axios from "axios";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

const ProductsCard = ({ product }) => {

    const handleClick = (e) => {
        axios.post("http://localhost:3001/payments", {name: product.name})
        .then(res => window.location.href = res.data.response.body.init_point) 
    }

    return (
        <div style={{border: "3px solid grey", margin:"10px", padding:"10px", background:"grey", boxShadow:"10px 5px 5px black"}}>
            <img style={{width:"250px", height:"250px", borderRadius:"120px"}} src={product.image} alt="" />
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <h4>${product.price}</h4>
            <button onClick={handleClick}><ButtonPrimary texto="Comprar"/></button>
        </div>
    )
}

export default ProductsCard;
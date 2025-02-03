import React from "react";
import { useParams } from "react-router-dom";
import { popular } from "../assets/popular";
import DescriptionBox from '../DescriptionBox/DescriptionBox.jsx';
import DisplayProduct from '../DisplayProduct/DisplayProduct.jsx';

function Product(){
    const {productId} = useParams();
    const product = popular.find((e) => e.id === Number(productId));

    return(
        <div>
            {/* <Breadcrum category={product.category} name={product.name}/> */}
            <DisplayProduct image={product.image} name={product.name} features={product.features}/>
            <DescriptionBox/>
        </div>
    )
}

export default Product
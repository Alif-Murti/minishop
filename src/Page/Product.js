import React, {useEffect} from "react"
import {useSelector, useDispatch} from 'react-redux'
import axios from "axios"
import ProductCard from "../Component/Product/ProductCard"


const Product = () => {
   const products = useSelector(store => store.product)
   const dispatch = useDispatch()

   useEffect(() => {
        axios.get('https://fakestoreapi.com/products/')
        .then(response => {
            console.log(response)
      
        dispatch( {
           type: 'populateProducts', 
           payload: {
               products: [...response.data]
           }

         })

       })

   },[])

    return(
        <section>
            <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-center">All Products </h2>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                    {products.map( (product, index) => {
                        return (
                           <div key={index}><ProductCard  key={`product-${index}`} product={product}/></div>
                            // <h5 className='text-lg font-bold mb-4' key={`product-${index}`}>{product.title}</h5>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default Product
import React, { useEffect, useState } from 'react'
import Product from '../Components/Homepage/Product';

function Products() {

    const[loding, setLoding] = useState(false);
    const[product ,setProduct] = useState([]);
    const API_URL = "https://fakestoreapi.com/products";

    async function fetchData(){
        setLoding(true);
        try {
            const data = await fetch(API_URL);
            const result = await data.json();
            console.log(result);
            setProduct(result);
        
        } catch (error) {
            console.log(error.message);
            setProduct([]);
        }
        setLoding(false);
    }
    useEffect(()=>{
        fetchData();
    },[]);
    

  return (
    <div>
      {
        product.length > 0 ? (product.map((post)=>(
             <Product post ={post} key={post.id}/>
        ))) : (<div>No data found</div>)
      }
    </div>
  )
}

export default Products

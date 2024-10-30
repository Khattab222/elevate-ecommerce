"use client"

import { useQuery } from '@tanstack/react-query'
import ProductCard from "./ProductCard"
import axios from 'axios'
import { useEffect } from 'react'
import LoadingComponent from './LoadingComponent'


const ProductsContainer = () => {

  const fetchAllProducts =async () =>{
    const {data} =await axios.get('https://fakestoreapi.com/products');
   
    return data
  }
  // useEffect(() => {
    
  //   fetchAllProducts()
  // }, [])
  

  const {data,isFetching,status,error} = useQuery({ queryKey: ['getproducts'], queryFn: fetchAllProducts })





  if (status === 'pending') {
    return <LoadingComponent/>
  }
  if (status === 'error') {
    return <div className='text-center text-red-600 mt-4 text-4xl capitalize'>Error while geting Products we will tray again later</div>
  }

  return (
    <div className=" grid  md:grid-cols-4 gap-9 my-5">
        {
          data.map((item,i) => <ProductCard key={i} item={item}/>)
        }
    
   
    
    </div>
  )
}

export default ProductsContainer

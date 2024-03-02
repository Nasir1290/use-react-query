import React from 'react'
import ProductsList from './components/ProductsList'
import ProductDetails from './components/ProductDetails'
import AddProduct from './components/AddProduct'

export default function App() {
  return (
    <div className=' flex bg-slate-400 m-0 p-0'>
      <AddProduct/>
     <ProductsList/>
     <ProductDetails id={8}/>
    </div>
  )
}

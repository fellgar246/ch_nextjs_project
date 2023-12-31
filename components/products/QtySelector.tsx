"use client"
import { useState } from "react"
import { useCartContext } from "../context/CartContext"
import { ProductDataType } from "@/data/products";


const QtySelector = ({item, quantity}: {item: ProductDataType, quantity: number} ) => {

    const context = useCartContext()

    if (!context) {
        throw new Error('useCartContext must be used within a CartProvider');
    }

    const {addToCart} = context

    const handleQtyAdd= () => {    
        addToCart({
            ...item,
        }, quantity)
    }


  return (
    <div>
        <button 
            onClick={handleQtyAdd}
            className="w-full bg-amber-500 text-white py-2 px-4 rounded-full font-bold hover:bg-amber-600 "
        >
            Añadir al carrito
        </button>
    </div>
  )
}

export default QtySelector

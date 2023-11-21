"use client"
import { useState } from "react"
import { useCartContext } from "../context/CartContext"
import { ProductDataType } from "@/data/products";


const QtySelector = ({item}: {item: ProductDataType} ) => {

    const context = useCartContext()

    if (!context) {
        throw new Error('useCartContext must be used within a CartProvider');
    }

    const {addToCart} = context

    const [quantity, setQuantity] = useState(1)

    const handleQtyAdd= () => {
    //TODO: Habilitar agregar al carrito    
        addToCart({
            ...item,
        })
    }


  return (
    <div>
        <button onClick={handleQtyAdd}>Agregar al carrito</button>
    </div>
  )
}

export default QtySelector

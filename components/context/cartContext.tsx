'use client'
import { createContext, useContext, ReactNode, useState } from "react"
import { ProductDataType } from "@/data/products";

type CartContextType = {
    cart: ProductDataType[];
    addToCart: (item: ProductDataType) => void;
    isInCart: (slug: string) => boolean;
    emptyCart: () => void;
  };

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<ProductDataType[]>([])
    console.log(cart);
    
    const addToCart = (item: ProductDataType) => {
        setCart([...cart, item])
    }

    const isInCart = (slug: string) => {
        return cart.some(item => item.slug === slug)

    }

    //TODO: Agregar propiedad cantidad al item del carrito
    // const totalQty = () => {
    //     return cart.reduce((acc, item) => acc + item.quantity, 0)
    // }

    const emptyCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{cart ,addToCart, isInCart, emptyCart}}>
            {children}
        </CartContext.Provider>
    )
}

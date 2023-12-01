'use client'
import { createContext, useContext, ReactNode, useState } from "react"
import { ProductDataType } from "@/data/products";
import { doc, setDoc } from "firebase/firestore";
import { db, storage } from "@/firebase/config"


interface CartItem {
    productId: string;
    quantity: number;
  }
  
  interface Cart {
    userId: string;
    items: CartItem[];
  }

type CartContextType = {
    cart: ProductDataType[];
    addToCart: (item: ProductDataType) => void;
    isInCart: (slug: string) => boolean;
    emptyCart: () => void;
    totalPrice: () => number;
    deleteFromCart: (slug: string) => void;
  };

//TODO: completar createCart
// const createCart = async (values: Cart) => {

//     const docRef = doc(db, "products", values.userId);

//     return await setDoc(docRef, {
//         ...values
//     })
// }

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

    const totalPrice = () => {
        return cart.reduce((acc, item) => acc + Number(item.price), 0)
    }

    const deleteFromCart = (slug: string) => {
        setCart(cart.filter(item => item.slug !== slug));
    }

    const emptyCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{cart ,addToCart, isInCart, emptyCart, totalPrice, deleteFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

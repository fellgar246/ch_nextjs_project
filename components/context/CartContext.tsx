'use client'
import { createContext, useContext, ReactNode, useState } from "react"
import { ProductDataType } from "@/types/IProduct";
import { CartType } from "@/types/ICart";
import { doc, setDoc } from "firebase/firestore";
import { db, storage } from "@/firebase/config"




export type CartContextType = {
    cart: CartType;
    addToCart: (item: ProductDataType,quantity: number ) => void;
    isInCart: (slug: string) => boolean;
    emptyCart: () => void;
    totalPrice: () => number;
    deleteFromCart: (slug: string) => void;
  };

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartType>({
        userId: "",
        items: []
    })

    const isInCart = (slug: string) => {
        return cart.items.some(item => item.product.slug === slug);

    }
    
    const addToCart = (item: ProductDataType, quantity: number) => {

        setCart(prevCart => {
            const itemIndex = prevCart.items.findIndex(cartItem => cartItem.product.slug === item.slug);
            if (itemIndex !== -1) {
                const newItems = [...prevCart.items];
                newItems[itemIndex] = { ...newItems[itemIndex], quantity: newItems[itemIndex].quantity + quantity };
                return { ...prevCart, items: newItems };
            } else {
                return { ...prevCart, items: [...prevCart.items, { product: item, quantity }] };
            }
        });

       
    }

    const totalPrice = () => {
        // return cart.reduce((acc, item) => acc + Number(item.price), 0)
        return cart.items.reduce((acc, item) => acc + Number(item.product.price) * item.quantity, 0);
    }

    const deleteFromCart = (slug: string) => {
        setCart(prevCart => ({
            ...prevCart,
            items: prevCart.items.filter(item => item.product.slug !== slug)
        }));
    }

    const emptyCart = () => {
        setCart({items: [], userId: ""})
    }

    return (
        <CartContext.Provider value={{cart ,addToCart, isInCart, emptyCart, totalPrice, deleteFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

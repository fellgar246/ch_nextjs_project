import { ProductDataType } from "./IProduct";

export type CartItem = {
    product:  ProductDataType;
    quantity: number;
  }
  
export type CartType = {
    userId: string;
    items: CartItem[];
  }
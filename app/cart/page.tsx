'use client'
import { mockData, ProductDataType } from "@/data/products";
import { useCartContext } from "@/components/context/CartContext";
import { CartType, CartItem } from "@/components/context/CartContext";


export default function Cart() {

  const context = useCartContext()
  if (!context) {
    throw new Error('useCartContext must be used within a cart');
  }

  const { cart, deleteFromCart, totalPrice, emptyCart } = context;

  const totalCartPrice = totalPrice();
  
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  }

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Carrito de compra
            </h1>
          </header>
          <div className="mt-8">
            {cart.items.length ?
            <>
                  <button 
               onClick={emptyCart} 
               className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-3"
             >
              Limpiar Carrito
             </button> 
            <ul className="space-y-4">
               {cart.items.map((item: CartItem) => (           
                <li key={item.product.id} className="flex items-center gap-4">
                  <div>
                    <h3 className="text-sm text-gray-900">{item.product.title}</h3>
                    <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                      <div>
                        <dt className="inline">Tamaño:</dt>
                        <dd className="inline">{item.product.size ? item.product.size : "N/A"}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="flex flex-1 items-center justify-end gap-2">
                    <h3 className="text-sm text-gray-900">${item.product.price}</h3>
                    <p className="text-sm text-gray-900"> x </p>
                    <form  onChange={onSubmit}>
                      <label htmlFor="Line1Qty" className="sr-only">
                        {" "}
                        Quantity{" "}
                      </label>

                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        readOnly
                        id="Line1Qty"
                        className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                      />
                    </form>

                    <button onClick={()=> deleteFromCart(item.product.slug)}  className="text-gray-600 transition hover:text-red-600">
                      <span className="sr-only">Remove item</span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
            ))}
           
            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd>${totalCartPrice ? totalCartPrice : 0}</dd>
                  </div>

                  <div className="flex justify-between">
                    <dt>VAT</dt>
                    <dd>$0</dd>
                  </div>

                  <div className="flex justify-between">
                    <dt>Descuento</dt>
                    <dd>$0</dd>
                  </div>

                  <div className="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>${totalCartPrice}</dd>
                  </div>
                </dl>

                <div className="flex justify-end">
                  <a
                    href="#"
                    className="block rounded bg-amber-500 px-5 py-3 text-sm text-gray-100 transition hover:bg-amber-600"
                  >
                    Checkout
                  </a>
                </div>
              </div>
            </div>
            </>
             : <p>No hay productos en el carrito</p> }
          </div>
        </div>
      </div>
    </section>
  );
}

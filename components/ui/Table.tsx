'use client'
import { ProductDataType } from "@/types/IProduct";
import { useEffect, useState } from "react";
import TableRow from "./TableRow";
import React from "react";

const Table = () => {

  const [products, setProducts] = useState<ProductDataType[]>([]);

  useEffect(() => {
      const fetchProduct = async () => {
        const response = await fetch(`http://localhost:3000/api/products/all`, {
          cache: 'no-store'
        });

        if (response.ok) {
          const productData = await response.json();
          setProducts(productData);
        } else {
          console.log(`HTTP error! status: ${response.status}`);
        }
      };

      fetchProduct().catch(e => console.log('There was a problem with your fetch operation: ' + e.message));
    }, []);


  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Producto
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Precio
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Categoría
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Tamaño
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Stock
            </th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200"> 
          {products.map((product: ProductDataType) => (
            <TableRow key={product.id} item={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

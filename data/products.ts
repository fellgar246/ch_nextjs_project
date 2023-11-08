

export type ProductDataType = {
    id: number;
    title: string;
    description: string;
    inStock: boolean;
    price: number;
    slug: string;
    image: string;
    type: string;
    };



export const mockData: Array<ProductDataType> = [
  {
    id: 1,
    title: "Producto 1",
    description: "Descripción del producto 1",
    inStock: true,
    price: 100,
    slug: "producto-1",
    image: "https://via.placeholder.com/150",
    type: "tipo-1"
  },
  {
    id: 2,
    title: "Producto 2",
    description: "Descripción del producto 2",
    inStock: false,
    price: 200,
    slug: "producto-2",
    image: "https://via.placeholder.com/150",
    type: "tipo-2"
  },
  {
    id: 3,
    title: "Producto 3",
    description: "Descripción del producto 3",
    inStock: true,
    price: 300,
    slug: "producto-3",
    image: "https://via.placeholder.com/150",
    type: "tipo-1"
  },
  {
    id: 4,
    title: "Producto 4",
    description: "Descripción del producto 4",
    inStock: false,
    price: 400,
    slug: "producto-4",
    image: "https://via.placeholder.com/150",
    type: "tipo-2"
  },
  {
    id: 5,
    title: "Producto 5",
    description: "Descripción del producto 5",
    inStock: true,
    price: 500,
    slug: "producto-5",
    image: "https://via.placeholder.com/150",
    type: "tipo-1"
  },
  {
    id: 6,
    title: "Producto 6",
    description: "Descripción del producto 6",
    inStock: false,
    price: 600,
    slug: "producto-6",
    image: "https://via.placeholder.com/150",
    type: "tipo-2"
  },
  {
    id: 7,
    title: "Producto 7",
    description: "Descripción del producto 7",
    inStock: true,
    price: 700,
    slug: "producto-7",
    image: "https://via.placeholder.com/150",
    type: "tipo-1"
  },
  {
    id: 8,
    title: "Producto 8",
    description: "Descripción del producto 8",
    inStock: false,
    price: 800,
    slug: "producto-8",
    image: "https://via.placeholder.com/150",
    type: "tipo-2"
  }
];


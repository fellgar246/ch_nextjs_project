import { mockData, ProductDataType } from "@/data/products";
import Image from "next/image";
interface ParamsProps {
  params: {
    id: string;
  };
}

const DetailPage = ({ params }: ParamsProps) => {
  const { id } = params;
  if (id.length === 0) return <h1>Not found</h1>;

  const product = mockData.find((product) => product.slug === id);
  if (!product) return <h1>Not found</h1>;

  const categorie= product.type.charAt(0).toUpperCase() + product.type.slice(1);

  return (
    <div className="flex items-center justify-center">
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <Image
                  className="w-full h-full object-cover"
                  src={product.image}
                  alt={product.slug}
                  height={460}
                  width={460}
                />
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {product.title}
              </h2>
              <p className="text-gray-700 text-sm mb-4">{categorie}</p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700">Precio:</span>
                  <span className="text-gray-700">${product.price}</span>
                </div>
                <div>
                  <span className="font-bold text-gray-700">Disponibles:</span>
                  <span className="text-gray-700">{product.inStock}</span>
                </div>
              </div>
              {product.size && (
                <div className="mb-4">
                  <span className="font-bold text-gray-700">Tamaño:</span>
                  <span className="text-gray-700">{product.size}</span>
                </div>
              )}
              <div>
                <p className="text-gray-600 text-sm mt-2">
                  {product.description}
                </p>
              </div>
              <div className="flex -mx-2 mb-4 mt-5">
                <div className="mr-5">
                  <label htmlFor="Quantity" className="sr-only">
                    {" "}
                    Quantity{" "}
                  </label>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                    >
                      &minus;
                    </button>

                    <input
                      type="number"
                      id="Quantity"
                      value="1"
                      readOnly
                      className="h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                    />

                    <button
                      type="button"
                      className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full bg-amber-500 text-white py-2 px-4 rounded-full font-bold hover:bg-amber-600 ">
                    Añadir al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

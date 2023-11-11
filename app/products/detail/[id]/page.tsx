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

  const product = mockData.find(product => product.slug === id);
  if (!product) return <h1>Not found</h1>;

  return (
    <div>
      <Image
             src={product.image}
             alt={product.slug}
             className="h-[350px] object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
             width={300}
             height={100}
           />

      <div className="flow-root">
        <dl className="-my-3 divide-y divide-gray-100 text-sm ">
          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dd className="text-gray-700 sm:col-span-2">{product.title}</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dd className="text-gray-700 sm:col-span-2">${product.price}</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dd className="text-gray-700 sm:col-span-2">
              {product.description}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dd className="text-gray-700 sm:col-span-2">${product.size}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default DetailPage;

import Image from "next/image";
import { ProductDataType } from "@/data/products";
import Link from "next/link";

interface ProductCardProps {
    item: ProductDataType;
  }

const ProductCard: React.FC<ProductCardProps>  = ( { item }) => {

    return (
        <>
         <li>
         <Link href={`/products/detail/${item.slug}`} className="group block overflow-hidden">
           <Image
             src={item.image}
             alt={item.slug}
             className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
             width={200}
             height={100}
           />

           <div className="relative bg-white pt-3">
             <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
               {item.title}
             </h3>

             <p className="mt-2">
               <span className="sr-only"> {item.price}</span>

               <span className="tracking-wider text-gray-900">
                 {" "}
                 ${item.price}{" "}
               </span>
             </p>
           </div>
         </Link>
       </li>
       </>
    )
}

export default ProductCard
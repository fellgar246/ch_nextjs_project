import Image from "next/image";
import { ProductDataType } from "@/data/products";
import Link from "next/link";

interface ProductCardProps {
    item: ProductDataType;
  }


//! TODO: Agrergar imagen
const ProductCard: React.FC<ProductCardProps>  = ( { item }) => {

    return (
        <article>
            {/* <Image src={item.image} alt={item.title} width={300} height={300} /> */}
            <Link href={`/products/detail/${item.slug}`}>
           
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
            </Link>
        </article>
    )
}

export default ProductCard
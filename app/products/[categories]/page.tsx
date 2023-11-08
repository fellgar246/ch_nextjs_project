import { mockData, ProductDataType } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";


interface ParamsProps {
    params: {
        categories: string;
    };
}

export const generateMetadata = async ({params}: ParamsProps) => {
    return {
        title: 'Products -' + params.categories
    }
}

const ProductsCategories = ({ params }: ParamsProps) => {

    const {categories} = params

    const items = categories === 'all' ? mockData : mockData.filter(product => product.type === categories)    

    if(items.length === 0) return (<h1>Not found</h1>)
    //router.replace('/') 

    return (
        <div>
            <h1>Products Categories Page</h1>
            <p>{categories}</p>

            <section className="flex justify-center items-center gap-10 flex-wrap">
                {   items.map((product: ProductDataType) => <ProductCard item={product} key={product.id}/>)}

            </section>
        </div>
    );
};



export default ProductsCategories;

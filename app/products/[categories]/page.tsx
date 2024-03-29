import { ProductDataType } from "@/types/IProduct";
import ProductCard from "@/components/products/ProductCard";

interface ParamsProps {
  params: {
    categories: string;
  };
}

export const generateMetadata = async ({ params }: ParamsProps) => {
  return {
    title: "Products - " + params.categories,
  };
};

export const generateStaticParams = async () => {
  return [
    {category:  "all"},
    {category:  "pasteles"},
    {category:  "galletas"},
    {category:  "pays"},
    {category:  "muffins"},
  ]
}

export const revalidate = 3600;

const ProductsCategories = async ({ params }: ParamsProps) => {
  const { categories } = params;

  const items = await fetch(`http://localhost:3000/api/products/${categories}`, {cache: "no-store"})
  .then(res => {
      if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
  })
  .catch(e => console.log('There was a problem with your fetch operation: ' + e.message));

  if (items?.length === 0) return <h1>Not found</h1>;

  let title = categories.charAt(0).toUpperCase() + categories.slice(1);
  if (title === "All") title = "Todos los postres";

  return (
    <div>

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              {title}
            </h2>

            <p className="mt-4 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>

          <div className="mt-8">
            <p className="text-sm text-gray-500">
              Mostrando <span> 12 </span> of 30
            </p>
          </div>

          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((product: ProductDataType) => (
          <ProductCard item={product} key={product.id} />
        ))}
          </ul>

          <ol className="mt-8 flex justify-center gap-1 text-xs font-medium">
            <li>
              <a
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
              >
                <span className="sr-only">Prev Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li className="block h-8 w-8 rounded border-black bg-black text-center leading-8 text-white">
              1
            </li>

            <li className="block h-8 w-8 rounded border border-gray-100 text-center leading-8">   
                2
            </li>

            <li className="block h-8 w-8 rounded border border-gray-100 text-center leading-8">   
                3
            </li>

            <li className="block h-8 w-8 rounded border border-gray-100 text-center leading-8">   
                4
            </li>
          
            <li>
              <a
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
              >
                <span className="sr-only">Next Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default ProductsCategories;

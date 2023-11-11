import Link from "next/link";
import { ReactNode } from "react";

interface CategoriesLayoutProps {
  children: ReactNode;
}

const CategoriesLayout: React.FC<CategoriesLayoutProps> = ({ children }) => {
  return (
    <nav>
      <div>
        <div className="sm:hidden">
          <label htmlFor="Tab" className="sr-only">
            Tab
          </label>

          <select id="Tab" className="w-full rounded-md border-gray-200">
            <option>Todos</option>
            <option>Pasteles</option>
            <option>Galletas</option>
            <option>Pays</option>
            <option selected>Muffins</option>
          </select>
        </div>

        <div className="hidden sm:block">
          <nav className="flex gap-6" aria-label="Tabs">
            <Link 
                href={"/products/all"}
                className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            > 
                Todos
            </Link>

            <Link 
                href={"/products/pasteles"}
                className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            > 
                Pasteles
            </Link>
            <Link 
                href={"/products/galletas"}
                className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            > 
                Galletas
            </Link>
            <Link 
                href={"/products/pays"}
                className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            > 
                Pays
            </Link>
            <Link 
                href={"/products/muffins"}
                className="shrink-0 rounded-lg bg-gray-100 p-2 text-sm font-medium text-gray-700"
            > 
                Muffins
            </Link>
          </nav>
        </div>
      </div>
      {children}
    </nav>
  );
};

export default CategoriesLayout;

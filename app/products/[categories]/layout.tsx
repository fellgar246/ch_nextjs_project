import Link from "next/link"
import { ReactNode } from "react";

interface CategoriesLayoutProps {
  children: ReactNode;
}

const CategoriesLayout: React.FC<CategoriesLayoutProps>  = ({children}) => {

    return (
        <div>
            <nav>
                <Link href={"/products/all"}> Todos</Link>
                <Link href={"/products/jeans"}> Jeans</Link>
                <Link href={"/products/men"}> Hombre</Link>
                <Link href={"/products/women"}> Mujer</Link>
            </nav>
            {children}
        </div>
    )
}

export default CategoriesLayout
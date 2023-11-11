import React from "react";
import Link from "next/link";
import Image from "next/image";


const Header: React.FC= () => {

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block" href={"/"}>
              <span className="sr-only">Home</span>

              <Image
                src="https://res.cloudinary.com/dvvqbwhcc/image/upload/v1699656146/nextjs-project/p4s7al5i3pai6ptcnczu.png"
                width={200}
                height={100}
                alt="logo"
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    href={"/about"}
                    className="text-gray-500 transition hover:text-gray-500/75"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    href={"/products/all"}
                    className="text-gray-500 transition hover:text-gray-500/75"
                  >
                    Postres
                  </Link>
                </li>

                <li>
                  <Link
                    href={"/admin"}
                    className="text-gray-500 transition hover:text-gray-500/75"
                  >
                    {/* Se coloca provisionalmente en el menu para poder accder a la pagina */}
                    Admin
                  </Link>
                </li>

                <li>
                  <Link
                    href={"/cart"}
                    className="text-gray-500 transition hover:text-gray-500/75"
                  >
                    {/* Se coloca provisionalmente en el menu para poder accder a la pagina */}
                    Carrito
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
          <Link
                href={"/cart"}
                className="text-gray-500 transition hover:text-gray-500/75"
              >
                 <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              
              </Link>
             
            <div className="sm:flex sm:gap-4">
              <Link
                href={"/login"}
                className="rounded-md bg-amber-500 px-5 py-2.5 text-sm font-medium text-white shadow"
              >
                Ingresar
              </Link>

              <div className="hidden sm:flex">
                <Link
                  href={"/register"}
                  className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-amber-500"
                >
                  Registrarse
                </Link>
              </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

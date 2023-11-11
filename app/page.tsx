import Link from "next/link";

export default function Home() {
  
  return (
    <main>
      <section className="overflow-hidden bg-[url(https://res.cloudinary.com/dvvqbwhcc/image/upload/v1699665145/nextjs-project/iil6jrovuqwl0vs6syvs.webp)] bg-cover bg-top bg-no-repeat">
        <div className="bg-black/30 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
              Postres de temporada
            </h2>

            <div className="mt-4 sm:mt-8">
              <Link 
                 className="inline-block rounded-full bg-amber-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-amber-600 focus:outline-none"
                href={"/products/all"}
              >
                Ordena aqui
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="bg-amber-500 p-8 md:p-12 lg:px-16 lg:py-24">
              <div className="mx-auto max-w-xl text-center">
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit
                </h2>

                <p className="hidden text-white/90 sm:mt-4 sm:block">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                  egestas tempus tellus etiam sed. Quam a scelerisque amet
                  ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
                  quisque ut interdum tincidunt duis.
                </p>

                <div className="mt-4 md:mt-8">
                  <a
                    href="#"
                    className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-amber-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-amber-700"
                  >
                    Conócenos
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              {/* <img
          alt="Student"
          src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
          className="h-40 w-full object-cover sm:h-56 md:h-full"
        /> */}

              {/* <img
          alt="Student"
          src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          className="h-40 w-full object-cover sm:h-56 md:h-full"
        /> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

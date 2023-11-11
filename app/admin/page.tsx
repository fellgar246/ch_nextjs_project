import React from "react";
import Table from "@/components/ui/Table";

export default function Admin() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center text-2xl mb-6 font-bold text-amber-500 sm:text-3xl">
        Bienvenido Admin
      </h1>
      <div className="max-w-3xl flex flex-col">
        <div className="mb-8 mt-8 w-3/6">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Cerrar sesión
          </button>
        </div>
       

        <hr />
        <Table />
      </div>
     
    </div>
  );
}

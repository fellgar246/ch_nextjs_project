import React from "react";
import Table from "@/components/ui/Table";
import LogoutButton from "@/components/admin/LogoutButton";
import Link from "next/link";

export default function Admin() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center text-2xl mb-6 font-bold text-amber-500 sm:text-3xl">
        Bienvenido Admin
      </h1>
      <div className="max-w-3xl flex flex-col">
        <div className="mb-8 mt-8 w-3/6">
          <LogoutButton />
        </div>

        <div className="hidden sm:flex">
          <Link
            href={"/admin/create"}
            className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-amber-500"
          >
            Crear producto
          </Link>
        </div>

        <hr />
        <Table />
      </div>
    </div>
  );
}

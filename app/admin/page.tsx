import React from 'react'
import Table from '@/components/ui/Table'

export default function Admin() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold text-amber-500 sm:text-3xl">
      Bienvenido Admin
    </h1>
    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
      Cerrar sesión
    </button>

    <hr />
    <Table />
    </div>
  )
}

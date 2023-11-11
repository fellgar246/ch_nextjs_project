'use client'

import { useRouter } from "next/navigation"

export default function NotFound() {

    const router = useRouter()
    return (
        <main>
            <h1>Página no encontrada</h1>
            <p>La ruta a la que intentas acceder, no existe</p>

            <button onClick={() => router.back}>Volver al inicio</button>

            <button onClick={() => router.push('/')}> Volver al home </button>
        </main>
    )
}
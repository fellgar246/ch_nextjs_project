'use client'
import { useAuthContext } from "../context/AuthContext"

const LogoutButton = () => {
    const { logoutUser } = useAuthContext()


  return (
    <button 
      onClick={logoutUser} 
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
    Cerrar sesión
    </button> 
  )
}

export default LogoutButton
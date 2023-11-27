'use client'
import { useAuthContext } from "../context/AuthContext"

const LogoutButton = () => {
    const { logoutUser } = useAuthContext()


  return (
    <button onClick={logoutUser} className="bg-red-500">LogoutButton</button>
  )
}

export default LogoutButton
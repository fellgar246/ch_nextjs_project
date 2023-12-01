'use client'
import { useAuthContext } from "@/components/context/AuthContext";

import {ReactNode} from 'react'

const AdminLayout = ({children, login}: {
  children: ReactNode,
  login: ReactNode
}) => {
    const logged = useAuthContext()


  return (
    <>
        {
            logged.user.logged
            ? children
            : <>
             <p>Para acceder a la vista de administrador</p>
              <p>Es necesario te registres o inicies sesión</p>
            </>
        }
    </>
  )
}

export default AdminLayout
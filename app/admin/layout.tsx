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
            : login
        }
    </>
  )
}

export default AdminLayout
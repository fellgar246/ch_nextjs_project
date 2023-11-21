'use client'

import { createContext, useContext, useState, ReactNode } from "react"

export type AuthContextType = {
  logged: boolean;
  email: string | null;
  uid: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within a AuthProvider');
  }
  return context.logged;
}

export const AuthProvider = ({ children }: {
    children: ReactNode
  }) => {
  const [user, setUser] = useState<AuthContextType>({
    logged: true,
    email: null,
    uid: null,
  })

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  )
}
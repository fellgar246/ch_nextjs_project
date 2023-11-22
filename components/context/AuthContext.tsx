'use client'
import { auth } from "@/firebase/config";
import { createContext, useContext, useState, ReactNode } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth";

//TODO: Separar user en otro type
export type AuthContextType = {
  user: UserAuthContextType,
  registerUser: (values: LoginFormType) => Promise<void>;
}

export type UserAuthContextType = {
  logged: boolean;
  email: string | null;
  uid: string | null;
}

//TODO: Unificar tipos de datos con login form
type LoginFormType = {
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within a AuthProvider');
  }
  return context.user.logged;
}


export const AuthProvider = ({ children }: {
    children: ReactNode
  }) => {
    const [user, setUser] = useState<UserAuthContextType>({
      logged: false,
      email: null,
      uid: null,
    })

    const registerUser = async (values : LoginFormType ) => {
      const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
      console.log(userCredential);
      
      const user = userCredential.user
    
      setUser({
        logged: true,
        email: user.email,
        uid: user.uid,
      })
    }
    

  return (
    <AuthContext.Provider value={{user, registerUser}}>
      {children}
    </AuthContext.Provider>
  )
}
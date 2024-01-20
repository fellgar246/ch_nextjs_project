'use client'
import { auth, provider } from "@/firebase/config";
import { createContext, useContext, useState, ReactNode, useEffect } from "react"
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut,
  signInWithPopup
} from "firebase/auth";

export type AuthContextType = {
  user: UserAuthContextType
  registerUser: (values: LoginFormType) => Promise<void>
  loginUser: (values: LoginFormType) => Promise<void>
  logoutUser: () => Promise<void>
  loginGoogle: () => Promise<void>

}

export type UserAuthContextType = {
  logged: boolean;
  email: string | null;
  uid: string | null;
}
//TODO: Mover type
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
  return context;
}


export const AuthProvider = ({ children }: {
    children: ReactNode
  }) => {
    const [user, setUser] = useState<UserAuthContextType>({
      logged: false,
      email: null,
      uid: null,
    })
    //TODO: Agregar alertas de confirmación o error
    //TODO: Crear usuario al momento de registrarse
    //TODO: Crear carrito al momento de registrarse
    const registerUser = async (values : LoginFormType ) => {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
    }
    
    const loginUser = async (values : LoginFormType ) => {
      // await signInWithEmailAndPassword(auth, values.email, values.password);
      try {
       await signInWithEmailAndPassword(auth, values.email, values.password);
      } catch (error) {
        console.error("Error al iniciar sesión: ", error);
      }
    }

    const logoutUser = async () => {
      await signOut(auth)
    }

    const loginGoogle = async () => {
      await signInWithPopup(auth, provider) 
    }

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {   
        if (user) {
          setUser({
            logged: true,
            email: user.email,
            uid: user.uid,
          })
        } else {
          setUser({
            logged: false,
            email: null,
            uid: null,
          })
        } 
      });
    })

  return (
    <AuthContext.Provider value={{user, registerUser, loginUser, logoutUser, loginGoogle}}>
      {children}
    </AuthContext.Provider>
  )
}
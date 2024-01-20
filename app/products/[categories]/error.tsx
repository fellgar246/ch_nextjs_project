'use client'
import { useEffect } from "react"

interface ErrorProps {
    error: any; 
    reset: () => void;
}

const Error = ({error, reset}: ErrorProps) => {

    useEffect(() => {
        console.log(error)
        
    }, [error])

  return (
    <div className="container m-auto mt-6">
        <h2 className="text-xl">Algo no salió bien</h2>
        <hr className="my-6"/>
        <button onClick={reset}>Intentar nuevamente</button>
    </div>
  )
}

export default Error
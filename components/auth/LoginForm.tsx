import { useState } from "react"

type LoginFormType = {
    email: string;
    password: string;
}

const LoginForm = () => {

    const [values, setValues] = useState<LoginFormType>({
        email: '',
        password: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(values);
    }     




  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div>
                <label htmlFor="email">Email</label>
                <input 
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                />
            </div>
            <button type="submit">Iniciar Sesión</button>
        </form>
    </div>
  )
}

export default LoginForm
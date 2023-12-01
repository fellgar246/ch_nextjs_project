import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import Link from "next/link";

type LoginFormType = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { registerUser, loginUser, loginGoogle } = useAuthContext();

  const [values, setValues] = useState<LoginFormType>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-amber-500 sm:text-3xl">
          Inicia Sesión
        </h1>

        <form
          action=""
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          onSubmit={handleSubmit}
        >
          <p className="text-center text-lg font-medium">
            Inicia sesión con tu cuenta
          </p>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
                placeholder="Ingresa tu email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Ingresa password"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <button
            onClick={() => loginUser(values)}
            type="submit"
            className="block w-full rounded-lg bg-amber-500 px-5 py-3 text-sm font-medium text-white"
          >
            Iniciar Sesión
          </button>

          <p className="text-center text-sm text-gray-500">
            Aún no tienes una cuenta?{" "}
            <Link href={"/register"} className="underline">
              Registrate 
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginForm;

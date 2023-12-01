'use client'
import React from 'react'
import LoginGoogleButton from '@/components/auth/LoginGoogleButton';
import RegisterForm from '@/components/auth/RegisterForm';

export default function Register() {

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-lg">
    <h1 className="text-center text-2xl font-bold text-amber-500 sm:text-3xl">
      Crea una cuenta
    </h1>
    <RegisterForm />
    <div className="mt-3 max-w-screen-xl content-center">
       <LoginGoogleButton /> 
    </div>
  </div>
</div>
  )
}

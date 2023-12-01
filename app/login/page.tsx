'use client'
import React from 'react'
import LoginForm from '@/components/auth/LoginForm';
import LoginGoogleButton from '@/components/auth/LoginGoogleButton';

export default function Login() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <LoginForm />
      <div className="mt-3 max-w-screen-xl content-center">
        <LoginGoogleButton />
      </div>
</div>
  )
}

import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../service/firebaseConfig';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const handleSubmit = () => {
    if (password.length < 8){
      window.alert('Invalid password length!')
    } else {
      signInWithEmailAndPassword(email, password);
    }
  }

  if (error) {
    if(error.code == 'auth/invalid-login-credentials'){
      return (
      <div className='flex items-center justify-center min-h-screen bg-bg-login text-font-main-login'>
        <div className='flex flex-col items-center justify-center gap-2 '>
          <h1 className='text-4xl font-semibold'>ERROR!</h1>
          <h2 className='text-2xl font-semibold'>user not found</h2>
          <Link 
            className='bg-btn-login text-base font-medium p-2 rounded-sm hover:bg-btn-login-confirm duration-500'
            to='/register'>Register</Link>
        </div>
      </div>
      )
    }
    return (
      <div className='flex items-center justify-center min-h-screen bg-bg-login text-font-main-login'>
        <div className='flex flex-col items-center justify-center gap-2 '>
          <h1 className='text-6xl font-semibold'>404</h1>
          <h2 className='text-3xl font-semibold'>page not found</h2>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-screen bg-bg-login text-font-main-login'>
        <i className="text-[70px] absolute animate-spin fa-solid fa-spinner"></i>
      </div>
    )
  }

  if(user) {
    console.log(user.user);
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-login text-font-main-login">
      <form
        className="flex flex-col gap-5 bg-bg-display-login p-8 rounded-md"
        onSubmit={handleSubmit}>
        <h1
          className="m-auto text-lg font-semibold">User login</h1>
        <label
          htmlFor="email"
          className="flex flex-col">
          <p className="text-[15px] font-medium">E-mail</p>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-[40px] rounded-sm bg-bg-input border-none outline-none p-2 text-slate-500" />
        </label>
        <label
          htmlFor="password"
          className="flex flex-col">
          <p className="text-[15px] font-medium">Password</p>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-[40px] rounded-sm bg-bg-input border-none outline-none p-2 text-slate-500" />
        </label>
        <Link
          to='/register'
          className="flex justify-end text-sm hover:text-font-main-login duration-500 text-slate-500">Don&apos;t have access?</Link>
        <button
          className="bg-btn-login h-[40px] rounded-sm font-medium hover:bg-btn-login-confirm duration-500">Login</button>
      </form>
    </div>
  )
}
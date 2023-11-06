import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../service/firebaseConfig';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [classError, setClassError] = useState('border-none outline-none');
  const [controlPassword, setControlPassword] = useState(false);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = () => {
    if(controlPassword){
      createUserWithEmailAndPassword(email, password);
    }else{
      window.alert('Senhas diferentes');
      return;
    }
  }

  useEffect(() => {
    let style = '';

    if (confirmPassword == password) {
      style = 'border-2 outline-none border-green-500'
      setControlPassword(true)
    } else {
      style = 'border-2 outline-none border-red-500'
      setControlPassword(false)
    }
    setClassError(style);
  }, [confirmPassword, password])


  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-login text-font-main-login">
      <form
        className="flex flex-col gap-5 bg-bg-display-login p-8 rounded-md"
        onSubmit={() => handleSubmit()}>
        <h1
          className="m-auto text-lg font-semibold">Register User</h1>
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

        <label
          htmlFor="confirmPassword"
          className="flex flex-col">
          <p className="text-[15px] font-medium">Confirm Password</p>
          <input
            type="password"
            id="confirmPassword"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`h-[40px] rounded-sm bg-bg-input p-2 text-slate-500 ${classError}`} />
        </label>
        <Link
          to='/'
          className="flex justify-end text-sm hover:text-font-main-login duration-500 text-slate-500">You have access?</Link>
        <button
          className="bg-btn-login h-[40px] rounded-sm font-medium hover:bg-btn-login-confirm duration-500">Register</button>
      </form>
    </div>
  )
}
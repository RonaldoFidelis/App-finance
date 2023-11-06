import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../service/firebaseConfig';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [styleError, setStyleError] = useState('border-none');
  const [passwordValidation, setPasswordValidation] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordConfirmVisible, setPassworConfirmdVisible] = useState(false);

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = () => {
    if(passwordValidation){
      createUserWithEmailAndPassword(email, password);
    }else{
      window.alert('Senhas diferentes');
      return;
    }
  }

  useEffect(() => {
    if (confirmPassword != '' && confirmPassword == password) {
      setStyleError('border-2 border-green-500');
      setPasswordValidation(true)
    } 
    if (confirmPassword !== password) {
      setStyleError('border-2 border-red-500');
      setPasswordValidation(false)
    }
  }, [confirmPassword, password])

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const togglePasswordConfirmVisibility = () => {
    setPassworConfirmdVisible(!passwordConfirmVisible);
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-login text-font-main-login">
      <form
        className="flex flex-col gap-5 min-w-[350px] bg-bg-display-login p-8 rounded-md"
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
            className=" text-sm h-[40px] rounded-sm bg-bg-input border-none outline-none p-2 text-slate-500" />
        </label>
        <label
          htmlFor="password"
          className="flex flex-col relative">
          <p className="text-[15px] font-medium">Password</p>
          <input
            type={passwordVisible ? 'text' : 'password'}
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" text-sm password h-[40px] rounded-sm bg-bg-input border-none outline-none p-2 text-slate-500" />
            <i onClick={togglePasswordVisibility} className={`cursor-pointer absolute top-[35px] right-[10px] ${passwordVisible ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'}`}></i>
        </label>

        <label
          htmlFor="confirmPassword"
          className="flex flex-col relative">
          <p className="text-[15px] font-medium">Confirm Password</p>
          <input
            type={passwordConfirmVisible ? 'text' : 'password'}
            id="confirmPassword"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={` text-sm password h-[40px] rounded-sm bg-bg-input p-2 text-slate-500 ${styleError} outline-none`} />
            <i onClick={togglePasswordConfirmVisibility} className={`cursor-pointer absolute top-[35px] right-[10px] ${passwordConfirmVisible ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'} `}></i>
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
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../service/firebaseConfig';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function Register() {
  const navigate = useNavigate();

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
    if (passwordValidation) {
      createUserWithEmailAndPassword(email, password);
    } else {
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

  if (error) {
    if (error.code == 'auth/email-already-in-use') {
      setTimeout(() => {
        window.location.reload();
      }, 4000);

      return (
        <div className='flex items-center justify-center min-h-screen bg-bg-login text-font-main-login'>
          <div className='flex flex-col items-center justify-center gap-2 '>
            <h1 className='text-5xl font-semibold'>Error</h1>
            <h2 className='text-2xl font-semibold'>Email &ldquo;{email}&ldquo; já está sendo usado</h2>
            <h2 className='text-1xl font-semibold'>Redirecionando...</h2>
          </div>
        </div>
      )
    } else {
      setTimeout(() => {
        navigate('/');
      }, 4000);

      return (
        <div className='flex items-center justify-center min-h-screen bg-bg-login text-font-main-login'>
          <div className='flex flex-col items-center justify-center gap-2 '>
            <h1 className='text-5xl font-semibold'>Error</h1>
            <h2 className='text-3xl font-semibold'>We are working on it</h2>
            <h2 className='text-1xl font-semibold'>Redirecting...</h2>
          </div>
        </div>
      )
    }
  }

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-screen bg-bg-login text-font-main-login'>
        <i className="text-[70px] absolute animate-spin fa-solid fa-spinner"></i>
      </div>
    )
  }

  if (user) {
    setTimeout(() => {
      navigate('/');
    }, 4000);

    return (
      <div className='min-h-screen flex items-center justify-center bg-bg-login text-font-main-login'>
        <div
          className='flex flex-col items-center justify-center gap-2'>
          <h1 className='text-4xl text-center text-font-main-login'>Successo!</h1>
          <h2 className='text-2xl text-center text-font-main-login'>Sua conta foi criada!</h2>
          <h2 className='text-1xl text-center text-font-main-login'>Redirecionando...</h2>
        </div>
      </div>
    )
  }

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
          <p className="text-[15px] font-medium">Senha</p>
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
          <p className="text-[15px] font-medium">Confirma senha</p>
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
          className="flex justify-end text-sm hover:text-font-main-login duration-500 text-slate-500">Você tem acesso?</Link>
        <button
          className="bg-btn-login h-[40px] rounded-sm font-medium hover:bg-btn-login-confirm duration-500">Register</button>
      </form>
    </div>
  )
}
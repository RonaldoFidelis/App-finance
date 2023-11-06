import { Link } from 'react-router-dom';

export function Register() {

  const handleSubmit = () => { }

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-login text-font-main-login">
      <form
        action=""
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
            className="h-[40px] rounded-sm bg-bg-input border-none outline-none p-2 text-slate-500" />
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
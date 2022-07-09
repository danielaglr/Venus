import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { UserAuth } from '../../contexts/authContext';

function LogIn() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { logIn } = UserAuth();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await logIn(email, password);
            navigate('/');
        } catch (e) {
            console.log(e.message);
        }
    }

  return (
    <>
        <div className='flex justify-center content-center items-center w-full h-screen'>
            <div className='block bg-slate-50 p-6 rounded-xl shadow-md shadow-slate-300 w-[600px]'>
                <form onSubmit={handleSubmit}>
                    <h2 className='text-blue-700 text-3xl font-semibold my-4'>Log In</h2>
                    {/* Email */}
                    <label className='text-sm'>Email</label>
                    <input type='email' className='h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm' onChange={(e) => setEmail(e.target.value)} />
                    {/* Password */}
                    <label className='text-sm'>Password</label>
                    <input type='password' className='h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm mb-[20px]' onChange={(e) => setPassword(e.target.value)} />
                    {/* Submit Button */}
                    <input type='submit' className='bg-blue-700 w-full h-10 cursor-pointer text-white rounded-md hover:bg-blue-600 hover:outline outline-2 outline-blue-600 outline-offset-2 text-sm mb-[10px]' />
                    {/* Log In Text */}
                    <div className='flex justify-center'>
                        <p className='text-xs my-2'>Don't have an account yet?<Link to='/signup'><span className='text-blue-600'> Sign Up.</span></Link></p>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default LogIn;
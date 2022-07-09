import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserAuth } from '../../contexts/authContext';
import { getAuth, updateProfile } from 'firebase/auth';

function SignUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');

    const {createUser} = UserAuth();
    const auth = getAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (password === cpassword) {
                await createUser(email, password);
                await updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    navigate('/');
                }).catch((e) => {
                    console.log(e.message);
                });
            }
        } catch (e) {
            console.log(e.message);
        }
    }

  return (
    <>
        <div className='flex justify-center content-center items-center w-full h-screen'>
            <div className='block bg-slate-50 p-6 rounded-xl shadow-md shadow-slate-300 w-[600px]'>
                <form onSubmit={handleSubmit}>
                    <h2 className='text-blue-700 text-3xl font-semibold my-4'>Register</h2>
                    {/* Display Name */}
                    <label className='text-sm'>Name</label>
                    <input type='text' className='h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm' onChange={(e) => setName(e.target.value)} />
                    {/* Email */}
                    <label className='text-sm'>Email</label>
                    <input type='email' className='h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm' onChange={(e) => setEmail(e.target.value)} />
                    {/* Password */}
                    <label className='text-sm'>Password</label>
                    <input type='password' className='h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm' onChange={(e) => setPassword(e.target.value)} />
                    {/* Confirm Password */}
                    <label className='text-sm'>Confirm Password</label>
                    <input type='password' className='h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm mb-[20px]' onChange={(e) => setCpassword(e.target.value)} />
                    {/* Submit Button */}
                    <input type='submit' className='bg-blue-700 w-full h-10 cursor-pointer text-white rounded-md hover:bg-blue-600 hover:outline outline-2 outline-blue-600 outline-offset-2 text-sm mb-[10px]' />
                    {/* Log In Text */}
                    <div className='flex justify-center'>
                        <p className='text-xs my-2'>Already have an account?<Link to='/login'><span className='text-blue-600'> Log In.</span></Link></p>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default SignUp;
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { navData } from './navdata';
import venusLogo from '../../assets/images/venus-icon.png';
import navToggle from '../../assets/images/navtoggle-icon.png';
import { UserAuth } from '../../contexts/authContext';

function Navbar() {

    const [sidebar, setSidebar] = useState(false);

    const { user, logOut } = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/login');
        } catch (e) {
            console.log(e.message);
        }
    }

    return (
        <div className='flex'>
            <div className={`${sidebar ? 'w-[225px]' : 'w-[50px]'} h-screen bg-slate-800 duration-200 relative`}>
                <div className={`flex ${!sidebar ? 'justify-center' : ''} items-center duration-200 relative mt-[10px]`}>
                    <img src={venusLogo} className='w-[40px] h-[40px] z-0' alt='venus icon' />
                    <span className={`text-white font-medium text-xl ml-[5px] ${!sidebar ? 'hidden' : ''}`}>Venus</span>
                    <img src={navToggle} className={`w-[24px] h-[24px] absolute -right-3 rounded-full border-2 border-slate-800 z-1 ${!sidebar && 'rotate-180'}`} alt='nav toggle' onClick={() => setSidebar(!sidebar)} />
                </div>
                <div>
                    <ul>
                        {navData.map((item, index) => { 
                            return (
                                <Link to={item.path} key={index}>
                                    <li className={`flex ${!sidebar ? 'justify-center' : ''} items-center text-white text-md p-2 duration-200`}>
                                        {item.icon}
                                        <span className={`${!sidebar && 'hidden'} ml-[5px]`}>{item.title}</span>
                                    </li>
                                </Link>
                            )
                        })}
                    </ul>
                </div>
                <div className='flex flex-row justify-between items-center absolute bottom-0 w-full mb-[10px] px-[5px]'>
                    <div className={`${!sidebar ? 'hidden' : 'flex flex-row'}`}>
                        <div className='flex items-center pr-[15px]'>
                            <box-icon name='user' color='white'></box-icon>
                        </div>
                        <div className='text-white text-lg'>
                            {user ? user.displayName : 'Username'}
                        </div>
                    </div>
                    <div onClick={handleLogout} className={`${!sidebar ? 'flex justify-center items-center w-full' : ''} content-center justify-center h-[24px] cursor-pointer`}>
                        <box-icon name='log-out' color='white'> </box-icon>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
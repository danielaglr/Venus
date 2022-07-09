import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { navData } from './navdata';
import venusLogo from '../../assets/images/venus-icon.png';
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
        /* <div className='flex w-[250px] h-screen bg-slate-50 content-center flex-col'>
            <div className='flex justify-start content-center items-center w-[250px] h-[48px] my-[16px] pl-[8px]'>
                <img src={venusLogo} className='w-[48px] h-[48px]' alt='venus icon' />
                <h2 className='flex justify-center content-center text-[24px] leading-[24px] h-[24px] pl-[16px]'> Venus</h2>
            </div>
            <div className='flex flex-col justify-start content-center'>
                {navData.map((item, index) => {
                    return (
                        <Link to={item.path} key={index} className='flex content-center h-[24px] mb-[8px]'>
                            {item.icon}
                            <span className='h-[24px] text-[16px] leading-[24px] text-center pl-[8px]'>{item.title}</span>
                        </Link>
                    )
                })}
            </div>
            <div className='flex flex-row w-[250px] h-[48px] bg-gray-200 absolute bottom-0 justify-between px-[16px]'>
                <div className='flex flex-row'>
                    <div>Img</div>
                    <div>{user && user.displayName}</div>
                </div>
                <div onClick={handleLogout}>
                    <box-icon name='log-out'>
                </box-icon></div>
            </div>
        </div> */
        <div className='flex'>
            <div className={`${sidebar ? 'w-[225px]' : 'w-[50px]'} h-screen bg-slate-800 duration-200 relative`}>
                <div className={`flex ${!sidebar ? 'justify-center' : ''} duration-200`}>
                    <img src={venusLogo} className='w-[32px] h-[32px] mt-[10px]' alt='venus icon' onClick={() => setSidebar(!sidebar)} />
                </div>
                <div>
                    <ul>
                        {navData.map((item, index) => { 
                            return (
                                <Link to={item.path}>
                                    <li key={index} className={`flex ${!sidebar ? 'justify-center' : ''} items-center text-white text-md p-2 duration-200`}>
                                        {item.icon}
                                        <span className={`${!sidebar && 'hidden'}`}>{item.title}</span>
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
                    <div className={`${!sidebar ? 'flex justify-center items-center w-full' : ''} content-center justify-center h-[24px] cursor-pointer`}>
                        <box-icon name='log-out' color='white'> </box-icon>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
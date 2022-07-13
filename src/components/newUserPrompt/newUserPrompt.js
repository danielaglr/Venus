import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getDatabase, update, ref } from 'firebase/database';

import bodybuildIcon from '../../assets/images/seated-dumbbell.png';
import deadliftIcon from '../../assets/images/deadlift.png';
import bodyweightIcon from '../../assets/images/pushup.png';
import { auth } from '../../firebase';



function NewUserPrompt() {

    const [liftType, setLiftType] = useState('');
    const [liftEXP, setLiftEXP] = useState('');
    const [typeSelect, setTypeSelect] = useState('');
    const [expSelect, setEXPSelect] = useState('');

    const navigate = useNavigate();

    async function handlePopUpSubmit() {
        const db = getDatabase();
        await update(ref(db, 'users/' + auth.currentUser.uid + '/liftingStatus/'), {
            trainingGoal: liftType,
            trainingExperience: liftEXP
        }).then(() => {
            navigate('/');
        });
    }

  return (
    <div className='flex justify-center items-center bg-slate-200 w-screen h-screen'>
        <div className='flex flex-col bg-white w-[800px] h-[650px] rounded-[40px] shadow-xl'>
            <h1 className='w-full h-[32px] text-[32px] leading-[32px] m-[30px]'>Welcome, <span className='text-blue-700'>{auth.currentUser.displayName}</span>!</h1>
            <div>
                <h2 className='w-full h-[20px] text-[20px] leading-[20px] text-blue-700 ml-[30px]'>Step 1: <span className='text-black'>Which style of training most aligns with your goals?</span></h2>
                {/* Lift Type Cards */}
                <div className='flex flex-row justify-evenly items-center my-[20px]'>
                    <div onClick={() => {setLiftType('Bodybuilding'); setTypeSelect('mg')}} className={`w-[250px] h-[280px] rounded-[24px] shadow-[0_7px_29px_0_rgba(100,100,111,0.2)] justify-center ${typeSelect === 'mg' ? 'outline outline-2 outline-blue-700' : 'hover:outline outline-2 outline-blue-700 outline-offset-2'}`}>
                        <img src={bodybuildIcon} alt='Dumbbell curl' className='w-[250px] h-[250px]' />
                        <div className='flex w-200px h-20px justify-center items-center'>
                            <span className='w-[250px] h-[30px] text-[20px] leading-[20px] text-center'>Muscle Growth</span>
                        </div>
                    </div>
                    <div onClick={() => {setLiftType('Powerlifting'); setTypeSelect('st')}} className={`w-[250px] h-[280px] rounded-[24px] shadow-[0_7px_29px_0_rgba(100,100,111,0.2)] justify-center ${typeSelect === 'st' ? 'outline outline-2 outline-blue-700' : 'hover:outline outline-2 outline-blue-700 outline-offset-2'}`}>
                        <img src={deadliftIcon} alt='Deadlift' className='w-[250px] h-[250px]' />
                        <div className='flex w-200px h-20px justify-center items-center'>
                            <span className='w-[250px] h-[30px] text-[20px] leading-[20px] text-center'>Strength Training</span>
                        </div>                    </div>
                    <div onClick={() => {setLiftType('Calisthenics'); setTypeSelect('bw')}} className={`w-[250px] h-[280px] rounded-[24px] shadow-[0_7px_29px_0_rgba(100,100,111,0.2)] justify-center ${typeSelect === 'bw' ? 'outline outline-2 outline-blue-700' : 'hover:outline outline-2 outline-blue-700 outline-offset-2'}`}>
                        <img src={bodyweightIcon} alt='Pull ups' className='w-[250px] h-[250px]' />
                        <div className='flex w-200px h-20px justify-center items-center'>
                            <span className='w-[250px] h-[30px] text-[20px] leading-[20px] text-center'>Bodyweight Movement</span>
                        </div>                    </div>
                </div>
            </div>
            <div>
                <h2 className='w-full h-[20px] text-[20px] leading-[20px] text-blue-700 ml-[30px]'>Step 2: <span className='text-black'>How would you classify your lifting experience?</span></h2>
                {/* Experience Buttons */}
                <div className='flex flex-row justify-evenly items-center my-[20px]'>
                    <div onClick={() => {setLiftEXP('Never Lifted'); setEXPSelect('nl')}} className={`flex w-[150px] h-[45px] justify-center items-center bg-slate-100 rounded-[16px] hover:cursor-pointer hover:bg-slate-200 ${expSelect === 'nl' ? 'outline outline-2 outline-blue-700' : ''}`}>
                        <span>Never lifted</span>
                    </div>
                    <div onClick={() => {setLiftEXP('Novice'); setEXPSelect('nvc')}} className={`flex w-[150px] h-[45px] justify-center items-center bg-slate-100 rounded-[16px] hover:cursor-pointer hover:bg-slate-200 ${expSelect === 'nvc' ? 'outline outline-2 outline-blue-700' : ''}`}>
                        <span>Novice</span>
                    </div>
                    <div onClick={() => {setLiftEXP('Intermediate'); setEXPSelect('int')}} className={`flex w-[150px] h-[45px] justify-center items-center bg-slate-100 rounded-[16px] hover:cursor-pointer hover:bg-slate-200 ${expSelect === 'int' ? 'outline outline-2 outline-blue-700' : ''}`}>
                        <span>Intermediate</span>
                    </div>
                    <div onClick={() => {setLiftEXP('Experienced'); setEXPSelect('exp')}} className={`flex w-[150px] h-[45px] justify-center items-center bg-slate-100 rounded-[16px] hover:cursor-pointer hover:bg-slate-200 ${expSelect === 'exp' ? 'outline outline-2 outline-blue-700' : ''}`}>
                        <span>Experienced</span>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='w-full h-[20px] text-[20px] leading-[20px] text-blue-700 ml-[30px]'>Step 3:</h2>
                <div className='flex justify-center items-center w-full'>
                    <input type='button' onClick={handlePopUpSubmit} value='Submit' className='bg-blue-700 w-[700px] h-10 cursor-pointer text-white rounded-md hover:bg-blue-800 hover:outline outline-2 outline-blue-800 outline-offset-2 text-sm my-[20px]' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewUserPrompt;
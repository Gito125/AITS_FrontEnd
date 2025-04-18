import React from 'react'
import logo from '../../assets/images/logo2.webp';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function header() {
  return (
    <> 
      <div className='flex items-center justify-between p-4 bg-blue-600 text-white shadow-2xl'>
        {/*Logo*/}
        <div className='flex items-center bg-blue-600'>
          <img src={logo} className="App-logo rounded-full" alt="logo" width={70} />
          <h2 className='font-bold p-2'>AITS</h2>
        </div>
      
        {/*Message*/}
        <h1 className='text-3xl'>ACADEMIC ISSUE TRACKING SYSTEM</h1>


        {/*Icons*/}
      <div>
        <CircleNotificationsIcon className='mx-2 cursor-pointer'/> 
        <AccountCircleIcon className='mx-2 cursor-pointer'/>
      </div>

    
      </div>
    </>
  )
}

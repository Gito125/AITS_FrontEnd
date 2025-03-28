import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SideBarItem from './SideBarItem'
import AssignmentIcon from '@mui/icons-material/Assignment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import HelpIcon from '@mui/icons-material/Help';
import {Link} from 'react-router-dom';

const SideBar = () => {
  return (
    <>
      <div className='bg-blue-100 w-60 h-screen border-r-2 border-b-2 rounded-br-lg shadow-lg border-blue-600'>
        
        <Link to="/"><SideBarItem Icon={HomeIcon} text={'Home'}/></Link>
        <Link to="/reports"><SideBarItem Icon={AssignmentIcon} text={'Reports'}/></Link>
        <Link to="/notifications"><SideBarItem Icon={NotificationsIcon} text={'Notifications'}/></Link>
        <Link to="/settings"><SideBarItem Icon={SettingsIcon} text={'Settings'}/></Link>
        <Link to="/help"><SideBarItem Icon={HelpIcon} text={'Help & Support'}/></Link>
        <SideBarItem Icon={LogoutIcon} text={'Logout'}/>

      </div>
    </>
  )
}

export default SideBar

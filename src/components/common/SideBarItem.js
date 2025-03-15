import React from 'react'

const SideBarItem = ({Icon, text}) => {
  return (
    <div className='flex items-center p-4 mb-2 space-x-4 hover:bg-gray-400 cursor-pointer'>
        <div className='icon'>
            <Icon />
        </div>

        <p className='font-semibold text-xl ml-3'>{ text }</p>
    </div>
  )
}

export default SideBarItem
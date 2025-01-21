import React from 'react'
import Logo from '../Logo/Logo'

const Footer: React.FC = () => {
  return (
    <div className='border-t flex gap-4 flex-col items-center mt-20 p-10'>
        <Logo />
        <h1>
            Klikk Up 2025. All rights reserved
        </h1>
    </div>
  )
}

export default Footer
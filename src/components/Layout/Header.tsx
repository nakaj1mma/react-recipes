import { Link } from 'react-router'

import CustomInput from '../UI/CustomInput'
import logo from '../../assets/react.svg'

import { FaHeart } from 'react-icons/fa'
import { FaRegUserCircle } from 'react-icons/fa'

export default function Header() {
  return (
    <header className='h-16 bg-cyan-950'>
      <div className='layout flex items-center justify-between'>
        <div className='flex gap-2.5 items-end'>
          <Link to='/'>
            <img
              src={logo}
              alt='logo'
              className='animate-[spin_4s_linear_infinite]'
            />
          </Link>
          <span className='text-blue-400 text-xl'>React Recipes</span>
        </div>
        <CustomInput />
        <ul className='flex gap-4 items-center'>
          <li>
            <Link to='/favorites'>
              <FaHeart fill='#ffff' fontSize='1.2rem' />
            </Link>
          </li>
          <li>
            <Link to='/profile'>
              <FaRegUserCircle fill='#ffff' fontSize='1.2rem' />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

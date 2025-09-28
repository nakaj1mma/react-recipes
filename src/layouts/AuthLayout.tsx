import { Outlet } from 'react-router'

export default function AuthenticationLayout() {
  return (
    <main className='flex justify-center items-center h-screen bg-gray-700'>
      <Outlet />
    </main>
  )
}

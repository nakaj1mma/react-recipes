import { GoSearch } from 'react-icons/go'

export default function CustomInput() {
  return (
    <form className='outline-0 border-2 border-cyan-50 rounded-md flex items-center max-w-96 w-full justify-between'>
      <input
        type='text'
        placeholder='Try to search...'
        className='
         focus:outline-none 
         py-1 px-1.5 text-cyan-50 w-full'
      />
      <button
        type='submit'
        className='p-1 border-l-2 border-l-blue-50 cursor-pointer'
      >
        <GoSearch fill='#ffff' fontSize='1.5rem' />
      </button>
    </form>
  )
}

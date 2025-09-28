import { Form, Link, useNavigate } from 'react-router'
import { useState } from 'react'

import { IoChevronBack } from 'react-icons/io5'
import {
  RiUserFill,
  RiEyeOffFill,
  RiEyeFill,
  RiGoogleFill,
  RiFacebookFill,
} from 'react-icons/ri'
import { MdAlternateEmail } from 'react-icons/md'
import isEmail from 'validator/lib/isEmail'
import { isAlpha, isStrongPassword } from 'validator'

interface AuthFormProps {
  mode: 'login' | 'register'
}

export default function AuthForm({ mode }: AuthFormProps) {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showRepeatedPassword, setShowRepeatedPassword] = useState(false)

  const [errors, setErrors] = useState<{ [key: string]: boolean }>({})

  const errorMessages: { [key: string]: string } = {
    name: 'Name must contain only letters',
    email: 'Please enter a valid email',
    password:
      'Password must be strong (min 8 chars, upper/lowercase, numbers, symbols)',
    repeatPassword: 'Passwords do not match',
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)

    const newErrors: { [key: string]: boolean } = {}

    // Validation
    if (mode === 'login') {
      if (!data.email) newErrors.email = true
      if (!isEmail(data.email as string)) newErrors.email = true
      if (!data.password) newErrors.password = true
      if (!isStrongPassword(data.password as string)) newErrors.password = true
    } else {
      if (!data.name) newErrors.name = true
      if (!isAlpha(data.name as string, 'en-US', { ignore: ' ' }))
        newErrors.name = true
      if (!data.email) newErrors.email = true
      if (!isEmail(data.email as string)) newErrors.email = true
      if (!data.password) newErrors.password = true
      if (!isStrongPassword(data.password as string)) newErrors.password = true
      if (!data.repeatPassword) newErrors.repeatPassword = true
      if (
        data.password &&
        data.repeatPassword &&
        data.password !== data.repeatPassword
      ) {
        newErrors.repeatPassword = true
      }
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) {
      e.preventDefault()
    }
  }

  const inputClass = (field: string) =>
    `w-full rounded-full border-2 px-5 py-3 pr-10 text-base placeholder-white outline-none ${
      errors[field] ? 'border-red-500' : 'border-white/20'
    } bg-transparent`

  return (
    <div className='max-w-md w-full'>
      <button
        type='button'
        className='flex items-center gap-2 text-white hover:underline text-xl mb-2 cursor-pointer'
        onClick={() => navigate(-1)}
      >
        <IoChevronBack /> <span>Back</span>
      </button>
      <div className='rounded-xl border-2 border-white/20 bg-white/10 p-8 shadow-lg backdrop-blur-md text-white'>
        <h2 className='mb-6 text-center text-3xl font-bold'>
          {mode === 'login' ? 'Login' : 'Registration'}
        </h2>

        <Form
          method='POST'
          className='space-y-5 w-full'
          onSubmit={handleSubmit}
        >
          <input type='hidden' name='mode' value={mode} />

          {/* Name */}
          {mode === 'register' && (
            <div className='relative'>
              <input
                type='text'
                placeholder='Name'
                className={inputClass('name')}
                name='name'
                autoComplete='name'
              />
              <RiUserFill className='absolute right-4 top-[1.688rem] -translate-y-1/2 text-lg text-white' />
              {errors.name && (
                <p className='mt-1 text-sm text-red-500'>
                  {errorMessages.name}
                </p>
              )}
            </div>
          )}

          {/* Email */}
          <div className='relative'>
            <input
              type='text'
              placeholder='Email'
              className={inputClass('email')}
              name='email'
              autoComplete='email'
            />
            <MdAlternateEmail className='absolute right-4 top-[1.688rem] -translate-y-1/2 text-lg text-white' />
            {errors.email && (
              <p className='mt-1 text-sm text-red-500'>{errorMessages.email}</p>
            )}
          </div>

          {/* Password */}
          <div className='relative'>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              name='password'
              autoComplete={
                mode === 'login' ? 'current-password' : 'new-password'
              }
              className={inputClass('password')}
            />
            {showPassword ? (
              <RiEyeFill
                onClick={() => setShowPassword(false)}
                className='absolute right-4 top-[1.688rem] -translate-y-1/2 cursor-pointer text-lg'
              />
            ) : (
              <RiEyeOffFill
                onClick={() => setShowPassword(true)}
                className='absolute right-4 top-[1.688rem] -translate-y-1/2 cursor-pointer text-lg'
              />
            )}
            {errors.password && (
              <p className='mt-1 text-sm text-red-500'>
                {errorMessages.password}
              </p>
            )}
          </div>

          {/* Repeat Password */}
          {mode === 'register' && (
            <div className='relative'>
              <input
                type={showRepeatedPassword ? 'text' : 'password'}
                placeholder='Repeat password'
                name='repeatPassword'
                autoComplete='new-password'
                className={inputClass('repeatPassword')}
              />
              {showRepeatedPassword ? (
                <RiEyeFill
                  onClick={() => setShowRepeatedPassword(false)}
                  className='absolute right-4 top-[1.688rem] -translate-y-1/2 cursor-pointer text-lg'
                />
              ) : (
                <RiEyeOffFill
                  onClick={() => setShowRepeatedPassword(true)}
                  className='absolute right-4 top-[1.688rem] -translate-y-1/2 cursor-pointer text-lg'
                />
              )}
              {errors.repeatPassword && (
                <p className='mt-1 text-sm text-red-500'>
                  {errorMessages.repeatPassword}
                </p>
              )}
            </div>
          )}

          {mode === 'login' && (
            <div className='flex items-center justify-between text-sm'>
              <label className='flex items-center gap-2'>
                <input
                  type='checkbox'
                  className='h-4 w-4 cursor-pointer accent-white'
                  name='rememberMe'
                  autoComplete='rememberMe'
                />
                Remember me
              </label>
              <Link to='#' className='hover:underline'>
                Forgot Password?
              </Link>
            </div>
          )}

          <button
            type='submit'
            className='w-full rounded-full bg-white py-3 font-semibold text-[#0a2862] shadow-md transition hover:opacity-90'
          >
            {mode === 'login' ? 'Login' : 'Registration'}
          </button>
          {/* Social buttons */}
          <div className='flex items-center justify-center gap-6'>
            <Link to='#' className='flex items-center gap-2 hover:opacity-80'>
              <RiGoogleFill className='text-xl' /> Google
            </Link>
            <Link to='#' className='flex items-center gap-2 hover:opacity-80'>
              <RiFacebookFill className='text-xl' /> Facebook
            </Link>
          </div>
          {/* Authentication options */}
          <div className='flex justify-center text-gray-400 gap-2'>
            {mode === 'login' ? (
              <>
                <p>Not registered yet?</p>
                <Link to='/auth/register' className='text-blue-400'>
                  Sign up now.
                </Link>
              </>
            ) : (
              <>
                <p>Already registered?</p>
                <Link to='/auth/login' className='text-blue-400'>
                  Log in now.
                </Link>
              </>
            )}
          </div>
        </Form>
      </div>
    </div>
  )
}

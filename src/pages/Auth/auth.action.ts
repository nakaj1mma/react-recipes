import axios from 'axios'
import type { RegisterModel } from '../../models/register.model'
import type { LoginModel } from '../../models/login.model'

export const action = async ({ request }: { request: Request }) => {
  const API_URL = import.meta.env.VITE_API_URL
  if (!API_URL) throw new Error('API_URL не задана в .env')

  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  try {
    if (data.mode === 'login') {
      const login: LoginModel = {
        email: data.email as string,
        password: data.password as string,
        rememberMe: data.rememberMe === 'on',
      }

      const response = await axios.post<LoginModel>(
        `${API_URL}/auth/login`,
        login
      )

      console.log(response)
    } else if (data.mode === 'register') {
      const register: RegisterModel = {
        name: data.name as string,
        email: data.email as string,
        password: data.password as string,
        repeatPassword: data.repeatPassword as string,
      }

      const response = await axios.post<RegisterModel>(
        `${API_URL}/auth/register`,
        register
      )

      console.log(response)
    }
  } catch (error: any) {
    console.error('Ошибка:', error.message || error)
  }
}

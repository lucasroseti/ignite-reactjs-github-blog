import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface User {
  login: string
  avatar_url: string
  html_url: string
  name: string
  company: string
  bio: string
  followers: number
}

interface BlogContextType {
  user: User
}

interface ContextProviderProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogProvider({ children }: ContextProviderProps) {
  const [user, setUser] = useState<User>({
    login: '',
    avatar_url: '',
    html_url: '',
    name: '',
    company: '',
    bio: '',
    followers: 0,
  })

  const fetchUser = useCallback(async () => {
    const response = await api.get('users/lucasroseti')

    setUser(response.data)
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <BlogContext.Provider value={{ user }}>{children}</BlogContext.Provider>
  )
}

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

interface Issue {
  id: number
  title: string
  body: string
  created_at: Date
}

interface BlogContextType {
  user: User
  issues: Issue[]
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
  const [issues, setIssues] = useState<Issue[]>([])

  const fetchUser = useCallback(async () => {
    const response = await api.get('users/lucasroseti')

    setUser(response.data)
  }, [])

  const fetchIssues = useCallback(async (query?: string) => {
    const response = await api.get(
      `search/issues?q=${
        query || ''
      }repo:lucasroseti/ignite-reactjs-github-blog`,
    )

    setIssues(response.data.items)
  }, [])

  useEffect(() => {
    fetchUser()
    fetchIssues()
  }, [fetchUser, fetchIssues])

  return (
    <BlogContext.Provider value={{ user, issues }}>
      {children}
    </BlogContext.Provider>
  )
}

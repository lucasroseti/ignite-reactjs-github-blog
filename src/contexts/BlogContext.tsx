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
  number: number
  title: string
  body: string
  created_at: Date
}

interface IssuePost {
  number: number
  title: string
  body: string
  html_url: string
  user: User
  comments: number
  created_at: Date
}

interface BlogContextType {
  user: User
  issues: Issue[]
  issue: IssuePost
  fetchIssues: (query?: string) => Promise<void>
  fetchIssue: (id: string) => Promise<void>
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
  const [issue, setIssue] = useState<IssuePost>({
    number: 0,
    title: '',
    body: '',
    html_url: '',
    user: {
      login: '',
      avatar_url: '',
      html_url: '',
      name: '',
      company: '',
      bio: '',
      followers: 0,
    },
    comments: 0,
    created_at: new Date(),
  })

  const fetchUser = useCallback(async () => {
    const response = await api.get('users/lucasroseti')

    setUser(response.data)
  }, [])

  const fetchIssue = useCallback(async (id: string) => {
    const response = await api.get(
      `repos/lucasroseti/ignite-reactjs-github-blog/issues/${id}`,
    )

    setIssue(response.data)
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
    <BlogContext.Provider
      value={{ user, issues, issue, fetchIssues, fetchIssue }}
    >
      {children}
    </BlogContext.Provider>
  )
}

import { useContext } from 'react'

import { BlogContext } from '../../contexts/BlogContext'

import { Post } from './components/Post'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'

import {
  BlogContainer,
  BlogContent,
  BlogPostHeader,
  BlogPosts,
  BlogPostTitle,
} from './styles'

export function Blog() {
  const { issues } = useContext(BlogContext)

  const totalIssues = issues.length

  return (
    <BlogContainer>
      <Profile />

      <BlogContent>
        <BlogPostHeader>
          <BlogPostTitle>
            Publicações
            <span>{totalIssues} publicações</span>
          </BlogPostTitle>
          <SearchForm />
        </BlogPostHeader>

        <BlogPosts>
          {issues.map((post) => (
            <Post
              key={post.number}
              id={post.number}
              title={post.title}
              description={post.body}
              createdAt={post.created_at}
            />
          ))}
        </BlogPosts>
      </BlogContent>
    </BlogContainer>
  )
}

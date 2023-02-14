import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import { BlogContext } from '../../contexts/BlogContext'
import { Info } from './components/Info'

import { PostContainer, PostDescription } from './styles'

export function Post() {
  const { id } = useParams()
  const { issue, fetchIssue } = useContext(BlogContext)

  useEffect(() => {
    fetchIssue(id || '')
  }, [id, fetchIssue])

  return (
    <PostContainer>
      <Info
        title={issue.title}
        htmlUrl={issue.html_url}
        comments={issue.comments}
        user={issue.user.login}
        createdAt={issue.created_at}
      />

      <PostDescription>
        <div>
          <ReactMarkdown>{issue.body}</ReactMarkdown>
        </div>
      </PostDescription>
    </PostContainer>
  )
}

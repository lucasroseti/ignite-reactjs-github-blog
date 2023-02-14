import { useFormatDate } from '../../../../hooks/useFormatDate'

import { PostContainer, PostDescription, PostHeader } from './styles'

interface PostProps {
  id: number
  title: string
  description: string
  createdAt: Date
}

export function Post({ id, title, description, createdAt }: PostProps) {
  const {
    createdAtFormatDate,
    createdAtDateFormatted,
    createdAtDateRelativeToNow,
  } = useFormatDate(createdAt)

  return (
    <PostContainer to={`/post/${id}`}>
      <PostHeader>
        {title}
        <time
          title={createdAtDateFormatted}
          dateTime={createdAtFormatDate.toISOString()}
        >
          {createdAtDateRelativeToNow}
        </time>
      </PostHeader>

      <PostDescription>{description}</PostDescription>
    </PostContainer>
  )
}

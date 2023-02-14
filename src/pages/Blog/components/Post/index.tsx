import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { PostContainer, PostDescription, PostHeader } from './styles'

interface PostProps {
  id: number
  title: string
  description: string
  createdAt: Date
}

export function Post({ id, title, description, createdAt }: PostProps) {
  const createdAtFormatDate = new Date(createdAt)
  const createdAtDateFormatted = format(
    createdAtFormatDate,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR },
  )
  const createdAtDateRelativeToNow = formatDistanceToNow(createdAtFormatDate, {
    locale: ptBR,
    addSuffix: true,
  })

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

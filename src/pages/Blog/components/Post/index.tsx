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
  const createdAtDateFormatted = format(
    createdAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR },
  )
  const createdAtDateRelativeToNow = formatDistanceToNow(createdAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <PostContainer>
      <PostHeader>
        {title}
        <time title={createdAtDateFormatted} dateTime={createdAt.toISOString()}>
          {createdAtDateRelativeToNow}
        </time>
      </PostHeader>

      <PostDescription>{description}</PostDescription>
    </PostContainer>
  )
}

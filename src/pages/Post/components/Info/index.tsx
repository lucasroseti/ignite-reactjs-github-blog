import { NavLink } from 'react-router-dom'
import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import {
  InfoContainer,
  InfoContent,
  InfoHeader,
  InfoTags,
  InfoTitle,
} from './styles'

interface InfoProps {
  title: string
  htmlUrl: string
  comments: number
  user: string
  createdAt: Date
}

export function Info({ title, htmlUrl, comments, user, createdAt }: InfoProps) {
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
    <InfoContainer>
      <InfoContent>
        <InfoHeader>
          <NavLink to="/" title="Voltar">
            <CaretLeft size={16} />
            VOLTAR
          </NavLink>
          <a href={htmlUrl}>
            VER NO GITHUB
            <ArrowSquareOut size={16} />
          </a>
        </InfoHeader>

        <InfoTitle>{title}</InfoTitle>

        <InfoTags>
          <span>
            <GithubLogo weight="fill" /> {user}
          </span>
          <span>
            <Calendar weight="fill" />{' '}
            <time
              title={createdAtDateFormatted}
              dateTime={createdAtFormatDate.toISOString()}
            >
              {createdAtDateRelativeToNow}
            </time>
          </span>
          <span>
            <ChatCircle weight="fill" />
            {comments} comentários
          </span>
        </InfoTags>
      </InfoContent>
    </InfoContainer>
  )
}

import { NavLink } from 'react-router-dom'
import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'

import { useFormatDate } from '../../../../hooks/useFormatDate'

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
  const {
    createdAtFormatDate,
    createdAtDateFormatted,
    createdAtDateRelativeToNow,
  } = useFormatDate(createdAt)

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

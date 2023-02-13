import { NavLink } from 'react-router-dom'
import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'

import {
  InfoContainer,
  InfoContent,
  InfoHeader,
  InfoTags,
  InfoTitle,
} from './styles'

export function Info() {
  return (
    <InfoContainer>
      <InfoContent>
        <InfoHeader>
          <NavLink to="/" title="Voltar">
            <CaretLeft size={16} />
            VOLTAR
          </NavLink>
          <a href="https://github.com/lucasroseti">
            VER NO GITHUB
            <ArrowSquareOut size={16} />
          </a>
        </InfoHeader>

        <InfoTitle>JavaScript data types and data structures</InfoTitle>

        <InfoTags>
          <span>
            <GithubLogo weight="fill" /> lucasroseti
          </span>
          <span>
            <Calendar weight="fill" /> Há um dia
          </span>
          <span>
            <ChatCircle weight="fill" />5 comentários
          </span>
        </InfoTags>
      </InfoContent>
    </InfoContainer>
  )
}

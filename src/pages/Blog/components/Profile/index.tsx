import { useContextSelector } from 'use-context-selector'
import {
  ArrowSquareOut,
  Buildings,
  GithubLogo,
  UsersThree,
} from 'phosphor-react'

import { BlogContext } from '../../../../contexts/BlogContext'

import {
  ProfileContainer,
  ProfileContent,
  ProfileDescription,
  ProfileHeader,
  ProfileTags,
} from './styles'

export function Profile() {
  const user = useContextSelector(BlogContext, (context) => {
    return context.user
  })

  return (
    <ProfileContainer>
      <img src={user.avatar_url} alt="" />

      <ProfileContent>
        <ProfileHeader>
          <span>{user.name}</span>
          <a href={user.html_url}>
            GITHUB
            <ArrowSquareOut size={16} />
          </a>
        </ProfileHeader>

        <ProfileDescription>
          <span>{user.bio}</span>

          <ProfileTags>
            <span>
              <GithubLogo weight="fill" /> {user.login}
            </span>
            <span>
              <Buildings weight="fill" /> {user.company}
            </span>
            <span>
              <UsersThree weight="fill" />
              {user.followers} seguidores
            </span>
          </ProfileTags>
        </ProfileDescription>
      </ProfileContent>
    </ProfileContainer>
  )
}

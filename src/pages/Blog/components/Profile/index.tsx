import {
  ArrowSquareOut,
  Buildings,
  GithubLogo,
  UsersThree,
} from 'phosphor-react'

import {
  ProfileContainer,
  ProfileContent,
  ProfileDescription,
  ProfileHeader,
  ProfileTags,
} from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/lucasroseti.png" alt="" />

      <ProfileContent>
        <ProfileHeader>
          <span>Lucas Roseti</span>
          <a href="https://github.com/lucasroseti">
            GITHUB
            <ArrowSquareOut size={16} />
          </a>
        </ProfileHeader>

        <ProfileDescription>
          <span>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </span>

          <ProfileTags>
            <span>
              <GithubLogo weight="fill" /> lucasroseti
            </span>
            <span>
              <Buildings weight="fill" /> Rocketseat
            </span>
            <span>
              <UsersThree weight="fill" />
              32 seguidores
            </span>
          </ProfileTags>
        </ProfileDescription>
      </ProfileContent>
    </ProfileContainer>
  )
}

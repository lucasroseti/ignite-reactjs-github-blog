import { HeaderContainer } from './styles'

import { EffectLeft, EffectRight, GitHubLogoSVG } from '../../assets'

export function Header() {
  return (
    <HeaderContainer>
      <img src={EffectLeft} alt="" />
      <img src={GitHubLogoSVG} alt="" />
      <img src={EffectRight} alt="" />
    </HeaderContainer>
  )
}

import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme['blue-dark'][700]};

  .logo {
    margin-top: -4rem;
  }
`

import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 864px;
  background: ${({ theme }) => theme['blue-dark'][700]};
  margin: -5.5rem auto 0;
  padding: 2rem 2.5rem 2rem 2rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  gap: 2rem;

  img {
    width: 9.25rem;
    border-radius: 8px;
  }
`

export const ProfileContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
`

export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    color: ${({ theme }) => theme.slate[50]};
    font-size: 1.5rem;
    font-weight: 700;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${({ theme }) => theme.blue[300]};
    font-size: 0.75rem;
    font-weight: 700;
    text-decoration: none;
  }
`

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  span {
    color: ${({ theme }) => theme.slate[250]};
    line-height: 1.6;
  }
`

export const ProfileTags = styled.div`
  display: flex;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.slate[200]};
    line-height: 1.6;
  }

  svg {
    color: ${({ theme }) => theme.slate[500]};
  }
`

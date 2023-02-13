import styled from 'styled-components'

export const InfoContainer = styled.div`
  width: 100%;
  max-width: 864px;
  background: ${({ theme }) => theme['blue-dark'][700]};
  margin: -5.5rem auto 0;
  padding: 2rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  display: flex;
  flex-direction: row;
`

export const InfoContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;

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

export const InfoTitle = styled.span`
  color: ${({ theme }) => theme.slate[50]};
  font-size: 1.5rem;
  font-weight: 700;
  margin: 1.25rem 0 0.5rem;
`

export const InfoTags = styled.div`
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

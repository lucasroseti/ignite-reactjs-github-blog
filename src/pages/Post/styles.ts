import styled from 'styled-components'

export const PostContainer = styled.div``

export const PostDescription = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  border-radius: 10px;

  display: flex;
  flex-direction: row;

  div {
    flex: 1;
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-direction: column;
    line-height: 1.6;
    color: ${({ theme }) => theme.slate[250]};

    a {
      color: ${({ theme }) => theme.blue[300]};
      text-decoration: underline;
    }

    code {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      gap: 0.5rem;
      background: ${({ theme }) => theme['blue-dark'][600]};
      border-radius: 2px;
    }
  }
`

import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;

  input {
    padding: 0.75rem 1rem;
    background: ${({ theme }) => theme['blue-dark'][900]};
    color: ${({ theme }) => theme.slate[250]};
    border: 1px solid ${({ theme }) => theme['blue-dark'][400]};
    border-radius: 6px;
    line-height: 1.6;

    &::placeholder {
      color: ${({ theme }) => theme.slate[500]};
    }
  }
`

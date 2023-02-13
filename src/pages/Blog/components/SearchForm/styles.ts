import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.75rem;

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

export const SearchFormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.125rem;
  line-height: 1.6;

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.slate[300]};
  }
`

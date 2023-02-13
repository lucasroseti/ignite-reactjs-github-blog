import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const PostContainer = styled(NavLink)`
  width: 100%;
  max-width: 416px;
  background: ${({ theme }) => theme['blue-dark'][700]};
  margin: 0 auto;
  padding: 2rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  text-decoration: none;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  :hover {
    border: 2px solid ${({ theme }) => theme.slate[500]};
  }
`

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.slate[50]};

  time {
    min-width: 3.5rem;
    font-size: 0.875rem;
    font-weight: 400;
    color: ${({ theme }) => theme.slate[300]};
  }
`

export const PostDescription = styled.span`
  overflow: hidden;
  max-height: 8rem;
  -webkit-box-orient: vertical;
  display: block;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  line-height: 1.6;
  color: ${({ theme }) => theme.slate[250]};
`

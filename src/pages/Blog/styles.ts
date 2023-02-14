import styled from 'styled-components'

export const BlogContainer = styled.section``

export const BlogContent = styled.main`
  width: 100%;
  max-width: 864px;
  margin: 4.5rem auto 14.625rem;

  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const BlogPostHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const BlogPostTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.125rem;
  line-height: 1.6;

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.slate[300]};
  }
`

export const BlogPosts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

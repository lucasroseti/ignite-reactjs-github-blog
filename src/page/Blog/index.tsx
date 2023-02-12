import { Header } from '../../components/Header'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'

import { BlogContainer, BlogContent } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <Header />
      <Profile />

      <BlogContent>
        <SearchForm />
      </BlogContent>
    </BlogContainer>
  )
}
